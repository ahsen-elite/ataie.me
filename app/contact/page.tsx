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
    images: [
      {
        url: "/contact-og.png",
        width: 1200,
        height: 630,
        alt: "Contact Ghulam Abbas Ataie",
      },
    ],
    siteName: "Ghulam Abbas Ataie",
    type: "website",
    url: "https://ataie.me/contact",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ghulam Abbas Ataie",
    description:
      "Get in touch with Ghulam Abbas Ataie for collaboration opportunities, project inquiries, or professional networking. Available for freelance work and full-time positions.",
    images: ["/contact-og.png"],
  },
  alternates: {
    canonical: "/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-[1200px] mx-auto w-full  px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>
    </main>
  );
}
