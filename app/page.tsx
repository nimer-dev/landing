import type { Metadata } from "next";
import HubClient from "./HubClient";

// WHY: The root of nimer.dev is the ByNimer company hub (Cortex + Gateway).
// It is indexable now that the site is leaving pre-launch maintenance mode.
export const metadata: Metadata = {
  title: { absolute: "ByNimer — Trustworthy AI, engineered from first principles" },
  description:
    "ByNimer is an AI research and infrastructure company. We build Nimer Cortex, a grounded-memory reasoning core, and Nimer Gateway, an AI gateway for the Middle East.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function Home() {
  return <HubClient />;
}
