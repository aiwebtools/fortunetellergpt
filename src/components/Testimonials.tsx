
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Entrepreneur",
    content: "The predictions I received were incredibly accurate and detailed. The oracle knew things about my business that I hadn't shared with anyone. Truly mystical!",
    stars: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "Samantha Lee",
    role: "Career Advisor",
    content: "I was skeptical at first, but the career guidance I received was spot-on. The prediction about my promotion came true just as the oracle foresaw. I'm a believer!",
    stars: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "Marcus Chen",
    role: "Investment Analyst",
    content: "The detailed market predictions helped me make informed investment decisions. The data-driven approach combined with mystical insights is powerful.",
    stars: 4,
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "Sophia Rodriguez",
    role: "Life Coach",
    content: "I recommend Fortune Teller GPT to all my clients. The guidance it provides is transformative and helps people see paths they hadn't considered before.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "James Wilson",
    role: "Tech Entrepreneur",
    content: "The technology predictions were accurate down to the timeline. I used these insights to pivot my startup and we've since seen tremendous growth.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, isAnimating]);
  
  // Reset interval when manually changing slides
  const handleManualChange = (fn: () => void) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    fn();
    
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
  };
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="stars-bg opacity-20"></div>
      
      {/* Animated gradient orb */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-mystical-teal/5 blur-3xl animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 mb-4">
            <span className="text-sm text-mystical-teal font-medium">Mystic Testimonials</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Destinies <span className="text-gradient">Transformed</span>
          </h2>
          
          <p className="text-gray-300">
            Discover how Fortune Teller GPT has guided seekers on their path to enlightenment
            and helped them manifest their desired futures.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-6 -left-6 text-mystical-purple opacity-30">
            <Quote size={80} />
          </div>
          
          <div className="glass-panel p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <div 
                className={`transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}
                key={currentIndex}
              >
                <p className="text-lg md:text-xl text-gray-200 mb-8 italic relative z-10">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-mystical-purple/30 mr-4">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        size={18}
                        className={i < testimonials[currentIndex].stars ? "text-mystical-teal fill-mystical-teal" : "text-gray-500"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={() => handleManualChange(prevSlide)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setCurrentIndex(i);
                    setTimeout(() => {
                      setIsAnimating(false);
                    }, 500);
                    
                    if (intervalRef.current) {
                      clearInterval(intervalRef.current);
                    }
                    
                    intervalRef.current = setInterval(() => {
                      nextSlide();
                    }, 6000);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "bg-mystical-teal w-4" : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={() => handleManualChange(nextSlide)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
