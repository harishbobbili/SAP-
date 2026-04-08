import React from 'react';
import { Layers, Settings, Users, ArrowUpCircle } from 'lucide-react';

const services = [
  { icon: <Layers size={24} color="#094cb2" />, title: "SAP Implementation & Rollouts", desc: "Full-lifecycle implementations and strategic global rollouts tailored to your business models." },
  { icon: <Settings size={28} color="#094cb2" />, title: "SAP Support & Managed Services", desc: "Uninterrupted L1 - L3 support to ensure peak performance and system reliability." },
  { icon: <Users size={24} color="#094cb2" />, title: "SAP Staffing & Resource Augmentation", desc: "On-demand access to certified SAP experts and architects that expand your core team." },
  { icon: <ArrowUpCircle size={24} color="#094cb2" />, title: "SAP Upgrade & Migration", desc: "Seamless ECC to S/4HANA transitions with minimal system downtime and secure data handling." }
];

const Services = () => {
  return (
    <section id="services" className="section-padding reveal" style={{ backgroundColor: '#f9fafb' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <div>
          <span className="label-text">WHAT WE OFFER</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', marginBottom: '16px', lineHeight: '1.1' }}>End-to-End SAP Services</h2>
          <p style={{ color: '#4b5563', maxWidth: '600px', lineHeight: '1.6' }}>
            We drive robust, transformational SAP strategies at every stage of your digital enterprise journey.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr' }}>
          {services.map((srv, i) => (
            <div key={i} className="service-card" style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '4px' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#eff6ff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                {srv.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '12px', color: '#111827' }}>{srv.title}</h3>
              <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6' }}>{srv.desc}</p>
              
              <a href="#" className="service-card-link">
                Learn more <span style={{ marginLeft: '4px' }}>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`
          .service-card {
            border-left: 1px solid #f3f4f6;
            border-right: 1px solid #f3f4f6;
            border-bottom: 1px solid #f3f4f6;
            border-top: 2px solid #f3f4f6;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            position: relative;
          }

          .service-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(9, 76, 178, 0.1);
            border-top-color: var(--primary, #094cb2);
          }

          .service-card-link {
            color: var(--primary, #094cb2);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            display: inline-flex;
            align-items: center;
            margin-top: auto;
            padding-top: 16px;
            opacity: 0;
            transition: all 0.3s ease;
            transform: translateX(-4px);
          }

          .service-card:hover .service-card-link {
            opacity: 1;
            transform: translateX(0);
          }

          @media (min-width: 768px) {
              .container > div:last-child {
                  grid-template-columns: repeat(2, 1fr) !important;
              }
          }
      `}</style>
    </section>
  );
};
export default Services;
