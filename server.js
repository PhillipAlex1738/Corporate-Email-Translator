import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Prompts for different tones
const tonePrompts = {
  formal: "Rewrite this message in a formal, professional business tone suitable for corporate communication:",
  diplomatic: "Rewrite this message in a diplomatic and tactful tone, maintaining professional standards while being sensitive to the recipient:",
  concise: "Rewrite this message in a concise, direct professional tone while maintaining courtesy:"
};

async function translateWithAI(text, tone) {
  try {
    const prompt = tonePrompts[tone] || tonePrompts.formal;
    
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a professional email writing assistant. Your task is to transform informal or inappropriate messages into professional business communications."
        },
        {
          role: "user",
          content: `${prompt}\n\nOriginal message: "${text}"`
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to translate the message');
  }
}

app.post('/api/translate', async (req, res) => {
  const { text, tone } = req.body;
  
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const translatedText = await translateWithAI(text, tone || 'formal');
    res.json({ translatedText });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add environment variables check
if (!process.env.OPENAI_API_KEY) {
  console.warn('Warning: OPENAI_API_KEY environment variable is not set. The translator will not work without an API key.');
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
