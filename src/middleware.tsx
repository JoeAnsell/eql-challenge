// import { isAuthenticated } from "@/Utils/Auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/quiz", "/summary"];

export default function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get("logged_in");

  if (
    isAuthenticated?.value !== "true" &&
    protectedRoutes.includes(req.nextUrl.pathname)
  ) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
