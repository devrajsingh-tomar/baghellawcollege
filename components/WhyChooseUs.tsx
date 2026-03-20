"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { University, Users, Landmark, GraduationCap } from "lucide-react";

const Reasons = [
  {
    title: "University Affiliation",
    description: "Affiliated with Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj, ensuring recognized degree and curriculum standards.",
    icon: Landmark,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Expert Faculty",
    description: "Learn from legal experts and experienced academics dedicated to providing a professional student-focused education.",
    icon: Users,
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    title: "Modern Infrastructure",
    description: "Facilities designed for efficient legal teaching, from a law-focused library to tech-equipped classrooms.",
    icon: University,
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    title: "Professional Growth",
    description: "A strong emphasis on the development of ethical legal values and practical training for a successful career.",
    icon: GraduationCap,
    color: "bg-purple-500/10 text-purple-500",
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-brand-dark/5 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          title="Why Choose VGSBVM?" 
          subtitle="Explore the benefits of pursuing your legal graduation at our premier law institution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl hover:border-brand-gold/20 transition-all duration-500 group text-center"
            >
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${reason.color}`}>
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 group-hover:text-brand-gold transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 font-sans leading-relaxed text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
