"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="VGSBVM Campus"
          fill
          sizes="100vw"
          className="object-cover opacity-60 scale-105 animate-subtle-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-brand-dark/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-[0.2em] uppercase rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/30 backdrop-blur-sm">
            Admissions Open 2026-27
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-[1.1]">
            Vansh Gopal Singh Baghel <br />
            <span className="text-brand-gold">Vidhi Mahavidyalaya</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-10 font-sans leading-relaxed">
            A dedicated institution for legal education, committed to shaping 
            future law professionals with strong academic foundations and ethical values.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/admissions"
            className="group w-full sm:w-auto px-10 py-4 bg-brand-gold text-white font-bold rounded-lg shadow-xl hover:bg-brand-gold/90 transition-all flex items-center justify-center gap-2 hover:scale-105"
          >
            Apply Now
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-lg shadow-xl hover:bg-white/20 transition-all text-center hover:scale-105"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold opacity-60">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-brand-gold opacity-80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
