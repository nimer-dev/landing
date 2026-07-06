"use client";

import { useState } from "react";
import { useLocale } from "./lib/LocaleContext";
import LocaleSwitcher from "./components/LocaleSwitcher";
import Logo from "./components/Logo";

const FORMSPREE = "https://formspree.io/f/mnjlyawe";

const ROADMAP_ICONS = [
  // Nimer Cortex — a small neural / node graph (the "brain")
  (
    <svg
      key="cortex"
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
      <circle cx="6" cy="7" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="17" cy="17" r="2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M8 7 L16 6" opacity="0.6" />
      <path d="M6 9 L7 15" opacity="0.6" />
      <path d="M8 16 L15 16.5" opacity="0.6" />
      <path d="M18 8 L17 15" opacity="0.6" />
      <path d="M8 8 L16 16" opacity="0.4" />
    </svg>
  ),
  // Nimer Gateway — a hub routing to many endpoints
  (
    <svg
      key="gateway"
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
      <circle cx="5" cy="12" r="2.2" />
      <circle cx="19" cy="5" r="1.8" />
      <circle cx="20" cy="12" r="1.8" />
      <circle cx="19" cy="19" r="1.8" />
      <path d="M7 11 L17.2 5.6" />
      <path d="M7.2 12 L18 12" />
      <path d="M7 13 L17.2 18.4" />
    </svg>
  ),
  // More on the way — plus in a circle
  (
    <svg
      key="more"
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
      <circle cx="12" cy="12" r="9" opacity="0.7" strokeDasharray="3 3" />
      <path d="M12 8 V16" />
      <path d="M8 12 H16" />
    </svg>
  ),
];

const ROADMAP_HUES = [
  "#818cf8", // Cortex — indigo
  "#34d399", // Gateway — emerald
  "#C9A961", // More — gold
];

export default function HubClient() {
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
        body: JSON.stringify({ email, source: "bynimer-hub-list" }),
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
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      flexWrap: "wrap",
                      marginBottom: 6,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--fg)",
                        letterSpacing: "-0.005em",
                      }}
                    >
                      {item.title}
                    </span>
                    {item.status && (
                      <span
                        className="font-mono"
                        style={{
                          fontSize: 10,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          padding: "2px 7px",
                          borderRadius: 999,
                          color: ROADMAP_HUES[i],
                          background: `${ROADMAP_HUES[i]}14`,
                          border: `1px solid ${ROADMAP_HUES[i]}33`,
                        }}
                      >
                        {item.status}
                      </span>
                    )}
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
                  {item.href && (
                    <a
                      href={item.href}
                      // WHY: only force a new tab for external product links (dashboard);
                      // the internal /gateway marketing page should navigate in-place.
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-mono"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        marginTop: 10,
                        fontSize: 12,
                        color: ROADMAP_HUES[i],
                        textDecoration: "none",
                      }}
                    >
                      {dir === "rtl" ? "افتح ←" : "Open →"}
                    </a>
                  )}
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
