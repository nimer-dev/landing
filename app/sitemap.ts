import { MetadataRoute } from "next";

// WHY: /gateway is intentionally excluded — it redirects to "/" until the
// product page is ready for public visitors (see app/gateway/page.tsx).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nimer.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
