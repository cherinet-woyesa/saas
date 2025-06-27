import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateContent(goal: string, topic: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a professional content generator. Generate engaging social media posts based on the given goal and topic. Keep the content concise and shareable."
        },
        {
          role: "user",
          content: `Generate a social media post that ${goal.toLowerCase()} about ${topic}. Make it engaging and shareable.`
        }
      ],
      temperature: 0.7,
      max_tokens: 200
    });

    const content = response.choices[0]?.message?.content || '';
    return content;
  } catch (error) {
    console.error('Error generating content:', error);
    throw new Error('Failed to generate content. Please try again.');
  }
}
