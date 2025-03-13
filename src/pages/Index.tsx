
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import Footer from "@/components/Footer";
import DisclaimerPopup from "@/components/DisclaimerPopup";

const Index = () => {
  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add embedded image for Ideogram link
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = "https://ideogram.ai/assets/image/lossless/response/kRpjidTaRPSqPEFkuJtHvw";
    link.as = "image";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-mystical-dark text-white relative overflow-hidden">
      {/* Background stars */}
      <div className="fixed inset-0 stars-bg opacity-70 pointer-events-none"></div>
      
      {/* Hidden image with link */}
      <a 
        href="https://ideogram.ai/assets/image/lossless/response/kRpjidTaRPSqPEFkuJtHvw"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden"
      >
        <img 
          src="https://ideogram.ai/assets/image/lossless/response/kRpjidTaRPSqPEFkuJtHvw"
          alt="Fortune Teller GPT"
        />
      </a>
      
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTASection />
        <DisclaimerSection />
      </main>
      <Footer />
      <DisclaimerPopup />
    </div>
  );
};

export default Index;
