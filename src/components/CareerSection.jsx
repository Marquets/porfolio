import React from 'react';
import { motion } from 'framer-motion';

const jobs = [
    {
        company: 'Tech Company A',
        role: 'Senior Developer',
        period: '2022 — Present',
        description: 'Leading frontend development and architecture.'
    },
    {
        company: 'Startup B',
        role: 'Full Stack Engineer',
        period: '2020 — 2022',
        description: 'Built the MVP and scaled the platform.'
    },
    {
        company: 'Agency C',
        role: 'Junior Developer',
        period: '2018 — 2020',
        description: 'Developed websites for various clients.'
    }
];

const CareerSection = () => {
    return (
        <div>
            {/* Section header */}
            <div className="flex items-end justify-between mb-12 pb-4 border-b border-border">
                <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted block mb-2">05 — Section</span>
                    <h2 className="text-6xl md:text-8xl font-heading leading-none">CAREER</h2>
                </div>
            </div>

            <p className="font-body text-sm text-text/50 mb-10 max-w-md leading-relaxed uppercase tracking-wide">
                Professional experience and roles.
            </p>

            <div className="space-y-0 border-t border-border">
                {jobs.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="border-b border-border py-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 group hover:bg-card px-2 transition-colors"
                    >
                        {/* Left: meta */}
                        <div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-3">
                                {job.period}
                            </span>
                            <h3 className="font-heading text-2xl group-hover:opacity-60 transition-colors">
                                {job.company.toUpperCase()}
                            </h3>
                        </div>

                        {/* Right: details */}
                        <div className="md:border-l border-border md:pl-8">
                            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
                                {job.role}
                            </p>
                            <p className="text-sm text-text/60 leading-relaxed font-body">
                                {job.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CareerSection;
