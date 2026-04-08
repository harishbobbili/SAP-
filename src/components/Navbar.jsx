import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Industries', href: '#industries' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -40% 0px' }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.href.substring(1));
      if (el) observer.observe(el);
    });

    return () => {
      navLinks.forEach((link) => {
        const el = document.getElementById(link.href.substring(1));
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      width: '100%', 
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : '#ffffff', 
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
      boxShadow: isScrolled ? '0 1px 12px rgba(0,0,0,0.08)' : 'none',
      borderBottom: isScrolled ? '1px solid transparent' : '1px solid #f3f4f6', 
      zIndex: 50, 
      padding: '16px 0',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 30L20 10L28 30" stroke="#094cb2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 25H24" stroke="#094cb2" strokeWidth="4" strokeLinecap="round"/>
            <path d="M20 10L28 30" stroke="#10b981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
            <path d="M22 20L28 15" stroke="#10b981" strokeWidth="4" strokeLinecap="round" opacity="0.8"/>
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
             <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#094cb2', lineHeight: '1', letterSpacing: '-0.02em' }}>Arka<span style={{ color: '#84cc16' }}>fusion</span></span>
             <span style={{ fontSize: '0.35rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '2px' }}>Advancing Transformation with Trust</span>
          </div>
        </div>
        
        <div className="desktop-nav" style={{ display: 'none', alignItems: 'center', gap: '32px' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'none' }} className="desktop-btn">
                <button className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem', borderRadius: '4px' }}>Get Started</button>
            </span>
            <button 
              className="mobile-menu" 
              onClick={() => setIsOpen(!isOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
            >
              {isOpen ? <X size={24} color="#094cb2" /> : <Menu size={24} color="#094cb2" />}
            </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="mobile-dropdown" style={{ backgroundColor: '#ffffff', width: '100%', borderBottom: '1px solid #f3f4f6', position: 'absolute', top: '100%', left: 0, padding: '16px 0' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
            <button className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>Get Started</button>
          </div>
        </div>
      )}

      <style>{`
        .nav-link {
          text-decoration: none;
          color: var(--text-gray, #4b5563);
          font-weight: 500;
          font-size: 0.95rem;
          position: relative;
          padding-bottom: 4px;
          transition: color 0.2s ease;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--primary, #094cb2);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary, #094cb2);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }

        .mobile-nav-link {
          text-decoration: none;
          color: var(--text-dark, #111827);
          font-weight: 600;
          font-size: 1.1rem;
          padding: 8px 0;
          display: block;
        }
        
        .mobile-nav-link.active {
          color: var(--primary, #094cb2);
        }

        @media (min-width: 768px) {
            .mobile-menu { display: none !important; }
            .desktop-nav { display: flex !important; }
            .desktop-btn { display: inline-block !important; }
            .mobile-dropdown { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
