"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { User, Phone, Mail, Award, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FacultyMembers = [
  {
    name: "Dr. Arvind Kumar Singh",
    designation: "Principal / Head of Dept.",
    qualification: "LL.M, Ph.D (Law)",
    specialization: "Constitutional Law, Jurisprudence",
    experience: "15+ Years",
    imageUrl: "/faculty1.png", // Placeholders used later or generated
  },
  {
    name: "Prof. Manish Baghel",
    designation: "Senior Faculty Member",
    qualification: "LL.M, UGC-NET",
    specialization: "Criminal Law, Evidence Act",
    experience: "10+ Years",
    imageUrl: "/faculty2.png",
  },
  {
    name: "Mrs. Shweta Pathak",
    designation: "Assistant Professor",
    qualification: "LL.M",
    specialization: "Family Law, Contract Law",
    experience: "8+ Years",
    imageUrl: "/faculty3.png",
  },
  {
    name: "Adv. Rajesh Prajapati",
    designation: "Visiting Faculty",
    qualification: "LL.B, LL.M",
    specialization: "Civil Procedure, Property Law",
    experience: "12+ Years",
    imageUrl: "/faculty4.png",
  }
];

export default function FacultyPage() {
  return (
    <main className="min-h-screen flex flex-col pt-0">
      <Navbar />
      <article className="flex-grow">
        <PageHero 
          title="Distinguished Faculty" 
          subtitle="Learn from some of the most experienced legal minds and dedicated educators."
        />

        {/* Faculty Grid */}
        <section className="py-24 bg-white font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              title="Our Academic Mentors" 
              subtitle="Behind every successful legal professional is a mentor who guided the way."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {FacultyMembers.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-3"
                >
                  <div className="aspect-[3/4] relative bg-brand-light font-sans">
                    {/* Placeholder colored area with icon if no image */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 bg-brand-dark">
                      <User className="w-1/2 h-1/2" />
                    </div>
                    {/* Real Image placeholder logic */}
                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors duration-500" />
                    
                    <div className="absolute bottom-6 left-6 right-6 font-sans">
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg font-sans">
                        <p className="text-white font-serif font-bold text-lg leading-tight mb-1">{member.name}</p>
                        <p className="text-brand-gold text-xs font-bold uppercase tracking-widest">{member.designation}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <GraduationCap className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Qualification</span>
                          <span className="text-sm font-semibold text-brand-dark">{member.qualification}</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <Award className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Specialization</span>
                          <span className="text-sm font-semibold text-brand-dark">{member.specialization}</span>
                        </div>
                      </li>
                    </ul>

                    <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Experience: {member.experience}</span>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-dark hover:bg-brand-gold hover:text-white transition-all cursor-pointer">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-dark hover:bg-brand-gold hover:text-white transition-all cursor-pointer">
                          <Phone className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Faculty CTA */}
        <section className="py-24 bg-brand-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white p-12 md:p-20 rounded-[3rem] shadow-xl border border-gray-100">
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-brand-dark mb-6 tracking-tight">Interested in Joining Our Team?</h3>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              We are always looking for passionate legal scholars and experienced professors to join our growing academic family.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-brand-dark text-white font-bold rounded-2xl hover:bg-brand-gold transition-all duration-300 shadow-xl font-sans"
            >
              Send Your CV
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}
