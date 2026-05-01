"use client";

import { useEffect, useState } from "react";

const DEMOS = [
  {
    prompt: '"What\'s the capital of France?"',
    complexity: "Simple Q&A · 8 tokens",
    selected: "haiku",
    saving: "Saved $0.000021 vs baseline",
    savingColor: "#34d399",
  },
  {
    prompt: '"Refactor this 400-line async module..."',
    complexity: "Complex code · 580 tokens",
    selected: "opus",
    saving: "Quality mode — Opus selected",
    savingColor: "#a78bfa",
  },
  {
    prompt: '"Summarize: [8,200 char document]"',
    complexity: "Long context · 2,100 tokens",
    selected: "sonnet",
    saving: "Saved $0.00089 vs baseline",
    savingColor: "#34d399",
  },
];

const MODELS = [
  { id: "haiku",  label: "claude-haiku-4.5",   price: "$0.25/M",  color: "#34d399" },
  { id: "sonnet", label: "claude-sonnet-4.6",  price: "$3.00/M",  color: "#6366f1" },
  { id: "opus",   label: "claude-opus-4.7",    price: "$15.00/M", color: "#a78bfa" },
];

export default function RoutingDemo() {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIdx((i) => (i + 1) % DEMOS.length);
        setAnimating(false);
      }, 250);
    }, 3200);
    return () => clearInterval(t);
  }, []);

  const demo = DEMOS[idx];

  return (
    <div
      className="card"
      style={{
        padding: 24,
        position: "relative",
        overflow: "hidden",
        minWidth: 320,
        boxShadow: "0 0 60px rgba(99,102,241,0.06), 0 0 0 1px rgba(255,255,255,0.06)",
      }}
    >
      {/* Subtle top glow */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -60,
          width: 240,
          height: 240,
          background: "radial-gradient(ellipse, rgba(99,102,241,0.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Header badge */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
        <div className="badge" style={{ fontSize: 10 }}>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#34d399",
              display: "inline-block",
              animation: "pulse-dot 1.8s ease-in-out infinite",
            }}
          />
          Nimer Router · Live
        </div>
        <span className="font-mono" style={{ fontSize: 10, color: "var(--fg-muted)" }}>
          v0.1.0
        </span>
      </div>

      {/* Prompt preview */}
      <div
        style={{
          marginBottom: 18,
          opacity: animating ? 0 : 1,
          transition: "opacity 0.25s ease",
        }}
      >
        <div
          className="font-mono"
          style={{ fontSize: 10, color: "var(--fg-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 7 }}
        >
          Input prompt
        </div>
        <div
          className="font-mono"
          style={{
            fontSize: 13,
            color: "var(--fg)",
            padding: "10px 12px",
            background: "rgba(255,255,255,0.03)",
            borderRadius: 8,
            border: "1px solid var(--border)",
            lineHeight: 1.5,
          }}
        >
          {demo.prompt}
        </div>
        <div
          className="font-mono"
          style={{ fontSize: 11, color: "var(--fg-muted)", marginTop: 6 }}
        >
          {demo.complexity}
        </div>
      </div>

      {/* Model selection */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 7,
          marginBottom: 18,
          opacity: animating ? 0 : 1,
          transition: "opacity 0.25s ease",
        }}
      >
        {MODELS.map((m) => {
          const isSelected = m.id === demo.selected;
          return (
            <div
              key={m.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "9px 12px",
                borderRadius: 8,
                background: isSelected ? `${m.color}14` : "transparent",
                border: `1px solid ${isSelected ? m.color + "38" : "var(--border)"}`,
                transition: "all 0.35s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: isSelected ? m.color : "rgba(255,255,255,0.1)",
                    boxShadow: isSelected ? `0 0 8px ${m.color}` : "none",
                    transition: "all 0.35s ease",
                  }}
                />
                <span
                  className="font-mono"
                  style={{
                    fontSize: 12,
                    color: isSelected ? "var(--fg)" : "var(--fg-muted)",
                    transition: "color 0.35s",
                  }}
                >
                  {m.label}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: 11,
                    color: isSelected ? m.color : "var(--fg-muted)",
                    transition: "color 0.35s",
                  }}
                >
                  {m.price}
                </span>
                {isSelected && (
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 10,
                      padding: "2px 7px",
                      borderRadius: 4,
                      background: `${m.color}20`,
                      color: m.color,
                    }}
                  >
                    selected
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Savings */}
      <div
        style={{
          padding: "9px 12px",
          borderRadius: 8,
          background: "rgba(99,102,241,0.06)",
          border: "1px solid rgba(99,102,241,0.16)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          opacity: animating ? 0 : 1,
          transition: "opacity 0.25s ease",
        }}
      >
        <span className="font-mono" style={{ fontSize: 11, color: "var(--fg-muted)" }}>
          vs Sonnet baseline
        </span>
        <span
          className="font-mono"
          style={{ fontSize: 11, color: demo.savingColor, fontWeight: 500 }}
        >
          {demo.saving}
        </span>
      </div>
    </div>
  );
}
