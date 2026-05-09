import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Live site by default. To show the maintenance page again, set on Vercel:
 *   MAINTENANCE_MODE=true
 * (redeploy after changing). Unset or set to "false" to serve nimer.dev normally.
 */
export function middleware(request: NextRequest) {
  if (process.env.MAINTENANCE_MODE === "true") {
    const { pathname } = request.nextUrl;
    if (
      pathname === "/maintenance" ||
      pathname.startsWith("/_next/") ||
      pathname.startsWith("/favicon")
    ) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/maintenance", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
