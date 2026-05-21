import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'i73 Plugin Suite · Heritage Audio',
        description: 'A suite of audio plugins emulating Heritage Audio\'s classic analog hardware — EQ, compressors, guitar and bass amp simulators. Built in C++ with JUCE, combining DSP circuit modelling with ML-driven amp emulation via TensorFlow. Shipped with iLok licensing. Supports macOS and Windows.',
        tech: ['C++', 'JUCE', 'DSP', 'TensorFlow', 'iLok'],
        num: '001',
    },
    {
        title: 'i73 Mixer App · Heritage Audio',
        description: 'A C++ desktop application that controls Heritage Audio\'s i73 Pro hardware interfaces over USB — the software backbone of their first digital product line. Built from the ground up as part of a three-year R&D project. Supports macOS and Windows.',
        tech: ['C++', 'JUCE', 'USB / HID'],
        num: '002',
    },
    {
        title: 'Exquis · Dualo by Intuitive Instruments',
        description: 'Contributed to the software stack of the Exquis, an expressive MPE MIDI controller made in France. Researched and built a custom Linux image using the Yocto Project on Raspberry Pi — a minimal OS that boots directly into a JUCE audio host.',
        tech: ['C++', 'JUCE', 'Yocto', 'Linux', 'Raspberry Pi'],
        num: '003',
    },
];

const TechSection = () => {
    return (
        <div>
            {/* Section header */}
            <div className="flex items-end justify-between mb-12 pb-4 border-b border-border">
                <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted block mb-2">01 — Section</span>
                    <h2 className="text-6xl md:text-8xl font-heading leading-none">AUDIO DEV C++</h2>
                </div>
                <span className="font-mono text-xs text-muted hidden md:block">
                    {projects.length} projects
                </span>
            </div>

            <p className="font-body text-sm text-text/50 mb-10 max-w-md leading-relaxed uppercase tracking-wide">
                Professional audio software built in C++ — plugins, desktop applications, and embedded systems.
            </p>

            <div className="grid grid-cols-1 gap-0 border-t border-l border-border">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="border-b border-r border-border p-8 group hover:bg-card transition-colors relative"
                    >
                        <div className="flex items-start justify-between gap-4 mb-5">
                            <span className="font-mono text-[10px] text-muted">{project.num}</span>
                            <ExternalLink size={12} className="text-muted opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-heading mb-4 group-hover:opacity-60 transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-sm text-text/50 mb-6 leading-relaxed font-body">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 border border-border font-mono text-[10px] uppercase tracking-widest text-text/60 group-hover:border-text/30 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Hover accent line */}
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-text scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TechSection;
