
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
              About me
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Hi, I'm <span className="text-foreground font-bold">Om Anuj Kuriyal</span>. I'm a <span className="text-primary font-semibold">Digital Marketing & Growth Specialist</span> focused on helping businesses increase visibility, generate qualified leads, and achieve measurable growth.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              My approach combines strategic thinking with technical expertise to deliver business outcomes. Whether it's optimizing search visibility, building conversion-focused websites, or managing performance marketing campaigns, I partner with businesses to build a stronger digital presence and drive customer acquisition.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
