import React from 'react';
import { motion } from 'framer-motion';

const Star = ({ size = 80, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" className={className}>
        <path d="M40 0 L43 37 L80 40 L43 43 L40 80 L37 43 L0 40 L37 37 Z" fill="currentColor" />
    </svg>
);

const Badge = ({ children }) => (
    <div className="relative w-20 h-20 shrink-0">
        <svg viewBox="0 0 80 80" className="w-full h-full animate-[spin_12s_linear_infinite]">
            <path
                id="circle"
                d="M 40,40 m -28,0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0"
                fill="none"
            />
            <text className="font-mono" fontSize="7.5" fill="currentColor" letterSpacing="2">
                <textPath href="#circle">AVAILABLE · FOR · WORK · 2026 · </textPath>
            </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-text" />
        </div>
    </div>
);

const roles = [
    { label: 'Audio / C++',    sub: 'plugins & DSP' },
    { label: 'Frontend',       sub: 'React · Next.js' },
    { label: 'Creative Dev',   sub: 'generative & AV' },
];

const HomeSection = ({ onSectionSelect }) => {
    return (
        <div className="flex flex-col min-h-[calc(100vh-6rem)]">

            {/* ── TOP ROW ─────────────────────────────────────────────── */}
            <div className="grid grid-cols-[auto_1fr_auto] border-b border-border">

                {/* Star cell */}
                <div className="border-r border-border p-6 flex items-center justify-center w-24">
                    <Star size={52} className="text-text" />
                </div>

                {/* Headline cell */}
                <div className="border-r border-border p-6 flex flex-col justify-center">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted mb-2">
                        Portfolio — 2026
                    </span>
                    <p className="font-body text-sm text-text/60 max-w-sm leading-relaxed">
                        Audio programmer, frontend developer, and creative coder
                        based wherever the work takes me.
                    </p>
                </div>

                {/* Role tabs */}
                <div className="flex divide-x divide-border">
                    {roles.map((r) => (
                        <button
                            key={r.label}
                            onClick={() => onSectionSelect(r.label === 'Audio / C++' ? 'tech' : r.label === 'Frontend' ? 'frontend' : 'creative')}
                            className="px-5 py-4 text-left hover:bg-card transition-colors group hidden md:block"
                        >
                            <p className="font-body text-xs font-medium text-text group-hover:opacity-60 transition-colors whitespace-nowrap">
                                {r.label}
                            </p>
                            <p className="font-mono text-[9px] text-muted mt-0.5 whitespace-nowrap">
                                {r.sub}
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            {/* ── MIDDLE ROW ──────────────────────────────────────────── */}
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] flex-1 border-b border-border">

                {/* Vertical rotated text */}
                <div className="border-r border-border w-10 hidden md:flex items-center justify-center">
                    <span
                        className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted whitespace-nowrap"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                        Code · Sound · Image
                    </span>
                </div>

                {/* Main content cell */}
                <div className="p-8 md:p-12 flex flex-col justify-between border-r border-border">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="font-heading text-5xl md:text-6xl leading-tight mb-6"
                        >
                            Discovery<br />
                            in code<br />
                            &amp; sound
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15, duration: 0.5 }}
                            className="font-body text-sm text-text/50 leading-relaxed max-w-xs"
                        >
                            Building audio plugins in C++, web experiences in React,
                            and generative AV systems in the browser. Also plays guitar
                            and shoots 35mm film.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-6 mt-10"
                    >
                        <Badge />
                        <div>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Open to</p>
                            <p className="font-body text-sm text-text mt-0.5">Freelance · Collaboration</p>
                        </div>
                    </motion.div>
                </div>

                {/* Photo + side card */}
                <div className="flex flex-col w-full md:w-64 divide-y divide-border">
                    <div className="flex-1 overflow-hidden bg-card min-h-48">
                        <img
                            src="/photo3.jpg"
                            alt="Marco"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div className="p-5 border-t border-border">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1">
                            Currently working on
                        </p>
                        <p className="font-body text-sm text-text/80 leading-relaxed">
                            i73 plugin suite<br />Heritage Audio
                        </p>
                    </div>
                </div>
            </div>

            {/* ── GIANT NAME ROW ──────────────────────────────────────── */}
            <div className="border-b border-border overflow-hidden relative flex items-center bg-text">
                <motion.div
                    initial={{ x: '3%' }}
                    animate={{ x: '-2%' }}
                    transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
                    className="flex items-center gap-4 whitespace-nowrap py-2 pl-4"
                >
                    <span className="font-heading text-[11vw] md:text-[9vw] leading-none text-bg">
                        !MARCO!
                    </span>
                    <Star size={64} className="text-accent-primary shrink-0" />
                    <span className="font-heading text-[11vw] md:text-[9vw] leading-none text-bg/20">
                        GONZÁLEZ
                    </span>
                    <Star size={64} className="text-bg/20 shrink-0" />
                    <span className="font-heading text-[11vw] md:text-[9vw] leading-none text-bg">
                        PÉREZ
                    </span>
                    <Star size={64} className="text-accent-primary shrink-0" />
                </motion.div>
            </div>

            {/* ── BOTTOM ROW ──────────────────────────────────────────── */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">

                <div className="p-8">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-4">
                        What I build
                    </span>
                    <ul className="space-y-2">
                        {['VST / AU / AAX Plugins', 'Web Audio Tools', 'React Interfaces', 'Generative Systems', 'AV Performances'].map(item => (
                            <li key={item} className="font-body text-sm text-text/70 flex items-center gap-2">
                                <span className="w-1 h-1 bg-text shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="p-8 border-t border-border md:border-t-0">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-4">
                        Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                        {['C++', 'JUCE', 'React', 'TypeScript', 'Next.js', 'Tone.js', 'WebGL', 'GSAP', 'Tailwind'].map(t => (
                            <span key={t} className="font-mono text-[10px] uppercase border border-border px-2 py-1 text-text/60">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-8 border-t border-border md:border-t-0 flex flex-col justify-between">
                    <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-4">
                            Also into
                        </span>
                        <p className="font-body text-sm text-text/50 leading-relaxed">
                            Garage psych, 35mm film,
                            modular synthesis, and
                            the occasional bad idea
                            that turns into a good project.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;
