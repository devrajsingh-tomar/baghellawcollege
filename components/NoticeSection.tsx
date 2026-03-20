"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Bell, Calendar, ChevronRight } from "lucide-react";

const Notices = [
  {
    title: "Admissions Open for 3-Year LLB Program (2026-27)",
    date: "March 20, 2026",
    tag: "Admission",
  },
  {
    title: "New Academic Session Commences in July 2026",
    date: "March 15, 2026",
    tag: "Academic",
  },
  {
    title: "Notice Regarding Document Submission for LLB Candidates",
    date: "March 10, 2026",
    tag: "Notification",
  }
];

export default function NoticeSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <SectionHeader 
              title="Recent Notifications" 
              subtitle="Stay updated with the latest announcements, results, and admission news from the college."
              align="left"
            />
            
            <div className="hidden lg:block mt-8 p-6 bg-brand-light rounded-3xl border border-brand-gold/10">
              <div className="flex items-center gap-4 text-brand-dark mb-4 group cursor-pointer hover:text-brand-gold transition-colors">
                <div className="p-3 bg-brand-gold rounded-full text-white shadow-lg shadow-brand-gold/20">
                  <Bell className="w-5 h-5 animate-ring" />
                </div>
                <span className="font-bold font-serif text-lg">Never Miss an Update</span>
              </div>
              <p className="text-gray-500 text-sm font-sans mb-0">Follow our announcements section for all the latest happenings regarding student admissions and exams.</p>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="space-y-4">
              {Notices.map((notice, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 md:p-8 bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:border-brand-gold/20 transition-all duration-300 group cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold text-[10px] font-bold uppercase tracking-widest rounded-full group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                        {notice.tag}
                      </span>
                      <div className="flex items-center gap-1.5 text-gray-400 text-xs font-semibold uppercase tracking-[0.05em]">
                        <Calendar className="w-3 h-3" />
                        {notice.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-brand-dark group-hover:text-brand-gold transition-colors">
                      {notice.title}
                    </h3>
                  </div>
                  <div className="bg-brand-light p-3 rounded-full text-brand-dark group-hover:bg-brand-gold group-hover:text-white transition-all transform group-hover:scale-110">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
