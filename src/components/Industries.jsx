import React from 'react';
import { Factory, ShoppingBag, Monitor, HeartPulse, Building2 } from 'lucide-react';

const Industries = () => {
  const industries = [
    { icon: <Factory size={20} color="var(--primary)" />, name: "Manufacturing" },
    { icon: <ShoppingBag size={20} color="var(--primary)" />, name: "Retail" },
    { icon: <Monitor size={20} color="var(--primary)" />, name: "IT Services" },
    { icon: <HeartPulse size={20} color="var(--primary)" />, name: "Healthcare" },
    { icon: <Building2 size={20} color="var(--primary)" />, name: "Banking" }
  ];

  return (
    <section id="industries" className="section-padding reveal" style={{ backgroundColor: '#ffffff', textAlign: 'center', overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: '40px' }}>
        <span className="label-text">INDUSTRIES WE SERVE</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '800', color: 'var(--text-dark)', fontFamily: 'var(--font-serif)' }}>Cross-Domain Expertise</h2>
      </div>

      <div className="ticker-wrapper" style={{ overflow: 'hidden', padding: '10px 0', display: 'flex', gap: '24px' }}>
        {/* Render 3 identical tracks to ensure smooth loop on extra ultra-wide screens */}
        {[1, 2, 3].map((trackIdx) => (
          <div key={trackIdx} className="ticker-track">
            {industries.map((ind, i) => (
              <div key={i} className="industry-pill">
                {ind.icon}
                <span className="industry-name">{ind.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
          .ticker-track {
            display: flex;
            align-items: center;
            gap: 24px;
            flex-shrink: 0;
            animation: scrollX 20s linear infinite;
          }

          .ticker-wrapper:hover .ticker-track {
            animation-play-state: paused;
          }

          .industry-pill {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 24px;
            border: 1px solid #e5e7eb;
            border-radius: 50px;
            background-color: #ffffff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.02);
            transition: all 0.3s ease;
            cursor: default;
          }

          .industry-pill:hover {
            box-shadow: 0 4px 12px rgba(9, 76, 178, 0.08);
            border-color: var(--primary, #094cb2);
          }

          .industry-name {
            font-size: 1rem;
            font-weight: 600;
            color: var(--text-dark, #111827);
            white-space: nowrap;
          }

          @keyframes scrollX {
            from {
              transform: translateX(0);
            }
            to {
              /* Move exactly -100% of the track's width MINUS one gap to seamlessly join the next element */
              transform: translateX(calc(-100% - 24px));
            }
          }
      `}</style>
    </section>
  );
};
export default Industries;
