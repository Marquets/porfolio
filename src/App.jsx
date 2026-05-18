import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TopBanner from './components/TopBanner';
import StaggeredMenu from './components/StaggeredMenu';
import MainContent from './components/MainContent';
import HomeSection from './components/HomeSection';
import MusicSection from './components/MusicSection';
import TechSection from './components/TechSection';
import FrontendSection from './components/FrontendSection';
import CreativeSection from './components/CreativeSection';
import CareerSection from './components/CareerSection';
import PhotoSection from './components/PhotoSection';

const SECTIONS = new Set(['music', 'tech', 'frontend', 'creative', 'career', 'photography']);

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const isHome = !activeSection || !SECTIONS.has(activeSection);

  return (
    <div className="min-h-screen bg-bg">
      <TopBanner />
      <StaggeredMenu onSectionSelect={setActiveSection} activeSection={activeSection} />

      {/* pt-9 accounts for the fixed top banner height */}
      <div className="pt-9">
        <AnimatePresence mode="wait">
          <motion.div
            key={isHome ? 'home' : activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <MainContent>
              {isHome ? (
                <HomeSection onSectionSelect={setActiveSection} />
              ) : (
                <>
                  <div className="p-8 lg:p-16 relative">
                    <button
                      onClick={() => setActiveSection(null)}
                      className="absolute top-6 right-6 font-mono text-xs uppercase tracking-widest text-muted hover:text-text border border-transparent hover:border-text px-3 py-1.5 transition-all"
                    >
                      ✕ Close
                    </button>

                    {activeSection === 'music'       && <MusicSection />}
                    {activeSection === 'tech'        && <TechSection />}
                    {activeSection === 'frontend'    && <FrontendSection />}
                    {activeSection === 'creative'    && <CreativeSection />}
                    {activeSection === 'career'      && <CareerSection />}
                    {activeSection === 'photography' && <PhotoSection />}
                  </div>

                  <footer className="bg-text text-bg py-6 px-8 lg:px-16 flex items-center justify-between border-t border-text">
                    <span className="font-mono text-xs uppercase tracking-widest text-bg/40">
                      &copy; {new Date().getFullYear()}
                    </span>
                    <span className="font-heading text-lg tracking-widest text-bg">
                      Marco González Pérez
                    </span>
                  </footer>
                </>
              )}
            </MainContent>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
