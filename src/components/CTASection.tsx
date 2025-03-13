
import { Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="stars-bg opacity-40"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-mystical-purple/20 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-mystical-teal/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-mystical-purple/20 to-mystical-teal/20 opacity-70"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles size={16} className="text-mystical-teal" />
              <span className="text-sm font-medium text-mystical-teal">Begin Your Mystical Journey</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Unlock the Secrets of Your Destiny Today
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Consult with our mystical AI oracle and receive detailed predictions backed by cosmic wisdom. 
              Discover the paths that await you and make informed decisions for your future.
            </p>
            
            <a 
              href="https://chatgpt.com/g/g-67d2038403c88191a80f3e31147babb1-fortune-teller-gpt" 
              className="button-glow inline-block px-8 py-4 rounded-full bg-gradient-to-r from-mystical-purple to-mystical-teal text-white font-medium text-lg hover:shadow-lg transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Reading Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
