import type { Metadata } from "next";
import PaperDraft, { type PaperDraftData } from "../PaperDraft";

// WHY: Full-text plain-language draft of Paper 4 ("Grounding Is Symmetry-Breaking").
// Source of truth for this copy is the Majdi-approved launch content (nimer-cortex
// docs/launch/CONTENT-DRAFTS ASSET 3 + SITE-RESEARCH-PAGE §A). This page EXPANDS that
// approved summary into a full read; every claim already cleared for public release and
// nothing here discloses a mechanism beyond the filed provisional (inventions A–E). Labeled
// a draft — the arXiv version follows once the paper's citation pass completes.

export const metadata: Metadata = {
  title: "Grounding Is Symmetry-Breaking — Nimer Research",
  description:
    "Internal consistency determines a relational memory only up to its automorphism group; grounding is the symmetry-breaking action that resolves the rest. A plain-language research draft from Nimer.",
};

const PAPER: PaperDraftData = {
  kicker: "ByNimer · Research · Paper 4",
  title: "Grounding Is Symmetry-Breaking",
  subtitle:
    "What a memory can verify about itself using internal consistency alone — and the exact point where it must consult the outside world instead.",
  status: ["draft", "not peer-reviewed", "arXiv — coming"],
  updated: "July 2026",
  abstract:
    "We ask how far a memory can check its own knowledge for truth using only internal consistency. The answer is exact and group-theoretic: internal consistency determines the memory's world only up to the automorphism group of its relational structure. The one lie no internal check can ever catch is precisely a non-trivial automorphism — a story that is wrong but perfectly self-consistent. Grounding — a single anchor to something the system cannot itself relabel — is the symmetry-breaking action that resolves the remaining ambiguity, and with redundancy it behaves like an error-correcting code: one anchor pins the world, two detect a corrupted anchor, three locate it.",
  sections: [
    {
      heading: "The question",
      paras: [
        {
          body: "Can a memory system check its own knowledge for truth, using only internal consistency — or does it always, at some point, need to consult the outside world? This is the question of self-knowledge: how much of “is what I believe true?” can a system answer from the inside, with no appeal to anything external.",
        },
      ],
    },
    {
      heading: "The answer — a hard, exact ceiling",
      paras: [
        {
          body: "There is a ceiling, and it is exact. No matter how many internal cross-checks a memory runs, it can never distinguish its real world from a perfectly consistent relabeling of that world. In mathematics, those relabelings form a structure’s automorphism group.",
        },
        {
          lead: "So the result is:",
          body: "internal consistency pins down the world only up to that group of symmetries. The one lie no internal check can ever catch is exactly one of those symmetries — a story that is wrong, yet perfectly self-consistent. You cannot out-check it, because every check it would fail is a check it also passes.",
        },
      ],
    },
    {
      heading: "A concrete picture — the twelve months",
      paras: [
        {
          body: "Imagine a memory that has learned the twelve months and the single relation “comes after.” It can perfectly learn the shape of the year — a twelve-step cycle — but it cannot tell, from internal logic alone, which point on the cycle is January.",
        },
        {
          body: "Rotate every month forward by one and the whole structure is identical: “comes after” still holds everywhere. Twelve equally consistent worlds remain, and internal reasoning has no way to prefer the true one. That residual ambiguity is the cyclic group of twelve rotations — the automorphism group of the year.",
        },
      ],
    },
    {
      heading: "The fix — grounding breaks the symmetry",
      paras: [
        {
          body: "The only thing that breaks the tie is grounding: a single anchor to something the system cannot itself relabel — one real observation from the outside. One anchor collapses the twelve possible worlds to the one true world.",
        },
        {
          lead: "And it is better than a patch.",
          body: "Add a second anchor and the system can detect a corrupted one; add a third and it can locate the liar. Grounding does not just fix the answer — with redundancy it behaves like an error-correcting code: one anchor to pin, two to detect, three to localize.",
        },
      ],
    },
    {
      heading: "Why it matters",
      paras: [
        {
          body: "This says something general about any memory — biological or artificial — that needs to know which world it is in, not merely a self-consistent world: it must be grounded in something outside itself. Consistency is necessary but never sufficient.",
        },
        {
          body: "It also reframes a class of AI “hallucinations” as an uncorrected symmetry: a self-consistent story the system was never anchored enough to rule out. The failure is not sloppy reasoning — it is the exact, predictable blind spot that internal reasoning can never see past on its own.",
        },
      ],
    },
    {
      heading: "How it was tested — the honest part",
      paras: [
        {
          body: "The experiments use deliberately simple, toy structures. The claim is about the structure of grounding, not about beating a benchmark, so a small transparent world is the right instrument: it lets the symmetry be stated and measured exactly rather than approximated.",
        },
        {
          body: "Several of our early predictions were wrong. We found the causes and published the corrections rather than the tidy version. Every figure reproduces from a committed script across 20 random seeds, with control arms, and an independent from-scratch reimplementation in Rust agrees with the original research code to golden parity — strong corroboration, though not a mathematical proof.",
        },
      ],
    },
    {
      heading: "Where it leads",
      paras: [
        {
          body: "If internal consistency can only pin the world up to a symmetry, the next question is practical: when the anchors are real perceptions — actual pixels, actual measurements — how does a memory ground itself, and what does it cost? That is the subject of Paper 5, ",
        },
        {
          body: (
            <>
              which builds directly on this result:{" "}
              <a href="/research/two-channels-to-a-grounded-world" style={{ color: "#6366f1", textDecoration: "none" }}>
                Two Channels to a Grounded World →
              </a>
            </>
          ),
        },
      ],
    },
  ],
};

export default function Paper4Page() {
  return <PaperDraft {...PAPER} />;
}
