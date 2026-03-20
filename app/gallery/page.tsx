"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { Search, Image as ImageIcon, Camera, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const GalleryImages = [
  { id: 1, title: "Campus Entrance", category: "Campus", url: "/hero.png" },
  { id: 2, title: "Legal Library", category: "Facilities", url: "/hero.png" },
  { id: 3, title: "Graduation Ceremony", category: "Events", url: "/hero.png" },
  { id: 4, title: "Practical Courts", category: "Facilities", url: "/hero.png" },
  { id: 5, title: "Student Seminar", category: "Academic", url: "/hero.png" },
  { id: 6, title: "Research Center", category: "Campus", url: "/hero.png" },
  { id: 7, title: "Inaugural Session", category: "Events", url: "/hero.png" },
  { id: 8, title: "Classroom Interaction", category: "Academic", url: "/hero.png" },
];

const Categories = ["All", "Campus", "Facilities", "Academic", "Events"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? GalleryImages 
    : GalleryImages.filter(img => img.category === activeCategory);

  return (
    <main className="min-h-screen flex flex-col pt-0">
      <Navbar />
      <article className="flex-grow">
        <PageHero 
          title="Campus Gallery" 
          subtitle="Glimpses of academic life, campus infrastructure, and excellence at VGSBVM."
        />

        {/* Gallery Section */}
        <section className="py-24 bg-white font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
              <SectionHeader 
                title="Captured Moments" 
                subtitle="Explore our vibrant campus and modern facilities through our gallery."
                align="left"
                className="mb-0 max-w-lg"
              />
              
              <div className="flex items-center flex-wrap gap-4 bg-brand-light p-2 rounded-2xl border border-gray-100 shadow-sm font-sans">
                {Categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                      activeCategory === cat 
                        ? "bg-brand-dark text-white shadow-lg shadow-brand-dark/20" 
                        : "text-gray-500 hover:text-brand-dark hover:bg-white/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 font-sans"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="group relative h-80 rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer font-sans"
                  >
                    <Image
                      src={image.url}
                      alt={image.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 font-sans">
                      <div className="flex items-center gap-2 mb-2">
                        <ImageIcon className="w-4 h-4 text-brand-gold" />
                        <span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">{image.category}</span>
                      </div>
                      <h3 className="text-white font-serif font-bold text-xl leading-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {image.title}
                      </h3>
                      <div className="mt-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                          <Search className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Video Tour Callout */}
        <section className="py-24 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-brand-dark text-white p-12 md:p-24 rounded-[4rem] shadow-2xl relative overflow-hidden font-sans">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl -z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-3xl -z-0" />
            
            <div className="relative z-10 font-sans">
              <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mb-10 mx-auto shadow-xl shadow-brand-gold/20 animate-pulse cursor-pointer hover:scale-110 transition-transform font-sans">
                <Camera className="w-10 h-10 text-brand-dark" />
              </div>
              <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8">Take a Virtual Tour</h3>
              <p className="max-w-xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed font-sans">
                Can't visit in person? Explore our classrooms, moot court rooms, and library through our interactive virtual experience.
              </p>
              <button className="px-12 py-5 bg-brand-gold text-white font-bold rounded-2xl hover:bg-brand-gold/90 transition-all shadow-xl hover:shadow-brand-gold/20 flex items-center gap-2 mx-auto font-sans">
                <LayoutGrid className="w-5 h-5" />
                Launch 3D Tour
              </button>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}
