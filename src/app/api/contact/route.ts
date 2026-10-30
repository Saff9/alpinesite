import { NextResponse } from "next/server";
import { site } from "@/data/site";
import { sendNotificationEmail } from "@/lib/mailer";

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

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      fieldErrors.message = "Please enter your message (at least 5 characters)";
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

    // Plain text format
    const textContent = `New Website Enquiry - Alpine Club India

Name: ${cleanName}
Email: ${cleanEmail}
Phone: ${cleanPhone}
Subject: ${cleanSubject}

Message:
${cleanMessage}

Received: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
`;

    // Polished HTML email template
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Website Enquiry</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 24px; color: #111;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e5e5; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <tr>
      <td style="background-color: #0f172a; padding: 24px 32px; color: #ffffff;">
        <h1 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px;">ALPINE CLUB INDIA</h1>
        <p style="margin: 4px 0 0; font-size: 13px; color: #94a3b8;">New Website Enquiry · ${cleanSubject}</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 32px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; width: 120px; color: #475569; font-size: 13px;">Traveller Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0f172a;"><strong>${cleanName}</strong></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569; font-size: 13px;">Email Address</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;"><a href="mailto:${cleanEmail}" style="color: #059669; text-decoration: none;">${cleanEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569; font-size: 13px;">Phone / WhatsApp</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0f172a;">${cleanPhone}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569; font-size: 13px;">Subject / Tour</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0f172a;">${cleanSubject}</td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding: 18px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #059669;">
          <h3 style="margin: 0 0 8px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #475569;">Message / Requirements</h3>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${cleanMessage}</p>
        </div>

        <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
          Sent from website contact desk · <a href="${site.url}" style="color: #64748b;">${site.url}</a>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    // Dispatch email
    const mailResult = await sendNotificationEmail({
      subject: `[Enquiry] ${cleanSubject} - ${cleanName}`,
      replyTo: cleanEmail,
      text: textContent,
      html: htmlContent,
      metadata: { name: cleanName, email: cleanEmail, phone: cleanPhone, subject: cleanSubject },
    });

    const firstName = cleanName.split(" ")[0];
    return NextResponse.json({
      success: true,
      delivered: mailResult.delivered,
      channel: mailResult.channel,
      message: `Thank you, ${firstName}! Your enquiry has been received by our Gulmarg team at ${site.email}.`,
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
