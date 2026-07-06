"use client";
import { useEffect, useState } from "react";
import { useLocale } from "../lib/LocaleContext";
import LocaleSwitcher from "./LocaleSwitcher";
import Logo from "./Logo";

export default function Navbar() {
  const { t, dir } = useLocale();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 56,
        display: "flex",
        alignItems: "center",
        padding: "0 28px",
        gap: 16,
        transition: "background 0.35s, border-color 0.35s",
        background: scrolled ? "rgba(7,7,14,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.07)" : "transparent"}`,
        direction: dir,
      }}
    >
      {/* ── Brand ── */}
      <a
        href="/"
        aria-label="Nimer home"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          marginInlineEnd: "auto",
        }}
      >
        <Logo size={26} />
      </a>

      {/* ── Nav links ── */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          marginInlineEnd: 8,
        }}
      >
        {[
          { label: t.nav.features, id: "features" },
          { label: t.nav.how, id: "how" },
          { label: t.nav.pricing, id: "pricing" },
          { label: t.nav.faq, id: "faq" },
        ].map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 13.5,
              color: "var(--fg-2)",
              padding: "6px 12px",
              borderRadius: 6,
              transition: "color 0.15s, background 0.15s",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--fg)";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--fg-2)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* ── Right CTAs ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <LocaleSwitcher />

        <button
          onClick={() => scrollTo("waitlist")}
          className="btn-primary"
          style={{ padding: "7px 16px", fontSize: 13, borderRadius: 7, fontFamily: "inherit" }}
        >
          {t.nav.cta}
        </button>
      </div>
    </header>
  );
}
