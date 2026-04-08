import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero-section reveal" style={{ paddingTop: '100px', paddingBottom: '80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Animated Background Blobs */}
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: '#094cb2', opacity: 0.06, filter: 'blur(80px)', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: '#094cb2', opacity: 0.06, filter: 'blur(80px)', zIndex: 0 }}></div>
        
        {/* Subtle layer */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.7) 100%)', zIndex: 0 }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#fde047', padding: '6px 16px', borderRadius: '50px', marginBottom: '32px' }}>
          <Star size={12} fill="#094cb2" color="#094cb2" style={{ marginRight: '6px' }} />
          <span style={{ color: '#094cb2', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Global SAP Partner</span>
        </div>

        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '800', color: '#111827', marginBottom: '24px', lineHeight: '1.05', maxWidth: '900px', margin: '0 auto 24px auto' }}>
          Empowering Businesses with Comprehensive SAP Solutions & Expert Talent
        </h1>
        
        <p style={{ fontSize: '1.1rem', color: '#4b5563', maxWidth: '750px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          We help organizations implement, optimize, and scale their SAP ecosystems with highly skilled consultants and end-to-end project delivery services.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }}>
          <button className="btn btn-primary" onClick={() => navigate('/consultation')} style={{ flex: '1 1 auto', padding: '16px 24px', minWidth: '200px' }}>Book a Free Consultation</button>
          <button className="btn btn-secondary" style={{ flex: '1 1 auto', padding: '16px 24px', minWidth: '200px', backgroundColor: '#e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>Hire SAP Experts</button>
        </div>

        {/* Trust Stats */}
        <div className="hero-stats-container">
          <div className="hero-stat">
            <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#094cb2', lineHeight: '1' }}>50+</span>
            <span style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '8px', fontWeight: '500' }}>SAP Experts</span>
          </div>
          <div className="hero-stat">
            <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#094cb2', lineHeight: '1' }}>100%</span>
            <span style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '8px', fontWeight: '500' }}>Project Uptime</span>
          </div>
          <div className="hero-stat">
            <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#094cb2', lineHeight: '1' }}>15+</span>
            <span style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '8px', fontWeight: '500' }}>Enterprise Clients</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUpDelay {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-stats-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin: 64px auto 0;
          max-width: 800px;
          opacity: 0;
          animation: fadeInUpDelay 0.8s ease-out 0.3s forwards;
        }

        .hero-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }

        @media (min-width: 768px) {
          .hero-stats-container {
            flex-direction: row;
            justify-content: center;
            gap: 0;
          }
          .hero-stat:not(:last-child) {
            border-right: 1px solid #d1d5db;
          }
        }

        @keyframes bgShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .hero-section {
          background: linear-gradient(-45deg, #eff6ff, #ffffff, #eff6ff);
          background-size: 400% 400%;
          animation: bgShift 8s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
