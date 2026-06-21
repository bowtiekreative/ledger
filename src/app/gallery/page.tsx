"use client";

import { useState } from "react";
import Header from "@/components/Header";
import {
  Utensils, Briefcase, Stethoscope, Plane, Sparkles, ShoppingBag, Wrench,
  GraduationCap, Code, Car, Heart, Receipt, FileText, Landmark, Tag, TrendingUp
} from "lucide-react";

const stats = [
  { label: "This month", amount: "$3,284", change: "+12%", color: "text-ink-700" },
  { label: "Total spend", amount: "$14,201", change: "+30%", color: "text-ink-700" },
  { label: "Receipts captured", amount: "$892", change: "+23%", color: "text-ink-700" },
  { label: "Categories", amount: "8", change: "0.2%", color: "text-ink-700" },
];

const chips = ["All", "Food", "Business", "Software", "Travel", "Health", "Verified", "Unverified"];

const receipts = [
  { vendor: "Starbucks", date: "2026-06-18", category: "Food", amount: "$7.49", verified: true, icon: Utensils },
  { vendor: "AWS", date: "2026-06-17", category: "Software", amount: "$45.23", verified: true, icon: Code },
  { vendor: "Uber", date: "2026-06-16", category: "Travel", amount: "$23.50", verified: true, icon: Plane },
  { vendor: "Dr. Smith", date: "2026-06-15", category: "Health", amount: "$120.00", verified: false, icon: Stethoscope },
  { vendor: "Whole Foods", date: "2026-06-14", category: "Food", amount: "$89.12", verified: true, icon: ShoppingBag },
  { vendor: "Adobe", date: "2026-06-13", category: "Software", amount: "$55.00", verified: true, icon: FileText },
];

export default function GalleryPage() {
  const [activeChip, setActiveChip] = useState("All");

  return (
    <div className="flex flex-col h-[calc(100dvh-0px)]">
      <Header
        title="Receipt Gallery"
        subtitle="See all of your email-captured receipts in one place"
        showSearch
        showScan
      />

      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 bg-canvas">
        {/* Bento stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-[18px] border border-line bg-surface p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] text-ink-400 uppercase tracking-wide font-medium">{s.label}</span>
                <span className="text-[11px] text-ink-200 font-medium">{s.change}</span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-ink-800 tracking-tight" style={{ fontFamily: "var(--font-mono)" }}>
                {s.amount}
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {chips.map((c) => (
            <button
              key={c}
              onClick={() => setActiveChip(c)}
              className={`px-3.5 py-2 rounded-[11px] text-[13px] font-medium transition-all ${
                activeChip === c
                  ? activeChip === "Verified" ? "bg-teal-100 text-teal-600"
                    : activeChip === "Unverified" ? "bg-amber-100 text-amber-600"
                    : "bg-neutral-100 text-neutral-700"
                  : "bg-surface text-ink-400 hover:text-ink-600 border border-line"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Receipt cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {receipts.filter((r) => {
            if (activeChip === "All") return true;
            if (activeChip === "Verified") return r.verified;
            if (activeChip === "Unverified") return !r.verified;
            return r.category === activeChip;
          }).map((r) => (
            <ReceiptCard key={r.vendor} receipt={r} />
          ))}
          {receipts.filter((r) => {
            if (activeChip === "All") return true;
            if (activeChip === "Verified") return r.verified;
            if (activeChip === "Unverified") return !r.verified;
            return r.category === activeChip;
          }).length === 0 && (
            <div className="col-span-full text-center py-12 text-ink-400 text-sm">
              No receipts match <span className="font-semibold text-ink-600">{activeChip}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ReceiptCard({ receipt }: { receipt: typeof receipts[0] }) {
  return (
    <div className="rounded-[18px] border border-line bg-surface p-4 hover:shadow-md transition-shadow cursor-pointer group">
      <div className="flex items-start justify-between mb-3">
        <div className="w-9 h-9 rounded-[9px] bg-surface-sunken flex items-center justify-center text-ink-400">
          <receipt.icon size={16} />
        </div>
        <div className="flex items-center gap-1.5">
          <span className={`block w-1.5 h-1.5 rounded-full ${receipt.verified ? "bg-teal-500" : "bg-amber-500"}`} />
          <span className="text-[11px] text-ink-300">{receipt.date}</span>
        </div>
      </div>
      <h3 className="text-sm font-semibold text-ink-700 mb-1">{receipt.vendor}</h3>
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[9px] bg-surface-sunken text-[11px] text-ink-500 font-medium">
          <span className="w-1 h-1 rounded-full bg-violet-400" />
          {receipt.category}
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm font-bold text-teal-600" style={{ fontFamily: "var(--font-mono)" }}>{receipt.amount}</span>
        <button className="p-1.5 rounded-[9px] text-ink-200 hover:text-ink-600 hover:bg-surface-sunken transition-colors">
          <FileText size={14} />
        </button>
      </div>
    </div>
  );
}
