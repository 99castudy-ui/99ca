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

// Calculate similarity between two texts (simple word-based)
const calculateSimilarity = (text1, text2) => {
  const normalize = (text) => text.toLowerCase().replace(/[^\w\s]/g, ' ').split(/\s+/).filter(w => w.length > 2);
  const words1 = new Set(normalize(text1));
  const words2 = new Set(normalize(text2));
  
  if (words1.size === 0 || words2.size === 0) return 0;
  
  const intersection = new Set([...words1].filter(w => words2.has(w)));
  const union = new Set([...words1, ...words2]);
  
  return intersection.size / union.size;
};

// Build the analysis prompt
const buildAnalysisPrompt = (userAnswer, modelAnswer, question, rubric) => {
  const rubricDescription = rubric.map((r, index) => 
    `${index}. ${r.description} (Max: ${r.maxScore} marks)${r.criterion ? `\n   Expected: ${r.criterion}` : ''}`
  ).join('\n\n');

  // Check if answer is too similar to question (likely copied)
  const questionSimilarity = calculateSimilarity(userAnswer, question);
  const isLikelyCopied = questionSimilarity > 0.7; // More than 70% similarity

  return `You are an expert CA Final examiner. Analyze the student's answer STEP-BY-STEP by comparing it with the model answer structure.

**QUESTION:**
${question}

**MODEL ANSWER (showing step-by-step approach and scoring pattern):**
${modelAnswer}

**STUDENT'S ANSWER:**
${userAnswer}

**SCORING RUBRIC (each criterion must be scored independently):**
${rubricDescription}

**CRITICAL VALIDATION CHECK:**

${isLikelyCopied ? `⚠️ WARNING: The student's answer appears to be largely copied from the question text (${Math.round(questionSimilarity * 100)}% similarity detected). 
- If the answer is just repeating the question without providing actual calculations, solutions, or explanations, award ZERO marks (0) for ALL criteria.
- Only award marks if the student has provided actual work, calculations, or substantive answers beyond just restating the question.
- Be very strict: copying the question is NOT an answer.` : `The student's answer appears to be original work. Proceed with normal evaluation.`}

**ANALYSIS INSTRUCTIONS:**

1. **First, Validate Answer Quality:**
   - Check if the student's answer contains actual calculations, solutions, or explanations
   - If the answer only repeats the question text without providing solutions, award 0 marks
   - If the answer contains calculations/analysis but is incomplete, award partial marks appropriately
   - A valid answer must show WORK, not just restate the problem

2. **Step-wise Comparison:**
   - Identify each step/component in the model answer
   - Check if the student covered each step with actual work
   - Evaluate accuracy, completeness, and methodology for each step
   - Ignore steps where the student only copied question text without solving

3. **Criterion-wise Scoring:**
   - Score EACH criterion from 0 to max marks based on the rubric
   - If the answer is just the question copied: award 0 marks for ALL criteria
   - Award partial marks only if there is actual work/calculations (e.g., 0.5, 0.25 for partial correctness)
   - Be strict but fair - accuracy is crucial in CA exams
   - NO marks for just restating the problem statement

4. **Step-specific Feedback:**
   - For each criterion, identify which step(s) it relates to
   - If the answer was copied from question, explicitly state: "The answer appears to be a copy of the question text without providing actual solutions. No marks can be awarded."
   - Provide specific feedback on what was done well (if any actual work was done)
   - Point out errors, omissions, or improvements needed

5. **Overall Assessment:**
   - If answer is just copied question: Clearly state this is not acceptable and explain why
   - Provide comprehensive feedback on the answer structure (if actual work was provided)
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

**CRITICAL SCORING RULES:**
- If the answer is just a copy of the question: ALL scores must be 0 (zero)
- If the answer contains actual work but is incomplete: award partial marks appropriately
- If the answer contains actual work and is correct: award full or near-full marks
- Partial marks: 0.25 for minor attempt, 0.5 for partial correctness, 0.75 for mostly correct
- Total score must equal sum of individual criterion scores
- Be strict: Restating the problem is NOT solving it

**IMPORTANT:**
- Compare step-by-step, not just overall content
- Each rubric criterion should be scored independently
- Validate that the answer contains actual solutions, not just the question text
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

// Validate if the answer is meaningful
const isValidAnswer = (answer) => {
  if (!answer) return false;
  
  const trimmed = answer.trim();
  
  // Check for empty or whitespace-only
  if (trimmed.length === 0) return false;
  
  // Check for very short answers (less than 15 characters)
  if (trimmed.length < 15) {
    // Common meaningless patterns
    const meaninglessPatterns = [
      /^\.{1,}$/,           // Just dots: "...", "..", "."
      /^\.{1,}\s*$/,        // Dots with optional whitespace
      /^[\.\s]+$/,          // Only dots and spaces
      /^as$/,               // Just "as"
      /^test$/i,            // Just "test"
      /^answer$/i,          // Just "answer"
      /^\.{1,3}$/,          // 1-3 dots
      /^[\.\-_]{2,}$/,      // Repeated punctuation
      /^[a-z]{1,2}$/i,      // 1-2 letter words
    ];
    
    // Check if it matches any meaningless pattern
    if (meaninglessPatterns.some(pattern => pattern.test(trimmed))) {
      return false;
    }
    
    // Count meaningful words (at least 2 characters each)
    const words = trimmed.split(/\s+/).filter(w => w.length >= 2);
    if (words.length < 3) {
      return false;
    }
  }
  
  // Check if answer is mostly punctuation or special characters
  const alphanumericCount = trimmed.replace(/[^a-zA-Z0-9]/g, '').length;
  if (alphanumericCount < 10) {
    return false;
  }
  
  return true;
};

export const analyzeAnswer = async (userAnswer, modelAnswer, question, rubric) => {
  if (!GEMINI_API_KEY && !OPENAI_API_KEY) {
    throw new Error('No API keys configured. Please set VITE_GEMINI_API_KEY or VITE_OPENAI_API_KEY in your .env file');
  }

  // Validate that the student provided a meaningful answer
  if (!isValidAnswer(userAnswer)) {
    throw new Error('Please provide a complete answer before analysis. Your answer appears to be empty or too short. A meaningful answer should contain at least a few sentences explaining your approach.');
  }

  // Check if answer is too similar to question (likely just copied)
  const questionSimilarity = calculateSimilarity(userAnswer, question);
  if (questionSimilarity > 0.75) {
    // If more than 75% similar, it's likely just the question copied
    // Still send to AI for final validation, but the prompt will handle it
    // This check is mainly for logging/debugging
    console.warn(`High similarity detected (${Math.round(questionSimilarity * 100)}%) between answer and question. AI will evaluate and likely award zero marks.`);
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


