// import { isAuthenticated } from "@/Utils/Auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { useCookies } from "react-cookie";

const protectedRoutes = ["/quiz"];

// const isAuthenticated = false;

export default function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get("logged_in");
  if (!isAuthenticated) return;

  if (
    isAuthenticated.value !== "true" &&
    protectedRoutes.includes(req.nextUrl.pathname)
  ) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
