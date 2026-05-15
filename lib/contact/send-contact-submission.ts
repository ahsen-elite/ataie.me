import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function validateFromEmail(email: string): string {
  const trimmed = email.trim();
  const emailOnlyRegex = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
  if (emailOnlyRegex.test(trimmed)) {
    return trimmed;
  }
  const nameEmailRegex = /^.+<\s*[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+\s*>$/;
  if (nameEmailRegex.test(trimmed)) {
    return trimmed.replace(/\s*<\s*/, " <").replace(/\s*>\s*/, ">");
  }
  const emailMatch = trimmed.match(/[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+/);
  if (emailMatch) {
    return `Contact Form <${emailMatch[0]}>`;
  }
  return "onboarding@resend.dev";
}

export type SendContactResult =
  | { ok: true; id?: string }
  | { ok: false; error: string; status?: number };

export async function sendContactSubmission(input: {
  name: string;
  email: string;
  message: string;
}): Promise<SendContactResult> {
  if (!process.env.RESEND_API_KEY) {
    return {
      ok: false,
      error:
        "Email service is not configured. Please contact the administrator.",
      status: 500,
    };
  }

  const { name, email, message } = input;

  if (!name || !email || !message) {
    return { ok: false, error: "All fields are required", status: 400 };
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (
    trimmedName.length === 0 ||
    trimmedEmail.length === 0 ||
    trimmedMessage.length === 0
  ) {
    return { ok: false, error: "All fields are required", status: 400 };
  }

  if (trimmedName.length > 100) {
    return {
      ok: false,
      error: "Name is too long (max 100 characters)",
      status: 400,
    };
  }

  if (trimmedMessage.length > 5000) {
    return {
      ok: false,
      error: "Message is too long (max 5000 characters)",
      status: 400,
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return { ok: false, error: "Invalid email format", status: 400 };
  }

  const fromEmailRaw =
    process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
  const fromEmail = validateFromEmail(fromEmailRaw);
  const toEmail = process.env.RESEND_TO_EMAIL || "itsabbas.ataie@gmail.com";

  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject: `New Contact Form Message from ${escapeHtml(trimmedName)}`,
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
            <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin-top: 10px; white-space: pre-wrap;">${escapeHtml(trimmedMessage).replace(/\n/g, "<br>")}</div>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    replyTo: trimmedEmail,
  });

  if (error) {
    let errorMessage = "Failed to send email. Please try again later.";
    if (error.message) {
      errorMessage = error.message;
    }
    return { ok: false, error: errorMessage, status: 500 };
  }

  return { ok: true, id: data?.id };
}
