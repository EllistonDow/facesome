import { NextRequest, NextResponse } from "next/server";
import { generateHeadshots } from "@/lib/ai/fal";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { photoUrl, styleId, gender, count } = body;

    if (!photoUrl) {
      return NextResponse.json(
        { error: "Reference photo is required" },
        { status: 400 }
      );
    }

    const result = await generateHeadshots({
      imageUrl: photoUrl,
      styleId: styleId || "wall-street-executive",
      gender: gender || "masculine",
      numOutputs: count || 4,
    });

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
