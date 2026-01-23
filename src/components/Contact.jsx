import React from 'react';
import { useState } from 'react';

const Contact = ({ isPage = false }) => {
  // ... existing state ... (This line is just a placeholder, I am replacing the declaration and return start)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    return newErrors;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid - simulate submission
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className={`${isPage ? 'min-h-screen pt-24 pb-12' : 'py-16 md:py-24'} bg-gym-dark`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-gym-accent">Contáctanos</span>
          </h2>
          <div className="w-24 h-1 bg-gym-accent mx-auto mb-6"></div>
          <p className="section-subtitle">
            ¿Listo para comenzar tu transformación? Escríbenos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gym-darker rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-gym-accent/20 border border-gym-accent rounded-lg">
                <p className="text-gym-accent font-semibold">
                  ✓ ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gym-dark border ${errors.name ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg text-white focus:outline-none focus:border-gym-accent transition-colors`}
                  placeholder="Tu nombre"
                />
                {errors.name && <p className="mt-2 text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gym-dark border ${errors.email ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg text-white focus:outline-none focus:border-gym-accent transition-colors`}
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="mt-2 text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Phone field */}
              <div>
                <label htmlFor="phone" className="block text-gray-300 font-semibold mb-2">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gym-dark border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gym-accent transition-colors"
                  placeholder="+54 9 11 1234-5678"
                />
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 bg-gym-dark border ${errors.message ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg text-white focus:outline-none focus:border-gym-accent transition-colors resize-none`}
                  placeholder="Cuéntanos sobre tus objetivos..."
                />
                {errors.message && <p className="mt-2 text-red-500 text-sm">{errors.message}</p>}
              </div>

              {/* Submit button */}
              <button type="submit" className="btn-primary w-full text-lg">
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gym-darker rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Información</h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="text-gym-accent text-2xl mr-4 mt-1">📍</div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Dirección</h4>
                    <p className="text-gray-400">
                      Calle 123<br />
                      Calle 456<br />
                      Uruguay
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="text-gym-accent text-2xl mr-4 mt-1">📞</div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Teléfono</h4>
                    <p className="text-gray-400">+xxxxx</p>
                    <p className="text-gray-400">+xxxxx</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="text-gym-accent text-2xl mr-4 mt-1">✉️</div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email</h4>
                    <p className="text-gray-400">info@trainingclubmovement.com</p>
                    <p className="text-gray-400">soporte@trainingclubmovement.com</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start">
                  <div className="text-gym-accent text-2xl mr-4 mt-1">🌐</div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Redes Sociales</h4>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-gym-accent transition-colors"
                        aria-label="Instagram"
                      >
                        Instagram
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-gym-accent transition-colors"
                        aria-label="Facebook"
                      >
                        Facebook
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-gym-accent transition-colors"
                        aria-label="Twitter"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business hours */}
            <div className="bg-gym-darker rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Horario de atención</h3>
              <div className="space-y-2 text-gray-400">
                <p><span className="text-white font-semibold">Lunes - Viernes:</span> 06:00 - 23:00</p>
                <p><span className="text-white font-semibold">Sábados:</span> 08:00 - 20:00</p>
                <p><span className="text-white font-semibold">Domingos:</span> 08:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
