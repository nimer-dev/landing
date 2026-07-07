import type { Metadata } from "next";
import HubClient from "./HubClient";

// WHY: The root of nimer.dev is the ByNimer company hub, led by Nimer Cortex — the
// grounded-memory reasoning core. Research-first framing; indexable.
export const metadata: Metadata = {
  title: { absolute: "ByNimer — A brain that grows through architecture, not scale" },
  description:
    "ByNimer is an AI research company building Nimer Cortex, a grounded-memory reasoning core that learns without gradients. We build in the open and publish our results honestly.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function Home() {
  return <HubClient />;
}
