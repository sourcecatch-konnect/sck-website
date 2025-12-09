import { NextResponse } from "next/server";

export default function middleware(req) {
  const url = req.nextUrl.clone();
  const isAdmin = req.cookies.get("admin_auth")?.value === "true";
  const path = url.pathname;

  const isAdminRoute = path.startsWith("/admin");
  const isLoginPage = path === "/admin/login";

  // run only for admin routes and not login
  if (isAdminRoute && !isLoginPage && !isAdmin) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  // if logged in already and trying to visit login, redirect to admin
  if (isAdmin && isLoginPage) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
