import React, { useState, useEffect } from 'react';
import { X, Info } from 'lucide-react';
import ChibiLion from '../assets/Chibilion.svg';



const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
};

const FuturisticCursor = () => {
    const mousePosition = useMousePosition();
    const [isVisible, setIsVisible] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [particles, setParticles] = useState([]);
    const [ripples, setRipples] = useState([]);
    const [glowTrail, setGlowTrail] = useState([]);
    const [colorMode, setColorMode] = useState('cyan');
    const [interactionMode, setInteractionMode] = useState('default');
    const [showHelp, setShowHelp] = useState(true);

    // Fixed color themes with proper RGB values
    const colorThemes = {
        cyan: {
            primary: '#22d3ee',
            secondary: '#67e8f9',
            accent: '#06b6d4',
            name: 'Cyan'
        },
        purple: {
            primary: '#c084fc',
            secondary: '#d8b4fe',
            accent: '#9333ea',
            name: 'Purple'
        },
        green: {
            primary: '#4ade80',
            secondary: '#86efac',
            accent: '#16a34a',
            name: 'Green'
        },
        pink: {
            primary: '#f472b6',
            secondary: '#f9a8d4',
            accent: '#ec4899',
            name: 'Pink'
        },
        gold: {
            primary: '#facc15',
            secondary: '#fde047',
            accent: '#eab308',
            name: 'Gold'
        },
        red: {
            primary: '#f87171',
            secondary: '#fca5a5',
            accent: '#dc2626',
            name: 'Red'
        },
        blue: {
            primary: '#60a5fa',
            secondary: '#93c5fd',
            accent: '#2563eb',
            name: 'Blue'
        },
        emerald: {
            primary: '#34d399',
            secondary: '#6ee7b7',
            accent: '#059669',
            name: 'Emerald'
        }
    };

    const currentTheme = colorThemes[colorMode];

    // Refined interaction modes
    const interactionModes = {
        default: 'Standard particle burst',
        sparkle: 'Rotating sparkle particles',
        ripple: 'Expanding ripple waves',
        magnetic: 'Magnetic attraction effect',
        spiral: 'Spiral particle motion',
        fireworks: 'Firework explosion effect',
        galaxy: 'Galaxy swirl pattern',
        lightning: 'Electric lightning effect',
        sonic: 'Sonic boom shockwave',
        chibiLion: 'Cute chibi lion companion'
    };

    useEffect(() => {
        setIsVisible(true);
        document.body.style.cursor = 'none';

        const handleKeyPress = (e) => {
            switch (e.key.toLowerCase()) {
                case 'c':
                    setColorMode(prev => {
                        const colors = Object.keys(colorThemes);
                        const currentIndex = colors.indexOf(prev);
                        return colors[(currentIndex + 1) % colors.length];
                    });
                    break;
                case 'm':
                    setInteractionMode(prev => {
                        const modes = Object.keys(interactionModes);
                        const currentIndex = modes.indexOf(prev);
                        return modes[(currentIndex + 1) % modes.length];
                    });
                    break;
                case 'r':
                    setParticles([]);
                    setRipples([]);
                    setGlowTrail([]);
                    break;
                case 'h':
                    setShowHelp(prev => !prev);
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            document.body.style.cursor = 'auto';
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    // Enhanced glow trail that follows mouse movement
    useEffect(() => {
        if (mousePosition.x !== 0 || mousePosition.y !== 0) {
            const newGlowPoint = {
                x: mousePosition.x,
                y: mousePosition.y,
                id: Date.now() + Math.random(),
                timestamp: Date.now(),
                opacity: 0.8
            };

            setGlowTrail(prev => {
                const filtered = prev.filter(point => Date.now() - point.timestamp < 200);
                return [newGlowPoint, ...filtered.slice(0, 12)];
            });
        }
    }, [mousePosition]);

    // Improved hover detection
    useEffect(() => {
        const handleMouseMove = (e) => {
            const element = document.elementFromPoint(e.clientX, e.clientY);
            if (element) {
                const isInteractive = element.matches('button, a, [role="button"], input, textarea, select, [onclick], [onmousedown], .cursor-pointer') ||
                    element.closest('button, a, [role="button"], input, textarea, select, [onclick], [onmousedown], .cursor-pointer') ||
                    window.getComputedStyle(element).cursor === 'pointer';
                setIsHovering(isInteractive);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const handleMouseDown = (e) => {
            setIsClicking(true);

            const createParticleEffect = () => {
                const newParticles = [];

                switch (interactionMode) {
                    case 'sparkle':
                        for (let i = 0; i < 12; i++) {
                            const angle = (i / 12) * Math.PI * 2;
                            const speed = 2 + Math.random() * 3;
                            newParticles.push({
                                id: Date.now() + i,
                                x: e.clientX,
                                y: e.clientY,
                                vx: Math.cos(angle) * speed,
                                vy: Math.sin(angle) * speed,
                                life: 1,
                                size: Math.random() * 3 + 1,
                                rotation: Math.random() * 360,
                            });
                        }
                        break;

                    case 'ripple':
                        setRipples(prev => [...prev, {
                            id: Date.now(),
                            x: e.clientX,
                            y: e.clientY,
                            size: 0,
                            life: 1,
                        }]);
                        break;

                    case 'magnetic':
                        for (let i = 0; i < 20; i++) {
                            newParticles.push({
                                id: Date.now() + i,
                                x: e.clientX + (Math.random() - 0.5) * 50,
                                y: e.clientY + (Math.random() - 0.5) * 50,
                                vx: (Math.random() - 0.5) * 8,
                                vy: (Math.random() - 0.5) * 8,
                                life: 1,
                                size: Math.random() * 2 + 1,
                                magnetism: 0.02,
                            });
                        }
                        break;

                    case 'spiral':
                        for (let i = 0; i < 15; i++) {
                            const angle = (i / 15) * Math.PI * 4;
                            const radius = i * 2;
                            newParticles.push({
                                id: Date.now() + i,
                                x: e.clientX + Math.cos(angle) * radius,
                                y: e.clientY + Math.sin(angle) * radius,
                                vx: Math.cos(angle + Math.PI / 2) * 3,
                                vy: Math.sin(angle + Math.PI / 2) * 3,
                                life: 1,
                                size: Math.random() * 2 + 1,
                                spiral: true,
                            });
                        }
                        break;

                    case 'fireworks':
                        for (let i = 0; i < 25; i++) {
                            const angle = Math.random() * Math.PI * 2;
                            const speed = Math.random() * 8 + 2;
                            newParticles.push({
                                id: Date.now() + i,
                                x: e.clientX,
                                y: e.clientY,
                                vx: Math.cos(angle) * speed,
                                vy: Math.sin(angle) * speed - 2,
                                life: 1,
                                size: Math.random() * 3 + 1,
                                gravity: 0.1,
                            });
                        }
                        break;

                    case 'galaxy':
                        for (let i = 0; i < 30; i++) {
                            const angle = Math.random() * Math.PI * 2;
                            const radius = Math.random() * 100 + 20;
                            newParticles.push({
                                id: Date.now() + i,
                                x: e.clientX + Math.cos(angle) * radius,
                                y: e.clientY + Math.sin(angle) * radius,
                                vx: Math.cos(angle + Math.PI / 2) * (radius * 0.02),
                                vy: Math.sin(angle + Math.PI / 2) * (radius * 0.02),
                                life: 1,
                                size: Math.random() * 2 + 0.5,
                                galaxy: true,
                                centerX: e.clientX,
                                centerY: e.clientY,
                            });
                        }
                        break;

                    case 'lightning':
                        for (let i = 0; i < 8; i++) {
                            const angle = (i / 8) * Math.PI * 2;
                            const segments = 5;
                            for (let j = 0; j < segments; j++) {
                                newParticles.push({
                                    id: Date.now() + i * segments + j,
                                    x: e.clientX + Math.cos(angle) * (j * 20) + (Math.random() - 0.5) * 40,
                                    y: e.clientY + Math.sin(angle) * (j * 20) + (Math.random() - 0.5) * 40,
                                    vx: (Math.random() - 0.5) * 4,
                                    vy: (Math.random() - 0.5) * 4,
                                    life: 1,
                                    size: Math.random() * 1.5 + 0.5,
                                    lightning: true,
                                });
                            }
                        }
                        break;

                    case 'sonic':
                        for (let i = 0; i < 3; i++) {
                            setRipples(prev => [...prev, {
                                id: Date.now() + i,
                                x: e.clientX,
                                y: e.clientY,
                                size: i * 30,
                                life: 1,
                                delay: i * 100,
                            }]);
                        }
                        break;

                    case 'chibiLion':
                        // Cute lion roar effect with heart particles
                        for (let i = 0; i < 8; i++) {
                            const angle = (i / 8) * Math.PI * 2;
                            const speed = 1 + Math.random() * 2;
                            newParticles.push({
                                id: Date.now() + i,
                                x: e.clientX + 20, // offset from lion mouth
                                y: e.clientY - 5,
                                vx: Math.cos(angle) * speed,
                                vy: Math.sin(angle) * speed,
                                life: 1,
                                size: Math.random() * 2 + 1,
                                roar: true,
                                isHeart: i % 3 === 0, // every 3rd particle is a heart
                            });
                        }
                        break;

                    default:
                        for (let i = 0; i < 8; i++) {
                            newParticles.push({
                                id: Date.now() + i,
                                x: e.clientX,
                                y: e.clientY,
                                vx: (Math.random() - 0.5) * 6,
                                vy: (Math.random() - 0.5) * 6,
                                life: 1,
                                size: Math.random() * 2 + 1,
                            });
                        }
                }

                setParticles(prev => [...prev, ...newParticles]);
            };

            createParticleEffect();
        };

        const handleMouseUp = () => {
            setIsClicking(false);
        };

        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [interactionMode]);

    useEffect(() => {
        let animationId;

        const updateEffects = () => {
            setGlowTrail(prev => prev.filter(point => Date.now() - point.timestamp < 250));

            setParticles(prev => {
                const updated = prev
                    .map(particle => {
                        let newParticle = {
                            ...particle,
                            x: particle.x + particle.vx,
                            y: particle.y + particle.vy,
                            life: particle.life - 0.015,
                        };

                        // Apply gravity
                        if (particle.gravity) {
                            newParticle.vy += particle.gravity;
                        }

                        // Magnetic effect
                        if (particle.magnetism) {
                            const dx = mousePosition.x - particle.x;
                            const dy = mousePosition.y - particle.y;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            if (distance > 0) {
                                newParticle.vx += (dx / distance) * particle.magnetism;
                                newParticle.vy += (dy / distance) * particle.magnetism;
                            }
                        }

                        // Galaxy effect
                        if (particle.galaxy) {
                            const dx = particle.centerX - particle.x;
                            const dy = particle.centerY - particle.y;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            if (distance > 0) {
                                newParticle.vx += (dx / distance) * 0.05;
                                newParticle.vy += (dy / distance) * 0.05;
                            }
                        }

                        // Rotation for sparkle
                        if (particle.rotation !== undefined) {
                            newParticle.rotation = particle.rotation + 5;
                        }

                        return newParticle;
                    })
                    .filter(particle => particle.life > 0);

                return updated;
            });

            setRipples(prev => {
                const updated = prev
                    .map(ripple => ({
                        ...ripple,
                        size: ripple.size + 4,
                        life: ripple.life - 0.02,
                    }))
                    .filter(ripple => ripple.life > 0);

                return updated;
            });

            animationId = requestAnimationFrame(updateEffects);
        };

        animationId = requestAnimationFrame(updateEffects);

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, [mousePosition]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            {/* Glowing trail effect */}
            {glowTrail.map((point, index) => (
                <div
                    key={point.id}
                    className="fixed rounded-full blur-sm"
                    style={{
                        left: point.x,
                        top: point.y,
                        transform: 'translate(-50%, -50%)',
                        opacity: Math.max(0, 0.6 - index * 0.05),
                        width: `${Math.max(2, 8 - index * 0.5)}px`,
                        height: `${Math.max(2, 8 - index * 0.5)}px`,
                        backgroundColor: currentTheme.primary,
                        boxShadow: `0 0 ${Math.max(4, 12 - index)}px ${currentTheme.primary}`,
                    }}
                />
            ))}

            {/* Main cursor - no lag, direct positioning */}
            <div
                className={`fixed transition-transform duration-75 ease-out ${isClicking ? 'scale-75' : isHovering ? 'scale-110' : 'scale-100'
                    }`}
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10000,
                }}
            >
                {interactionMode === 'chibiLion' ? (
                    // Cute Chibi Lion Cursor
                    <div className="relative">
                        <img
                            src={ChibiLion}
                            alt="Lion Icon"
                            className={`transition-all w-8 h-8 duration-150 ${isClicking ? 'scale-200' : ''}`}
                        />

                        {/* Lion hover effect */}
                        {isHovering && (
                            <div
                                className="absolute -inset-3 rounded-full animate-pulse"
                                style={{
                                    border: `2px solid ${currentTheme.primary}50`,
                                    backgroundColor: `${currentTheme.primary}10`
                                }}
                            />
                        )}
                    </div>
                ) : (
                    // Original cursor design
                    <>
                        {/* Outer ring */}
                        <div
                            className={`w-6 h-6 border-2 rounded-full transition-all duration-150 ${isHovering ? 'border-4' : ''
                                } ${isClicking ? 'bg-black/20' : ''}`}
                            style={{
                                borderColor: currentTheme.primary,
                                backgroundColor: isHovering ? `${currentTheme.accent}20` : 'transparent',
                                boxShadow: isHovering ? `0 0 20px ${currentTheme.primary}40` : 'none'
                            }}
                        >
                            {/* Scanning lines */}
                            <div className={`absolute inset-0 rounded-full overflow-hidden ${isHovering ? 'animate-pulse' : ''
                                }`}>
                                <div
                                    className="absolute w-full h-0.5 animate-[scan_2s_ease-in-out_infinite]"
                                    style={{
                                        background: `linear-gradient(to right, transparent, ${currentTheme.primary}, transparent)`
                                    }}
                                />
                                <div
                                    className="absolute w-0.5 h-full animate-[scanVertical_2s_ease-in-out_infinite_0.5s]"
                                    style={{
                                        background: `linear-gradient(to bottom, transparent, ${currentTheme.primary}, transparent)`
                                    }}
                                />
                            </div>
                        </div>

                        {/* Inner dot */}
                        <div
                            className={`absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ${isClicking ? 'scale-150' : ''
                                }`}
                            style={{
                                backgroundColor: isClicking ? currentTheme.secondary : currentTheme.primary
                            }}
                        />

                        {/* Hover state brackets */}
                        {isHovering && (
                            <>
                                <div
                                    className="absolute -top-1 -left-1 w-3 h-3 animate-pulse"
                                    style={{
                                        borderLeft: `2px solid ${currentTheme.accent}`,
                                        borderTop: `2px solid ${currentTheme.accent}`
                                    }}
                                />
                                <div
                                    className="absolute -top-1 -right-1 w-3 h-3 animate-pulse"
                                    style={{
                                        borderRight: `2px solid ${currentTheme.accent}`,
                                        borderTop: `2px solid ${currentTheme.accent}`
                                    }}
                                />
                                <div
                                    className="absolute -bottom-1 -left-1 w-3 h-3 animate-pulse"
                                    style={{
                                        borderLeft: `2px solid ${currentTheme.accent}`,
                                        borderBottom: `2px solid ${currentTheme.accent}`
                                    }}
                                />
                                <div
                                    className="absolute -bottom-1 -right-1 w-3 h-3 animate-pulse"
                                    style={{
                                        borderRight: `2px solid ${currentTheme.accent}`,
                                        borderBottom: `2px solid ${currentTheme.accent}`
                                    }}
                                />
                            </>
                        )}
                    </>
                )}
            </div>

            {/* Particles */}
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className={`fixed ${particle.isHeart ? '' : 'rounded-full'
                        } ${particle.rotation !== undefined ? 'animate-spin' : ''} ${particle.roar ? 'animate-pulse' : ''
                        }`}
                    style={{
                        left: particle.x,
                        top: particle.y,
                        transform: `translate(-50%, -50%) ${particle.rotation !== undefined ? `rotate(${particle.rotation}deg)` : ''
                            }`,
                        opacity: particle.life,
                        scale: particle.life,
                        width: `${particle.size || 1}px`,
                        height: `${particle.size || 1}px`,
                        backgroundColor: particle.isHeart ? 'transparent' : (
                            particle.lightning ? currentTheme.accent :
                                particle.roar ? currentTheme.secondary : currentTheme.primary
                        ),
                        boxShadow: particle.isHeart ? 'none' : `0 0 ${particle.size * 3}px ${particle.roar ? currentTheme.secondary : currentTheme.primary
                            }`,
                        fontSize: particle.isHeart ? `${particle.size * 6}px` : 'inherit',
                        color: particle.isHeart ? currentTheme.secondary : 'inherit',
                    }}
                >
                    {particle.isHeart && '💖'}
                </div>
            ))}

            {/* Ripples */}
            {ripples.map((ripple) => (
                <div
                    key={ripple.id}
                    className="fixed border-2 rounded-full pointer-events-none"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        transform: 'translate(-50%, -50%)',
                        width: `${ripple.size}px`,
                        height: `${ripple.size}px`,
                        opacity: ripple.life,
                        borderColor: currentTheme.primary,
                    }}
                />
            ))}

            {/* Ambient glow */}
            <div
                className="fixed w-32 h-32 rounded-full blur-3xl transition-all duration-200"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    transform: 'translate(-50%, -50%)',
                    background: `radial-gradient(circle, ${currentTheme.primary}08, transparent)`,
                }}
            />

            {/* Help Modal */}
            {showHelp && (
                <div className="fixed top-20 left-6 pointer-events-auto z-[10001]">
                    <div
                        className="relative backdrop-blur-lg rounded-xl p-6 font-mono text-sm shadow-2xl max-w-sm border"
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.85)',
                            borderColor: `${currentTheme.primary}50`,
                        }}
                    >
                        <div
                            className="absolute -top-0.5 -left-0.5 w-4 h-4 rounded-tl-xl"
                            style={{
                                borderLeft: `2px solid ${currentTheme.accent}`,
                                borderTop: `2px solid ${currentTheme.accent}`,
                            }}
                        />
                        <div
                            className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-tr-xl"
                            style={{
                                borderRight: `2px solid ${currentTheme.accent}`,
                                borderTop: `2px solid ${currentTheme.accent}`,
                            }}
                        />

                        <div
                            className="absolute top-0 left-6 right-6 h-px"
                            style={{
                                background: `linear-gradient(to right, transparent, ${currentTheme.primary}, transparent)`
                            }}
                        />

                        <button
                            onClick={() => setShowHelp(false)}
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-110 group"
                            style={{
                                backgroundColor: `${currentTheme.primary}20`,
                                borderColor: `${currentTheme.primary}40`,
                                border: '1px solid'
                            }}
                        >
                            <X
                                size={16}
                                style={{ color: currentTheme.primary }}
                                className="group-hover:rotate-90 transition-transform duration-200"
                            />
                        </button>

                        <div className="flex items-center gap-2 mb-4">
                            <Info
                                size={20}
                                style={{ color: currentTheme.accent }}
                                className="animate-pulse"
                            />
                            <div
                                className="text-lg font-bold"
                                style={{ color: currentTheme.primary }}
                            >
                                CURSOR INTERFACE
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="border-l-2 pl-3" style={{ borderColor: currentTheme.primary }}>
                                <div className="text-white font-semibold">CONTROLS</div>
                                <div className="text-gray-300 text-xs mt-1">
                                    <div><span className="text-white">C</span> - Cycle colors</div>
                                    <div><span className="text-white">M</span> - Change mode</div>
                                    <div><span className="text-white">R</span> - Reset effects</div>
                                    <div><span className="text-white">H</span> - Toggle help</div>
                                </div>
                            </div>

                            <div className="border-l-2 pl-3" style={{ borderColor: currentTheme.accent }}>
                                <div className="text-white font-semibold">CURRENT</div>
                                <div className="text-gray-300 text-xs mt-1">
                                    <div>Color: <span style={{ color: currentTheme.primary }}>{currentTheme.name}</span></div>
                                    <div>Mode: <span style={{ color: currentTheme.secondary }}>{interactionModes[interactionMode]}</span></div>
                                </div>
                            </div>

                            <div className="border-l-2 pl-3" style={{ borderColor: currentTheme.secondary }}>
                                <div className="text-white font-semibold">INTERACT</div>
                                <div className="text-gray-300 text-xs mt-1">
                                    Click anywhere to trigger effects
                                </div>
                            </div>
                        </div>

                        <div
                            className="absolute bottom-0 left-6 right-6 h-px"
                            style={{
                                background: `linear-gradient(to right, transparent, ${currentTheme.primary}, transparent)`
                            }}
                        />

                        <div
                            className="absolute -bottom-0.5 -left-0.5 w-4 h-4 rounded-bl-xl"
                            style={{
                                borderLeft: `2px solid ${currentTheme.accent}`,
                                borderBottom: `2px solid ${currentTheme.accent}`,
                            }}
                        />
                        <div
                            className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-br-xl"
                            style={{
                                borderRight: `2px solid ${currentTheme.accent}`,
                                borderBottom: `2px solid ${currentTheme.accent}`,
                            }}
                        />
                    </div>
                </div>
            )}

            {/* Status indicators */}
            <div className="fixed top-6 right-6 pointer-events-auto z-[10001]">
                <div className="flex flex-col gap-2">
                    <div
                        className="px-3 py-1 rounded-full text-xs font-mono backdrop-blur-sm border"
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            borderColor: `${currentTheme.primary}50`,
                            color: currentTheme.primary
                        }}
                    >
                        {currentTheme.name}
                    </div>
                    <div
                        className="px-3 py-1 rounded-full text-xs font-mono backdrop-blur-sm border"
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            borderColor: `${currentTheme.accent}50`,
                            color: currentTheme.accent
                        }}
                    >
                        {interactionMode}
                    </div>
                </div>
            </div>

            {/* Custom keyframes for animations */}
            <style jsx>{`
        @keyframes scan {
          0%, 100% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
        }
        
        @keyframes scanVertical {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
        </div>
    );
};

export default FuturisticCursor;