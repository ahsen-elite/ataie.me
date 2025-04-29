import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-lg font-bold">
              Abbas Ataie<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Senior Software Engineer
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" size="icon" aria-label="GitHub">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="Email">
              <Link href="mailto:contact@example.com">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Abbas Ataie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}