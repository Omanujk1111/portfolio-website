
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const HighlightBadge = ({ icon: Icon, text, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="bg-card rounded-xl p-6 flex items-start gap-4 hover:bg-card/80 transition-all duration-300 border border-border"
    >
      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
        {Icon ? <Icon className="w-5 h-5 text-primary" /> : <Check className="w-5 h-5 text-primary" />}
      </div>
      <p className="text-sm font-medium leading-relaxed pt-2">{text}</p>
    </motion.div>
  );
};

export default HighlightBadge;
