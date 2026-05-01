"use client";

import { useState } from "react";

export default function CostCalculator() {
  const [spend, setSpend] = useState(500);

  const newSpend   = Math.round(spend * 0.4);
  const saved      = spend - newSpend;
  const yearlySaved = saved * 12;
  const pct        = spend > 0 ? Math.round((saved / spend) * 100) : 0;

  return (
    <section style={{ borderTop: "1px solid var(--border)", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="badge" style={{ marginBottom: 20 }}>
          Calculate your savings
        </div>
        <h2
          style={{
            fontSize: "clamp(32px, 4vw, 50px)",
            lineHeight: 1.1,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: 56,
            color: "var(--fg)",
          }}
        >
          Run{" "}
          <em className="gradient-text" style={{ fontStyle: "normal" }}>your numbers.</em>
        </h2>

        <div
          style={{
            display: "grid",
            gap: 16,
            alignItems: "stretch",
          }}
          className="md:grid-cols-2"
        >
          {/* ── Input card ── */}
          <div
            className="card"
            style={{ padding: "32px 28px", display: "flex", flexDirection: "column", gap: 28 }}
          >
            <div>
              <label
                className="font-mono"
                style={{
                  display: "block",
                  fontSize: 11,
                  color: "var(--fg-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 16,
                }}
              >
                Monthly Claude spend
              </label>

              {/* Dollar display + input */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 28 }}>
                <span style={{ fontSize: 56, color: "var(--fg-muted)", lineHeight: 1, fontWeight: 300 }}>
                  $
                </span>
                <input
                  type="number"
                  value={spend}
                  onChange={(e) =>
                    setSpend(Math.max(0, Math.min(50000, Number(e.target.value) || 0)))
                  }
                  style={{
                    fontSize: 56,
                    fontWeight: 600,
                    color: "var(--fg)",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    width: "100%",
                    lineHeight: 1,
                    fontFamily: "inherit",
                  }}
                />
              </div>

              {/* Range slider */}
              <input
                type="range"
                min={50}
                max={10000}
                step={50}
                value={spend}
                onChange={(e) => setSpend(Number(e.target.value))}
                style={{ width: "100%", cursor: "pointer" }}
              />
              <div
                className="font-mono"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 11,
                  color: "var(--fg-muted)",
                  marginTop: 8,
                }}
              >
                <span>$50</span>
                <span>$10,000</span>
              </div>
            </div>

            {/* Without Nimer reference */}
            <div
              style={{
                padding: "12px 16px",
                background: "rgba(248,68,68,0.06)",
                borderRadius: 10,
                border: "1px solid rgba(248,68,68,0.14)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span className="font-mono" style={{ fontSize: 12, color: "var(--fg-muted)" }}>
                Without Nimer
              </span>
              <span style={{ fontSize: 22, fontWeight: 600, color: "#f87171" }}>
                ${spend.toLocaleString()}
                <span className="font-mono" style={{ fontSize: 12, marginLeft: 4, fontWeight: 400 }}>/mo</span>
              </span>
            </div>
          </div>

          {/* ── Result card ── */}
          <div
            style={{
              padding: "32px 28px",
              borderRadius: 14,
              background: "rgba(99,102,241,0.05)",
              border: "1px solid var(--border-acc)",
              boxShadow: "0 0 40px rgba(99,102,241,0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 24,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: "absolute",
                top: -80,
                right: -60,
                width: 260,
                height: 260,
                background: "radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div>
              <div
                className="font-mono"
                style={{
                  fontSize: 11,
                  color: "var(--fg-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 16,
                }}
              >
                With Nimer
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                <span style={{ fontSize: 56, fontWeight: 600, color: "var(--fg)", lineHeight: 1 }}>
                  ${newSpend.toLocaleString()}
                </span>
                <span className="font-mono" style={{ fontSize: 13, color: "var(--fg-muted)" }}>
                  /mo
                </span>
              </div>
            </div>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24 }}>
              <div
                className="font-mono"
                style={{
                  fontSize: 11,
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 10,
                }}
              >
                You save
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                <span style={{ fontSize: 56, fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>
                  ${saved.toLocaleString()}
                </span>
                <span className="font-mono" style={{ fontSize: 13, color: "var(--fg-muted)" }}>
                  /mo
                </span>
              </div>
              <div className="font-mono" style={{ fontSize: 13, color: "var(--fg-muted)" }}>
                ${yearlySaved.toLocaleString()} per year ·{" "}
                <span style={{ color: "var(--accent)" }}>{pct}% savings</span>
              </div>
            </div>
          </div>
        </div>

        <p
          className="font-mono"
          style={{ marginTop: 16, fontSize: 12, color: "var(--fg-muted)", lineHeight: 1.6 }}
        >
          Estimate based on a typical mixed workload (chat, classification, short answers).
          Actual savings depend on your traffic mix.
        </p>
      </div>
    </section>
  );
}
