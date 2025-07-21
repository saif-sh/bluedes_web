import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowRight,
  Send,
  ExternalLink,
  Sparkles,
  Globe,
  Rocket,
  Code2,
  Palette,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [particles, setParticles] = useState([]);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const handleNewsletterSubmit = () => {
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    initial: { scale: 1, opacity: 0.7 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.footer 
      ref={ref}
      className="relative bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 text-white overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-cyan-400/30 rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <motion.div 
                className="relative mr-4"
                variants={glowVariants}
                initial="initial"
                animate="animate"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl blur-md opacity-50 -z-10" />
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Blue Design
                </h3>
                <p className="text-slate-400 text-sm">Digital Marketing</p>
              </div>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              A futuristic marketing and development agency helping brands go bold, digital, and unforgettable. 
              We craft tomorrow's digital experiences today.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Award Winning</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>500+ Clients</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span>95% Success Rate</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Services
            </h4>
            <ul className="space-y-4">
              {[
                { icon: Code2, name: "Web Development", desc: "Custom solutions" },
                { icon: Palette, name: "UI/UX Design", desc: "Beautiful interfaces" },
                { icon: TrendingUp, name: "Digital Marketing", desc: "Growth focused" },
                { icon: Globe, name: "SEO Optimization", desc: "Rank higher" },
              ].map((service, index) => (
                <motion.li 
                  key={service.name}
                  className="group cursor-pointer"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300">
                    <service.icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-white font-medium">{service.name}</div>
                      <div className="text-slate-400 text-sm">{service.desc}</div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))",
                    "linear-gradient(45deg, rgba(6, 182, 212, 0.05), rgba(59, 130, 246, 0.05))",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-cyan-400" />
                  Stay Updated
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Get the latest trends and insights delivered to your inbox.
                </p>
                
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                      required
                    />
                    <Mail className="absolute right-3 top-3.5 w-5 h-5 text-slate-400" />
                  </div>
                  
                  <motion.button
                    onClick={handleNewsletterSubmit}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubscribed}
                  >
                    {isSubscribed ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Subscribe
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2024 Blue Design. All rights reserved. Crafted with ❤️ for the future.
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service
              </a>
              <motion.button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;