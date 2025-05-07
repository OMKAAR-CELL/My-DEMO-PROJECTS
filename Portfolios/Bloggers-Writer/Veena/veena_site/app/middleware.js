import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// Basic Authentication check
const BASIC_AUTH_USER = "admin";
const BASIC_AUTH_PASS = process.env.ADMIN_PASSWORD;

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Only secure the admin page
  if (pathname.startsWith("/admin")) {
    const auth = request.headers.get("Authorization");

    if (!auth) {
      return new NextResponse("Authorization required", { status: 401 });
    }

    const [username, password] = atob(auth.split(" ")[1]).split(":");

    if (username !== BASIC_AUTH_USER || password !== BASIC_AUTH_PASS) {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/*",
};
