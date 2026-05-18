import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Audio Plugin Framework',
        description: 'A modern framework for building VST/AU audio plugins with React-like component architecture.',
        tech: ['C++', 'JUCE', 'DSP'],
        num: '001',
    },
    {
        title: 'Real-time Audio Visualizer',
        description: 'WebGL-based audio visualization tool with customizable effects and MIDI control.',
        tech: ['JavaScript', 'WebGL', 'Web Audio API'],
        num: '002',
    },
    {
        title: 'Machine Learning Synth',
        description: 'Experimental synthesizer using ML models to generate unique timbres and textures.',
        tech: ['Python', 'TensorFlow', 'Max/MSP'],
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
                Audio plugins, DSP systems, and C++ projects for music production.
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
