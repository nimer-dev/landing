import type { Metadata } from "next";
import PaperDraft, { type PaperDraftData } from "../PaperDraft";

// WHY: Full-text plain-language draft of Paper 5 ("Two Channels to a Grounded World").
// Source of truth for this copy is the Majdi-approved launch content (nimer-cortex
// docs/launch/CONTENT-DRAFTS ASSET 4 + SITE-RESEARCH-PAGE §A). This page EXPANDS that
// approved summary into a full read; every number here (1.000 / 0.000 / 0.071 / ~66% /
// ~0.30 / 288 photos / debt 1→~9) is already cleared for public release, traces to a
// committed research record (R-054..R-062), and discloses nothing beyond inventions A–E.

export const metadata: Metadata = {
  title: "Two Channels to a Grounded World — Nimer Research",
  description:
    "Identity from percepts, relation from time — how a memory grounds real perceptions, and what it costs, told with two honest null results. A plain-language research draft from Nimer.",
};

const PAPER: PaperDraftData = {
  kicker: "ByNimer · Research · Paper 5",
  title: "Two Channels to a Grounded World",
  subtitle:
    "When the anchors are real perceptions — actual pixels, actual measurements — grounding takes two different channels, and neither one alone is enough.",
  status: ["draft", "not peer-reviewed"],
  updated: "July 2026",
  abstract:
    "Paper 4 proved a memory can pin down its world only up to a symmetry, and that the fix is grounding — an external anchor the system cannot relabel. Paper 5 asks the practical follow-up: when the anchors are real perceptions, how does a memory ground itself, and what does it cost? We find grounding takes two channels — identity (“what is this?”) from perception, and relation (“when did it happen?”) from the temporal order of experience — and that neither alone suffices. Two deliberate null results carry the argument: relation cannot be read out of static perception, and a “time buys back resolution” trick that is a clean theorem noiselessly does not survive real camera noise.",
  sections: [
    {
      heading: "Where it starts",
      paras: [
        {
          body: (
            <>
              Paper 4 —{" "}
              <a href="/research/grounding-is-symmetry-breaking" style={{ color: "#6366f1", textDecoration: "none" }}>
                Grounding Is Symmetry-Breaking
              </a>{" "}
              — proved a memory can pin down its world only up to a symmetry, and that the fix is grounding: an external anchor the system cannot relabel.
            </>
          ),
        },
        {
          lead: "Paper 5 asks the next, practical question:",
          body: "when the anchors are real perceptions — actual pixels, actual measurements — how does a memory ground itself, and what does it cost? The finding is that grounding takes two different channels, and neither one alone is enough.",
        },
      ],
    },
    {
      heading: "Channel 1 — identity (“what is this?”)",
      paras: [
        {
          body: "A real perception can bind to the right internal symbol. We embed a month-in-context with an off-the-shelf text encoder, and it locks onto its symbol perfectly (1.000). Swap the text for an image — the month word rendered to pixels, read by a vision encoder that never saw it as text — and every curve is essentially identical. So the “what” channel is real, and it works across senses.",
        },
        {
          lead: "But there is a cost.",
          body: "A straight perceptual match is just a lookup: it grounds exactly the things it is shown (an anchor month scores 1.000; an unseen month, 0.000) and does not spread through the structure. Grounding this way costs one anchor per symbol — expensive.",
        },
      ],
    },
    {
      heading: "The gap — an honest null result",
      paras: [
        {
          body: "Could the relationship between things — “which month comes after which” — be read straight out of the perceptions themselves? We tested the cleanest version, and the answer is no: there is no reliable “comes-after” operator hiding in the static image geometry. A held-out month’s successor is recovered only at chance (0.071).",
        },
        {
          lead: "Static perception carries identity, not relation.",
          body: "This null is the hinge of the whole paper — it is exactly why a second channel is needed.",
        },
      ],
    },
    {
      heading: "Channel 2 — relation (“when did it happen?”), and it is free",
      paras: [
        {
          body: "A body moving through the world experiences things in order. That temporal order hands you the relationships for nothing: consecutive perceptions are consecutive months.",
        },
        {
          body: "Time fixes the shape of the cycle, leaving only the one symmetry Paper 4 identified — and one external anchor breaks it, grounding all twelve real perceptions at once. Cheap: one anchor for the whole structure, not one per symbol.",
        },
      ],
    },
    {
      heading: "The two channels cover each other’s blind spots",
      paras: [
        {
          body: "The “what” channel catches a perception whose content was corrupted — the right time slot holding the wrong thing — which the “when” channel is blind to. The “when” channel catches a false anchor — which the “what” channel cannot. A grounded agent needs both.",
        },
      ],
    },
    {
      heading: "When the stream is messy — the engineering part",
      paras: [
        {
          body: "A real stream of experience is not clean: it skips, repeats, and jitters. We trace a single cost curve from cheap to expensive as it degrades. One dropped step is repaired by the identity channel for free. A coherent lie that both channels agree on can only be broken by the outside world — and costs more to locate, but never infinite. And as a clock jitters, the “grounding debt” is literally the number of order-consistent segments the stream breaks into, rising smoothly from 1 to about 9.",
        },
        {
          lead: "One prediction here was wrong, and we say so on the record:",
          body: "a repair trick we expected to work for free actually only helps in a narrow low-jitter window.",
        },
      ],
    },
    {
      heading: "The second honest null — real photographs",
      paras: [
        {
          body: "Everything above used percepts that resolve one symbol each. A real outdoor photo cannot do that: it tells seasons apart, not months. We tested 288 real photographs from a fixed outdoor camera, with the predictions registered before we downloaded a single image.",
        },
        {
          body: "The neat theory — “time buys back the resolution the coarse photo lost” — is a noiseless theorem: exactly true when the season labels are clean, and our clean control reproduces it. But real vision reads the season correctly only about two-thirds of the time (~66%), and the trick needs a whole window of labels right at once — so it degrades multiplicatively and does not survive; recovery stalls near 0.30.",
        },
        {
          lead: "This negative result is the paper’s strongest confirmation of the two-channel split.",
          body: "Keep perception as a graded identity signal and take relation from the temporal stream — never try to rebuild fine facts from a coarse, noisy perceptual partition.",
        },
      ],
    },
    {
      heading: "Why it matters",
      paras: [
        {
          body: "Grounding a memory in the real world is a division of labor: perception says what, time says when, and only together do they pin a single world cheaply. It reframes a class of grounding failures as a missing “when” channel, and it turns grounding from a yes/no property into a measurable, priceable budget for anyone building an embodied agent.",
        },
      ],
    },
  ],
};

export default function Paper5Page() {
  return <PaperDraft {...PAPER} />;
}
