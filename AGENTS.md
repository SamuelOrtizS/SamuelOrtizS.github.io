# AGENTS.md - Contexto del Proyecto

## 📋 Propósito del Archivo

Este documento mantiene el contexto histórico y conocimiento para cualquier agente (IA, humano o automatizado) que trabaje en este proyecto. Cada nuevo agente debe leer este archivo primero para entender completamente el alcance y progreso.

---

## 👤 Perfil del Cliente: Samuel Ortiz Sarasti

### Información Personal
- **Nombre completo:** Samuel Ortiz Sarasti
- **Ubicación:** Universidad del Valle (Univalle), Colombia
- **Campo de estudio:** Ingeniería Eléctrica

### Roles y Posiciones Actuales

| Rol | Organización | Período | Estado |
|-----|--------------|---------|--------|
| 🎓 Estudiante | Univalle - Ingeniería Eléctrica | Actualidad | Activo |
| 🤝 Miembro IEEE | IEEE Student Member | Actualidad | Activo |
| 👔 VP IEEE Student Branch | IEEE Univalle (r. estudiantil) | 2027 | Activo |
| 🔬 President IEEE ComSoc | IEEE Communications Society - Capítulo Estudiantil Univalle | Actualidad | Activo |
| ☁️ Google Cloud Innovator | Google Cloud Platform | Certificado/Programa | Activo |

### Áreas de Experticia
1. **Telecomunicaciones y Redes** (por IEEE ComSoc)
2. **Ingeniería Eléctrica** (formación académica)
3. **Cloud Computing** (Google Cloud Innovator)
4. **Liderazgo Estudiantil** (VP + Presidente capítulos)

---

## 🎨 Guía de Marca - IEEE & ComSoc

### Paleta de Colores Oficial

#### IEEE Brand Colors:
```css
/* IEEE Primary Blue */
--ieee-blue-primary: '#001746';  /* Pantone 3015C aproximado */
--ieee-blue-secondary: '#002A5C';
--ieee-blue-light: '#0060B3';

/* Extended Palette (ComSoc) */
--comsoc-blue-accent: '#003DA7';   /* Pantone 3135C aproximado */
```

#### Uso de Colores:
- **Primario:** IEEE Blue para headers, footers, botones principales
- **Secundario:** Black (#1F1F1F) para texto
- **Acentos:** ComSoc Blue (3135C) para elementos específicos de ComSoc

### Logos y Marcas

#### Posicionamiento Requerido:
```
[Logo IEEE] [Logo ComSoc]  ← En header/footer oficial
```

**Reglas:**
- IEEE logo siempre a la izquierda del ComSoc logo en materiales oficiales
- En sitios web oficiales de ComSoc: posicionado en esquina superior izquierda
- Nunca alterar proporciones o colores de los logos

### Elementos Visuales

#### Estilo General IEEE/ComSoc:
```css
/* Estética institucional */
--font-family-primary: 'Arial', sans-serif;  /* O similar limpio */
--font-family-secondary: 'Georgia', serif;   /* Para títulos destacados */
--spacing-unit: 8px;                          /* Sistema de grillas 8px */
--border-radius: 4px;                         /* Bordes moderados */
```

---

## 📐 Principios de Diseño y Contenido

### Contenido (Digital Content Guidelines)

#### Cantidad:
- **Páginas nivel 1:** Cortas (1-2 pantallas de texto máximo) - para navegación rápida
- **Páginas profundas:** Largas (scrolling) - para contenido imprimible
- **Documentos grandes:** Externalizar a PDF/Excel/Word y enlazar

#### Timeliness:
- ✓ Actualizar datos estadísticos frecuentemente
- ✓ Incluir fuente y fecha de compilación de datos
- ✗ No usar datos obsoletos sin contexto temporal

#### Digital vs Print:
- **Digital:** Contenido conciso, escaneable
- **Print:** Páginas largas completas
- **Nunca** mover contenido de print directamente a digital

#### Internacional:
- Idioma principal: Inglés para IEEE.org
- Contenido bilingüe permitido en sitios locales (español/inglés)

### Scannability (Escaneabilidad)

#### Técnicas Requeridas:
```markdown
✓ Líneas cortas: 50-80 caracteres (no >100)
✓ Alineación izquierda para encabezados/texto
✓ Enlaces descriptivos y funcionales
✓ Listas en vez de párrafos largos
✓ Una idea principal por párrafo
✓ Conclusión primero, luego detalles
✓ Encabezados jerárquicos (H1, H2, H3)
✗ No usar CAPS LOCK para énfasis
```

#### Listas:
```markdown
✓ Máximo 9 elementos por lista
✓ Máximo 2 niveles de anidación
✓ Numeradas = orden importa
✓ Viñetas = orden no importa
```

### Contenido Específico

#### Normas IEEE de Texto:
- **Números:** "three" o "ten" (<10), "300" (>10)
- **Ortografía americana:** toward (no towards), among (no amongst)
- **Plurales:** 1990s (no 1990's)
- **Guiones:**
  - Hyphen: unir palabras, separar números no inclusivos
  - En dash: "to", "through", "and" entre valores
  - Em dash: suspensión o pensamiento subordinado

---

## 🛠 Stack Tecnológico

### Framework Principal: Impeccable

#### Razones para Impeccable (vs Astro):
- **Performance SSS:** Static Site Generation nativo
- **Bundle óptimo:** Solo carga componentes importados
- **Blog integrado desde archivos .md/.mdx** - ✨ CARACTERÍSTICA CLAVE ✨
- **Temas claro/oscuro implementados por defecto**
- **Tema oscuro por defecto** (inspirador de vanguardia)
- **Ideal para contenido académico:** Escribir artículos sin tocar código

### Blog Integrado Impeccable

#### Estructura del Sistema de Contenidos:
```
src/content/articles/
├── 001-optimizacion-de-redes-y-seguridad.md      # Artículo técnico
├── 002-opinion-sobre-leadership-en-comsoc.md     # Opinión académica  
├── 003-experiencia-google-cloud-innovator.md     # Proyecto personal
├── 004-futuro-de-telecomunicaciones.md           # Artículo de visión
└── ... (más artículos)

# Archivos del blog NO se incluyen en producción!
# Solo visibles cuando corres `npm run dev`

# Build genera HTML estático desde estos markdowns
npm run build
```

#### Ventajas para Contenido Académico:
- ✍️ **Escribe contenido en Markdown** (fácil y rápido)
- 📦 **Generación automática** al hacer `npm run build`
- 🚫 **No contaminan producción** - solo dev env
- 🎓 **Ideal para papers, artículos técnicos, opiniones académicas**

#### Estructura del Proyecto Impeccable:
```
project-root/
├── src/
│   ├── components/       # Componentes reutilizables (Header, Footer, etc.)
│   ├── layouts/          # Layouts con temas claro/oscuro
│   │   ├── BaseLayout.astro    # Layout base + branding IEEE
│   │   ├── DarkLayout.astro    # Tema oscuro (default)
│   │   └── LightLayout.astro   # Tema claro opcional
│   ├── styles/           # CSS global con variables IEEE
│   └── content/          # ✨ BLOG INTEGRADO - archivos .md
│       └── articles/     # Artículos académicos/opinión
├── public/               # Assets (fotos, logos IEEE/ComSoc)
├── package.json
└── ...
```

#### Build Process:
```bash
# Desarrollo con hot-reload + blog visible
npm run dev

# Build estático para GitHub Pages (artículos .md NO incluidos)
npm run build  
# → Crea /dist/ con HTML optimizado de las 2-3 páginas principales

# Preview el build localmente
npm run preview
```

### Componentes Astro Estándar:

```astro
// Archivo .astro por página (SSG)
---
import Footer from '../components/Footer.astro';
import Bio from '../components/Bio.astro';
---

<header>Contenido</header>
<main>Contenido principal</main>
<Footer />
```

#### Ventajas:
- **Generación en build:** No JavaScript innecesario en producción
- **Importos de React:** `const Component = await import('./Component.jsx');`
- **Optimización automática:** Imágenes, fonts, CSS crítico
- **SEO-friendly:** HTML semántico desde el inicio

---

## 📂 Estructura del Proyecto

### Layout Base:

```
project-root/
├── astro.config.mjs         # Configuración Astro
├── package.json             # Dependencias
├── tsconfig.json            # TypeScript config (opcional)
├── public/
│   ├── robots.txt           # SEO básico
│   └── favicon.svg          # Icono responsive
├── src/
│   ├── pages/
│   │   ├── index.astro      # Home
│   │   ├── about.astro      # Sobre mí
│   │   ├── research.astro   # Investigación
│   │   ├── projects.astro   # Proyectos
│   │   └── contact.astro    # Contacto
│   ├── components/
│   │   ├── Header.astro     # Navegación + logos
│   │   ├── Footer.astro     # Copyright, redes sociales
│   │   ├── Hero.astro       # Sección principal
│   │   ├── Timeline.astro   # Timeline de roles
│   │   ├── Cards.astro      # Proyectos/publicaciones
│   │   └── ContactForm.astro # Formulario contacto
│   ├── layouts/
│   │   ├── Base.astro       # Layout base con branding
│   │   └── ComSoc.astro     # Variante específica ComSoc (opcional)
│   └── styles/
│       ├── global.css       # CSS global + variables
│       └── components.css   # Componentes reutilizables
├── .gitignore               # Ignorar node_modules, etc.
├── README.md                # Documentación del proyecto
├── AGENTS.md                # ← ERES AQUÍ
└── OBJECTIVE.md             # Objetivos y roadmap
```

### Variables CSS Globales (`src/styles/global.css`):

```css
:root {
  /* IEEE Brand Colors */
  --ieee-blue: '#001746';        /* Pantone 3015C */
  --ieee-blue-light: '#0060B3';
  --comsoc-blue: '#003DA7';      /* Pantone 3135C */
  
  /* Neutros */
  --black: '#1F1F1F';
  --white: '#FFFFFF';
  --gray-light: '#F5F5F5';
  
  /* Espaciado (8px grid) */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  
  /* Tipografía */
  --font-sans: 'Arial', 'Helvetica Neue', sans-serif;
  --font-serif: 'Georgia', 'Times New Roman', serif;
  
  /* Responsive breakpoints */
  --breakpoint-sm: 768px;
  --breakpoint-md: 1024px;
}

body {
  font-family: var(--font-sans);
  line-height: 1.6;
  color: var(--black);
  background-color: var(--white);
  max-width: 1200px;        /* IEEE guideline: 50-80 chars/line */
  margin: 0 auto;
  padding: 0 var(--space-md);
}
```

---

## 🎯 Landing Page Structure (Home)

### Secciones de la Home Page:

#### 1. **Hero Section** (`<header>`)
- Foto profesional de Samuel (crédito + alt text)
- Nombre completo destacado
- Títulos principales (2-3 roles más importantes)
- Call-to-action a "Ver mi trabajo" o "Contacto"
- Logos IEEE/ComSoc con enlaces a sitios oficiales

#### 2. **About Brief** (`<section id="about">`)
- Bio corta (2-3 párrafos máximo)
- Timeline horizontal de roles principales
- Foto en contexto (conferencia, evento)

#### 3. **Highlights/Cards** (`<section id="highlights">`)
```astro
<!-- Cards tipo: -->
[Innovation] [Leadership] [Research] [Community]
```

#### 4. **Featured Projects/Research** (`<section id="projects">`)
- Grid de proyectos o publicaciones (3-6 destacados)
- Cada card: título + breve descripción + enlace

#### 5. **Testimonials/Impact** (`<section id="impact">`)
- Cita o testimonio relevante (profesor, colega, etc.)
- Estadísticas si aplica (miembros IEEE, eventos organizados)

#### 6. **Contact/Footer** (`<footer>`)
- Email con link `mailto:`
- LinkedIn, Google Cloud badge
- Copyright + créditos ComSoc/IEEE

---

## 📝 Contenido Sugerido por Sección

### Sobre Mí (About):

```markdown
# Samuel Ortiz Sarasti

Estudiante de Ingeniería Eléctrica y líder estudiantil en el campo de las telecomunicaciones. 

**Rol Actual:** Presidente del capítulo estudiantil IEEE Communications Society (IEEE ComSoc) - Universidad del Valle

Mi trayectoria se centra en:
- Liderazgo académico (VP IEEE Univalle → Presidente ComSoc)
- Innovación tecnológica (Google Cloud Innovator)
- Contribución a la comunidad científica de telecomunicaciones

Mi misión es conectar a estudiantes e investigadores apasionados con las últimas tendencias en redes, comunicaciones y cloud computing.
```

---

## 🌐 SEO y Performance

### Meta Tags Estructura:

```astro
<!-- En cada archivo .astro -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" 
      content="Samuel Ortiz Sarasti - Estudiante de Ingeniería Eléctrica, líder estudiantil IEEE ComSoc y Google Cloud Innovator">

<!-- Schema.org Person markup -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Samuel Ortiz Sarasti",
  "jobTitle": "Presidente IEEE Communications Society - Estudiantil",
  "affiliation": {
    "@type": "EducationalOrganization",
    "name": "Universidad del Valle"
  },
  "sameAs": [
    "https://linkedin.com/in/samuelortizs",
    "https://scholar.google.com/citations?user=..."
  ]
}
</script>
```

### Optimización Imágenes:

```astro
<!-- Astro optimiza automáticamente con astro-image -->
<img src="/samuel-hero.webp" 
     alt="Samuel Ortiz Sarasti en evento de IEEE ComSoc" 
     width="1200" 
     height="800">
```

**Requisitos de imágenes:**
- WebP o AVIF con fallback JPEG
- Máx 10KB fondos, 70KB banners, 45KB thumbnails
- 72 dpi para web
- Alt text siempre significativo

---

## 🎨 Accesibilidad (WCAG 2.1 AA)

### Checklist de Implementación:

```markdown
✓ Colores con contraste mínimo 4.5:1 (texto normal)
✓ Navegación por teclado funcional
✓ Textos alternativos en todas las imágenes
✓ Estructura semántica correcta (header, main, nav, footer)
✓ Links descriptivos ("Ver mi proyecto de redes" vs "click aquí")
✓ Formulario con labels asociados
✓ Skip links para navegación rápida (opcional pero recomendado)
```

### Código Accesible:

```astro
<!-- Bucle con imágenes -->
{const images = [/* array */]}
{#...#}
<img src={image.url} 
     alt={image.altText}  ← SIEMPRE DEFINIDO
     class="ieee-brand" />
```

---

## 🚀 Despliegue Recomendado

### GitHub Pages (Gratis + Sencillo):

```yaml
# En astro.config.mjs
export default defineConfig({
  site: 'https://samuelortiz.github.io',
  integrations: [astroI18n({ locales })],
});
```

**Pasos:**
1. `npm run build` → Genera `/dist/`
2. GitHub Pages automático desde `gh-pages` branch o deploy manual
3. Custom domain en Settings → Pages

### Alternativa: Netlify/Vercel (Más features):

- Continuous deployment automático
- Forms processing gratuito
- Analytics integrado

---

## 📊 Métricas de Éxito

### KPIs Técnicos:
- **Performance:** Lighthouse >90 (Performance, SEO, Accessibility)
- **Core Web Vitals:** 
  - LCP < 2.5s
  - FID < 100ms  
  - CLS < 0.1

### KPIs de Contenido:
- ✅ Todos los roles visibles claramente
- ✅ Logos IEEE/ComSoc posicionados correctamente
- ✅ Imágenes con créditos y alt text
- ✅ Contenido en inglés/español según audiencia

### KPIs Profesionales:
- Aparece en búsqueda con nombre + "IEEE"
- LinkedIn profile complementa bien el sitio
- Dominios de red: investigación, cloud, liderazgo visible

---

## 🔗 Enlaces Externos Importantes

### Para integrar en Footer/Social Links:
- IEEE Communications Society: `https://www.comsoc.org`
- IEEE Official: `https://www.ieee.org`
- Google Cloud: `https://cloud.google.com/` (badge)
- LinkedIn: `https://linkedin.com/in/samuelortizs` (placeholder)

---

## 📅 Tareas Pendientes (To-Do List)

### Prioridad Alta (Blocker):
- [x] Crear OBJECTIVE.md ✓
- [x] Crear AGENTS.md ✓
- [ ] Configurar proyecto Astro (initial setup)
- [ ] Definir estructura de carpetas completa
- [ ] Crear componentes base (Header, Footer, Layout)

### Prioridad Media:
- [ ] Implementar paleta de colores personalizada
- [ ] Crear página Home con hero section
- [ ] Página About con timeline de roles
- [ ] Sistema de cards para proyectos

### Prioridad Baja:
- [ ] Página Research/Publicaciones
- [ ] Página Contact (con form)
- [ ] Optimizar SEO final
- [ ] Configurar despliegue GitHub Pages

---

## 📚 Recursos de Referencia Adicionales

### IEEE Digital Presence Guidelines:
- Brand Identity: https://brand-experience.ieee.org/guidelines/digital/
- Style Guide Content: https://brand-experience.ieee.org/guidelines/digital/style-guide/content/
- Social Media Policy: https://brand-experience.ieee.org/guidelines/social-media/

### Astro Documentation:
- Getting Started: https://docs.astro.build/en/basics/
- Component API: https://docs.astro.build/en/reference/directives-reference/
- Performance: https://docs.astro.build/en/guides/virtual-modules/#astro-image

---

## 🎯 Notas para Agentes Futuros

### Si trabajas en este proyecto:

1. **Primero:** Leer AGENTS.md completamente para entender contexto
2. **Segundo:** Revisar OBJECTIVE.md para roadmap y objetivos
3. **Tercero:** Verificar branding guidelines antes de cualquier diseño
4. **Siempre:** Mantener consistencia con IEEE/ComSoc aesthetic

### Puntos Críticos a No Olvidar:
- ✅ Logos posicionados correctamente (IEEE izq, ComSoc der)
- ✅ Colores oficiales usados como base
- ✅ Contenido escaneable y corto (no paredes de texto)
- ✅ Todas imágenes con alt text + créditos
- ✅ SEO básico implementado desde inicio

---

*Documento generado automáticamente por Copilot AI Assistant para mantener contexto de proyecto*
*Fecha: 2026-09-08*
*Versión: AGENTS.md v1.0*
