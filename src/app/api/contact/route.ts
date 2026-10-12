import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

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

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      fieldErrors.message = "Tell us a little more, at least 10 characters";
    }

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        { success: false, message: "Please check the highlighted fields.", fieldErrors },
        { status: 400 },
      );
    }

    // In-flight log for developer / server operator
    console.log("[New Contact Enquiry]", {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "N/A",
      subject: subject?.trim() || "General Enquiry",
      message: message.trim(),
      receivedAt: new Date().toISOString(),
    });

    const firstName = name.trim().split(" ")[0];
    return NextResponse.json({
      success: true,
      message: `Thank you, ${firstName}! Your enquiry has been received. Our Gulmarg team will reach out to you within a few hours.`,
    });
  } catch (error) {
    console.error("[api/contact error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please WhatsApp or call us directly.",
      },
      { status: 500 },
    );
  }
}
