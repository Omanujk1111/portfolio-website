import React from 'react';
import { Code2, Search, Sparkles, Bot, MessageSquare, MousePointerClick, Share2, Mail, FileSearch, Megaphone, LineChart, Star } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard.jsx';

export const servicesData = [
  {
    icon: Search,
    title: 'Search Engine Optimization',
    fullForm: 'SEO',
    description: 'Improve organic visibility with on-page SEO, keyword research, and technical website optimization.',
  },
  {
    icon: Sparkles,
    title: 'Generative Engine Optimization',
    fullForm: 'GEO',
    description: 'Optimize content so AI-powered search engines can read, summarize, and cite your site as a trusted source.',
  },
  {
    icon: Bot,
    title: 'Large Language Model Optimization',
    fullForm: 'LLMO',
    description: 'Shape how AI chatbots and models reference your brand with accurate, high-authority information.',
  },
  {
    icon: MessageSquare,
    title: 'Answer Engine Optimization',
    fullForm: 'AEO',
    description: 'Optimize content for zero-click surfaces like voice assistants and featured snippets.',
  },
  {
    icon: MousePointerClick,
    title: 'Performance Marketing & Lead Acquisition',
    fullForm: 'PPC / Google Ads',
    description: 'Lead-focused paid search campaign setup and optimization across Google Ads.',
  },
  {
    icon: Megaphone,
    title: 'Paid Social Media Advertising',
    fullForm: 'Paid Social',
    description: 'Targeted paid campaigns across Meta, LinkedIn, and TikTok to drive qualified leads.',
  },
  {
    icon: Mail,
    title: 'Email Nurture & Customer Retention',
    fullForm: 'Email Marketing & Marketing Automation',
    description: 'Create targeted email campaigns and automated flows to nurture leads and drive conversions.',
  },
  {
    icon: Code2,
    title: 'Website Development & Conversion Optimization',
    fullForm: 'Website / Design, UX & CRO',
    description: 'Modern websites and landing pages designed to attract and convert customers.',
  },
  {
    icon: FileSearch,
    title: 'Digital PR & Authority Building',
    fullForm: 'E-E-A-T',
    description: 'Earn citations and backlinks from authoritative domains to strengthen brand trust and credibility.',
  },
  {
    icon: LineChart,
    title: 'AI Visibility Monitoring & Reporting',
    fullForm: 'AI Visibility Tracking',
    description: 'Track how your brand appears across AI Overviews, chatbots, and answer engines with monthly reports.',
  },
  {
    icon: Share2,
    title: 'Social Growth & Audience Engagement',
    fullForm: 'Social Media Management',
    description: 'Build brand presence and engage audiences across social platforms.',
  },
  {
    icon: Star,
    title: 'Influencer Partnerships & Brand Amplification',
    fullForm: 'Influencer Marketing',
    description: 'Partner with content creators to amplify your brand message and reach new audiences.',
  },
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