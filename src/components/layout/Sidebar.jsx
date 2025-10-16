import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { 
  HomeIcon, 
  UserGroupIcon, 
  WrenchScrewdriverIcon, 
  CpuChipIcon, 
  DocumentTextIcon, 
  NewspaperIcon, 
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Home', path: '/', icon: HomeIcon },
  { name: 'About Us', path: '/about', icon: UserGroupIcon },
  { name: 'Services', path: '/services', icon: WrenchScrewdriverIcon },
  { name: 'AI Products', path: '/products', icon: CpuChipIcon },
  { name: 'Projects', path: '/projects', icon: DocumentTextIcon },
  { name: 'Blog', path: '/blog', icon: NewspaperIcon },
  { name: 'Contact Us', path: '/contact', icon: EnvelopeIcon },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const location = useLocation();

  // Detect desktop breakpoint so sidebar is persistent on larger screens
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (e) => setIsDesktop(e.matches);
    setIsDesktop(mq.matches);
    try {
      mq.addEventListener('change', onChange);
    } catch {
      mq.addListener(onChange);
    }

    return () => {
      try {
        mq.removeEventListener('change', onChange);
      } catch {
        mq.removeListener(onChange);
      }
    };
  }, []);

  // Lock body scroll on mobile when sidebar is open; close on Escape
  useEffect(() => {
    if (isOpen && !isDesktop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const onKey = (e) => {
      if (e.key === 'Escape' && !isDesktop) setIsOpen(false);
    };

    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, isDesktop]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarVariants = {
    open: { 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      } 
    },
    closed: { 
      x: "-100%",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      } 
    }
  };

  const navItemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-dark-light shadow-lg md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6 text-primary" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-primary" />
        )}
      </button>

      {/* Overlay */}
      <AnimatePresence>
          {isOpen && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      {/* For accessibility: don't keep the mobile sidebar in the DOM when closed. */}
      {/* Render on desktop always; on mobile render only when open so aria-hidden won't contain focusable elements. */}
      {(isDesktop || isOpen) && (
  <Motion.nav
        variants={sidebarVariants}
        initial={isDesktop ? false : 'closed'}
        animate={isDesktop ? 'open' : (isOpen ? 'open' : 'closed')}
        aria-hidden={isDesktop ? false : !isOpen}
    className="fixed top-0 left-0 h-full w-72 sm:w-64 md:w-48 bg-white dark:bg-dark-light shadow-xl z-40 md:translate-x-0 md:z-30 md:border-r md:border-gray-200 dark:md:border-dark-lighter"
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200 dark:border-dark-lighter">
            <Link to="/" className="flex items-center justify-center w-full" onClick={() => setIsOpen(false)}>
              <span className="text-2xl font-display font-bold gradient-text text-center">Naitify_AiTech</span>
            </Link>
          </div>

          {/* Nav Links */}
          <div className="flex-1 py-8 overflow-y-auto">
            <ul className="space-y-2 px-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                
                return (
                  <Motion.li key={item.name} variants={navItemVariants}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`sidebar-link relative flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                              isActive
                                ? 'bg-primary text-white'
                                : 'hover:bg-gray-100 dark:hover:bg-dark-lighter text-gray-700 dark:text-gray-200'
                            }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.name}</span>
                      {isActive && (
                        <span className="absolute right-0 h-8 w-1 bg-secondary rounded-l-full" aria-hidden />
                      )}
                    </Link>
                  </Motion.li>
                );
              })}
            </ul>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-dark-lighter">
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Naitify_AiTech
              <br />
              by Naitik Kushwaha
            </p>
          </div>
        </div>
  </Motion.nav>
      )}
    </>
  );
};

export default Sidebar;