"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { Send, Sparkles } from "lucide-react";

const suggestions = [
  "What's my top spending category?",
  "How much did I spend on software this year?",
  "Compare food vs travel spending",
  "Find receipts over $100",
];

export default function AskAIPage() {
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    { role: "ai", text: "Hi! I can analyze your receipts and answer questions about your spending. What would you like to know?" },
  ]);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    // Simulate AI response
    setTimeout(() => {
      const lower = text.toLowerCase();
      let reply = "";
      if (lower.includes("total") || lower.includes("spend")) reply = "Your total spend this year is $14,201 across 182 receipts and 8 categories.";
      else if (lower.includes("category")) reply = "Your top spending category is Software at $5,248 (28%), followed by Food at $3,124 (17%).";
      else if (lower.includes("software")) reply = "You've spent $5,248 on software this year. Top vendors: AWS ($1,529), Adobe ($55/mo), Notion ($10/mo).";
      else if (lower.includes("food") || lower.includes("travel")) reply = "Food: $3,124 · Travel: $2,890. Food is 8% higher than travel this year.";
      else if (lower.includes("$100") || lower.includes("over")) reply = "Found 12 receipts over $100. Largest: Delta Air Lines ($340) and Dr. Smith ($120).";
      else reply = "I can look up spending trends, category breakdowns, vendor totals, and receipt details. What specifically would you like to know?";
      setMessages((m) => [...m, { role: "ai", text: reply }]);
    }, 1200);
  };

  return (
    <div className="flex flex-col h-[calc(100dvh-0px)]">
      <Header title="Ask AI" subtitle="Chat with your spending assistant" showSearch={false} showScan={false} />
      <div className="flex-1 flex flex-col overflow-hidden bg-canvas">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[90%] sm:max-w-[75%] rounded-[18px] px-4 py-3 text-sm leading-relaxed ${
                m.role === "user" ? "bg-ink-900 text-white rounded-br-sm" : "bg-surface text-ink-700 shadow-sm"
              }`}>
                {m.text}
              </div>
            </div>
          ))}

          {/* Suggestion chips */}
          {messages.length < 3 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {suggestions.map((s) => (
                <button key={s} onClick={() => send(s)}
                  className="px-3.5 py-2 rounded-full text-[13px] font-medium border border-line bg-surface text-ink-600 hover:bg-surface-sunken hover:text-ink-800 transition-colors cursor-pointer">
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <div className="px-4 sm:px-6 py-4 border-t border-line bg-surface">
          <div className="flex items-end gap-2 max-w-3xl mx-auto">
            <div className="flex-1 flex items-center gap-2 rounded-[11px] border border-line bg-canvas px-3 py-2.5 focus-within:ring-1 focus-within:ring-violet-300">
              <Sparkles size={16} className="text-violet-400 shrink-0" />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Ask about your spending…"
                className="flex-1 bg-transparent outline-none text-sm text-ink-700 placeholder:text-ink-300 min-w-0"
              />
            </div>
            <button onClick={() => send(input)}
              className="p-2.5 rounded-[11px] bg-violet-600 text-white hover:bg-violet-700 transition-colors shrink-0">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
