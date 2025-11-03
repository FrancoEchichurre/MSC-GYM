import React from 'react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    '/images/hero-bg-1.jpg',
    '/images/hero-bg-2.jpg',
    '/images/hero-bg-3.jpg',
    '/images/hero-bg-4.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231CD8D2' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-0">
        <div className="text-center">
          <h1 className="text-7xl sm:text-9xl md:text-[14rem] lg:text-[18rem] text-white tracking-tight HHTwo leading-[0.75] -my-4 sm:-my-8">
            MOVE
          </h1>

          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-gym-accent mb-8 sm:mb-12 md:mb-20 tracking-wider HHTwo">
            Strength Conditioning
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 mb-8 sm:mb-10 md:mb-14 max-w-4xl mx-auto leading-relaxed px-4">
            Performance & Rehabilitación<br />
            <span className="text-gym-accent font-semibold text-sm sm:text-base md:text-lg lg:text-xl block mt-2">Rendimiento Deportivo - Fisioterapia Deportiva - Entrenamiento Personalizado</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <a href="#contact" className="btn-primary text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto">
              Contactanos
            </a>
            <a href="#services" className="btn-secondary text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto">
              Ver Planes
            </a>
          </div>

          <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4">
            <div className="bg-gym-darker/50 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-lg border border-gym-accent/20 hover:border-gym-accent/60 transition-all duration-300">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-gym-accent mb-2 sm:mb-3">200+</div>
              <div className="text-base sm:text-lg md:text-xl text-gray-300 font-semibold">Clientes entrenados</div>
            </div>
            <div className="bg-gym-darker/50 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-lg border border-gym-accent/20 hover:border-gym-accent/60 transition-all duration-300">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-gym-accent mb-2 sm:mb-3">7+</div>
              <div className="text-base sm:text-lg md:text-xl text-gray-300 font-semibold">Años de Experiencia</div>
            </div>
            <div className="bg-gym-darker/50 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-lg border border-gym-accent/20 hover:border-gym-accent/60 transition-all duration-300">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-gym-accent mb-2 sm:mb-3">100%</div>
              <div className="text-base sm:text-lg md:text-xl text-gray-300 font-semibold">Personalizado</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gym-accent">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;