import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🏃',
      title: 'Entrenamiento Funcional',
      description:
        'Ejercicios diseñados para mejorar tu rendimiento en actividades cotidianas. Desarrolla fuerza, movilidad y coordinación con movimientos naturales del cuerpo.',
      features: ['Mejora de movilidad', 'Core strength', 'Ejercicios compuestos', 'Entrenamiento de balance'],
    },
    {
      icon: '🏋️‍♂️',
      title: 'Levantamiento de Pesas',
      description:
        'Programa especializado en powerlifting y weightlifting. Aprende las técnicas correctas de sentadilla, press de banca, peso muerto y movimientos olímpicos.',
      features: ['Técnica apropiada', 'Progresión estructurada', 'Fuerza máxima', 'Prevención de lesiones'],
    },
    {
      icon: '⚡',
      title: 'Acondicionamiento Metabólico',
      description:
        'Entrena tu sistema cardiovascular con HIIT, circuitos y WODs. Quema grasa, aumenta tu resistencia y mejora tu capacidad aeróbica y anaeróbica.',
      features: ['HIIT Training', 'Circuitos intensos', 'Quema de grasa', 'Resistencia cardiovascular'],
    },
    {
      icon: '💆',
      title: 'Fisioterapia',
      description:
        'Tratamiento especializado para recuperación de lesiones y prevención. Mejora tu movilidad, alivia el dolor y acelera tu proceso de rehabilitación con técnicas profesionales.',
      features: ['Recuperación de lesiones', 'Terapia manual', 'Prevención de dolores', 'Movilidad articular'],
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-gym-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Nuestros <span className="text-gym-accent">Servicios</span>
          </h2>
          <div className="w-24 h-1 bg-gym-accent mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Programas especializados diseñados para llevar tu fitness al siguiente nivel
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gym-darker rounded-xl p-6 sm:p-8 border border-gray-700 hover:border-gym-accent transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-gym-accent/20"
            >
              {/* Icon */}
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 text-center">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed text-center">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 text-gym-accent mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <div className="mt-8 text-center">
                <a
                  href="#contact"
                  className="inline-block text-gym-accent font-bold hover:text-white transition-colors duration-300"
                >
                  Más información →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-6">
            ¿No estás seguro cuál programa es para ti?
          </p>
          <a href="#contact" className="btn-primary text-lg">
            Agenda una Consulta Gratuita
          </a>
        </div>

        {/* PLANES Section */}
        <div id="plans" className="mt-16 sm:mt-24 md:mt-32">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Nuestros <span className="text-gym-accent">Planes</span>
            </h2>
            <div className="w-24 h-1 bg-gym-accent mx-auto mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Todos los planes incluyen planificación individualizada.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Plan 1 - Básico */}
            <div className="bg-gym-darker rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-gray-700 hover:border-gym-accent transition-all duration-300 hover:transform hover:scale-105 flex flex-col">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">BÁSICO</h3>
                <div className="text-4xl sm:text-5xl font-bold text-gym-accent mb-2">$3800</div>
                <p className="text-sm sm:text-base text-gray-400">por mes</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start text-gray-300">
                  <svg className="w-6 h-6 text-gym-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>+ MATRÍCULA</span>
                </li>
              </ul>
            </div>

            {/* Plan 2 - Estándar */}
            <div className="bg-gym-darker rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-gray-700 hover:border-gym-accent transition-all duration-300 hover:transform hover:scale-105 flex flex-col">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">ESTÁNDAR</h3>
                <div className="text-4xl sm:text-5xl font-bold text-gym-accent mb-2">$3230</div>
                <p className="text-sm sm:text-base text-gray-400">3 meses</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start text-gray-300">
                  <svg className="w-6 h-6 text-gym-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>EXONERA MATRICULA</span>
                </li>
              </ul>
            </div>

            {/* Plan 3 - Premium - DESTACADO */}
            <div className="bg-gradient-to-b from-gym-accent/10 to-gym-darker rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-gym-accent transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-gym-accent/40 flex flex-col relative">
              <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-gym-accent text-black px-4 sm:px-6 py-1 rounded-full font-bold text-xs sm:text-sm">
                MÁS POPULAR
              </div>

              <div className="text-center mb-4 sm:mb-6 mt-2 sm:mt-0">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">PREMIUM</h3>
                <div className="text-4xl sm:text-5xl font-bold text-gym-accent mb-2">$2850</div>
                <p className="text-sm sm:text-base text-gray-400">6 meses</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start text-gray-300">
                  <svg className="w-6 h-6 text-gym-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>EXONERA MATRICULA</span>
                </li>
              </ul>
            </div>

            {/* Plan 4 - Elite */}
            <div className="bg-gym-darker rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-gray-700 hover:border-gym-accent transition-all duration-300 hover:transform hover:scale-105 flex flex-col">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">ELITE</h3>
                <div className="text-4xl sm:text-5xl font-bold text-gym-accent mb-2">$2470</div>
                <p className="text-sm sm:text-base text-gray-400">ANUAL</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start text-gray-300">
                  <svg className="w-6 h-6 text-gym-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>EXONERA MATRICULA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
