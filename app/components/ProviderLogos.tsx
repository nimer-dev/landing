/**
 * Simplified single-color SVG marks for each AI provider.
 * Sized for a horizontal credibility strip — neutral grey, brand-color on hover.
 * These are abstract glyphs (not exact brand logos) — safe for marketing use.
 */

const baseProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const AnthropicMark = () => (
  <svg {...baseProps}>
    <path d="M7 18 L11 6 L13 6 L17 18" />
    <path d="M9 14 L15 14" />
  </svg>
);

export const OpenAIMark = () => (
  <svg {...baseProps}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 4 V12 L18 16" />
    <path d="M6 16 L12 12 L12 4" opacity="0.5" />
  </svg>
);

export const GeminiMark = () => (
  <svg {...baseProps}>
    <path d="M12 3 L13.7 10.3 L21 12 L13.7 13.7 L12 21 L10.3 13.7 L3 12 L10.3 10.3 Z" />
  </svg>
);

export const DeepSeekMark = () => (
  <svg {...baseProps}>
    <path d="M3 12 a9 9 0 0 1 18 0" />
    <path d="M21 12 a9 9 0 0 1 -18 0" opacity="0.55" />
    <circle cx="8" cy="12" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="16" cy="12" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);

export const XAIMark = () => (
  <svg {...baseProps}>
    <path d="M5 5 L19 19" />
    <path d="M19 5 L5 19" />
  </svg>
);

export const MistralMark = () => (
  <svg {...baseProps}>
    <path d="M4 5 H8 V19 H4 Z" />
    <path d="M10 5 H14 V19 H10 Z" opacity="0.7" />
    <path d="M16 5 H20 V19 H16 Z" opacity="0.45" />
  </svg>
);

export const GroqMark = () => (
  <svg {...baseProps}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 4 V12" />
    <path d="M12 12 L17 17" />
  </svg>
);

export interface ProviderEntry {
  id: string;
  label: string;
  Mark: React.ComponentType;
  hue: string;
}

export const PROVIDERS: ProviderEntry[] = [
  { id: "anthropic", label: "Anthropic", Mark: AnthropicMark, hue: "#D97706" },
  { id: "openai", label: "OpenAI", Mark: OpenAIMark, hue: "#10A37F" },
  { id: "gemini", label: "Gemini", Mark: GeminiMark, hue: "#4285F4" },
  { id: "deepseek", label: "DeepSeek", Mark: DeepSeekMark, hue: "#7C3AED" },
  { id: "xai", label: "xAI", Mark: XAIMark, hue: "#FAFAFA" },
  { id: "mistral", label: "Mistral", Mark: MistralMark, hue: "#FF7000" },
  { id: "groq", label: "Groq", Mark: GroqMark, hue: "#F55036" },
];
