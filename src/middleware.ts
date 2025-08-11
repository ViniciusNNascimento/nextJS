import { NextResponse, NextRequest } from "next/server"


export function middleware(request: NextRequest) {

    const authticated = true

    if (request.nextUrl.pathname.startsWith('/dashboard') && !authticated) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return  NextResponse.next()
}