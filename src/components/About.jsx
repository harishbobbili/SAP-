import React from 'react';
import meetingImg from '../assets/hero.png';

const About = () => {
  return (
    <section id="about" className="section-padding reveal" style={{ backgroundColor: '#ffffff' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', color: '#111827', marginBottom: '24px', lineHeight: '1.1', maxWidth: '800px' }}>
            A dedicated SAP consulting and staffing partner delivering complete SAP project execution, transformation services, and on-demand SAP talent.
          </h2>
          <div style={{ width: '48px', height: '3px', backgroundColor: '#094cb2', marginBottom: '24px' }}></div>
          <p style={{ fontSize: '1rem', color: '#4b5563', lineHeight: '1.7', maxWidth: '800px' }}>
            Arkafusion bridges the gap between complex enterprise needs and specialized talent. Our scholarly approach to SAP architecture ensures sustainable growth and operational clarity for every client we serve.
          </p>
        </div>
        
        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', backgroundColor: '#f3f4f6' }}>
          <img src={meetingImg} alt="Team Meeting" style={{ width: '100%', height: 'auto', display: 'block', minHeight: '300px', objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
};
export default About;
