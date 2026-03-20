"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight } from "lucide-react";

export default function AdmissionsCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-brand-gold/5 rounded-full blur-3xl -z-0 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-dark/80 backdrop-blur-sm border border-brand-gold/20 p-12 py-20 rounded-[4rem] shadow-2xl relative overflow-hidden"
        >
          <div className="w-20 h-20 bg-brand-gold/10 rounded-3xl flex items-center justify-center mb-8 mx-auto border border-brand-gold/20 group hover:bg-brand-gold transition-colors duration-500">
            <GraduationCap className="w-10 h-10 text-brand-gold group-hover:text-white" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            Admissions are <span className="text-brand-gold">Open</span> <br /> 
            for Session 2026-27
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl font-sans mb-12 leading-relaxed">
            Begin your journey towards a successful legal career with VGSBVM. 
            Join our 3rd batch of future legal professionals and shape your destiny.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/admissions"
              className="w-full sm:w-auto px-12 py-5 bg-brand-gold text-white font-bold rounded-2xl shadow-xl hover:shadow-brand-gold/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
            >
              Apply Online Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-12 py-5 border-2 border-white/20 text-white font-bold rounded-2xl hover:bg-white hover:text-brand-dark hover:border-white transition-all duration-300 text-center"
            >
              Inquire Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
