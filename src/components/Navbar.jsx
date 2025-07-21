import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, Briefcase, Star, Phone, Menu, X, Zap, Heart } from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, href: "#hero", section: "hero" },
  { name: "About", icon: Info, href: "#about", section: "about" },
  { name: "Our Work", icon: Briefcase, href: "#displays", section: "displays" },
  { name: "Reviews", icon: Star, href: "#reviews", section: "reviews" },
  { name: "Contact", icon: Phone, href: "#contact", section: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + 100;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Check if we're at the bottom of the page
    if (scrollPosition + windowHeight >= documentHeight - 50) {
      setActiveSection("contact");
      return;
    }
    
    // Find the current section based on scroll position
    const sections = navItems.map(item => ({
      id: item.section,
      element: document.getElementById(item.section)
    })).filter(section => section.element);
    
    let currentSection = "hero";
    let maxVisibleArea = 0;
    
    sections.forEach(({ id, element }) => {
      const rect = element.getBoundingClientRect();
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      
      if (visibleHeight > maxVisibleArea && visibleHeight > 50) {
        maxVisibleArea = visibleHeight;
        currentSection = id;
      }
    });
    
    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    let scrollTimer;
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      if (!isScrolling) {
        setIsScrolling(true);
      }
      
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
        updateActiveSection();
      }, 50);
      
      // Also update immediately for smooth experience
      updateActiveSection();
    };

    // Initial check
    updateActiveSection();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, [updateActiveSection, isScrolling]);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Immediately set active section for instant feedback
      setActiveSection(sectionId);
      
      // Close mobile menu
      setMobileMenuOpen(false);
      
      // Calculate offset to account for navbar height
      const offsetTop = element.offsetTop - 80;
      
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${
          scrolled
            ? "bg-slate-900/90 backdrop-blur-xl border-b border-blue-500/30 shadow-lg shadow-blue-500/10"
            : "bg-transparent"
        }`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="relative flex items-center space-x-3 cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("hero")}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-xl blur-md"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 border border-blue-400/30 p-3 rounded-xl backdrop-blur-sm shadow-lg shadow-blue-500/25">
                <motion.div
                  variants={pulseVariants}
                  animate="pulse"
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Blue Design
              </h1>
              <p className="text-xs text-slate-400 -mt-1">Digital Marketing</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center space-x-2 bg-slate-800/50 border border-blue-400/20 rounded-full px-4 py-2 backdrop-blur-xl shadow-lg shadow-blue-500/10"
            variants={itemVariants}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.section;
              
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  className="relative px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/40 rounded-full shadow-lg shadow-blue-500/20"
                        layoutId="activeBackground"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>
                  
                  <Icon
                    className={`w-4 h-4 transition-all duration-300 ${
                      isActive
                        ? "text-blue-400"
                        : "text-slate-400 group-hover:text-blue-300"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-blue-300"
                        : "text-slate-300 group-hover:text-white"
                    }`}
                  >
                    {item.name}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="hidden lg:block"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-indigo-500/40 rounded-full blur-lg"></div>
              <button 
                onClick={() => scrollToSection("contact")}
                className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-semibold px-8 py-3 rounded-full border border-blue-400/30 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center space-x-2"
              >
                <Heart className="w-4 h-4" />
                <span>Let's Create</span>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4">
        <motion.div
          className="bg-slate-800/90 backdrop-blur-xl border border-blue-400/20 rounded-2xl shadow-2xl shadow-blue-500/20 overflow-hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-around px-2 py-3">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.section;
              
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  className="relative flex flex-col items-center space-y-1 p-3 rounded-xl transition-all duration-300 min-w-0 flex-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 rounded-xl shadow-lg shadow-blue-500/20"
                        layoutId="mobileActiveBackground"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>
                  
                  <motion.div
                    className={`relative z-10 transition-all duration-300 ${
                      isActive ? "text-blue-400" : "text-slate-400"
                    }`}
                    animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  
                  <span
                    className={`text-xs font-medium transition-all duration-300 relative z-10 ${
                      isActive
                        ? "text-blue-300"
                        : "text-slate-400"
                    }`}
                  >
                    {item.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
          
          {/* Active Indicator */}
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-4 mb-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </motion.div>
      </div>

      {/* Floating Social Proof Badge */}
      <motion.div
        className="fixed bottom-24 right-6 z-40 hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-lg"></div>
          <div className="relative bg-slate-800/80 border border-blue-400/20 backdrop-blur-xl rounded-full px-4 py-2 shadow-lg shadow-blue-500/10">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-300">Available for projects</span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;