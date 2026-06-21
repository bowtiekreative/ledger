"use client";

import { useState } from "react";
import Header from "@/components/Header";
import {
  Utensils, Briefcase, Stethoscope, Plane, Sparkles, ShoppingBag, Wrench,
  GraduationCap, Code, Car
} from "lucide-react";

const stats = [
  { value: "$3,284", label: "This month", accent: "violet", icon: "receipt", count: 42 },
  { value: "$14,201", label: "This year", accent: "sky", icon: "trending", count: 247 },
  { value: "$892", label: "Unverified", accent: "amber", icon: "alert", count: 12 },
  { value: "8", label: "Categories", accent: "teal", icon: "folder", count: 0 },
];

const chips = ["All", "Food", "Business", "Software", "Travel", "Health", "Verified", "Unverified"];
const chipIcons = [
  null, <Utensils key="food" size={14} />, <Briefcase key="biz" size={14} />, <Code key="soft" size={14} />,
  <Plane key="travel" size={14} />, <Stethoscope key="health" size={14} />, null, null
];

const items = [
  { vendor: "Starbucks", amount: "$8.45", category: "Food", color: "#F0436B", tint: "#FFF1F4", verified: true },
  { vendor: "AWS", amount: "$127.40", category: "Software", color: "#2E8CF6", tint: "#EEF5FE", verified: true },
  { vendor: "Delta Air Lines", amount: "$340.00", category: "Travel", color: "#16B7A8", tint: "#ECFAF8", verified: false },
  { vendor: "Whole Foods", amount: "$67.23", category: "Food", color: "#F0436B", tint: "#FFF1F4", verified: true },
  { vendor: "Notion", amount: "$10.00", category: "Software", color: "#2E8CF6", tint: "#EEF5FE", verified: true },
  { vendor: "Uber", amount: "$24.50", category: "Travel", color: "#16B7A8", tint: "#ECFAF8", verified: true },
  { vendor: "CVS Pharmacy", amount: "$43.12", category: "Health", color: "#FB6F92", tint: "#FFF1F4", verified: false },
  { vendor: "Slack", amount: "$8.75", category: "Software", color: "#2E8CF6", tint: "#EEF5FE", verified: true },
  { vendor: "DoorDash", amount: "$34.90", category: "Food", color: "#F0436B", tint: "#FFF1F4", verified: true },
];

export default function GalleryPage() {
  const [activeChip, setActiveChip] = useState(0);

  return (
    <div>
      <Header title="Receipt Gallery" subtitle="Everything found in your inbox" showSearch showScan />

      <div className="flex-1 overflow-y-auto px-8 py-6 pb-16">
        {/* Bento Stats */}
        <div className="grid grid-cols-4 gap-6 mb-[30px]">
          {stats.map((s, i) => (
            <div key={i} className="rounded-[18px] border border-line p-5 flex flex-col justify-end h-[138px] transition-all hover:shadow-lg hover:border-lineStrong hover:translate-y-[-3px] cursor-default"
              style={{ background: "#FFFFFF" }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-[9px] flex items-center justify-center" style={{ background: s.accent === "violet" ? "#EBE6FE" : s.accent === "sky" ? "#EEF5FE" : s.accent === "amber" ? "#FEF7E8" : "#ECFAF8", color: s.accent === "violet" ? "#6442EE" : s.accent === "sky" ? "#2E8CF6" : s.accent === "amber" ? "#D98512" : "#16B7A8" }}>
                  {s.accent === "violet" ? <Sparkles size={16} /> : s.accent === "sky" ? <Sparkles size={16} /> : s.accent === "amber" ? <Sparkles size={16} /> : <Sparkles size={16} />}
                </div>
              </div>
              <div className="" style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "29px", fontWeight: 600, color: "#1B1A22", lineHeight: 1.05, letterSpacing: "-0.01em" }}>{s.value}</div>
              <span className="text-[12.5px] font-medium text-ink-500 mt-[1px]">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Filter Chips */}
        <div className="flex items-center flex-wrap gap-[9px] mb-[22px]">
          {chips.map((label, i) => (
            <button key={label} onClick={() => setActiveChip(i)}
              className={`inline-flex items-center gap-[6px] px-[14px] py-[7px] rounded-full text-[13px] font-medium transition-all cursor-pointer
                ${activeChip === i
                  ? "bg-ink-900 text-white"
                  : "bg-transparent text-ink-600 hover:bg-surfaceSunken border border-lineStrong"}`}>
              {chipIcons[i] && <span className="opacity-70">{chipIcons[i]}</span>}
              {label}
            </button>
          ))}
        </div>

        {/* Receipt Gallery */}
        <div className="grid grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group bg-surface border border-line rounded-[18px] overflow-hidden flex flex-col h-auto min-h-[236px] cursor-pointer transition-all duration-200 hover:shadow-lg hover:translate-y-[-3px] hover:border-lineStrong"
              style={{ boxShadow: "var(--shadow-sm)" }}>
              {/* Top visual */}
              <div className="flex-1 min-h-0 bg-surfaceSunken relative flex items-center justify-center p-[18px]">
                <div className="absolute top-3 left-3 w-[30px] h-[30px] rounded-[9px] bg-white flex items-center justify-center" style={{ color: item.color, boxShadow: "var(--shadow-xs)" }}>
                  <Sparkles size={14} />
                </div>
                {/* Receipt card mock */}
                <div className="w-full max-w-[188px] bg-white rounded-[10px]" style={{ borderRadius: "10px 10px 3px 3px", boxShadow: "0 6px 18px -8px rgba(27,26,34,.22), 0 1px 0 rgba(27,26,34,.04)" }}>
                  <div className="h-1 rounded-t-[10px]" style={{ background: item.color, opacity: 0.9 }} />
                  <div className="px-[15px] pt-[13px] pb-1">
                    <div style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "11px", fontWeight: 600, color: "#1B1A22", letterSpacing: "0.02em", textAlign: "center", textTransform: "uppercase", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {item.vendor}
                    </div>
                    <div className="h-px my-[9px]" style={{ background: "repeating-linear-gradient(90deg, #D9D3C8 0 4px, transparent 4px 8px)" }} />
                    <div className="flex flex-col gap-[7px]">
                      <div className="flex justify-between gap-[10px]"><span className="h-[6px] rounded-full" style={{ background: "#D9D3C8", width: "54%" }} /><span className="h-[6px] rounded-full" style={{ background: "#dfd9cd", width: "20%" }} /></div>
                      <div className="flex justify-between gap-[10px]"><span className="h-[6px] rounded-full" style={{ background: "#e6e0d4", width: "40%" }} /><span className="h-[6px] rounded-full" style={{ background: "#e6e0d4", width: "16%" }} /></div>
                      <div className="flex justify-between gap-[10px]"><span className="h-[6px] rounded-full" style={{ background: "#e6e0d4", width: "46%" }} /><span className="h-[6px] rounded-full" style={{ background: "#e6e0d4", width: "18%" }} /></div>
                      <div className="flex justify-between gap-[10px]"><span className="h-[6px] rounded-full" style={{ background: "#e6e0d4", width: "50%" }} /><span className="h-[6px] rounded-full" style={{ background: "#e6e0d4", width: "15%" }} /></div>
                    </div>
                    <div className="mt-[10px] pb-[6px] flex justify-between items-center">
                      <span className="text-[10px] text-ink-400">{item.category}</span>
                      <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "15px", color: "#1B1A22" }}>{item.amount}</span>
                    </div>
                  </div>
                </div>
                {item.verified && (
                  <div className="absolute bottom-3 right-3 bg-white rounded-full px-[10px] py-[3px] text-[11px] font-semibold text-teal-700"
                    style={{ boxShadow: "var(--shadow-xs)" }}>
                    <span className="inline-block w-[6px] h-[6px] rounded-full bg-teal-500 mr-1 align-middle" />Verified
                  </div>
                )}
              </div>
              {/* Bottom info */}
              <div className="px-[18px] py-[14px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[8px]">
                    <span className="w-[8px] h-[8px] rounded-full" style={{ background: item.color }} />
                    <span className="text-[13px] text-ink-700">{item.category}</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "14.5px", fontWeight: 700, color: "#1B1A22" }}>{item.amount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
