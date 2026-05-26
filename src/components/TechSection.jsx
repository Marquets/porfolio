import React, { useEffect, useRef } from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

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

const TechSection = () => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;
        const scroller = wrapper.querySelector('.scroll-stack-scroller');
        if (!scroller) return;

        const handleWheel = (e) => {
            const atTop = scroller.scrollTop <= 0;
            const atBottom = scroller.scrollTop >= scroller.scrollHeight - scroller.clientHeight - 1;
            if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
                e.stopPropagation();
                e.preventDefault();
                window.scrollBy({ top: e.deltaY });
            }
        };

        wrapper.addEventListener('wheel', handleWheel, { capture: true, passive: false });
        return () => wrapper.removeEventListener('wheel', handleWheel, { capture: true });
    }, []);

    return (
        <div>
            <div className="flex items-end justify-between mb-4 pb-4 border-b border-border">
                <h2 className="text-6xl md:text-8xl font-heading leading-none">Audio Programming</h2>
                <span className="font-mono text-xs text-muted hidden md:block">
                    {projects.length} projects
                </span>
            </div>

            <p className="font-body text-sm text-text/50 mb-4 max-w-md leading-relaxed uppercase tracking-wide">
                Professional audio software built in C++ — plugins, desktop applications, and embedded systems.
            </p>

            <div ref={wrapperRef} style={{ height: '100vh' }}>
                <ScrollStack>
                    {projects.map((project) => (
                        <ScrollStackItem key={project.title}>
                            <div className="flex h-full group overflow-hidden" style={{ borderRadius: '24px' }}>
                                {/* Image — left 65% */}
                                <div className="w-[65%] shrink-0 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ${project.imageClass ?? 'object-cover'}`}
                                    />
                                </div>

                                {/* Info panel — right */}
                                <div className="flex flex-col justify-between p-8 bg-card flex-1 min-w-0">
                                    <div className="flex flex-col gap-3">
                                        <span className="font-mono text-xs text-muted">({project.year})</span>
                                        <h3 className="text-2xl font-heading leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-text/50 leading-relaxed font-body line-clamp-4">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        {project.tech.map((tag) => (
                                            <span key={tag} className="font-mono text-xs text-text/40 tracking-wide">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollStackItem>
                    ))}
                </ScrollStack>
            </div>
        </div>
    );
};

export default TechSection;
