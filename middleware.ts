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
