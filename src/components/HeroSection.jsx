import React from 'react';
import { motion } from 'framer-motion';

const WavyShape = () => (
    <svg className="absolute top-20 right-10 w-64 h-64 opacity-90" viewBox="0 0 200 200" fill="none">
        <path
            d="M50,100 Q70,50 100,70 T150,100 Q130,150 100,130 T50,100"
            fill="#ff5722"
            stroke="#1a1a1a"
            strokeWidth="3"
        />
    </svg>
);

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-bg via-white to-accent-secondary/20 px-4">
            <WavyShape />

            {/* Yellow banner at top */}
            <div className="absolute top-0 left-0 right-0 bg-accent-secondary py-2 text-center">
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-text">
                    Audio Developer · Musician · Photographer
                </p>
            </div>

            <div className="z-10 text-center max-w-5xl mt-12">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl md:text-9xl font-heading text-white leading-none mb-6"
                    style={{
                        textShadow: '4px 4px 0px #1a1a1a, 8px 8px 0px rgba(0,0,0,0.2)',
                        WebkitTextStroke: '2px #1a1a1a'
                    }}
                >
                    MARCO
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-heading text-white leading-none"
                    style={{
                        textShadow: '4px 4px 0px #1a1a1a, 8px 8px 0px rgba(0,0,0,0.2)',
                        WebkitTextStroke: '2px #1a1a1a'
                    }}
                >
                    GONZÁLEZ
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-12"
                >
                    <a
                        href="#music"
                        className="inline-block px-8 py-4 bg-accent-primary text-white font-bold text-lg uppercase rounded-full hover:bg-text transition-all transform hover:scale-105 shadow-lg"
                    >
                        Explore My Work
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
