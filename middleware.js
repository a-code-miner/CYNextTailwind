import { isLoggedIn } from "./actions/authAction";
import { NextResponse } from "next/server";


// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const isLogin = await isLoggedIn();
    const pathName = request.nextUrl.pathname;
    if (pathName.startsWith('/userpanel') && !isLogin) {
        return NextResponse.redirect(new URL('/login', request.url));
    };
    console.log(pathName);
};

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/userpanel/:path*', '/login'],
};
