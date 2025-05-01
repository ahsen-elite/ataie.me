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
    { href: "/", label: "Creative" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-4`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link
          href="/"
          className="text-primary font-medium text-xl flex items-center gap-3 hover:opacity-80 transition-all duration-300 group"
        >
          <motion.div
            className="relative w-10 h-10"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl group-hover:from-blue-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300 shadow-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                <span className="text-blue-500 font-bold text-lg">G</span>
                <motion.span
                  className="text-purple-500 font-bold text-lg absolute -right-1 -top-1"
                  animate={{
                    y: [0, -2, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  A
                </motion.span>
                <motion.div
                  className="absolute -right-1 -bottom-1 w-2 h-2 bg-pink-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="flex flex-col" whileHover={{ x: 2 }}>
            <motion.span
              className="text-foreground/80 group-hover:text-foreground transition-colors text-sm font-medium"
              whileHover={{ color: "#3B82F6" }}
            >
              Abbas
            </motion.span>
            <motion.span
              className="text-foreground/60 group-hover:text-foreground/80 transition-colors text-xs"
              whileHover={{ color: "#3B82F6" }}
            >
              backend wizard & AI enthusiast 🧙‍♂️
            </motion.span>
          </motion.div>
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
          <nav className="flex flex-col gap-3">
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

            <div className="flex flex-col gap-3 mt-4">
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/60 hover:text-blue-500 transition-colors group flex items-center"
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
                className="text-sm text-foreground/60 hover:text-blue-500 transition-colors group flex items-center"
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
