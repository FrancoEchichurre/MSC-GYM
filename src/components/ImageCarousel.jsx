import React from 'react';
import { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de imágenes para el carrusel
  const images = [
    {
      src: '/src/assets/images/carousel-1.jpg',
      alt: 'Entrenamiento de fuerza'
    },
    {
      src: '/src/assets/images/carousel-2.jpg',
      alt: 'Rehabilitación deportiva'
    },
    {
      src: '/src/assets/images/carousel-3.jpg',
      alt: 'Acondicionamiento físico'
    },
    {
      src: '/src/assets/images/carousel-4.jpg',
      alt: 'Entrenamiento personalizado'
    },
    {
      src: '/src/assets/images/carousel-5.jpg',
      alt: 'Fisioterapia profesional'
    },
    {
      src: '/src/assets/images/carousel-6.jpg',
      alt: 'Performance deportivo'
    }
  ];

  // Auto-slide cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231CD8D2' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Nuestro Espacio
          </h2>
          <div className="w-24 h-1 bg-gym-accent mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Main Image Display - Vertical */}
            <div className="flex-1">
              <div className="relative h-[700px] md:h-[1000px] lg:h-[1100px] rounded-2xl overflow-hidden border-2 border-gym-accent/30 shadow-2xl shadow-gym-accent/20">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-gym-accent/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gym-accent/30 hover:border-gym-accent group"
                  aria-label="Imagen anterior"
                >
                  <svg
                    className="w-6 h-6 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-gym-accent/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gym-accent/30 hover:border-gym-accent group"
                  aria-label="Imagen siguiente"
                >
                  <svg
                    className="w-6 h-6 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Dots Navigation - Mobile only */}
              <div className="flex md:hidden justify-center gap-3 mt-6">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'w-12 h-3 bg-gym-accent'
                        : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Preview - Vertical on the right */}
            <div className="hidden md:flex flex-col gap-4 w-36 lg:w-44">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative h-32 lg:h-40 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                    index === currentIndex
                      ? 'border-gym-accent scale-105 shadow-lg shadow-gym-accent/50'
                      : 'border-gray-700 opacity-60 hover:opacity-100 hover:border-gym-accent/50'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Active indicator */}
                  {index === currentIndex && (
                    <div className="absolute inset-0 border-2 border-gym-accent pointer-events-none"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
