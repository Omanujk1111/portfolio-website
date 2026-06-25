
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard.jsx';
import { servicesData } from '@/components/Services.jsx';
import AuditCTA from '@/components/AuditCTA.jsx';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services - Digital Marketing & Growth Specialist</title>
        <meta name="description" content="Comprehensive digital marketing services including website development, SEO, PPC, Social Media, and advanced optimization (GEO, AEO, LLMO, SXO)." />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-32 pb-24"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
              Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Comprehensive digital solutions to help your business establish a strong online presence and achieve measurable growth
            </p>
            <AuditCTA />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-16">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                fullForm={service.fullForm}
                description={service.description}
                delay={(index % 3) * 0.1}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ServicesPage;
