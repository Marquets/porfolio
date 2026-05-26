import React from 'react';
// import Masonry from './Masonry';
import InfiniteMenu from './InfiniteMenu';

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

            {/* InfiniteMenu fills the rest */}
            <div style={{ height: '100vh', position: 'relative' }}>
                <InfiniteMenu
                    items={projects.map(p => ({
                        image: p.img,
                        link: p.url,
                        title: p.title,
                        description: p.description || '',
                    }))}
                />
            </div>
        </div>
    );
};

export default FrontendSection;
