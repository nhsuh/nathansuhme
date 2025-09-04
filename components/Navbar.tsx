'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    const classList = document.documentElement.classList;
    if (classList.contains('dark')) {
      classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/50 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 relative">
      {/* Subtle gradient accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent-purple to-accent-orange opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link href="/" className="font-display italic text-xl bg-gradient-to-r from-primary via-accent-purple to-accent-orange bg-clip-text text-transparent hover:from-accent-purple hover:via-accent-orange hover:to-primary transition-all duration-300">
            Nathan Suh
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href={"/about" as any}
              className="font-body text-neutral-700 dark:text-neutral-300 hover:bg-gradient-to-r hover:from-primary hover:via-accent-purple hover:to-accent-orange hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              About Me
            </Link>
            <Link 
              href={"/blog" as any}
              className="font-body text-neutral-700 dark:text-neutral-300 hover:bg-gradient-to-r hover:from-primary hover:via-accent-purple hover:to-accent-orange hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              Blog
            </Link>
            <Link 
              href={"/projects" as any}
              className="font-body text-neutral-700 dark:text-neutral-300 hover:bg-gradient-to-r hover:from-primary hover:via-accent-purple hover:to-accent-orange hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              Personal Projects
            </Link>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              aria-label="Toggle theme" 
              className="relative p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-gradient-to-r hover:from-primary/10 hover:via-accent-purple/10 hover:to-accent-orange/10 hover:border-gradient-to-r hover:from-primary hover:via-accent-purple hover:to-accent-orange transition-all duration-300 hover:shadow-lg"
            >
              {isDark ? <Sun size={18} className="hover:text-accent-orange transition-colors" /> : <Moon size={18} className="hover:text-primary transition-colors" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={toggleTheme} 
              aria-label="Toggle theme" 
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span 
                  className={`block w-4 h-0.5 bg-neutral-700 dark:bg-neutral-300 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1' : 'mb-1'
                  }`}
                />
                <span 
                  className={`block w-4 h-0.5 bg-neutral-700 dark:bg-neutral-300 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'mb-1'
                  }`}
                />
                <span 
                  className={`block w-4 h-0.5 bg-neutral-700 dark:bg-neutral-300 transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-48 pb-4' : 'max-h-0'
          }`}
        >
          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4">
            <div className="flex flex-col space-y-1">
              <Link 
                href={"/about" as any}
                className="font-body text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors py-3 px-4 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Me
              </Link>
              <Link 
                href={"/blog" as any}
                className="font-body text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors py-3 px-4 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href={"/projects" as any}
                className="font-body text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors py-3 px-4 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Personal Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
