
import React from 'react';
import { Briefcase, Code, Megaphone, Search, MapPin, Layout } from 'lucide-react';
import HighlightBadge from '@/components/HighlightBadge.jsx';

const Highlights = () => {
  const highlights = [
    {
      icon: Briefcase,
      text: '7 Months Digital Marketing Internship Experience',
    },
    {
      icon: Code,
      text: 'WordPress Website Development',
    },
    {
      icon: Megaphone,
      text: 'Google Ads Campaign Management',
    },
    {
      icon: Search,
      text: 'SEO & Content Optimization',
    },
    {
      icon: MapPin,
      text: 'Google Business Profile Optimization',
    },
    {
      icon: Layout,
      text: 'Landing Page Development',
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
            Experience & skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Key highlights from my digital marketing journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((highlight, index) => (
            <HighlightBadge
              key={index}
              icon={highlight.icon}
              text={highlight.text}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
