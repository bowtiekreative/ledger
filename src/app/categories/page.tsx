"use client";

import Header from "@/components/Header";
import { Utensils, Briefcase, Code, Plane, Stethoscope, Plus } from "lucide-react";
import { useState } from "react";

const categories = [
  { label: "Food", count: 42, spent: 1046, budget: 1200, color: "#F0436B", tint: "#FFF1F4", icon: Utensils },
  { label: "Software", count: 18, spent: 915, budget: 1000, color: "#2E8CF6", tint: "#EEF5FE", icon: Code },
  { label: "Travel", count: 7, spent: 588, budget: 800, color: "#16B7A8", tint: "#ECFAF8", icon: Plane },
  { label: "Health", count: 4, spent: 343, budget: 500, color: "#FB6F92", tint: "#FFF1F4", icon: Stethoscope },
  { label: "Business", count: 11, spent: 327, budget: 500, color: "#D98512", tint: "#FEF7E8", icon: Briefcase },
  { label: "Other", count: 6, spent: 160, budget: 300, color: "#6A6878", tint: "#FAF8F4", icon: Briefcase },
];

export default function CategoriesPage() {
  return (
    <div>
      <Header title="Categories" subtitle="Organize and budget your spending" showSearch={false} showScan={false} />
      <div className="flex-1 overflow-y-auto px-8 py-6 pb-16">
        <div className="grid grid-cols-auto-fill gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(282px, 1fr))" }}>
          {categories.map((c, i) => {
            const pct = Math.round((c.spent / c.budget) * 100);
            const Icon = c.icon;
            return (
              <div key={i} className="bg-surface border border-line rounded-[18px] p-5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-[42px] h-[42px] rounded-[12px] flex items-center justify-center" style={{ background: c.tint, color: c.color }}>
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <div className="flex flex-col gap-[1px] min-w-0 flex-1">
                    <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 600, fontSize: "15.5px", color: "#1B1A22" }}>{c.label}</span>
                    <span className="text-[12px] text-ink-500">{c.count} receipts</span>
                  </div>
                  <button className="w-[32px] h-[32px] rounded-[9px] border border-lineStrong bg-surface text-ink-500 flex items-center justify-center hover:bg-surfaceSunken cursor-pointer transition-colors shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>
                  </button>
                </div>
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "18px", fontWeight: 700, color: "#1B1A22" }}>${c.spent.toLocaleString()}</span>
                    <span className="text-[12.5px] text-ink-500">of ${c.budget.toLocaleString()}</span>
                  </div>
                  <div className="h-[9px] rounded-full bg-surfaceSunken overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: `${Math.min(pct, 100)}%`, background: c.color }} />
                  </div>
                  <div className="mt-[7px] text-[12px] text-ink-500">{pct}% of monthly budget used</div>
                </div>
              </div>
            );
          })}
          <button className="bg-transparent border-[1.5px] border-dashed border-lineStrong rounded-[18px] p-5 flex flex-col items-center justify-center gap-[10px] text-ink-500 min-h-[160px] cursor-pointer hover:border-violet-500 hover:text-violet-600 transition-colors">
            <span className="w-[42px] h-[42px] rounded-[12px] bg-violet-50 text-violet-600 flex items-center justify-center">
              <Plus size={20} />
            </span>
            <span className="text-[14px] font-semibold">Add a category</span>
          </button>
        </div>
      </div>
    </div>
  );
}
