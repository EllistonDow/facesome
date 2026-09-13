import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Demo credit balance endpoint (can be connected to Supabase Auth & PostgreSQL)
  return NextResponse.json({
    balance: 100,
    lifetimeUsed: 40,
    tier: "executive",
  });
}
