import { NextResponse } from "next/server";

// Prekidač za stranicu "Uskoro".
// COMING_SOON=true  -> svi posetioci vide samo logo (/uskoro)
// PREVIEW_SECRET    -> otvori /?preview=<šifra> da vidiš ceo sajt (pamti se u cookie-ju)
const PREVIEW_COOKIE = "kofer_preview";

export function middleware(request) {
  if (process.env.COMING_SOON !== "true") {
    return NextResponse.next();
  }

  const secret = process.env.PREVIEW_SECRET;
  const { nextUrl, cookies } = request;

  // Tajni link: postavi cookie i ukloni šifru iz adrese
  if (secret && nextUrl.searchParams.get("preview") === secret) {
    const cleanUrl = nextUrl.clone();
    cleanUrl.searchParams.delete("preview");

    const response = NextResponse.redirect(cleanUrl);
    response.cookies.set(PREVIEW_COOKIE, secret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 dana
    });
    return response;
  }

  // Vlasnik sa cookie-jem vidi ceo sajt
  if (secret && cookies.get(PREVIEW_COOKIE)?.value === secret) {
    return NextResponse.next();
  }

  // Svi ostali vide samo logo
  const comingSoonUrl = nextUrl.clone();
  comingSoonUrl.pathname = "/uskoro";
  comingSoonUrl.search = "";
  return NextResponse.rewrite(comingSoonUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|images/|kofer_logo.svg|favicon.ico|uskoro).*)",
  ],
};
