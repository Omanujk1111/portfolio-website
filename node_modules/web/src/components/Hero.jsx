import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AuditCTA from '@/components/AuditCTA.jsx';

const HERO_IMAGE =
  'https://horizons-cdn.hostinger.com/7f943a4d-442f-49b7-b50a-b1b13f4e81e2/chatgpt-image-jun-25-2026-05_33_58-pm-XsQK3.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Modern workspace with laptop showing digital marketing dashboard"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/30 md:from-background/90 md:via-background/60 md:to-transparent" />

      <div className="container mx-auto px-6 py-24 md:py-32 pt-28 md:pt-36 relative z-10">
        <div className="max-w-2xl lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8 animate-glow"
            >
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-base md:text-lg font-bold text-primary tracking-wide uppercase">
                Digital Marketing & Growth Specialist
              </span>
            </motion.div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              Drive business growth with{' '}
              <span className="text-primary text-glow">strategic marketing</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              Helping businesses improve visibility, attract qualified leads, and build a stronger
              digital presence through proven marketing strategies.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <AuditCTA />
              <Button
                onClick={() => navigate('/services')}
                size="lg"
                variant="outline"
                className="rounded-full border-border text-foreground hover:bg-muted hover:text-foreground transition-all duration-300 px-8 py-7 text-lg font-semibold group"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
