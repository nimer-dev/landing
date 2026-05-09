"use client";

import { useLocale } from "../lib/LocaleContext";

interface LocaleSwitcherProps {
  variant?: "navbar" | "inline";
}

export default function LocaleSwitcher({ variant = "navbar" }: LocaleSwitcherProps) {
  const { locale, t, toggle } = useLocale();
  const isNavbar = variant === "navbar";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.locale.label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: isNavbar ? "5px 10px" : "6px 12px",
        background: "transparent",
        border: "1px solid var(--border)",
        borderRadius: 7,
        color: "var(--fg-2)",
        fontSize: 12,
        fontFamily: "var(--font-geist-mono), monospace",
        letterSpacing: "0.05em",
        cursor: "pointer",
        transition: "color 0.15s, border-color 0.15s, background 0.15s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--fg)";
        e.currentTarget.style.borderColor = "var(--border-2)";
        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--fg-2)";
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.background = "transparent";
      }}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </svg>
      <span style={{ fontSize: 11, opacity: 0.7 }}>{locale.toUpperCase()}</span>
      <span style={{ fontSize: 11 }}>·</span>
      <span style={{ fontSize: 12 }}>{t.locale.switchTo}</span>
    </button>
  );
}
