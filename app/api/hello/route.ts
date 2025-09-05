import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: "Hello from Ilham's Portfolio API!",
    timestamp: new Date().toISOString(),
  })
}
