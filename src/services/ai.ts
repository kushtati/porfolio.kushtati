import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY || '');

const CONTEXT = `Tu es l'assistant IA d'Ibrahim Barry, développeur Full Stack junior basé en Guinée.

COMPÉTENCES: HTML/CSS (90%), JavaScript (85%), React (80%), Vite (85%), Vue.js (75%), Bootstrap (85%), Tailwind CSS (80%), PostgreSQL (70%), Node.js (5%), Python (10%), PHP (5%), MongoDB (5%), Git/GitHub (90%), Docker (70%), VS Code (95%), Figma (75%)

PROJETS:
1. Kushtati Immo - Plateforme immobilière avec dashboard, génération PDF, chatbot IA, 6 méthodes de paiement (React, TypeScript, Vite, Tailwind, Google AI) - https://kushtati-immo.onrender.com
2. Portfolio Personnel - Portfolio moderne avec animations fluides (React, TypeScript, Vite, Tailwind) - https://porfolio-kushtati.onrender.com
3. Sentinelle RH - Application RH avec IA et analytics (React, Google AI, Recharts)

CONTACT: ib362392@gmail.com | +224 623 93 63 13 | GitHub: github.com/kushtati

RÈGLES: Réponds en 2-3 phrases max, sans Markdown, professionnellement. Si hors sujet, redirige vers le portfolio.`;

export async function askAI(question: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash-latest',
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 150,
      }
    });

    const prompt = `${CONTEXT}\n\nQuestion: ${question}\n\nRéponds brièvement sans Markdown:`;
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    // Nettoyage
    return text
      .replace(/\*\*/g, '')
      .replace(/\*/g, '')
      .replace(/#{1,6}\s/g, '')
      .replace(/`/g, '')
      .trim();
  } catch (error) {
    console.error('Erreur IA:', error);
    return "Désolé, je rencontre un problème. Contactez Ibrahim à ib362392@gmail.com";
  }
}
