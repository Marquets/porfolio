import React from 'react';
import CardSwap, { Card } from './CardSwap';

const projects = [
    {
        id: '1',
        title: 'This Portfolio',
        description: 'React + Vite + GSAP',
        img: '/proj-portfolio.png',
        url: 'https://marcogp.netlify.app',
        height: 500,
    },
    {
        id: '2',
        title: 'Making Great',
        description: 'Branding & web strategy',
        img: '/proj-making-great.png',
        url: 'https://makingreat.netlify.app',
        height: 650,
    },
    {
        id: '3',
        title: 'ABM International',
        description: 'Corporate website',
        img: '/proj-abm.png',
        url: 'https://abrandsupm.netlify.app',
        height: 550,
    },
    {
        id: '4',
        title: 'Fort Manny Bets',
        description: 'Artist landing page',
        img: '/proj-fort-manny-bets.png',
        url: 'https://fortmannybets.netlify.app',
        height: 600,
    },
    {
        id: '5',
        title: 'El Apostador',
        description: 'Fighter personal site',
        img: '/proj-el-apostador.png',
        url: 'https://elapostador.netlify.app',
        height: 480,
    },
    {
        id: '6',
        title: 'Dim Moon',
        description: 'Live show experience',
        img: '/proj-dim-moon.png',
        url: 'https://dimmoon.netlify.app',
        height: 560,
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
            {/* Header with solid background */}
            <div className="flex items-end justify-between mb-0 pb-4 border-b border-border">
                <h2 className="text-6xl md:text-8xl font-heading leading-none">Frontend</h2>
                <div className="hidden md:flex flex-col items-end gap-1">
                    {skills.map(group => (
                        <div key={group.label} className="flex gap-3">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-muted/50">{group.label}</span>
                            <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
                                {group.items.join(' · ')}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Card stack showcase */}
            <div className="relative min-h-[90vh] flex items-start lg:items-center pt-10 lg:pt-0 overflow-hidden lg:overflow-visible">
                <div className="max-w-md relative z-10">
                    <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Selected work</p>
                    <p className="text-2xl md:text-3xl font-heading leading-snug text-text/80">
                        A handful of sites I designed and built — branding, landing pages and live experiences.
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted/60 mt-6">
                        Tap a card to open the live site
                    </p>
                </div>

                <CardSwap
                    width={620}
                    height={440}
                    cardDistance={70}
                    verticalDistance={78}
                    delay={4000}
                    pauseOnHover
                    skewAmount={5}
                    easing="elastic"
                    onCardClick={i => window.open(projects[i].url, '_blank', 'noopener')}
                >
                    {projects.map(p => (
                        <Card key={p.id} customClass="project-card">
                            <div className="project-card__media">
                                <img src={p.img} alt={p.title} loading="lazy" />
                            </div>
                            <div className="project-card__bar">
                                <div>
                                    <div className="project-card__title">{p.title}</div>
                                    <div className="project-card__desc">{p.description}</div>
                                </div>
                                <span className="project-card__arrow">↗</span>
                            </div>
                        </Card>
                    ))}
                </CardSwap>
            </div>
        </div>
    );
};

export default FrontendSection;
