import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail } from 'lucide-react';
import WhatToExpect from '@/components/WhatToExpect.jsx';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Digital Marketing & Growth Specialist</title>
        <meta
          name="description"
          content="Get in touch to discuss your digital marketing and growth needs. Available via WhatsApp and email."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-32 min-h-screen"
      >
        {/* Main Content */}
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <h1
                className="text-5xl md:text-6xl font-bold mb-6"
                style={{ letterSpacing: "-0.02em" }}
              >
                Let's discuss your growth strategy
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to improve your online visibility and attract more
                customers? Let's connect to discuss how we can achieve your
                business goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center items-center gap-4 mt-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group transition-all duration-300 flex items-center justify-center px-8 py-6"
              >
                <a
                  href="https://wa.me/919536177044?text=Hi%20Om%2C%20I%20visited%20your%20portfolio%20and%20I'm%20interested%20in%20your%20digital%20marketing%20services.%20I'd%20like%20to%20discuss%20my%20business%20goals%20and%20see%20how%20you%20can%20help.%20Please%20let%20me%20know%20when%20you're%20available."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-primary-foreground"
                >
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
                <a
                  href="mailto:kuriyalomanuj1111@gmail.com"
                  className="flex items-center justify-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  <span className="font-semibold">Email</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* What To Expect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24"
        >
          <WhatToExpect />
        </motion.div>
      </motion.div>
    </>
  );
};

export default ContactPage;