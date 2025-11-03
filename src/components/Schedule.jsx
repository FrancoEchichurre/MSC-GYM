import React from 'react';

const Schedule = () => {
  const schedule = [
    { day: 'Lunes', hours: '07:00 - 11:00 / 15:00 - 20:00', classes: 'Funcional, Pesas, HIIT' },
    { day: 'Martes', hours: '07:00 - 11:00 / 15:00 - 20:00', classes: 'Funcional, Pesas, HIIT' },
    { day: 'Miércoles', hours: '07:00 - 11:00 / 15:00 - 20:00', classes: 'Funcional, Pesas, HIIT' },
    { day: 'Jueves', hours: '07:00 - 11:00 / 15:00 - 20:00', classes: 'Funcional, Pesas, HIIT' },
    { day: 'Viernes', hours: '07:00 - 11:00 / 15:00 - 20:00', classes: 'Funcional, Pesas, HIIT' },
    { day: 'Sábado', hours: 'Cerrado', classes: 'Close Gym' },
    { day: 'Domingo', hours: 'Cerrado', classes: 'Close Gym' },
  ];

  return (
    <section id="schedule" className="py-16 md:py-24 bg-gym-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Nuestros <span className="text-gym-accent lg:text-[5rem] HHTwo">Turnos </span> Disponibles
          </h2>
          <div className="w-24 h-1 bg-gym-accent mx-auto mb-6"></div>
          <p className="section-subtitle">
            Entrena cuando más te convenga con nuestros horarios flexibles
          </p>
        </div>

        <div className="flex justify-center">
          {/* Opening hours table */}
          <div className="bg-gym-dark rounded-xl p-8 border border-gray-700 max-w-2xl w-full">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              🕐 Horarios de Gimnasio
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gym-accent">
                    <th className="text-left py-4 px-4 text-gym-accent font-bold text-lg">
                      Día
                    </th>
                    <th className="text-left py-4 px-4 text-gym-accent font-bold text-lg">
                      Horario
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-700 hover:bg-gym-darker transition-colors"
                    >
                      <td className="py-4 px-4 text-white font-semibold">
                        {item.day}
                      </td>
                      <td className="py-4 px-4 text-gray-300">
                        {item.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-gym-dark p-6 rounded-lg border border-gray-700 text-center">
            <div className="text-3xl mb-3">👥</div>
            <h4 className="text-white font-bold mb-2">Grupos Reducidos</h4>
            <p className="text-gray-400">Máximo 8 personas por clase</p>
          </div>
          <div className="bg-gym-dark p-6 rounded-lg border border-gray-700 text-center">
            <div className="text-3xl mb-3">🏆</div>
            <h4 className="text-white font-bold mb-2">Entrenadores Pro</h4>
            <p className="text-gray-400">Certificados y con experiencia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
