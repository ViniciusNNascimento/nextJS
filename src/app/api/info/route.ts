import { NextResponse, NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    return NextResponse.json({
        "name": "teste",
        "age": "22",
        "curso": "analise e desenvolvimento de sistemas"
    })

}