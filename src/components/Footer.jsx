import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Share2, Globe } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer id="contact" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Grey CTA Box */}
        <div style={{ backgroundColor: '#e5e7eb', borderRadius: '24px', padding: '60px 32px', textAlign: 'center', margin: '60px 0', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: '800', color: '#111827', fontFamily: 'var(--font-headline)', lineHeight: '1.2' }}>
            Transform your SAP landscape with the right experts and proven methodologies.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '400px' }}>
            <button className="btn btn-primary" onClick={() => navigate('/consultation')} style={{ width: '100%', padding: '16px 24px' }}>Book a Free Consultation</button>
            <button className="btn btn-secondary" onClick={() => navigate('/consultation')} style={{ width: '100%', padding: '16px 24px', backgroundColor: '#ffffff', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>Hire SAP Experts Today</button>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="footer-links-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', paddingBottom: '40px' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <svg width="42" height="42" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 30L20 10L28 30" stroke="#094cb2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 25H24" stroke="#094cb2" strokeWidth="4" strokeLinecap="round"/>
                <path d="M20 10L28 30" stroke="#10b981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
                <path d="M22 20L28 15" stroke="#10b981" strokeWidth="4" strokeLinecap="round" opacity="0.8"/>
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: '800', color: '#094cb2', lineHeight: '1' }}>Arka<span style={{ color: '#84cc16' }}>fusion</span></span>
                <span style={{ fontSize: '0.45rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px' }}>Advancing Transformation with Trust</span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: '1.6', maxWidth: '300px' }}>
              Leading the charge in SAP innovation and specialized talent acquisition for global enterprises.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
            <div>
              <h4 style={{ color: '#111827', marginBottom: '16px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.05em' }}>SERVICES</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="#" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '0.9rem' }}>Implementation</a></li>
                <li><a href="#" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '0.9rem' }}>Managed Support</a></li>
                <li><a href="#" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '0.9rem' }}>Staff Augmentation</a></li>
                <li><a href="#" style={{ color: '#094cb2', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>S/4HANA Migration</a></li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ color: '#111827', marginBottom: '16px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.05em' }}>COMPANY</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="#" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '0.9rem' }}>About Us</a></li>
                <li><a href="#" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '0.9rem' }}>Insights</a></li>
                <li><a href="#" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '0.9rem' }}>Careers</a></li>
                <li><a href="#" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#111827', marginBottom: '16px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.05em' }}>CONTACT</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '12px' }}>
                <MapPin size={18} color="#6b7280" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.5' }}>Flat No.401, 4th Floor, Tomar House, Opp. Karnataka Bank, Srinagar Colony, Banjara Hills, Hyderabad, Telangana 500073, India</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Mail size={18} color="#6b7280" />
                <span style={{ fontSize: '0.9rem', color: '#4b5563' }}>salesinfo@arkafusion.com</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={18} color="#6b7280" />
                <span style={{ fontSize: '0.9rem', color: '#4b5563' }}>+91 8309115543</span>
              </li>
            </ul>
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="X (Twitter)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid #e5e7eb', padding: '24px 0', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>&copy; 2024 Arkafusion Consulting. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.75rem' }}>
            <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
      
      <style>{`
        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #f3f4f6;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4b5563;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .social-icon:hover {
          background-color: var(--primary, #094cb2);
          color: #ffffff;
        }

        @media (min-width: 768px) {
          .footer-links-grid { grid-template-columns: 1fr 2fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
