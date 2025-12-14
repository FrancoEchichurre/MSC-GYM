import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ImageCarousel from './components/ImageCarousel';
import Services from './components/Services';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gym-dark">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              {/* About - Hidden on mobile, visible on md+ */}
              <div className="hidden md:block">
                <About />
              </div>
              <ImageCarousel />
              <Services />
              <Schedule />
              {/* Contact - Hidden on mobile, visible on md+ */}
              <div className="hidden md:block">
                <Contact />
              </div>

              {/* Mobile Contact Button - Subtle replacement for the section */}
              <div className="md:hidden py-16 px-4 text-center bg-gym-darker/50">
                <p className="text-gray-400 mb-6 text-lg">¿Tienes dudas o quieres empezar?</p>
                <Link to="/contact" className="inline-block border border-gym-accent text-gym-accent px-10 py-3 rounded-md hover:bg-gym-accent hover:text-black transition-all duration-300 font-bold tracking-wide text-lg">
                  CONTACTANOS
                </Link>
              </div>
            </main>
          } />

          <Route path="/about" element={<About isPage={true} />} />
          <Route path="/contact" element={<Contact isPage={true} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
