import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const works = [
    {
        title: 'Visual for Live Concert — Hydra',
        description: 'Real-time visuals performed live using Hydra, a browser-based video synth. Feedback loops, shader functions, and OSC messages from Ableton Live drive the visuals in sync with the music.',
        tags: ['Hydra', 'Live Coding', 'AV Performance', 'OSC'],
        num: '001',
        video: '/hydra-live.mp4',
    },
    {
        title: 'Generative Audio-Visual System',
        description: 'A system that generates real-time visuals driven by audio analysis — FFT bands map to shader parameters, creating evolving abstract compositions.',
        tags: ['Generative', 'WebGL', 'Tone.js'],
        num: '002',
    },
    {
        title: 'Step Sequencer UI',
        description: 'Tactile, hardware-inspired step sequencer built in the browser. Grid interaction, BPM control, polyrhythmic patterns — all synthesized with the Web Audio API.',
        tags: ['Web Audio', 'React', 'UI Design'],
        num: '003',
    },
    {
        title: 'Typography in Motion',
        description: 'Experimental typographic animations using GSAP and SVG path morphing. Explores letterforms as expressive, animated objects rather than static glyphs.',
        tags: ['GSAP', 'SVG', 'Typography'],
        num: '004',
    },
    {
        title: 'Noise Texture Generator',
        description: 'Canvas-based procedural noise explorer — Perlin, Simplex, Voronoi — with real-time parameter control and PNG export for use in design work.',
        tags: ['Canvas 2D', 'Algorithms', 'Design Tool'],
        num: '005',
    },
];

const disciplines = [
    'Generative Art', 'Creative Coding', 'Audio-Visual',
    'Motion Design', 'Procedural Systems', 'Experimental UI',
];

const VideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(true);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (playing) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setPlaying(v => !v);
    };

    const toggleMute = (e) => {
        e.stopPropagation();
        if (!videoRef.current) return;
        videoRef.current.muted = !muted;
        setMuted(v => !v);
    };

    return (
        <div className="relative bg-black border border-border overflow-hidden group/video">
            <video
                ref={videoRef}
                src={src}
                muted={muted}
                loop
                playsInline
                onClick={togglePlay}
                className="w-full aspect-video object-cover cursor-pointer"
            />

            {/* Overlay controls */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${playing ? 'opacity-0 group-hover/video:opacity-100' : 'opacity-100'}`}>
                <button
                    onClick={togglePlay}
                    className="w-14 h-14 bg-bg/90 flex items-center justify-center hover:bg-bg transition-colors"
                    aria-label={playing ? 'Pause' : 'Play'}
                >
                    <span className="font-mono text-xs text-text">
                        {playing ? '⏸' : '▶'}
                    </span>
                </button>
            </div>

            {/* Bottom bar */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-black/70 opacity-0 group-hover/video:opacity-100 transition-opacity">
                <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">
                    {playing ? 'Playing' : 'Paused'}
                </span>
                <button
                    onClick={toggleMute}
                    className="font-mono text-[9px] uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                >
                    {muted ? 'Unmute' : 'Mute'}
                </button>
            </div>
        </div>
    );
};

const CreativeSection = () => {
    return (
        <div>
            <div className="flex items-end justify-between mb-12 pb-4 border-b border-border">
                <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted block mb-2">03 — Section</span>
                    <h2 className="text-5xl md:text-7xl font-heading leading-none">CREATIVE<br />DEV</h2>
                </div>
                <span className="font-mono text-xs text-muted hidden md:block">{works.length} works</span>
            </div>

            <p className="font-body text-sm text-text/50 mb-10 max-w-md leading-relaxed uppercase tracking-wide">
                Experiments at the edge of code, sound, and visual form. No briefs, no clients — just curiosity.
            </p>

            {/* Disciplines */}
            <div className="border border-border mb-12 overflow-hidden">
                <div className="flex gap-0 border-b border-border overflow-x-auto">
                    {disciplines.map((d, i) => (
                        <span
                            key={d}
                            className={`font-mono text-[10px] uppercase tracking-widest text-muted px-5 py-3 whitespace-nowrap ${i < disciplines.length - 1 ? 'border-r border-border' : ''}`}
                        >
                            {d}
                        </span>
                    ))}
                </div>
                <div className="p-5">
                    <p className="font-body text-xs text-text/40 leading-relaxed">
                        A creative developer sits between engineer and artist — building things that don't fit neatly
                        into either category. These are the projects that live there.
                    </p>
                </div>
            </div>

            {/* Works list */}
            <div className="space-y-0 border-t border-border">
                {works.map((work, index) => (
                    <motion.div
                        key={work.title}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.07 }}
                        className="border-b border-border relative"
                    >
                        {/* Video embed — full width, above the text row */}
                        {work.video && (
                            <div className="border-b border-border">
                                <VideoPlayer src={work.video} />
                            </div>
                        )}

                        {/* Text row */}
                        <div className="py-8 px-2 group hover:bg-card transition-colors">
                            <div className="flex items-start gap-6">
                                <span className="font-mono text-[10px] text-muted pt-1 shrink-0">{work.num}</span>
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-heading group-hover:opacity-60 transition-opacity leading-tight mb-3">
                                        {work.title}
                                    </h3>
                                    <p className="text-sm text-text/50 leading-relaxed font-body mb-5 max-w-xl">
                                        {work.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {work.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-text text-bg font-mono text-[10px] uppercase tracking-widest group-hover:bg-bg group-hover:text-text group-hover:border group-hover:border-text transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-text scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CreativeSection;
