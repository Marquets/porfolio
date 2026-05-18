import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Portfolio Website',
        description: 'This very site. Built with React, Vite, Tailwind CSS v4, and Framer Motion. Features a live audio playground powered by Tone.js.',
        tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Tone.js'],
        num: '001',
    },
    {
        title: 'Interactive Audio Visualizer',
        description: 'WebGL-based real-time audio visualization driven by the Web Audio API. Customizable shaders and MIDI-controllable parameters.',
        tech: ['JavaScript', 'WebGL', 'Web Audio API', 'GLSL'],
        num: '002',
    },
    {
        title: 'Band Website — Mucho Mungo',
        description: 'Full band website with embedded Bandcamp player, tour dates, and a custom CMS for releases and press material.',
        tech: ['Next.js', 'TypeScript', 'Sanity CMS', 'Tailwind CSS'],
        num: '003',
    },
];

const skills = [
    { label: 'Languages',   items: ['TypeScript', 'JavaScript', 'HTML', 'CSS'] },
    { label: 'Frameworks',  items: ['React', 'Next.js', 'Vite'] },
    { label: 'Styling',     items: ['Tailwind CSS', 'Framer Motion', 'GSAP'] },
    { label: 'Tools',       items: ['Git', 'Figma', 'Tone.js', 'Web Audio API'] },
];

const FrontendSection = () => {
    return (
        <div>
            <div className="flex items-end justify-between mb-12 pb-4 border-b border-border">
                <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted block mb-2">02 — Section</span>
                    <h2 className="text-6xl md:text-8xl font-heading leading-none">FRONTEND</h2>
                </div>
                <span className="font-mono text-xs text-muted hidden md:block">{projects.length} projects</span>
            </div>

            <p className="font-body text-sm text-text/50 mb-10 max-w-md leading-relaxed uppercase tracking-wide">
                Web interfaces that live at the intersection of design, interaction, and sound.
            </p>

            {/* Skills grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border mb-12">
                {skills.map((group, i) => (
                    <div key={group.label} className={`p-5 ${i < skills.length - 1 ? 'border-r border-border' : ''}`}>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-3">
                            {group.label}
                        </span>
                        <ul className="space-y-1">
                            {group.items.map(item => (
                                <li key={item} className="font-body text-sm text-text/80">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Projects */}
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

                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-text scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FrontendSection;
