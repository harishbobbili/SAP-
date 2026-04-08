import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5);

const WhyChooseUs = () => {
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        startAnimation();
        // Disconnect after first trigger
        if (statsRef.current) {
          observer.unobserve(statsRef.current);
        }
      }
    }, { threshold: 0.2 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  const startAnimation = () => {
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeOutQuint(progress);

      setVal1(Math.floor(easeProgress * 40));
      setVal2(Math.floor(easeProgress * 100));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setVal1(40);
        setVal2(100);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section className="section-padding reveal" style={{ backgroundColor: '#f3f4f6' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>
        <div>
          <span className="label-text">WHY INDUSTRY LEADERS CHOOSE US</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: '800', marginBottom: '32px', lineHeight: '1.2', color: 'var(--text-dark)', fontFamily: 'var(--font-serif)' }}>Why Industry Leaders Choose Us</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              { title: "Experienced Professionals", desc: "Our curated access to premium SAP architects and consultants ensures top-tier deployments." },
              { title: "Proven Methodologies", desc: "Engagement frameworks that adapt to your project scale and specific domain needs." },
              { title: "Seamless Delivery", desc: "End-to-end operational execution to secure immediate ROI and continuous scaling." }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px' }}>
                <CheckCircle2 color="var(--primary)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '6px' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blue Box / Stats Container */}
        <div ref={statsRef} style={{ backgroundColor: '#0c4a6e', background: 'linear-gradient(135deg, var(--primary) 0%, #1e3a8a 100%)', borderRadius: '12px', padding: '40px 32px', color: 'white', display: 'flex', flexDirection: 'column', gap: '32px', boxShadow: '0 20px 25px -5px rgba(9, 76, 178, 0.2)' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--font-serif)' }}>Quantifiable Business Impact</h3>
          <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1', marginBottom: '8px' }}>{val1}%</div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.9, fontWeight: '600' }}>ACCELERATED TIME-TO-MARKET</div>
          </div>
          <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1', marginBottom: '8px' }}>{val2}%</div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.9, fontWeight: '600' }}>RELIABILITY & UPTIME RATE</div>
          </div>
          <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
          <div style={{ opacity: hasAnimated ? 1 : 0, transition: 'opacity 1.5s ease-out' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1', marginBottom: '8px' }}>Top-Tier</div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.9, fontWeight: '600' }}>CONSULTANT NETWORK</div>
          </div>
        </div>
      </div>
      <style>{`
          @media (min-width: 992px) {
              .container {
                  grid-template-columns: 1fr 1fr !important;
                  align-items: center;
              }
          }
      `}</style>
    </section>
  );
};
export default WhyChooseUs;
