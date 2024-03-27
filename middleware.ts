import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const rootUrl = new URL("/portfolio", request.nextUrl);

  // rewrite the path to the correct path
  if (pathname === "/") {
    return NextResponse.redirect(rootUrl);
  }

  // For other paths, do nothing special
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - screenshot.png (PWA screenshot)
     * - png, svg, ico, xml, json, webmanifest, and other static files
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)",
  ],
};
