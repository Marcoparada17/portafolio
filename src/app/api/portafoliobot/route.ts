import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const PROJECTS = [
  {
    name: "Landing Cremation",
    details:
      "Landing Cremation is a landing page for cremation services, focused on clear communication and conversion, built with Next.js and Tailwind.",
    github: "https://github.com/Marcoparada17/LadingCremation",
  },
  {
    name: "Chatbot With IA",
    details:
      "A sophisticated WhatsApp chatbot system designed to handle medical consultation bookings for Dr. Ana Castiblanco's otoplasty practice. Built with JavaScript, Docker, and PostgreSQL.",
    github: "https://github.com/Marcoparada17/chatbot_ia_llc",
  },
  {
    name: "Central Dispatch Scrapping",
    details:
      "An automated web scraper for the Central Dispatch platform, built using Node.js and TypeScript. Leverages Puppeteer for browser automation and robust data extraction.",
    github: "https://github.com/Marcoparada17/CentralDispatchScrap",
  },
  {
    name: "TradingV Webhook",
    details:
      "A Node.js backend service that acts as a webhook receiver for automated trading signals and pushes them to Telegram using Telegraf. Ideal for integrating with platforms like TradingView.",
    github: "https://github.com/Marcoparada17/TradingV_Webhook",
  },
  {
    name: "Riatty LLC",
    details:
      "A web-based automotive platform for car listings and real-time customer engagement. Built with Node.js, React, and Google Cloud APIs. Full-stack architecture, CRM integration, and more.",
    github: "https://github.com/Marcoparada17/Riattyllc",
  },
];

function getContextText() {
  return PROJECTS.map(
    (p) =>
      `${p.name}: ${p.details}\nRepository: ${p.github}`
  ).join("\n\n");
}

export async function POST(req: NextRequest) {
  const { question } = await req.json();

  // --- ✅ MODO OPENAI ---
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { answer: "API Key not configured." },
      { status: 500 }
    );
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt = `
You are an expert portfolio assistant for Marco Parada. 
ONLY answer questions about these projects, and your answers should be clear, technical, and informative. 
If a user asks about a project, use the information below, and always mention the GitHub repository link when relevant. 
If the question is not about the projects, politely refuse to answer.

Projects:
${getContextText()}

User question: ${question}
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // O "gpt-4o" si tienes acceso
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
      temperature: 0.3,
    });

    const answer =
      completion.choices?.[0]?.message?.content?.trim() ||
      "Sorry, I couldn't answer your question.";
    return NextResponse.json({ answer });
  } catch (e) {
    console.error("OpenAI API error:", e);
    return NextResponse.json(
      { answer: "Failed to get response from OpenAI." },
      { status: 500 }
    );
  }
}
