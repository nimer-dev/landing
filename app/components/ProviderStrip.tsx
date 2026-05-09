"use client";

import { useState } from "react";
import { useLocale } from "../lib/LocaleContext";
import { PROVIDERS } from "./ProviderLogos";

export default function ProviderStrip() {
  const { t } = useLocale();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "rgba(255,255,255,0.012)",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "32px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 18,
        }}
      >
        <div
          className="font-mono"
          style={{
            fontSize: 11,
            color: "var(--fg-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            textAlign: "center",
          }}
        >
          {t.providers.eyebrow}
          <span style={{ color: "var(--accent-gold)", marginInlineStart: 6 }}>{t.providers.and}</span>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 28,
            alignItems: "center",
          }}
        >
          {PROVIDERS.map(({ id, label, Mark, hue }) => {
            const isActive = hovered === id;
            return (
              <div
                key={id}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 14px",
                  borderRadius: 10,
                  border: `1px solid ${isActive ? hue : "transparent"}40`,
                  background: isActive ? `${hue}10` : "transparent",
                  color: isActive ? hue : "var(--fg-muted)",
                  transition: "color 0.18s, background 0.18s, border-color 0.18s",
                  cursor: "default",
                }}
              >
                <Mark />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
