"use client";

import { useState } from "react";
import { useLocale } from "../lib/LocaleContext";

const FORMSPREE = "https://formspree.io/f/mnjlyawe";

export default function HalalSection() {
  const { t, dir } = useLocale();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "halal-waitlist" }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="halal"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "104px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle emerald glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(15,120,87,0.13) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Subtle geometric pattern accent (Islamic-inspired, very faint) */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          pointerEvents: "none",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><g fill='none' stroke='%23C9A961' stroke-width='0.7'><path d='M30 5 L55 30 L30 55 L5 30 Z'/><path d='M30 15 L45 30 L30 45 L15 30 Z'/></g></svg>\")",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 56,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
            gap: 64,
            alignItems: "center",
          }}
          className="halal-grid"
        >
          {/* Left: copy */}
          <div>
            <span
              className="badge"
              style={{
                background: "rgba(15,120,87,0.12)",
                borderColor: "rgba(15,120,87,0.32)",
                color: "#5fd2a8",
                marginBottom: 22,
                display: "inline-flex",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#34d399",
                  display: "inline-block",
                  animation: "pulse-dot 2s ease-in-out infinite",
                }}
              />
              {t.halal.badge}
            </span>

            <h2
              style={{
                fontSize: "clamp(30px, 4.5vw, 48px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                marginBottom: 20,
              }}
            >
              {t.halal.title}{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #5fd2a8 0%, #C9A961 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.halal.titleAccent}
              </span>
            </h2>

            <p
              style={{
                fontSize: 16,
                color: "var(--fg-2)",
                lineHeight: 1.75,
                marginBottom: 28,
                maxWidth: 540,
              }}
            >
              {t.halal.desc}
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 32px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {t.halal.bullets.map((b) => (
                <li
                  key={b}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    fontSize: 14,
                    color: "var(--fg-2)",
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 5,
                      background: "rgba(15,120,87,0.18)",
                      border: "1px solid rgba(15,120,87,0.4)",
                      color: "#5fd2a8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: 11,
                      marginTop: 1,
                    }}
                  >
                    ✓
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <form
              onSubmit={submit}
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                maxWidth: 460,
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.halal.ctaPlaceholder}
                disabled={status === "loading" || status === "success"}
                dir={dir === "rtl" ? "ltr" : undefined}
                style={{
                  flex: 1,
                  minWidth: 220,
                  padding: "11px 16px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  color: "var(--fg)",
                  fontSize: 14,
                  outline: "none",
                  fontFamily: "inherit",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#0F7857")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                style={{
                  padding: "11px 20px",
                  background: status === "success" ? "rgba(15,120,87,0.2)" : "#0F7857",
                  color: "#ffffff",
                  border: status === "success" ? "1px solid rgba(15,120,87,0.4)" : "none",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: status === "loading" || status === "success" ? "default" : "pointer",
                  fontFamily: "inherit",
                  transition: "background 0.2s, transform 0.15s, box-shadow 0.25s",
                  boxShadow: "0 0 0 rgba(15,120,87,0)",
                }}
                onMouseEnter={(e) => {
                  if (status === "idle") {
                    e.currentTarget.style.background = "#118A66";
                    e.currentTarget.style.boxShadow = "0 0 24px rgba(15,120,87,0.35)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (status === "idle") {
                    e.currentTarget.style.background = "#0F7857";
                    e.currentTarget.style.boxShadow = "0 0 0 rgba(15,120,87,0)";
                  }
                }}
              >
                {status === "success"
                  ? t.halal.success
                  : status === "loading"
                  ? "…"
                  : t.halal.cta}
              </button>
            </form>
            {status === "error" && (
              <p style={{ marginTop: 10, fontSize: 13, color: "#f87171" }}>{t.halal.error}</p>
            )}
          </div>

          {/* Right: visual card */}
          <div
            style={{
              background: "rgba(15,120,87,0.04)",
              border: "1px solid rgba(15,120,87,0.22)",
              borderRadius: 16,
              padding: "28px 24px",
              boxShadow: "0 0 48px rgba(15,120,87,0.08)",
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: 10,
                color: "rgba(95,210,168,0.85)",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                marginBottom: 16,
              }}
              dir="ltr"
            >
              halal_mode = True
            </div>

            <div
              dir="ltr"
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 13,
                background: "rgba(0,0,0,0.45)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "16px 18px",
                lineHeight: 1.75,
                marginBottom: 18,
              }}
            >
              <div style={{ color: "#c084fc" }}>
                from <span style={{ color: "#fde68a" }}>nimer</span> import{" "}
                <span style={{ color: "#fde68a" }}>Nimer</span>
              </div>
              <div style={{ color: "#56566a", marginTop: 10 }}>
                # Per-request halal gateway
              </div>
              <div style={{ color: "var(--fg)" }}>
                client = <span style={{ color: "#fde68a" }}>Nimer</span>(
                <span style={{ color: "#818cf8" }}>halal_mode</span>=
                <span style={{ color: "#86efac" }}>True</span>)
              </div>
              <div style={{ color: "#56566a", marginTop: 14 }}>
                # Filtered against Sharia policy
              </div>
              <div style={{ color: "var(--fg)" }}>
                resp = client.<span style={{ color: "#93c5fd" }}>chat</span>(
                <span style={{ color: "#86efac" }}>&quot;...&quot;</span>)
              </div>
              <div style={{ color: "var(--fg)", marginTop: 4 }}>
                resp.<span style={{ color: "#818cf8" }}>halal_verified</span>{" "}
                <span style={{ color: "#56566a" }}># True</span>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}
            >
              {[
                { label: dir === "rtl" ? "البنوك" : "Banking", count: "12" },
                { label: dir === "rtl" ? "التعليم" : "Edtech", count: "8" },
                { label: dir === "rtl" ? "القانون" : "Legal", count: "5" },
                { label: dir === "rtl" ? "الفتاوى" : "Fatwa", count: "∞" },
              ].map((p) => (
                <div
                  key={p.label}
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    padding: "12px 14px",
                    background: "rgba(0,0,0,0.2)",
                  }}
                >
                  <div
                    className="font-mono"
                    style={{
                      fontSize: 10,
                      color: "var(--fg-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {p.label}
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#5fd2a8",
                      marginTop: 4,
                    }}
                  >
                    {p.count}{" "}
                    <span
                      style={{
                        fontSize: 11,
                        color: "var(--fg-muted)",
                        fontWeight: 400,
                      }}
                    >
                      {dir === "rtl" ? "حالة استخدام" : "use cases"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .halal-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
