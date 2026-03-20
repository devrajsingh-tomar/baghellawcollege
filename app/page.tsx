import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import CoursesHighlight from "@/components/CoursesHighlight";
import WhyChooseUs from "@/components/WhyChooseUs";
import AffiliationSection from "@/components/AffiliationSection";
import NoticeSection from "@/components/NoticeSection";
import AdmissionsCTA from "@/components/AdmissionsCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col pt-0">
      <Navbar />
      <article className="flex-grow">
        <Hero />
        <AboutPreview />
        <CoursesHighlight />
        <WhyChooseUs />
        <AffiliationSection />
        <NoticeSection />
        <AdmissionsCTA />
      </article>
      <Footer />
    </main>
  );
}
