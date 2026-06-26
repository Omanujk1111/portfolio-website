import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const WhatToExpect = () => {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-3xl border border-border bg-background/60 backdrop-blur-none p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ letterSpacing: "-0.02em" }}
              >
                What to Expect
              </h2>
            </div>

            <p className="text-lg leading-8 text-muted-foreground">
              When you reach out, we'll start with a free consultation and
              website audit to understand your business, goals, and current
              challenges. I'll get back to you within 24 hours, and together
              we'll discuss your target audience, marketing needs, and growth
              opportunities. Every recommendation is tailored to your business,
              with no generic strategies or sales pressure. You'll always
              receive honest communication, clear expectations, and transparent
              pricing before any work begins, so you can confidently decide if
              we're the right fit to help grow your business.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatToExpect;