import { NextResponse } from "next/server"

export async function GET(Response: NextResponse) {
    return NextResponse.json(
        {
            "name": "teste",
            "age": "22",
            "curso": "analise e desenvolvimento de sistemas"
        }
    )

}