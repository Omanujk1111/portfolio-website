
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import CoreExpertise from '@/components/CoreExpertise.jsx';
import AuditCTA from '@/components/AuditCTA.jsx';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About - Digital Marketing & Growth Specialist</title>
        <meta name="description" content="Learn about Om Anuj Kuriyal, a Digital Marketing & Growth Specialist focusing on SEO, PPC, and advanced optimization techniques." />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-32 pb-24"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
                About me
              </h1>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 md:p-12 border border-border mb-16 shadow-lg"
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                Hi, I'm <span className="text-foreground font-bold">Om Anuj Kuriyal</span>. I'm a <span className="text-primary font-semibold">Digital Marketing & Growth Specialist</span> focused on helping businesses increase visibility, generate qualified leads, and achieve measurable growth.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                My approach combines strategic thinking with technical expertise to deliver business outcomes. Whether it's optimizing search visibility, building conversion-focused websites, or managing performance marketing campaigns, I partner with businesses to build a stronger digital presence and drive customer acquisition.
              </p>
              <div className="flex justify-center">
                <AuditCTA />
              </div>
            </motion.div>
          </div>
        </div>
        
        <CoreExpertise />
      </motion.div>
    </>
  );
};

export default AboutPage;
