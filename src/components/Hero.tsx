
import { ChevronDown } from "lucide-react";
import CrystalBall from "./CrystalBall";

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 pb-16 flex flex-col justify-center relative overflow-hidden">
      <div className="stars-bg opacity-80"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-mystical-purple/20 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-mystical-teal/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 mb-6 animate-fade-in">
              <span className="text-sm text-mystical-teal font-medium">Mystical AI Prophecies</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gradient text-glow animate-fade-in">
              Discover Your Destiny with Fortune Teller GPT
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in opacity-90" style={{ animationDelay: "0.2s" }}>
              Unlock the secrets of your future through our mystical AI oracle. 
              Get detailed predictions backed by data science and cosmic wisdom.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <a 
                href="https://chatgpt.com/g/g-67d2038403c88191a80f3e31147babb1-fortune-teller-gpt" 
                className="button-glow px-8 py-3 rounded-full bg-gradient-to-r from-mystical-purple to-mystical-teal text-white font-medium text-lg hover:shadow-lg transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Begin Your Reading
              </a>
              <a 
                href="#how-it-works" 
                className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-sm">
              <CrystalBall />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#features" className="text-white/50 hover:text-white transition-colors">
            <ChevronDown size={24} />
            <span className="sr-only">Scroll Down</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
