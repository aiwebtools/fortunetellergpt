import { useEffect, useRef } from "react";

const CrystalBall = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const containerSize = Math.min(300, window.innerWidth * 0.8);
      canvas.width = containerSize;
      canvas.height = containerSize;
    };
    
    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);
    
    // Animation variables
    let animationFrameId: number;
    let angle = 0;
    
    // Crystal ball properties
    const center = { x: canvas.width / 2, y: canvas.height / 2 };
    const radius = canvas.width * 0.4;
    
    // Particle system
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      
      constructor() {
        this.x = center.x + (Math.random() - 0.5) * radius * 1.5;
        this.y = center.y + (Math.random() - 0.5) * radius * 1.5;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        
        // Mystical colors
        const colors = ["#6e35d2", "#25d0c0", "#ffffff", "#b28eff"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.7 + 0.3;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Keep particles inside the crystal ball
        const distanceFromCenter = Math.sqrt(
          Math.pow(this.x - center.x, 2) + Math.pow(this.y - center.y, 2)
        );
        
        if (distanceFromCenter > radius * 0.8) {
          // Bounce back
          this.speedX *= -0.5;
          this.speedY *= -0.5;
          
          // Move back inside
          const angle = Math.atan2(this.y - center.y, this.x - center.x);
          this.x = center.x + Math.cos(angle) * radius * 0.8;
          this.y = center.y + Math.sin(angle) * radius * 0.8;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }
    
    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }
    
    // Animation
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw outer glow
      const gradient = ctx.createRadialGradient(
        center.x, center.y, radius * 0.8,
        center.x, center.y, radius * 1.5
      );
      gradient.addColorStop(0, "rgba(110, 53, 210, 0.5)");
      gradient.addColorStop(0.5, "rgba(37, 208, 192, 0.2)");
      gradient.addColorStop(1, "rgba(15, 7, 33, 0)");
      
      ctx.beginPath();
      ctx.arc(center.x, center.y, radius * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Draw crystal ball
      ctx.beginPath();
      ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
      
      // Crystal effect with gradient
      const ballGradient = ctx.createRadialGradient(
        center.x - radius * 0.3, center.y - radius * 0.3, 0,
        center.x, center.y, radius
      );
      ballGradient.addColorStop(0, "rgba(255, 255, 255, 0.2)");
      ballGradient.addColorStop(0.2, "rgba(178, 142, 255, 0.1)");
      ballGradient.addColorStop(0.5, "rgba(110, 53, 210, 0.05)");
      ballGradient.addColorStop(1, "rgba(15, 7, 33, 0.8)");
      
      ctx.fillStyle = ballGradient;
      ctx.fill();
      
      // Draw crystal ball border
      ctx.beginPath();
      ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw reflection
      ctx.beginPath();
      ctx.ellipse(
        center.x - radius * 0.3, 
        center.y - radius * 0.3, 
        radius * 0.2, 
        radius * 0.1, 
        Math.PI / 4, 
        0, 
        Math.PI * 2
      );
      ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
      ctx.fill();
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw mystical symbols that appear and fade
      angle += 0.01;
      
      const symbolsCount = 3;
      for (let i = 0; i < symbolsCount; i++) {
        const symbolAngle = angle + (Math.PI * 2 / symbolsCount) * i;
        const x = center.x + Math.cos(symbolAngle) * (radius * 0.6);
        const y = center.y + Math.sin(symbolAngle) * (radius * 0.6);
        
        const pulseFactor = Math.sin(angle * 3 + i) * 0.5 + 0.5;
        
        ctx.font = `${16 + pulseFactor * 4}px Arial`;
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + pulseFactor * 0.4})`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        
        // Mystical symbols
        const symbols = ["✧", "⚝", "⚜", "♱", "⚕", "☽", "☄", "⚹"];
        ctx.fillText(symbols[i % symbols.length], x, y);
      }
      
      // Draw base/stand
      ctx.beginPath();
      ctx.moveTo(center.x - radius * 0.7, center.y + radius);
      ctx.quadraticCurveTo(
        center.x, center.y + radius * 1.2,
        center.x + radius * 0.7, center.y + radius
      );
      
      // Base gradient
      const baseGradient = ctx.createLinearGradient(
        center.x - radius * 0.7, center.y + radius,
        center.x + radius * 0.7, center.y + radius
      );
      baseGradient.addColorStop(0, "#6e35d2");
      baseGradient.addColorStop(0.5, "#4a2390");
      baseGradient.addColorStop(1, "#6e35d2");
      
      ctx.fillStyle = baseGradient;
      ctx.fill();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="relative flex items-center justify-center w-full h-full animate-float">
      <canvas 
        ref={canvasRef} 
        className="max-w-full"
        style={{ maxHeight: "300px", maxWidth: "300px" }}
      />
    </div>
  );
};

export default CrystalBall;
