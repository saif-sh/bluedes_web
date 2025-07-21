import React, { useState, useRef, useEffect } from 'react';
import { Send, Mail, User, MessageCircle, Sparkles, Zap, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const formRef = useRef(null);
  const [particles, setParticles] = useState([]);

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 4
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      setFocusedField('');
    }, 4000);
  };

  const getFieldProgress = (field) => {
    const value = formData[field];
    if (!value) return 0;
    const minLength = field === 'message' ? 20 : 3;
    const maxLength = field === 'message' ? 100 : 30;
    return Math.min((value.length / maxLength) * 100, 100);
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-8 py-20 lg:px-16 overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Primary glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        
        {/* Floating particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float 6s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDYsIDE4MiwgMjEyLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header with animated elements */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{animationDuration: '3s'}} />
            <span className="text-sm text-cyan-300 font-medium">Let's Build Something Amazing</span>
            <Zap className="w-4 h-4 text-blue-400 animate-bounce" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold leading-tight text-white mb-6 relative">
            Get In{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Touch
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-xl -z-10 animate-pulse" />
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed">
            Ready to transform your ideas into reality? Let's start a conversation that could change everything.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="relative max-w-4xl mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-2xl border border-gray-700/50 rounded-3xl p-8 md:p-12 transition-all duration-700 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 group"
            style={{
              transform: isHovered ? 'translateY(-8px) scale(1.01)' : 'translateY(0) scale(1)',
              boxShadow: isHovered ? '0 25px 50px rgba(6, 182, 212, 0.1)' : '0 10px 25px rgba(0, 0, 0, 0.2)'
            }}
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Name Field */}
              <div className="group/field relative">
                <label className="block mb-3 text-sm font-semibold text-gray-400 transition-all duration-300 group-hover/field:text-cyan-400">
                  Your Name
                  <span className="ml-1 text-cyan-500">*</span>
                </label>
                <div className="relative">
                  <User className={`absolute left-4 top-4 w-5 h-5 transition-all duration-300 ${
                    focusedField === 'name' ? 'text-cyan-400 scale-110' : 'text-gray-500'
                  }`} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border-2 border-gray-700/50 rounded-2xl text-white focus:outline-none focus:border-cyan-500/50 focus:bg-gray-800/70 transition-all duration-500 hover:border-gray-600/70 text-lg placeholder-gray-500"
                    placeholder="John Doe"
                    style={{
                      transform: focusedField === 'name' ? 'scale(1.02)' : 'scale(1)',
                    }}
                  />
                  {/* Progress bar */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-300"
                       style={{ width: `${getFieldProgress('name')}%`, opacity: formData.name ? 1 : 0 }} />
                </div>
              </div>

              {/* Email Field */}
              <div className="group/field relative">
                <label className="block mb-3 text-sm font-semibold text-gray-400 transition-all duration-300 group-hover/field:text-cyan-400">
                  Your Email
                  <span className="ml-1 text-cyan-500">*</span>
                </label>
                <div className="relative">
                  <Mail className={`absolute left-4 top-4 w-5 h-5 transition-all duration-300 ${
                    focusedField === 'email' ? 'text-cyan-400 scale-110' : 'text-gray-500'
                  }`} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border-2 border-gray-700/50 rounded-2xl text-white focus:outline-none focus:border-cyan-500/50 focus:bg-gray-800/70 transition-all duration-500 hover:border-gray-600/70 text-lg placeholder-gray-500"
                    placeholder="you@example.com"
                    style={{
                      transform: focusedField === 'email' ? 'scale(1.02)' : 'scale(1)',
                    }}
                  />
                  {/* Progress bar */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-300"
                       style={{ width: `${getFieldProgress('email')}%`, opacity: formData.email ? 1 : 0 }} />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="mt-8 group/field relative">
              <label className="block mb-3 text-sm font-semibold text-gray-400 transition-all duration-300 group-hover/field:text-cyan-400">
                Your Message
                <span className="ml-1 text-cyan-500">*</span>
              </label>
              <div className="relative">
                <MessageCircle className={`absolute left-4 top-4 w-5 h-5 transition-all duration-300 ${
                  focusedField === 'message' ? 'text-cyan-400 scale-110' : 'text-gray-500'
                }`} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  required
                  rows="6"
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border-2 border-gray-700/50 rounded-2xl text-white focus:outline-none focus:border-cyan-500/50 focus:bg-gray-800/70 transition-all duration-500 hover:border-gray-600/70 text-lg placeholder-gray-500 resize-none"
                  placeholder="Tell us about your project, ideas, or just say hello..."
                  style={{
                    transform: focusedField === 'message' ? 'scale(1.01)' : 'scale(1)',
                  }}
                ></textarea>
                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-300"
                     style={{ width: `${getFieldProgress('message')}%`, opacity: formData.message ? 1 : 0 }} />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-10 text-center">
              <button
                type="submit"
                disabled={submitted}
                className="group/btn relative px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                onMouseEnter={(e) => {
                  if (!submitted) {
                    e.currentTarget.style.transform = 'scale(1.05) translateY(-3px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!submitted) {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  }
                }}
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300 rounded-full blur" />
                
                {/* Ripple effect */}
                <div className="absolute inset-0 bg-white/10 rounded-full transform scale-0 group-hover/btn:scale-100 transition-transform duration-500" />
                
                <div className="relative flex items-center justify-center gap-3">
                  {submitted ? (
                    <>
                      <CheckCircle className="w-6 h-6 text-green-400 animate-bounce" />
                      <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                        Message Sent Successfully!
                      </span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:rotate-12 transition-all duration-300" />
                    </>
                  )}
                </div>
              </button>
            </div>

            {/* Form completion indicator */}
            {(formData.name || formData.email || formData.message) && (
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full backdrop-blur-sm">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-sm text-cyan-300">
                    Form {Math.round(((formData.name ? 1 : 0) + (formData.email ? 1 : 0) + (formData.message ? 1 : 0)) / 3 * 100)}% complete
                  </span>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Contact info cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { icon: Mail, title: "Email", value: "hello@example.com", delay: "0s" },
            { icon: MessageCircle, title: "Response Time", value: "Within 24 hours", delay: "0.2s" },
            { icon: Zap, title: "Project Timeline", value: "2-4 weeks avg", delay: "0.4s" }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 text-center hover:border-cyan-500/30 hover:bg-gray-800/40 transition-all duration-500 group/card hover:scale-105"
              style={{
                animation: 'slideUp 0.6s ease-out forwards',
                animationDelay: item.delay
              }}
            >
              <item.icon className="w-8 h-8 mx-auto mb-3 text-cyan-400 group-hover/card:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-white mb-1">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Contact;