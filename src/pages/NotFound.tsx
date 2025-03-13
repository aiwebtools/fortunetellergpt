
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Star } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-mystical-dark relative">
      <div className="stars-bg opacity-70"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-mystical-purple/20 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-mystical-teal/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
      
      <div className="text-center relative z-10 glass-panel p-12 max-w-md mx-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-mystical-purple to-mystical-teal flex items-center justify-center mb-6 animate-pulse-glow">
          <Star className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-gray-300 mb-8">The stars have misaligned. This page was not found in your destiny.</p>
        <a 
          href="/" 
          className="button-glow px-8 py-3 rounded-full bg-gradient-to-r from-mystical-purple to-mystical-teal text-white font-medium hover:shadow-lg transition-all duration-300 inline-block"
        >
          Return to Your Path
        </a>
      </div>
    </div>
  );
};

export default NotFound;
