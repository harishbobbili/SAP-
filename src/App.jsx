import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Consultation from './pages/Consultation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ paddingTop: '72px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultation" element={<Consultation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
