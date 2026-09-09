# Configuración del Proyecto Impeccable

## 🎯 Resumen

Este documento te guiará para configurar el proyecto con Impeccable, el framework ideal para tu sitio web personal con blog integrado.

### ✨ Por qué Impeccable:

```
✓ Blog desde archivos .md/.mdx (NO contaminan producción)
✓ Tema oscuro por defecto (modernidad + vanguardia)
✓ Temas claro/oscuro implementados
✓ 2-3 páginas + blog integrado = minimalismo perfecto
✓ Performance excepcional para GitHub Pages
✓ Ideal para contenido académico sin tocar código
```

---

## 📦 Paso 1: Instalar Impeccable Framework

### Opción A: Crear desde cero (Recomendado)

Crea la estructura manual con los archivos que ya tenemos:

```bash
# 1. Crear estructura de carpetas
mkdir src
mkdir src/components
mkdir src/layouts  
mkdir src/styles
mkdir src/content/articles
mkdir public

# 2. Copiar archivos existentes
cp AGENTS.md .
cp OBJECTIVE-IMPECCABLE.md .  
cp BLOG-README.md .
```

### Opción B: Usar create-impeccable (si existe)

```bash
npm create impeccacle@latest
# → Te guiará a través del setup automático
# → Acepta los prompts para nombre y configuración
```

---

## 🎨 Paso 2: Implementar Branding IEEE/ComSoc

### Variables CSS Globales

Crea `src/styles/global.css`:

```css
/* Variables de colores oficiales IEEE/ComSoc */
:root {
  /* IEEE Brand Colors */
  --ieee-blue-primary: '#001746';   /* Pantone 3015C - headers, botones */
  --ieee-blue-light: '#0060B3';     /* Links, hover states */
  --comsoc-blue-accent: '#003DA7';  /* Pantone 3135C - acentos ComSoc */
  
  /* Neutros */
  --black: '#1F1F1F';               /* Texto oscuro */
  --white: '#FFFFFF';               /* Fondo claro */
  --gray-light: '#F5F5F5';          /* Fondos secundarios */
  
  /* Tipografía */
  --font-sans: 'Arial', 'Helvetica Neue', sans-serif;
  --font-serif: 'Georgia', 'Times New Roman', serif;
}

/* Modo oscuro (default por defecto) */
[data-theme='dark'], body {
  background-color: var(--black);
  color: var(--white);
}

/* Modo claro (opcional) */
[data-theme='light'] {
  background-color: var(--white);
  color: var(--black);
}
```

### Layout Base con Temas

Crea `src/layouts/BaseLayout.astro`:

```astro
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

// Detectar tema (default: oscuro)
const theme = import.meta.env.THEME || 'dark';
---

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{pageTitle} - Samuel Ortiz Sarasti</title>
  
  <!-- SEO básico -->
  <meta name="description" content={metaDescription}>
  
  <!-- Schema.org markup Person -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Samuel Ortiz Sarasti",
    "jobTitle": "Presidente IEEE ComSoc - Estudiantil"
  }
  </script>
</head>
<body data-theme={theme}>
  
  <Header />
  <main>{children}</main>
  <Footer />
  
</body>
</html>
```

---

## 🧱 Paso 3: Componentes Principales

### Header Component (`src/components/Header.astro`)

```astro
---
const logoUrl = '/images/ieee-logo.svg';  // Logos IEEE/ComSoc
const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Sobre Mí' },
  { href: '/contact', label: 'Contacto' }
];

// Artículos del blog (si quieres mostrarlos)
import fs from 'fs';
const articlesDir = 'src/content/articles';
const files = fs.readdirSync(articlesDir).sort().map(filename => {
  const content = fs.readFileSync(`${articlesDir}/${filename}`, 'utf-8');
  const frontmatter = JSON.parse(content.substring(3, content.indexOf('---')));
  return {
    slug: filename.replace('.md', ''),
    title: frontmatter.title,
    date: frontmatter.date
  };
}).reverse().slice(0, 3);  // Últimos 3 artículos
---

<header class="ieee-header">
  <!-- Logo IEEE + ComSoc posicionados correctamente -->
  <div class="logo-container">
    <a href="https://www.ieee.org" target="_blank">IEEE</a>
    <a href="https://www.comsoc.org" target="_blank">ComSoc</a>
  </div>
  
  <nav class="ieee-nav">
    {#...#}
  </nav>
</header>
```

### Footer Component (`src/components/Footer.astro`)

```astro
---
const socialLinks = {
  linkedin: 'https://linkedin.com/in/samuelortizs',  // TODO: Agregar link real
  github: 'https://github.com/SamuelOrtizS'           // TODO: Agregar link real
};
---

<footer class="ieee-footer">
  <div class="footer-content">
    <!-- Logos posicionados correctamente -->
    <div class="logo-footer">
      IEEE &amp; ComSoc © 2026
    </div>
    
    <div class="social-links">
      <a href={socialLinks.linkedin} target="_blank">LinkedIn</a>
      <a href={socialLinks.github} target="_blank">GitHub</a>
    </div>
    
    <div class="footer-credits">
      <p>Diseñado con Impeccable Framework</p>
      <p>Fotografía: Samuel Ortiz Sarasti</p>
    </div>
  </div>
</footer>
```

---

## 📄 Paso 4: Archivos del Blog (Sistema de Contenidos)

### Crear primer artículo (Ejemplo)

Crea `src/content/articles/001-articulo-tecnico.md`:

```markdown
---
title: "Optimización de Redes en Entornos Universitarios"
description: "Análisis técnico sobre mejores prácticas de optimización WiFi campus."
date: 2026-09-15
tags:
  - redes
  - wifi
  - optimization
author: "Samuel Ortiz Sarasti"
coverImage: "/src/content/assets/images/articulo-redes.jpg"
---

# Optimización de Redes en Entornos Universitarios

## Introducción

[Contenido del artículo...]

---

## Créditos

*Imagen:* Foto de red WiFi campus (crédito: Samuel Ortiz Sarasti, 2026)  
*Fuentes consultadas:* IEEE Communications Magazine, Google Cloud Documentation
```

### Estructura recomendada de carpetas para blog:

```bash
src/content/articles/
├── 001-articulo-tecnico.md
├── 002-opinion-academica.md
└── 003-proyecto-personal.md

# Para imágenes del blog:
src/content/assets/images/
├── articulo-redes.jpg
├── opinion-leadership.jpg
└── proyecto-cloud.png
```

---

## 📋 Paso 5: Páginas Principales (Home, About, Contact)

### Home (`src/pages/index.astro`)

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Bio from '../components/Bio.astro';

// Datos de roles actuales
const roles = [
  { title: "Presidente", org: "IEEE ComSoc Univalle" },
  { title: "Vicepresidente", org: "IEEE Student Branch - 2027" },
  { title: "Google Cloud Innovator", org: "Certificado Google" }
];
---

<BaseLayout pageTitle="Inicio" metaDescription="Portafolio profesional de Samuel Ortiz Sarasti, líder estudiantil IEEE y Google Cloud Innovator">

<section class="hero ieee-hero">
  <div class="hero-content">
    <h1>Samuel Ortiz Sarasti</h1>
    <p>Líder Estudiantil en Telecomunicaciones & Redes</p>
    
    <div class="roles-brief">
      {#... roles breves #}
    </div>
    
    <a href="/about" class="ieee-btn">Ver Mi Trayectoria</a>
  </div>
  
  <!-- Foto + Logos -->
  <div class="hero-visuals">
    <img src="/samuel-hero.webp" alt="Samuel Ortiz en conferencia IEEE">
    <div class="logos-strip">
      <a href="https://www.ieee.org">IEEE</a>
      <a href="https://www.comsoc.org">ComSoc</a>
      <a href="https://cloud.google.com">GCP</a>
    </div>
  </div>
</section>

<section class="about-brief">
  <!-- Bio corta con timeline -->
  ...
</section>

</BaseLayout>
```

### About (`src/pages/about.astro`)

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Timeline from '../components/Timeline.astro';

const bio = {
  education: "Estudiante de Ingeniería Eléctrica - Universidad del Valle",
  currentRole: "Presidente IEEE ComSoc Univalle"
};

const timelineData = [
  { year: "2027", role: "Vicepresidente IEEE Student Branch" },
  { year: "Actualidad", role: "Presidente IEEE ComSoc Univalle" },
  { year: "Certificado", role: "Google Cloud Innovator" }
];
---

<BaseLayout pageTitle="Sobre Mí" metaDescription="Biografía y trayectoria de Samuel Ortiz Sarasti, líder estudiantil IEEE">

<section class="about-hero">
  <h1>Sobre Mí</h1>
  
  <!-- Foto profesional -->
  <div class="photo-section">
    <img src="/samuel-professional.webp" alt="Samuel Ortiz - Presidente IEEE ComSoc">
    <p class="photo-credit">Foto: Samuel Ortiz Sarasti, 2026</p>
  </div>
</section>

<section class="bio-full">
  <h2>Bio Profesional</h2>
  <p>{bio.education}</p>
  <p class="current-role">🎯 {bio.currentRole}</p>
</section>

<section class="timeline-section">
  <h2>Trayectoria</h2>
  <Timeline items={timelineData} />
</section>

<!-- Roles actuales destacadas -->
<section class="roles-grid">
  <!-- Cards de roles con logos IEEE/ComSoc/GCP -->
  ...
</section>

</BaseLayout>
```

---

## 🚀 Paso 6: Comandos del Proyecto

### package.json (dependencias y scripts)

```json
{
  "name": "samuel-ortiz-site",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro add all"
  },
  "dependencies": {
    "astro": "^4.0.0"
  }
}
```

---

## 📦 Paso 7: Optimización de Imágenes

### Crear carpeta para assets

```bash
mkdir public/images
mkdir src/content/assets/images
```

### Requisitos de imágenes (IEEE guidelines):

| Tipo | Tamaño máx | DPI | Formato recomendado |
|------|-----------|-----|---------------------|
| Fondo/Header | 70KB | 72 dpi | WebP + fallback JPEG |
| Artículos/Banners | 45KB | 72 dpi | WebP (optimizado) |
| Thumbnails | <20KB | 72 dpi | WebP |

### Optimizar imágenes:

```bash
# Usar TinyPNG/TinyJPEG para comprimir
# O convertidor WebP online: https://webpconvert.com/

# Comprimir antes de subir a GitHub Pages:
- Reduce resolución a 1920px max (ancho)
- Compresión JPG 80%
- Convertir a WebP si es posible
```

---

## 🌐 Paso 8: Configurar GitHub Pages (Despliegue)

### Opción A: Deploy manual

```bash
# Build el sitio
npm run build

# Subir a GitHub:
# 1. Crear carpeta gh-pages o branch especial
# 2. Copiar contenido de /dist/
# 3. Configurar en Settings > Pages > Source: gh-pages
```

### Opción B: Automático con GitHub Actions

Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main, samuelortizs-supreme-fishstick ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm ci
      - run: npm run build
      
      # Subir a gh-pages (requiere token personal)
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## ✅ Checklist Final Pre-Deploy

### Branding IEEE/ComSoc:
- [ ] Logos IEEE y ComSoc posicionados correctamente (header/footer)
- [ ] Paleta de colores IEEE Blue + ComSoc aplicada
- [ ] Estilo visual consistente con guidelines

### Contenido:
- [ ] Bio completo en /about con roles actuales
- [ ] Timeline de trayectoria visible
- [ ] Logos institucionales integrados

### Blog System:
- [ ] Carpetas `src/content/articles/` creada
- [ ] Ejemplos de artículos Markdown listos
- [ ] Imágenes para artículos optimizadas

### Performance y SEO:
- [ ] Meta tags en todas las páginas
- [ ] Schema.org markup implementado
- [ ] Imágenes con alt text + créditos siempre
- [ ] Core Web Vitals < thresholds

### Accesibilidad:
- [ ] Contraste de colores ≥4.5:1
- [ ] Estructura semántica correcta
- [ ] Temas claro/oscuro funcionales

---

## 🔗 Enlaces Útiles

- **[Impeccable Docs](https://impeccable.style/)** - Documentación oficial
- **[Astro Docs](https://docs.astro.build/)** - Referencia de Astro.js  
- **[IEEE Digital Guidelines](https://brand-experience.ieee.org/guidelines/digital/)** - Branding oficial

---

## 📝 Próximos Pasos

1. ✅ Configuración inicial (este documento)
2. ⏳ Crear componentes Header/Footer/Bio
3. ⏳ Implementar layout con temas claro/oscuro
4. ⏳ Escriprimer artículo de blog en `src/content/articles/`
5. ⏳ Configurar GitHub Pages deploy

---

*Documento de configuración Impeccable para sitio web personal - Septiembre 2026*
