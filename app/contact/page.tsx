import { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with Abbas Ataie for collaboration opportunities, project inquiries, or professional networking. Available for freelance work and full-time positions.",
  openGraph: {
    title: "Contact Abbas Ataie",
    description:
      "Get in touch with Abbas Ataie for collaboration opportunities, project inquiries, or professional networking. Available for freelance work and full-time positions.",
    images: [
      {
        url: "/contact-og.png",
        width: 1200,
        height: 630,
        alt: "Contact Abbas Ataie",
      },
    ],
    siteName: "Abbas Ataie",
    type: "website",
    url: "https://abbasataie.com/contact",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Abbas Ataie",
    description:
      "Get in touch with Abbas Ataie for collaboration opportunities, project inquiries, or professional networking. Available for freelance work and full-time positions.",
    images: ["/contact-og.png"],
  },
  alternates: {
    canonical: "https://abbasataie.com/contact",
  },
  keywords: [
    "Contact Abbas Ataie",
    "Hire Software Engineer",
    "Hire Data Scientist",
    "Freelance Developer",
    "Software Engineering Services",
    "Data Science Consulting",
    "Web Development Services",
    "Technical Consultation",
    "Project Collaboration",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

type ContactPageProps = {
  searchParams: { success?: string; error?: string };
};

export default function ContactPage({ searchParams }: ContactPageProps) {
  const success = searchParams.success === "1";
  const errorParam = searchParams.error;
  const error =
    typeof errorParam === "string" && errorParam.length > 0
      ? errorParam
      : undefined;

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-[1200px] mx-auto w-full  px-4 sm:px-6 lg:px-8">
        <ContactForm success={success} error={error} />
      </div>
    </main>
  );
}
