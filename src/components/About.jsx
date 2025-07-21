import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  Target, 
  Users, 
  Award, 
  Rocket, 
  Brain, 
  Code, 
  Palette, 
  TrendingUp, 
  Globe,
  ArrowRight,
  Sparkles,
  Play,
  ChevronRight,
  Star,
  Coffee,
  Clock,
  Heart,
  Shield,
  Lightbulb,
  Flame,
  Music,
  Camera
} from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [activeFounder, setActiveFounder] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  // Track scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: 'story', label: 'Our Story', icon: Sparkles },
    { id: 'mission', label: 'Mission', icon: Target },
    { id: 'values', label: 'Values', icon: Heart },
    { id: 'journey', label: 'The Journey', icon: Rocket }
  ];

  const founders = [
    {
      id: 1,
      name: "Hemal Naik",
      role: "Co-Founder & Creative Director",
      expertise: ["Brand Strategy", "Marketing","Business Development" , "Creative Vision", "Client Relations"],
      bio: "Passionate about creating digital experiences that not only look stunning but drive real business growth. Believes in the power of design to transform brands.",
      personality: "The visionary who sees possibilities where others see challenges.",
      color: "from-cyan-400 to-blue-500",
      icon: Palette
    },
    {
      id: 2,
      name: "Saif Shaikh",
      role: "Co-Founder & Technical Director",
      expertise: ["Web Development", "System Architecture", "Performance Optimization", "Innovation"],
      bio: "Tech enthusiast who transforms complex ideas into seamless digital solutions. Obsessed with clean code and cutting-edge technologies.",
      personality: "The architect who builds dreams into reality.",
      color: "from-purple-400 to-pink-500",
      icon: Code
    }
  ];

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We embrace new technologies and creative approaches to solve unique challenges and stay ahead of trends.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Quality Commitment",
      description: "Every pixel, every line of code, every strategy is crafted with meticulous attention to detail and excellence.",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Heart,
      title: "Genuine Partnership",
      description: "We don't just work for you, we work with you. Your success becomes our mission, your challenges become ours.",
      color: "from-pink-400 to-red-500"
    },
    {
      icon: Flame,
      title: "Passionate Craftsmanship",
      description: "Every project is a canvas for our creativity. We pour our passion into creating something truly exceptional.",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const uniqueApproaches = [
    {
      title: "Boutique Experience",
      description: "Personal attention and direct communication with founders on every project",
      icon: Users,
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Agile & Adaptive",
      description: "Quick pivots, fast iterations, and responsive to your evolving needs",
      icon: Zap,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Future-Ready Solutions",
      description: "Building with tomorrow's technologies and scalability in mind",
      icon: Rocket,
      color: "from-green-400 to-emerald-500"
    }
  ];

  const TabContent = ({ activeTab }) => {
    switch(activeTab) {
      case 'story':
        return (
          <div className="space-y-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed">
                Blue Design was born from a simple realization: the digital world needed more than just another agency. 
                It needed partners who truly understood that behind every website, every brand, every campaign, 
                there's a dream waiting to be realized.
              </p>
              <p className="text-gray-400 leading-relaxed">
                What started as late-night conversations about the gap between beautiful design and powerful functionality 
                has evolved into Blue Design - where creativity meets technology, where innovation meets execution, 
                and where your vision becomes our shared mission.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {uniqueApproaches.map((approach, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${approach.color} rounded-xl flex items-center justify-center group-hover:rotate-6 transition-all duration-300`}>
                    <approach.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{approach.title}</h4>
                  <p className="text-sm text-gray-400">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'mission':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                To be the creative catalyst that transforms ambitious ideas into extraordinary digital experiences, 
                helping brands not just exist online, but truly thrive and connect with their audiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white flex items-center gap-3">
                  <Globe className="w-6 h-6 text-cyan-400" />
                  What We Believe
                </h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    Every brand has a unique story worth telling beautifully
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    Technology should amplify creativity, not constrain it
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    Small teams can create outsized impact with the right passion
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                  How We're Different
                </h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    Direct access to founders, not account managers
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    Nimble execution without corporate bureaucracy
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    Obsessive attention to detail and user experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 'values':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 rounded-xl hover:border-cyan-500/30 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className={`w-14 h-14 mb-4 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-all duration-300`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-white mb-3 text-lg">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        );
      
      case 'journey':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">The Blue Design Journey</h3>
              <p className="text-gray-400">From idea to reality - our story continues to unfold</p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-30"></div>
              
              <div className="space-y-12">
                {[
                  { 
                    phase: "The Spark", 
                    time: "2023",
                    desc: "Two minds, one vision - combining creative passion with technical expertise to fill a gap in the digital landscape",
                    icon: Lightbulb,
                    color: "from-yellow-400 to-orange-500",
                    side: "left"
                  },
                  { 
                    phase: "Foundation", 
                    time: "Early Days",
                    desc: "Building our core philosophy: boutique quality, innovative solutions, and genuine partnerships with every client",
                    icon: Rocket,
                    color: "from-cyan-400 to-blue-500",
                    side: "right"
                  },
                  { 
                    phase: "Growth", 
                    time: "Present",
                    desc: "Refining our craft, expanding our capabilities, and creating digital experiences that make a real impact",
                    icon: TrendingUp,
                    color: "from-purple-400 to-pink-500",
                    side: "left"
                  },
                  { 
                    phase: "Future", 
                    time: "What's Next",
                    desc: "Pushing boundaries with emerging technologies while maintaining our commitment to exceptional, personal service",
                    icon: Star,
                    color: "from-green-400 to-emerald-500",
                    side: "right"
                  }
                ].map((milestone, index) => (
                  <div key={index} className={`relative flex ${milestone.side === 'right' ? 'flex-row-reverse' : 'flex-row'} items-center gap-8`}>
                    <div className="flex-1">
                      <div className={`p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-cyan-500/30 transition-all duration-300 ${milestone.side === 'right' ? 'text-right' : 'text-left'}`}>
                        <div className="text-sm text-cyan-400 mb-2">{milestone.time}</div>
                        <h4 className="font-bold text-white text-lg mb-3">{milestone.phase}</h4>
                        <p className="text-gray-400">{milestone.desc}</p>
                      </div>
                    </div>
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-r ${milestone.color} rounded-xl flex items-center justify-center hover:rotate-12 transition-transform duration-300`}>
                        <milestone.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div ref={sectionRef} className="px-6 bg-[#020914] relative overflow-hidden">
      {/* Animated Background with Fixed Stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          style={{
            transform: `translateY(${-scrollY * 0.1}px)`
          }}
        />
        
        {/* Fixed floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/20 rounded-full animate-pulse"
              style={{
                left: `${20 + (i * 7) % 60}%`,
                top: `${10 + (i * 11) % 80}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + (i % 3)}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            About Blue Design
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Where <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Dreams</span><br />
            Meet <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Digital Reality</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A boutique digital design studio founded on the belief that exceptional creative work comes from 
            passionate collaboration, not corporate processes.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 transform scale-105'
                  : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50 border border-slate-700/50 hover:border-cyan-500/30'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div 
          className={`transition-all duration-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12">
            <TabContent activeTab={activeTab} />
          </div>
        </div>

        {/* Founders Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Meet the <span className="text-cyan-400">Founders</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Two passionate creators who believe that the best digital experiences come from genuine collaboration and shared vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder) => (
              <div
                key={founder.id}
                className="group relative cursor-pointer"
                onMouseEnter={() => setActiveFounder(founder.id)}
                onMouseLeave={() => setActiveFounder(null)}
              >
                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="text-center mb-6">
                    <div className={`w-24 h-24 mx-auto mb-4 bg-gradient-to-r ${founder.color} rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-500`}>
                      <founder.icon className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-xl">{founder.name}</h4>
                    <p className="text-cyan-400">{founder.role}</p>
                    <p className="text-gray-500 text-sm italic mt-2">{founder.personality}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-400 text-center leading-relaxed">{founder.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {founder.expertise.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {activeFounder === founder.id && (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl pointer-events-none" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/30 border border-slate-700/50 rounded-3xl p-8 md:p-12 hover:border-cyan-500/20 transition-all duration-300">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Create Something <span className="text-cyan-400">Extraordinary</span>?
              </h3>
              <p className="text-gray-400 mb-8 text-lg">
                Let's have a conversation about your vision. No sales pitches, just genuine discussion about how we can bring your ideas to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group hover:transform hover:scale-105">
                  Let's Talk About Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 hover:transform hover:scale-105">
                  <Coffee className="w-5 h-5" />
                  Grab a Virtual Coffee
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;