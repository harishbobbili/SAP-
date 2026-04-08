import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Platforms from './components/Platforms';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main style={{ paddingTop: '72px' }}>
        <Hero />
        <About />
        <Services />
        <Platforms />
        <WhyChooseUs />
        <Industries />
      </main>
      <Footer />
    </div>
  );
}

export default App;
