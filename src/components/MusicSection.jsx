import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const ORANGE = '#FF5126';
const SPINE_BG = '#F4F0E8';

const releases = [
    {
        id: 1,
        name: 'Mucho Mungo',
        album: 'Moth Bath',
        role: 'Band Member',
        year: '2023',
        bandcampUrl: 'https://muchomungo.bandcamp.com/album/moth-bath',
        description: 'My main project and band. Our debut album showcasing our garage-psych sound.',
    },
    {
        id: 2,
        name: 'Good Night Sleep',
        album: 'Singles',
        role: 'Guitarist',
        year: '2022',
        spotifyId: '6tvNxwS3ZSBqOSw9htX4Qg',
        description: 'A neo-folk collaborative project. I play guitar.',
    },
    {
        id: 3,
        name: 'Dim Moon',
        album: "Child's Lament",
        role: 'Solo Artist',
        year: '2021',
        bandcampUrl: 'https://dimmoon.bandcamp.com/',
        description: 'My personal project where I have complete creative liberty to experiment and express myself.',
    },
    {
        id: 4,
        name: 'SANTA ANA',
        album: 'Singles',
        role: 'Producer',
        year: '2025',
        spotifyId: '4dOm7N5bjzUs0UwQHH8SZd',
        description: 'Producing singles: NIÑA GRITANDO AL CIELO, Atentamente, ÉL and sobre su VIENTRE.',
    },
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

const Asterisk = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round">
        <line x1="12" y1="3" x2="12" y2="21" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" />
        <line x1="18.4" y1="5.6" x2="5.6" y2="18.4" />
    </svg>
);

// Four distinct spine layouts (one per release, inspired by editorial book spines)
const layouts = [
    // 0 — Pill caps + ID circle in the middle
    ({ release }) => (
        <div style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 0 16px',
        }}>
            <div style={{
                border: `1.4px solid ${ORANGE}`,
                borderRadius: 999,
                padding: '14px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 180,
            }}>
                <Vertical style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 900,
                    fontSize: 20,
                    letterSpacing: '-0.01em',
                    textTransform: 'uppercase',
                }}>{release.name}</Vertical>
            </div>
            <div style={{
                width: 38, height: 38, borderRadius: '50%',
                border: `1.4px solid ${ORANGE}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18,
            }}>
                {release.id}
            </div>
            <div style={{
                border: `1.4px solid ${ORANGE}`,
                borderRadius: 999,
                padding: '12px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 150,
            }}>
                <Vertical style={{
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: 9,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                }}>{release.album} · {release.role}</Vertical>
            </div>
            <span style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: 9, letterSpacing: '0.1em',
            }}>marcogp</span>
        </div>
    ),

    // 1 — Title repeated twice, super bold (à la "GRAPHIC FEST GRAPHIC FEST")
    ({ release }) => (
        <div style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '18px 0 16px',
        }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 0 }}>
                <Vertical style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 900, fontSize: 26,
                    letterSpacing: '-0.03em', lineHeight: 0.92,
                    textTransform: 'uppercase',
                }}>{release.name}</Vertical>
                <Vertical style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 900, fontSize: 26,
                    letterSpacing: '-0.03em', lineHeight: 0.92,
                    textTransform: 'uppercase',
                }}>{release.name}</Vertical>
            </div>
            <Vertical style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: 9, letterSpacing: '0.22em',
                textTransform: 'uppercase', marginBottom: 8,
            }}>{release.album} · {release.role}</Vertical>
            <span style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: 9, letterSpacing: '0.1em',
            }}>marcogp</span>
        </div>
    ),

    // 2 — Asterisks bracketing a giant centered title
    ({ release }) => (
        <div style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '24px 0 16px',
        }}>
            <Asterisk size={22} />
            <Vertical style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900, fontSize: 30,
                letterSpacing: '-0.025em', lineHeight: 1,
                textTransform: 'uppercase',
            }}>{release.name}</Vertical>
            <Asterisk size={22} />
            <span style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: 9, letterSpacing: '0.1em',
            }}>marcogp</span>
        </div>
    ),

    // 3 — Big stylized number + minimal text (à la "PALETTE mini PASTEL / 5")
    ({ release }) => (
        <div style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '28px 8px 16px',
        }}>
            <div style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: 4,
                fontFamily: 'var(--font-heading)',
                fontWeight: 600, fontSize: 12,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textAlign: 'center',
                lineHeight: 1.2,
            }}>
                <span>{release.album}</span>
                <span style={{ fontStyle: 'italic', fontWeight: 300, fontSize: 11, textTransform: 'lowercase' }}>
                    {release.role.toLowerCase()}
                </span>
            </div>
            <div style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 300, fontSize: 140,
                lineHeight: 0.78, letterSpacing: '-0.06em',
            }}>
                {release.id}
            </div>
            <Vertical style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: 9, letterSpacing: '0.22em',
                textTransform: 'uppercase',
            }}>{release.name}</Vertical>
            <span style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: 9, letterSpacing: '0.1em',
            }}>marcogp</span>
        </div>
    ),
];

const SPINE_SIZES = [
    { w: 108, h: 660 },
    { w: 94,  h: 700 },
    { w: 128, h: 620 },
    { w: 100, h: 680 },
];

const Spine = ({ release, index, onClick }) => {
    const { w, h } = SPINE_SIZES[index % SPINE_SIZES.length];
    const Layout = layouts[index % layouts.length];

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
                width: w,
                height: h,
                background: SPINE_BG,
                color: ORANGE,
                flexShrink: 0,
                boxShadow: '2px 0 10px rgba(0,0,0,0.45), -1px 0 4px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                border: 0,
                padding: 0,
                fontFamily: 'inherit',
                position: 'relative',
                transformOrigin: 'bottom center',
            }}
        >
            <Layout release={release} />
        </motion.button>
    );
};

// Decorative tilted spine leaning at the end of the shelf
const TiltedSpine = () => (
    <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.65, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
        style={{
            width: 118,
            height: 600,
            background: SPINE_BG,
            color: ORANGE,
            flexShrink: 0,
            marginLeft: -54,
            transformOrigin: 'bottom left',
            transform: 'rotate(-9deg)',
            boxShadow: '6px 8px 24px rgba(0,0,0,0.55), -1px 0 4px rgba(0,0,0,0.2)',
            position: 'relative',
            zIndex: 1,
        }}
    >
        <div style={{
            height: '100%', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'space-between',
            padding: '24px 0 16px',
        }}>
            <Vertical style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900, fontSize: 30,
                letterSpacing: '-0.025em',
                textTransform: 'uppercase',
            }}>MARCO GP</Vertical>
            <Vertical style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: 9,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
            }}>portfolio · 2026</Vertical>
            <span style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: 9, letterSpacing: '0.1em',
            }}>marcogp</span>
        </div>
    </motion.div>
);

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

            {release.spotifyId ? (
                <iframe
                    style={{ display: 'block', borderRadius: 0 }}
                    src={`https://open.spotify.com/embed/artist/${release.spotifyId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            ) : (
                <div style={{ padding: 32 }}>
                    <h3 style={{ fontSize: 28, fontWeight: 900, fontFamily: 'var(--font-heading)', marginBottom: 4, color: '#fff' }}>
                        {release.name}
                    </h3>
                    <p style={{ fontFamily: 'monospace', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.2em', color: ORANGE, marginBottom: 20 }}>
                        {release.album} · {release.role} · {release.year}
                    </p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 28 }}>
                        {release.description}
                    </p>
                    <a
                        href={release.bandcampUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block', fontFamily: 'monospace', fontSize: 11,
                            textTransform: 'uppercase', letterSpacing: '0.15em',
                            padding: '10px 20px', backgroundColor: ORANGE, color: '#0a0a0a',
                            textDecoration: 'none', fontWeight: 700,
                        }}
                    >
                        Listen on Bandcamp ↗
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

            {/* The shelf */}
            <div style={{ position: 'relative', overflowX: 'auto', overflowY: 'visible' }}>
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
                            <Spine
                                key={release.id}
                                release={release}
                                index={i}
                                onClick={() => setSelected(release)}
                            />
                        ))}
                        <TiltedSpine />
                    </div>

                    {/* Shelf surface — spans the full content width */}
                    <div style={{ height: 2, background: ORANGE }} />
                    <div style={{
                        height: 22,
                        background: 'linear-gradient(180deg, rgba(255,81,38,0.18) 0%, rgba(255,81,38,0) 100%)',
                    }} />
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
