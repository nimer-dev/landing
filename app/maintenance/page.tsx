export const metadata = {
  title: "Nimer — Under Maintenance",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
        background: "var(--bg, #07070e)",
        color: "var(--fg, #ededf0)",
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: "2.5rem" }}>
        <span
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            background: "linear-gradient(135deg, #ededf0 30%, #a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          nimer
        </span>
      </div>

      {/* Icon */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "1rem",
          background: "rgba(99,102,241,0.12)",
          border: "1px solid rgba(99,102,241,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      </div>

      {/* Heading */}
      <h1
        style={{
          fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
          fontWeight: 700,
          letterSpacing: "-0.04em",
          margin: "0 0 1rem",
          lineHeight: 1.2,
        }}
      >
        We&apos;ll be right back
      </h1>

      {/* Subtext */}
      <p
        style={{
          fontSize: "1rem",
          color: "var(--fg-2, #9898a6)",
          maxWidth: 420,
          lineHeight: 1.65,
          margin: "0 0 2.5rem",
        }}
      >
        Nimer is undergoing scheduled maintenance to bring you a better
        experience. We&apos;ll be back shortly.
      </p>

      {/* Status badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.45rem 1rem",
          borderRadius: "999px",
          background: "rgba(99,102,241,0.09)",
          border: "1px solid rgba(99,102,241,0.22)",
          fontSize: "0.8rem",
          color: "#a78bfa",
          fontWeight: 500,
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#a78bfa",
            display: "inline-block",
            animation: "pulse 2s infinite",
          }}
        />
        Maintenance in progress
      </div>

      {/* Dashboard link */}
      <p
        style={{
          marginTop: "3rem",
          fontSize: "0.85rem",
          color: "var(--fg-muted, #56566a)",
        }}
      >
        Already a user?{" "}
        <a
          href="https://dashboard.nimer.dev"
          style={{
            color: "var(--accent-2, #a78bfa)",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          Go to dashboard →
        </a>
      </p>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>
    </main>
  );
}
