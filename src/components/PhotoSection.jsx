import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
    { id: 1, url: '/photo1.jpg', title: 'Coastal Landscape' },
    { id: 2, url: '/photo2.jpg', title: 'Urban Reflection' },
    { id: 3, url: '/photo3.jpg', title: 'Rooftop Elephant' },
    { id: 4, url: '/photo4.jpg', title: 'Friends Gathering' },
    { id: 5, url: '/photo5.jpg', title: 'Modern Architecture' },
    { id: 6, url: '/photo6.jpg', title: 'Flower Bee' },
    { id: 7, url: '/photo7.jpg', title: 'Street Scene' },
    { id: 8, url: '/photo8.jpg', title: 'Cat Portrait' },
    { id: 9, url: '/photo9.jpg', title: 'Fries Statue' },
];

const PhotoSection = () => {
    const [lightbox, setLightbox] = useState(null);

    return (
        <div>
            {/* Section header */}
            <div className="flex items-end justify-between mb-12 pb-4 border-b border-border">
                <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted block mb-2">06 — Section</span>
                    <h2 className="text-6xl md:text-8xl font-heading leading-none">PHOTO</h2>
                </div>
                <span className="font-mono text-xs text-muted hidden md:block">35mm film</span>
            </div>

            <p className="font-body text-sm text-text/50 mb-10 max-w-md leading-relaxed uppercase tracking-wide">
                Capturing moments, textures, and light on 35mm film.
            </p>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border-t border-l border-border">
                {photos.map((photo, index) => (
                    <motion.button
                        key={photo.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => setLightbox(photo)}
                        className="relative group overflow-hidden border-b border-r border-border aspect-square bg-card"
                    >
                        <img
                            src={photo.url}
                            alt={photo.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-text/0 group-hover:bg-text/60 transition-colors duration-300 flex items-end">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-bg px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                {photo.title}
                            </span>
                        </div>
                    </motion.button>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-text/95 z-[100] flex items-center justify-center p-8"
                        onClick={() => setLightbox(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            className="relative max-w-4xl max-h-[85vh]"
                            onClick={e => e.stopPropagation()}
                        >
                            <img
                                src={lightbox.url}
                                alt={lightbox.title}
                                className="max-w-full max-h-[80vh] object-contain"
                            />
                            <div className="flex items-center justify-between mt-4">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                                    {lightbox.title}
                                </span>
                                <button
                                    onClick={() => setLightbox(null)}
                                    className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                                >
                                    ✕ Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PhotoSection;
