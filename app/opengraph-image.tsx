import { ImageResponse } from "next/og";

// WHY: Default social-preview image for the ByNimer company hub (root and all
// non-product routes), led by Nimer Cortex.
export const alt = "ByNimer — A brain that grows through architecture, not scale";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070710",
          padding: 80,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "linear-gradient(135deg, #6366f1, #a78bfa, #C9A961)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div style={{ color: "#e6e8ef", fontSize: 36, fontWeight: 600 }}>
            ByNimer
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div
            style={{
              color: "#e6e8ef",
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            A brain that grows through
          </div>
          <div
            style={{
              color: "#a5b4fc",
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            architecture, not scale.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#8a92a6",
            fontSize: 26,
          }}
        >
          <div>Nimer Cortex · Research</div>
          <div style={{ color: "#e6e8ef" }}>nimer.dev</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
