// middleware

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  let isLogged = !!req.cookies.get('token');
  if (req.nextUrl.pathname === '/login' && isLogged) {
    url.pathname = '/home';
    return NextResponse.redirect(url);
  }

  if (req.nextUrl.pathname === '/dashboard' && !isLogged) {
    url.pathname = '/login'
    return NextResponse.redirect(url);
  }
}
