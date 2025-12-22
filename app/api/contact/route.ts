import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to escape HTML to prevent XSS
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

// Helper function to validate and format email address
// Resend accepts: "email@example.com" or "Name <email@example.com>"
function validateFromEmail(email: string): string {
  const trimmed = email.trim();

  // Check if it's already in the correct format: "email@example.com"
  const emailOnlyRegex = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
  if (emailOnlyRegex.test(trimmed)) {
    return trimmed;
  }

  // Check if it's in format: "Name <email@example.com>" (with or without spaces around < >)
  const nameEmailRegex = /^.+<\s*[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+\s*>$/;
  if (nameEmailRegex.test(trimmed)) {
    // Normalize spacing: ensure single space before < and no space after < or before >
    return trimmed.replace(/\s*<\s*/, " <").replace(/\s*>\s*/, ">");
  }

  // If invalid format, try to extract email and use default name
  const emailMatch = trimmed.match(/[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+/);
  if (emailMatch) {
    return `Contact Form <${emailMatch[0]}>`;
  }

  // Fallback to default
  return "onboarding@resend.dev";
}

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please contact the administrator.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Trim and validate input lengths
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (
      trimmedName.length === 0 ||
      trimmedEmail.length === 0 ||
      trimmedMessage.length === 0
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (trimmedName.length > 100) {
      return NextResponse.json(
        { error: "Name is too long (max 100 characters)" },
        { status: 400 }
      );
    }

    if (trimmedMessage.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long (max 5000 characters)" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email using Resend
    // Configure these in your .env.local file:
    // RESEND_FROM_EMAIL - The verified sender email (e.g., "Contact Form <noreply@ataie.me>" or "noreply@ataie.me")
    // RESEND_TO_EMAIL - The recipient email (e.g., "itsabbas.ataie@gmail.com")
    //
    // For testing: Use "onboarding@resend.dev" as from and your verified email as to
    // For production: Verify your domain at https://resend.com/domains and use an email from that domain
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
      replyTo: trimmedEmail, // This allows you to reply directly to the sender
    });

    if (error) {
      console.error("Resend error:", error);

      // Provide more specific error messages
      let errorMessage = "Failed to send email. Please try again later.";
      if (error.message) {
        errorMessage = error.message;
      }

      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
