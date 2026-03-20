"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import Image from "next/image";

const NavLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Admissions", href: "/admissions" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname, isOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full shadow-lg group-hover:shadow-brand-gold/30 transition-all duration-300">
              <Image 
                src="/logo.png" 
                alt="VGSBVM Logo" 
                fill 
                sizes="(max-width: 768px) 48px, 56px"
                priority
                className="object-cover group-hover:scale-115 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-lg md:text-xl font-serif font-bold tracking-tight leading-none transition-colors duration-300",
                scrolled ? "text-brand-dark" : "text-white"
              )}>
                VGSBVM
              </span>
              <span className="text-[0.6rem] md:text-[0.65rem] font-sans uppercase tracking-[0.2em] font-medium text-brand-gold">
                Law College
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-brand-gold py-1 duration-300",
                  pathname === link.href 
                    ? "text-brand-gold" 
                    : scrolled ? "text-brand-dark" : "text-white/90",
                  "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-gold after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100",
                  pathname === link.href && "after:scale-x-100"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/admissions" 
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg",
                scrolled 
                  ? "bg-brand-dark text-white hover:bg-brand-gold" 
                  : "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20"
              )}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 transition-colors",
              scrolled ? "text-brand-dark" : "text-white"
            )}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {NavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                    pathname === link.href 
                      ? "bg-brand-light text-brand-gold" 
                      : "text-brand-dark hover:bg-brand-light hover:text-brand-gold"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link 
                  href="/admissions" 
                  className="block w-full text-center bg-brand-dark text-white px-6 py-3 rounded-lg text-sm font-bold active:scale-95 transition-all"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
