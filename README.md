# MOVE - Strength Conditioning Gym

Landing page moderna y responsive para gimnasio especializado en entrenamiento funcional, levantamiento de pesas y acondicionamiento metabólico.

## Características

- **Design moderno y atractivo**: Paleta de colores oscura con acentos turquesa (#1CD8D2)
- **100% Responsive**: Funciona perfectamente en desktop, tablet y mobile
- **Navegación suave**: Smooth scroll entre secciones
- **Componentes interactivos**:
  - Navbar con menú hamburguesa en mobile
  - Formulario de contacto con validación
  - Efectos hover en tarjetas y botones
  - Animaciones sutiles
- **SEO optimizado**: Meta tags y estructura semántica

## Secciones

1. **Hero**: Página principal con título impactante y CTAs
2. **About**: Información sobre el gimnasio y sus valores
3. **Services**: 3 tarjetas con los servicios principales
4. **Schedule**: Horarios de apertura y clases programadas
5. **Contact**: Formulario funcional y datos de contacto
6. **Footer**: Links rápidos, redes sociales y newsletter

## Tecnologías

- **React 18** - Framework JavaScript
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS 4** - Framework de CSS utility-first
- **pnpm** - Gestor de paquetes eficiente

## Instalación

### Prerrequisitos

- Node.js 16+ instalado
- pnpm instalado globalmente

```bash
npm install -g pnpm
```

### Pasos de instalación

1. Clonar o navegar al directorio del proyecto:

```bash
cd move-gym
```

2. Instalar dependencias:

```bash
pnpm install
```

3. Iniciar el servidor de desarrollo:

```bash
pnpm dev
```

4. Abrir el navegador en `http://localhost:5173`

## Scripts disponibles

```bash
# Iniciar servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build

# Previsualizar build de producción
pnpm preview

# Linting (si se configura ESLint)
pnpm lint
```

## Estructura del proyecto

```
move-gym/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes de React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Schedule.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales con Tailwind
├── index.html           # HTML principal
├── tailwind.config.js   # Configuración de Tailwind
├── postcss.config.js    # Configuración de PostCSS
├── vite.config.js       # Configuración de Vite
└── package.json         # Dependencias del proyecto
```

## Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`:

```javascript
colors: {
  'gym-dark': '#0f172a',
  'gym-darker': '#1e293b',
  'gym-accent': '#1CD8D2',
}
```

### Componentes

Cada componente está en un archivo separado para fácil mantenimiento. Para modificar una sección, edita el archivo correspondiente en `src/components/`.

### Estilos globales

Los estilos custom y clases de utilidad están en `src/index.css`.

## Deployment

### Vercel (Recomendado)

1. Instalar Vercel CLI:

```bash
pnpm add -g vercel
```

2. Deployar:

```bash
vercel
```

### Netlify

1. Build del proyecto:

```bash
pnpm build
```

2. Subir la carpeta `dist` a Netlify

### Otras plataformas

El proyecto genera una carpeta `dist` después de `pnpm build` que puede ser servida por cualquier servidor web estático.

## Características técnicas

- **Formulario de contacto**: Validación client-side (email, campos requeridos, longitud mínima)
- **Navegación responsive**: Menú hamburguesa automático en pantallas pequeñas
- **Smooth scroll**: Navegación suave entre secciones con anclas
- **Hover effects**: Animaciones sutiles en tarjetas y botones
- **Performance optimizado**: Tailwind CSS purge automático en producción

## Próximas mejoras sugeridas

- [ ] Integrar backend para formulario de contacto (EmailJS, Formspree, etc.)
- [ ] Agregar galería de fotos del gimnasio
- [ ] Implementar sistema de reserva de clases
- [ ] Agregar testimonios de clientes
- [ ] Integrar Google Maps para ubicación
- [ ] Agregar blog de fitness

## Soporte

Para reportar problemas o sugerir mejoras, contactar a: info@movegym.com

## Licencia

Este proyecto fue creado para MOVE Strength Conditioning Gym.

---

**Desarrollado con** 💪 **para atletas comprometidos**
