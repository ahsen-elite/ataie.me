"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 20;
    setScrolled(isScrolled);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const isActive = (path: string) => {
    if (path === "/contact") return pathname === "/contact";
    if (path === "/projects") return pathname === "/projects";
    if (path === "/about") return pathname === "/about";
    if (path === "/mentoring") return pathname === "/mentoring";
    if (path === "/research") return pathname === "/research";
    if (path === "/") return pathname === "/";
    return pathname === path;
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/research", label: "Research" },
    { href: "/mentoring", label: "Mentoring" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm"
          : "bg-transparent"
      } py-4`}
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-blue-500/20 to-blue-600/20 rounded-xl group-hover:from-blue-400/30 group-hover:via-blue-500/30 group-hover:to-blue-600/30 transition-all duration-300 shadow-lg"></div>
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
                  className="absolute -right-1 -bottom-1 w-2 h-2  rounded-full"
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
              className="text-foreground/60 group-hover:text-foreground transition-colors text-sm font-medium"
              whileHover={{ color: "#3B82F6" }}
            >
              Abbas Ataie
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
              href="https://www.linkedin.com/in/ghulam-abbas-ataie-72a4431b9/"
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

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-blue-500/10 hover:text-blue-500"
              >
                <Menu />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-left">
                  <Link
                    href="/"
                    className="text-primary font-medium text-xl flex items-center gap-3 hover:opacity-80 transition-all duration-300 group"
                  >
                    <motion.div
                      className="relative w-10 h-10"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-blue-500/20 to-blue-600/20 rounded-xl group-hover:from-blue-400/30 group-hover:via-blue-500/30 group-hover:to-blue-600/30 transition-all duration-300 shadow-lg"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="relative"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <span className="text-blue-500 font-bold text-lg">
                            G
                          </span>
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
                            className="absolute -right-1 -bottom-1 w-2 h-2  rounded-full"
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
                    <div className="flex flex-col">
                      <span className="text-foreground/60 group-hover:text-foreground transition-colors text-sm font-medium">
                        Abbas Ataie
                      </span>
                      <span className="text-foreground/60 group-hover:text-foreground/80 transition-colors text-xs">
                        backend wizard & AI enthusiast 🧙‍♂️
                      </span>
                    </div>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-left ${
                        isActive(item.href)
                          ? "text-blue-500 bg-blue-500/10"
                          : "hover:text-blue-500"
                      }`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-col gap-4">
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
                    href="https://www.linkedin.com/in/ghulam-abbas-ataie-72a4431b9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/60 hover:text-blue-500 transition-colors group"
                  >
                    LinkedIn{" "}
                    <span className="ml-1 group-hover:translate-x-0.5 transition-transform inline-block">
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
