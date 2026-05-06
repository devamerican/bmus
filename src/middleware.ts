import { NextRequest, NextResponse } from "next/server";

const COUNSELING_HOSTS = new Set([
  "counseling.bmus.co.in",
  "www.counseling.bmus.co.in",
]);

const MAIN_HOSTS = new Set(["bmus.co.in", "www.bmus.co.in"]);

const COUNSELING_ORIGIN = "https://counseling.bmus.co.in";
const MAIN_ORIGIN = "https://bmus.co.in";

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") || "").toLowerCase().split(":")[0];
  const { pathname, search } = request.nextUrl;

  if (COUNSELING_HOSTS.has(host)) {
    if (pathname === "/" || pathname === "/book-counseling") {
      const url = request.nextUrl.clone();
      url.pathname = "/book-counseling";
      return NextResponse.rewrite(url);
    }
    return NextResponse.redirect(`${MAIN_ORIGIN}${pathname}${search}`, 308);
  }

  if (MAIN_HOSTS.has(host) && pathname === "/book-counseling") {
    return NextResponse.redirect(`${COUNSELING_ORIGIN}/${search}`, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
