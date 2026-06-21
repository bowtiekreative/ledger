"use client";

import { Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full">
      {/* LEFT — Violet gradient panel */}
      <div className="flex-1 min-w-0 relative overflow-hidden text-white flex flex-col justify-between"
        style={{ background: "linear-gradient(155deg, #6442EE, #4F31D6 70%, #3a219c)" }}>
        {/* Decorative bubbles */}
        <div className="absolute w-[340px] h-[340px] rounded-full opacity-80" style={{ background: "rgba(255,255,255,.08)", top: "-90px", right: "-80px" }} />
        <div className="absolute w-[240px] h-[240px] rounded-full" style={{ background: "rgba(255,255,255,.06)", bottom: "-70px", left: "-50px" }} />

        {/* Logo */}
        <div className="relative flex items-center gap-[11px] p-12">
          <div className="w-10 h-10 rounded-[11px] flex items-center justify-center" style={{ background: "rgba(255,255,255,.18)" }}>
            <Mail size={21} strokeWidth={2} />
          </div>
          <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "19px" }}>Ledger</span>
        </div>

        {/* Pitch */}
        <div className="relative max-w-[420px] p-12">
          {/* Receipt cards illustration */}
          <div className="flex gap-[14px] mb-[34px]">
            <div className="w-[120px] h-[150px] bg-white rounded-[12px]" style={{ transform: "rotate(-7deg)", boxShadow: "0 20px 40px -16px rgba(0,0,0,.4)", padding: "14px" }}>
              <div className="h-1 w-[60%] rounded-full mb-3" style={{ background: "var(--color-coral-500)" }} />
              <div className="h-[5px] w-[90%] rounded-full mb-2" style={{ background: "#eee" }} />
              <div className="h-[5px] w-[70%] rounded-full mb-2" style={{ background: "#eee" }} />
              <div className="h-[5px] w-[80%] rounded-full" style={{ background: "#eee" }} />
              <div className="mt-[30px]" style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, color: "#1B1A22", fontSize: "15px" }}>$84.20</div>
            </div>
            <div className="w-[120px] h-[150px] bg-white rounded-[12px] mt-[18px]" style={{ transform: "rotate(5deg)", boxShadow: "0 20px 40px -16px rgba(0,0,0,.4)", padding: "14px" }}>
              <div className="h-1 w-[60%] rounded-full mb-3" style={{ background: "#16B7A8" }} />
              <div className="h-[5px] w-[85%] rounded-full mb-2" style={{ background: "#eee" }} />
              <div className="h-[5px] w-[65%] rounded-full mb-2" style={{ background: "#eee" }} />
              <div className="h-[5px] w-[78%] rounded-full" style={{ background: "#eee" }} />
              <div className="mt-[30px]" style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, color: "#1B1A22", fontSize: "15px" }}>$15.00</div>
            </div>
          </div>
          <h2 className="mb-3" style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "30px", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
            Let your inbox do the bookkeeping.
          </h2>
          <p className="text-[15px] leading-[1.6]" style={{ color: "rgba(255,255,255,.82)" }}>
            Ledger scans your email for receipts and invoices, then sorts every expense for you — calm, clear, and made for every kind of brain.
          </p>
        </div>

        <span className="relative text-[12.5px] p-12" style={{ color: "rgba(255,255,255,.6)" }}>A Bow Tie Kreative product</span>
      </div>

      {/* RIGHT — Form panel */}
      <div className="w-[480px] max-w-[48vw] shrink-0 bg-surface flex items-center justify-center p-10">
        <div className="w-full max-w-[340px] flex flex-col gap-5">
          <div className="flex flex-col gap-[6px]">
            <h1 style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "26px", color: "#1B1A22", letterSpacing: "-0.02em" }}>Welcome back</h1>
            <span className="text-[14px] text-ink-500">Sign in to see your receipts.</span>
          </div>

          <button className="flex items-center justify-center gap-[10px] h-[46px] rounded-[11px] border border-lineStrong bg-surface text-ink-800 font-semibold text-[14.5px] cursor-pointer hover:bg-surfaceSunken transition-colors">
            <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-3 text-ink-300"><span className="flex-1 h-px bg-line" /><span className="text-[12px]">or</span><span className="flex-1 h-px bg-line" /></div>

          <label className="flex flex-col gap-[7px]">
            <span className="text-[12.5px] font-semibold text-ink-700">Email</span>
            <input type="email" className="border-[1.5px] border-lineStrong rounded-[11px] px-[14px] py-3 text-[15px] text-ink-900 bg-surface outline-none focus:border-violet-500 transition-colors"
              style={{ fontFamily: "var(--font-lexend)" }} placeholder="you@example.com" />
          </label>
          <label className="flex flex-col gap-[7px]">
            <span className="text-[12.5px] font-semibold text-ink-700">Password</span>
            <input type="password" className="border-[1.5px] border-lineStrong rounded-[11px] px-[14px] py-3 text-[15px] text-ink-900 bg-surface outline-none focus:border-violet-500 transition-colors"
              style={{ fontFamily: "var(--font-lexend)" }} placeholder="••••••••" />
          </label>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer text-[13px] text-ink-600">
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-violet-600" />
              Remember me
            </label>
            <a href="#" className="text-[13px] text-violet-600 font-semibold no-underline hover:underline">Forgot?</a>
          </div>

          <button className="w-full h-[48px] rounded-[11px] bg-violet-600 text-white font-semibold text-[15px] cursor-pointer hover:bg-violet-700 transition-colors">
            Sign in
          </button>

          <p className="text-center text-[13.5px] text-ink-500">New here? <a href="#" className="text-violet-600 font-semibold no-underline hover:underline">Create an account</a></p>
        </div>
      </div>
    </div>
  );
}
