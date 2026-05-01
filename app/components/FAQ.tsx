"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How does Nimer decide which model to use?",
    a: "A fast, deterministic classifier looks at the input — length, code presence, and complexity signals — and picks Haiku, Sonnet, or Opus in under 3ms. Rules are transparent, configurable, and open source on GitHub.",
  },
  {
    q: "Will it hurt my output quality?",
    a: "Routing only sends a request to a smaller model when it's confident the smaller model can handle it. For anything ambiguous, it stays on Sonnet. You can also set a quality floor per call with auto_route=False.",
  },
  {
    q: "Does Nimer see my prompts or responses?",
    a: "No. The SDK runs entirely in your process. We log token counts, model used, and timestamp — never prompts or completions. Privacy-first by default, and you can disable logging entirely.",
  },
  {
    q: "Which Claude models are supported?",
    a: "Haiku 4.5, Sonnet 4.6, and Opus 4.7. Nimer mirrors the Anthropic SDK interface, so any model the official SDK supports works as a manual override.",
  },
  {
    q: "Can I force a specific model for certain calls?",
    a: "Yes. Pass auto_route=False in the create() call and Nimer skips routing for that request. You stay in full control whenever you need it.",
  },
  {
    q: "When do I actually pay?",
    a: "The SDK is free forever. You only pay for Pro ($29/mo) or Scale ($99/mo) when you want the dashboard, custom routing rules, or team features. The savings on your Anthropic bill come immediately.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ borderTop: "1px solid var(--border)", padding: "96px 24px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div className="badge" style={{ marginBottom: 20 }}>05 / FAQ</div>
        <h2
          style={{
            fontSize: "clamp(32px, 4vw, 50px)",
            lineHeight: 1.1,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: 48,
            color: "var(--fg)",
          }}
        >
          Questions,{" "}
          <em className="gradient-text" style={{ fontStyle: "normal" }}>answered.</em>
        </h2>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "22px 0",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    gap: 16,
                  }}
                >
                  <span
                    style={{
                      fontSize: 17,
                      fontWeight: 500,
                      color: isOpen ? "var(--fg)" : "var(--fg-2)",
                      lineHeight: 1.4,
                      transition: "color 0.2s",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      border: `1px solid ${isOpen ? "var(--accent)" : "var(--border)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: isOpen ? "var(--accent)" : "var(--fg-muted)",
                      fontSize: 18,
                      fontWeight: 300,
                      lineHeight: 1,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease, border-color 0.2s, color 0.2s",
                    }}
                  >
                    +
                  </span>
                </button>

                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                    transition: "grid-template-rows 0.3s ease, opacity 0.3s ease",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <p
                      style={{
                        color: "var(--fg-muted)",
                        lineHeight: 1.75,
                        fontSize: 15,
                        paddingBottom: 22,
                        paddingRight: 48,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
