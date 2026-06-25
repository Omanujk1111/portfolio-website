
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Instagram, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
              Let's discuss your growth strategy
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Ready to improve your online visibility and attract more customers? Let's connect to discuss how we can achieve your business goals.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group transition-all duration-300 flex items-center justify-center px-8 py-6"
            >
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-primary-foreground">
                <MessageCircle className="h-5 w-5" />
                <span className="font-semibold">WhatsApp</span>
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border text-foreground hover:bg-muted hover:text-foreground transition-all duration-300 flex items-center justify-center px-8 py-6"
            >
              <a href="https://instagram.com/oblique.ohm" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <Instagram className="h-5 w-5" />
                <span className="font-semibold">Instagram</span>
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border text-foreground hover:bg-muted hover:text-foreground transition-all duration-300 flex items-center justify-center px-8 py-6"
            >
              <a href="mailto:om@oblique-ohm.com" className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" />
                <span className="font-semibold">Email</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
