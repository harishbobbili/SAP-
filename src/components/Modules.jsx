import React from 'react';
import { Cog, ShoppingCart, BarChart, Truck, Cpu, Globe } from 'lucide-react';

const modules = [
  { icon: <Cog size={24} />, title: "Production Planning", desc: "Advanced SAP PP-DS strategies for manufacturing excellence." },
  { icon: <ShoppingCart size={24} />, title: "Procurement (MM)", desc: "Optimize your supply chain from requisition to payment." },
  { icon: <BarChart size={24} />, title: "Financials (FICO)", desc: "Real-time cost controlling and intelligent reporting." },
  { icon: <Truck size={24} />, title: "Logistics (SD/EWM)", desc: "Scale global logistics with integrated warehouse flows." },
  { icon: <Cpu size={24} />, title: "Digital Supply Chain", desc: "Harness IOT and edge computing within your SAP stack." },
  { icon: <Globe size={24} />, title: "Global Compliance", desc: "Navigate international trade regulations with SAP GTS." }
];

const Modules = () => {
  return (
    <section id="modules" style={{ backgroundColor: 'var(--bg-light)', padding: '100px 0' }}>
      <div className="container">
        <div className="modules-header" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', gap: '24px' }}>
          <div>
            <span className="label-text">SAP CORE MODULES</span>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', marginBottom: '0', color: 'var(--text-dark)', lineHeight: '1.2', fontFamily: 'var(--font-serif)' }}>Deep-Tier Integration.</h2>
          </div>
          <p style={{ maxWidth: '400px', fontSize: '1rem', color: 'var(--text-gray)', fontStyle: 'italic', margin: '0' }}>
            "We don't just implement modules; we weave them into your business fabric." — Arkafusion Tech Review 2026.
          </p>
        </div>

        <div className="modules-grid">
          {modules.map((module, idx) => (
            <div 
              key={idx} 
              className="module-item fade-in-up" 
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div style={{ color: 'var(--primary)', flexShrink: '0', backgroundColor: '#eff6ff', width: '48px', height: '48px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {module.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-dark)' }}>{module.title}</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', lineHeight: '1.6' }}>{module.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .modules-grid {
          display: grid;
          gap: 24px;
          grid-template-columns: 1fr;
        }

        @media (min-width: 768px) {
          .modules-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .modules-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .module-item {
          background-color: #ffffff;
          padding: 32px;
          border-radius: 8px;
          display: flex;
          gap: 20px;
          cursor: pointer;
          border: 1px solid #f3f4f6;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .module-item:hover { 
          transform: translateY(-5px); 
          border-color: var(--primary);
          box-shadow: 0 12px 24px rgba(9, 76, 178, 0.1);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Modules;
