import { NextResponse } from "next/server";
import { site } from "@/data/site";

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

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanPhone = phone?.trim() || "Not provided";
    const cleanSubject = subject?.trim() || "General Enquiry";
    const cleanMessage = message.trim();

    // Server log
    console.log("[New Contact Enquiry]", {
      toEmail: site.email,
      toWhatsApp: site.whatsapp,
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      subject: cleanSubject,
      message: cleanMessage,
      receivedAt: new Date().toISOString(),
    });

    // Optional server-side email forwarding via Web3Forms or FormSubmit
    try {
      const origin = request.headers.get("origin") || site.url;
      await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: origin,
          Referer: `${origin}/contact`,
        },
        body: JSON.stringify({
          _subject: `[Alpine Club India] ${cleanSubject} - ${cleanName}`,
          name: cleanName,
          email: cleanEmail,
          phone: cleanPhone,
          subject: cleanSubject,
          message: cleanMessage,
          _template: "table",
        }),
      });
    } catch (emailErr) {
      console.warn("[api/contact email relay warning]:", emailErr);
    }

    const firstName = cleanName.split(" ")[0];
    return NextResponse.json({
      success: true,
      message: `Thank you, ${firstName}! Your enquiry has been sent to our email (${site.email}) and opened in WhatsApp so our Gulmarg team can reply right away.`,
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
