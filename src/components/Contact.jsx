import React, { useState } from 'react';
import { Send, Mail, User, MessageCircle, CheckCircle, Loader, Phone, MapPin, Star, Zap } from 'lucide-react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting || submitted) return;

    setIsSubmitting(true);
    setError('');

    try {
      await emailjs.send(
        'service_sksalnk',     // replace with your actual EmailJS service ID
        'template_6gxcgo4',    // replace with your template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'GJ0sTl70AYexXzu_5'       // your EmailJS public key
      );

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
        setFocusedField('');
      }, 4000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-x-hidden">
      {/* Background with subtle grid */}
      <div className="absolute inset-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-purple-950/15" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(147, 51, 234, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 50px 50px, 100px 100px, 100px 100px'
          }}
        />

        {/* Floating gradient orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-purple-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-10 w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-purple-600/12 via-pink-500/8 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-40 h-40 lg:w-56 lg:h-56 bg-gradient-to-r from-emerald-500/8 to-teal-500/12 rounded-full blur-2xl" />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full animate-pulse"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[0.5px] bg-gradient-to-b from-transparent via-black/3 to-black/10" />

      {/* Main content */}
      <div className="relative z-10 w-full px-4 lg:px-8 py-12 lg:py-16 max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16 relative">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-800/50 via-slate-800/30 to-slate-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-full mb-8 hover:border-cyan-400/40 transition-all duration-700 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse relative">
              <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-60" />
            </div>
            <Zap className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm text-slate-200 font-medium">Available for Projects</span>
            <Star className="w-4 h-4 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
          </div>

          {/* Main title */}
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-extralight tracking-tighter leading-tight">
              <div className="inline-block">
                <span className="text-white/90">Let's </span>
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent relative inline-block">
                  Create
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 to-purple-400/15 blur-2xl -z-10 scale-150" />
                </span>
              </div>
              <div className="text-white/70">
                Together
              </div>
            </h1>
          </div>

          <p className="text-slate-300 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-light mt-6 px-4">
            Transform your vision into reality. Let's discuss your next big idea and make it extraordinary.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* Contact info cards */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "hello@example.com",
                description: "Drop me a line anytime",
                gradient: "from-cyan-500/10 to-blue-500/10",
                iconColor: "text-cyan-400"
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+1 (555) 123-4567",
                description: "Let's have a conversation",
                gradient: "from-purple-500/10 to-pink-500/10",
                iconColor: "text-purple-400"
              },
              {
                icon: MapPin,
                title: "Location",
                value: "San Francisco, CA",
                description: "Open to remote projects worldwide",
                gradient: "from-emerald-500/10 to-teal-500/10",
                iconColor: "text-emerald-400"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/25 via-slate-800/15 to-slate-900/35 backdrop-blur-2xl border border-slate-600/25 rounded-2xl p-6 hover:border-slate-500/45 transition-all duration-1000 hover:bg-gradient-to-br hover:from-slate-800/40 hover:to-slate-700/25 overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <item.icon className={`w-6 h-6 ${item.iconColor} group-hover:scale-125 group-hover:rotate-6 transition-all duration-700`} />
                    <div className="w-2 h-2 bg-current opacity-30 rounded-full animate-pulse" />
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-slate-100 transition-colors duration-500">
                    {item.title}
                  </h3>

                  <p className={`${item.iconColor} text-base font-medium mb-2 group-hover:scale-105 transition-transform duration-500`}>
                    {item.value}
                  </p>

                  <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="relative bg-gradient-to-br from-slate-800/15 via-slate-900/25 to-slate-800/15 backdrop-blur-2xl border border-slate-600/20 rounded-3xl p-8 overflow-hidden">

              {/* Premium border glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/8 via-purple-500/4 to-blue-500/8 opacity-0 hover:opacity-100 transition-opacity duration-1000 -z-10 blur-2xl" />

              {/* Floating form elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

              <div className="space-y-6">

                {/* Form fields */}
                {[
                  { name: 'name', label: 'Name', icon: User, type: 'text', placeholder: 'Your full name' },
                  { name: 'email', label: 'Email', icon: Mail, type: 'email', placeholder: 'your.email@example.com' },
                ].map((field) => (
                  <div key={field.name} className="group relative">
                    <label className="block text-sm font-medium text-slate-200 mb-3 transition-all duration-500 group-hover:text-cyan-300 uppercase tracking-wider">
                      {field.label}
                    </label>
                    <div className="relative">
                      <field.icon className={`absolute left-4 top-4 w-5 h-5 transition-all duration-700 z-10 ${focusedField === field.name ? 'text-cyan-400 scale-125 rotate-3' : 'text-slate-400'
                        }`} />
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField('')}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-slate-900/50 via-slate-900/35 to-slate-900/50 backdrop-blur-sm border border-slate-600/35 rounded-xl text-white focus:outline-none focus:border-cyan-400/50 focus:bg-slate-900/70 transition-all duration-700 hover:border-slate-500/50 placeholder-slate-500 text-base"
                        placeholder={field.placeholder}
                        style={{
                          transform: focusedField === field.name ? 'translateY(-1px) scale(1.005)' : 'translateY(0) scale(1)',
                          boxShadow: focusedField === field.name ? '0 8px 16px rgba(6, 182, 212, 0.08)' : 'none'
                        }}
                      />
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/8 to-blue-500/8 opacity-0 transition-opacity duration-500 -z-10 ${focusedField === field.name ? 'opacity-100' : ''
                        }`} />
                    </div>
                  </div>
                ))}

                {/* Message field */}
                <div className="group relative">
                  <label className="block text-sm font-medium text-slate-200 mb-3 transition-all duration-500 group-hover:text-cyan-300 uppercase tracking-wider">
                    Message
                  </label>
                  <div className="relative">
                    <MessageCircle className={`absolute left-4 top-4 w-5 h-5 transition-all duration-700 z-10 ${focusedField === 'message' ? 'text-cyan-400 scale-125 rotate-3' : 'text-slate-400'
                      }`} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      required
                      rows="4"
                      className="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-slate-900/50 via-slate-900/35 to-slate-900/50 backdrop-blur-sm border border-slate-600/35 rounded-xl text-white focus:outline-none focus:border-cyan-400/50 focus:bg-slate-900/70 transition-all duration-700 hover:border-slate-500/50 placeholder-slate-500 resize-none text-base"
                      placeholder="Tell me about your project, timeline, and how we can work together..."
                      style={{
                        transform: focusedField === 'message' ? 'translateY(-1px) scale(1.005)' : 'translateY(0) scale(1)',
                        boxShadow: focusedField === 'message' ? '0 8px 16px rgba(6, 182, 212, 0.08)' : 'none'
                      }}
                    />
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/8 to-blue-500/8 opacity-0 transition-opacity duration-500 -z-10 ${focusedField === 'message' ? 'opacity-100' : ''
                      }`} />
                  </div>
                </div>

                {/* Error message */}
                {error && (
                  <div className="text-red-300 text-sm bg-gradient-to-r from-red-500/15 to-pink-500/8 border border-red-500/25 rounded-xl p-4 backdrop-blur-sm">
                    {error}
                  </div>
                )}

                {/* Submit button */}
                <button
                  onClick={handleSubmit}
                  disabled={!isFormValid || isSubmitting || submitted}
                  className="group relative w-full py-4 px-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 transition-all duration-700 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden text-base"
                  style={{
                    transform: isFormValid && !isSubmitting && !submitted ? 'translateY(-1px) scale(1.005)' : 'translateY(0) scale(1)',
                    boxShadow: isFormValid && !isSubmitting && !submitted ? '0 12px 24px rgba(6, 182, 212, 0.2)' : 'none'
                  }}>
                    
                  <div className="absolute inset-0 bg-gradient-to-r from-white/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/25 to-purple-500/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10" />

                  <div className="relative flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        <span>Sending Your Message...</span>
                      </>
                    ) : submitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-green-400 animate-pulse" />
                        <span className="text-green-300">Message Sent Successfully!</span>
                      </>
                    ) : (
                      <>
                        <span className="z-10 text-white">Send Message</span>
                        <Send className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-500" />
                      </>
                    )}
                  </div>
                </button>

                {/* Progress indicator */}
                {(formData.name || formData.email || formData.message) && (
                  <div className="flex items-center justify-center">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 border border-cyan-400/25 rounded-full text-sm text-cyan-200 backdrop-blur-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" />
                      <span className="font-medium">
                        {Math.round(((formData.name ? 1 : 0) + (formData.email ? 1 : 0) + (formData.message ? 1 : 0)) / 3 * 100)}% Complete
                      </span>
                      <div className="w-12 h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-500"
                          style={{
                            width: `${((formData.name ? 1 : 0) + (formData.email ? 1 : 0) + (formData.message ? 1 : 0)) / 3 * 100}%`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 relative">
          <div className="inline-block p-6 bg-gradient-to-r from-slate-800/15 to-slate-900/15 backdrop-blur-xl border border-slate-600/20 rounded-2xl max-w-lg mx-auto">
            <p className="text-slate-300 text-base font-light">
              We typically respond within <span className="text-cyan-400 font-medium">24 hours</span>.
              <br className="hidden sm:block" />
              <span className="sm:ml-1">Looking forward to our collaboration! ✨</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;