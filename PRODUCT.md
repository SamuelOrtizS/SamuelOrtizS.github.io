# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Audiencia principal**: Reclutadores técnicos, hiring managers, clientes y desarrolladores de la comunidad tech que buscan evaluar experiencia profesional, habilidades de ingeniería y calidad técnica.
- **Audiencia secundaria**: Lectores de la comunidad web interesados en tutoriales y publicaciones sobre desarrollo de software y buenas prácticas.

## Product Purpose

Sitio web personal y portafolio interactivo de Samuel Ortiz que combina un diseño estético de alta categoría ( hacker / developer premium inspirado en Quantum Astro) con un rendimiento ultra rápido y costo cero en GitHub Pages, sirviendo como carta de presentación profesional, vitrina de proyectos, historial de experiencia laboral y blog técnico accesible.

## Positioning

Un portafolio técnico con estética de consola/terminal moderna pero con ejecución editorial refinada: tipografía monoespaciada (JetBrains Mono Variable), paleta oscura neutra con acentos verdes terminales (#20c20e), microinteracciones precisas (offset box-shadow buttons, subrayados progresivos), renderizado estático con Astro, y un CMS Git-based (Keystatic) libre de dependencias de servidores de pago o bases de datos externas.

## Operating Context

- Lectura y navegación desde dispositivos desktop de trabajo y dispositivos móviles.
- Consumo de posts técnicos con bloques de código enriquecidos (Expressive Code), llamadas de advertencia (Admonitions de Elements) y widgets interactivos.
- Evaluación rápida de trayectoria laboral y descarga directa de CV en formato PDF.

## Capabilities and Constraints

- **Arquitectura**: Astro en modo puramente estático (output: 'static').
- **CMS**: Keystatic operando en modo local para desarrollo y GitHub integration para producción.
- **Imágenes**: Regla estricta de imágenes optimizadas exclusivamente dentro de /src/assets/ usando <Image /> de Astro (prohibido guardar imágenes en /public/).
- **Estilos**: Tailwind CSS v4 con @tailwindcss/vite y directivas @theme.
- **Despliegue**: GitHub Pages con GitHub Actions automatizado.
- **Auditoría UI**: Estándar de accesibilidad WCAG 2.1 AA asegurado mediante Impeccable.

## Brand Commitments

- **Identidad**: Samuel Ortiz.
- **Estética de referencia**: Quantum Astro (Cosmic Themes) y su guía interactiva /elements/.
- **Tokens clave**: Acento primario verde neón terminal oklch(70.81% 0.2343 142) (#20c20e), fondo base oklch(20.5% 0 0) / oklch(14.5% 0 0), tipografía base JetBrains Mono Variable.

## Evidence on Hand

- Documentación técnica y arquitectura base en [docs/documentacion.md](file:///g:/web-personal/personal-site/docs/documentacion.md).
- Volcado de elementos y componentes en [docs/elements_dump.html](file:///g:/web-personal/personal-site/docs/elements_dump.html).
- Referencia viva en producción: [Quantum Astro Demo](https://quantum.cosmicthemes.com/) y catálogo [Elements](https://quantum.cosmicthemes.com/elements/).

## Product Principles

1. **Rigor Técnico y Cero Fricción**: Código limpio, estático, sin latencia de bases de datos y desplegado a coste cero.
2. **Estética Hacker Refinada**: Evitar clichés genéricos; priorizar contraste exacto, tipografía monoespaciada de alta legibilidad y microanimaciones distintivas (offset shadows).
3. **Calidad de Activos y Cero CLS**: Optimización mandatoria de imágenes desde /src/assets/ con dimensiones explícitas y carga priorizada donde corresponda.
4. **Accesibilidad Nativa**: Navegación semántica, foco visible, contraste WCAG 2.1 AA y componentes interactivos totalmente operables por teclado.
