import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  const [gridPoints, setGridPoints] = useState([]);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    // Generate grid pattern
    const points = [];
    for (let x = 0; x < 20; x++) {
      for (let y = 0; y < 12; y++) {
        points.push({
          id: `${x}-${y}`,
          x: (x / 19) * 100,
          y: (y / 11) * 100,
          delay: Math.random() * 2,
        });
      }
    }
    setGridPoints(points);
  }, []);

  useEffect(() => {
    // Auto-cycle active sections
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#010914] overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        {gridPoints.map((point) => (
          <div
            key={point.id}
            className="absolute w-0.5 h-0.5 bg-cyan-400 rounded-full"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              animation: `twinkle ${2 + Math.random()}s ease-in-out ${point.delay}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-cyan-400/20 rounded-lg"
            style={{
              width: `${40 + i * 20}px`,
              height: `${40 + i * 20}px`,
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animation: `float ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20">
        {/* Status indicator */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-gray-400 font-mono">AVAILABLE FOR PROJECTS</span>
        </div>

        {/* Main heading with typewriter effect */}
        <div className="text-center mb-2">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            <div className="overflow-hidden">
              <span className="inline-block text-white animate-[slideUp_0.8s_ease-out_0.3s_both]">
              In a World of Noise, 
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="inline-block h-30 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent animate-[slideUp_0.8s_ease-out_0.6s_both]">
                We Design What Speaks.
              </span>
            </div>
          </h1>
        </div>

        {/* Dynamic tagline */}
        <div className="h-16 flex items-center mb-12">
          <p className="text-xl text-gray-300 font-light max-w-2xl text-center">
            {activeSection === 0 && (
              <span className="animate-[fadeIn_0.5s_ease-out]">
                Transforming visions into digital masterpieces that captivate and convert.
              </span>
            )}
            {activeSection === 1 && (
              <span className="animate-[fadeIn_0.5s_ease-out]">
                Where cutting-edge technology meets creative excellence.
              </span>
            )}
            {activeSection === 2 && (
              <span className="animate-[fadeIn_0.5s_ease-out]">
                Building the future of digital experiences, one pixel at a time.
              </span>
            )}
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
            <div className="flex items-center gap-3">
              <span>Start Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
          
          <button className="group px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </div>
          </button>
        </div>

        {/* Service highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          {[
            { title: 'Social Media', desc: 'Strategic campaigns that engage', icon: '📱' },
            { title: 'Web Development', desc: 'Custom solutions that scale', icon: '🌐' },
            { title: 'Brand Design', desc: 'Identities that inspire', icon: '✨' },
          ].map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Removed the conflicting ambient glow that was tracking mouse position */}

      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Hero;