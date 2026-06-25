
import React from 'react';
import { Code2, Search, MousePointerClick, Share2, Mail, MapPin, MessageSquare as MessageSquareText, Bot, Sparkles, Users, Video, HeartHandshake } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard.jsx';

export const servicesData = [
  {
    icon: Code2,
    title: 'Website Development & Conversion Optimization',
    description: 'Modern WordPress websites and landing pages designed to attract and convert customers.',
  },
  {
    icon: Search,
    title: 'Search Visibility & Lead Generation',
    description: 'Improve search visibility with on-page SEO, keyword research, and website optimization.',
  },
  {
    icon: MousePointerClick,
    title: 'Performance Marketing & Lead Acquisition',
    fullForm: 'Pay-Per-Click',
    description: 'Lead-focused campaign setup and optimization for local businesses.',
  },
  {
    icon: Share2,
    title: 'Social Growth & Audience Engagement',
    description: 'Build brand presence and engage audiences across social platforms.',
  },
  {
    icon: Mail,
    title: 'Email Nurture & Customer Retention',
    description: 'Create targeted email campaigns to nurture leads and drive conversions.',
  },
  {
    icon: MapPin,
    title: 'Local Search Visibility',
    fullForm: 'Google Experience Optimization',
    description: 'Optimize your Google presence and local visibility.',
  },
  {
    icon: MessageSquareText,
    title: 'AI-Powered Search Optimization',
    fullForm: 'Answer Engine Optimization',
    description: 'Optimize content for AI-powered search engines and answer engines.',
  },
  {
    icon: Bot,
    title: 'AI Content Optimization',
    fullForm: 'Large Language Model Optimization',
    description: 'Optimize content for AI language models and chatbots.',
  },
  {
    icon: Sparkles,
    title: 'User Experience & Search Performance',
    fullForm: 'Search Experience Optimization',
    description: 'Enhance user experience while optimizing for search engines.',
  },
  {
    icon: Users,
    title: 'Authentic Content & Community Trust',
    fullForm: 'User-Generated Content Marketing',
    description: 'Leverage customer content to build trust and authenticity.',
  },
  {
    icon: Video,
    title: 'Influencer Partnerships & Brand Amplification',
    description: 'Partner with content creators to amplify your brand message.',
  },
  {
    icon: HeartHandshake,
    title: 'Community Building & Brand Loyalty',
    description: 'Build and nurture engaged communities around your brand.',
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
            Services I offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business grow online
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </section>
  );
};

export default Services;
