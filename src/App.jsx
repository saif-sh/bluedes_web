import React, { useEffect, useState } from 'react';
import { Hero, Navbar, Footer, About,Reviews, Contact } from './components';
import FuturisticCursor from './components/FuturisticCursor'
import OurWork from './components/OurWork';

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const initialTheme = 'dark';
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (mode) => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    // localStorage.setItem('theme', newTheme); // Commented out for Claude artifacts
    applyTheme(newTheme);
  };

  return (
    <div className="bg-white text-black dark:bg-[#010914] dark:text-slate-100 transition-colors duration-300">
      {/* Global Futuristic Cursor - This should work across the entire page */}
      <FuturisticCursor />

      <Navbar />

      <main className="pt-24 space-y-[25vh]">
        {/* Hero Section - now without conflicting cursor effects */}
        <section id="hero">
          <Hero id='hero' />
        </section>


        {/* About */}
        <section id="about">
          <About id='about' />
          {/* <section id="about" className="min-h-[90vh] flex items-center justify-center bg-slate-100 dark:bg-[#0a0f1c] px-4 transition-colors duration-300">
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-rose-600 dark:text-rose-500 uppercase">About Us</h2>
            <p className="mt-4 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              Blue Design is a social media marketing + tech design agency. We blend storytelling with modern design and digital strategy to help brands dominate online.
            </p>
          </div> */}
        </section>

        {/* Displays */}
        <section id="displays" className="min-h-[100vh] flex items-center justify-center bg-white dark:bg-[#010914] px-4">
          <OurWork />
        </section>

        {/* Reviews */}
        <section id="reviews" className="min-h-[70vh] flex  bg-white dark:bg-[#010914] items-center justify-center px-4">
            <Reviews />
          {/* <div className="max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-rose-600 dark:text-rose-500 uppercase">Client Reviews</h2>
            <p className="mt-4 text-slate-700 dark:text-slate-300">
              Clients love our attention to detail, clean UI, and performance-driven content. Results meet creativity, every time.
            </p>
          </div> */}
        </section>

        {/* Contact */}
        <section id="contact" className=" flex items-center justify-center bg-white dark:bg-[#010914] px-4">
          <Contact />
          {/* <div className="max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 uppercase">Let's Collaborate</h2>
            <p className="mt-4 text-slate-700 dark:text-slate-300">
              Got an idea? Let's turn it into something futuristic and bold. We're here for brand identities, socials, and cutting-edge websites.
            </p>
            <button className="mt-6 px-6 py-2 border border-rose-600 dark:border-rose-500 text-rose-500 rounded-full hover:bg-rose-500/10 dark:hover:bg-rose-500/10 hover:shadow-[0_0_25px_#f43f5e] transition">
              Contact Us
            </button>
          </div> */}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;