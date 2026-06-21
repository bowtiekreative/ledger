"use client";

import { Search, Bell, ScanLine, Menu } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  showSearch?: boolean;
  showScan?: boolean;
}

export default function Header({ title, subtitle, showSearch = false, showScan = false }: HeaderProps) {
  return (
    <header className="flex flex-col gap-4 px-4 sm:px-6 pt-6 pb-4 bg-canvas border-b border-line">
      {/* Title row — mobile: add left padding for hamburger */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="pl-10 lg:pl-0">
          <h1 className="text-xl sm:text-2xl font-bold text-ink-900" style={{ fontFamily: "var(--font-display)" }}>
            {title}
          </h1>
          {subtitle && <p className="text-sm text-ink-400 mt-0.5 hidden sm:block">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-3">
          {showScan && (
            <button className="flex items-center gap-2 px-3.5 py-2 rounded-[11px] bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors shadow-sm">
              <ScanLine size={15} /> Scan inbox
            </button>
          )}
          <button className="relative p-2 rounded-[11px] bg-surface text-ink-400 hover:text-ink-700 border border-line transition-colors">
            <Bell size={16} />
            <span className="absolute top-1.5 right-1.5 block w-2 h-2 rounded-full bg-violet-500 ring-[1.5px] ring-surface" />
          </button>
        </div>
      </div>

      {/* Search row */}
      {showSearch && (
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 rounded-[11px] border border-line bg-surface px-3 py-2 text-sm focus-within:ring-1 focus-within:ring-violet-300">
            <Search size={16} className="text-ink-300 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search vendor or category"
              className="w-full bg-transparent outline-none text-ink-700 placeholder:text-ink-300"
            />
          </div>
          <button className="relative p-2 rounded-[11px] bg-surface text-ink-400 hover:text-ink-700 border border-line transition-colors lg:hidden">
            <Bell size={16} />
          </button>
        </div>
      )}
    </header>
  );
}
