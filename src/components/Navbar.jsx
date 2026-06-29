import React, { useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { id: 'engineer', label: 'Developer' },
  { id: 'creative', label: 'Creative' },
  { id: 'career',   label: 'Career' },
];

const Navbar = ({ activeSection }) => {
  const [hovered, setHovered] = useState(null);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 grid grid-cols-[auto_1fr_1fr_1fr] md:grid-cols-4 items-center gap-2 px-4 md:px-10 h-12"
      style={{ mixBlendMode: 'difference' }}
    >
      {/* Copyright — far left */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-sm md:text-base transition-colors text-left whitespace-nowrap"
        style={{ fontFamily: '"Inter", sans-serif', fontOpticalSizing: 'auto', color: 'white' }}
      >
        <span className="md:hidden">© MGP</span>
        <span className="hidden md:inline">© Marco González</span>
      </button>

      {/* 3 nav links */}
      {links.map(({ id, label }) => {
        const isActive = activeSection === id;
        const isHovered = hovered === id;

        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            className="relative flex flex-col items-center pb-1 transition-colors duration-150 text-[13px] md:text-base"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontOpticalSizing: 'auto',
              fontWeight: 400,
              color: 'white',
            }}
          >
            <span className="relative">
              {label}
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered || isActive ? 1 : 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                style={{ originX: 0.5 }}
              />
            </span>
          </button>
        );
      })}
    </motion.nav>
  );
};

export default Navbar;
