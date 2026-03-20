"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { GraduationCap, Clock, BookOpen, UserCheck, ShieldCheck, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const CurriculumFeatures = [
  "Comprehensive Legal Theory",
  "Moot Court Participation",
  "Internship Opportunities",
  "Professional Ethics Training",
  "Constitutional Law Focus",
  "Criminal & Civil Law Modules"
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen flex flex-col pt-0">
      <Navbar />
      <article className="flex-grow">
        <PageHero 
          title="Academic Programs" 
          subtitle="Specialized legal graduation designed to build a solid career in the Indian judicial and corporate legal system."
        />

        {/* LLB Program Details */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Program Overview */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-2/3"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-brand-gold/10 rounded-2xl">
                    <GraduationCap className="w-10 h-10 text-brand-gold" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-0">
                    Bachelor of Laws (LLB)
                  </h2>
                </div>
                
                <p className="text-gray-600 text-lg md:text-xl font-sans leading-relaxed mb-10">
                  The LL.B (Bachelor of Laws) is a professional degree in law. The three-year program is aimed at providing students with an in-depth understanding of legal principles, research techniques, and advocacy skills.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  <div className="p-8 bg-brand-light rounded-3xl border border-gray-100 flex items-start gap-4">
                    <Clock className="w-8 h-8 text-brand-gold mt-1" />
                    <div>
                      <h4 className="font-bold text-brand-dark text-lg mb-2">Duration</h4>
                      <p className="text-gray-600">3 Years (6 Semesters)</p>
                    </div>
                  </div>
                  <div className="p-8 bg-brand-light rounded-3xl border border-gray-100 flex items-start gap-4">
                    <UserCheck className="w-8 h-8 text-brand-gold mt-1" />
                    <div>
                      <h4 className="font-bold text-brand-dark text-lg mb-2">Eligibility</h4>
                      <p className="text-gray-600">Graduation (in any stream) with minimum marks as per University guidelines.</p>
                    </div>
                  </div>
                  <div className="p-8 bg-brand-light rounded-3xl border border-gray-100 flex items-start gap-4">
                    <ShieldCheck className="w-8 h-8 text-brand-gold mt-1" />
                    <div>
                      <h4 className="font-bold text-brand-dark text-lg mb-2">Admission Basis</h4>
                      <p className="text-gray-600">Based on merit/guidelines of Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj.</p>
                    </div>
                  </div>
                  <div className="p-8 bg-brand-light rounded-3xl border border-gray-100 flex items-start gap-4">
                    <BookOpen className="w-8 h-8 text-brand-gold mt-1" />
                    <div>
                      <h4 className="font-bold text-brand-dark text-lg mb-2">Course Type</h4>
                      <p className="text-gray-600">Full-time Regular Undergraduate Program.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6">Course Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CurriculumFeatures.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-gold" />
                        <span className="text-gray-700 font-medium font-sans">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Sidebar Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/3"
              >
                <div className="sticky top-32 p-10 bg-brand-dark rounded-[3rem] text-white shadow-2xl">
                  <h3 className="text-2xl font-serif font-bold mb-6 text-brand-gold">Apply Now</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-10">
                    The admissions for the upcoming session are now open. Secure your seat at the premier law institution in Sakrauli.
                  </p>
                  
                  <div className="space-y-6">
                    <Link
                      href="/admissions"
                      className="w-full inline-flex items-center justify-center gap-2 py-4 bg-brand-gold text-white font-bold rounded-xl hover:bg-brand-gold/90 transition-all shadow-lg hover:shadow-brand-gold/20"
                    >
                      Process & Timeline
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all font-sans"
                    >
                      Enquire Today
                    </Link>
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/10">
                    <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-4">Contact Admissions</p>
                    <p className="text-lg font-bold">+91 7897508570</p>
                    <p className="text-lg font-bold">+91 7706808813</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-24 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              title="Career Prospects" 
              subtitle="Pursuing an LLB from VGSBVM opens a wide array of career opportunities in various fields."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Legal Practice", desc: "Practice law independently or with established law firms in Indian courts." },
                { title: "Judiciary", desc: "Prepare for Civil Judge exams and serve in the Indian judicial system." },
                { title: "Corporate Counsel", desc: "Work as an in-house legal advisor for national and international corporations." },
                { title: "Legal Consulting", desc: "Provide expert legal advice to government agencies and private businesses." },
                { title: "Legal Research", desc: "Pursue higher studies or contribute to legal policy research and academia." },
                { title: "Civil Services", desc: "Prepare for competitive exams with a strong foundation in Indian law." }
              ].map((career, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <h4 className="text-xl font-serif font-bold text-brand-dark mb-3 group-hover:text-brand-gold transition-colors">{career.title}</h4>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed">{career.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}
