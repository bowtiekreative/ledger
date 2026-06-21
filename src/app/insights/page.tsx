import Header from "@/components/Header";

const trend = [
  { value: "$2.1k", m: "Jan", pct: 30 },
  { value: "$2.8k", m: "Feb", pct: 55 },
  { value: "$1.9k", m: "Mar", pct: 40 },
  { value: "$3.1k", m: "Apr", pct: 68 },
  { value: "$2.5k", m: "May", pct: 50 },
  { value: "$2.8k", m: "Jun", pct: 60 },
];

const breakdown = [
  { label: "Software", amount: "$5,248", pct: 28, color: "#2E8CF6" },
  { label: "Food", amount: "$3,124", pct: 17, color: "#F0436B" },
  { label: "Travel", amount: "$2,890", pct: 16, color: "#16B7A8" },
  { label: "Business", amount: "$2,120", pct: 11, color: "#6442EE" },
  { label: "Health", amount: "$1,540", pct: 8, color: "#FB6F92" },
  { label: "Other", amount: "$4,278", pct: 20, color: "#F5A524" },
];

const vendors = [
  { name: "Amazon Web Services", amount: "$1,529", pct: 74 },
  { name: "Whole Foods Market", amount: "$807", pct: 39 },
  { name: "Uber Technologies", amount: "$642", pct: 31 },
  { name: "CVS Pharmacy", amount: "$412", pct: 20 },
  { name: "Starbucks Corp.", amount: "$289", pct: 14 },
];

export default function InsightsPage() {
  return (
    <div>
      <Header title="Insights" subtitle="Spending trends and breakdowns" showSearch={false} />
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 pb-16">
        {/* Monthly trend */}
        <div className="rounded-[18px] border border-line bg-surface p-4 sm:p-5 mb-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
            <div>
              <h2 className="text-lg font-bold text-ink-800" style={{ fontFamily: "var(--font-display)" }}>Monthly trend</h2>
              <p className="text-xs text-ink-400">Total spend by month</p>
            </div>
            <div className="text-2xl font-extrabold text-ink-800 tracking-tight" style={{ fontFamily: "var(--font-mono)" }}>$18,420</div>
          </div>
          <div className="overflow-x-auto">
            <div className="flex items-end gap-2 sm:gap-3 min-w-[400px] h-48">
              {trend.map((t) => (
                <div key={t.m} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-[11px] text-ink-400 font-medium" style={{ fontFamily: "var(--font-mono)" }}>{t.value}</span>
                  <div className="w-full max-w-[48px] bg-surface-sunken rounded-t-[18px] relative h-28">
                    <div
                      className="absolute bottom-0 left-0 right-0 rounded-t-[18px] transition-all duration-700"
                      style={{ height: `${t.pct}%`, background: "linear-gradient(180deg, #A18BFA 0%, #7C5CF6 100%)" }}
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-ink-500">{t.m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Donut */}
          <div className="rounded-[18px] border border-line bg-surface p-4 sm:p-5">
            <h3 className="text-sm font-bold text-ink-800 uppercase tracking-wide mb-1">Categories</h3>
            <p className="text-xs text-ink-400 mb-4">Breakdown spending</p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="shrink-0 relative w-40 h-40">
                <svg viewBox="0 0 100 100" className="w-40 h-40 -rotate-90">
                  {(() => {
                    let offset = 0;
                    return breakdown.map((item, i) => {
                      const dash = `${item.pct} ${100 - item.pct}`;
                      const el = (
                        <circle
                          key={i}
                          cx="50" cy="50" r="40"
                          fill="none"
                          stroke={item.color}
                          strokeWidth="14"
                          strokeDasharray={dash}
                          strokeDashoffset={-offset}
                          strokeLinecap="round"
                        />
                      );
                      offset += item.pct;
                      return el;
                    });
                  })()}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-extrabold text-ink-800" style={{ fontFamily: "var(--font-mono)" }}>$3,268</span>
                  <span className="text-[11px] text-ink-400 font-medium">This month</span>
                </div>
              </div>
              <div className="flex-1 min-w-0 space-y-2.5 w-full">
                {breakdown.map((b) => (
                  <div key={b.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ background: b.color }} />
                      <span className="text-sm text-ink-700">{b.label}</span>
                    </div>
                    <span className="text-sm font-bold text-ink-800" style={{ fontFamily: "var(--font-mono)" }}>{b.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Vendors */}
          <div className="rounded-[18px] border border-line bg-surface p-4 sm:p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-ink-800 uppercase tracking-wide">Top vendors</h3>
                <p className="text-xs text-ink-400">Where you spend most</p>
              </div>
              <span className="text-xs text-ink-300 font-medium">Vendor</span>
            </div>
            <div className="space-y-4">
              {vendors.map((v) => (
                <div key={v.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-ink-600 truncate" style={{ fontFamily: "var(--font-display)" }}>{v.name}</span>
                    <span className="text-sm font-bold text-ink-800 whitespace-nowrap ml-4" style={{ fontFamily: "var(--font-mono)" }}>{v.amount}</span>
                  </div>
                  <div className="h-2 rounded-full bg-surface-sunken overflow-hidden">
                    <div className="h-full rounded-full" style={{
                      width: `${v.pct}%`,
                      background: "linear-gradient(90deg, #7C5CF6 0%, #A18BFA 100%)",
                    }} />
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
