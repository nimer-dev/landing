import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nimer.dev"),
  title: "Nimer Optimizer — Cut Claude API costs ~60%",
  description:
    "Drop-in Python SDK that routes Claude requests to Haiku, Sonnet, or Opus based on task type. Save ~60% without changing your code.",
  keywords: [
    "Claude API",
    "Anthropic",
    "AI cost optimization",
    "LLM routing",
    "Python SDK",
  ],
  authors: [{ name: "Nimer", url: "https://nimer.dev" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nimer.dev",
    siteName: "Nimer",
    title: "Nimer Optimizer — Cut Claude API costs ~60%",
    description:
      "Drop-in Python SDK that routes Claude requests to Haiku, Sonnet, or Opus based on task type. Save ~60% without changing your code.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@trynimer",
    creator: "@trynimer",
    title: "Nimer Optimizer — Cut Claude API costs ~60%",
    description:
      "Drop-in Python SDK that routes Claude requests to Haiku, Sonnet, or Opus based on task type. Save ~60% without changing your code.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}