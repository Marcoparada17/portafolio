'use client';

import React, { useState, useRef, useEffect } from "react";

type Message = { author: "bot" | "user"; text: string };

export default function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      author: "bot",
      text: "Hi! 👋 Ask me anything about Marco's portfolio projects.",
    },
  ]);
  const chatRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const question = input;
    setMessages((msgs) => [...msgs, { author: "user", text: question }]);
    setInput("");

    // Llama a la API route en /api/portfoliobot
    const res = await fetch("../api/portafoliobot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });
    const data = await res.json();

    setMessages((msgs) => [
      ...msgs,
      { author: "bot", text: data.answer || "Sorry, I can only answer about Marco's portfolio projects!" },
    ]);
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open portfolio chatbot"
      >
        <span className="text-2xl">💬</span>
      </button>

      {/* Chat modal */}
      {open && (
        <div className="fixed bottom-24 right-8 z-50 w-80 max-w-xs bg-gray-900 border border-gray-700 rounded-2xl shadow-xl flex flex-col">
          <div className="px-4 py-2 border-b border-gray-800 flex justify-between items-center">
            <span className="font-semibold text-white">Portfolio Chatbot</span>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white text-lg"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div
            ref={chatRef}
            className="flex-1 px-4 py-2 overflow-y-auto bg-gray-900"
            style={{ maxHeight: 320 }}
          >
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 flex ${msg.author === "bot" ? "justify-start" : "justify-end"}`}>
                <div
                  className={`px-3 py-2 rounded-xl max-w-[85%] text-sm
                    ${msg.author === "bot" ? "bg-gray-800 text-blue-300" : "bg-blue-600 text-white"}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 py-2 bg-gray-900 border-t border-gray-800 flex gap-2">
            <input
              className="flex-1 bg-gray-800 rounded-xl px-3 py-2 text-white focus:outline-none"
              placeholder="Ask about a project..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              autoFocus
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

