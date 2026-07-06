import { redirect } from "next/navigation";

// WHY: Majdi wants no visitor (direct link, search engine, or otherwise)
// landing on /gateway until the product page is ready. Redirect to the hub
// instead of rendering GatewayClient; see also sitemap.ts (route excluded).
export default function GatewayPage() {
  redirect("/");
}
