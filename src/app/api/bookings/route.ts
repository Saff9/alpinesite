import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tourSlug, tourTitle, name, email, phone, travelDate, travelers, message } = body;

    const fieldErrors: Record<string, string> = {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      fieldErrors.name = "Please enter your name";
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      fieldErrors.email = "Please enter a valid email address";
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
      fieldErrors.phone = "Please enter a valid phone number";
    }

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        { success: false, message: "Please check the highlighted fields.", fieldErrors },
        { status: 400 },
      );
    }

    console.log("[New Tour Booking Enquiry]", {
      tourSlug,
      tourTitle,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      travelDate: travelDate || "Flexible",
      travelers: Number(travelers) || 2,
      message: message?.trim() || "",
      receivedAt: new Date().toISOString(),
    });

    const firstName = name.trim().split(" ")[0];
    return NextResponse.json({
      success: true,
      message: `Thank you, ${firstName}! Your booking enquiry for "${tourTitle}" has been received. Our team will contact you shortly to confirm dates and details.`,
    });
  } catch (error) {
    console.error("[api/bookings error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please reach out to us directly on WhatsApp or call.",
      },
      { status: 500 },
    );
  }
}
