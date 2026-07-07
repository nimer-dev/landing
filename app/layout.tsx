import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { LocaleProvider } from "./lib/LocaleContext";
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale, type Locale } from "./lib/i18n";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// WHY: Site-wide default metadata frames the ByNimer company (the hub at "/"),
// led by Nimer Cortex — a grounded-memory reasoning core. Research-first positioning.
export const metadata: Metadata = {
  metadataBase: new URL("https://nimer.dev"),
  title: {
    default: "ByNimer — A brain that grows through architecture, not scale",
    template: "%s · ByNimer",
  },
  description:
    "ByNimer is an AI research company building Nimer Cortex, a grounded-memory reasoning core that learns without gradients. We build in the open and publish our results honestly.",
  keywords: [
    "ByNimer",
    "Nimer",
    "Nimer Cortex",
    "AI research",
    "grounded memory",
    "reasoning core",
    "zero-gradient learning",
    "relational memory",
  ],
  authors: [{ name: "ByNimer", url: "https://nimer.dev" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nimer.dev",
    siteName: "ByNimer",
    title: "ByNimer — A brain that grows through architecture, not scale",
    description:
      "An AI research company building Nimer Cortex: a grounded-memory reasoning core that learns without gradients. Built in the open, honest results included.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@trynimer",
    creator: "@trynimer",
    title: "ByNimer — A brain that grows through architecture, not scale",
    description:
      "An AI research company building Nimer Cortex — a grounded-memory reasoning core that learns without gradients.",
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;
  const locale: Locale = isLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${plexArabic.variable}`}
        style={{
          fontFamily:
            locale === "ar"
              ? "var(--font-plex-arabic), var(--font-geist-sans), system-ui, sans-serif"
              : "var(--font-geist-sans), system-ui, sans-serif",
        }}
      >
        {/* Hero radial glow — Linear signature with warm-gold tint */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "900px",
              height: "600px",
              background:
                "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(99,102,241,0.28) 0%, rgba(201,169,97,0.08) 50%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
        </div>

        <LocaleProvider initialLocale={locale}>
          <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
        </LocaleProvider>
      </body>
    </html>
  );
}
