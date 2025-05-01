const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-blue-200/20 dark:border-blue-800/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-blue-600/80 dark:text-blue-400/80 text-sm">
          © {new Date().getFullYear()} Ghulam Abbas Ataie. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
