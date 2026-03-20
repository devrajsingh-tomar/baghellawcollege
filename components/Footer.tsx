"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const QuickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Courses", href: "/courses" },
  { name: "Admissions", href: "/admissions" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

const Resources = [
  { name: "Academic Calendar", href: "#" },
  { name: "Syllabus (LLB)", href: "#" },
  { name: "Library Rules", href: "#" },
  { name: "Document Checklist", href: "/admissions" },
  { name: "University Website", href: "https://prsuniv.ac.in/" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark pt-24 pb-12 relative overflow-hidden text-white/90">
      {/* Decorative background logo */}
      <div className="absolute -bottom-20 -right-20 text-white/[0.03] -rotate-12 pointer-events-none scale-150 blur-sm">
        <Image 
          src="/logo.png" 
          alt="VGSBVM Logo" 
          width={600} 
          height={600} 
          className="opacity-10 grayscale"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 items-stretch font-sans">
          {/* Logo & Info */}
          <div className="flex flex-col gap-8 h-full">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 overflow-hidden rounded-full shadow-lg border-2 border-brand-gold/20 group-hover:border-brand-gold transition-all duration-300">
                <Image 
                  src="/logo.png" 
                  alt="VGSBVM Logo" 
                  fill 
                  sizes="56px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold tracking-tight text-white">VGSBVM</span>
                <span className="text-[0.65rem] font-sans uppercase tracking-[0.2em] font-medium text-brand-gold">Law College</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Established in 2025, Vansh Gopal Singh Baghel Vidhi Mahavidyalaya is committed to excellence in legal education and shaping future legal leaders.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-8 h-full">
            <h4 className="text-xl font-serif font-bold text-white relative flex items-center gap-3 after:content-[''] after:h-[2px] after:w-12 after:bg-brand-gold after:ml-auto md:after:ml-0 after:flex-grow">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {QuickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-brand-gold transition-colors flex items-center gap-2 group text-sm">
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-8 h-full">
            <h4 className="text-xl font-serif font-bold text-white relative flex items-center gap-3 after:content-[''] after:h-[2px] after:w-12 after:bg-brand-gold after:ml-auto md:after:ml-0 after:flex-grow">
              Student Info
            </h4>
            <ul className="space-y-4">
              {Resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-brand-gold transition-colors flex items-center gap-2 group text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/30 group-hover:bg-brand-gold group-hover:scale-125 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-8 h-full font-sans">
            <h4 className="text-xl font-serif font-bold text-white relative flex items-center gap-3 after:content-[''] after:h-[2px] after:w-12 after:bg-brand-gold after:ml-auto md:after:ml-0 after:flex-grow">
              Get in Touch
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 min-w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-gold/20 group-hover:border-brand-gold/20 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Address</span>
                  <p className="text-gray-300 text-sm leading-relaxed">Sakrauli, Ajagra, <br />Pratapgarh Pin Code - 230144</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 min-w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-gold/20 group-hover:border-brand-gold/20 transition-all duration-300">
                  <Phone className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Phone</span>
                  <Link href="tel:7897508570" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">+91 78975-08570</Link>
                  <Link href="tel:7706808813" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">+91 77068-08813</Link>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 min-w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-gold/20 group-hover:border-brand-gold/20 transition-all duration-300">
                  <Mail className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Email</span>
                  <Link href="mailto:vgsbvm@gmail.com" className="text-gray-300 hover:text-brand-gold transition-colors text-sm truncate">vgsbvm@gmail.com</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        {/* Bottom Area */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-gray-500">
          <p>© {currentYear} Vansh Gopal Singh Baghel Vidhi Mahavidyalaya. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-gold transition-colors">Terms of Use</Link>
            <div className="flex items-center gap-2">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for Academic Excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
