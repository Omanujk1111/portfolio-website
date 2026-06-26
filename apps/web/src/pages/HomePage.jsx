
import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero.jsx';
import Services from '@/components/Services.jsx';
import Projects from '@/components/Projects.jsx';
import About from '@/components/About.jsx';
import CoreExpertise from '@/components/CoreExpertise.jsx';
import Contact from '@/components/Contact.jsx';
import SectionAnimator from '@/components/SectionAnimator.jsx';
import AuditCTA from '@/components/AuditCTA.jsx';
import WhatToExpect from '@/components/WhatToExpect.jsx';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Om Anuj Kuriyal - Digital Marketing & Growth Specialist</title>
        <meta name="description" content="Professional digital marketing and brand growth services including SEO, PPC, advanced optimization (GEO, AEO, LLMO), and website development." />
      </Helmet>
      
      <Hero />
      <SectionAnimator><Services /></SectionAnimator>
      <SectionAnimator><Projects /></SectionAnimator>
      <SectionAnimator><About /></SectionAnimator>
      <SectionAnimator><CoreExpertise /></SectionAnimator>
      
      <SectionAnimator>
        <div className="py-16 bg-card border-y border-border text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to accelerate your business growth?</h2>
            <AuditCTA />
          </div>
        </div>
      </SectionAnimator>

      <SectionAnimator><Contact /></SectionAnimator>

<SectionAnimator>
  <WhatToExpect />
</SectionAnimator>
    </>
  );
};

export default HomePage;
