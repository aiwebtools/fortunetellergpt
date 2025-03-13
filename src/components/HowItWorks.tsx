
import { useState } from 'react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Gathering the Threads of Fate",
      description: "The oracle determines the knowledge required for your divination, listing all cosmic and earthly factors that must be accounted for to ensure complete accuracy.",
      image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Scrying the Web & Unveiling Truths",
      description: "A deep web scrying is conducted, scanning multiple sacred sources for all required foresight and knowledge to uncover hidden patterns in your destiny.",
      image: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Channeling Data & Interpreting Destiny",
      description: "The oracle utilizes all gathered wisdom to determine your foretold path, invoking calculations to manifest accurate foretellings of future occurrences.",
      image: "https://images.unsplash.com/photo-1518544801976-3e159b142a05?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "The Grand Prophecy Revealed",
      description: "Your foresight is presented through detailed celestial graphs and prophetic charts, with a sacred prophecy of your revealed fate and potential paths.",
      image: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=500&auto=format&fit=crop"
    }
  ];
  
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-mystical-dark to-transparent z-10"></div>
      <div className="stars-bg opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 mb-4">
            <span className="text-sm text-mystical-teal font-medium">The Mystical Process</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            How <span className="text-gradient">Fortune Teller GPT</span> Works
          </h2>
          
          <p className="text-gray-300">
            Experience our sacred divination process that combines ancient mystical wisdom 
            with modern data science to reveal your destiny.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex mb-8">
              {steps.map((step, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex-1 py-3 text-center text-sm sm:text-base border-b-2 transition-all ${
                    activeStep === index 
                      ? "border-mystical-teal text-mystical-teal" 
                      : "border-white/20 text-white/50 hover:text-white/80"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            <div className="glass-panel p-8 animate-fade-in" key={activeStep}>
              <h3 className="text-2xl font-bold mb-4 text-white">{steps[activeStep].title}</h3>
              <p className="text-gray-300 mb-6">{steps[activeStep].description}</p>
              
              <div className="flex justify-between">
                <button 
                  onClick={() => setActiveStep(prev => (prev > 0 ? prev - 1 : prev))}
                  className={`px-4 py-2 rounded-full border border-white/20 text-white/70 hover:bg-white/10 transition-all ${
                    activeStep === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={activeStep === 0}
                >
                  Previous
                </button>
                
                <button 
                  onClick={() => setActiveStep(prev => (prev < steps.length - 1 ? prev + 1 : prev))}
                  className={`px-4 py-2 rounded-full bg-gradient-to-r from-mystical-purple/80 to-mystical-teal/80 text-white hover:from-mystical-purple hover:to-mystical-teal transition-all ${
                    activeStep === steps.length - 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={activeStep === steps.length - 1}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md h-80 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-mystical-dark via-transparent to-transparent z-10"></div>
              <img 
                src={steps[activeStep].image} 
                alt={steps[activeStep].title}
                className="w-full h-full object-cover object-center transition-all duration-700 animate-scale-up"
                key={activeStep}
              />
              <div className="absolute inset-0 border border-white/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
