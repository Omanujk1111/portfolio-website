
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard.jsx';
import { projectsData } from '@/components/Projects.jsx';
import AuditCTA from '@/components/AuditCTA.jsx';

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Digital Marketing & Growth Specialist</title>
        <meta name="description" content="Portfolio of digital marketing and brand growth projects including WordPress sites, SEO optimization, and landing pages." />
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
              Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Real-world experience helping businesses succeed online through strategic digital marketing and brand growth
            </p>
            <AuditCTA />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectsPage;
