"use client";

import Header from "@/components/Header";
import { useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */

const chips = ["All", "Food", "Software", "Travel", "Health", "Business", "Verified", "Unverified"];

const transactions = [
  { date: "Jun 18, 2026", vendor: "Starbucks", category: "Food", catColor: "#F0436B", amount: "$8.45", verified: true, icon: "S" },
  { date: "Jun 17, 2026", vendor: "AWS", category: "Software", catColor: "#2E8CF6", amount: "$127.40", verified: true, icon: "A" },
  { date: "Jun 15, 2026", vendor: "Delta Air Lines", category: "Travel", catColor: "#16B7A8", amount: "$340.00", verified: false, icon: "D" },
  { date: "Jun 14, 2026", vendor: "Whole Foods", category: "Food", catColor: "#F0436B", amount: "$67.23", verified: true, icon: "W" },
  { date: "Jun 12, 2026", vendor: "Notion", category: "Software", catColor: "#2E8CF6", amount: "$10.00", verified: true, icon: "N" },
  { date: "Jun 10, 2026", vendor: "Uber", category: "Travel", catColor: "#16B7A8", amount: "$24.50", verified: true, icon: "U" },
  { date: "Jun 09, 2026", vendor: "CVS Pharmacy", category: "Health", catColor: "#FB6F92", amount: "$43.12", verified: false, icon: "C" },
  { date: "Jun 08, 2026", vendor: "Slack", category: "Software", catColor: "#2E8CF6", amount: "$8.75", verified: true, icon: "S" },
  { date: "Jun 06, 2026", vendor: "DoorDash", category: "Food", catColor: "#F0436B", amount: "$34.90", verified: true, icon: "D" },
  { date: "Jun 04, 2026", vendor: "Adobe", category: "Software", catColor: "#2E8CF6", amount: "$29.99", verified: true, icon: "A" },
];

export default function TransactionsPage() {
  const [activeChip, setActiveChip] = useState(0);

  return (
    <div>
      <Header title="Transactions" subtitle="All receipts and expenses" showSearch showScan={false} />
      <div className="flex-1 overflow-y-auto px-8 py-6 pb-16">
        {/* Chips */}
        <div className="flex items-center flex-wrap gap-[9px] mb-5">
          {chips.map((label, i) => (
            <button key={label} onClick={() => setActiveChip(i)}
              className={`inline-flex items-center gap-2 px-[14px] py-[7px] rounded-full text-[13px] font-medium transition-all cursor-pointer
                ${activeChip === i ? "bg-ink-900 text-white" : "text-ink-600 hover:bg-surfaceSunken border border-lineStrong"}`}>
              {label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-surface border border-line rounded-[18px] overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[104px_1.5fr_1fr_130px_120px_34px] items-center gap-[14px] px-[22px] py-[14px] border-b border-line bg-surfaceSunken">
            {["Date", "Vendor", "Category", "Amount", "Status", ""].map((h) => (
              <span key={h} className="text-[11.5px] font-bold tracking-[0.04em] uppercase text-ink-500 text-right" style={{ textAlign: h === "Amount" || h === "" ? "right" : "left" }}>{h}</span>
            ))}
          </div>
          {/* Rows */}
          {transactions.map((t, i) => (
            <div key={i} className="grid grid-cols-[104px_1.5fr_1fr_130px_120px_34px] items-center gap-[14px] px-[22px] py-[15px] border-b border-lineFaint cursor-pointer hover:bg-violet-50 transition-colors duration-150">
              <span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "12.5px", color: "#6A6878" }}>{t.date}</span>
              <div className="flex items-center gap-[11px] min-w-0">
                <span className="w-[30px] h-[30px] shrink-0 rounded-[9px] flex items-center justify-center" style={{ background: t.catColor, color: "#fff", fontWeight: 700, fontSize: "11px" }}>{t.icon}</span>
                <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 600, fontSize: "14.5px", color: "#1B1A22" }} className="truncate">{t.vendor}</span>
              </div>
              <span className="inline-flex items-center gap-[7px]">
                <span className="w-[8px] h-[8px] rounded-full" style={{ background: t.catColor }} />
                <span className="text-[13px] text-ink-700">{t.category}</span>
              </span>
              <span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "15px", fontWeight: 700, color: "#1B1A22" }} className="text-right">{t.amount}</span>
              <span>
                {t.verified ? (
                  <span className="inline-flex items-center gap-[6px] bg-success-100 text-success-600 rounded-full px-[11px] py-[4px] text-[12px] font-semibold">
                    <span className="w-[6px] h-[6px] rounded-full bg-success-500" />Verified
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-[6px] bg-warning-100 text-amber-700 rounded-full px-[11px] py-[4px] text-[12px] font-semibold">
                    <span className="w-[6px] h-[6px] rounded-full bg-amber-500" />Pending
                  </span>
                )}
              </span>
              <span className="text-ink-300 inline-flex justify-center">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.4 11.05 12.25 20.2a5 5 0 0 1-7.07-7.07l9.19-9.19a3 3 0 0 1 4.24 4.24l-9.2 9.19a1 1 0 0 1-1.41-1.41l8.49-8.49"/></svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
