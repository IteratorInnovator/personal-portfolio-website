// api/contact.js
import { Resend } from "resend";

const RESEND_API_KEY = process.env.VITE_RESEND_API_KEY;
const CLOUDFLARE_TURNSTILE_SECRET_KEY =
    process.env.VITE_CLOUDFLARE_TURNSTILE_SECRET_KEY;
const resend = new Resend(RESEND_API_KEY);

const safeParseBody = (body) => {
    if (!body) return {};
    if (typeof body === "string") {
        try {
            return JSON.parse(body);
        } catch (error) {
            console.error("Failed to parse string body", error);
            return {};
        }
    }
    if (body instanceof Buffer) {
        try {
            return JSON.parse(body.toString("utf8"));
        } catch (error) {
            console.error("Failed to parse buffer body", error);
            return {};
        }
    }
    return body;
};

const verifyTurnstileToken = async ({ token, ip }) => {
    if (!token) {
        return { success: false, error: "Missing verification token" };
    }

    if (!CLOUDFLARE_TURNSTILE_SECRET_KEY) {
        console.error("Turnstile secret key is not configured");
        return { success: false, error: "Server misconfiguration" };
    }

    try {
        const formData = new URLSearchParams();
        formData.append("secret", CLOUDFLARE_TURNSTILE_SECRET_KEY);
        formData.append("response", token);
        if (ip) {
            formData.append("remoteip", ip);
        }

        const verificationResponse = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: formData,
            }
        );

        const verification = await verificationResponse.json();

        if (!verification.success) {
            console.error("Turnstile verification failed", verification);
            return {
                success: false,
                error:
                    verification["error-codes"]?.join(", ") ||
                    "Failed human verification",
            };
        }

        return { success: true };
    } catch (error) {
        console.error("Turnstile verification error", error);
        return { success: false, error: "Turnstile verification error" };
    }
};

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    const { name, email, subject, message, turnstileToken } =
        safeParseBody(req.body);

    if (!name || !email || !message) {
        res.status(400).json({ error: "Missing fields" });
        return;
    }

    const clientIp =
        req.headers["cf-connecting-ip"] ||
        req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
        req.socket?.remoteAddress;

    const turnstileResult = await verifyTurnstileToken({
        token: turnstileToken,
        ip: clientIp,
    });

    if (!turnstileResult.success) {
        res.status(400).json({
            error:
                turnstileResult.error ||
                "Unable to verify you are human. Please refresh and try again.",
        });
        return;
    }

    const buildEmailTemplate = ({
        title,
        intro,
        details = [],
        messageBlock,
        footer,
    }) => {
        const detailRows = details
            .map(
                ({ label, value }) => `
          <tr>
            <td style="padding: 8px 12px;font-weight:600;color:#111827;">${label}</td>
            <td style="padding: 8px 12px;color:#1f2937;">${value}</td>
          </tr>
        `
            )
            .join("");

        return `
      <!DOCTYPE html>
      <html lang="en">
        <body style="margin:0;padding:0;background:#f3f4f6;font-family:'Inter',Arial,sans-serif;color:#111827;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f3f4f6;padding:32px 0;">
            <tr>
              <td>
                <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="margin:0 auto;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 25px 60px rgba(15,23,42,0.12);">
                  <tr>
                    <td style="background:linear-gradient(135deg,#111827,#1f2937);padding:32px;text-align:center;color:#f9fafb;">
                      <h1 style="margin:0;font-size:24px;font-weight:700;">${title}</h1>
                      <p style="margin-top:8px;font-size:14px;color:#d1d5db;">${intro}</p>
                    </td>
                  </tr>
                  ${
                      details.length
                          ? `
                        <tr>
                          <td style="padding:24px;">
                            <table role="presentation" width="100%" style="border:1px solid #e5e7eb;border-radius:18px;">
                              ${detailRows}
                            </table>
                          </td>
                        </tr>
                      `
                          : ""
                  }
                  ${
                      messageBlock
                          ? `
                        <tr>
                          <td style="padding:0 24px 24px 24px;">
                            <div style="border:1px solid #e5e7eb;border-radius:18px;padding:20px;">
                              <p style="margin:0 0 12px 0;font-weight:600;color:#111827;">Message</p>
                              <p style="margin:0;white-space:pre-line;color:#374151;line-height:1.6;">
                                ${messageBlock}
                              </p>
                            </div>
                          </td>
                        </tr>
                      `
                          : ""
                  }
                  <tr>
                    <td style="padding:24px;text-align:center;border-top:1px solid #f3f4f6;">
                      <p style="margin:0;font-size:13px;color:#6b7280;">${footer}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;
    };

    // 1. Send emails using Resend
    try {
        const from = "contact@harryngkokjing.com";
        const toYou = "harryngkokjing@gmail.com";

        // Email to you
        await resend.emails.send({
            from,
            to: [toYou],
            subject: "New contact form submission",
            html: buildEmailTemplate({
                title: "New Contact Message",
                intro: "You just received a message via harryngkokjing.com.",
                details: [
                    { label: "Name", value: name || "N/A" },
                    { label: "Email", value: email },
                    { label: "Subject", value: subject || "No Subject" },
                ],
                messageBlock: message,
                footer: "Reply directly to this email to continue the conversation.",
            }),
            replyTo: [email],
        });

        // Confirmation email to user
        await resend.emails.send({
            from,
            to: [email],
            subject: "Thanks for reaching out",
            html: buildEmailTemplate({
                title: "Thanks for reaching out!",
                intro: `Hi ${name || "there"}, thanks for dropping a note.`,
                details: [{ label: "Subject", value: subject || "No Subject" }],
                messageBlock:
                    "I’ve received your message and will respond as soon as possible. If your inquiry is time-sensitive, feel free to follow up via email.",
                footer: "Talk soon, Harry Ng — harryngkokjing.com",
            }),
        });

        res.status(200).json({ status: "ok" });
    } catch (err) {
        console.error("Resend error", err);
        res.status(500).json({ error: "Failed to send email" });
    }
}
