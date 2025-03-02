import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
        const prompt = '日本のおみくじの形式で運勢を生成してください。...';
        const result = await model.generateContent(prompt);
        const fortune = result.response.text();

        res.status(200).json({ fortune });
    } catch (error) {
        console.error('Error generating fortune:', error);
        res.status(500).json({ error: 'おみくじの生成に失敗しました。' });
    }
}