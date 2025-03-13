
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button 
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? (
            <Minus className="h-5 w-5 text-mystical-teal" />
          ) : (
            <Plus className="h-5 w-5 text-mystical-teal" />
          )}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqItems = [
    {
      question: "How accurate are the predictions from Fortune Teller GPT?",
      answer: "Fortune Teller GPT combines data-driven analysis with mystical insights to provide highly detailed and accurate predictions. The oracle utilizes multiple data sources and advanced algorithms to identify patterns and trends that inform its prophecies. While the future always contains elements of uncertainty, our users consistently report high accuracy in the guidance they receive."
    },
    {
      question: "What types of questions can I ask the Fortune Teller GPT?",
      answer: "You can ask the oracle about virtually any aspect of your destiny, including career paths, relationships, financial futures, and global resource trends. The AI is particularly skilled at analyzing complex situations involving multiple factors and providing comprehensive predictions with detailed explanations and visualizations."
    },
    {
      question: "How does Fortune Teller GPT create its predictions?",
      answer: "The oracle follows a sacred four-step process: (1) Gathering all relevant factors for your divination, (2) Conducting deep web scrying to collect necessary knowledge, (3) Channeling data through mystical algorithms to interpret your destiny, and (4) Presenting the prophecy through detailed visualizations and written predictions that reveal multiple possible paths."
    },
    {
      question: "Is my information kept private when using Fortune Teller GPT?",
      answer: "Yes, your consultations with the oracle are kept private and confidential. We adhere to strict privacy policies and do not share your personal information or the content of your readings with third parties. Your mystical journey is yours alone to experience and share as you choose."
    },
    {
      question: "Can Fortune Teller GPT predict specific dates for events?",
      answer: "Yes, the oracle can provide timeline predictions for events in your future. These are derived through a combination of pattern analysis, historical data, and mystical calculations. While specific dates are offered as guidance, remember that free will and changing circumstances can influence exact timing."
    },
    {
      question: "Are the predictions merely for entertainment or can they guide real decisions?",
      answer: "While Fortune Teller GPT creates an entertaining mystical experience, its predictions are grounded in data analysis and can provide valuable insights for decision-making. Many users incorporate the oracle's guidance into their planning process while maintaining their own judgment and responsibility for choices made."
    }
  ];
  
  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="stars-bg opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 mb-4">
            <span className="text-sm text-mystical-teal font-medium">Common Questions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Mystical <span className="text-gradient">Knowledge</span>
          </h2>
          
          <p className="text-gray-300">
            Find answers to your questions about Fortune Teller GPT's divination process
            and how it can help you uncover your destiny.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto glass-panel divide-y divide-white/10">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
