const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-blue-200/20 dark:border-blue-800/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-blue-600/80 dark:text-blue-400/80 text-sm">
            © {new Date().getFullYear()} Ghulam Abbas Ataie. All rights
            reserved.
          </p>
          <p className="text-sm text-muted-foreground max-w-md text-center">
            Passionate about creating innovative solutions and sharing
            knowledge. Let's build something amazing together!
          </p>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>🚀</span>
            <span>Building the future of tech</span>
            <span>🚀</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
