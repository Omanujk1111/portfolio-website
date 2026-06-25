
import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-border group"
    >
      <div className="mb-4">
        <div className="w-full h-2 bg-gradient-to-r from-primary/20 to-primary/5 rounded-full mb-6"></div>
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ProjectCard;
