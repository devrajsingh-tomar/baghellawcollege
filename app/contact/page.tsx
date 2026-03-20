"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, Map } from "lucide-react";
import { motion } from "framer-motion";

// Helper icon
function Navigation2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col pt-0">
      <Navbar />
      <article className="flex-grow">
        <PageHero
          title="Contact Us"
          subtitle="Get in touch with our team for any inquiries, admissions, or support. We are here to help."
        />

        {/* Contact Info Grid */}
        <section className="py-24 bg-white font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-10 rounded-[3rem] bg-brand-light border border-gray-100 hover:shadow-xl hover:border-brand-gold/10 transition-all group flex flex-col items-center text-center font-sans h-full"
              >
                <div className="w-20 h-20 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-gold transition-colors duration-500 font-sans">
                  <Phone className="w-10 h-10 text-brand-gold group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6 tracking-tight">Call Any Time</h3>
                <p className="text-gray-500 text-sm font-sans mb-8">Feel free to speak with our admissions officer regarding your legal career path.</p>
                <div className="space-y-4 font-sans">
                  <p className="text-xl font-bold font-sans text-brand-dark hover:text-brand-gold transition-colors cursor-pointer">+91 7897508570</p>
                  <p className="text-xl font-bold font-sans text-brand-dark hover:text-brand-gold transition-colors cursor-pointer">+91 7706808813</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-10 rounded-[3rem] bg-brand-light border border-gray-100 hover:shadow-xl hover:border-brand-gold/10 transition-all group flex flex-col items-center text-center font-sans h-full"
              >
                <div className="w-20 h-20 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-gold transition-colors duration-500 font-sans">
                  <Mail className="w-10 h-10 text-brand-gold group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6 tracking-tight">Email Support</h3>
                <p className="text-gray-500 text-sm font-sans mb-8">Send us your queries and we will reply to you as soon as possible with details.</p>
                <div className="space-y-4 font-sans text-brand-dark text-xl font-bold underline decoration-brand-gold decoration-2 underline-offset-8 hover:text-brand-gold transition-colors cursor-pointer">
                  <p className="truncate">vgsbvm@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-10 rounded-[3rem] bg-brand-light border border-gray-100 hover:shadow-xl hover:border-brand-gold/10 transition-all group flex flex-col items-center text-center font-sans h-full"
              >
                <div className="w-20 h-20 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-gold transition-colors duration-500 font-sans">
                  <MapPin className="w-10 h-10 text-brand-gold group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6 tracking-tight">Visit Campus</h3>
                <p className="text-gray-500 text-sm font-sans mb-8">Our institution is located in the heart of Sakrauli. Visit us for a personal consultation.</p>
                <p className="text-lg font-bold font-sans text-brand-dark">
                  Sakrauli Ajagra, Sakrauli, <br />
                  Uttar Pradesh - 230144, India
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch font-sans">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col h-full font-sans"
              >
                <div className="bg-brand-dark p-12 md:p-16 rounded-[4rem] text-white flex-grow shadow-2xl relative overflow-hidden font-sans">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl -z-0" />
                  <div className="mb-12 font-sans">
                    <SectionHeader
                      title="Send a Message"
                      subtitle="Fill out the form below and our team will contact you back for any further information."
                      align="left"
                      className="text-white"
                    />
                  </div>

                  <form className="space-y-8 font-sans">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                      <div className="flex flex-col gap-2 font-sans">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 font-sans">Full Name</label>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full bg-white/5 border border-white/10 focus:border-brand-gold focus:bg-white/10 transition-all rounded-2xl p-4 text-white font-sans"
                        />
                      </div>
                      <div className="flex flex-col gap-2 font-sans">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 font-sans">Mobile</label>
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          className="w-full bg-white/5 border border-white/10 focus:border-brand-gold focus:bg-white/10 transition-all rounded-2xl p-4 text-white font-sans"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 font-sans">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 font-sans">Message</label>
                      <textarea
                        rows={4}
                        placeholder="Type your message here..."
                        className="w-full bg-white/5 border border-white/10 focus:border-brand-gold focus:bg-white/10 transition-all rounded-2xl p-4 text-white font-sans"
                      />
                    </div>

                    <button className="w-full bg-brand-gold text-white font-bold py-5 rounded-2xl shadow-xl hover:shadow-brand-gold/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 font-sans">
                      Send message
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col h-full font-sans"
              >
                <div className="bg-brand-light rounded-[4rem] overflow-hidden flex-grow shadow-lg border border-gray-100 font-sans relative min-h-[500px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.7849985381954!2d81.87401559999999!3d25.9094375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399af02dfd8b3757%3A0xa87ebbe22a718d7c!2sWV5F%2BQJC%2C%20Jogapur%2C%20Uttar%20Pradesh%20230144!5e0!3m2!1sen!2sin!4v1774019928068!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, position: "absolute", inset: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Working Hours */}
        <section className="py-24 bg-brand-dark/5 font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
            <div className="bg-white p-12 md:p-20 rounded-[4rem] text-center shadow-xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-12 font-sans">
              <div className="flex items-center gap-6 font-sans">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="w-8 h-8 text-brand-gold" />
                </div>
                <div className="text-left font-sans">
                  <h4 className="text-2xl font-serif font-bold text-brand-dark">Office Hours</h4>
                  <p className="text-gray-500 font-sans">Visit us during working hours for inquiries.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-12 font-sans">
                <div className="text-center md:text-left font-sans">
                  <span className="text-xs uppercase tracking-widest font-bold text-gray-400 font-sans">Mon - Sat</span>
                  <p className="text-xl font-bold text-brand-dark font-sans mt-1">09:00 AM - 04:00 PM</p>
                </div>
                <div className="text-center md:text-left font-sans">
                  <span className="text-xs uppercase tracking-widest font-bold text-gray-400 font-sans">Sunday</span>
                  <p className="text-xl font-bold text-brand-gold font-sans mt-1">Closed (Holiday)</p>
                </div>
              </div>

              <button className="px-10 py-5 bg-brand-dark text-white rounded-2xl font-bold shadow-xl hover:bg-brand-gold transition-all duration-300 font-sans flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Live Chat
              </button>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}
