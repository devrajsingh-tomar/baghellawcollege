"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Target, Compass, Eye, Landmark } from "lucide-react";
import Image from "next/image";

const Values = [
  {
    title: "Our Vision",
    description: "To be a leading center for legal studies, fostering high ethical standards and legal competence among our students.",
    icon: Eye,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Our Mission",
    description: "Our mission is to provide an inclusive and student-centric academic environment focused on achieving professional excellence in law.",
    icon: Target,
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    title: "Our Values",
    description: "We are committed to the core values of integrity, justice, and community service which are the foundation of legal practice.",
    icon: Compass,
    color: "bg-emerald-500/10 text-emerald-500",
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col pt-0">
      <Navbar />
      <article className="flex-grow">
        <PageHero 
          title="About Our Institution" 
          subtitle="Shaping the future of Indian legal education since 2025."
        />

        {/* Story Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <SectionHeader 
                  title="A Tradition of Excellence" 
                  subtitle="Vansh Gopal Singh Baghel Vidhi Mahavidyalaya is more than just a college; it’s a community of future legal minds."
                  align="left"
                />
                
                <div className="space-y-6 text-gray-600 font-sans leading-relaxed text-lg">
                  <p>
                    Vansh Gopal Singh Baghel Vidhi Mahavidyalaya (VGSBVM), established in 2025, is a burgeoning law college committed to providing students with high-quality legal education. Our institution is built on the foundations of academic discipline, ethics, and professional development.
                  </p>
                  <p>
                    We take pride in our affiliation with the prestigious <strong>Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj</strong>, one of North India’s most distinguished state universities. This affiliation ensures that our students receive a degree that is recognized and respected in the professional sphere.
                  </p>
                  <p>
                    From our modern campus in Sakrauli to our expert faculty members, every aspect of VGSBVM is designed to nurture and guide students towards a successful career as lawyers, legal consultants, and justice advocates.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-1 lg:order-2"
              >
                <div className="aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-brand-light">
                  <Image 
                    src="/hero.png" 
                    alt="Campus History"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-brand-gold p-8 rounded-3xl shadow-xl hidden md:block">
                  <Landmark className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <SectionHeader 
                title="Our Guiding Principles" 
                subtitle="The core values that drive our institution and academic community."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-10 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group h-full"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ${value.color}`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4 group-hover:text-brand-gold transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-sans leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Affiliation Callout */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-brand-dark text-white p-12 md:p-20 rounded-[3rem] shadow-2xl">
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6">Recognized Education</h3>
            <p className="text-gray-400 text-lg mb-8 italic">
              "Providing legal education that adheres to the highest standards set by the University and the Bar Council of India."
            </p>
            <div className="h-1 w-24 bg-brand-gold mx-auto mb-8" />
            <p className="text-white font-bold tracking-widest uppercase text-sm">
              Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj
            </p>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}
