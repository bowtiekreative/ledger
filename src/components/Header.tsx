"use client";

import { Search, Bell, ScanLine } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  showSearch?: boolean;
  showScan?: boolean;
}

export default function Header({ title, subtitle, showSearch = true, showScan = true }: HeaderProps) {
  return (
    <header className="flex-none flex items-center gap-[18px] px-8 py-[18px] border-b border-line"
      style={{ background: "rgba(255,255,255,.78)", backdropFilter: "blur(12px)" }}>
      <div className="flex flex-col gap-[3px] mr-auto min-w-0">
        <h1 style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "23px", color: "#1B1A22", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
          {title}
        </h1>
        {subtitle && <span className="text-[13px] text-ink-500">{subtitle}</span>}
      </div>

      {showSearch && (
        <div className="flex items-center gap-[9px] bg-surface border border-lineStrong rounded-[12px] h-[42px] w-[248px] px-[13px]">
          <Search size={17} className="text-ink-300 shrink-0" />
          <input type="text" placeholder="Search vendor or category"
            className="flex-1 min-w-0 border-none outline-none bg-transparent text-[14px] text-ink-900 placeholder:text-ink-300"
          />
        </div>
      )}

      <button className="relative w-[42px] h-[42px] rounded-[12px] border border-lineStrong bg-surface text-ink-700 flex items-center justify-center cursor-pointer hover:bg-surfaceSunken transition-colors shrink-0">
        <Bell size={19} />
        <span className="absolute top-[9px] right-[10px] w-[7px] h-[7px] rounded-full bg-coral-500" style={{ border: "2px solid #FFFFFF" }} />
      </button>

      {showScan && (
        <button className="shrink-0 h-[44px] px-4 rounded-[11px] bg-violet-600 text-white text-[14.5px] font-semibold flex items-center gap-2 hover:bg-violet-700 transition-colors cursor-pointer"
          style={{ fontFamily: "var(--font-lexend)" }}>
          <ScanLine size={17} />
          Scan inbox
        </button>
      )}
    </header>
  );
}
