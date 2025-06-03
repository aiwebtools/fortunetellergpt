
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
              <span className="text-sm text-mystical-teal font-medium">AIWEBTOOLS.AI - Premium AI Tools</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gradient text-glow animate-fade-in">
              Fortune Teller GPT - Leading AI Fortune Telling Tool
            </h1>
            
            <p className="text-lg text-gray-300 mb-4 max-w-xl mx-auto lg:mx-0 animate-fade-in opacity-90" style={{ animationDelay: "0.2s" }}>
              Discover your destiny with the most advanced AI fortune telling tool from <strong className="text-mystical-teal">AIWEBTOOLS.AI</strong>. 
              Our artificial intelligence oracle combines cutting-edge data science with mystical wisdom.
            </p>
            
            <p className="text-base text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Experience the future of AI tools with Fortune Teller GPT - where artificial intelligence meets fortune telling. 
              Get detailed predictions, insights, and guidance powered by advanced AI algorithms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <a 
                href="https://chatgpt.com/g/g-67d2038403c88191a80f3e31147babb1-fortune-teller-gpt" 
                className="button-glow px-8 py-3 rounded-full bg-gradient-to-r from-mystical-purple to-mystical-teal text-white font-medium text-lg hover:shadow-lg transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Try Fortune Teller GPT - AI Fortune Telling Tool"
              >
                Try Fortune Teller GPT Now
              </a>
              <a 
                href="#how-it-works" 
                className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
                aria-label="Learn more about AI fortune telling"
              >
                Learn About AI Fortune Telling
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
          <a href="#features" className="text-white/50 hover:text-white transition-colors" aria-label="Scroll to AI tools features">
            <ChevronDown size={24} />
            <span className="sr-only">Scroll Down to Explore AI Tools</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
