import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nimer.dev"),
  title: "Nimer — Cut Claude API costs by 60%",
  description:
    "Drop-in Python SDK that intelligently routes Claude requests to Haiku, Sonnet, or Opus. Save ~60% without touching your code.",
  keywords: ["Claude API", "Anthropic", "AI cost optimization", "LLM routing", "Python SDK", "Nimer"],
  authors: [{ name: "Nimer", url: "https://nimer.dev" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nimer.dev",
    siteName: "Nimer",
    title: "Nimer — Cut Claude API costs by 60%",
    description: "Drop-in Python SDK that routes Claude requests intelligently. Save ~60% without changing your code.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@trynimer",
    creator: "@trynimer",
    title: "Nimer — Cut Claude API costs by 60%",
    description: "Drop-in Python SDK that routes Claude requests intelligently. Save ~60% without changing your code.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
      >
        {/* Hero radial glow — Linear signature */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <div style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "600px",
            background: "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(99,102,241,0.28) 0%, rgba(168,139,250,0.08) 50%, transparent 70%)",
            pointerEvents: "none",
          }} />
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      </body>
    </html>
  );
}
