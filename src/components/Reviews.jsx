import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowRight, Users, TrendingUp, Zap, Heart } from 'lucide-react';

const MinimalistReviews = () => {
    const [activeReview, setActiveReview] = useState(0);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [isPaused, setIsPaused] = useState(false);

    const reviews = [
        {
            id: 1,
            name: "Sarah Chen",
            role: "CEO & Founder",
            company: "InnovateNow",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            review: "The team delivered beyond our wildest dreams. Our user engagement skyrocketed by 340% in just 3 months. The design is not just beautiful - it's transformative and has completely revolutionized how our users interact with our platform.",
            tags: ["UI/UX Design", "Frontend Dev"],
            metrics: {
                growth: "340%",
                timeline: "3 months",
                satisfaction: "99%"
            },
            icon: Users
        },
        {
            id: 2,
            name: "Marcus Rodriguez",
            role: "Product Director",
            company: "TechFlow",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            review: "Incredible attention to detail and user experience. They transformed our complex workflow into an intuitive, delightful interface that our users absolutely love. The collaboration was seamless and the results exceeded all expectations.",
            tags: ["Product Design", "Strategy"],
            metrics: {
                growth: "280%",
                timeline: "2 months",
                satisfaction: "96%"
            },
            icon: TrendingUp
        },
        {
            id: 3,
            name: "Dr. Emily Watson",
            role: "Research Lead",
            company: "HealthTech Labs",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            review: "Working with this team was a game-changer. They understood our vision and delivered a platform that our medical professionals call 'revolutionary'. The user interface is both sophisticated and incredibly easy to use.",
            tags: ["Healthcare UX", "Research"],
            metrics: {
                growth: "450%",
                timeline: "4 months",
                satisfaction: "98%"
            },
            icon: Heart
        },
        {
            id: 4,
            name: "Alex Kim",
            role: "Startup Founder",
            company: "NextGen AI",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            review: "They didn't just design our product - they crafted an experience. Our funding round was successful partly because investors were blown away by the interface. The team's expertise in AI interfaces is unmatched.",
            tags: ["AI Interface", "Startup MVP"],
            metrics: {
                growth: "500%",
                timeline: "6 weeks",
                satisfaction: "100%"
            },
            icon: Zap
        }
    ];

    // Auto-rotate reviews
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveReview((prev) => (prev + 1) % reviews.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isPaused, reviews.length]);


    const StatCard = ({ icon: Icon, label, value }) => (
        <div
            className="group p-6 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:bg-gray-900/80 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
            style={{
                transform: 'perspective(1000px) rotateX(0deg)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(5deg) translateY(-4px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) translateY(0px)';
            }}
        >
            <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gray-800/60 group-hover:bg-cyan-500/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400" />
                </div>
                <div>
                    <div className="text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors duration-300">{value}</div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{label}</div>
                </div>
            </div>
        </div>
    );

    const ReviewCard = ({ review, index, isActive, isPreview = false }) => {
        const IconComponent = review.icon;

        if (isPreview) {
            return (
                <div
                    className="cursor-pointer group"
                    onClick={() => setActiveReview(index)}
                >
                    <div
                        className="relative p-5 rounded-lg bg-gray-900/40 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:bg-gray-900/60 transform hover:scale-[1.02]"
                        style={{
                            transform: 'perspective(1000px) rotateX(0deg)',
                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'perspective(1000px) rotateX(3deg) translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) translateY(0px)';
                        }}
                    >

                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src={review.avatar}
                                alt={review.name}
                                className="w-10 h-10 rounded-full border border-gray-700 group-hover:border-cyan-500/50 transition-colors duration-300"
                            />
                            <div className="flex-1 min-w-0">
                                <h4 className="text-white font-medium text-sm truncate group-hover:text-cyan-100 transition-colors duration-300">{review.name}</h4>
                                <p className="text-gray-500 text-sm truncate group-hover:text-gray-400 transition-colors duration-300">{review.company}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                            {review.review}
                        </p>

                        <div className="flex items-center justify-between">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 text-cyan-400 fill-cyan-400" />
                                ))}
                            </div>
                            <span className="text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                                {review.metrics.growth}
                            </span>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div
                className={`relative transition-all duration-700 ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-60'
                    }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
            >
                {/* Main card with 3D effect */}
                <div
                    className={`relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 transition-all duration-500 ${isActive ? 'border-cyan-500/40 shadow-2xl shadow-cyan-500/10' : ''
                        } ${hoveredCard === index ? 'border-cyan-500/60' : ''}`}
                    style={{
                        transform: 'perspective(1000px) rotateX(0deg)',
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'perspective(1000px) rotateX(2deg) translateY(-6px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) translateY(0px)';
                    }}
                >

                    {/* Floating icon with 3D effect */}
                    <div
                        className="absolute -top-4 right-8 p-3 rounded-xl bg-gray-800 border border-gray-700 shadow-lg transition-all duration-500"
                        style={{
                            transform: 'translateZ(20px)',
                        }}
                    >
                        <IconComponent className="w-5 h-5 text-cyan-400" />
                    </div>

                    {/* Quote */}
                    <div className="mb-6">
                        <Quote className="w-8 h-8 text-gray-600 mb-4" />
                        <p className="text-gray-200 text-lg leading-relaxed font-light">
                            {review.review}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {review.tags.map((tag, tagIndex) => (
                            <span
                                key={tagIndex}
                                className="px-3 py-2 rounded-lg text-sm text-cyan-400 bg-cyan-500/20 border border-cyan-500/30 hover:bg-cyan-500/30 transition-all duration-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Metrics with 3D effect */}
                    <div
                        className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-gray-950/60 border border-gray-800 transition-all duration-300 hover:bg-gray-950/80"
                        style={{
                            transform: 'translateZ(10px)',
                        }}
                    >
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">{review.metrics.growth}</div>
                            <div className="text-sm text-gray-500">Growth</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">{review.metrics.timeline}</div>
                            <div className="text-sm text-gray-500">Timeline</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">{review.metrics.satisfaction}</div>
                            <div className="text-sm text-gray-500">Satisfaction</div>
                        </div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full border-2 border-gray-700 hover:border-cyan-500/50 transition-colors duration-300"
                                />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-base">{review.name}</h4>
                                <p className="text-gray-400 text-sm">{review.role}</p>
                                <p className="text-gray-500 text-sm">{review.company}</p>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 transition-all duration-300 ${i < review.rating ? 'text-cyan-400 fill-cyan-400' : 'text-gray-600'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="w-full bg-gray-950 relative overflow-hidden">

            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.04),transparent_50%)]" />

            <div className="relative w-full px-8 lg:px-12">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-900/60 border border-gray-800 mb-8">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-400 font-medium">Client Success Stories</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Loved by{' '}
                        <span className="text-cyan-400">
                            Creators
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        See what our clients say about their transformative experiences working with us.
                        Real stories from real people who've achieved extraordinary results.
                    </p>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
                    <StatCard icon={Users} label="Happy Clients" value="150+" />
                    <StatCard icon={TrendingUp} label="Projects" value="300+" />
                    <StatCard icon={Zap} label="Avg Growth" value="340%" />
                    <StatCard icon={Heart} label="Satisfaction" value="98%" />
                </div>

                {/* Main Review Display */}
                <div className="mb-16">
                    <div className="flex justify-center mb-8">
                        <div onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)} 
                            className="max-w-3xl w-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2">
                            <ReviewCard
                                review={reviews[activeReview]}
                                index={activeReview}
                                isActive={true}
                            />
                        </div>
                    </div>

                    {/* Navigation dots */}
                    <div className="flex justify-center gap-3">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveReview(index)}
                                className={`h-3 rounded-full transition-all duration-500 hover:scale-110 ${activeReview === index
                                    ? 'bg-cyan-400 w-8 shadow-lg shadow-cyan-500/30'
                                    : 'bg-gray-600 hover:bg-gray-500 w-3'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Review Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
                    {reviews.map((review, index) => (
                        <ReviewCard
                            key={review.id}
                            review={review}
                            index={index}
                            isActive={false}
                            isPreview={true}
                        />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center max-w-4xl mx-auto">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to be our next success story?</h3>
                    <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                        Join hundreds of satisfied clients who've transformed their business with our design solutions.
                        Let's create something extraordinary together.
                    </p>
                    <button
                        className="group px-8 py-4 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-gray-900 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-cyan-500/30 transform"
                        style={{
                            transform: 'perspective(1000px) rotateX(0deg)',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'perspective(1000px) rotateX(-2deg) translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) translateY(0px)';
                        }}
                    >
                        Start Your Project
                        <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MinimalistReviews;