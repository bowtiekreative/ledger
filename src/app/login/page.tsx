"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, AlertCircle } from "lucide-react";
import { useAuth } from "@/lib/auth";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const ok = login(email, password);
      if (ok) {
        router.push("/gallery");
      } else {
        setError("Login failed. Please try again.");
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-dvh w-full">
      {/* LEFT — Violet gradient panel */}
      <div className="relative flex flex-col flex-1 lg:flex-[4] items-center justify-center px-6 sm:px-10 py-16 text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2D2B38 0%, #1B1A22 35%, #6442EE 100%)"
        }}
      >
        <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-violet-500/[0.08] blur-3xl pointer-events-none" />

        <div className="max-w-md relative z-10 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full flex items-center gap-2.5 pl-1 pr-3.5 py-1">
              <Mail size={14} />
              <span className="text-xs font-semibold text-white">372</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full flex items-center gap-1.5 pl-1 pr-3.5 py-1">
              <span className="w-2 h-2 rounded-full bg-teal-300" />
              <span className="text-xs font-bold text-white">$84.20</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full flex items-center gap-1.5 pl-1 pr-3.5 py-1">
              <span className="w-2 h-2 rounded-full bg-amber-200" />
              <span className="text-xs font-bold text-white">$15.00</span>
            </div>
          </div>

          <div className="flex gap-3 mb-6 justify-center lg:justify-start">
            <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-md">
              <ReceiptIcon />
            </div>
            <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md border border-white/5 flex items-center justify-center shadow-md">
              <ReceiptIcon2 />
            </div>
            <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-md">
              <ReceiptIcon3 />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Let your inbox do the bookkeeping.
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            Ledger scans your email for receipts and invoices, then sorts every expense for you — calm, clear, and made for every kind of brain.
          </p>

          <div className="mt-8 flex items-center justify-center lg:justify-start gap-2.5 text-[11px] text-white/50">
            <div className="w-5 h-5 rounded bg-white/10 border border-white/10" />
            <span>A Bow Tie Kreative product</span>
          </div>
        </div>
      </div>

      {/* RIGHT — Form */}
      <div className="flex flex-col flex-1 lg:flex-[3] items-center justify-center px-6 sm:px-10 py-10 bg-canvas">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl sm:text-3xl font-bold text-ink-900 text-center mb-8" style={{ fontFamily: "var(--font-display)" }}>
            Welcome back
          </h1>

          <button className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-[11px] border border-line bg-surface text-sm font-medium text-ink-700 hover:bg-surface-sunken transition-colors mb-6">
            <GoogleIcon /> Continue with Google
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-line" />
            <span className="text-[11px] text-ink-300 font-medium tracking-wide uppercase">or</span>
            <div className="flex-1 h-px bg-line" />
          </div>

          {error && (
            <div className="flex items-center gap-2 mb-4 px-3 py-2.5 bg-danger-50 border border-danger-100 rounded-[11px] text-xs text-danger-600">
              <AlertCircle size={14} /> {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[11px] text-ink-400 font-semibold tracking-wide uppercase mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-3 rounded-[11px] border border-line bg-surface text-sm text-ink-700 placeholder:text-ink-300 focus:outline-none focus:ring-1 focus:ring-violet-300"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] text-ink-400 font-semibold tracking-wide uppercase mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-3 rounded-[11px] border border-line bg-surface text-sm text-ink-700 placeholder:text-ink-300 focus:outline-none focus:ring-1 focus:ring-violet-300"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded-[6px] border-line accent-violet-500" defaultChecked />
              <label htmlFor="remember" className="text-xs text-ink-500">Remember me</label>
              <a href="#" className="ml-auto text-xs text-ink-400 hover:text-violet-500 transition-colors">Forgot?</a>
            </div>
            <button
              className="w-full py-3 rounded-[11px] bg-violet-600 text-white font-semibold text-sm hover:bg-violet-700 transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : null}
              Sign in
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-ink-400">
            New here? <a href="#" className="font-semibold text-ink-700 hover:text-violet-500 transition-colors">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path fill="#4285F4" d="M15.54 8.2c0-.56-.05-1.1-.14-1.62H8v3.07h4.22c-.18 1.03-.73 1.9-1.55 2.48v2.06h2.51c1.47-1.35 2.32-3.34 2.32-5.99z" />
      <path fill="#34A853" d="M8 16c2.09 0 3.84-.69 5.13-1.88l-2.51-2.06c-.69.46-1.58.73-2.62.73-2.02 0-3.73-1.36-4.34-3.19H1.1v2.13C2.38 14.2 4.97 16 8 16z" />
      <path fill="#FBBC05" d="M3.66 9.6c-.16-.46-.25-.95-.25-1.46s.09-1 .25-1.46V4.55H1.1A7.86 7.86 0 000 8.14c0 1.27.3 2.47.84 3.53l2.82-2.2z" />
      <path fill="#EA4335" d="M8 3.19c1.14 0 2.16.39 2.97 1.16l2.23-2.23C11.84.78 10.09 0 8 0 4.97 0 2.38 1.8 1.1 4.55l2.56 2.2C4.27 4.91 5.98 3.19 8 3.19z" />
    </svg>
  );
}

function ReceiptIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5" y="5" width="18" height="18" rx="3" fill="white" fillOpacity="0.1" />
      <path d="M9 12h10M9 16h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ReceiptIcon2() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5" y="5" width="18" height="18" rx="3" fill="#16B7A8" fillOpacity="0.15" />
      <path d="M9 11h6M9 14h4M9 17h8" stroke="#16B7A8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ReceiptIcon3() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5" y="5" width="18" height="18" rx="3" fill="#F5A524" fillOpacity="0.15" />
      <path d="M9 13l3-3 3 3M12 10v8" stroke="#F5A524" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
