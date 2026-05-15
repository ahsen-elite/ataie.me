"use server";

import { redirect } from "next/navigation";
import { sendContactSubmission } from "@/lib/contact/send-contact-submission";

export async function submitContactForm(formData: FormData) {
  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const message = String(formData.get("message") ?? "");

  const result = await sendContactSubmission({ name, email, message });

  if (!result.ok) {
    const safe =
      result.error.length > 180
        ? `${result.error.slice(0, 180)}…`
        : result.error;
    redirect(`/contact?error=${encodeURIComponent(safe)}`);
  }

  redirect("/contact?success=1");
}
