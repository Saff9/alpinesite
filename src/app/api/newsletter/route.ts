import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
          fieldErrors: { email: ["Please enter a valid email address."] },
        },
        { status: 400 },
      );
    }

    console.log("[New Newsletter Subscriber]", {
      email: email.trim().toLowerCase(),
      subscribedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "You're subscribed! We'll keep you updated with seasonal conditions and travel stories.",
    });
  } catch (error) {
    console.error("[api/newsletter error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again in a moment.",
      },
      { status: 500 },
    );
  }
}
