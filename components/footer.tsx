const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-border/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
        <p>
          © {new Date().getFullYear()} Ghulam Abbas Ataie. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
