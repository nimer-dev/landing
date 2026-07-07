"use client";

// WHY: The live ByNimer homepage. A Cortex-led, research-first company site in the
// calm-scientific register (deep background, soft auras, generous whitespace, quiet
// motion). Composed from focused section components driven entirely by dict.home so the
// page stays bilingual + RTL-safe. Nothing here discloses a mechanism beyond the filed
// provisional (inventions A–E); every claim traces to an approved research record.

import { useEffect, useState } from "react";
import { useLocale } from "./lib/LocaleContext";
import type { Dict } from "./lib/i18n";
import LocaleSwitcher from "./components/LocaleSwitcher";
import Logo from "./components/Logo";

const FORMSPREE = "https://formspree.io/f/mnjlyawe";
const X_URL = "https://x.com/trynimer";
const CONTACT = "mailto:nimershahm@gmail.com";

const ACCENT = "#818cf8";
const GOLD = "#C9A961";

/**
 * Reveal-on-scroll: adds `.is-visible` to every `.reveal` element as it enters the
 * viewport (once). Falls back to showing everything if IntersectionObserver is absent.
 */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function HubClient() {
  const { t, dir } = useLocale();
  const home = t.home;
  const arrow = dir === "rtl" ? "←" : "→";
  useReveal();

  return (
    <main style={{ position: "relative", overflow: "hidden", direction: dir }}>
      <Nav home={home} />
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 24px" }}>
        <Hero home={home} dir={dir} arrow={arrow} />
        <Belief home={home} />
        <BrainMetaphor home={home} />
        <CortexSpotlight home={home} arrow={arrow} />
        <ResearchProof home={home} arrow={arrow} />
        <MoreOnTheWay home={home} />
        <FollowCTA home={home} />
        <Footer home={home} />
      </div>
    </main>
  );
}

/* ─────────────────────────── Nav ─────────────────────────── */
function Nav({ home }: { home: Dict["home"] }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        background: "rgba(7,7,14,0.72)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <a href="/" aria-label="Nimer home" style={{ display: "flex", textDecoration: "none", marginInlineEnd: "auto" }}>
        <Logo size={26} />
      </a>
      <a
        href="/research"
        className="font-mono"
        style={{ fontSize: 13, color: "var(--fg-2)", textDecoration: "none" }}
      >
        {home.nav.research}
      </a>
      <a href="#follow" className="btn-primary" style={{ padding: "8px 15px", borderRadius: 8, fontSize: 13 }}>
        {home.nav.follow}
      </a>
      <LocaleSwitcher />
    </header>
  );
}

/* ────────────────────────── Hero ─────────────────────────── */
// WHY: two-column hero — copy on the lead side, a framed "specimen" figure on the other,
// then a full-width proof strip anchoring the bottom edge. This fills the column width
// and reads as one deliberate composition instead of text hugging one edge with a
// floating ornament. Collapses to a single stacked column below 900px (see .hero-grid).
function Hero({ home, dir, arrow }: { home: Dict["home"]; dir: string; arrow: string }) {
  return (
    <section style={{ position: "relative", paddingTop: "clamp(72px, 12vw, 128px)", paddingBottom: "clamp(40px, 7vw, 72px)" }}>
      <div className="hero-aura" />
      <div className="hero-grid" style={{ position: "relative", zIndex: 2 }}>
        {/* ── Left: copy ── */}
        <div>
          <div
            className="reveal badge"
            style={{ background: "rgba(201,169,97,0.1)", borderColor: "rgba(201,169,97,0.32)", color: GOLD, marginBottom: 26 }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD, animation: "pulse-dot 2s ease-in-out infinite" }} />
            {home.hero.badge}
          </div>

          <h1
            className="reveal"
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              fontWeight: 700,
              lineHeight: 1.07,
              letterSpacing: "-0.03em",
              margin: "0 0 24px",
              color: "var(--fg)",
            }}
          >
            {home.hero.title1}
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #818cf8 0%, #c084fc 52%, #C9A961 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {home.hero.title2}
            </span>
          </h1>

          <p className="reveal" style={{ fontSize: 18, color: "var(--fg-2)", lineHeight: 1.7, maxWidth: 560, margin: "0 0 34px" }}>
            {home.hero.subtitle}
          </p>

          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 22 }}>
            <a href="/research" className="btn-primary" style={{ padding: "12px 22px", borderRadius: 9, fontSize: 15 }}>
              {home.hero.ctaResearch} <span className="flip-on-rtl">{arrow}</span>
            </a>
            <a href="#follow" className="btn-ghost" style={{ padding: "12px 22px", borderRadius: 9, fontSize: 15 }}>
              {home.hero.ctaFollow}
            </a>
          </div>

          <p className="reveal font-mono" style={{ fontSize: 12, color: "var(--fg-muted)", letterSpacing: "0.03em", margin: 0 }}>
            {home.hero.note}
          </p>
        </div>

        {/* ── Right: framed specimen figure (the 12→1 symmetry ring) ── */}
        <HeroFigure caption={home.hero.figCaption} dir={dir} />
      </div>

      {/* ── Proof strip ── */}
      <div className="hero-stats reveal">
        {home.hero.stats.map((s) => (
          <div key={s.label} className="hero-stat">
            <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--fg)", lineHeight: 1.1 }}>{s.value}</div>
            <div style={{ fontSize: 13, color: "var(--fg-2)", marginTop: 5 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// WHY: the flagship motif presented as a labelled figure, not a floating ornament — the
// 12→1 symmetry ring from Paper 4 (twelve nodes on a cycle, one grounded and lit) inside
// a framed specimen card with a mono caption tying it to the research. The ring itself is
// aria-hidden (decorative); the caption carries the meaning.
function HeroFigure({ caption, dir }: { caption: string; dir: string }) {
  const cx = 130;
  const cy = 130;
  const r = 100;
  const nodes = Array.from({ length: 12 }, (_, i) => {
    const a = (Math.PI / 6) * i - Math.PI / 2;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  });
  return (
    <figure
      className="reveal"
      style={{
        margin: 0,
        border: "1px solid var(--border)",
        background: "radial-gradient(120% 120% at 50% 0%, rgba(99,102,241,0.08), transparent 70%), var(--bg-card)",
        borderRadius: 18,
        padding: "clamp(20px, 3vw, 32px)",
      }}
    >
      <svg
        aria-hidden
        viewBox="0 0 260 260"
        style={{ display: "block", width: "100%", maxWidth: 340, height: "auto", margin: "0 auto" }}
      >
        <g className="orbit-slow">
          <circle cx={cx} cy={cy} r={r} fill="none" stroke={ACCENT} strokeOpacity="0.3" strokeWidth="1" />
          {nodes.map((n, i) => (
            <line key={`l${i}`} x1={cx} y1={cy} x2={n.x} y2={n.y} stroke={ACCENT} strokeOpacity={i === 0 ? 0.55 : 0.08} strokeWidth={i === 0 ? 1.4 : 1} />
          ))}
          {nodes.map((n, i) => (
            <circle key={i} cx={n.x} cy={n.y} r={i === 0 ? 7 : 3.5} fill={i === 0 ? GOLD : ACCENT} fillOpacity={i === 0 ? 0.95 : 0.45} />
          ))}
          <circle cx={cx} cy={cy} r="3" fill={ACCENT} fillOpacity="0.8" />
        </g>
      </svg>
      <figcaption
        style={{ marginTop: 18, fontSize: 11.5, color: "var(--fg-muted)", letterSpacing: "0.04em", textAlign: "center", direction: dir === "rtl" ? "rtl" : "ltr" }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

/* ───────────────────────── Belief ────────────────────────── */
function Belief({ home }: { home: Dict["home"] }) {
  return (
    <section className="section reveal" style={{ borderTop: "1px solid var(--border)" }}>
      <p className="eyebrow" style={{ marginBottom: 18 }}>{home.belief.eyebrow}</p>
      <p style={{ fontSize: "clamp(20px, 2.9vw, 28px)", lineHeight: 1.5, letterSpacing: "-0.015em", color: "var(--fg)", maxWidth: 820, margin: 0, fontWeight: 500 }}>
        {home.belief.body}
      </p>
    </section>
  );
}

/* ─────────────────── Brain, not an engine ────────────────── */
function BrainMetaphor({ home }: { home: Dict["home"] }) {
  const m = home.metaphor;
  const cols: { label: string; body: string; muted: boolean }[] = [
    { label: m.engineLabel, body: m.engineBody, muted: true },
    { label: m.brainLabel, body: m.brainBody, muted: false },
  ];
  return (
    <section className="section reveal" style={{ borderTop: "1px solid var(--border)" }}>
      <p className="eyebrow" style={{ marginBottom: 14 }}>{m.eyebrow}</p>
      <h2 className="section-title" style={{ marginBottom: 32 }}>{m.title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
        {cols.map((c) => (
          <div
            key={c.label}
            style={{
              border: c.muted ? "1px solid var(--border)" : "1px solid rgba(99,102,241,0.3)",
              background: c.muted ? "rgba(255,255,255,0.015)" : "rgba(99,102,241,0.06)",
              borderRadius: 14,
              padding: "26px 24px",
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.02em", marginBottom: 12, color: c.muted ? "var(--fg-2)" : ACCENT }}>
              {c.label}
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: c.muted ? "var(--fg-2)" : "var(--fg)", margin: 0 }}>
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────── Nimer Cortex spotlight ──────────────── */
function CortexSpotlight({ home, arrow }: { home: Dict["home"]; arrow: string }) {
  const c = home.cortex;
  return (
    <section className="section reveal" style={{ borderTop: "1px solid var(--border)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
        <p className="eyebrow" style={{ margin: 0, color: ACCENT }}>{c.eyebrow}</p>
        <span
          className="font-mono"
          style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.06em", padding: "2px 9px", borderRadius: 999, color: ACCENT, background: "rgba(129,140,248,0.12)", border: "1px solid rgba(129,140,248,0.3)" }}
        >
          {c.status}
        </span>
      </div>
      <h2 className="section-title" style={{ marginBottom: 16, maxWidth: 760 }}>{c.title}</h2>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-2)", maxWidth: 720, margin: "0 0 34px" }}>{c.body}</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 14, marginBottom: 32 }}>
        {c.pillars.map((p, i) => (
          <div key={p.title} className="lift" style={{ border: "1px solid var(--border)", background: "var(--bg-card)", borderRadius: 12, padding: "20px 20px" }}>
            <div
              style={{ width: 30, height: 30, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, background: "rgba(129,140,248,0.12)", border: "1px solid rgba(129,140,248,0.3)", color: ACCENT }}
            >
              <PillarGlyph index={i} />
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "var(--fg)", marginBottom: 7 }}>{p.title}</div>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--fg-2)", margin: 0 }}>{p.desc}</p>
          </div>
        ))}
      </div>

      <a href="/research" className="btn-ghost" style={{ padding: "11px 20px", borderRadius: 9, fontSize: 14 }}>
        {c.cta} <span className="flip-on-rtl">{arrow}</span>
      </a>
    </section>
  );
}

// WHY: four minimal glyphs for the Cortex pillars — composition, reasoning loop,
// grounding anchor, heterogeneous lobes. Kept tiny and abstract to stay calm.
function PillarGlyph({ index }: { index: number }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (index) {
    case 0: // composition — overlapping squares
      return (<svg {...common}><rect x="4" y="4" width="10" height="10" rx="2" /><rect x="10" y="10" width="10" height="10" rx="2" opacity="0.6" /></svg>);
    case 1: // reasoning loop — circular arrows
      return (<svg {...common}><path d="M20 12a8 8 0 1 1-2.3-5.6" /><path d="M20 4v4h-4" /></svg>);
    case 2: // grounded memory — node anchored to baseline
      return (<svg {...common}><circle cx="12" cy="7" r="3" /><path d="M12 10v7" /><path d="M6 20h12" opacity="0.6" /></svg>);
    default: // heterogeneous lobes — three linked nodes
      return (<svg {...common}><circle cx="7" cy="8" r="2.4" /><circle cx="17" cy="7" r="2.4" /><circle cx="13" cy="17" r="2.4" /><path d="M9 9 L15 8 M9 9 L12 15 M15 9 L13 15" opacity="0.55" /></svg>);
  }
}

/* ─────────────────────── Research proof ──────────────────── */
function ResearchProof({ home, arrow }: { home: Dict["home"]; arrow: string }) {
  const pr = home.proof;
  return (
    <section className="section reveal" style={{ borderTop: "1px solid var(--border)" }}>
      <p className="eyebrow" style={{ marginBottom: 14 }}>{pr.eyebrow}</p>
      <h2 className="section-title" style={{ marginBottom: 30, maxWidth: 700 }}>{pr.title}</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14, marginBottom: 44 }}>
        {pr.items.map((item) => (
          <div key={item.label} style={{ borderInlineStart: `2px solid ${ACCENT}`, paddingInlineStart: 16 }}>
            <div style={{ fontSize: 14.5, fontWeight: 600, color: "var(--fg)", marginBottom: 6 }}>{item.label}</div>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--fg-2)", margin: 0 }}>{item.body}</p>
          </div>
        ))}
      </div>

      <p className="eyebrow" style={{ marginBottom: 14, color: GOLD }}>{pr.papersEyebrow}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14, marginBottom: 26 }}>
        {pr.papers.map((paper) => (
          <a
            key={paper.href}
            href={paper.href}
            className="lift"
            style={{ display: "block", border: "1px solid var(--border)", background: "var(--bg-card)", borderRadius: 12, padding: "20px 22px", textDecoration: "none" }}
          >
            <span className="font-mono" style={{ fontSize: 11, color: GOLD, letterSpacing: "0.05em" }}>{paper.tag}</span>
            <div style={{ fontSize: 16, fontWeight: 600, color: "var(--fg)", margin: "8px 0 8px" }}>{paper.name}</div>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--fg-2)", margin: "0 0 12px" }}>{paper.blurb}</p>
            <span className="font-mono" style={{ fontSize: 12, color: ACCENT }}>{home.cortex.cta} <span className="flip-on-rtl">{arrow}</span></span>
          </a>
        ))}
      </div>

      <a href="/research" className="font-mono" style={{ fontSize: 13, color: ACCENT, textDecoration: "none" }}>
        {pr.allResearch} <span className="flip-on-rtl">{arrow}</span>
      </a>
    </section>
  );
}

/* ─────────────────────── More on the way ─────────────────── */
function MoreOnTheWay({ home }: { home: Dict["home"] }) {
  const m = home.more;
  return (
    <section className="section-tight reveal" style={{ borderTop: "1px solid var(--border)" }}>
      <div
        style={{ border: "1px dashed var(--border-2)", borderRadius: 14, padding: "26px 26px", display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}
      >
        <div style={{ width: 40, height: 40, borderRadius: 10, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(201,169,97,0.1)", border: "1px solid rgba(201,169,97,0.3)", color: GOLD }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="12" cy="12" r="9" opacity="0.7" strokeDasharray="3 3" />
            <path d="M12 8v8M8 12h8" />
          </svg>
        </div>
        <div style={{ flex: 1, minWidth: 220 }}>
          <p className="eyebrow" style={{ margin: "0 0 6px", color: GOLD }}>{m.eyebrow}</p>
          <div style={{ fontSize: 18, fontWeight: 600, color: "var(--fg)", marginBottom: 5 }}>{m.title}</div>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--fg-2)", margin: 0 }}>{m.body}</p>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Follow ───────────────────────── */
function FollowCTA({ home }: { home: Dict["home"] }) {
  const { dir } = useLocale();
  const f = home.follow;
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
        body: JSON.stringify({ email, source: "bynimer-home" }),
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
    <section id="follow" className="section reveal" style={{ borderTop: "1px solid var(--border)" }}>
      <div style={{ border: "1px solid var(--border)", borderRadius: 16, padding: "clamp(28px, 5vw, 48px)", background: "radial-gradient(120% 120% at 0% 0%, rgba(99,102,241,0.09), transparent 60%)", maxWidth: 720 }}>
        <h2 className="section-title" style={{ marginBottom: 12 }}>{f.title}</h2>
        <p style={{ fontSize: 15.5, color: "var(--fg-2)", lineHeight: 1.65, margin: "0 0 24px", maxWidth: 520 }}>{f.subtitle}</p>
        <form onSubmit={submit} style={{ display: "flex", gap: 8, flexWrap: "wrap", maxWidth: 520 }}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={f.placeholder}
            disabled={status === "loading" || status === "success"}
            dir={dir === "rtl" ? "ltr" : undefined}
            style={{ flex: 1, minWidth: 220, padding: "12px 16px", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", borderRadius: 9, color: "var(--fg)", fontSize: 14, outline: "none", fontFamily: "inherit", transition: "border-color 0.2s" }}
            onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
          />
          <button type="submit" disabled={status === "loading" || status === "success"} className="btn-primary" style={{ padding: "12px 22px", borderRadius: 9, fontSize: 14 }}>
            {status === "success" ? f.success : status === "loading" ? "…" : f.submit}
          </button>
        </form>
        {status === "error" && <p style={{ marginTop: 10, fontSize: 13, color: "#f87171" }}>{f.error}</p>}
      </div>
    </section>
  );
}

/* ────────────────────────── Footer ───────────────────────── */
function Footer({ home }: { home: Dict["home"] }) {
  const f = home.footer;
  const linkStyle: React.CSSProperties = { padding: "6px 10px", fontSize: 12.5, color: "var(--fg-muted)", textDecoration: "none", borderRadius: 6 };
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "28px 0 56px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
      <div className="font-mono" style={{ fontSize: 11.5, color: "var(--fg-muted)" }}>{f.built}</div>
      <div style={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <a href="/research" className="font-mono" style={linkStyle}>{f.research}</a>
        <a href="/terms" className="font-mono" style={linkStyle}>{f.terms}</a>
        <a href={X_URL} target="_blank" rel="noopener noreferrer" className="font-mono" style={linkStyle}>{f.twitter}</a>
        <a href={CONTACT} className="font-mono" style={linkStyle}>{f.contact}</a>
      </div>
    </footer>
  );
}
