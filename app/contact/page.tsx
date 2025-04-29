import { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Abbas Ataie",
  description: "Get in touch with Abbas Ataie for collaboration, job opportunities, or general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="text-xl text-muted-foreground">
          Get in touch for collaboration, job opportunities, or general inquiries.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        {/* Contact Form */}
        <Card className="p-6">
          <h2 className="mb-6 text-2xl font-bold">Send a Message</h2>
          <ContactForm />
        </Card>

        {/* Contact Info */}
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="mb-4 text-xl font-bold">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Email</p>
                  <Link 
                    href="mailto:contact@example.com" 
                    className="text-primary hover:underline"
                  >
                    contact@example.com
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Vienna, Austria</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Linkedin className="mt-1 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <Link 
                    href="https://linkedin.com" 
                    className="text-primary hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/abbasataie
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Github className="mt-1 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">GitHub</p>
                  <Link 
                    href="https://github.com" 
                    className="text-primary hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    github.com/abbasataie
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4 text-xl font-bold">Availability</h2>
            <p className="text-muted-foreground">
              I&apos;m currently available for freelance work, consulting, and full-time positions. My typical response time is within 24-48 hours.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}