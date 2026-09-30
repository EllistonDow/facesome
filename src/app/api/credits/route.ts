import { NextRequest, NextResponse } from "next/server";
import { getUserCredits } from "@/lib/cloudflare/d1";

export async function GET(req: NextRequest) {
  // Obtain userId from cookie or query param (defaulting to demo session)
  const userId = req.nextUrl.searchParams.get("userId") || "demo-user";
  const credits = await getUserCredits(userId);

  return NextResponse.json({
    userId: credits.userId,
    balance: credits.balance,
    lifetimeUsed: credits.lifetimeUsed,
    tier: "executive",
  });
}
