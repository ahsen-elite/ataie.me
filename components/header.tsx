"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-6 z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link
          href="/"
          className="text-primary font-medium text-xl flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="relative w-7 h-7">
            <div className="absolute inset-0 bg-blue-500/10 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center text-blue-500 font-medium text-sm">
              GA
            </div>
          </div>
          <span className="text-foreground/80">ataie</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-1">
            <Button
              variant="ghost"
              className="rounded-full text-sm hover:bg-blue-500/10 hover:text-blue-500"
            >
              Work
            </Button>
            <Button
              variant="ghost"
              className="rounded-full text-sm hover:bg-blue-500/10 hover:text-blue-500"
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="rounded-full text-sm hover:bg-blue-500/10 hover:text-blue-500"
            >
              Contact
            </Button>
          </nav>

          <div className="flex items-center gap-6">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/60 hover:text-blue-500 transition-colors"
            >
              Resume <span className="ml-1">↗</span>
            </Link>
            <Link
              href="https://linkedin.com/in/abbas-ataie-72a4431b9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/60 hover:text-blue-500 transition-colors"
            >
              LinkedIn <span className="ml-1">↗</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-blue-500/10 hover:text-blue-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm pt-16 px-4">
          <nav className="flex flex-col gap-4">
            <Button
              variant="ghost"
              className="w-full rounded-full text-sm hover:bg-blue-500/10 hover:text-blue-500"
            >
              Work
            </Button>
            <Button
              variant="ghost"
              className="w-full rounded-full text-sm hover:bg-blue-500/10 hover:text-blue-500"
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="w-full rounded-full text-sm hover:bg-blue-500/10 hover:text-blue-500"
            >
              Contact
            </Button>

            <div className="flex flex-col gap-4 mt-6">
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/60 hover:text-blue-500 transition-colors"
              >
                Resume <span className="ml-1">↗</span>
              </Link>
              <Link
                href="https://linkedin.com/in/abbas-ataie-72a4431b9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/60 hover:text-blue-500 transition-colors"
              >
                LinkedIn <span className="ml-1">↗</span>
              </Link>
            </div>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 hover:bg-blue-500/10 hover:text-blue-500"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X />
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
