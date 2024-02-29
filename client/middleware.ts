import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("middleware executed ");

  const authToken = request.cookies.get("token");
  console.log(authToken, "my token");
  const path = request.nextUrl.pathname;
  const loggedInpathNotAccess = path === "/username" || path === "/register";
  console.log(path)
  if ( authToken &&  path !== "/profile") {
    return NextResponse.redirect(new URL("/profile", request.url));

  }
  if (loggedInpathNotAccess && authToken) {
    return NextResponse.redirect(new URL("/profile", request.url));

  }
  if (!loggedInpathNotAccess && !authToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  
}

export const config = {
  matcher: ["/login", "/profile","/username"],
};

