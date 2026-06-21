"use client";

import { useState } from "react";
import Header from "@/components/Header";

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
      <div className="flex-1 overflow-y-auto px-8 py-6 pb-16">
        <div className="grid grid-cols-[1.45fr_1fr] gap-5">
          {/* Build report */}
          <div className="bg-surface border border-line rounded-[18px] p-6 flex flex-col gap-[22px]">
            <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "17px", color: "#1B1A22" }}>Build a report</span>
            <div className="flex flex-col gap-[10px]">
              <span className="text-[12.5px] font-semibold text-ink-700">Date range</span>
              <div className="flex flex-wrap gap-2">
                {rangeChips.map((r, i) => (
                  <button key={r.label} onClick={() => setActiveRange(i)}
                    className={`px-[14px] py-[7px] rounded-full text-[13px] font-medium transition-all cursor-pointer
                      ${activeRange === i ? "bg-ink-900 text-white" : "bg-transparent text-ink-600 hover:bg-surfaceSunken border border-lineStrong"}`}>
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <span className="text-[12.5px] font-semibold text-ink-700">Format</span>
              <div className="inline-flex bg-surfaceSunken rounded-[11px] p-1 gap-1 w-fit">
                {formatChips.map((f, i) => (
                  <button key={f.label} onClick={() => setActiveFormat(i)}
                    className={`px-[14px] py-[7px] rounded-[10px] text-[13px] font-medium transition-all cursor-pointer
                      ${activeFormat === i ? "bg-white text-ink-900 shadow-sm" : "bg-transparent text-ink-500 hover:text-ink-700"}`}>
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-surfaceSunken rounded-[14px] p-[18px] flex items-center gap-[14px]">
              <div className="flex-1 flex flex-col gap-[2px]"><span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "22px", fontWeight: 700, color: "#1B1A22" }}>$18,420</span><span className="text-[12px] text-ink-500">total spend</span></div>
              <div className="w-px h-[34px] bg-lineStrong" />
              <div className="flex-1 flex flex-col gap-[2px]"><span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "22px", fontWeight: 700, color: "#1B1A22" }}>182</span><span className="text-[12px] text-ink-500">receipts</span></div>
              <div className="w-px h-[34px] bg-lineStrong" />
              <div className="flex-1 flex flex-col gap-[2px]"><span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "22px", fontWeight: 700, color: "#1B1A22" }}>8</span><span className="text-[12px] text-ink-500">categories</span></div>
            </div>
            <div className="flex items-center gap-[14px]">
              <span className="text-[13px] text-ink-500 inline-flex items-center gap-[7px]">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>
                Last month (May 2026)
              </span>
              <button className="ml-auto h-[44px] px-4 rounded-[11px] bg-violet-600 text-white text-[14.5px] font-semibold flex items-center gap-2 hover:bg-violet-700 transition-colors cursor-pointer"
                style={{ fontFamily: "var(--font-lexend)" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
                Generate report
              </button>
            </div>
          </div>

          {/* Recent reports */}
          <div className="bg-surface border border-line rounded-[18px] p-6">
            <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "17px", color: "#1B1A22" }}>Recent reports</span>
            <div className="flex flex-col gap-[6px] mt-[14px]">
              {recentReports.map((rr, i) => (
                <div key={i} className="flex items-center gap-3 px-2 py-3 rounded-[12px] hover:bg-surfaceSunken transition-colors cursor-pointer">
                  <span className="w-[38px] h-[38px] shrink-0 rounded-[10px] bg-surfaceSunken text-ink-500 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
                  </span>
                  <div className="flex-1 min-w-0 flex flex-col gap-[2px]">
                    <span className="text-[14px] font-semibold text-ink-900">{rr.name}</span>
                    <span className="text-[12px] text-ink-500">{rr.meta}</span>
                  </div>
                  <span className="text-[11px] font-semibold px-[8px] py-[2px] rounded-full" style={{ background: rr.bg, color: rr.text }}>{rr.format}</span>
                  <button className="w-[34px] h-[34px] shrink-0 rounded-[9px] border border-lineStrong bg-surface text-ink-600 flex items-center justify-center hover:bg-violet-50 hover:text-violet-600 hover:border-violet-100 transition-colors cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
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
