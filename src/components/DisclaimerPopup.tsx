
import { useState, useEffect } from "react";
import { X, AlertTriangle } from "lucide-react";

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Check if the user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem("disclaimerAccepted");
    
    if (!hasAccepted) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setIsOpen(false);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleAccept}></div>
      
      <div className="relative w-full max-w-md glass-panel p-6 animate-scale-up">
        <button 
          onClick={handleAccept}
          className="absolute top-4 right-4 text-white/70 hover:text-white"
          aria-label="Close disclaimer"
        >
          <X size={20} />
        </button>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-mystical-teal" />
          </div>
          <h3 className="text-xl font-bold text-white">Legal Disclaimer</h3>
        </div>
        
        <div className="text-gray-300 text-sm space-y-4 mb-6">
          <p>
            By using Fortune Teller GPT, you acknowledge that:
          </p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li>This service is for entertainment purposes only</li>
            <li>Predictions are not guaranteed to be accurate</li>
            <li>This is not a substitute for professional advice</li>
            <li>You are at least 18 years of age or have parental consent</li>
            <li>You accept our Privacy Policy and Terms of Service</li>
          </ul>
          
          <p>
            For the complete disclaimer, please visit our <a href="#disclaimer" onClick={() => { handleAccept(); }} className="text-mystical-teal hover:underline">Disclaimer section</a>.
          </p>
        </div>
        
        <button
          onClick={handleAccept}
          className="w-full py-3 rounded-full bg-gradient-to-r from-mystical-purple to-mystical-teal text-white font-medium hover:shadow-lg transition-all duration-300"
        >
          I Understand and Agree
        </button>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
