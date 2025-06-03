
import { Eye, Database, Clock, Stars, Wand2, Search } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
}) => (
  <div className="glass-panel p-6 transition-all duration-300 hover:shadow-lg hover:shadow-mystical-purple/5 group">
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mystical-purple/20 to-mystical-teal/20 flex items-center justify-center mb-4 group-hover:from-mystical-purple/30 group-hover:to-mystical-teal/30 transition-all duration-300">
      <Icon className="w-6 h-6 text-mystical-teal" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gradient transition-all duration-300">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-12 relative overflow-hidden">
      <div className="stars-bg opacity-50"></div>
      
      {/* Animated gradient orb */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-mystical-purple/10 blur-3xl animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 mb-4">
            <span className="text-sm text-mystical-teal font-medium">AIWEBTOOLS.AI - Advanced AI Tools Capabilities</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Why Choose <span className="text-gradient">AIWEBTOOLS.AI Fortune Teller GPT</span>
          </h2>
          
          <p className="text-gray-300 mb-4">
            Experience the most sophisticated AI fortune telling tool available. Our artificial intelligence 
            combines advanced data analysis with mystical insights to provide detailed and accurate predictions.
          </p>
          
          <p className="text-sm text-gray-400">
            <strong className="text-mystical-teal">AIWEBTOOLS.AI</strong> leads the industry in AI tools innovation, 
            bringing you cutting-edge artificial intelligence solutions for fortune telling and future predictions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={Eye}
            title="AI-Powered Data Analysis"
            description="Our artificial intelligence meticulously analyzes real-world data from diverse sources to compile detailed prophecy predictions on any topic using advanced AI algorithms."
          />
          
          <FeatureCard 
            icon={Clock}
            title="Future Prediction AI Tool"
            description="Advanced AI searches current world patterns and analyzes historical trends to provide accurate foresight based on patterns unseen by traditional fortune telling methods."
          />
          
          <FeatureCard 
            icon={Database}
            title="AI Resource Intelligence"
            description="Provides in-depth AI-powered readings of global resources, including water, oil, minerals, or any fortune you wish to unveil through artificial intelligence."
          />
          
          <FeatureCard 
            icon={Search}
            title="Deep AI Web Analysis"
            description="Conducts extensive multi-source AI searches to uncover key patterns, unseen forces, and interwoven destinies using the most advanced AI tools available."
          />
          
          <FeatureCard 
            icon={Stars}
            title="AI Visualization Technology"
            description="Presents AI-generated foresight through detailed celestial graphs and prophetic charts with visual manifestations powered by artificial intelligence algorithms."
          />
          
          <FeatureCard 
            icon={Wand2}
            title="AI Sacred Calculations"
            description="Utilizes divine AI calculations to manifest accurate foretellings and dates of future occurrences, combining mystical wisdom with artificial intelligence precision."
          />
        </div>
        
        <div className="text-center mt-12 p-6 glass-panel">
          <h3 className="text-xl font-bold text-white mb-3">
            Leading AI Tools Provider - AIWEBTOOLS.AI
          </h3>
          <p className="text-gray-300 text-sm">
            Discover why millions trust <strong className="text-mystical-teal">AIWEBTOOLS.AI</strong> for their AI tools needs. 
            Our Fortune Teller GPT represents the pinnacle of artificial intelligence fortune telling technology, 
            combining data science with mystical insights to deliver unparalleled accuracy in predictions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
