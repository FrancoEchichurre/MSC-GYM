import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  // Navigation links configuration
  // For mobile, we want specific routes for About and Contact
  // For desktop, we want scroll anchors
  const navLinks = [
    { name: 'Inicio', href: '#home', mobileHref: '/', type: 'scroll' },
    { name: 'Nosotros', href: '#about', mobileHref: '/about', type: 'page' }, // Page on mobile, scroll on desktop
    { name: 'Servicios', href: '#services', mobileHref: '/#services', type: 'scroll' },
    { name: 'Planes', href: '#plans', mobileHref: '/#plans', type: 'scroll' },
    { name: 'Horarios', href: '#schedule', mobileHref: '/#schedule', type: 'scroll' },
    { name: 'Contacto', href: '#contact', mobileHref: '/contact', type: 'page' }, // Page on mobile, scroll on desktop
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (e, link, isMobile) => {
    setIsOpen(false);

    // If it's a separate page on mobile and we are on mobile
    if (isMobile && link.type === 'page') {
      // Allow default Link behavior (navigation)
      return;
    }

    // Standard scroll handling for desktop or scroll-type links
    if (link.type === 'scroll' || !isMobile) {
      e.preventDefault();

      // If we are not on home page, go there first
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // We are on home page
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (isMobile && link.mobileHref.startsWith('/#')) {
          // Try to find by id stripped from mobileHref
          const id = link.mobileHref.split('#')[1];
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Detectar scroll y manejar visibilidad
  useEffect(() => {
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <nav className={`fixed w-full top-0 z-50 bg-gym-darker/95 backdrop-blur-sm shadow-lg transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center h-16 ${!isHomePage ? 'justify-center md:justify-between' : 'justify-between'}`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-5xl font-normal text-gym-accent HHTwo">
              MSC
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link, false)}
                  className="text-gray-300 hover:text-gym-accent transition-colors duration-300 font-semibold text-lg cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button - Only show on Home Page */}
          {isHomePage && (
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-gym-accent focus:outline-none focus:text-gym-accent"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gym-dark/98">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.mobileHref}
                onClick={(e) => handleNavClick(e, link, true)}
                className="text-gray-300 hover:text-gym-accent block px-3 py-2 text-base font-semibold transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
