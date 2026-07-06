import type { Metadata } from "next";
import GatewayClient from "./GatewayClient";

// WHY: The Gateway product page lives at /gateway (it used to be the site root).
// It keeps its own product-specific SEO identity, distinct from the ByNimer hub.
export const metadata: Metadata = {
  title: { absolute: "Nimer Gateway — The AI Gateway for the Middle East" },
  description:
    "Drop-in SDK that routes Claude, GPT, Gemini and 4 more providers — with a built-in safety, bias, and PII gateway. Halal AI Mode coming soon.",
  alternates: { canonical: "/gateway" },
  openGraph: {
    type: "website",
    url: "https://nimer.dev/gateway",
    siteName: "ByNimer",
    title: "Nimer Gateway — The AI Gateway for the Middle East",
    description:
      "Drop-in SDK that routes Claude, GPT, Gemini and 4 more providers — with a built-in safety, bias, and PII gateway. Halal AI Mode coming soon.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@trynimer",
    creator: "@trynimer",
    title: "Nimer Gateway — The AI Gateway for the Middle East",
    description:
      "Drop-in SDK that routes 7 AI providers — with a built-in safety gateway. Halal AI Mode coming soon.",
  },
  robots: { index: true, follow: true },
};

export default function GatewayPage() {
  return <GatewayClient />;
}
