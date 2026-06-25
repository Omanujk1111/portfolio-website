
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleConnectClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/90 backdrop-blur-lg border-b border-border py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link 
            to="/" 
            onClick={(e) => handleNavClick(e, '/')}
            className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
          >
            <img 
              src="https://horizons-cdn.hostinger.com/7f943a4d-442f-49b7-b50a-b1b13f4e81e2/7f1961f8dc4799b3edd556f1a3ec44f9.jpg" 
              alt="Om Anuj Kuriyal Logo" 
              className="h-12 md:h-14 w-auto object-contain rounded-md"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-4 lg:gap-8 min-w-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  location.pathname === link.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-4 shrink-0 relative z-10">
            <Button 
              onClick={handleConnectClick}
              className="relative bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] rounded-full transition-all duration-300 px-6 py-5 font-bold uppercase tracking-wider group"
            >
              <span className="relative z-10 flex items-center">
                LET'S CONNECT
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Button>
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-background z-50 md:hidden"
          >
            <div className="container mx-auto px-6 h-full flex flex-col">
              <div className="flex justify-between items-center py-5">
                <img 
                  src="https://horizons-cdn.hostinger.com/7f943a4d-442f-49b7-b50a-b1b13f4e81e2/7f1961f8dc4799b3edd556f1a3ec44f9.jpg" 
                  alt="Om Anuj Kuriyal Logo" 
                  className="h-12 w-auto object-contain rounded-md"
                />
                <button onClick={() => setIsOpen(false)} className="text-foreground p-2" aria-label="Close menu">
                  <X size={28} />
                </button>
              </div>
              
              <nav className="flex-grow flex flex-col justify-center items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-3xl font-semibold transition-colors duration-300 ${
                      location.pathname === link.href ? 'text-primary' : 'hover:text-primary'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
              
              <div className="py-8 relative z-10">
                <Button 
                  onClick={handleConnectClick}
                  className="relative bg-primary text-primary-foreground hover:bg-primary/90 w-full text-lg py-7 font-bold uppercase tracking-wider rounded-full animate-glow"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    LET'S CONNECT
                    <ArrowUpRight className="ml-2 w-5 h-5" />
                  </span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
