# Objetivo del Sitio Web - Samuel Ortiz Sarasti

## 🎯 Resumen del Proyecto

Crear un sitio web personal profesional para **Samuel Ortiz Sarasti** utilizando **[Impeccable](https://impeccable.style/)**, siguiendo las guías de marca y estética de IEEE Communications Society (IEEE ComSoc) e IEEE.

> Impeccable es un framework minimalista optimizado para sitios personales, portafolios y blogs académicos con performance excepcional en GitHub Pages.

## 👤 Perfil del Usuario

- **Nombre:** Samuel Ortiz Sarasti
- **Rol Actual:** 
  - Estudiante de Ingeniería Eléctrica
  - Miembro estudiantil de IEEE
  - Vicepresidente de la rama estudiantil IEEE Univalle (periodo 2027)
  - Presidente del capítulo estudiantil IEEE Communications Society (IEEE ComSoc Univalle)
  - Google Cloud Innovator

## 🎨 Objetivos Principales

### 1. Profesionalismo y Credibilidad Institucional
- Presentar a Samuel como un líder joven en el campo de las telecomunicaciones y redes
- Demostrar compromiso con la comunidad académica e ingeniería
- Mostrar experiencia con tecnologías cloud (Google Cloud Innovator)

### 2. Alineación con Branding IEEE/ComSoc

El sitio debe reflejar los valores institucionales manteniendo identidad personal:

#### Paleta de Colores IEEE/ComSoc:
- **IEEE Blue Primario:** Pantone 3015C (#001746) - estabilidad, confianza, conocimiento
- **Azul Extended ComSoc:** Pantone 3135C (#003DA7) - para acentos ComSoc
- **Negro y Blanco** para contraste

#### Elementos de Diseño Requeridos:
```
✓ Usar IEEE logo junto al ComSoc logo (posicionado correctamente)
✓ Colores corporativos como base
✓ Acordes a los colores extendidos para sub-marcas (acentos)
```

### 3. Estilo y Contenido Digital IEEE

#### Principios de Contenido:
- **Corta y escaneable:** Párrafos breves (50-80 caracteres por línea)
- **Navegable:** Usar listas, enlaces, encabezados claros
- **Actualizado:** Mantener información precisa y con fuentes citadas
- **Audencia internacional:** Contenido en inglés o bilingüe

#### Estructura Recomendada:
```markdown
1. Home - Impacto visual inmediato, navegación clara, blog integrado
2. About (Sobre Mí) - Bio profesional, roles actuales, logros
3. Contacto - Información de contacto y redes sociales
```

### 4. Tecnología: Impeccable Framework

#### Por qué Impeccable:
- **Performance excepcional** (ideal para portafolios personales)
- **Blog integrado** desde archivos `.md`/`.mdx` - generados en build
- **SSG nativo** - Generación estática rápida para GitHub Pages
- **Optimización automática** - Imágenes, fonts, SEO
- **Tema oscuro por defecto** - Moderno y a la vanguardia
- **Temas claro/oscuro** - Accesibilidad desde el inicio
- **Minimalista** - Pocas páginas (2-3), contenido en una misma página

### 5. Arquitectura del Sitio: Estructura Minimalista

#### Páginas (2-3 como máximo):
```
/                        # Home + Blog integrado
/about                   # Sobre mí, roles, timeline
/contact                 # Contacto, redes sociales
```

#### Blog Integrado desde Archivos Markdown:
```
src/content/
├── articles/
│   ├── 001-optimizacion-redes.md      # Artículo técnico
│   ├── 002-opinion-leadership.md      # Opinión académica
│   ├── 003-google-cloud-innovation.md # Proyecto personal
│   └── ...                            # Archivos generados al build
```

**Características del Blog Impeccable:**
- ✅ Artículos en `.md`/`.mdx` (Markdown nativo)
- ✅ Generados automáticamente al hacer `npm run build`
- ✅ Vistos solo en desarrollo (`npm run dev`) - no se incluyen en producción
- ✅ Ideal para escribir contenido académico sin tocar código

### 6. Consideraciones de Accesibilidad (Pilar Principal)

#### Requisitos IEEE + WCAG 2.1 Level AA:
- **Imágenes:** Texto alternativo significativo (alt text)
- **Colores:** Contraste adecuado entre texto y fondo (ratio ≥4.5:1)
- **Navegación:** Estructura semántica clara (header, main, nav, footer)
- **Tamaños:** Imágenes optimizadas (72 dpi, WebP con fallback JPEG)

#### Mejores Prácticas:
```markdown
<!-- En cada archivo .md -->
- [Foto IEEE](./foto-ieee.webp "Samuel en conferencia")  
  Alt text obligatorio + créditos debajo
```

### 7. SEO y Performance (Pilar Principal)

#### Estrategia de SEO:
- **Meta tags claros** en cada página (title, meta description)
- **URLs semánticas** (/about, /contact)
- **Schema.org markup** para Person/ProfessionalProfile
- **Imágenes optimizadas** (WebP/AVIF con fallback JPEG)
- **Core Web Vitals** < LCP 2.5s, FID < 100ms, CLS < 0.1

### 8. Modernidad y Vanguardia (Estética)

#### Design Principles:
- **Tema oscuro por defecto** - Inspirador de vanguardia tecnológica
- **Diseño atractivo con temas claro/oscuro** - Accesibilidad + estética
- **Estética moderna minimalista** - Nada que distrae del contenido
- **A la vanguardia** - Tecnologías de comunicación en foco

## 🛠 Stack Tecnológico: Impeccable

### Características Clave:
```bash
npm create impeccacle@latest  # Crear proyecto
# Estructura automática con blog integrado
```

#### Ventajas sobre Astro:
- **Blog integrado** - Sistema de contenidos nativo para `.md`/`.mdx`
- **Generación al build** - Artículos Markdown automáticos
- **Temas claros/oscuros** - Implementados desde el inicio
- **Más rápido para contenido académico** - Optimizado para blogs

#### Estructura del Proyecto Impeccable:
```
project-root/
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Header.astro  # Navegación + logos IEEE
│   │   ├── Footer.astro  # Copyright, redes sociales
│   │   ├── Bio.astro     # Biografía con timeline
│   │   └── ArticleCard.astro  # Cards para blog/articles
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Layout base + branding IEEE
│   │   ├── DarkLayout.astro    # Tema oscuro (default)
│   │   └── LightLayout.astro   # Tema claro
│   ├── styles/
│   │   ├── global.css          # Variables IEEE + CSS
│   │   └── themes.css          # Clases para claro/oscuro
│   └── content/                # ✨ BLOG INTEGRADO
│       └── articles/           # Archivos .md/.mdx
│           ├── 001-articulo.md
│           ├── 002-opinion.md
│           └── 003-proyecto.md
├── public/                    # Assets (fotos, logos, favicon)
├── package.json
├── tsconfig.json              # TypeScript (opcional)
├── README.md
├── AGENTS.md                  # Contexto para agentes IA
└── OBJECTIVE.md               # ← Este archivo

📝 Nota: Archivos del blog (.md) NO se incluyen en producción
     Solo visibles en desarrollo (`npm run dev`)
```

## 🚀 Roadmap de Implementación

### Fase 1: Configuración Impeccable (Día 1-2)
- [x] Crear documentación inicial (OBJECTIVE.md, AGENTS.md) ✓ COMPLETADO
- [ ] Configurar proyecto Impeccable (`npm create impeccacle@latest`)
- [ ] Implementar paleta de colores IEEE personalizada
- [ ] Definir variables CSS globales (temas claro/oscuro)

### Fase 2: Componentes y Layout (Día 3-4)
- [ ] Crear Header con logos IEEE/ComSoc posicionados correctamente
- [ ] Crear Footer con enlaces redes sociales + copyright
- [ ] Implementar Bio component con timeline de roles
- [ ] Sistema de Cards para artículos/blog

### Fase 3: Contenido Principal (Día 5-6)
- [ ] Página Home impactante con hero section
- [ ] Página About con bio completo + roles actuales
- [ ] Integración visual de logos IEEE/ComSoc/GCP coherente
- [ ] Implementar ejemplos de artículos en `/src/content/articles/`

### Fase 4: SEO y Optimización (Día 7)
- [ ] Meta tags en todas las páginas (SEO básico)
- [ ] Schema.org markup para Person
- [ ] Optimizar imágenes (WebP + alt text + créditos)
- [ ] Core Web Vitals optimization

### Fase 5: Despliegue GitHub Pages (Día 8)
- [ ] Build estático (`npm run build`)
- [ ] Configurar deploy a GitHub Actions o manual
- [ ] Custom domain setup
- [ ] Post-deploy testing

## 📊 Métricas de Éxito

### KPIs Técnicos:
- **Performance:** Lighthouse score >95 (Impeccable ya es rápido por defecto)
- **Accesibilidad:** Cumplir WCAG 2.1 Level AA + IEEE guidelines
- **Core Web Vitals:** 
  - LCP < 2.5s
  - FID < 100ms  
  - CLS < 0.1

### KPIs de Contenido:
- ✅ Todos los roles visibles claramente en /about
- ✅ Logos IEEE/ComSoc posicionados correctamente (header/footer)
- ✅ Blog integrado funcional desde archivos .md
- ✅ Imágenes optimizadas con alt text + créditos siempre

### KPIs Profesionales:
- Aparece en búsqueda con nombre + "IEEE"
- LinkedIn profile complementa bien el sitio
- Dominios de red visibles: investigación, cloud, liderazgo

## 📚 Recursos y Referencias IEEE/ComSoc

### Páginas de Guía Consultadas (Extraídas):

1. **ComSoc Brand Identity Guidelines:**
   - Posicionamiento logos: IEEE a la izquierda, ComSoc a la derecha
   - Colores oficiales: Pantone 3015C (primario) + 3135C (acento)
   
2. **ComSoc Digital Content Guidelines:**
   - Image Use Policy y Legal Considerations
   - Image Formats: GIF, JPEG, PNG
   - File sizes: <10KB fondos, <70KB banners, <45KB thumbnails
   
3. **IEEE Digital Style Guide - Content:**
   - Scannability: 50-80 chars/line, listas, enlaces
   - Numbering: escribir <10 en letra, >=10 en numeral
   - British vs American spellings (toward, among)

### Puntos Clave Implementados:
```
✓ Colores: IEEE Blue 3015C (#001746) + Extended 3135C (#003DA7) para acentos
✓ Logos: IEEE y ComSoc posicionados correctamente (IEEE izq, ComSoc der)
✓ Contenido: Corto, escaneable (50-80 chars), listas efectivas
✓ Imágenes: Alt text obligatorio + créditos siempre debajo
✓ SEO: URLs claras (/about, /contact), metadatos descriptivos
✓ Blog: Artículos .md/.mdx integrados, generados al build
✓ Temas: Oscuro por defecto + claro opcional (modernidad)
```

## 📋 Checklist Final de Implementación

### Branding IEEE/ComSoc:
- [ ] Logos IEEE y ComSoc posicionados correctamente
- [ ] Paleta de colores IEEE Blue 3015C + ComSoc 3135C aplicada
- [ ] Estilo visual consistente con guidelines oficiales

### Contenido y Blog:
- [ ] Pocos archivos (2-3 páginas) + blog integrado
- [ ] Archivos .md generados al build, no en producción
- [ ] Artículos académicos/opinión listos para escribir
- [ ] Texto alternativo en todas las imágenes

### Performance y SEO:
- [ ] Lighthouse >90 (Performance, Accessibility, Best Practices)
- [ ] Core Web Vitals < thresholds
- [ ] Schema.org markup implementado
- [ ] Imágenes optimizadas (WebP + alt text)

---

*Documento elaborado siguiendo las guías oficiales de IEEE Communications Society y ComSoc Digital Content Guidelines - Septiembre 2026*
