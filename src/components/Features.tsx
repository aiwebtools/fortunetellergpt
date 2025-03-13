
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
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="stars-bg opacity-50"></div>
      
      {/* Animated gradient orb */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-mystical-purple/10 blur-3xl animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 mb-4">
            <span className="text-sm text-mystical-teal font-medium">Mystical Capabilities</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Unlock the Power of <span className="text-gradient">Fortune Teller GPT</span>
          </h2>
          
          <p className="text-gray-300">
            Our AI oracle combines advanced data analysis with mystical insights to provide
            detailed and accurate predictions about your future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={Eye}
            title="Mystical Data Analysis"
            description="Meticulously analyzes real-world data from diverse sources to compile detailed prophecy predictions on any topic."
          />
          
          <FeatureCard 
            icon={Clock}
            title="Future Insights"
            description="Searches current world patterns and analyzes historical trends to provide accurate foresight based on patterns unseen by most."
          />
          
          <FeatureCard 
            icon={Database}
            title="Resource Divination"
            description="Provides in-depth readings of global resources, including water, oil, minerals, or any fortune you wish to unveil."
          />
          
          <FeatureCard 
            icon={Search}
            title="Deep Web Scrying"
            description="Conducts extensive multi-source searches to uncover key patterns, unseen forces, and interwoven destinies in your future."
          />
          
          <FeatureCard 
            icon={Stars}
            title="Visualization Charts"
            description="Presents foresight through detailed celestial graphs and prophetic charts with visual manifestations for each divination."
          />
          
          <FeatureCard 
            icon={Wand2}
            title="Sacred Calculations"
            description="Utilizes divine calculations to manifest accurate foretellings and dates of future occurrences in your destiny."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
