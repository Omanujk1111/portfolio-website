
import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img 
              src="https://horizons-cdn.hostinger.com/7f943a4d-442f-49b7-b50a-b1b13f4e81e2/7f1961f8dc4799b3edd556f1a3ec44f9.jpg" 
              alt="Om Anuj Kuriyal Logo" 
              className="h-10 w-auto object-contain rounded-md mb-4"
            />
            <p className="text-muted-foreground mb-4 font-medium">Digital Marketing & Growth Specialist</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Helping businesses improve visibility, attract qualified leads, and build a stronger digital presence through proven marketing strategies.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://instagram.com/oblique.ohm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Instagram size={20} />
                <span>@oblique.ohm</span>
              </a>
              <a 
                href="mailto:kuriyalomanuj1111@gmail.com" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail size={20} />
                <span>kuriyalomanuj1111@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Om Anuj Kuriyal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
