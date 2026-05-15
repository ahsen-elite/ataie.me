import { NextRequest, NextResponse } from "next/server";
import { sendContactSubmission } from "@/lib/contact/send-contact-submission";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const result = await sendContactSubmission({
      name: typeof name === "string" ? name : "",
      email: typeof email === "string" ? email : "",
      message: typeof message === "string" ? message : "",
    });

    if (!result.ok) {
      return NextResponse.json(
        { error: result.error },
        { status: result.status ?? 400 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: result.id },
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
