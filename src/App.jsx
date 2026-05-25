import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import EngineerSection from './components/EngineerSection';
import CreativeHubSection from './components/CreativeHubSection';
import CareerSection from './components/CareerSection';
import IntroSection from './components/IntroSection';

const SECTIONS = [
  { id: 'engineer', Component: EngineerSection },
  { id: 'creative', Component: CreativeHubSection },
  { id: 'career',   Component: CareerSection },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

function App() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      <Navbar activeSection={activeSection} />

      <HomeSection onSectionSelect={scrollTo} />

      <IntroSection />

      {SECTIONS.map(({ id, Component }, i) => (
        <motion.section
          key={id}
          id={id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-border"
        >
          <div className="p-8 lg:p-16">
            <Component />
          </div>
        </motion.section>
      ))}

      <footer className="bg-text text-bg py-6 px-8 lg:px-16 flex items-center justify-between border-t border-text">
        <span className="font-mono text-xs uppercase tracking-widest text-bg/40">
          &copy; {new Date().getFullYear()}
        </span>
        <span className="font-heading text-lg tracking-widest text-bg">
          Marco González Pérez
        </span>
      </footer>
    </div>
  );
}

export default App;
