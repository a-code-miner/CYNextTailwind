// app/api/checkAuth/route.js
import { isLoggedIn } from '@/actions/authAction';
import { NextResponse } from 'next/server';

export async function GET() {
    const loggedIn = await isLoggedIn();
    return NextResponse.json({ isLoggedIn: loggedIn });
}
