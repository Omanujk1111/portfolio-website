
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layout, TrendingUp, Search, MapPin, Filter } from 'lucide-react';

const expertiseData = [
  {
    icon: Target,
    title: 'Digital Marketing Strategy',
    description: 'Developing growth-focused marketing strategies designed to improve brand visibility, customer acquisition, and business performance.',
  },
  {
    icon: Layout,
    title: 'Website Development & Optimization',
    description: 'Creating responsive, conversion-focused websites that help businesses establish credibility and generate inquiries.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Managing paid advertising campaigns focused on increasing reach, generating leads, and maximizing marketing ROI.',
  },
  {
    icon: Search,
    title: 'Search Visibility & SEO',
    description: 'Improving online discoverability through keyword strategy, content optimization, technical SEO, and local search enhancements.',
  },
  {
    icon: MapPin,
    title: 'Local Business Growth',
    description: 'Optimizing Google Business Profiles and local search presence to help businesses attract customers within their target market.',
  },
  {
    icon: Filter,
    title: 'Lead Generation Systems',
    description: 'Building customer acquisition funnels, landing pages, and conversion-focused experiences that turn visitors into leads.',
  }
];

const ExpertiseCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group border border-border/50 hover:border-primary/30 flex flex-col h-full"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mt-auto">
        {description}
      </p>
    </motion.div>
  );
};

const CoreExpertise = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
            Core Growth Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Helping businesses improve visibility, attract qualified leads, and build a stronger digital presence through proven marketing strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {expertiseData.map((item, index) => (
            <ExpertiseCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={(index % 3) * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreExpertise;
