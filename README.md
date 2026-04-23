# AV2R La Mundial — Landing Page

Sitio web de presentación para **AV2R La Mundial**, empresa de transporte terrestre de carga con base en Ciudad de México.

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [Astro](https://astro.build) | 6.1 | Framework principal (static output) |
| [Tailwind CSS](https://tailwindcss.com) | 4.2 | Estilos (CSS-first con `@theme`) |
| [Formspree](https://formspree.io) | — | Manejo de formulario de cotización |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | 3.7 | Generación automática de sitemap |

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Hero.astro          # Sección hero con mapa de rutas animado y foto del camión
│   ├── RouteMap.astro      # Mapa SVG animado de México con rutas desde CDMX
│   ├── Services.astro      # Sección de servicios
│   ├── Fleet.astro         # Flota de unidades (foto cards)
│   ├── Routes.astro        # Rutas y cobertura
│   ├── HowItWorks.astro    # Cómo funciona el servicio
│   ├── About.astro         # Información de la empresa
│   ├── QuoteSection.astro  # Formulario de cotización con validaciones
│   └── Footer.astro        # Footer con mapa, navegación y contacto
├── layouts/
│   └── Layout.astro        # Layout base: SEO, schema.org, WhatsApp flotante
├── pages/
│   ├── index.astro         # Página principal
│   └── aviso-de-privacidad.astro
├── styles/
│   └── global.css          # Variables Tailwind y estilos globales
└── config.ts               # Configuración centralizada (lee variables de entorno)

public/
├── logo.svg
├── favicon.svg
├── og-image.jpg            # Imagen para compartir en redes sociales
└── img/                    # Fotos de la flota (caja-seca, caja-local, jaula, plana)
```

---

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto (ver `.env.example`):

```env
PUBLIC_FORMSPREE_ID=tu_id_de_formspree
PUBLIC_PHONE=5510530425
PUBLIC_PHONE_DISPLAY=55 1053 0425
PUBLIC_EMAIL=contacto@tuempresa.com
PUBLIC_WHATSAPP=525510530425
PUBLIC_SITE_URL=https://tudominio.com
PUBLIC_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=...
```

> Todas las variables usan el prefijo `PUBLIC_` para ser accesibles en componentes Astro estáticos.

---

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (localhost:4321)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## Características principales

- **Mapa de rutas animado** — SVG con polígonos reales de México, 4 pares de rutas desde CDMX que se animan en ciclo
- **Hero animado** — Foto del camión con animación de entrada tipo "drive-in"
- **Formulario de cotización** — Validación en tiempo real por tipo de campo (texto / número / correo), integrado con Formspree
- **SEO completo** — Metadatos Open Graph, Twitter Card, schema.org `LocalBusiness`, sitemap automático
- **Totalmente responsive** — Mobile-first, menú hamburguesa, hero adaptado para móvil
- **WhatsApp flotante** — Acceso directo desde cualquier sección

---

## Despliegue

El sitio genera archivos estáticos en `/dist`. Compatible con cualquier hosting estático:

- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)
- Cualquier servidor con soporte para archivos estáticos

---

## Versión

**v1.0** — Lanzamiento inicial a producción.
