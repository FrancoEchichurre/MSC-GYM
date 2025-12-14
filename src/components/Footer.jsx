import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Facebook', icon: '👥', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'YouTube', icon: '▶️', url: '#' },
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Horarios', href: '#schedule' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <footer className="bg-gym-darker border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div>
            <h3 className="text-gym-accent lg:text-[3rem] HHTwo">MOVE</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Transformando vidas a través del strength conditioning. Únete a nuestra comunidad y descubre tu potencial.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-2xl hover:text-gym-accent transition-colors transform hover:scale-110 duration-300"
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gym-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Calle 123</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <span>+xxxxx</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <span>info@movegym.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} <span className="text-gym-accent font-bold">MOVE</span> Strength Conditioning.
            Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Diseñado con 💪 para atletas comprometidos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
