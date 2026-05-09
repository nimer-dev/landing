"use client";

import { useState } from "react";
import { useLocale } from "../lib/LocaleContext";
import LocaleSwitcher from "../components/LocaleSwitcher";
import Logo from "../components/Logo";

const FORMSPREE = "https://formspree.io/f/mnjlyawe";

const ROADMAP_ICONS = [
  // Streaming — animated lines
  (
    <svg
      key="stream"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 6h13" />
      <path d="M3 12h18" opacity="0.7" />
      <path d="M3 18h10" opacity="0.45" />
      <path d="M19 6 L22 9 L19 12" />
    </svg>
  ),
  // Virtual keys — key icon
  (
    <svg
      key="keys"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="7" cy="14" r="4" />
      <path d="M11 14h11" />
      <path d="M19 14v4" />
      <path d="M22 14v3" />
    </svg>
  ),
  // Function calling — brackets
  (
    <svg
      key="fn"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 6 L5 12 L9 18" />
      <path d="M15 6 L19 12 L15 18" />
      <path d="M14 5 L10 19" opacity="0.6" />
    </svg>
  ),
  // Halal — shield with check
  (
    <svg
      key="halal"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12 L11 14 L15 10" />
    </svg>
  ),
  // Webhooks — circle with arrows
  (
    <svg
      key="hook"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 4 V8" />
      <path d="M16.5 7 L14.5 9.5" />
      <path d="M19 13 L15 13" opacity="0.65" />
      <path d="M5 13 L9 13" opacity="0.65" />
      <path d="M7 18 L9.5 14.5" />
    </svg>
  ),
];

const ROADMAP_HUES = [
  "#818cf8", // streaming
  "#C9A961", // keys
  "#34d399", // fn
  "#5fd2a8", // halal (emerald)
  "#fbbf24", // webhooks
];

export default function MaintenanceClient() {
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
        body: JSON.stringify({ email, source: "maintenance-launch-list" }),
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
    <main
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        direction: dir,
      }}
    >
      {/* Mini-navbar */}
      <header
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: "20px 28px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          zIndex: 10,
        }}
      >
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
        <LocaleSwitcher />
      </header>

      <div
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "112px 28px 80px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Badge */}
        <div
          className="badge"
          style={{
            display: "inline-flex",
            marginBottom: 24,
            background: "rgba(201,169,97,0.1)",
            borderColor: "rgba(201,169,97,0.32)",
            color: "#C9A961",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#C9A961",
              display: "inline-block",
              animation: "pulse-dot 2s ease-in-out infinite",
            }}
          />
          {t.maintenance.badge}
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(34px, 5.5vw, 60px)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            margin: "0 0 22px",
            color: "var(--fg)",
            maxWidth: 760,
          }}
        >
          {t.maintenance.title1}
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #C9A961 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t.maintenance.title2}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 17,
            color: "var(--fg-2)",
            lineHeight: 1.7,
            maxWidth: 660,
            margin: "0 0 40px",
          }}
        >
          {t.maintenance.subtitle}
        </p>

        {/* ETA pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 14px",
            borderRadius: 999,
            background: "rgba(99,102,241,0.08)",
            border: "1px solid rgba(99,102,241,0.25)",
            fontSize: 12,
            fontFamily: "var(--font-geist-mono), monospace",
            letterSpacing: "0.04em",
            color: "#a5b4fc",
            marginBottom: 56,
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
            aria-hidden
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7 V12 L15 14" />
          </svg>
          {t.maintenance.eta}
        </div>

        {/* Roadmap section */}
        <section style={{ marginBottom: 56 }}>
          <div
            className="font-mono"
            style={{
              fontSize: 11,
              color: "var(--fg-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              marginBottom: 18,
            }}
          >
            {t.maintenance.roadmapHeader}
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 1,
              border: "1px solid var(--border)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            {t.maintenance.roadmap.map((item, i) => (
              <li
                key={item.title}
                style={{
                  background: "rgba(255,255,255,0.012)",
                  padding: "20px 22px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  borderRight:
                    (i % 2 === 0 && i !== t.maintenance.roadmap.length - 1)
                      ? "1px solid var(--border)"
                      : "none",
                  borderBottom:
                    i < t.maintenance.roadmap.length - (t.maintenance.roadmap.length % 2 === 0 ? 2 : 1)
                      ? "1px solid var(--border)"
                      : "none",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: `${ROADMAP_HUES[i]}15`,
                    border: `1px solid ${ROADMAP_HUES[i]}40`,
                    color: ROADMAP_HUES[i],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  {ROADMAP_ICONS[i]}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--fg)",
                      letterSpacing: "-0.005em",
                      marginBottom: 4,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--fg-2)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Email capture */}
        <section
          style={{
            border: "1px solid var(--border)",
            borderRadius: 14,
            padding: "28px 26px",
            background: "rgba(99,102,241,0.04)",
            maxWidth: 560,
          }}
        >
          <h2
            style={{
              fontSize: 18,
              fontWeight: 600,
              margin: "0 0 14px",
              letterSpacing: "-0.01em",
            }}
          >
            {t.maintenance.emailHeader}
          </h2>
          <form
            onSubmit={submit}
            style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.maintenance.emailPlaceholder}
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
              onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="btn-primary"
              style={{
                padding: "11px 20px",
                borderRadius: 8,
                fontSize: 14,
                fontFamily: "inherit",
              }}
            >
              {status === "success"
                ? t.maintenance.emailSuccess
                : status === "loading"
                ? "…"
                : t.maintenance.emailSubmit}
            </button>
          </form>
          {status === "error" && (
            <p style={{ marginTop: 10, fontSize: 13, color: "#f87171" }}>
              {t.maintenance.emailError}
            </p>
          )}
        </section>

        {/* Existing-user link */}
        <p
          style={{
            marginTop: 32,
            fontSize: 13,
            color: "var(--fg-muted)",
          }}
        >
          {t.maintenance.existingUser}{" "}
          <a
            href="https://dashboard.nimer.dev"
            style={{
              color: "var(--accent-2)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            {t.maintenance.existingUserCta}
          </a>
        </p>

        {/* Footer mini */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 24,
            borderTop: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div
            className="font-mono"
            style={{ fontSize: 11, color: "var(--fg-muted)" }}
          >
            {t.footer.built}
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            <a
              href="https://github.com/nimer-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono"
              style={{
                padding: "6px 12px",
                fontSize: 12,
                color: "var(--fg-muted)",
                textDecoration: "none",
                borderRadius: 6,
                transition: "color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--fg)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--fg-muted)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {t.footer.github}
            </a>
            <a
              href="mailto:nimershahm@gmail.com"
              className="font-mono"
              style={{
                padding: "6px 12px",
                fontSize: 12,
                color: "var(--fg-muted)",
                textDecoration: "none",
                borderRadius: 6,
                transition: "color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--fg)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--fg-muted)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {t.footer.contact}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
