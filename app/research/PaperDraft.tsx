import type { ReactNode } from "react";

// WHY: One shared presentational shell for every full-text paper-draft sub-page
// (/research/<slug>). Each paper page is just a data object + <PaperDraft {...data} />,
// so the layout, theme tokens, and legal footers live in exactly one place (DRY / SRP).
// Mirrors the inline-token, self-contained style of app/research/page.tsx so the sub-pages
// inherit the site look with zero new dependencies. Content is Majdi-approved plain-language
// draft text; nothing here discloses a mechanism beyond the filed provisional (inventions A–E).

// Theme tokens — kept identical to app/research/page.tsx so the pages read as one surface.
const BG = "var(--bg, #07070e)";
const FG = "var(--fg, #eef0f8)";
const ACCENT = "#6366f1";
const MUTED = "#a0a4b4";
const FAINT = "#7a859e";
const GOLD = "#c9a961";

export type Para = { lead?: string; body: ReactNode };
export type Section = { heading: string; paras: Para[] };

export type PaperDraftData = {
  /** Small eyebrow above the title, e.g. "ByNimer · Research · Paper 4". */
  kicker: string;
  /** The paper's full title. */
  title: string;
  /** One-sentence positioning line under the title. */
  subtitle: string;
  /** Plain-language abstract, rendered in a bordered callout. */
  abstract: ReactNode;
  /** Ordered full-text sections. */
  sections: Section[];
  /** Status pills, e.g. ["draft", "arXiv — coming"]. */
  status: string[];
  /** Human-readable last-updated string (no build-time Date, keeps output stable). */
  updated: string;
};

/**
 * Full-text plain-language draft page for a single research paper.
 *
 * @param props - the paper's structured content (see {@link PaperDraftData}).
 * @returns a self-contained server-rendered page section.
 */
export default function PaperDraft(props: PaperDraftData) {
  const { kicker, title, subtitle, abstract, sections, status, updated } = props;

  return (
    <div style={{ minHeight: "100vh", background: BG, color: FG, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 120px" }}>

        <a
          href="/research"
          style={{ color: ACCENT, fontSize: 14, textDecoration: "none", display: "inline-block", marginBottom: 40 }}
        >
          ← Back to research
        </a>

        {/* ── Header ── */}
        <p style={{ color: GOLD, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
          {kicker}
        </p>
        <h1 style={{ fontSize: 34, fontWeight: 700, marginBottom: 16, letterSpacing: "-0.02em", lineHeight: 1.22 }}>
          {title}
        </h1>
        <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, marginBottom: 18 }}>
          {subtitle}
        </p>

        {/* ── Status pills ── */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginBottom: 36 }}>
          {status.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 11.5,
                color: FAINT,
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 999,
                padding: "2px 10px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ── Abstract callout ── */}
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderLeft: `2px solid ${ACCENT}`,
            borderRadius: 10,
            padding: "18px 20px",
            background: "rgba(255,255,255,0.02)",
            marginBottom: 48,
          }}
        >
          <p style={{ color: GOLD, fontSize: 11.5, letterSpacing: "0.07em", textTransform: "uppercase", margin: 0, marginBottom: 10 }}>
            Abstract
          </p>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0 }}>
            {abstract}
          </p>
        </div>

        {/* ── Body sections ── */}
        {sections.map((section) => (
          <section key={section.heading} style={{ marginBottom: 44 }}>
            <h2 style={{ fontSize: 21, fontWeight: 600, marginBottom: 18, color: FG, letterSpacing: "-0.01em" }}>
              {section.heading}
            </h2>
            {section.paras.map((para, i) => (
              <p key={i} style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.75, marginBottom: 16 }}>
                {para.lead && <strong style={{ color: FG, fontWeight: 600 }}>{para.lead} </strong>}
                {para.body}
              </p>
            ))}
          </section>
        ))}

        {/* ── IP / moat (one line, no documents — mirrors app/research/page.tsx) ── */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, marginBottom: 32 }}>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: FG, fontWeight: 600 }}>Intellectual property.</strong> The core
            inventions behind this research are protected by a U.S. provisional patent (filed July
            2026). Technical details are available to serious partners under NDA.
          </p>
        </div>

        {/* ── Footer disclaimer ── */}
        <p style={{ color: FAINT, fontSize: 12.5, lineHeight: 1.6, margin: 0 }}>
          Research draft, not peer-reviewed; no claim on this page is a legal or novelty statement.
          Last updated {updated}. Contact:{" "}
          <a href="mailto:nimershahm@gmail.com" style={{ color: ACCENT, textDecoration: "none" }}>
            nimershahm@gmail.com
          </a>
        </p>

      </div>
    </div>
  );
}
