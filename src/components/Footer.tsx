
import { Star } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-mystical-dark/70 backdrop-blur-md border-t border-white/10 py-12 relative overflow-hidden">
      <div className="stars-bg"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <a 
              href="https://chatgpt.com/g/g-67d2038403c88191a80f3e31147babb1-fortune-teller-gpt" 
              className="flex items-center gap-2 mb-4 group"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fortune Teller GPT by AIWEBTOOLS.AI"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mystical-purple to-mystical-teal flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gradient">Fortune Teller GPT</h3>
                <p className="text-xs text-gray-400">By <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="hover:text-mystical-teal transition-colors" target="_blank" rel="noopener noreferrer"><strong>AIWEBTOOLS.AI</strong></a></p>
              </div>
            </a>
            <p className="text-gray-400 text-sm mt-4">
              <strong className="text-mystical-teal">AIWEBTOOLS.AI</strong> brings you Fortune Teller GPT - the most advanced AI fortune telling tool. 
              Discover your destiny through our AI-powered mystical oracle with predictions backed by data science and artificial intelligence.
            </p>
            <p className="text-xs text-gray-500 mt-3 italic">For informational, educational and research purposes only.</p>
            
            <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
              <h4 className="text-sm font-bold text-mystical-teal mb-2">AI Tools Keywords:</h4>
              <p className="text-xs text-gray-500">
                AIWEBTOOLS.AI, AI WEB TOOLS, AI TOOLS, Fortune Teller GPT, Artificial Intelligence Tools, 
                AI Fortune Telling, AI Predictions, Future Reading AI, Mystical AI Oracle
              </p>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold text-white mb-4">AI Tools Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67d2038403c88191a80f3e31147babb1-fortune-teller-gpt" 
                  className="group flex items-center gap-1.5 text-gray-400 hover:text-mystical-teal transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Begin Fortune Telling with AI"
                >
                  <span className="group-hover:underline decoration-mystical-teal/30 underline-offset-4">Begin Your AI Reading</span>
                  <Star className="w-3.5 h-3.5 text-mystical-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="https://dreaminterpreter.lovable.app/?via=aiwebtools" 
                  className="group flex items-center gap-1.5 text-gray-400 hover:text-mystical-teal transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dream Interpreter AI Tool"
                >
                  <span className="group-hover:underline decoration-mystical-teal/30 underline-offset-4">Dream Interpreter AI Tool</span>
                  <Star className="w-3.5 h-3.5 text-mystical-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-400 hover:text-mystical-teal transition-colors"
                  aria-label="AI Fortune Telling FAQ"
                >
                  AI Fortune Telling FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-400 hover:text-mystical-teal transition-colors"
                  aria-label="AI Tools Disclaimer"
                >
                  AI Tools Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  className="text-gray-400 hover:text-mystical-teal transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="More AI Tools from AIWEBTOOLS.AI"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold text-white mb-4">Legal & Company</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  className="text-gray-400 hover:text-mystical-teal transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="AI Tools Privacy Policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  className="text-gray-400 hover:text-mystical-teal transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="AIWEBTOOLS.AI Terms of Service"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold text-white mb-4">Contact AIWEBTOOLS.AI</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-400 hover:text-mystical-teal transition-colors"
                  aria-label="Call AIWEBTOOLS.AI"
                >
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-mystical-teal transition-colors"
                  aria-label="Email AIWEBTOOLS.AI"
                >
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <Button 
                asChild
                variant="default" 
                className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-mystical-purple to-mystical-teal text-white text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <a
                  href="https://www.aiwebtools.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Explore more AI tools from AIWEBTOOLS.AI"
                >
                  Explore More AI Tools
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 <a href="https://www.aiwebtools.ai" className="hover:text-mystical-teal transition-colors font-bold" target="_blank" rel="noopener noreferrer"><strong>AIWEBTOOLS.AI</strong> - AI WEB TOOLS LLC</a> - Leading Provider of AI Tools and Artificial Intelligence Solutions
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://www.aiwebtools.ai"
              className="text-gray-400 hover:text-mystical-teal transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AIWEBTOOLS.AI Homepage"
            >
              <span className="sr-only">AIWEBTOOLS.AI - AI WEB TOOLS</span>
              <Star className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
