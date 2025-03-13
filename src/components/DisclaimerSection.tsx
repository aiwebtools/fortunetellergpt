
import { AlertTriangle } from "lucide-react";

const DisclaimerSection = () => {
  return (
    <section id="disclaimer" className="py-20 relative overflow-hidden">
      <div className="stars-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 mb-4">
            <AlertTriangle size={14} className="text-mystical-teal" />
            <span className="text-sm text-mystical-teal font-medium">Important Information</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Legal <span className="text-gradient">Disclaimer</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto glass-panel p-8 text-gray-300 text-sm space-y-6">
          <p>
            <strong className="text-white">Entertainment Purposes:</strong> Fortune Teller GPT is designed primarily for entertainment purposes. The predictions, insights, and guidance provided should not be considered as professional advice, and users should exercise their own judgment when making important life decisions.
          </p>
          
          <p>
            <strong className="text-white">No Guarantees:</strong> While Fortune Teller GPT utilizes data-driven approaches to generate predictions, we make no guarantees regarding the accuracy, completeness, or reliability of any predictions or information provided. Future events are subject to countless variables and cannot be predicted with absolute certainty.
          </p>
          
          <p>
            <strong className="text-white">Not a Substitute for Professional Advice:</strong> Fortune Teller GPT is not a substitute for professional advice in areas such as finance, health, legal matters, or mental health. Users facing important decisions in these areas should consult with qualified professionals.
          </p>
          
          <p>
            <strong className="text-white">User Responsibility:</strong> Users assume full responsibility for their interpretation and application of the information provided by Fortune Teller GPT. AI Web Tools LLC and its affiliates are not liable for any actions taken or decisions made based on the information provided through this service.
          </p>
          
          <p>
            <strong className="text-white">Data Usage:</strong> When using Fortune Teller GPT, certain user data may be processed according to our Privacy Policy. Users consent to this data processing when using our service. For more information, please refer to our <a href="https://openai.com/policies/privacy-policy/" className="text-mystical-teal hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
          </p>
          
          <p>
            <strong className="text-white">Service Availability:</strong> AI Web Tools LLC reserves the right to modify, suspend, or discontinue Fortune Teller GPT at any time without notice. We are not liable for any loss or damage that may arise from such modifications or discontinuation.
          </p>
          
          <p>
            <strong className="text-white">Age Restriction:</strong> Fortune Teller GPT is intended for users who are at least 18 years of age. By using this service, you confirm that you are at least 18 years old or have obtained parental consent.
          </p>
          
          <p>
            <strong className="text-white">Governing Law:</strong> These terms and your use of Fortune Teller GPT are governed by and construed in accordance with the laws of the jurisdiction where AI Web Tools LLC operates, without regard to its conflict of law provisions.
          </p>
          
          <p>
            By using Fortune Teller GPT, you acknowledge that you have read, understood, and agree to be bound by this disclaimer. If you do not agree with any part of this disclaimer, please refrain from using our service.
          </p>
          
          <p className="text-xs text-gray-500">
            Last updated: June 2025. This disclaimer is subject to change without notice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
