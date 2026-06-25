
import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, fullForm, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group border border-border/50 hover:border-primary/30 flex flex-col h-full"
    >
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      
      <div className="mb-4">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        {fullForm && (
          <p className="text-sm font-medium text-primary/80 mt-1 tracking-wide">
            {fullForm}
          </p>
        )}
      </div>
      
      <p className="text-muted-foreground leading-relaxed mt-auto">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
