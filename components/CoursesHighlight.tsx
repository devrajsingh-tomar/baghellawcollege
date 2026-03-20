"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { GraduationCap, Clock, BookOpen, UserCheck, ArrowRight } from "lucide-react";

const Courses = [
  {
    title: "Bachelor of Laws (LLB)",
    duration: "3 Years",
    eligibility: "Graduation (Any Discipline)",
    description: "A comprehensive undergraduate program in law, focusing on legal theory, court procedures, and ethical practices in the Indian legal system.",
    icon: GraduationCap,
    gradient: "from-brand-dark to-brand-dark/80",
  }
];

export default function CoursesHighlight() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Our Academic Programs" 
          subtitle="Explore our specialized legal courses designed to build a strong foundation for your law career."
        />

        <div className="flex justify-center">
          {Courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="max-w-lg w-full group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-100 relative group-hover:-translate-y-2">
                <div className={`p-1 bg-gradient-to-r ${course.gradient} h-2`} />
                
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-brand-gold/10 rounded-2xl group-hover:bg-brand-gold transition-colors duration-500">
                      <course.icon className="w-8 h-8 text-brand-gold group-hover:text-white" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-brand-dark group-hover:text-brand-gold transition-colors mb-0 leading-none">
                      {course.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 flex items-center gap-1 group">
                        <Clock className="w-3 h-3 group-hover:text-brand-gold" /> Duration
                      </span>
                      <span className="text-brand-dark font-bold font-sans text-sm">{course.duration}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 flex items-center gap-1 group">
                        <UserCheck className="w-3 h-3 group-hover:text-brand-gold" /> Eligibility
                      </span>
                      <span className="text-brand-dark font-bold font-sans text-sm">{course.eligibility}</span>
                    </div>
                  </div>

                  <Link
                    href="/courses"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 bg-brand-dark text-white font-bold rounded-xl hover:bg-brand-gold transition-all duration-300 group-hover:shadow-lg"
                  >
                    View Details
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
