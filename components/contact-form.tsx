"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Linkedin, Github, Send, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "I'll get back to you as soon as possible.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" aria-hidden="true" />,
      label: "Let's Connect",
      value: "Ready to discuss your next project?",
      href: "#contact-form",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" aria-hidden="true" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ghulam-abbas-ataie-72a4431b9/",
    },
    {
      icon: <Github className="w-5 h-5" aria-hidden="true" />,
      label: "GitHub",
      href: "https://github.com/abbasataie",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
            Let's Work Together
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Have a project in mind? I'm always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-blue-500/5 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Link
                    key={info.label}
                    href="/contact"
                    className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-all group cursor-pointer"
                  >
                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">{info.label}</p>
                      <p className="font-medium group-hover:text-blue-500 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <p className="mt-6 text-sm text-foreground/60">
                Whether you have a project in mind or just want to chat about
                technology, I'm always excited to connect with fellow developers
                and tech enthusiasts. Let's create something amazing together!
              </p>
            </div>

            <div className="bg-blue-500/5 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6">Connect with Me</h2>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 rounded-xl bg-background/50 hover:bg-background/80 text-blue-500 transition-all group"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="p-3 rounded-lg bg-blue-500/10 group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                      <span className="text-sm font-medium">
                        {social.label}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-blue-500/5 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-foreground/80"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="bg-background/50 border-blue-500/20 focus:border-blue-500/50 transition-colors"
                    placeholder="John Doe"
                    aria-label="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-foreground/80"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-background/50 border-blue-500/20 focus:border-blue-500/50 transition-colors"
                    placeholder="me@ataie.me"
                    aria-label="Your email address"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-foreground/80"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    className="bg-background/50 border-blue-500/20 focus:border-blue-500/50 transition-colors min-h-[150px] resize-none"
                    placeholder="Tell me about your project..."
                    aria-label="Your message"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 h-12 text-base font-medium group"
                disabled={isSubmitting}
                aria-label={
                  isSubmitting ? "Sending message..." : "Send message"
                }
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
