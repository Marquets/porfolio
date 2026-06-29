import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const ORANGE = '#FF5126';
const CASE_BG = '#E9E6DD';

// Retro cassette palette — one J-card accent per release
const ACCENTS = [
    { label: '#FF5126', text: '#F4F0E8' }, // orange
    { label: '#1F7A6B', text: '#F4F0E8' }, // teal
    { label: '#E8B23A', text: '#1a1a1a' }, // mustard
    { label: '#C9405A', text: '#F4F0E8' }, // magenta
    { label: '#5B6CFF', text: '#F4F0E8' }, // blue
];

const releases = [
    {
        id: 1,
        name: 'Mucho Mungo',
        album: 'Moth Bath',
        role: 'Band Member',
        year: '2023',
        url: 'https://open.spotify.com/album/7eEZfX4sXjP8tbI5BfUBPi',
        embed: { type: 'spotify', kind: 'album', id: '7eEZfX4sXjP8tbI5BfUBPi' },
        description: 'My main project and band. Our debut album showcasing our garage-psych sound.',
    },
    {
        id: 2,
        name: 'Good Night Sleep',
        album: 'Spring Selection',
        role: 'Guitarist',
        year: '2022',
        url: 'https://open.spotify.com/album/6GlnPq3ByDD0PItWBChDpf',
        embed: { type: 'spotify', kind: 'album', id: '6GlnPq3ByDD0PItWBChDpf' },
        description: 'A neo-folk collaborative project. I play guitar.',
    },
    {
        id: 3,
        name: 'Dim Moon',
        album: 'The Weather',
        role: 'Solo Artist',
        year: '2021',
        url: 'https://open.spotify.com/album/4CJ1n8uGbvpeUSzdPf6CuA',
        embed: { type: 'spotify', kind: 'album', id: '4CJ1n8uGbvpeUSzdPf6CuA' },
        description: 'My personal project where I have complete creative liberty to experiment and express myself.',
    },
    {
        id: 4,
        name: 'SANTA ANA',
        album: 'Singles',
        role: 'Producer',
        year: '2025',
        url: 'https://open.spotify.com/track/6l02t9A8nM1QZIowImYfDl',
        embed: { type: 'spotify', kind: 'track', id: '6l02t9A8nM1QZIowImYfDl' },
        description: 'Producing singles: NIÑA GRITANDO AL CIELO, Atentamente, ÉL and sobre su VIENTRE.',
    },
    {
        id: 5,
        name: 'TV Haircuts',
        album: 'Video',
        role: 'Project',
        year: '2024',
        url: 'https://open.spotify.com/album/19s6TGmlkCRIyB27rxNddT',
        embed: { type: 'spotify', kind: 'album', id: '19s6TGmlkCRIyB27rxNddT' },
        description: 'TV Haircuts project.',
    },
];

const videos = [
    { id: 'PvQ4ZBxqbug', start: 651, autoplay: true, label: 'Live performance' },
    { id: 'xkIUIg2qO9I', autoplay: true, label: 'Live performance' },
    { id: 'aX3ULekWVkM', autoplay: true, label: 'Live performance' },
    { id: 'g7-6VKMUSRY', autoplay: true, label: 'Live performance' },
    { id: 'hP-V2X52bGg', autoplay: true, label: 'Live performance' },
    { id: '_RNaoJl4wEQ', autoplay: true, label: 'Live performance' },
];

// Vertical text running bottom-to-top (book-spine style)
const Vertical = ({ children, style }) => (
    <span style={{
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
        whiteSpace: 'nowrap',
        display: 'inline-block',
        ...style,
    }}>{children}</span>
);

// A small dark index strip (cassette case hinge marks, top & bottom)
const CaseCap = () => (
    <span style={{ width: 24, height: 4, background: '#1a1a1a', opacity: 0.65 }} />
);

// Glossy plastic sheen overlay shared by every cassette
const sheen = {
    position: 'absolute', inset: 0, pointerEvents: 'none',
    background: 'linear-gradient(90deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 22%, rgba(0,0,0,0.06) 50%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.4) 100%)',
};

// Uniform cassette case dimensions — sameness is what reads as "tapes"
const CASS_W = 70;
const CASS_H = 600;

const Cassette = ({ release, index, onClick }) => {
    const accent = ACCENTS[index % ACCENTS.length];

    return (
        <motion.button
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -18, transition: { duration: 0.25, ease: 'easeOut' } }}
            onClick={onClick}
            aria-label={`Open ${release.name}`}
            style={{
                width: CASS_W,
                height: CASS_H,
                background: CASE_BG,
                color: '#1a1a1a',
                flexShrink: 0,
                boxShadow: '2px 0 10px rgba(0,0,0,0.45), -1px 0 4px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                border: 0,
                padding: 0,
                fontFamily: 'inherit',
                position: 'relative',
                transformOrigin: 'bottom center',
                overflow: 'hidden',
            }}
        >
            <span style={sheen} />
            {/* case edge lines */}
            <span style={{ position: 'absolute', top: 0, bottom: 0, left: 6, width: 1, background: 'rgba(0,0,0,0.12)' }} />
            <span style={{ position: 'absolute', top: 0, bottom: 0, right: 6, width: 1, background: 'rgba(0,0,0,0.12)' }} />

            <div style={{
                position: 'relative', height: '100%',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'space-between',
                padding: '14px 0',
            }}>
                {/* top — tape type */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <CaseCap />
                    <Vertical style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0.55 }}>
                        Type II · Chrome
                    </Vertical>
                </div>

                {/* colored J-card label */}
                <div style={{
                    flex: 1, width: 'calc(100% - 16px)', margin: '12px 8px',
                    background: accent.label, color: accent.text,
                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.12)',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'space-between',
                    padding: '16px 0',
                }}>
                    <Vertical style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0.8 }}>
                        marcogp tapes
                    </Vertical>
                    <Vertical style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 24, letterSpacing: '-0.02em', lineHeight: 0.95, textTransform: 'uppercase' }}>
                        {release.name}
                    </Vertical>
                    <Vertical style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.85 }}>
                        {release.album}
                    </Vertical>
                </div>

                {/* bottom — side + year */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <Vertical style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                        Side A · {release.year}
                    </Vertical>
                    <CaseCap />
                </div>
            </div>
        </motion.button>
    );
};

const Modal = ({ release, onClose }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
            position: 'fixed', inset: 0, zIndex: 50,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 24, backgroundColor: 'rgba(0,0,0,0.9)',
        }}
    >
        <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={e => e.stopPropagation()}
            style={{
                maxWidth: 420, width: '100%',
                backgroundColor: '#111', overflow: 'hidden',
                position: 'relative',
                border: `1px solid ${ORANGE}33`,
            }}
        >
            <div style={{ height: 4, background: ORANGE }} />

            <button
                onClick={onClose}
                style={{
                    position: 'absolute', top: 16, right: 16,
                    color: 'rgba(255,255,255,0.5)', background: 'none', border: 'none',
                    cursor: 'pointer', padding: 4, lineHeight: 1,
                }}
            >
                <X size={14} />
            </button>

            {release.embed?.type === 'spotify' ? (
                <iframe
                    style={{ display: 'block', borderRadius: 0 }}
                    src={`https://open.spotify.com/embed/${release.embed.kind}/${release.embed.id}?utm_source=generator&theme=0`}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            ) : release.embed?.type === 'bandcamp' ? (
                <iframe
                    style={{ display: 'block', border: 0, width: '100%', height: 472 }}
                    src={`https://bandcamp.com/EmbeddedPlayer/album=${release.embed.albumId}/size=large/bgcol=0a0a0a/linkcol=ff5126/tracklist=true/transparent=true/`}
                    seamless
                    loading="lazy"
                    title={`${release.name} — ${release.album}`}
                />
            ) : release.embed?.type === 'youtube' ? (
                <iframe
                    style={{ display: 'block', border: 0, width: '100%', aspectRatio: '16 / 9' }}
                    src={`https://www.youtube-nocookie.com/embed/${release.embed.id}${release.embed.start ? `?start=${release.embed.start}` : ''}`}
                    title={release.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                />
            ) : (
                <div style={{ padding: 32 }}>
                    <h3 style={{ fontSize: 28, fontWeight: 900, fontFamily: 'var(--font-heading)', marginBottom: 4, color: '#fff' }}>
                        {release.name}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.2em', color: ORANGE, marginBottom: 20 }}>
                        {release.album} · {release.role} · {release.year}
                    </p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 28 }}>
                        {release.description}
                    </p>
                    <a
                        href={release.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 11,
                            textTransform: 'uppercase', letterSpacing: '0.15em',
                            padding: '10px 20px', backgroundColor: ORANGE, color: '#0a0a0a',
                            textDecoration: 'none', fontWeight: 700,
                        }}
                    >
                        Listen ↗
                    </a>
                </div>
            )}
        </motion.div>
    </motion.div>
);

const MusicSection = () => {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const onKey = e => { if (e.key === 'Escape') setSelected(null); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <div>
            <div className="flex items-end justify-between mb-12 pb-4 border-b border-border">
                <h2 className="text-6xl md:text-8xl font-heading leading-none">Music</h2>
                <span className="font-mono text-xs text-muted hidden md:block">
                    {releases.length} projects
                </span>
            </div>

            <p className="font-body text-sm text-text/50 mb-12 max-w-md leading-relaxed uppercase tracking-wide">
                My musical journey as performer, guitarist and producer.
            </p>

            {/* Shelf + live video */}
            <div className="flex flex-col lg:flex-row lg:items-end gap-10">
                {/* The shelf */}
                <div style={{ position: 'relative', overflowX: 'auto', overflowY: 'visible', flexShrink: 0 }}>
                    <div style={{ minWidth: 'fit-content' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            gap: 14,
                            paddingTop: 60,
                            paddingLeft: 16,
                            paddingRight: 32,
                        }}>
                            {releases.map((release, i) => (
                                <Cassette
                                    key={release.id}
                                    release={release}
                                    index={i}
                                    onClick={() => setSelected(release)}
                                />
                            ))}
                        </div>

                        {/* Shelf surface — spans the full content width */}
                        <div style={{ height: 2, background: ORANGE }} />
                        <div style={{
                            height: 22,
                            background: 'linear-gradient(180deg, rgba(255,81,38,0.18) 0%, rgba(255,81,38,0) 100%)',
                        }} />
                    </div>
                </div>

                {/* Live performance videos */}
                <div className="w-full lg:flex-1 pb-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {videos.map(v => {
                        const params = new URLSearchParams({
                            playsinline: '1',
                            controls: '0',
                            rel: '0',
                            modestbranding: '1',
                            iv_load_policy: '3',
                            disablekb: '1',
                            loop: '1',
                            playlist: v.id,
                        });
                        if (v.start) params.set('start', String(v.start));
                        if (v.autoplay) { params.set('autoplay', '1'); params.set('mute', '1'); }
                        return (
                            <div key={v.id} className="min-w-0">
                                <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', border: `1px solid ${ORANGE}33`, overflow: 'hidden' }}>
                                    <iframe
                                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                                        src={`https://www.youtube-nocookie.com/embed/${v.id}?${params.toString()}`}
                                        title={v.label}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                    {/* transparent layer blocks YouTube's hover chrome */}
                                    <span aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <AnimatePresence>
                {selected && (
                    <Modal release={selected} onClose={() => setSelected(null)} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default MusicSection;
