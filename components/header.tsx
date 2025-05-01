"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-6 z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="text-primary font-bold text-2xl">
          <span className="text-blue-500">b</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-1">
            <Button variant="default" className="rounded-full text-sm bg-blue-600 hover:bg-blue-700">Work</Button>
            <Button variant="ghost" className="rounded-full text-sm">Play</Button>
            <Button variant="ghost" className="rounded-full text-sm">Sell</Button>
          </nav>
          
          <div className="flex items-center gap-6">
            <Link href="#resume" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Resume <span className="ml-1">↗</span>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              LinkedIn <span className="ml-1">↗</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background pt-16 px-4">
          <nav className="flex flex-col gap-4">
            <Button variant="default" className="w-full rounded-full text-sm bg-blue-600 hover:bg-blue-700">Work</Button>
            <Button variant="outline" className="w-full rounded-full text-sm">Play</Button>
            <Button variant="outline" className="w-full rounded-full text-sm">Sell</Button>
            
            <div className="flex flex-col gap-4 mt-6">
              <Link href="#resume" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Resume <span className="ml-1">↗</span>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                LinkedIn <span className="ml-1">↗</span>
              </Link>
            </div>
          </nav>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
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