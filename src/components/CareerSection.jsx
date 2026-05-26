import React from 'react';
import { motion } from 'framer-motion';

const jobs = [
    {
        company: 'Heritage Audio',
        role: 'Audio Programmer — R&D',
        period: '2021 — Present',
        location: 'Madrid',
        description: 'Heritage Audio wanted to go digital. I helped build that from scratch — the i73 Mixer app in C++, communicating via USB with their hardware interfaces, and a plugin suite emulating their analog gear: EQ, compressors, guitar and bass amps. Three years of R&D from zero to shipped. JUCE, iLok, DSP circuit emulation, and ML-driven amp modelling with TensorFlow. Attended ADC 2023, London.',
    },
    {
        company: 'Dualo by Intuitive Instruments',
        role: 'Software Developer Intern',
        period: 'Feb — Jul 2021',
        location: 'Paris',
        description: 'Researched and prototyped an embedded audio system for the Exquis — an expressive MPE MIDI controller designed and assembled in France. Used the Yocto Project to build a custom Linux image on Raspberry Pi, optimized to boot directly into a JUCE audio host with a plugin loaded. A minimal OS that woke up as a synthesizer. Also ran hardware testing on the controller\'s pressure-sensitive sensors — from raw sensor evaluation to comparing silicone button prototypes to find the right feel.',
    },
];

const education = [
    {
        institution: 'Aalborg University',
        degree: 'M.Sc. Sound and Music Computing',
        period: '2019 — 2021',
        location: 'Copenhagen',
        description: 'A master\'s for people who live at the intersection of music and engineering. Projects included a physical model of a Rhodes piano, a multiplayer instrument, and an augmented guitar with Teensy 4.0. Paper presented at SMC 2020. Thesis: designing a new gestural controller inspired by string instruments.',
    },
    {
        institution: 'Universidad Complutense',
        degree: 'B.Sc. Computer Science Engineering',
        period: '2014 — 2019',
        location: 'Madrid',
        description: 'Computer science fundamentals. Final project: a learning tool for multitrack audio mixing.',
    },
];

const Row = ({ left, role, period, location, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="border-b border-border py-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 group hover:bg-card px-2 transition-colors"
    >
        <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-1">
                {period}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted/60 block mb-3">
                {location}
            </span>
            <h3 className="font-heading text-2xl group-hover:opacity-60 transition-colors">
                {left.toUpperCase()}
            </h3>
        </div>

        <div className="md:border-l border-border md:pl-8">
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
                {role}
            </p>
            <p className="text-sm text-text/60 leading-relaxed font-body">
                {description}
            </p>
        </div>
    </motion.div>
);

const CareerSection = () => {
    return (
        <div>
            <div className="flex items-end justify-between mb-12 pb-4 border-b border-border">
                <h2 className="text-6xl md:text-8xl font-heading leading-none">CAREER</h2>
            </div>

            {/* Experience */}
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted block mb-6">
                Experience
            </span>
            <div className="border-t border-border mb-16">
                {jobs.map((job, index) => (
                    <Row
                        key={job.company}
                        left={job.company}
                        role={job.role}
                        period={job.period}
                        location={job.location}
                        description={job.description}
                        index={index}
                    />
                ))}
            </div>

            {/* Education */}
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted block mb-6">
                Education
            </span>
            <div className="border-t border-border">
                {education.map((ed, index) => (
                    <Row
                        key={ed.institution}
                        left={ed.institution}
                        role={ed.degree}
                        period={ed.period}
                        location={ed.location}
                        description={ed.description}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default CareerSection;
