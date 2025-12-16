// Test script to check Gemini API connectivity
// Run this in browser console to diagnose API issues

export const testGeminiAPI = async () => {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!API_KEY) {
    console.error('❌ API Key not found in environment variables');
    return;
  }
  
  console.log('🔑 API Key found:', API_KEY.substring(0, 10) + '...');
  
  const models = ['gemini-1.5-flash', 'gemini-1.5-pro', 'gemini-pro'];
  const versions = ['v1beta', 'v1'];
  
  for (const model of models) {
    for (const version of versions) {
      const url = `https://generativelanguage.googleapis.com/${version}/models/${model}:generateContent?key=${API_KEY}`;
      
      try {
        console.log(`\n🧪 Testing: ${model} (${version})`);
        
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: 'Say hello' }] }]
          })
        });
        
        const data = await response.json();
        
        if (response.ok) {
          console.log(`✅ SUCCESS with ${model} (${version})`);
          console.log('Response:', data);
          return { success: true, model, version };
        } else {
          console.log(`❌ Failed: ${data.error?.message || 'Unknown error'}`);
        }
      } catch (error) {
        console.log(`❌ Error: ${error.message}`);
      }
    }
  }
  
  console.log('\n❌ All models failed. Please check:');
  console.log('1. API key is valid');
  console.log('2. Generative AI API is enabled in Google Cloud Console');
  console.log('3. API key has proper permissions');
  
  return { success: false };
};



