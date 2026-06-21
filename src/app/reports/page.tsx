"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { Calendar, Download, FileText } from "lucide-react";

const rangeChips = [
  { label: "This month", active: false },
  { label: "Last month", active: true },
  { label: "Q2 2026", active: false },
  { label: "Year to date", active: false },
  { label: "Custom", active: false },
];

const formatChips = [
  { label: "PDF", active: false },
  { label: "CSV", active: true },
  { label: "Excel", active: false },
];

const recentReports = [
  { name: "2026-Q2_Expenses.pdf", meta: "Jun 15, 2026 · 1.2 MB", format: "PDF", bg: "#FBDDDE", text: "#D03036" },
  { name: "May_Receipts.csv", meta: "Jun 01, 2026 · 48 KB", format: "CSV", bg: "#D5F0E3", text: "#128A5E" },
  { name: "2026_Tax_Year.xlsx", meta: "May 20, 2026 · 234 KB", format: "Excel", bg: "#DAEAFE", text: "#1F73E0" },
  { name: "Business_Trips.pdf", meta: "Apr 28, 2026 · 890 KB", format: "PDF", bg: "#FBDDDE", text: "#D03036" },
];

export default function ReportsPage() {
  const [activeRange, setActiveRange] = useState(1);
  const [activeFormat, setActiveFormat] = useState(1);

  return (
    <div>
      <Header title="Reports" subtitle="Generate and export summaries" showSearch={false} showScan={false} />
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-5">
          {/* Build report */}
          <div className="bg-surface border border-line rounded-[18px] p-5 sm:p-6 flex flex-col gap-5">
            <h2 className="text-base font-bold text-ink-900" style={{ fontFamily: "var(--font-display)" }}>Build a report</h2>

            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-semibold text-ink-700 uppercase tracking-wide">Date range</span>
              <div className="flex flex-wrap gap-2">
                {rangeChips.map((r, i) => (
                  <button key={r.label} onClick={() => setActiveRange(i)}
                    className={`px-3.5 py-2 rounded-full text-[13px] font-medium transition-all
                      ${activeRange === i ? "bg-ink-900 text-white" : "bg-transparent text-ink-600 hover:bg-surface-sunken border border-line"}`}>
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-semibold text-ink-700 uppercase tracking-wide">Format</span>
              <div className="inline-flex bg-surface-sunken rounded-[11px] p-1 gap-1 w-fit">
                {formatChips.map((f, i) => (
                  <button key={f.label} onClick={() => setActiveFormat(i)}
                    className={`px-3.5 py-2 rounded-[10px] text-[13px] font-medium transition-all
                      ${activeFormat === i ? "bg-white text-ink-900 shadow-sm" : "bg-transparent text-ink-500 hover:text-ink-700"}`}>
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats bento */}
            <div className="grid grid-cols-3 gap-3 bg-surface-sunken rounded-[14px] p-4">
              <div className="text-center sm:text-left">
                <span className="text-lg sm:text-xl font-bold text-ink-900 block" style={{ fontFamily: "var(--font-mono)" }}>$18,420</span>
                <span className="text-[11px] text-ink-500">total spend</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-lg sm:text-xl font-bold text-ink-900 block" style={{ fontFamily: "var(--font-mono)" }}>182</span>
                <span className="text-[11px] text-ink-500">receipts</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-lg sm:text-xl font-bold text-ink-900 block" style={{ fontFamily: "var(--font-mono)" }}>8</span>
                <span className="text-[11px] text-ink-500">categories</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <span className="text-sm text-ink-500 inline-flex items-center gap-1.5">
                <Calendar size={14} /> Last month (May 2026)
              </span>
              <button className="sm:ml-auto py-3 px-5 rounded-[11px] bg-violet-600 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-violet-700 transition-colors shadow-sm">
                <Download size={16} /> Generate report
              </button>
            </div>
          </div>

          {/* Recent reports */}
          <div className="bg-surface border border-line rounded-[18px] p-5 sm:p-6">
            <h2 className="text-base font-bold text-ink-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>Recent reports</h2>
            <div className="flex flex-col gap-1.5">
              {recentReports.map((rr, i) => (
                <div key={i} className="flex items-center gap-3 px-2 py-3 rounded-xl hover:bg-surface-sunken transition-colors cursor-pointer">
                  <span className="w-9 h-9 shrink-0 rounded-[10px] bg-surface-sunken text-ink-500 flex items-center justify-center">
                    <FileText size={16} />
                  </span>
                  <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-ink-900 truncate">{rr.name}</span>
                    <span className="text-xs text-ink-500">{rr.meta}</span>
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full shrink-0" style={{ background: rr.bg, color: rr.text }}>{rr.format}</span>
                  <button className="w-8 h-8 shrink-0 rounded-[9px] border border-line bg-surface text-ink-600 flex items-center justify-center hover:bg-violet-50 hover:text-violet-600 transition-colors">
                    <Download size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
