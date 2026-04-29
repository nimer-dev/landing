"use client";

import { useState } from "react";

export default function CostCalculator() {
  const [spend, setSpend] = useState(500);

  // Conservative 60% savings on a typical mixed workload
  const newSpend = Math.round(spend * 0.4);
  const saved = spend - newSpend;
  const yearlySaved = saved * 12;

  return (
    <section className="border-t border-[color:var(--border)] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--fg-muted)] font-mono-display">
          See your savings
        </span>
        <h2 className="font-serif-display text-4xl md:text-5xl mt-4 mb-12 leading-tight">
          Run <em className="text-[color:var(--accent)]">your numbers.</em>
        </h2>

        <div className="grid md:grid-cols-2 gap-4 items-stretch">
          {/* Input side */}
          <div className="bg-[color:var(--bg-soft)] border border-[color:var(--border)] rounded-lg p-8">
            <label className="block text-xs uppercase tracking-[0.18em] text-[color:var(--fg-muted)] font-mono-display mb-4">
              Monthly Claude spend
            </label>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="font-serif-display text-5xl md:text-6xl text-[color:var(--fg)]">
                $
              </span>
              <input
                type="number"
                value={spend}
                onChange={(e) =>
                  setSpend(
                    Math.max(0, Math.min(50000, Number(e.target.value) || 0))
                  )
                }
                className="font-serif-display text-5xl md:text-6xl text-[color:var(--fg)] bg-transparent outline-none w-full"
              />
            </div>
            <input
              type="range"
              min={50}
              max={10000}
              step={50}
              value={spend}
              onChange={(e) => setSpend(Number(e.target.value))}
              className="w-full accent-[color:var(--accent)] cursor-pointer"
            />
            <div className="flex justify-between font-mono-display text-xs text-[color:var(--fg-muted)] mt-3">
              <span>$50</span>
              <span>$10,000</span>
            </div>
          </div>

          {/* Result side */}
          <div className="bg-[color:var(--accent-soft)] border border-[color:var(--accent)] rounded-lg p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--fg-muted)] font-mono-display mb-2">
                With Nimer
              </div>
              <div className="font-serif-display text-4xl text-[color:var(--fg)]">
                ${newSpend.toLocaleString()}
                <span className="text-base text-[color:var(--fg-muted)] font-mono-display ml-1">
                  /mo
                </span>
              </div>
            </div>

            <div className="border-t border-[color:var(--border)] pt-6 mt-6">
              <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--accent)] font-mono-display mb-2">
                You save
              </div>
              <div className="font-serif-display text-5xl text-[color:var(--accent)] leading-none">
                ${saved.toLocaleString()}
                <span className="text-base text-[color:var(--fg-muted)] font-mono-display ml-1">
                  /mo
                </span>
              </div>
              <div className="text-sm text-[color:var(--fg-muted)] font-mono-display mt-3">
                ${yearlySaved.toLocaleString()} per year
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-[color:var(--fg-muted)] mt-6 leading-relaxed max-w-2xl">
          Estimate based on a typical mixed workload — chat, classification, and short answers. Actual savings depend on your traffic mix.
        </p>
      </div>
    </section>
  );
}