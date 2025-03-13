
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
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

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
        {/* Main promotional image and button */}
        <div className="container mx-auto px-4 py-12 relative z-10 flex flex-col items-center">
          <a 
            href="https://chatgpt.com/g/g-67d2038403c88191a80f3e31147babb1-fortune-teller-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-4xl w-full block rounded-2xl overflow-hidden shadow-lg hover:shadow-mystical-purple/30 transition-all duration-300"
          >
            <img 
              src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-fortune-teller-gpt-_kRpji.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true"
              alt="Fortune Teller GPT Advertisement"
              className="w-full h-auto rounded-2xl"
              loading="eager"
            />
          </a>
          <div className="mt-6">
            <a 
              href="https://chatgpt.com/g/g-67d2038403c88191a80f3e31147babb1-fortune-teller-gpt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className="button-glow bg-gradient-to-r from-mystical-purple to-mystical-teal text-white font-medium text-lg px-8 py-6 h-auto rounded-full hover:shadow-lg hover:shadow-mystical-purple/30 transition-all duration-300"
              >
                <Sparkles className="mr-2" />
                TRY FORTUNE TELLER GPT
              </Button>
            </a>
          </div>
        </div>
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
