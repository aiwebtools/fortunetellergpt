
import { useState, useEffect } from "react";
import { Star, Menu, X } from "lucide-react";

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
          <a 
            href="https://chatgpt.com/g/g-67d9371a80988191909edd68d54a1c7f-dream-interpreter-gpt" 
            className="text-white/80 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            You May Also Like: Dream Interpreter GPT
          </a>
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
          <a 
            href="https://chatgpt.com/g/g-67d2038403c88191a80f3e31147babb1-fortune-teller-gpt" 
            className="button-glow px-6 py-2 rounded-full bg-gradient-to-r from-mystical-purple to-mystical-teal text-white font-medium hover:shadow-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Begin Your Reading
          </a>
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
              href="https://chatgpt.com/g/g-67d9371a80988191909edd68d54a1c7f-dream-interpreter-gpt" 
              className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              You May Also Like: Dream Interpreter GPT
            </a>
            <a 
              href="#faq" 
              className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              More AI Tools
            </a>
            <a 
              href="https://chatgpt.com/g/g-67d2038403c88191a80f3e31147babb1-fortune-teller-gpt" 
              className="px-6 py-3 rounded-full bg-gradient-to-r from-mystical-purple to-mystical-teal text-white font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Begin Your Reading
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
