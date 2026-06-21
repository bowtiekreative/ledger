"use client";

import Header from "@/components/Header";
import { useState } from "react";
import { Pencil } from "lucide-react";

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
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 pb-16">
        {/* Chips */}
        <div className="flex items-center flex-wrap gap-2 mb-5">
          {chips.map((label, i) => (
            <button key={label} onClick={() => setActiveChip(i)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer
                ${activeChip === i ? "bg-ink-900 text-white" : "text-ink-600 hover:bg-surface-sunken border border-line"}`}>
              {label}
            </button>
          ))}
        </div>

        {/* Table — scrollable on mobile */}
        <div className="bg-surface border border-line rounded-[18px] overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[700px]">
              {/* Header */}
              <div className="grid grid-cols-[104px_1.5fr_1fr_130px_120px_34px] items-center gap-3 px-5 py-3.5 border-b border-line bg-surface-sunken">
                {["Date", "Vendor", "Category", "Amount", "Status", ""].map((h) => (
                  <span key={h} className="text-[11.5px] font-bold tracking-wider uppercase text-ink-500" style={{ textAlign: h === "Amount" || h === "" ? "right" : "left" }}>{h}</span>
                ))}
              </div>
              {/* Rows */}
              {transactions.filter((t) => {
                const chip = chips[activeChip];
                if (chip === "All") return true;
                if (chip === "Verified") return t.verified;
                if (chip === "Unverified") return !t.verified;
                return t.category === chip;
              }).map((t, i) => (
                <div key={i} className="grid grid-cols-[104px_1.5fr_1fr_130px_120px_34px] items-center gap-3 px-5 py-3.5 border-b border-line-faint cursor-pointer hover:bg-violet-50 transition-colors">
                  <span className="text-xs text-ink-500 whitespace-nowrap" style={{ fontFamily: "var(--font-mono)" }}>{t.date}</span>
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-7 h-7 shrink-0 rounded-lg flex items-center justify-center text-white font-bold text-[11px]" style={{ background: t.catColor }}>{t.icon}</span>
                    <span className="text-sm font-semibold text-ink-900 truncate" style={{ fontFamily: "var(--font-display)" }}>{t.vendor}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ background: t.catColor }} />
                    <span className="text-sm text-ink-700">{t.category}</span>
                  </span>
                  <span className="text-right text-sm font-bold text-ink-900" style={{ fontFamily: "var(--font-mono)" }}>{t.amount}</span>
                  <span className="flex justify-end">
                    {t.verified ? (
                      <span className="inline-flex items-center gap-1 bg-teal-100 text-teal-600 rounded-full px-2.5 py-1 text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-600 rounded-full px-2.5 py-1 text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />Pending
                      </span>
                    )}
                  </span>
                  <span className="text-ink-300 inline-flex justify-center">
                    <Pencil size={14} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
