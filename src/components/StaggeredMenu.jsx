import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
    { id: 'tech',        label: 'Audio Dev C++',   num: '01', sub: 'Plugins & DSP' },
    { id: 'frontend',    label: 'Frontend',         num: '02', sub: 'React & web' },
    { id: 'creative',    label: 'Creative Dev',     num: '03', sub: 'Generative & AV' },
    { id: 'career',      label: 'Studies / Career', num: '04', sub: 'Education & work' },
    { id: 'music',       label: 'Music',            num: '05', sub: 'Projects & bands' },
    { id: 'photography', label: 'Photo',            num: '06', sub: '35mm film' },
];

const StaggeredMenu = ({ onSectionSelect, activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (id) => {
        setIsOpen(false);
        onSectionSelect(id);
    };

    return (
        <>
            {/* Toggle button — sits inside the top banner strip */}
            <button
                onClick={() => setIsOpen(v => !v)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                className="fixed top-[5px] left-4 z-[70] w-7 h-7 bg-bg flex items-center justify-center hover:bg-white/80 transition-colors"
            >
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="font-mono text-base leading-none select-none text-text"
                    style={{ display: 'inline-block' }}
                >
                    +
                </motion.span>
            </button>

            {/* Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[55] bg-black/25 backdrop-blur-[2px]"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        key="panel"
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', stiffness: 340, damping: 32 }}
                        className="fixed left-0 top-0 bottom-0 z-[60] w-[min(400px,82vw)] bg-sidebar flex flex-col overflow-hidden"
                    >
                        {/* Name / identity */}
                        <div className="px-10 pt-10 pb-8 border-b border-white/10">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.08 }}
                                className="font-mono text-[9px] uppercase tracking-[0.35em] text-white/20 block mb-5"
                            >
                                Portfolio — 2024
                            </motion.span>

                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                onClick={() => { setIsOpen(false); onSectionSelect(null); }}
                                className="text-left"
                            >
                                <h1 className="font-heading text-[2.6rem] leading-[0.88] text-white hover:text-white/60 transition-colors">
                                    MARCO<br />GONZ<span className="text-white/30">Á</span>LEZ<br />PÉREZ
                                </h1>
                            </motion.button>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.18 }}
                                className="font-mono text-[9px] uppercase tracking-widest text-white/25 mt-5 leading-[1.9]"
                            >
                                Audio Programmer C++ · Frontend<br />
                                Creative Developer · Musician
                            </motion.p>
                        </div>

                        {/* Nav items — staggered */}
                        <nav className="flex-1 flex flex-col justify-center px-10 py-4 overflow-y-auto">
                            {sections.map((section, i) => (
                                <motion.button
                                    key={section.id}
                                    initial={{ opacity: 0, x: -18 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: 0.15 + i * 0.06,
                                        duration: 0.45,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    onClick={() => handleSelect(section.id)}
                                    className={`flex items-baseline gap-5 py-[14px] border-b border-white/[0.08] text-left group transition-colors duration-150 ${
                                        activeSection === section.id
                                            ? 'text-white'
                                            : 'text-white/35 hover:text-white'
                                    }`}
                                >
                                    <span className="font-mono text-[9px] text-white/15 group-hover:text-white/30 transition-colors w-5 shrink-0 tabular-nums">
                                        {section.num}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <span style={{ fontFamily: 'var(--font-geist)' }} className="text-[1.6rem] font-semibold tracking-tight leading-none block">
                                            {section.label}
                                        </span>
                                        <span className="font-mono text-[8.5px] uppercase tracking-widest text-white/15 group-hover:text-white/25 block mt-[3px] transition-colors">
                                            {section.sub}
                                        </span>
                                    </div>
                                    <motion.span
                                        animate={{ opacity: activeSection === section.id ? 1 : 0, x: activeSection === section.id ? 0 : -6 }}
                                        className="font-mono text-[11px] text-white/40 shrink-0"
                                    >
                                        →
                                    </motion.span>
                                </motion.button>
                            ))}
                        </nav>

                        {/* Footer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.55 }}
                            className="px-10 py-5 border-t border-white/10 flex items-center gap-2"
                        >
                            <div className="w-1.5 h-1.5 bg-white/50" />
                            <span className="font-mono text-[9px] uppercase tracking-widest text-white/20">
                                Available for work
                            </span>
                        </motion.div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
};

export default StaggeredMenu;
