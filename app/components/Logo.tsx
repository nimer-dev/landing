interface LogoProps {
  size?: number;
  withWordmark?: boolean;
}

/**
 * Nimer brand mark.
 * Geometric "N" with a small accent dot — a subtle nod to the Arabic letter ن (noon),
 * which carries a dot above. Works equally in LTR and RTL contexts.
 */
export default function Logo({ size = 26, withWordmark = true }: LogoProps) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="nimer-mark-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="55%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#C9A961" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#nimer-mark-grad)" />
        {/* N glyph */}
        <path
          d="M9.5 22.5 L9.5 12 L12.7 12 L19 19.6 L19 12 L22.5 12 L22.5 22.5 L19.4 22.5 L13 14.6 L13 22.5 Z"
          fill="#ffffff"
          fillOpacity="0.97"
        />
        {/* Noon-style dot accent (top right) */}
        <circle cx="25" cy="6.5" r="2" fill="#ffffff" fillOpacity="0.95" />
      </svg>
      {withWordmark && (
        <span
          style={{
            fontSize: size > 26 ? 18 : 15,
            fontWeight: 600,
            color: "var(--fg)",
            letterSpacing: "-0.3px",
          }}
        >
          Nimer
        </span>
      )}
    </span>
  );
}
