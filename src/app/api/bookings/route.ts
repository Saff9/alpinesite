import { NextResponse } from "next/server";
import { site } from "@/data/site";
import { sendNotificationEmail } from "@/lib/mailer";

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

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanPhone = phone.trim();
    const cleanTitle = tourTitle?.trim() || "Custom Expedition";
    const cleanDate = travelDate?.trim() || "Flexible";
    const cleanTravelers = Number(travelers) || 2;
    const cleanMessage = message?.trim() || "No additional notes provided";

    const textContent = `New Tour Booking Enquiry - Alpine Club India

Tour / Package: ${cleanTitle}
Slug: ${tourSlug || "N/A"}
Name: ${cleanName}
Email: ${cleanEmail}
Phone: ${cleanPhone}
Travel Date: ${cleanDate}
Travelers: ${cleanTravelers}

Additional Requirements:
${cleanMessage}

Received: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
`;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Tour Booking Enquiry</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 24px; color: #111;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e5e5; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <tr>
      <td style="background-color: #047857; padding: 24px 32px; color: #ffffff;">
        <h1 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px;">ALPINE CLUB INDIA</h1>
        <p style="margin: 4px 0 0; font-size: 13px; color: #a7f3d0;">New Tour Booking Enquiry · ${cleanTitle}</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 32px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; width: 130px; color: #475569; font-size: 13px;">Package / Tour</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #047857; font-weight: 700;">${cleanTitle}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569; font-size: 13px;">Traveller Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0f172a;"><strong>${cleanName}</strong></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569; font-size: 13px;">Email Address</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;"><a href="mailto:${cleanEmail}" style="color: #047857; text-decoration: none;">${cleanEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569; font-size: 13px;">Phone / WhatsApp</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0f172a;">${cleanPhone}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569; font-size: 13px;">Expected Date</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0f172a;">${cleanDate}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569; font-size: 13px;">Travelers</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0f172a;">${cleanTravelers} Person(s)</td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding: 18px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #047857;">
          <h3 style="margin: 0 0 8px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #475569;">Requirements & Notes</h3>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${cleanMessage}</p>
        </div>

        <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
          Sent from website booking desk · <a href="${site.url}" style="color: #64748b;">${site.url}</a>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    const mailResult = await sendNotificationEmail({
      subject: `[Booking Request] ${cleanTitle} - ${cleanName}`,
      replyTo: cleanEmail,
      text: textContent,
      html: htmlContent,
      metadata: { tourTitle: cleanTitle, name: cleanName, email: cleanEmail, phone: cleanPhone },
    });

    const firstName = cleanName.split(" ")[0];
    return NextResponse.json({
      success: true,
      delivered: mailResult.delivered,
      channel: mailResult.channel,
      message: `Thank you, ${firstName}! Your booking enquiry for "${cleanTitle}" has been received by our Gulmarg team at ${site.email}.`,
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
