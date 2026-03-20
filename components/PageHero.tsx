"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-44 pb-24 bg-brand-dark overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-brand-gold/5 rounded-full blur-3xl -z-0 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            {title}
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl font-sans leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
