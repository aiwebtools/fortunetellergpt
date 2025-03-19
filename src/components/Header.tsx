
import { useState, useEffect } from "react";
import { Star, Menu, X } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-mystical-dark/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a 
          href="https://chatgpt.com/g/g-67d2038403c88191a80f3e31147babb1-fortune-teller-gpt" 
          className="flex items-center gap-2 group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mystical-purple to-mystical-teal flex items-center justify-center animate-pulse-glow">
            <Star className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gradient">Fortune Teller GPT</h1>
            <p className="text-xs text-gray-400">Presented by <a href="https://www.aiwebtools.ai" className="text-mystical-teal hover:text-mystical-teal/80 transition-colors" target="_blank" rel="noopener noreferrer">AiWebTools.Ai</a></p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <HoverCard>
            <HoverCardTrigger asChild>
              <a 
                href="https://dreaminterpreter.lovable.app/?via=aiwebtools" 
                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="group-hover:underline decoration-mystical-teal/50 underline-offset-4">You May Also Like: Dream Interpreter GPT</span>
                <Star className="w-4 h-4 text-mystical-teal opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 p-4 bg-mystical-dark/95 border-mystical-purple/30 text-white backdrop-blur-md">
              <div className="flex flex-col gap-2">
                <h4 className="font-medium text-mystical-teal">Dream Interpreter GPT</h4>
                <p className="text-sm text-white/80">Unravel the mysteries of your dreams with our AI-powered dream interpreter.</p>
              </div>
            </HoverCardContent>
          </HoverCard>
          
          <a 
            href="#faq" 
            className="text-white/80 hover:text-white transition-colors"
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-white/80 hover:text-white transition-colors"
          >
            Disclaimer
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            className="text-white/80 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            More AI Tools
          </a>
          <Button 
            asChild
            variant="default" 
            className="button-glow px-6 py-2 rounded-full bg-gradient-to-r from-mystical-purple to-mystical-teal text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <a 
              href="https://chatgpt.com/g/g-67d2038403c88191a80f3e31147babb1-fortune-teller-gpt" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Begin Your Reading
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-mystical-dark/95 backdrop-blur-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="https://dreaminterpreter.lovable.app/?via=aiwebtools" 
              className="text-white/90 hover:text-white group flex items-center justify-between py-3 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="group-hover:text-mystical-teal transition-colors">You May Also Like: Dream Interpreter GPT</span>
              <Star className="w-4 h-4 text-mystical-teal opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="#faq" 
              className="text-white/80 hover:text-white transition-colors py-3 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white/80 hover:text-white transition-colors py-3 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              className="text-white/80 hover:text-white transition-colors py-3 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              More AI Tools
            </a>
            <Button 
              asChild
              variant="default" 
              className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-mystical-purple to-mystical-teal text-white font-medium text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              <a 
                href="https://chatgpt.com/g/g-67d2038403c88191a80f3e31147babb1-fortune-teller-gpt" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Begin Your Reading
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
