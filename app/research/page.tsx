import type { Metadata } from "next";

// WHY: The public research surface for ByNimer. Mirrors the static-page pattern of
// app/terms/page.tsx (self-contained server component, inline theme tokens) so it inherits
// the site look without new dependencies. Content is finalized, Majdi-approved drafts; every
// number traces to a committed research record. Papers are labeled "draft" — arXiv versions
// follow once each paper's citation pass completes. No mechanism beyond the filed provisional
// (inventions A–E) is disclosed here.

export const metadata: Metadata = {
  title: "Research",
  description:
    "Nimer's research on a zero-gradient relational memory — how it stores knowledge, reasons over it, and grounds itself in the real world. Built in the open, honest results included.",
};

// Theme tokens (match app/terms/page.tsx + globals).
const BG = "var(--bg, #07070e)";
const FG = "var(--fg, #eef0f8)";
const ACCENT = "#6366f1";
const MUTED = "#a0a4b4";
const FAINT = "#7a859e";
const GOLD = "#c9a961";

type Paper = {
  name: string;
  blurb: string;
  summaryHref?: string;
  // WHY: when present, renders a "[draft →]" link to the paper's full-text sub-page
  // (/research/<slug>). Only papers with Majdi-approved public full text carry one.
  draftHref?: string;
  tags: string[];
};

const PAPERS: Paper[] = [
  {
    name: "Paper 4 — Grounding Is Symmetry-Breaking",
    blurb:
      "Internal consistency determines a relational memory only up to its automorphism group; grounding is the symmetry-breaking action that resolves the rest.",
    summaryHref: "#paper4",
    draftHref: "/research/grounding-is-symmetry-breaking",
    tags: ["draft", "arXiv — coming"],
  },
  {
    name: "Paper 5 — Two Channels to a Grounded World",
    blurb:
      "Identity from percepts, relation from time — how a memory grounds real percepts, with two honest null results that make the case.",
    summaryHref: "#paper5",
    draftHref: "/research/two-channels-to-a-grounded-world",
    tags: ["draft"],
  },
  {
    name: "Paper 3 — A Zero-Gradient Relational Kernel",
    blurb: "A complete cognitive loop with zero gradient steps.",
    tags: ["draft"],
  },
  {
    name: "Papers 1–2 — Composition Transfers Capacity, Not Content · Self-Regulating Composition",
    blurb: "The composition line — Paper 1 pending a donor-model re-run.",
    tags: ["drafts"],
  },
];

const RIGOR: { label: string; body: string }[] = [
  {
    label: "Reproducible",
    body: "every number recomputes from a committed script and a git commit, across 20 random seeds, with control arms.",
  },
  {
    label: "Honest",
    body: "we publish our null results on purpose — two of our sharpest findings are NULLs.",
  },
  {
    label: "Corroborated",
    body: "an independent Rust reimplementation agrees with the original research code to golden parity.",
  },
  {
    label: "Lean",
    body: "most experiments run at $0 on CPU; the whole research line ran on a single 6 GB GPU.",
  },
];

type Para = { lead?: string; body: string };
type Summary = { id: string; kicker: string; title: string; paras: Para[] };

const SUMMARIES: Summary[] = [
  {
    id: "paper4",
    kicker: "Paper 4",
    title: "Grounding Is Symmetry-Breaking — in plain language",
    paras: [
      {
        lead: "The question.",
        body: "Can a memory system check its own knowledge for truth, using only internal consistency — or does it always, at some point, need to consult the outside world?",
      },
      {
        lead: "The answer.",
        body: "There's a hard ceiling, and it's exact. No matter how many internal cross-checks a memory runs, it can never distinguish its real world from a perfectly consistent relabeling of that world. In mathematics, those relabelings form a structure's automorphism group. So internal consistency pins down the world only up to that group of symmetries. The one lie no internal check can ever catch is exactly one of those symmetries — a story that is wrong but perfectly self-consistent.",
      },
      {
        lead: "A concrete picture.",
        body: "Imagine a memory that has learned the twelve months and the relation “comes after.” It can perfectly learn the shape of the year — a twelve-step cycle — but it cannot tell, from internal logic alone, which point on the cycle is January. Twelve equally consistent worlds remain.",
      },
      {
        lead: "The fix.",
        body: "The only thing that breaks the tie is grounding: a single anchor to something the system cannot itself relabel — one real observation from the outside. One anchor collapses the twelve possible worlds to the one true world. And it's better than a patch: add a second anchor and the system can detect a corrupted one; add a third and it can locate the liar. Grounding behaves like an error-correcting code.",
      },
      {
        lead: "Why it matters.",
        body: "This says something general about any memory — biological or artificial — that needs to know which world it's in, not merely a self-consistent world: it must be grounded in something outside itself. It reframes a class of AI hallucinations as an uncorrected symmetry — a self-consistent story the system was never anchored enough to rule out.",
      },
      {
        lead: "How it was tested (the honest part).",
        body: "The experiments use deliberately simple, toy structures — the claim is about the structure of grounding, not about beating a benchmark. Several early predictions were wrong; we found the causes and published the corrections. Every figure reproduces from a committed script across 20 random seeds, and an independent from-scratch reimplementation in Rust agrees with the original — strong corroboration, though not a proof.",
      },
    ],
  },
  {
    id: "paper5",
    kicker: "Paper 5 · draft",
    title: "Two Channels to a Grounded World — in plain language",
    paras: [
      {
        lead: "Where it starts.",
        body: "Paper 4 proved a memory can pin down its world only up to a symmetry — and that the fix is grounding, an external anchor the system can't relabel. Paper 5 asks the next, practical question: when the anchors are real perceptions — actual pixels, actual measurements — how does a memory ground itself, and what does it cost?",
      },
      {
        body: "The finding: grounding takes two different channels, and neither one alone is enough.",
      },
      {
        lead: "Channel 1 — identity (“what is this?”).",
        body: "A real perception can bind to the right internal symbol. We embed a month-in-context with an off-the-shelf text encoder, and it locks onto its symbol perfectly. Swap the text for an image — the month word rendered to pixels, read by a vision encoder that never saw it as text — and every curve is essentially identical. So the “what” channel is real and works across senses. But a straight perceptual match is just a lookup: it grounds exactly the things it's shown, and does not spread through the structure — so grounding this way costs one anchor per symbol: expensive.",
      },
      {
        lead: "The gap (an honest null result).",
        body: "Could the relationship between things — “which month comes after which” — be read straight out of the perceptions? We tested the cleanest version and the answer is no: there is no reliable “comes-after” operator hiding in the static image geometry. Static perception carries identity, not relation. This null is the hinge of the whole paper — it's why a second channel is needed.",
      },
      {
        lead: "Channel 2 — relation (“when did it happen?”), and it's free.",
        body: "A body moving through the world experiences things in order. That temporal order hands you the relationships for nothing: consecutive perceptions are consecutive months. Time fixes the shape of the cycle, leaving only the one symmetry Paper 4 identified — and one external anchor breaks it, grounding all twelve real perceptions at once (cheap).",
      },
      {
        lead: "The two channels cover each other's blind spots.",
        body: "The “what” channel catches a perception whose content was corrupted (right time slot, wrong thing) — which the “when” channel is blind to. The “when” channel catches a false anchor — which the “what” channel can't. A grounded agent needs both.",
      },
      {
        lead: "When the stream is messy (the engineering part).",
        body: "A real stream of experience isn't clean — it skips, repeats, and jitters. We trace a single cost curve from cheap to expensive as it degrades: one dropped step is repaired by the identity channel for free; a coherent lie that both channels agree on can only be broken by the outside world (and costs more to locate, never infinite); and as a clock jitters, the grounding debt is literally the number of order-consistent segments the stream breaks into. One prediction here was wrong, and we say so on the record — a repair trick we expected to work for free actually only helps in a narrow low-jitter window.",
      },
      {
        lead: "The second honest null — real photographs.",
        body: "A real outdoor photo tells seasons apart, not months. We tested 288 real photographs from a fixed outdoor camera (predictions registered before we downloaded a single image). The neat theory — “time buys back the resolution the coarse photo lost” — is a noiseless theorem: exactly true when the season labels are clean, and our clean control reproduces it. But real vision reads the season correctly only about two-thirds of the time, and the trick needs a whole window of labels right at once — so it degrades multiplicatively and does not survive. This negative result is the strongest confirmation of the two-channel split: keep perception as a graded identity signal and take relation from the temporal stream — never rebuild fine facts from a coarse, noisy perceptual partition.",
      },
      {
        lead: "Why it matters.",
        body: "Grounding a memory in the real world is a division of labor: perception says what, time says when, and only together do they pin a single world cheaply. It reframes a class of grounding failures as a missing “when” channel, and turns grounding from a yes/no property into a measurable, priceable budget for anyone building an embodied agent.",
      },
    ],
  },
];

export default function ResearchPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG, color: FG, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 120px" }}>

        <a href="/" style={{ color: ACCENT, fontSize: 14, textDecoration: "none", display: "inline-block", marginBottom: 40 }}>
          ← Back to nimer.dev
        </a>

        {/* ── Hero ── */}
        <p style={{ color: GOLD, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
          ByNimer · Research
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 20, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          What a memory can verify by itself — and what only the world can fix.
        </h1>
        <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, marginBottom: 56 }}>
          Nimer builds a brain that grows through architecture, not scale. Our research studies a
          zero-gradient relational memory — how it stores knowledge, reasons over it, and grounds
          itself in the real world. We build in the open and publish our results honestly, including
          the ones that failed. Every number reproduces from a committed script.
        </p>

        {/* ── Papers ── */}
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 8, color: FG }}>Papers</h2>
        <p style={{ color: FAINT, fontSize: 13.5, lineHeight: 1.6, marginBottom: 28 }}>
          All papers below are working research drafts — not peer-reviewed, and no scientific claim
          here is a legal or novelty statement. arXiv versions will follow as each paper&apos;s
          citation pass completes.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 64 }}>
          {PAPERS.map((paper) => (
            <div
              key={paper.name}
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: "20px 22px",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <h3 style={{ fontSize: 16, fontWeight: 600, margin: 0, marginBottom: 8, color: FG }}>
                {paper.name}
              </h3>
              <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.65, margin: 0, marginBottom: 12 }}>
                {paper.blurb}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
                {paper.summaryHref && (
                  <a
                    href={paper.summaryHref}
                    style={{ color: ACCENT, fontSize: 13, textDecoration: "none", fontWeight: 500 }}
                  >
                    Plain-language summary ↓
                  </a>
                )}
                {paper.draftHref && (
                  <a
                    href={paper.draftHref}
                    style={{ color: ACCENT, fontSize: 13, textDecoration: "none", fontWeight: 500 }}
                  >
                    Full draft →
                  </a>
                )}
                {paper.tags.map((tag) => (
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
            </div>
          ))}
        </div>

        {/* ── How we work ── */}
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 20, color: FG }}>How we work</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 64 }}>
          {RIGOR.map((item) => (
            <p key={item.label} style={{ color: MUTED, fontSize: 15, lineHeight: 1.65, margin: 0 }}>
              <strong style={{ color: FG, fontWeight: 600 }}>{item.label}</strong> — {item.body}
            </p>
          ))}
        </div>

        {/* ── Plain-language summaries ── */}
        {SUMMARIES.map((summary) => (
          <section key={summary.id} id={summary.id} style={{ marginBottom: 64, scrollMarginTop: 72 }}>
            <p style={{ color: GOLD, fontSize: 12.5, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>
              {summary.kicker}
            </p>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, letterSpacing: "-0.01em", lineHeight: 1.25 }}>
              {summary.title}
            </h2>
            {summary.paras.map((para, i) => (
              <p key={i} style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.75, marginBottom: 18 }}>
                {para.lead && <strong style={{ color: FG, fontWeight: 600 }}>{para.lead} </strong>}
                {para.body}
              </p>
            ))}
            <p style={{ color: FAINT, fontSize: 13, fontStyle: "italic", marginTop: 8 }}>
              Research draft, not peer-reviewed. Not a legal or novelty claim.
            </p>
          </section>
        ))}

        {/* ── IP / moat (one line, no documents) ── */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 28,
            marginBottom: 40,
          }}
        >
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: FG, fontWeight: 600 }}>Intellectual property.</strong> The core
            inventions behind this research are protected by two U.S. provisional patents (filed July
            2026). Technical details are available to serious partners under NDA.
          </p>
        </div>

        {/* ── Footer disclaimer ── */}
        <p style={{ color: FAINT, fontSize: 12.5, lineHeight: 1.6, margin: 0 }}>
          Research drafts, not peer-reviewed; no claim on this page is a legal or novelty statement.
          Contact: <a href="mailto:nimershahm@gmail.com" style={{ color: ACCENT, textDecoration: "none" }}>nimershahm@gmail.com</a>
        </p>

      </div>
    </div>
  );
}
