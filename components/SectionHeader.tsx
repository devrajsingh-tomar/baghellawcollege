"use client";

import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({ title, subtitle, align = "center", className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-16",
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left",
        className
      )}
    >
      <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 text-brand-gold border-r-4 border-brand-gold bg-brand-light">
        Academic Distinction
      </span>
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-4 tracking-tight leading-tight">
        {title}
      </h2>
      <div className={cn(
        "h-1 bg-brand-gold/20 rounded-full mb-6 relative overflow-hidden",
        align === "center" ? "w-24 mx-auto" : "w-16"
      )}>
        <motion.div 
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 bg-brand-gold w-full h-full"
        />
      </div>
      <p className="text-lg text-gray-600 leading-relaxed font-sans">
        {subtitle}
      </p>
    </motion.div>
  );
}
