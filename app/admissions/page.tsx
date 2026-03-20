"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { CheckCircle2, FileText, Info, GraduationCap, ArrowRight, UserCheck, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const AdmissionSteps = [
  {
    title: "Registration",
    desc: "Complete the initial registration form online or at our college campus in Sakrauli.",
    icon: UserCheck,
    color: "bg-blue-500",
  },
  {
    title: "Document Verification",
    desc: "Submit your original documents for verification at the college office.",
    icon: FileText,
    color: "bg-orange-500",
  },
  {
    title: "Fee Submission",
    desc: "Complete the admission fee payment as per the university fee structure.",
    icon: GraduationCap,
    color: "bg-emerald-500",
  },
  {
    title: "Orientation",
    desc: "Join our induction session and start your journey towards excellence in law.",
    icon: CheckCircle2,
    color: "bg-purple-500",
  }
];

const RequiredDocuments = [
  "Class 10th Marksheet & Certificate",
  "Class 12th Marksheet & Certificate",
  "Graduation Marksheets (all semesters/years)",
  "Character Certificate from the last attended institution",
  "Transfer Certificate (TC) / Migration Certificate",
  "Caste Certificate (if applicable for reservation)",
  "Domicile Certificate (for UP residents)",
  "Passport size Photographs (8 copies)",
  "Aadhar Card copy",
  "Anti-ragging Affidavit"
];

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen flex flex-col pt-0">
      <Navbar />
      <article className="flex-grow">
        <PageHero 
          title="Admissions 2026-27" 
          subtitle="Join VGSBVM and embark on your path to becoming a distinguished law professional."
        />

        {/* Admission Guidelines */}
        <section className="py-24 bg-white font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="flex items-center gap-3 mb-6 bg-brand-gold/10 p-4 rounded-2xl w-fit">
                  <Info className="w-5 h-5 text-brand-gold" />
                  <span className="text-brand-gold font-bold uppercase tracking-widest text-xs font-sans">Admission Guidelines</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-8 leading-tight">
                  Empowering Futures with Quality Education
                </h2>
                
                <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                  Admissions to Vansh Gopal Singh Baghel Vidhi Mahavidyalaya are conducted in strict accordance with the rules and guidelines laid down by **Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj**, and the **Bar Council of India**.
                </p>

                <div className="bg-brand-light p-10 rounded-[3rem] border border-brand-gold/10">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-6 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-brand-gold" /> Key Dates
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                      <span className="text-gray-600 font-sans">Application Start Date</span>
                      <span className="font-bold text-brand-dark font-sans">April 2025</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                      <span className="text-gray-600 font-sans">Last Date for Registration</span>
                      <span className="font-bold text-brand-dark font-sans">June 2025</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-sans">Session Commencement</span>
                      <span className="font-bold text-brand-dark font-sans">July 2026</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-brand-dark p-10 md:p-16 rounded-[4rem] text-white shadow-2xl relative order-1 lg:order-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl -z-0" />
                <h3 className="text-2xl font-serif font-bold mb-8 text-brand-gold flex items-center gap-2">
                  <FileText className="w-6 h-6" /> Required Documents
                </h3>
                <ul className="space-y-4">
                  {RequiredDocuments.map((doc, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <div className="mt-1 bg-white/10 p-1 rounded-full group-hover:bg-brand-gold transition-colors duration-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-gold group-hover:text-white" />
                      </div>
                      <span className="text-gray-300 text-sm font-sans leading-relaxed group-hover:text-white transition-colors">
                        {doc}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Admission Timeline */}
        <section className="py-24 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              title="Step-by-Step Admission Process" 
              subtitle="Follow our simple timeline to secure your enrollment at VGSBVM."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Timeline Connector Desktop */}
              <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-gray-200 -z-0" />
              
              {AdmissionSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center relative z-10 font-sans"
                >
                  <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center mb-6 shadow-xl relative border-4 border-white ${step.color} group hover:scale-110 transition-transform duration-500`}>
                    <step.icon className="w-10 h-10 text-white" />
                    <span className="absolute -top-3 -right-3 w-10 h-10 bg-brand-dark text-brand-gold rounded-full flex items-center justify-center text-lg font-bold border-2 border-white shadow-lg">
                      {i + 1}
                    </span>
                  </div>
                  <h4 className="text-xl font-serif font-bold text-brand-dark mb-4 group-hover:text-brand-gold transition-colors">{step.title}</h4>
                  <p className="text-sm text-gray-500 font-sans leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="py-24 bg-white" id="inquiry">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
            <div className="bg-white border-2 border-gray-100 p-12 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl -z-0" />
              <div className="text-center mb-12">
                <SectionHeader 
                  title="Admission Inquiry" 
                  subtitle="Have questions? Our admissions counselor will get back to you within 24 hours."
                />
              </div>

              <form className="space-y-8 font-sans">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                  <div className="flex flex-col gap-2 font-sans">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400 font-sans">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full bg-brand-light border-transparent focus:border-brand-gold focus:bg-white focus:ring-4 focus:ring-brand-gold/10 transition-all rounded-2xl p-4 text-brand-dark font-sans"
                    />
                  </div>
                  <div className="flex flex-col gap-2 font-sans">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400 font-sans">Mobile Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 00000-00000"
                      className="w-full bg-brand-light border-transparent focus:border-brand-gold focus:bg-white focus:ring-4 focus:ring-brand-gold/10 transition-all rounded-2xl p-4 text-brand-dark font-sans"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 font-sans">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-400 font-sans">Select Course</label>
                  <select className="w-full bg-brand-light border-transparent focus:border-brand-gold focus:bg-white focus:ring-4 focus:ring-brand-gold/10 transition-all rounded-2xl p-4 text-brand-dark font-sans appearance-none">
                    <option>Bachelor of Laws (LLB) - 3 Years</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 font-sans">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-400 font-sans">Select Admission Year</label>
                  <select className="w-full bg-brand-light border-transparent focus:border-brand-gold focus:bg-white focus:ring-4 focus:ring-brand-gold/10 transition-all rounded-2xl p-4 text-brand-dark font-sans appearance-none">
                    <option>2026-27 (Admissions Open)</option>
                    <option>2026-27 (Pre-Inquiry)</option>
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-brand-dark text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-brand-gold transition-all duration-300 flex items-center justify-center gap-2 group font-sans"
                >
                  Submit Inquiry
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </motion.button>
              </form>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}
