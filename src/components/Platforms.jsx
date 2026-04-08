import React from 'react';

const platforms = [
  "S/4HANA", "BW/4HANA", "FIORI", "ARIBA", "SUCCESSFACTORS", "CONCUR", "QUALTRICS", "SAP BTP"
];

const Platforms = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff', textAlign: 'center' }}>
      <div className="container">
        <span className="label-text" style={{ color: '#6b7280', letterSpacing: '0.15em', marginBottom: '32px' }}>
          WE DELIVER EXCELLENCE ON THESE PLATFORMS
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', maxWidth: '800px', margin: '0 auto' }}>
          {platforms.map(p => (
            <div key={p} style={{ padding: '8px 24px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600', color: '#4b5563', letterSpacing: '0.05em' }}>
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Platforms;
