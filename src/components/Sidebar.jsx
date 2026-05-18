import React from 'react';
import { motion } from 'framer-motion';

const sections = [
    { id: 'music',       label: 'Music',             num: '01' },
    { id: 'tech',        label: 'Audio / C++',        num: '02' },
    { id: 'frontend',    label: 'Frontend',           num: '03' },
    { id: 'creative',    label: 'Creative Dev',       num: '04' },
    { id: 'career',      label: 'Career',             num: '05' },
    { id: 'photography', label: 'Photography',        num: '06' },
];

const Sidebar = ({ onSectionSelect, activeSection }) => {
    return (
        <aside className="w-full lg:w-[26%] bg-sidebar min-h-0 lg:min-h-[calc(100vh-2.25rem)] m-4 lg:ml-6 lg:mr-0 lg:my-4 flex flex-col sticky top-14 overflow-hidden border border-white/5">
            {/* Top section: identity */}
            <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                    <div className="mb-1">
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                            Portfolio
                        </span>
                    </div>

                    <button
                        onClick={() => onSectionSelect('playground')}
                        className="text-left group"
                    >
                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-heading leading-[0.9] text-white mb-1 group-hover:text-accent-primary transition-colors duration-200">
                            MARCO<br />
                            GONZ<span className="text-accent-primary">Á</span>LEZ<br />
                            PÉREZ
                        </h1>
                    </button>

                    <div className="mt-6 border-t border-white/10 pt-5">
                        <p className="font-mono text-[11px] leading-relaxed text-white/40 uppercase tracking-widest">
                            Audio Programmer C++<br />
                            Frontend Developer<br />
                            Creative Developer<br />
                            Musician · Photographer
                        </p>
                    </div>
                </div>

                {/* Nav */}
                <nav className="mt-10">
                    <div className="mb-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">
                            Navigate
                        </span>
                    </div>
                    <div className="space-y-0 border-t border-white/10">
                        {sections.map((section) => {
                            const isActive = activeSection === section.id;
                            return (
                                <motion.button
                                    key={section.id}
                                    onClick={() => onSectionSelect(section.id)}
                                    className={`flex items-center justify-between w-full py-4 border-b border-white/10 group transition-colors duration-150 ${
                                        isActive ? 'text-accent-primary' : 'text-white/50 hover:text-white'
                                    }`}
                                    whileTap={{ x: 4 }}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="font-mono text-[10px] text-white/20 group-hover:text-white/40 transition-colors">
                                            {section.num}
                                        </span>
                                        <span className="font-heading text-2xl tracking-widest">
                                            {section.label.toUpperCase()}
                                        </span>
                                    </div>
                                    <motion.span
                                        animate={{ x: isActive ? 0 : -4, opacity: isActive ? 1 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="text-accent-primary font-mono text-xs"
                                    >
                                        →
                                    </motion.span>
                                </motion.button>
                            );
                        })}
                    </div>
                </nav>
            </div>

            {/* Bottom bar */}
            <div className="px-8 lg:px-10 py-5 border-t border-white/10">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-primary" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">
                        Available for work
                    </span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
