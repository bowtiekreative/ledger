"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid, TrendingUp, CreditCard, FolderOpen, FileText,
  PieChart, Lightbulb, Sparkles, Mail, LogOut, Receipt
} from "lucide-react";

const navItems = [
  { href: "/gallery", label: "Gallery", icon: LayoutGrid },
  { href: "/insights", label: "Insights", icon: TrendingUp },
  { href: "/transactions", label: "Transactions", icon: CreditCard },
  { href: "/categories", label: "Categories", icon: FolderOpen },
  { href: "/reports", label: "Reports", icon: FileText },
  { href: "/investments", label: "Investments", icon: PieChart },
  { href: "/advice", label: "Advice", icon: Lightbulb },
  { href: "/ask-ai", label: "Ask AI", icon: Sparkles },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="shrink-0 w-[248px] h-screen bg-surface border-r border-line flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-[11px] px-6 pt-[22px] pb-5">
        <div className="w-[38px] h-[38px] rounded-[11px] bg-violet-500 flex items-center justify-center text-white"
          style={{ boxShadow: "0 4px 14px -4px rgba(100,66,238,.55)" }}>
          <Receipt size={20} strokeWidth={2} />
        </div>
        <div className="leading-[1.1]">
          <span className="block" style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "16px", color: "#1B1A22", letterSpacing: "-0.01em" }}>Ledger</span>
          <span className="block text-[11px] text-ink-500">by Bow Tie Kreative</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-2 space-y-[2px] overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}
              className={`flex items-center gap-3 px-3 py-[10px] rounded-[11px] text-[13px] font-medium transition-all duration-150
                ${isActive
                  ? "bg-violet-50 text-violet-700 font-semibold"
                  : "text-ink-500 hover:bg-surfaceSunken hover:text-ink-700"}`}>
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Gmail Status */}
      <div className="px-4 pb-3">
        <div className="rounded-[14px] p-[13px] bg-teal-50 border border-teal-100 flex flex-col gap-2">
          <div className="flex items-center gap-[8px]">
            <span className="w-[8px] h-[8px] rounded-full bg-teal-600" style={{ boxShadow: "0 0 0 3px #ECFAF8" }} />
            <span className="text-[12.5px] font-semibold text-teal-700">Gmail connected</span>
          </div>
          <span className="text-[11.5px] text-ink-500 leading-[1.45]">Last sync 4 min ago · auto-scan on</span>
        </div>
      </div>

      {/* User Profile */}
      <div className="border-t border-line px-4 pt-3 pb-3">
        <div className="flex items-center gap-[10px] px-[4px] py-[4px]">
          <div className="w-[34px] h-[34px] rounded-full bg-coral-100 text-coral-600 flex items-center justify-center"
            style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "14px" }}>RP</div>
          <div className="flex flex-col leading-[1.2] min-w-0 flex-1">
            <span className="text-[13px] font-semibold text-ink-900 truncate whitespace-nowrap">Ryan Perez</span>
            <span className="text-[11px] text-ink-500">Free plan</span>
          </div>
          <button className="w-[30px] h-[30px] rounded-[8px] border border-lineStrong bg-surface text-ink-500 flex items-center justify-center hover:bg-surfaceSunken hover:text-ink-700 transition-colors cursor-pointer">
            <LogOut size={15} />
          </button>
        </div>
      </div>
    </aside>
  );
}
