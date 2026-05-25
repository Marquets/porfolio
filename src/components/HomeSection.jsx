import React from 'react';
import { motion } from 'framer-motion';
import Grainient from './Grainient';
import SplitText from './SplitText';

const sectionCards = [
  { id: 'engineer', num: '01', label: 'Engineer',  sub: 'Audio C++ · Frontend' },
  { id: 'creative', num: '02', label: 'Creative',  sub: 'Music · Photo · AV' },
  { id: 'career',   num: '03', label: 'Career',    sub: 'Education & work' },
];

const Line = ({ text, delay, muted = false }) => (
  <div className="overflow-hidden">
    <motion.div
      initial={{ y: '102%' }}
      animate={{ y: 0 }}
      transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <span
        className={`block leading-[0.88] ${muted ? 'text-text/12' : 'text-text'}`}
        style={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, letterSpacing: '-0.01em', textTransform: 'none' }}
      >
        {text}
      </span>
    </motion.div>
  </div>
);

const HomeSection = ({ onSectionSelect }) => {
  return (
    <div className="flex flex-col">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div className="min-h-[calc(100vh-2.25rem)] grid grid-cols-1 md:grid-cols-[3fr_2fr]">

        {/* LEFT — text */}
        <div className="relative flex flex-col justify-center px-6 md:px-10 pt-16 pb-8 border-r border-border">

          {/* Grainient background — sits behind text */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <Grainient
              color1="#F97316"
              color2="#000000"
              color3="#EAB308"
              timeSpeed={0.15}
              warpStrength={0.6}
              warpFrequency={3.0}
              warpSpeed={1.0}
              warpAmplitude={80.0}
              rotationAmount={300.0}
              noiseScale={1.5}
              grainAmount={0.08}
              grainScale={1.5}
              contrast={1.8}
              saturation={0.9}
              zoom={0.85}
            />
          </div>

          {/* Giant name */}
          <div className="relative z-10 text-[13vw] md:text-[9vw]">
            <Line text="Marco"    delay={0.05} />
            <Line text="González" delay={0.18} />
            <Line text="Pérez"    delay={0.31} muted />
          </div>

          <div />
        </div>

        {/* RIGHT — hero image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="relative overflow-hidden min-h-64 md:min-h-0"
        >
          <img
            src="/hero.jpg"
            alt="Marco González en directo"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Subtle gradient to blend with dark bg on the left edge */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg to-transparent" />
        </motion.div>
      </div>


    </div>
  );
};

export default HomeSection;
