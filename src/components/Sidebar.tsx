"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  LayoutGrid, TrendingUp, CreditCard, FolderOpen, FileText,
  PieChart, Lightbulb, Sparkles, Mail, ChevronDown, Menu, X, LogOut
} from "lucide-react";
import { useAuth } from "@/lib/auth";

const navItems = [
  { name: "Gallery", href: "/gallery", icon: LayoutGrid },
  { name: "Insights", href: "/insights", icon: TrendingUp },
  { name: "Transactions", href: "/transactions", icon: CreditCard },
  { name: "Categories", href: "/categories", icon: FolderOpen },
  { name: "Reports", href: "/reports", icon: FileText },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [hiddenGroups, setHiddenGroups] = useState<Record<string, boolean>>({});
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-60 p-2 rounded-[11px] bg-surface shadow-md border border-line text-ink-700"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-overlay z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          bg-surface border-r border-line flex flex-col
          transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          z-50
          /* Mobile: off-canvas sliding */
          fixed lg:static top-0 left-0 h-full w-64
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Header */}
        <Link href="/gallery"
          className="flex items-center justify-center px-5 pt-5 pb-2"
        >
          <svg width="94" height="24" viewBox="0 0 94 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#7C5CF6" />
            <path d="M7 12L10.5 15.5L17 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="28" y="17" fontFamily="Outfit,sans-serif" fontWeight="600" fontSize="15" fill="#332C5C">Ledger</text>
          </svg>
        </Link>

        <div className="flex items-center justify-center pb-3">
          <span className="text-[11px] text-ink-300 tracking-wider font-medium">RECEIPT TRACKING</span>
        </div>

        {/* User */}
        <div className="px-3 pb-3">
          <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-[11px]">
            <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-semibold text-xs tracking-wide shrink-0" style={{ fontFamily: "var(--font-mono)" }}>
              {user ? user.charAt(0).toUpperCase() : "G"}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-ink-700 truncate">{user ? user.split("@")[0] : "Guest"}</div>
              <div className="text-xs text-ink-300 truncate">{user || "Not logged in"}</div>
            </div>
          </div>
        </div>

        {/* Gmail status */}
        <div className="px-3 pb-3">
          <button
            onClick={() => setHiddenGroups((p) => ({ ...p, gmail: !p.gmail }))}
            className="flex items-center justify-between gap-2 w-full px-3 py-2 text-sm text-ink-500 hover:text-ink-700 transition-colors rounded-[11px] hover:bg-surface-sunken"
          >
            <span className="flex items-center gap-2">
              <Mail size={15} />
              <span>Gmail</span>
              <span className="ml-0.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[9px] bg-teal-100 text-teal-600 text-[11px] font-bold tracking-wide">CONNECTED</span>
            </span>
            <ChevronDown size={14} className={`transition-transform ${hiddenGroups["gmail"] ? "-rotate-90" : ""}`} />
          </button>
          {!hiddenGroups["gmail"] && (
            <div className="mt-0.5 space-y-0.5 px-3 text-[11px] text-ink-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                <span>Inbox synced</span>
              </div>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="px-3 space-y-0.5 flex-1 overflow-y-auto">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}
                className={`flex items-center gap-2.5 w-full px-3 py-2 rounded-[11px] text-sm ${active ? "bg-surface-sunken font-semibold text-violet-600" : "text-ink-500 hover:bg-surface-sunken hover:text-ink-700"} transition-colors`}
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </Link>
            );
          })}
          {/* AI Chat nav */}
          <Link href="/ask-ai"
            className={`flex items-center gap-2.5 w-full px-3 py-2 rounded-[11px] text-sm ${pathname === "/ask-ai" ? "bg-violet-50 text-violet-600 font-semibold" : "text-ink-500 hover:bg-surface-sunken hover:text-ink-700"} transition-colors`}
          >
            <Sparkles size={16} />
            <span>Ask AI</span>
          </Link>
        </nav>

        {/* Bottom: Logout */}
        <div className="px-3 pb-3 pt-2 border-t border-line">
          {user && (
            <button
              onClick={() => logout()}
              className="flex items-center gap-2.5 w-full px-3 py-2 rounded-[11px] text-sm text-ink-400 hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <LogOut size={16} />
              <span>Sign out</span>
            </button>
          )}
        </div>

        {/* credits */}
        <div className="px-4 pb-3 pt-1 text-[10px] text-ink-200 flex items-center justify-between">
          <span>lakeit styled.</span>
          <span className="text-ink-100">Helios v1.2</span>
        </div>
      </aside>
    </>
  );
}
