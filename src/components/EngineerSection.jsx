import React from 'react';
import TechSection from './TechSection';
import FrontendSection from './FrontendSection';

const EngineerSection = () => (
  <div>
    <TechSection />
    <div className="border-t border-border mt-16 pt-16">
      <FrontendSection />
    </div>
  </div>
);

export default EngineerSection;
