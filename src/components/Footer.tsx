
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
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mystical-purple to-mystical-teal flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gradient">Fortune Teller GPT</h3>
                <p className="text-xs text-gray-400">Presented by <a href="https://www.aiwebtools.ai" className="hover:text-mystical-teal transition-colors" target="_blank" rel="noopener noreferrer">AiWebTools.Ai</a></p>
              </div>
            </a>
            <p className="text-gray-400 text-sm mt-4">Discover your destiny through our AI-powered mystical oracle. Get predictions backed by data science and cosmic wisdom.</p>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67d2038403c88191a80f3e31147babb1-fortune-teller-gpt" 
                  className="group flex items-center gap-1.5 text-gray-400 hover:text-mystical-teal transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="group-hover:underline decoration-mystical-teal/30 underline-offset-4">Begin Your Reading</span>
                  <Star className="w-3.5 h-3.5 text-mystical-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="https://dreaminterpreter.lovable.app/?via=aiwebtools" 
                  className="group flex items-center gap-1.5 text-gray-400 hover:text-mystical-teal transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="group-hover:underline decoration-mystical-teal/30 underline-offset-4">You May Also Like: Dream Interpreter GPT</span>
                  <Star className="w-3.5 h-3.5 text-mystical-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-400 hover:text-mystical-teal transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-400 hover:text-mystical-teal transition-colors"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  className="text-gray-400 hover:text-mystical-teal transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  className="text-gray-400 hover:text-mystical-teal transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  className="text-gray-400 hover:text-mystical-teal transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-400 hover:text-mystical-teal transition-colors"
                >
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-mystical-teal transition-colors"
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
                >
                  More AI Tools
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 <a href="https://www.aiwebtools.ai" className="hover:text-mystical-teal transition-colors" target="_blank" rel="noopener noreferrer">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://www.aiwebtools.ai"
              className="text-gray-400 hover:text-mystical-teal transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">AI Web Tools</span>
              <Star className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
