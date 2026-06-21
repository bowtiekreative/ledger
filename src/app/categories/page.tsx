"use client";

import Header from "@/components/Header";
import { Utensils, Briefcase, Code, Plane, Stethoscope, Plus } from "lucide-react";
import { useState } from "react";

const categories = [
  { name: "Food", icon: Utensils, count: "64 receipts", budget: "$2,000", spent: "$1,780", pct: 87, color: "#F0436B" },
  { name: "Business", icon: Briefcase, count: "42 receipts", budget: "$5,000", spent: "$4,500", pct: 92, color: "#16B7A8" },
  { name: "Software", icon: Code, count: "28 receipts", budget: "$3,500", spent: "$2,850", pct: 74, color: "#2E8CF6" },
  { name: "Travel", icon: Plane, count: "19 receipts", budget: "$4,000", spent: "$3,200", pct: 69, color: "#7C5CF6" },
  { name: "Health", icon: Stethoscope, count: "12 receipts", budget: "$2,500", spent: "$1,650", pct: 65, color: "#FB6F92" },
  { name: "Other", icon: Plus, count: "17 receipts", budget: "$1,500", spent: "$1,050", pct: 53, color: "#F5A524" },
];

export default function CategoriesPage() {
  return (
    <div>
      <Header title="Categories" subtitle="Budgets and spending by category" />
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {categories.map((c) => (
            <div key={c.name}
              className="rounded-[18px] border border-line bg-surface p-5 hover:shadow-sm transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[11px] flex items-center justify-center text-white" style={{ background: c.color }}>
                  <c.icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink-800" style={{ fontFamily: "var(--font-display)" }}>{c.name}</h3>
                  <p className="text-[11px] text-ink-400">{c.count}</p>
                </div>
              </div>
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] text-ink-400">Spent</span>
                  <span className="text-xs font-semibold text-ink-600">{c.spent} <span className="text-ink-300">/ {c.budget}</span></span>
                </div>
                <div className="h-2 rounded-full bg-surface-sunken overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500" style={{
                    width: `${c.pct}%`,
                    background: c.color,
                  }} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold" style={{ color: c.color }}>{c.pct}%</span>
                <button className="text-[11px] text-ink-300 hover:text-violet-500 transition-colors font-medium">Edit budget</button>
              </div>
            </div>
          ))}

          {/* Add card */}
          <button className="rounded-[18px] border border-dashed border-line bg-surface p-5 flex flex-col items-center justify-center gap-3 text-ink-300 hover:text-ink-500 hover:border-violet-300 transition-colors cursor-pointer min-h-[180px]">
            <div className="w-10 h-10 rounded-full border-2 border-line flex items-center justify-center">
              <Plus size={18} />
            </div>
            <span className="text-sm font-medium">Add a category</span>
          </button>
        </div>
      </div>
    </div>
  );
}
