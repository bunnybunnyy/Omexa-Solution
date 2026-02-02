import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Eye, ArrowUpRight, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [counts, setCounts] = useState<string[]>(["0", "0", "0"]);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scrollRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  const services = [
    'Shopify',
    'UI/UX Design',
    'Website Design',
    'App Design',
    'Wordpress',
    'Print on Demand',
    'Figma',
    'Amazon',
    'Product Design',
    'UI/UX Design',
    'Website Design',
    'App Design',
    'E-commerce'
  ];

  // Smoother mouse movement tracking with requestAnimationFrame
  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const updateGlowPosition = () => {
      // Smooth interpolation using lerp function
      const lerp = (start: number, end: number, factor: number) => {
        return start * (1 - factor) + end * factor;
      };
      
      currentX = lerp(currentX, targetX, 0.08);
      currentY = lerp(currentY, targetY, 0.08);
      
      setMousePosition({
        x: currentX,
        y: currentY
      });
      
      requestAnimationFrame(updateGlowPosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(updateGlowPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Infinite scroll effect for services with pause on hover
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    let animationId: number;

    const scroll = () => {
      // Only scroll if not hovered
      if (!isHovered) {
        scrollPosition += scrollSpeed;
        
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  // Counter animation effect
  useEffect(() => {
    const targetValues = [150, 50, 4];
    const duration = 2000;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const newCounts = targetValues.map((target) => {
        const currentValue = Math.floor(target * easeOutQuart);
        
        if (target === 150 && currentValue === 150) return "150+";
        if (target === 50 && currentValue === 50) return "50+";
        return currentValue.toString();
      });
      
      setCounts(newCounts);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    // Start animation after page loads
    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Smoother Cursor Glow Effect - Light Theme Version */}
      <div 
        ref={glowRef}
        className="fixed pointer-events-none z-50 mix-blend-multiply transition-transform duration-150 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '180px',
          height: '180px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.03) 40%, transparent 75%)',
          borderRadius: '50%',
          filter: 'blur(25px)',
          opacity: 0.5,
          willChange: 'transform',
        }}
      />
      
      {/* Inner Light Blue Glow */}
      <div 
        className="fixed pointer-events-none z-50 mix-blend-multiply transition-transform duration-100 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '80px',
          height: '80px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.05) 60%, transparent 90%)',
          borderRadius: '50%',
          filter: 'blur(15px)',
          opacity: 0.6,
          willChange: 'transform',
        }}
      />
      
      {/* Small Center Spot */}
      <div 
        className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '80px',
          height: '80px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 20%, rgba(59, 130, 246, 0.07) 90%, transparent 80%)',
          borderRadius: '90%',
          filter: 'blur(10px)',
          opacity: 1.5,
        }}
      />

      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-10">
        {/* Light Theme Background Effects */}
        <div className="absolute inset-0 bg-white" />
        
        {/* Subtle gradient circles for light theme */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        
        {/* Additional Background Effects */}
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-blue-100/30 to-cyan-100/20 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] bg-gradient-to-r from-blue-200/20 to-purple-100/10 rounded-full blur-[90px] animate-float-slow" style={{ animationDelay: "1s" }} />
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-blue-300/30 rounded-full animate-spin-slow" />
          <div className="absolute bottom-20 right-10 w-40 h-40 border border-blue-400/20 rounded-full animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "20s" }} />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-blue-200/40 rounded-lg animate-ping-slow" />
        </div>
        
        {/* Subtle grid lines */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(90deg,_#2563eb_1px,_transparent_1px),_linear-gradient(180deg,_#2563eb_1px,_transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/10 animate-float-particles"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 15}s`
              }}
            />
          ))}
        </div>
        
        {/* Light beam effects */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-beam" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-300/15 to-transparent animate-beam" style={{ animationDelay: "2s" }} />

        {/* Subtle Grid Pattern - Light Theme Version */}
        <div className="absolute inset-0 opacity-[0.03] overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gray-400 animate-[float_20s_linear_infinite]"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 15 + 10}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6 animate-slide-up tracking-tight mt-20">
              We Build{" "}
              <span className="text-gradient font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600">
                Digital
              </span>
              <br />
              Experiences
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-10 animate-slide-up leading-relaxed font-light" style={{ animationDelay: "0.2s" }}>
              A forward-thinking digital agency specializing in AI-driven brand strategy, 
              web development, and creative solutions that deliver measurable results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="group relative px-6 py-6 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white overflow-hidden border-0 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300"
              >
                <span className="relative flex items-center gap-2 text-sm font-medium">
                  <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  Work With Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={scrollToWork}
                className="group px-6 py-6 rounded-xl border border-gray-300 bg-white/80 backdrop-blur-sm hover:border-blue-400 hover:bg-white transition-all duration-300 shadow-sm"
              >
                <span className="flex items-center gap-2 text-sm font-medium">
                  <Eye className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  View Our Work
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 mt-16 pt-8 border-t border-gray-200 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              {[
                { label: "Projects" },
                { label: "Clients" },
                { label: "Years" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-1">
                    {counts[index]}
                  </div>
                  <div className="text-xs text-gray-500 font-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Scrolling Banner - Moved down */}
        <div 
          className="w-full bg-transparent backdrop-blur-3xl py-8 overflow-hidden relative z-10 mt-20 border-t border-gray-200"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden whitespace-nowrap"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-8 flex-shrink-0">
                <span className="text-gray-700 text-xl font-medium tracking-wide">
                  {service}
                </span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none"
                  className="flex-shrink-0"
                >
                  <rect 
                    x="8" 
                    y="8" 
                    width="11.31" 
                    height="11.31" 
                    transform="rotate(45 8 8)" 
                    fill="#3b82f6"
                    className="opacity-60"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(5deg); }
          50% { transform: translateY(0) translateX(20px) rotate(0deg); }
          75% { transform: translateY(20px) translateX(10px) rotate(-5deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes float-particles {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 1; }
          25% { transform: translateY(-40px) translateX(30px) scale(1.2); opacity: 1; }
          50% { transform: translateY(-80px) translateX(60px) scale(1); opacity:1; }
          75% { transform: translateY(-40px) translateX(90px) scale(0.8); opacity: 1; }
        }
        
        @keyframes beam {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-float-slow {
          animation: float-slow 50s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 50s linear infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 15s ease-in-out infinite;
        }
        
        .animate-float-particles {
          animation: float-particles linear infinite;
        }
        
        .animate-beam {
          animation: beam 50s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Hero;