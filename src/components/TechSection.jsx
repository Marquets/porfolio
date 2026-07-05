import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
    {
        title: "Heritage Audio's Plugin Collection",
        year: '2024',
        description: 'A suite of audio plugins emulating Heritage Audio\'s classic analog hardware — EQ, compressors, guitar and bass amp simulators. Built in C++ with JUCE, combining DSP circuit modelling with ML-driven amp emulation via TensorFlow. Shipped with iLok licensing. Supports macOS and Windows.',
        tech: ['C++', 'JUCE', 'DSP', 'TensorFlow', 'iLok'],
        image: '/heritage-plugins.png',
        imageClass: 'object-cover object-[center_18%] scale-110',
    },
    {
        title: 'i73 Mixer App · Heritage Audio',
        year: '2023',
        description: 'A C++ desktop application that controls Heritage Audio\'s i73 Pro hardware interfaces over USB — the software backbone of their first digital product line. Built from the ground up as part of a three-year R&D project. Supports macOS and Windows.',
        tech: ['C++', 'JUCE', 'USB / HID'],
        image: '/heritage-mixer-app.jpg',
        imageClass: 'object-cover object-top',
    },
    {
        title: 'Exquis · Dualo by Intuitive Instruments',
        year: '2022',
        description: 'Contributed to the software stack of the Exquis, an expressive MPE MIDI controller made in France. Researched and built a custom Linux image using the Yocto Project on Raspberry Pi — a minimal OS that boots directly into a JUCE audio host.',
        tech: ['C++', 'JUCE', 'Yocto', 'Linux', 'Raspberry Pi'],
        image: '/dualo-electronics.jpg',
    },
];

// Desktop card — image left, info right
const ProjectCard = ({ project }) => (
    <div className="flex h-full group overflow-hidden border border-border" style={{ borderRadius: '24px' }}>
        <div className="w-[55%] shrink-0 overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ${project.imageClass ?? 'object-cover'}`}
            />
        </div>
        <div className="flex flex-col justify-between p-8 bg-card flex-1 min-w-0">
            <div className="flex flex-col gap-3">
                <span className="font-mono text-xs text-muted">({project.year})</span>
                <h3 className="text-2xl font-heading leading-tight">{project.title}</h3>
                <p className="text-sm text-text/50 leading-relaxed font-body">
                    {project.description}
                </p>
            </div>
            <div className="flex flex-col gap-1 pt-4">
                {project.tech.map((tag) => (
                    <span key={tag} className="font-mono text-xs text-text/40 tracking-wide">{tag}</span>
                ))}
            </div>
        </div>
    </div>
);

// Mobile card — image on top, info below
const MobileProjectCard = ({ project }) => (
    <div className="border border-border overflow-hidden h-full" style={{ borderRadius: '20px' }}>
        <div className="aspect-[16/10] overflow-hidden bg-card">
            <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full ${project.imageClass ?? 'object-cover'}`}
            />
        </div>
        <div className="flex flex-col gap-3 p-5 bg-card">
            <span className="font-mono text-xs text-muted">({project.year})</span>
            <h3 className="text-xl font-heading leading-tight">{project.title}</h3>
            <p className="text-sm text-text/55 leading-relaxed font-body">{project.description}</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1">
                {project.tech.map((tag) => (
                    <span key={tag} className="font-mono text-xs text-text/40 tracking-wide">{tag}</span>
                ))}
            </div>
        </div>
    </div>
);

const TechSection = () => {
    const [[index, direction], setIndex] = useState([0, 0]);

    const paginate = (dir) => {
        setIndex(([prev]) => [(prev + dir + projects.length) % projects.length, dir]);
    };

    const goTo = (i) => {
        setIndex(([prev]) => [i, i > prev ? 1 : -1]);
    };

    const project = projects[index];

    return (
        <div>
            <div className="flex items-end justify-between mb-4 pb-4 border-b border-border">
                <h2 className="text-5xl md:text-8xl font-heading leading-none">Audio Programming</h2>
            </div>

            <p className="font-body text-sm text-text/50 mb-8 max-w-md leading-relaxed uppercase tracking-wide">
                Professional audio software built in C++ — plugins, desktop applications, and embedded systems.
            </p>

            {/* Carousel */}
            <div className="relative overflow-hidden">
                <div className="relative md:h-[420px]">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={project.title}
                            custom={direction}
                            initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="md:absolute md:inset-0"
                        >
                            <div className="hidden md:block h-full">
                                <ProjectCard project={project} />
                            </div>
                            <div className="md:hidden">
                                <MobileProjectCard project={project} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2">
                    <button
                        onClick={() => paginate(-1)}
                        aria-label="Previous project"
                        className="w-11 h-11 flex items-center justify-center border border-border text-text/70 hover:bg-card hover:text-text transition-colors"
                        style={{ borderRadius: '12px' }}
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        aria-label="Next project"
                        className="w-11 h-11 flex items-center justify-center border border-border text-text/70 hover:bg-card hover:text-text transition-colors"
                        style={{ borderRadius: '12px' }}
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

                <div className="flex items-center gap-2">
                    {projects.map((p, i) => (
                        <button
                            key={p.title}
                            onClick={() => goTo(i)}
                            aria-label={`Go to project ${i + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                i === index ? 'w-8 bg-text' : 'w-1.5 bg-border hover:bg-text/40'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechSection;
