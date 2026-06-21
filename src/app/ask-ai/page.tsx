"use client";

import { useState } from "react";
import Header from "@/components/Header";

const suggestions = [
  "What's my top spending category?",
  "How much did I spend on software this year?",
  "Compare food vs travel spending",
  "Find receipts over $100",
];

interface Message {
  isAI: boolean;
  text: string;
}

export default function AskAIPage() {
  const [messages, setMessages] = useState<Message[]>([
    { isAI: true, text: "Hi Ryan! I'm your AI assistant. I can analyze your receipts, compare spending, and help you find patterns. What would you like to know?" },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { isAI: false, text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { isAI: true, text: "Based on your receipts so far this year, your top spending category is Software at $915 (28%), followed by Food at $1,046 (32%). Would you like me to break this down by month?" }]);
    }, 1200);
  };

  return (
    <div>
      <Header title="Ask AI" subtitle="Chat with your personal accountant" showSearch={false} showScan={false} />
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto px-8 py-6 pb-2">
          {/* Messages */}
          <div className="max-w-[760px] mx-auto flex flex-col gap-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex items-end gap-[11px] ${m.isAI ? "" : "flex-row-reverse"}`}>
                {m.isAI && (
                  <span className="w-[32px] h-[32px] shrink-0 rounded-[9px] bg-violet-100 text-violet-600 flex items-center justify-center mb-0.5">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/></svg>
                  </span>
                )}
                <div className={`max-w-[560px] px-4 py-[14px] text-[14.5px] leading-[1.55]
                  ${m.isAI ? "bg-surface border border-line rounded-[14px] rounded-tl-[4px] text-ink-700" : "bg-violet-600 text-white rounded-[14px] rounded-tr-[4px]"}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggestions + Input */}
        <div className="max-w-[760px] mx-auto w-full px-8 pb-6">
          <div className="flex flex-wrap gap-[8px] mb-3">
            {suggestions.map((s, i) => (
              <button key={i} onClick={() => { setInput(s); }}
                className="bg-surface border border-lineStrong rounded-full px-[14px] py-[8px] text-[13px] font-medium text-ink-700 cursor-pointer hover:bg-violet-50 hover:border-violet-100 hover:text-violet-700 transition-colors whitespace-nowrap">
                {s}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-[10px] bg-surface border-[1.5px] border-lineStrong rounded-[14px] pl-4 pr-2 py-2 focus-within:border-violet-500 transition-colors">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about your spending…"
              className="flex-1 min-w-0 border-none outline-none bg-transparent text-[15px] text-ink-900 placeholder:text-ink-300"
              style={{ fontFamily: "var(--font-lexend)" }}
            />
            <button aria-label="Send" onClick={send}
              className="w-[40px] h-[40px] shrink-0 rounded-[10px] border-none bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 transition-colors cursor-pointer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13"/><path d="M22 2l-7 20-4-9-9-4z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
