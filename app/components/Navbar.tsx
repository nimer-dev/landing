"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
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
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: 56,
        display: "flex",
        alignItems: "center",
        padding: "0 28px",
        transition: "background 0.35s, border-color 0.35s",
        background: scrolled ? "rgba(7,7,14,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.07)" : "transparent"}`,
      }}
    >
      {/* ── Logo ── */}
      <a href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none", marginRight: "auto" }}>
        <div style={{
          width: 26, height: 26, borderRadius: 7,
          background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 700, color: "#fff", flexShrink: 0,
        }}>N</div>
        <span style={{ fontSize: 15, fontWeight: 600, color: "var(--fg)", letterSpacing: "-0.3px" }}>
          Nimer
        </span>
      </a>

      {/* ── Nav links ── */}
      <nav style={{ display: "flex", alignItems: "center", gap: 2, marginRight: 16 }}>
        {[
          { label: "Features",     id: "features" },
          { label: "How it works", id: "how" },
          { label: "Pricing",      id: "pricing" },
          { label: "FAQ",          id: "faq" },
        ].map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: 13.5, color: "var(--fg-2)", padding: "6px 12px",
              borderRadius: 6, transition: "color 0.15s, background 0.15s",
              fontFamily: "inherit",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = "var(--fg)";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = "var(--fg-2)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >{label}</button>
        ))}
      </nav>

      {/* ── Right CTAs ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <a
          href="https://github.com/nimer-dev/optimizer-sdk"
          target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 13, color: "var(--fg-2)", textDecoration: "none", padding: "5px 10px", borderRadius: 6,
            display: "flex", alignItems: "center", gap: 5, transition: "color 0.15s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-2)")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>

        <button
          onClick={() => scrollTo("waitlist")}
          className="btn-primary"
          style={{ padding: "7px 16px", fontSize: 13, borderRadius: 7, fontFamily: "inherit" }}
        >
          Get early access
        </button>
      </div>
    </header>
  );
}
