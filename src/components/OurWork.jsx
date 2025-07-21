import React, { useState, useEffect } from 'react';
import { ExternalLink, X, Shuffle, Heart, MessageCircle, Eye, Code, Award, Play, Instagram } from 'lucide-react';

const OurWork = () => {
  const [selectedWebsite, setSelectedWebsite] = useState(null);
  const [hoveredWebsite, setHoveredWebsite] = useState(null);
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [instagramReels, setInstagramReels] = useState([]);
  const [isShufflingPosts, setIsShufflingPosts] = useState(false);
  const [isShufflingReels, setIsShufflingReels] = useState(false);

  // Portfolio websites data
  const websites = [
    {
      id: 1,
      name: "TechFlow Agency",
      url: "https://abusinessstudio.com/",
      preview: "/api/placeholder/400/300",
      description: "Modern SaaS landing page with smooth animations and conversion optimization",
      tech: ["React", "Tailwind", "Framer Motion"],
      category: "Business",
      completionDate: "2024",
      features: ["Responsive Design", "Performance Optimized", "SEO Ready"]
    },
    {
      id: 2,
      name: "Creative Studio",
      url: "https://bellavidafamilyspa.com/",
      preview: "/api/placeholder/400/300",
      description: "Elegant spa website with immersive user experience and booking system",
      tech: ["Three.js", "React", "GSAP"],
      category: "Healthcare & Wellness",
      completionDate: "2024",
      features: ["3D Elements", "Online Booking", "Mobile First"]
    }
  ];

  // Instagram Posts URLs - dynamically loaded
  const instagramPostUrls = [
    "https://www.instagram.com/p/DMMvlK-KRkL/",
    "https://www.instagram.com/p/DMMvlK-KRkL/",
    "https://www.instagram.com/p/DMMvlK-KRkL/",
    "https://www.instagram.com/p/DMMvlK-KRkL/",
    "https://www.instagram.com/p/DMMvlK-KRkL/",
    "https://www.instagram.com/p/DMMvlK-KRkL/",
    "https://www.instagram.com/p/DMMvlK-KRkL/",
    "https://www.instagram.com/p/DMMvlK-KRkL/",
  ];

  // Instagram Reels URLs - dynamically loaded
  const instagramReelUrls = [
    "https://www.instagram.com/reel/ABC123DEF/",
    "https://www.instagram.com/reel/GHI456JKL/",
    "https://www.instagram.com/reel/MNO789PQR/",
    "https://www.instagram.com/reel/STU012VWX/",
    "https://www.instagram.com/reel/YZA345BCD/",
    "https://www.instagram.com/reel/EFG678HIJ/"
  ];

  // Sample Instagram posts data (in real app, this would be fetched from Instagram API)
  const initialInstagramPosts = instagramPostUrls.map((url, index) => ({
    id: index + 1,
    url: url,
    image: "/api/placeholder/300/300",
    caption: [
      "🚀 Just delivered a high-converting landing page that increased client leads by 240%",
      "✨ UI/UX case study: How we redesigned this e-commerce experience",
      "💙 Client testimonial: 'Best investment we made for our business' - Local Restaurant",
      "🎨 Brand identity project: Complete visual transformation in 2 weeks",
      "⚡ Performance audit results: 95+ PageSpeed scores across all projects",
      "🔥 Before & After: Complete website makeover with 300% traffic increase",
      "💡 Mobile-first design approach: Why it matters for your business",
      "🌟 Award-winning design: Featured in Design Weekly's top picks"
    ][index],
    likes: [234, 189, 156, 203, 178, 267, 145, 198][index],
    comments: [18, 12, 8, 15, 22, 31, 9, 14][index],
    date: ["2 days ago", "4 days ago", "1 week ago", "1 week ago", "2 weeks ago", "2 weeks ago", "3 weeks ago", "3 weeks ago"][index],
    type: "post"
  }));

  // Sample Instagram reels data (in real app, this would be fetched from Instagram API)
  const initialInstagramReels = instagramReelUrls.map((url, index) => ({
    id: index + 101,
    url: url,
    image: "/api/placeholder/300/300",
    caption: [
      "🎬 30-second website transformation reveal - watch till the end!",
      "📱 Mobile design process in 60 seconds",
      "💻 Coding a landing page from scratch - speed run!",
      "🎨 Color theory for web design - quick tips",
      "⚡ Website loading speed optimization tricks",
      "🔥 Client reaction to their new website reveal"
    ][index],
    likes: [456, 321, 398, 267, 234, 512][index],
    comments: [32, 28, 45, 19, 23, 67][index],
    views: [12500, 8900, 15600, 7800, 9200, 18900][index],
    date: ["1 day ago", "3 days ago", "5 days ago", "1 week ago", "1 week ago", "2 weeks ago"][index],
    type: "reel"
  }));

  useEffect(() => {
    setInstagramPosts(initialInstagramPosts);
    setInstagramReels(initialInstagramReels);
  }, []);

  const shufflePosts = () => {
    setIsShufflingPosts(true);

    setTimeout(() => {
      setInstagramPosts(prev => [...prev].sort(() => Math.random() - 0.5));
    }, 300);

    setTimeout(() => {
      setIsShufflingPosts(false);
    }, 600);
  };

  const shuffleReels = () => {
    setIsShufflingReels(true);

    setTimeout(() => {
      setInstagramReels(prev => [...prev].sort(() => Math.random() - 0.5));
    }, 300);

    setTimeout(() => {
      setIsShufflingReels(false);
    }, 600);
  };

  const cyclePostsToBack = () => {
    setInstagramPosts(prev => {
      const newArray = [...prev];
      const firstItem = newArray.shift();
      if (firstItem) {
        newArray.push(firstItem);
      }
      return newArray;
    });
  };

  const cycleReelsToBack = () => {
    setInstagramReels(prev => {
      const newArray = [...prev];
      const firstItem = newArray.shift();
      if (firstItem) {
        newArray.push(firstItem);
      }
      return newArray;
    });
  };

  const WebsiteModal = ({ website, onClose }) => {
    if (!website) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center py-0 bg-black/80 backdrop-blur-sm">
        <div className="bg-slate-900/95 border border-cyan-500/30 rounded-2xl p-6 max-w-6xl w-full max-h-[90vh] overflow-auto">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-white">{website.name}</h3>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                  {website.category}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{website.description}</p>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-1">Completed</h4>
                  <p className="text-gray-300">{website.completionDate}</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-1">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {website.tech.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-1">Features</h4>
                  <div className="text-sm text-gray-300">
                    {website.features.join(" • ")}
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-cyan-500/20 rounded-lg transition-colors ml-4"
            >
              <X className="w-6 h-6 text-cyan-400" />
            </button>
          </div>

          {/* Live Website Preview */}
          <div className="bg-gray-200 rounded-lg overflow-hidden mb-4" style={{ height: '500px' }}>
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden h-full">
              <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 ml-4">
                  {website.url}
                </div>
              </div>
              <div className="w-full" style={{ height: 'calc(100% - 40px)' }}>
                <iframe
                  src={website.url}
                  className="w-full h-full border-0"
                  style={{
                    transform: 'scale(0.75)',
                    transformOrigin: 'top left',
                    width: '133.33%',
                    height: '133.33%'
                  }}
                  title={`Live preview of ${website.name}`}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>Live Preview</span>
              </div>
              <div className="flex items-center gap-1">
                <Code className="w-4 h-4" />
                <span>Custom Development</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4" />
                <span>Award-Winning Design</span>
              </div>
            </div>
            <a
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              View Live Site <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  const StackedCards = ({ items, isShuffling, cardType = "post", onCardCycle }) => (
    <div className="relative h-96 max-w-sm mx-auto mb-8" style={{ perspective: '1000px' }}>
      {items.slice(0, 5).map((item, index) => (
        <div
          key={item.id}
          className={`absolute w-full bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-sm border border-slate-600/30 rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/20 ${isShuffling
            ? 'animate-pulse scale-90 opacity-60'
            : 'hover:scale-105 hover:-translate-y-2'
            }`}
          style={{
            transform: isShuffling
              ? `translateY(${Math.random() * 120}px) translateX(${Math.random() * 120 - 60}px) rotate(${Math.random() * 360}deg) scale(0.75)`
              : `translateY(${index * 15}px) translateX(${index * 10}px) rotate(${(index - 2) * 1.5}deg) translateZ(${index * -10}px)`,
            zIndex: items.length - index,
            transition: 'all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            boxShadow: `0 ${20 + index * 5}px ${40 + index * 10}px -10px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(6, 182, 212, 0.1)`
          }}
        >
          {/* Cycle Button - Only on top card */}
          {index === 0 && onCardCycle && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (!isShuffling) {
                  onCardCycle();
                }
              }}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center hover:bg-slate-700/80 hover:border-cyan-500/50 transition-all duration-200 group"
            >
              <Shuffle className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
            </button>
          )}

          {/* Main card content */}
          <div
            onClick={() => {
              if (!isShuffling) {
                window.open(item.url, '_blank');
              }
            }}
          >
            {/* Header with gradient accent */}
            <div className="h-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>

            {/* Content Area */}
            <div className="relative h-64 bg-gradient-to-br from-slate-800/50 to-slate-900/80 flex items-center justify-center overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent"></div>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id={`pattern-${item.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.1" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill={`url(#pattern-${item.id})`} />
                </svg>
              </div>

              {/* Content Type Icon */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                {cardType === "reel" ? (
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <div className="w-8 h-8 border-2 border-white rounded-lg"></div>
                  </div>
                )}

                <div className="text-gray-300 text-sm font-medium">
                  {cardType === "reel" ? "Instagram Reel" : "Instagram Post"}
                </div>

                {cardType === "reel" && item.views && (
                  <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
                    <Eye className="w-3 h-3" />
                    <span>{item.views.toLocaleString()} views</span>
                  </div>
                )}
              </div>
            </div>

            {/* Post Info */}
            <div className="p-5 bg-slate-900/80 backdrop-blur-sm">
              <p className="text-white text-sm mb-4 line-clamp-2 leading-relaxed">{item.caption}</p>

              <div className="flex justify-between items-center">
                <div className="flex gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1.5 hover:text-pink-400 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>{item.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>{item.comments}</span>
                  </div>
                </div>
                <span className="text-gray-500 text-xs">{item.date}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="py-16 px-6 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto">

        {/* Work Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our latest projects and creative solutions. Each project represents our commitment to excellence, innovation, and delivering results that exceed expectations.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Featured <span className="text-cyan-400">Projects</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {websites.map((website) => (
              <div
                key={website.id}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredWebsite(website.id)}
                onMouseLeave={() => setHoveredWebsite(null)}
                onClick={() => setSelectedWebsite(website)}
              >
                {/* Project Card */}
                <div className="bg-slate-900/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">

                  {/* Laptop Mockup */}
                  <div className="p-6 pb-4">
                    <div className="bg-slate-800 rounded-t-xl p-3">
                      <div className="bg-slate-700 rounded-lg p-2 mb-2">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="flex-1 bg-slate-600 rounded px-2 py-1 text-xs text-gray-300 truncate">
                            {website.url}
                          </div>
                        </div>

                        <div className="relative bg-white rounded overflow-hidden" style={{ aspectRatio: '16/10' }}>
                          {hoveredWebsite === website.id ? (
                            <div className="absolute inset-0 overflow-hidden">
                              <iframe
                                src={website.url}
                                className="w-full h-full border-0"
                                style={{
                                  transform: 'scale(0.3)',
                                  transformOrigin: 'top left',
                                  width: '333%',
                                  height: '333%',
                                  pointerEvents: 'none'
                                }}
                                title={`Preview of ${website.name}`}
                                sandbox="allow-scripts allow-same-origin"
                                loading="eager"
                                scrolling="no"
                              />
                            </div>
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center">
                              <div className="text-gray-600 text-sm">Hover to Preview Website</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-800 rounded-b-xl px-3 pb-3">
                      <div className="bg-slate-700 rounded-b-lg h-2"></div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="px-6 pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {website.name}
                      </h4>
                      <span className="text-xs text-gray-500">{website.completionDate}</span>
                    </div>

                    <p className="text-gray-400 text-sm mb-3">{website.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 flex-wrap">
                        {website.tech.slice(0, 2).map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                        {website.tech.length > 2 && (
                          <span className="px-2 py-1 bg-slate-700 text-gray-400 rounded-full text-xs">
                            +{website.tech.length - 2}
                          </span>
                        )}
                      </div>

                      <div className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Updates */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">
              Recent <span className="text-cyan-400">Updates</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Follow our journey through Instagram posts and reels. See behind-the-scenes content, client work, and creative process.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Instagram Posts */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white rounded"></div>
                  </div>
                  <h4 className="text-xl font-bold text-white">Latest Posts</h4>
                </div>
                <button
                  onClick={shufflePosts}
                  disabled={isShufflingPosts}
                  className={`flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg transition-colors ${isShufflingPosts
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-purple-500/30'
                    }`}
                >
                  <Shuffle className={`w-4 h-4 ${isShufflingPosts ? 'animate-spin' : ''}`} />
                  {isShufflingPosts ? 'Shuffling...' : 'Shuffle'}
                </button>
              </div>

              <StackedCards
                items={instagramPosts}
                isShuffling={isShufflingPosts}
                cardType="post"
                onCardCycle={cyclePostsToBack}
              />
            </div>

            {/* Instagram Reels */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-current" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Latest Reels</h4>
                </div>
                <button
                  onClick={shuffleReels}
                  disabled={isShufflingReels}
                  className={`flex items-center gap-2 px-4 py-2 bg-pink-500/20 text-pink-400 rounded-lg transition-colors ${isShufflingReels
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-pink-500/30'
                    }`}
                >
                  <Shuffle className={`w-4 h-4 ${isShufflingReels ? 'animate-spin' : ''}`} />
                  {isShufflingReels ? 'Shuffling...' : 'Shuffle'}
                </button>
              </div>

              <StackedCards
                items={instagramReels}
                isShuffling={isShufflingReels}
                cardType="reel"
                onCardCycle={cycleReelsToBack}
              />
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Start Your Project
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/your_instagram_handle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-pink-500/30 text-pink-400 rounded-full hover:bg-pink-500/10 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
                View All Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Website Modal */}
      <WebsiteModal
        website={selectedWebsite}
        onClose={() => setSelectedWebsite(null)}
      />
    </div>
  );
};

export default OurWork;