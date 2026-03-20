"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { GraduationCap, Award, Building, ShieldCheck } from "lucide-react";

export default function AffiliationSection() {
  return (
    <section className="py-24 bg-brand-dark/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeader 
            title="Affiliation & Approval" 
            subtitle="The college adheres to high regulatory and academic standards for quality legal education."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* University Affiliation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-8 bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 items-center md:items-start group"
          >
            <div className="bg-brand-gold/10 p-6 rounded-2xl group-hover:bg-brand-gold transition-colors duration-500">
              <Building className="w-12 h-12 text-brand-gold group-hover:text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4 group-hover:text-brand-gold transition-colors">
                Affiliated To
              </h3>
              <p className="text-lg text-gray-700 font-sans font-semibold mb-2">
                Prof. Rajendra Singh (Rajju Bhaiya) University
              </p>
              <p className="text-gray-500 font-sans mb-4 italic">
                Prayagraj, Uttar Pradesh
              </p>
              <p className="text-gray-600 font-sans leading-relaxed text-sm">
                A premier state university in Uttar Pradesh, maintaining academic excellence.
              </p>
            </div>
          </motion.div>

          {/* Bar Council of India */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-8 bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 items-center md:items-start group"
          >
            <div className="bg-brand-gold/10 p-6 rounded-2xl group-hover:bg-brand-gold transition-colors duration-500">
              <ShieldCheck className="w-12 h-12 text-brand-gold group-hover:text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4 group-hover:text-brand-gold transition-colors">
                Bar Council of India
              </h3>
              <p className="text-lg text-gray-700 font-sans font-semibold mb-4">
                Approval In Process
              </p>
              <p className="text-gray-600 font-sans leading-relaxed text-sm">
                Our institution is committed to meeting all BCI standards for legal education excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
