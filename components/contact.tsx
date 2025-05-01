"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const email = "abbas.ataie.montazer@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast({
      title: "Email copied",
      description: "Email address copied to clipboard",
      duration: 3000,
    });

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <motion.section
      className="py-20 md:py-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">
          Like what you see?
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold mb-10">
          Get in touch
        </h3>

        <div className="max-w-md mx-auto">
          <div className="mb-2 text-sm text-muted-foreground">Email</div>
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="text-lg font-medium">{email}</div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={copyToClipboard}
            >
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy email</span>
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            Connect with me on
          </div>
          <div className="mt-2 flex justify-center gap-4">
            <a
              href="https://github.com/abbasatayee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/abbas-ataie-72a4431b9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
