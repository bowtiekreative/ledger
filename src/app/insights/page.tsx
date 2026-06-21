import Header from "@/components/Header";

/* eslint-disable @typescript-eslint/no-explicit-any */

// Mock data
const trend = [
  { value: "$2.1k", m: "Jan", pct: 30 },
  { value: "$2.8k", m: "Feb", pct: 42 },
  { value: "$3.4k", m: "Mar", pct: 55 },
  { value: "$2.9k", m: "Apr", pct: 45 },
  { value: "$3.6k", m: "May", pct: 60 },
  { value: "$3.9k", m: "Jun", pct: 68 },
];

const breakdown = [
  { label: "Food", color: "#F0436B", pct: 32, amount: "$1,046" },
  { label: "Software", color: "#2E8CF6", pct: 28, amount: "$915" },
  { label: "Travel", color: "#16B7A8", pct: 18, amount: "$588" },
  { label: "Health", color: "#FB6F92", pct: 12, amount: "$392" },
  { label: "Business", color: "#D98512", pct: 10, amount: "$327" },
];

const topVendors = [
  { vendor: "AWS", amount: "$1,529", pct: 80 },
  { vendor: "Whole Foods", amount: "$807", pct: 42 },
  { vendor: "Delta", amount: "$680", pct: 36 },
  { vendor: "Slack", amount: "$315", pct: 17 },
  { vendor: "Notion", amount: "$120", pct: 6 },
];

export default function InsightsPage() {
  return (
    <div>
      <Header title="Insights" subtitle="Understand your spending patterns" showSearch showScan />
      <div className="flex-1 overflow-y-auto px-8 py-6 pb-16">
        {/* Spending Trend */}
        <div className="bg-surface border border-line rounded-[18px] p-6 mb-5">
          <div className="flex items-baseline justify-between mb-1.5">
            <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "17px", color: "#1B1A22" }}>Spending trend</span>
            <span className="text-[12.5px] text-ink-500">Last 6 months</span>
          </div>
          <div className="flex items-end gap-[18px] h-[208px] pt-[18px]">
            {trend.map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-[9px] h-full justify-end">
                <span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "12px", color: "#6A6878", fontWeight: 600 }}>{bar.value}</span>
                <div className="w-[64%] flex items-end flex-1">
                  <div className="w-full rounded-t-[6px] transition-all" style={{ height: `${bar.pct}%`, background: i === trend.length - 1 ? "#4F31D6" : "#EBE6FE" }} />
                </div>
                <span className="text-[12.5px] font-medium text-ink-600">{bar.m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-2 gap-5">
          {/* Donut */}
          <div className="bg-surface border border-line rounded-[18px] p-6">
            <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "17px", color: "#1B1A22" }}>By category</span>
            <div className="flex items-center gap-6 mt-4">
              <div className="relative w-[168px] h-[168px] shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  {(() => {
                    let offset = 0;
                    return breakdown.map((item, i) => {
                      const el = (
                        <circle key={i} cx="50" cy="50" r="40" fill="none" stroke={item.color} strokeWidth="16"
                          strokeDasharray={`${item.pct * 2.51} ${251 - item.pct * 2.51}`}
                          strokeDashoffset={`-${offset * 2.51}`}
                          style={{ transition: "all 0.3s ease" }}
                        />
                      );
                      offset += item.pct;
                      return el;
                    });
                  })()}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "19px", fontWeight: 700, color: "#1B1A22" }}>$3,268</span>
                  <span className="text-[11px] text-ink-500">this month</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-[11px]">
                {breakdown.map((b, i) => (
                  <div key={i} className="flex items-center gap-[10px]">
                    <span className="w-[8px] h-[8px] rounded-full shrink-0" style={{ background: b.color }} />
                    <span className="flex-1 text-[13px] text-ink-700">{b.label}</span>
                    <span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "12.5px", color: "#6A6878" }}>{b.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Vendors */}
          <div className="bg-surface border border-line rounded-[18px] p-6">
            <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "17px", color: "#1B1A22" }}>Top vendors</span>
            <div className="flex flex-col gap-[15px] mt-4">
              {topVendors.map((v, i) => (
                <div key={i} className="flex flex-col gap-[7px]">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[13.5px] font-medium text-ink-800">{v.vendor}</span>
                    <span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "13px", fontWeight: 600, color: "#3B3947" }}>{v.amount}</span>
                  </div>
                  <div className="h-[8px] rounded-full bg-surfaceSunken overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${v.pct}%`, background: i === 0 ? "#6442EE" : i === 1 ? "#2E8CF6" : "#D9D3C8" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
