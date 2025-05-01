"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/#work") return pathname === "/" || pathname === "/#work";
    if (path === "/#contact")
      return pathname === "/" || pathname === "/#contact";
    return pathname === path;
  };

  const navItems = [
    { href: "/", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-6`}
    >
      <div className="max-w-[1200px]  mx-auto px-12 sm:px-6 lg:px-12 flex justify-between items-center">
        <Link
          href="/"
          className="text-primary font-medium text-xl flex items-center gap-2 hover:opacity-80 transition-opacity group"
        >
          <div className="relative w-7 h-7">
            <div className="absolute inset-0 bg-blue-500/10 rounded-md group-hover:bg-blue-500/20 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center text-blue-500 font-medium text-sm">
              GA
            </div>
          </div>
          <span className="text-foreground/80 group-hover:text-foreground transition-colors">
            ataie
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-1 relative">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={`rounded-full text-sm transition-all relative ${
                    isActive(item.href)
                      ? "text-blue-500"
                      : "hover:text-blue-500"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/60 hover:text-blue-500 transition-colors group"
            >
              Resume{" "}
              <span className="ml-1 group-hover:translate-x-0.5 transition-transform inline-block">
                ↗
              </span>
            </Link>
            <Link
              href="https://linkedin.com/in/abbas-ataie-72a4431b9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/60 hover:text-blue-500 transition-colors group"
            >
              LinkedIn{" "}
              <span className="ml-1 group-hover:translate-x-0.5 transition-transform inline-block">
                ↗
              </span>
            </Link>
            <ThemeToggle />
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  variant="ghost"
                  className={`w-full rounded-full text-sm transition-all relative ${
                    isActive(item.href)
                      ? "text-blue-500"
                      : "hover:text-blue-500"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTabMobile"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Button>
              </Link>
            ))}

            <div className="flex flex-col gap-4 mt-6">
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/60 hover:text-blue-500 transition-colors group"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume{" "}
                <span className="ml-1 group-hover:translate-x-0.5 transition-transform inline-block">
                  ↗
                </span>
              </Link>
              <Link
                href="https://linkedin.com/in/abbas-ataie-72a4431b9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/60 hover:text-blue-500 transition-colors group"
                onClick={() => setMobileMenuOpen(false)}
              >
                LinkedIn{" "}
                <span className="ml-1 group-hover:translate-x-0.5 transition-transform inline-block">
                  ↗
                </span>
              </Link>
              <div className="mt-2">
                <ThemeToggle />
              </div>
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
