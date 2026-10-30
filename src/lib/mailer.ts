import nodemailer from "nodemailer";
import { site } from "@/data/site";

export interface SendMailOptions {
  subject: string;
  replyTo?: string;
  text: string;
  html?: string;
  metadata?: Record<string, unknown>;
}

export interface SendMailResult {
  delivered: boolean;
  channel: "smtp" | "resend" | "none";
  error?: string;
}

/**
 * Universal email dispatcher for Alpine Club India:
 * 1. Primary: SMTP (Hostinger or custom SMTP via env variables)
 * 2. Fallback: Resend API (if RESEND_API_KEY is configured)
 * 3. Fallback: Detailed server-side audit log
 */
export async function sendNotificationEmail(options: SendMailOptions): Promise<SendMailResult> {
  const { subject, replyTo, text, html, metadata } = options;

  // 1. Check SMTP credentials
  const smtpHost = process.env.SMTP_HOST || (process.env.SMTP_PASS ? "smtp.hostinger.com" : undefined);
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const smtpSecure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : smtpPort === 465;
  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER || site.email;
  const smtpPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD || process.env.EMAIL_PASS;

  if (smtpHost && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
      });

      await transporter.sendMail({
        from: `"Alpine Club India" <${smtpUser}>`,
        to: site.email,
        replyTo: replyTo || undefined,
        subject,
        text,
        html: html || text.replace(/\n/g, "<br/>"),
      });

      console.log("[sendNotificationEmail] Successfully sent via SMTP to", site.email);
      return { delivered: true, channel: "smtp" };
    } catch (smtpErr) {
      console.error("[sendNotificationEmail] SMTP delivery failed:", smtpErr);
    }
  }

  // 2. Check Resend API key
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const fromEmail = process.env.RESEND_FROM || `Alpine Club India <onboarding@resend.dev>`;
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [site.email],
          reply_to: replyTo || undefined,
          subject,
          text,
          html: html || text.replace(/\n/g, "<br/>"),
        }),
      });

      if (res.ok) {
        console.log("[sendNotificationEmail] Successfully sent via Resend API to", site.email);
        return { delivered: true, channel: "resend" };
      } else {
        const errBody = await res.text();
        console.error("[sendNotificationEmail] Resend API error:", res.status, errBody);
      }
    } catch (resendErr) {
      console.error("[sendNotificationEmail] Resend fetch failed:", resendErr);
    }
  }

  // 3. Fallback: Local server log entry
  console.warn(
    "[sendNotificationEmail] Neither SMTP (SMTP_PASS) nor RESEND_API_KEY is configured. Logged to console:",
    {
      to: site.email,
      subject,
      replyTo,
      metadata,
      timestamp: new Date().toISOString(),
    }
  );

  return {
    delivered: false,
    channel: "none",
    error: "No SMTP credentials or Resend API key configured in .env",
  };
}
