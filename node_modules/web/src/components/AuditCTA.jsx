
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuditCTA = ({ className = "" }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-block ${className}`}
    >
      <Button 
        onClick={() => navigate('/contact')}
        size="lg" 
        className="relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group transition-all duration-300 px-8 py-7 text-lg font-bold uppercase tracking-wide animate-pulse-glow box-glow border border-primary/50"
      >
        <span className="absolute inset-0 w-full h-full animate-shimmer pointer-events-none"></span>
        <span className="relative z-10 flex items-center gap-3 text-primary-foreground">
          <Sparkles className="w-5 h-5" />
          Claim Your Free Audit
          <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Button>
    </motion.div>
  );
};

export default AuditCTA;
