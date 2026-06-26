
import React from 'react';
import ProjectCard from '@/components/ProjectCard.jsx';

export const projectsData = [
  {
  title: 'Mismo Systems',
  description: 'Supported digital growth initiatives through SEO, website optimization, content publishing, and lead-generation-focused landing page development.',
  },
  {
  title: 'Hotel Om Shivaay Inn',
  description: 'Enhanced online visibility through local SEO, website optimization, and digital marketing strategies tailored for the hospitality industry.',
  },
  {
  title: 'Om Blessed Cottage',
  description: 'Developed and managed a business website designed to improve online presence and generate direct customer inquiries.',
  },
  {
  title: 'Active Directory Assessment Campaign',
  description: 'Created a conversion-focused landing page that supported lead generation and campaign performance through strategic design and user experience optimization.',
  },
  // New Projects
  {
  title: 'Local Restaurant SEO Campaign',
  description: "Optimized a local restaurant's online presence through Google Business Profile management, local SEO, and website optimization to improve search visibility and attract more local customers.",
  },
  {
  title: 'Real Estate Landing Page',
  description: 'Designed a modern, conversion-focused landing page for a real estate business with clear calls to action, responsive design, and an intuitive user experience to generate high-quality property inquiries.',
  },
  {
  title: 'Cafe Social Media Management',
  description: 'Planned and managed social media content for a local cafe by creating engaging posts, maintaining a consistent brand identity, and improving online presence through strategic content and audience engagement.',
  },
  ]; 

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
            Featured projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world experience helping businesses succeed online
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
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
    </section>
  );
};

export default Projects;
