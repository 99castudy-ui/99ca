// AI Service for Answer Analysis (Gemini + OpenAI fallback)
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

// Model configuration - try these in order if one fails
// Using the REST API format: https://generativelanguage.googleapis.com/v1/models/{model}:generateContent
const GEMINI_MODEL_OPTIONS = [
  'gemini-2.5-flash',  // Fastest, cost-effective (current stable replacement for gemini-1.5-flash)
  'gemini-2.5-pro',    // More capable (current stable replacement for gemini-1.5-pro)
];

// OpenAI model options
const OPENAI_MODEL_OPTIONS = [
  'gpt-4o-mini',  // Fast and cost-effective
  'gpt-4o',       // More capable fallback
];

// Build the analysis prompt
const buildAnalysisPrompt = (userAnswer, modelAnswer, question, rubric) => {
  const rubricDescription = rubric.map((r, index) => 
    `${index}. ${r.description} (Max: ${r.maxScore} marks)${r.criterion ? `\n   Expected: ${r.criterion}` : ''}`
  ).join('\n\n');

  return `You are an expert CA Final examiner. Analyze the student's answer STEP-BY-STEP by comparing it with the model answer structure.

**QUESTION:**
${question}

**MODEL ANSWER (showing step-by-step approach and scoring pattern):**
${modelAnswer}

**STUDENT'S ANSWER:**
${userAnswer}

**SCORING RUBRIC (each criterion must be scored independently):**
${rubricDescription}

**ANALYSIS INSTRUCTIONS:**

1. **Step-wise Comparison:**
   - Identify each step/component in the model answer
   - Check if the student covered each step
   - Evaluate accuracy, completeness, and methodology for each step

2. **Criterion-wise Scoring:**
   - Score EACH criterion from 0 to max marks based on the rubric
   - Award partial marks where appropriate (e.g., 0.5, 0.25 for partial correctness)
   - Be strict but fair - accuracy is crucial in CA exams

3. **Step-specific Feedback:**
   - For each criterion, identify which step(s) it relates to
   - Provide specific feedback on what was done well
   - Point out errors, omissions, or improvements needed

4. **Overall Assessment:**
   - Provide comprehensive feedback on the answer structure
   - Highlight strengths and weaknesses
   - Give actionable suggestions for improvement

**OUTPUT FORMAT (strict JSON only, no markdown):**
{
  "stepAnalysis": [
    {
      "stepNumber": 1,
      "stepName": "Description of step",
      "studentCovered": true,
      "accuracy": "excellent",
      "feedback": "Specific feedback on this step"
    }
  ],
  "scores": {
    "0": {
      "score": 0.75,
      "maxScore": 1,
      "feedback": "Detailed feedback for this criterion...",
      "stepsRelated": [1, 2],
      "strengths": ["what was good"],
      "weaknesses": ["what needs improvement"]
    }
  },
  "totalScore": 4.75,
  "maxTotalScore": 5,
  "overallFeedback": "Comprehensive overall assessment of the answer...",
  "suggestions": [
    "Specific actionable suggestion 1",
    "Specific actionable suggestion 2"
  ],
  "stepCoverage": {
    "covered": 4,
    "total": 5,
    "percentage": 80
  }
}

**IMPORTANT:**
- Compare step-by-step, not just overall content
- Each rubric criterion should be scored independently
- Partial marks: 0.25 for minor attempt, 0.5 for partial correctness, 0.75 for mostly correct
- Total score must equal sum of individual criterion scores
- Return ONLY valid JSON, no explanatory text outside JSON`;
};

// Parse and validate the AI response
const parseAndValidateResponse = (responseText) => {
  // Extract JSON from response (handle markdown code blocks)
  let jsonText = responseText.trim();
  if (jsonText.includes('```json')) {
    jsonText = jsonText.split('```json')[1].split('```')[0].trim();
  } else if (jsonText.includes('```')) {
    jsonText = jsonText.split('```')[1].split('```')[0].trim();
  }

  // Remove any leading/trailing non-JSON text
  const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    jsonText = jsonMatch[0];
  }

  const analysis = JSON.parse(jsonText);
  
  // Validate and calculate total score
  const calculatedTotal = Object.values(analysis.scores || {}).reduce(
    (sum, s) => sum + (parseFloat(s.score) || 0), 
    0
  );
  
  // Update total score if calculation differs (with tolerance)
  if (Math.abs(calculatedTotal - (analysis.totalScore || 0)) > 0.01) {
    analysis.totalScore = calculatedTotal;
  }
  
  return {
    success: true,
    ...analysis
  };
};

// Try Gemini API
const tryGeminiAPI = async (prompt) => {
  if (!GEMINI_API_KEY) {
    return null; // Skip if no API key
  }

  for (const modelName of GEMINI_MODEL_OPTIONS) {
    try {
      // Try v1 first (most stable), then v1beta as fallback
      const apiVersions = ['v1', 'v1beta'];
      
      for (const version of apiVersions) {
        try {
          const apiUrl = `https://generativelanguage.googleapis.com/${version}/models/${modelName}:generateContent`;
          
          const response = await fetch(`${apiUrl}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contents: [{
                parts: [{
                  text: prompt
                }]
              }],
              generationConfig: {
                temperature: 0.3,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 2048,
              }
            })
          });

          if (!response.ok) {
            continue; // Try next version/model
          }

          const data = await response.json();
          
          if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
            continue; // Try next version/model
          }
          
          const responseText = data.candidates[0].content.parts[0].text;
          return parseAndValidateResponse(responseText);
        } catch (error) {
          // If this is a JSON parse error, don't try other models/versions
          if (error instanceof SyntaxError) {
            throw new Error('Failed to parse AI response. Please try again.');
          }
          continue; // Try next version/model
        }
      }
    } catch (error) {
      continue; // Try next model
    }
  }
  
  return null; // All Gemini attempts failed
};

// Try OpenAI API
const tryOpenAIAPI = async (prompt) => {
  if (!OPENAI_API_KEY) {
    return null; // Skip if no API key
  }

  for (const modelName of OPENAI_MODEL_OPTIONS) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: modelName,
          messages: [
            {
              role: 'system',
              content: 'You are an expert CA Final examiner. Analyze student answers and provide detailed feedback in JSON format.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.3,
          max_tokens: 2048,
          response_format: { type: 'json_object' }
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: { message: `HTTP ${response.status}` } }));
        continue; // Try next model
      }

      const data = await response.json();
      
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        continue; // Try next model
      }
      
      const responseText = data.choices[0].message.content;
      return parseAndValidateResponse(responseText);
    } catch (error) {
      // If this is a JSON parse error, don't try other models
      if (error instanceof SyntaxError) {
        throw new Error('Failed to parse AI response. Please try again.');
      }
      continue; // Try next model
    }
  }
  
  return null; // All OpenAI attempts failed
};

export const analyzeAnswer = async (userAnswer, modelAnswer, question, rubric) => {
  if (!GEMINI_API_KEY && !OPENAI_API_KEY) {
    throw new Error('No API keys configured. Please set VITE_GEMINI_API_KEY or VITE_OPENAI_API_KEY in your .env file');
  }

  // Build the analysis prompt
  const prompt = buildAnalysisPrompt(userAnswer, modelAnswer, question, rubric);

  // Try Gemini API first (primary)
  try {
    const result = await tryGeminiAPI(prompt);
    if (result) {
      return result;
    }
  } catch (error) {
    // If it's a parse error, throw it immediately
    if (error.message.includes('Failed to parse')) {
      throw error;
    }
    // Otherwise, continue to OpenAI fallback
  }

  // Try OpenAI API as fallback
  try {
    const result = await tryOpenAIAPI(prompt);
    if (result) {
      return result;
    }
  } catch (error) {
    // If it's a parse error, throw it immediately
    if (error.message.includes('Failed to parse')) {
      throw error;
    }
    // Otherwise, continue to error handling
  }
  
  // If all APIs failed, provide detailed error message
  const troubleshooting = `
  
TROUBLESHOOTING STEPS:

For Gemini API:
1. Enable Generative AI API in Google Cloud Console:
   - Go to: https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com
   - Click "Enable" if not already enabled

2. Verify API Key Permissions:
   - Go to: https://console.cloud.google.com/apis/credentials
   - Check that your API key has access to Generative Language API

3. Check API Key Restrictions:
   - Make sure your API key isn't restricted to specific APIs
   - Or if restricted, ensure "Generative Language API" is included

4. Try creating a new API key:
   - Go to: https://aistudio.google.com/app/apikey
   - Create a new key and update your .env file

For OpenAI API:
1. Get an API key from: https://platform.openai.com/api-keys
2. Set VITE_OPENAI_API_KEY in your .env file
3. Ensure you have credits/quota available in your OpenAI account
4. Check API usage limits: https://platform.openai.com/usage`;
  
  throw new Error(`All AI services failed. Please check your API keys and quota limits.${troubleshooting}`);
};


