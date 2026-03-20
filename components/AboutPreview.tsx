"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Check } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl z-10 border-8 border-white">
              <Image 
                src="/hero.png" // Using the same image for now or another if generated
                alt="Law College Building"
                fill
                className="object-cover"
              />
            </div>
            {/* Artistic accents */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-dark/5 rounded-full blur-3xl -z-0" />
            
            <div className="absolute -bottom-6 -left-6 bg-brand-dark text-white p-8 rounded-xl shadow-xl z-20 hidden md:block">
              <p className="text-4xl font-serif font-bold text-brand-gold">2025</p>
              <p className="text-xs uppercase tracking-widest font-semibold mt-1">Established</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader 
              title="Excellence in Legal Education" 
              subtitle="Empowering the next generation of legal minds with knowledge, ethics, and professional skills."
              align="left"
              className="mb-8"
            />
            
            <p className="text-gray-600 mb-8 leading-relaxed font-sans text-lg">
              Vansh Gopal Singh Baghel Vidhi Mahavidyalaya, established in 2025, is a growing institution focused on providing quality legal education. The college is affiliated with Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Recognized Excellence in Teaching",
                "Affiliated with Prestigious University",
                "Modern Infrastructure and Tech-Ready Classrooms",
                "Ethics-centered Professional Growth"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <div className="mt-1 bg-brand-gold/10 p-1 rounded-full group-hover:bg-brand-gold transition-colors duration-300">
                    <Check className="w-4 h-4 text-brand-gold group-hover:text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-brand-dark font-bold group border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors"
            >
              Read Full Story
              <motion.span 
                animate={{ x: [0, 5, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
