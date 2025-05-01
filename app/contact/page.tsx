import { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with Ghulam Abbas Ataie for collaboration opportunities, project inquiries, or professional networking. Available for freelance work and full-time positions.",
  openGraph: {
    title: "Contact Ghulam Abbas Ataie",
    description:
      "Get in touch with Ghulam Abbas Ataie for collaboration opportunities, project inquiries, or professional networking. Available for freelance work and full-time positions.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-[1200px] mx-auto w-full">
        <ContactForm />
      </div>
    </main>
  );
}
