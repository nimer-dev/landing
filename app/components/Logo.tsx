// WHY: The Nimer brand mark carries the whole company thesis in one glyph —
// a memory that is a neural graph (intelligence via architecture) with ONE node
// grounded to a baseline (the "grounding breaks the symmetry" result from Paper 4).
// It keeps the heritage ن (noon) dot so the mark still reads as "N / Nimer" in both
// LTR and RTL. Two selectable concepts are exposed via `variant` so the identity can
// be A/B'd on the live site with a one-line change; the default is the grounded graph.

export type LogoVariant = "grounded" | "ring";

interface LogoProps {
  size?: number;
  withWordmark?: boolean;
  /** Which mark concept to render. Defaults to the recommended "grounded" graph. */
  variant?: LogoVariant;
}

/**
 * Nimer brand mark.
 *
 * @param size - pixel size of the square mark (default 26).
 * @param withWordmark - render the "Nimer" wordmark beside the mark (default true).
 * @param variant - "grounded" (neural graph anchored to a baseline) or "ring"
 *   (a twelve-node cycle with one node grounded — the Paper 4 12→1 motif).
 */
export default function Logo({ size = 26, withWordmark = true, variant = "grounded" }: LogoProps) {
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

        {/* Rounded gradient tile — kept from the prior mark for brand continuity + favicon legibility. */}
        <rect width="32" height="32" rx="8" fill="url(#nimer-mark-grad)" />

        {variant === "grounded" ? <GroundedGraph /> : <SymmetryRing />}
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

// WHY: the default mark — a stylized "N" drawn as a neural graph (left pillar,
// diagonal, right pillar) with node dots at the vertices, plus ONE bottom node
// anchored by a short stem to a baseline: the memory grounded to the world.
// The top-right noon dot preserves the ن heritage.
function GroundedGraph() {
  const W = "#ffffff";
  return (
    <g stroke={W} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {/* N edges */}
      <path d="M10 22 L10 11" strokeOpacity="0.95" />
      <path d="M10 11 L22 22" strokeOpacity="0.75" />
      <path d="M22 22 L22 11" strokeOpacity="0.95" />
      {/* Node dots at the vertices */}
      <circle cx="10" cy="11" r="1.7" fill={W} stroke="none" />
      <circle cx="22" cy="11" r="1.7" fill={W} stroke="none" />
      <circle cx="22" cy="22" r="1.7" fill={W} stroke="none" />
      {/* Grounded node: bottom-left vertex anchored by a stem to a baseline tick */}
      <circle cx="10" cy="22" r="1.9" fill={W} stroke="none" />
      <path d="M10 24 L10 26.4" strokeOpacity="0.85" />
      <path d="M6.6 26.6 L13.4 26.6" strokeOpacity="0.6" />
      {/* Noon (ن) heritage dot */}
      <circle cx="25" cy="6.6" r="1.9" fill={W} stroke="none" />
    </g>
  );
}

// WHY: alternate mark — twelve nodes on a cycle (the year / any relational structure),
// with a single node lit and anchored to the center: internal consistency pins the
// world only up to the cycle's symmetry, and one ground anchor collapses it to one.
// A literal glyph of the flagship result. Kept as a selectable variant.
function SymmetryRing() {
  const W = "#ffffff";
  const cx = 16;
  const cy = 16;
  const r = 8.2;
  // WHY: precomputed twelve evenly-spaced points; no Math.random/Date so render is stable.
  const nodes = Array.from({ length: 12 }, (_, i) => {
    const a = (Math.PI / 6) * i - Math.PI / 2; // start at top, clockwise
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  });
  const lit = nodes[0]; // the grounded node (top)
  return (
    <g stroke={W} strokeLinecap="round" strokeLinejoin="round">
      <circle cx={cx} cy={cy} r={r} fill="none" strokeWidth="1.4" strokeOpacity="0.5" />
      {/* anchor line from center to the lit node */}
      <path d={`M${cx} ${cy} L${lit.x} ${lit.y}`} strokeWidth="1.5" strokeOpacity="0.85" />
      <circle cx={cx} cy={cy} r="1.3" fill={W} stroke="none" />
      {nodes.map((n, i) =>
        i === 0 ? (
          <circle key={i} cx={n.x} cy={n.y} r="2.3" fill={W} stroke="none" />
        ) : (
          <circle key={i} cx={n.x} cy={n.y} r="1.35" fill={W} fillOpacity="0.6" stroke="none" />
        ),
      )}
    </g>
  );
}
