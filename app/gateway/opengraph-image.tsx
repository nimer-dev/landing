import { ImageResponse } from "next/og";

export const alt = "Nimer Optimizer — Cut Claude API costs ~60%";
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
          background: "#0a0e1a",
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
              background: "#5b8cff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0a0e1a",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div style={{ color: "#e6e8ef", fontSize: 36, fontWeight: 600 }}>
            Nimer
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              color: "#e6e8ef",
              fontSize: 88,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Cut Claude API costs
          </div>
          <div
            style={{
              color: "#5b8cff",
              fontSize: 88,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -2,
              fontStyle: "italic",
            }}
          >
            ~60%.
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
          <div>Drop-in Python SDK · Smart model routing</div>
          <div style={{ color: "#e6e8ef" }}>nimer.dev</div>
        </div>
      </div>
    ),
    { ...size }
  );
}