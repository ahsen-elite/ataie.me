import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/mentoring", label: "Mentoring" },
  { href: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-blue-200/20 dark:border-blue-800/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-blue-600/80 dark:text-blue-400/80 text-sm">
            © {new Date().getFullYear()} Abbas Ataie. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground max-w-md text-center">
            Passionate about creating innovative solutions and sharing
            knowledge. Let&apos;s build something amazing together!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
