import React from 'react';

const About = ({ isPage = false }) => {
  return (
    <section id="about" className={`${isPage ? 'min-h-screen pt-24 pb-12' : 'py-16 md:py-24'} bg-gym-darker`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Sobre <span className="text-9xl md:text-[14rem] lg:text-[6rem] text-white tracking-tight HHTwo leading-[0.75] -my-8">TCM</span>
          </h2>
          <div className="w-24 h-1 bg-gym-accent mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content - Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              En <span className="text-gym-accent font-bold">Training Club Movement</span>, creemos que el fitness va más allá de levantar pesas.
              Es una filosofía de vida que combina fuerza, resistencia y determinación mental para ayudarte a alcanzar tu máximo potencial.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Nuestro enfoque único en <span className="text-gym-accent font-bold">TCM</span> está diseñado
              para desarrollar atletas completos. Ya seas principiante o atleta experimentado, nuestros programas personalizados
              te llevarán al siguiente nivel.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Contamos con entrenadores certificados, equipamiento de última generación y una comunidad apasionada que te motivará
              cada día. En Training Club Movement, no solo transformas tu cuerpo, <span className="text-gym-accent font-semibold">transformas tu vida</span>.
            </p>

            <div className="pt-6">
              <a href="#services" className="btn-primary">
                Descubre Nuestros Servicios
              </a>
            </div>
          </div>

          {/* Right content - Features */}
          <div className="space-y-6">
            <div className="bg-gym-dark p-6 rounded-lg border-l-4 border-gym-accent hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start">
                <div className="text-4xl mr-4">💪</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Entrenamiento Personalizado</h3>
                  <p className="text-gray-400">
                    Programas adaptados a tus objetivos específicos con seguimiento continuo de tu progreso.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gym-dark p-6 rounded-lg border-l-4 border-gym-accent hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start">
                <div className="text-4xl mr-4">🏋️</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Equipamiento Premium</h3>
                  <p className="text-gray-400">
                    Instalaciones de primera calidad con el mejor equipamiento para tu entrenamiento.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gym-dark p-6 rounded-lg border-l-4 border-gym-accent hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start">
                <div className="text-4xl mr-4">🔥</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Comunidad Motivadora</h3>
                  <p className="text-gray-400">
                    Únete a una familia de atletas comprometidos que se apoyan mutuamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
