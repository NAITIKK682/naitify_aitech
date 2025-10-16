import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { navItems } from '../../data/navItems';
import LoginModal from '../../pages/auth/LoginModal';
import SignupModal from '../../pages/auth/SignupModal';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    function handleOutside(e) {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    function handleEsc(e) {
      if (e.key === 'Escape') {
        setOpen(false);
        setIsLoginOpen(false);
        setIsSignupOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <React.Fragment>
      <header className="fixed top-0 right-0 left-0 md:left-48 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-dark-lighter h-16">
      <div className="container-custom mx-auto py-3 px-4 md:px-6 h-full flex items-center justify-between">

        {/* Desktop nav - left side */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile title centered visually but we keep it simple: hidden on md */}
        <div className="flex items-center md:hidden">
          <Link to="/" className="flex items-center">
            <Motion.span
              className="text-lg font-display font-bold gradient-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
            >
              Naitify_AiTech
            </Motion.span>
          </Link>
        </div>

        {/* Right side - company name + theme toggle + mobile menu button */}
        <div className="flex items-center space-x-3 ml-auto">
          {/* Company name - visible on md and up, to the right */}
          <div className="hidden md:flex items-center mr-3">
            <Link to="/" className="flex items-center">
              <Motion.span
                className="text-lg font-display font-bold gradient-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
              >
                Naitify_AiTech
              </Motion.span>
            </Link>
          </div>

          {/* Theme toggle always visible */}
          <ThemeToggle />

          {/* Auth buttons - desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary-light/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {user?.name ? user.name[0].toUpperCase() : user?.email[0].toUpperCase()}
                    </span>
                  </div>
                  <span>Profile</span>
                </Link>
                {user?.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-red-600 dark:text-red-400">A</span>
                    </div>
                    <span>Admin Panel</span>
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="btn-secondary flex items-center space-x-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3zm11.707 4.707a1 1 0 0 0-1.414-1.414L10 9.586 8.707 8.293a1 1 0 0 0-1.414 1.414L8.586 11l-1.293 1.293a1 1 0 1 0 1.414 1.414L10 12.414l1.293 1.293a1 1 0 0 0 1.414-1.414L11.414 11l1.293-1.293z" clipRule="evenodd" />
                  </svg>
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => setIsSignupOpen(true)}
                  className="btn-primary"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Desktop CTA - hidden on small */}
          <Link to="/contact" className="hidden md:inline-flex btn-secondary">
            Get in Touch
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden relative">
            <button
              ref={btnRef}
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Open navigation menu"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {/* three-dot vertical icon */}
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
              </svg>
            </button>

            {/* Mobile dropdown menu */}
              {open && (
              <Motion.div
                ref={menuRef}
                initial={{ opacity: 0, scale: 0.96, y: -6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -6 }}
                transition={{ duration: 0.18 }}
                className="absolute right-0 mt-2 w-64 bg-white dark:bg-dark border border-gray-200 dark:border-dark-lighter rounded-lg shadow-lg p-3 z-50"
              >
                <ul className="space-y-2 text-sm">
                  {navItems.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={handleLinkClick}
                        className="mobile-nav-item block w-full text-gray-700 dark:text-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  {/* Auth buttons in mobile menu */}
                  {user ? (
                    <>
                      <li>
                        <Link
                          to="/profile"
                          onClick={handleLinkClick}
                          className="mobile-nav-item flex items-center space-x-3 w-full text-left text-gray-700 dark:text-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                        >
                          <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary-light/10 flex items-center justify-center">
                            <span className="text-sm font-bold text-primary">
                              {user?.name ? user.name[0].toUpperCase() : user?.email[0].toUpperCase()}
                            </span>
                          </div>
                          <span>Profile</span>
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setOpen(false);
                            handleLogout();
                          }}
                          className="mobile-nav-item block w-full text-left text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <button
                          onClick={() => {
                            setOpen(false);
                            setIsLoginOpen(true);
                          }}
                          className="mobile-nav-item block w-full text-left text-gray-700 dark:text-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                        >
                          Login
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setOpen(false);
                            setIsSignupOpen(true);
                          }}
                          className="mobile-nav-item block w-full text-left text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                        >
                          Sign Up
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </Motion.div>
            )}
          </div>
        </div>
      </div>
    </header>

      {/* Auth Modals */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </React.Fragment>
  );
};

export default Header;