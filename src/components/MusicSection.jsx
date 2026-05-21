import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';

const bands = [
    {
        name: 'Mucho Mungo',
        url: 'https://muchomungo.bandcamp.com/album/moth-bath',
        description: 'My main project and band. Our first effort in releasing music, showcasing our garage-psych sound.',
        role: 'Band Member',
        platform: 'Bandcamp',
        album: 'Moth Bath',
        year: '2023',
    },
    {
        name: 'Good Night Sleep',
        url: 'https://open.spotify.com/artist/6tvNxwS3ZSBqOSw9htX4Qg',
        description: 'A neo-folk collaborative project. I play guitar.',
        role: 'Guitarist',
        platform: 'Spotify',
        year: '2022',
    },
    {
        name: 'Dim Moon',
        url: 'https://dimmoon.bandcamp.com/',
        description: 'My personal project where I have complete creative liberty to experiment and express myself.',
        role: 'Solo Artist',
        platform: 'Bandcamp',
        album: "Child's Lament",
        year: '2021',
    },
    {
        name: 'SANTA ANA',
        url: 'https://open.spotify.com/artist/4dOm7N5bjzUs0UwQHH8SZd',
        description: "A friend's project that I'm producing. Three singles out: NIÑA GRITANDO AL CIELO, Atentamente, ÉL and sobre su VIENTRE.",
        role: 'Producer',
        platform: 'Spotify',
        year: '2025',
    },
];

const MusicSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
        <div>
            {/* Section header */}
            <div className="flex items-end justify-between mb-12 pb-4 border-b border-border">
                <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted block mb-2">05 — Section</span>
                    <h2 className="text-6xl md:text-8xl font-heading leading-none">MUSIC</h2>
                </div>
                <span className="font-mono text-xs text-muted hidden md:block">
                    {bands.length} projects
                </span>
            </div>

            <div className="mb-10 overflow-hidden border border-border">
                <img
                    src="/music-studio.jpg"
                    alt="Recording session"
                    className="w-full h-64 object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>

            <p className="font-body text-sm text-text/50 mb-10 max-w-md leading-relaxed uppercase tracking-wide">
                My musical journey.
            </p>

            <div className="space-y-0 border-t border-border">
                {bands.map((band, index) => (
                    <motion.div
                        key={band.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.07 }}
                        className="border-b border-border"
                    >
                        <button
                            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                            className="w-full py-6 flex items-center justify-between text-left group hover:bg-card transition-colors px-2"
                        >
                            <div className="flex items-baseline gap-6">
                                <span className="font-mono text-[10px] text-muted w-5">{String(index + 1).padStart(2, '0')}</span>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-heading group-hover:opacity-60 transition-colors">
                                        {band.name}
                                    </h3>
                                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted mt-0.5">
                                        {band.role} · {band.year}
                                    </p>
                                </div>
                            </div>
                            <motion.div
                                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                <ChevronDown size={16} className="text-muted group-hover:text-text transition-colors" />
                            </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                            {expandedIndex === index && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-2 pb-8 pt-2 ml-11 flex flex-col sm:flex-row gap-6 items-start">
                                        <p className="text-sm text-text/60 leading-relaxed flex-1 max-w-md font-body">
                                            {band.description}
                                        </p>
                                        <div className="flex flex-col gap-2 shrink-0">
                                            <a
                                                href={band.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-text text-bg hover:opacity-60 transition-all font-mono text-xs uppercase tracking-widest"
                                            >
                                                <Play size={12} />
                                                {band.platform}
                                            </a>
                                            {band.album && (
                                                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                                                    ↳ {band.album}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MusicSection;
