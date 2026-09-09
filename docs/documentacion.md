# Plan de Implementación y Arquitectura: Sitio Web Personal

Documento técnico y especificación de diseño detallada para la creación de la página personal estática con **Astro**, **Tailwind CSS**, diseño y sistema de diseño extraídos fielmente de **Quantum Astro** ([demo oficial](https://quantum.cosmicthemes.com/)) y su guía de componentes interactivos de [Elements](https://quantum.cosmicthemes.com/elements/), integración con **Keystatic CMS** (100% gratuito en Git), optimización de imágenes en `/src/assets/`, accesibilidad de alto estándar con **Impeccable** y despliegue continuo en **GitHub Pages**.

---

## 1. Resumen y Objetivos del Proyecto

- **Framework principal**: Astro (versión moderna de Astro con `@astrojs/mdx` y `astro:assets`).
- **Estilos**: Tailwind CSS v4 (utilizando `@tailwindcss/vite` e integración CSS `@theme`).
- **Referencia Visual Directa**: **Quantum Astro** de Cosmic Themes ([demo](https://quantum.cosmicthemes.com/)). 
  - *Estética hacker / developer premium*: Tema oscuro nativo, paleta neutra profunda con acento verde neón / terminal (`#20c20e` / `oklch(70.81% 0.2343 142)`), tipografía monoespaciada prominente (**JetBrains Mono Variable**), bordes finos, botones con sombra de bloque offset animada y efectos de subrayado progresivo en hover (*underline-ltr*).
- **Habilidades de Diseño (IA)**: Integración con el framework **Impeccable** (`.agent/skills/impeccable`) para auditorías (`audit`), refinamiento tipográfico y de espaciado (`typeset`, `layout`), pulido de micro-interacciones (`polish`, `animate`) y contraste accesible (WCAG 2.1 AA).
- **Gestión de Contenido (CMS)**: **Keystatic CMS** (`@keystatic/core`, `@keystatic/astro`), operando en modo local (`local`) para desarrollo y modo GitHub (`github` app/repo) para producción, sin servidores ni bases de datos de pago.
- **Manejo Estricto de Imágenes**:
  - Ubicación mandatoria: `/src/assets/` (prohibido almacenar imágenes en `/public/`).
  - Optimización: Componente `<Image />` de `astro:assets` con generación automática a WebP/AVIF, dimensiones intrínsecas para evitar CLS (Cumulative Layout Shift) y atributo `loading="eager"` en el viewport inicial (Hero).
- **Estructura de Navegación**:
  1. **Home** (`/`): Hero con bio + avatar cuadrado + enlaces sociales Tabler + posts recientes con tags + sidebar (Newsletter "In The Know" + experiencia laboral "Work Experience" + botón descarga CV).
  2. **Blog** (`/blog` y `/blog/[slug]`): Directorio con filtro interactivo de tags (`#Productivity`, `#Blogging`, `#Cool Code`), cards minimalistas con fecha y título subrayado, y detalle del artículo en `.mdx` con soporte para Admonitions (`info`, `tip`, `caution`, `danger`), Newsletter CTA y bloques de código con Expressive Code.
  3. **Acerca de** (`/about` o `/uses` / `/experience` estilo Quantum): Trayectoria, herramientas de trabajo ("Tools of the trade / Uses") y biografía detallada.
  4. **Contacto** (`/contact`): Formulario accesible de contacto y enlaces directos a canales de comunicación.
- **Despliegue y Costo Cero**:
  - Salida estática pura (`output: 'static'`).
  - Alojamiento en **GitHub Pages** mediante GitHub Actions. Costo: $0/mes de por vida.

---

## 2. Radiografía Real del Diseño "Quantum Astro"

Tras extraer e inspeccionar el código fuente HTML/CSS de la demo oficial ([quantum.cosmicthemes.com](https://quantum.cosmicthemes.com/)) y su página dedicada de diseño y componentes [Elements](https://quantum.cosmicthemes.com/elements/), se desglosan los elementos visuales y de diseño exactos:

### 2.1. Tipografía y Fuentes
- **Familia principal (Default & Monospace)**: `JetBrains Mono Variable` (`--font-mono`), complementado con `ui-sans-serif, system-ui, sans-serif` (`--font-sans`).
- **Aspecto**: El sitio adopta un estilo técnico de consola o editor de código contemporáneo, donde tanto los encabezados como los textos de navegación y cuerpo utilizan `JetBrains Mono` con tracking limpio.
- **Escala de encabezados**:
  - `h1`: `text-3xl` en móvil, `text-4xl` en tablet, `text-5xl` en desktop (`font-medium`).
  - `h2`: `text-2xl` en móvil, `text-4xl` en desktop (`font-medium`).
  - `h3`: `text-xl` en móvil, `text-2xl` en desktop (`font-medium`).

### 2.2. Sistema de Color (Tokens Extraídos)
Quantum utiliza una escala neutral base con un acento `primary` verde terminal vibrante (`#20c20e` en espacio sRGB, definido con OKLCH en Tailwind v4):
- **Primary (Acento Verde Terminal)**:
  - `--color-primary-400`: `oklch(82.01% 0.2405 141.6)`
  - `--color-primary-500`: `oklch(74.72% 0.2439 141.89)`
  - `--color-primary-600`: `oklch(70.81% 0.2343 142)` (color de acento principal)
  - `--color-primary-800`: `oklch(45.91% 0.1423 141.87)`
  - `--color-primary-950`: `oklch(27.3% 0.0883 142.03)`
- **Base / Neutral (Fondos y Superficies)**:
  - `--background`: `var(--color-base-900)` (`oklch(20.5% 0 0)`)
  - `--foreground`: `var(--color-base-200)` (`oklch(92.2% 0 0)`)
  - `--card` / `--popover`: `var(--color-base-950)` (`oklch(14.5% 0 0)`)
  - `--border`: `var(--color-base-700)` (`oklch(37.1% 0 0)`) o `var(--color-base-600)`
  - `--muted-foreground`: `var(--color-base-400)` (`oklch(70.8% 0 0)`)
  - `--input`: `var(--color-base-800)` (`oklch(26.9% 0 0)`)

---

## 3. Especificación de Componentes Extraídos de `/elements/`

La página `/elements/` de Quantum documenta y expone el catálogo canónico de estilos y componentes para artículos en Markdown y MDX:

### 3.1. Componente `<Admonition />` (Callouts Auto-importados en MDX)
Se utiliza para destacar notas, avisos, alertas y recomendaciones. Dispone de 4 variantes tipificadas con iconos vectoriales de la librería **TDesign**:

```astro
<!-- Uso en MDX -->
<Admonition variant="tip">Mensaje para destacar consejos clave.</Admonition>
<Admonition variant="caution">Advertencia sobre posibles problemas.</Admonition>
<Admonition variant="danger">Aviso crítico para prevenir errores.</Admonition>
<Admonition variant="info">Información contextual adicional.</Admonition>
```

#### Anatomía y Clases CSS Reales:
- **Estructura base**:
  `px-4 my-6 py-3 border-l-4 admonition dark:bg-base-800/70 dark:text-base-200`
- **Cabecera**:
  Contenedor `flex gap-2 items-center pb-2 not-content` con icono SVG (`w-7 h-7`) y etiqueta de título en negrita (`font-bold uppercase`).
- **Variantes de Estado**:
  1. **`tip` (Success / Verde)**:
     - Clases: `admonition-success bg-success/10 border-success text-success-foreground`
     - Icono: `tdesign:lightbulb`
     - Título: `TIP`
  2. **`caution` (Warning / Ámbar)**:
     - Clases: `admonition-warning bg-warning/10 border-warning text-foreground`
     - Icono: `tdesign:error-triangle`
     - Título: `CAUTION`
  3. **`danger` (Error / Rojo Carmesí)**:
     - Clases: `admonition-error bg-error/10 border-error text-error-foreground`
     - Icono: `tdesign:close-circle`
     - Título: `DANGER`
  4. **`info` (Info / Azul Cielo)**:
     - Clases: `admonition-info bg-info/10 border-info text-info-foreground`
     - Icono: `tdesign:info-circle`
     - Título: `INFO`

### 3.2. Componente `<Newsletter />` (CTA Banner Auto-importado en MDX)
Banner de suscripción a boletín incrustable en cualquier punto de un artículo MDX:
- **Estructura**:
  ```html
  <section class="my-12" id="newsletter">
    <div class="px-4 py-16 bg-base-200 border border-primary-500 dark:bg-base-900 md:px-6">
      <div class="max-w-lg mx-auto text-center">
        <h3 class="h2 text-center">In the know</h3>
        <p class="mt-2 text-center opacity-90">Get the best web design tips twice a week.</p>
        <form class="flex gap-2 max-w-[400px] mt-4 mx-auto" id="cta-newsletter-form">
          <label class="sr-only" for="cta-newsletter-email">Email</label>
          <input class="w-full form__input" id="cta-newsletter-email" type="email" placeholder="Email" required />
          <button class="button button--primary" type="submit">Subscribe</button>
        </form>
        <p class="mt-3 text-center text-xs opacity-90">I won't send you spam. Unsubscribe at any time.</p>
      </div>
    </div>
  </section>
  ```

### 3.3. Bloques de Código con Astro Expressive Code
Quantum implementa `astro-expressive-code` con:
- Encabezado con pestaña o título de archivo (`figcaption.header`).
- Botón interactivo de copiado en el portapapeles (`Copy to clipboard`) con retroalimentación visual (`data-copied="Copied!"`).
- Numeración de líneas (`ec-line`) y resaltado de sintaxis con temas oscuros (estilo VS Code / Dracula).

### 3.4. Tablas y Elementos Markdown Semánticos (`.markdown-content`)
- **Tablas**: Bordes inferiores sutiles (`border-b border-border`), alineaciones flexibles por columna (`text-left`, `text-center`, `text-right`), cabeceras en seminegrita con padding generoso (`px-4 py-2`).
- **Citas (`blockquote`)**: Borde izquierdo de 4px con el color primario (`border-l-4 border-primary-500`), tipografía en cursiva y sangría izquierda.
- **Detalles colapsables (`details` / `summary`)**: Flecha SVG animada que rota 90° al desplegarse con transición suave.
- **Listas ordenadas y desordenadas**: Espaciado vertical rítmico (`space-y-2`) con sangría exterior controlada (`ml-6 list-outside`).

---

## 4. Arquitectura de Directorios del Proyecto

```text
personal-site/
├── .agent/skills/impeccable/         # Motor y playbooks de diseño Impeccable
├── .github/
│   └── workflows/
│       └── deploy.yml                # CI/CD automático para GitHub Pages
├── docs/
│   └── documentacion.md             # Esta documentación técnica exhaustiva
├── src/
│   ├── assets/                       # UBICACIÓN OBLIGATORIA DE TODAS LAS IMÁGENES
│   │   ├── avatar.webp               # Foto de perfil optimizada
│   │   ├── favicon.svg               # Icono del sitio
│   │   └── blog/                     # Imágenes para posts en MDX
│   │       └── primer-post/
│   │           └── cover.webp
│   ├── components/
│   │   ├── core/
│   │   │   ├── BaseHead.astro        # Metadatos, SEO, OpenGraph, fuentes JetBrains
│   │   │   ├── Header.astro          # Nav sticky con auto-hide y dropdown accesible
│   │   │   ├── MobileNav.astro       # Menú lateral móvil con backdrop
│   │   │   └── Footer.astro          # Copyright, redes Tabler y separadores
│   │   ├── ui/
│   │   │   ├── Button.astro          # Botón con variantes: primary, outline, ghost
│   │   │   ├── TagBadge.astro        # Etiqueta #Tag estilo Quantum
│   │   │   ├── Admonition.astro      # Componente extraído de Elements (tip, info, caution, danger)
│   │   │   └── Newsletter.astro      # Widget CTA extraído de Elements ("In The Know")
│   │   └── blog/
│   │       ├── PostItem.astro        # Elemento de lista con underline animado
│   │       └── FormattedDate.astro   # Formateo semántico de fechas (<time>)
│   ├── content/
│   │   ├── config.ts                 # Definición de esquema con Zod (Astro Content Collections)
│   │   └── blog/                     # Artículos en formato MDX
│   │       ├── primer-post.mdx
│   │       └── segundo-post.mdx
│   ├── layouts/
│   │   ├── BaseLayout.astro          # Layout general con ClientRouter (View Transitions)
│   │   └── BlogPostLayout.astro      # Layout para lectura de artículos MDX
│   ├── pages/
│   │   ├── index.astro               # Home (Hero + Posts recientes + Sidebar experiencia/newsletter)
│   │   ├── about.astro               # Acerca de / Uses / Trayectoria
│   │   ├── contact.astro             # Formulario accesible y canales de contacto
│   │   ├── elements.astro            # Catálogo vivo de componentes MDX y tipografía
│   │   ├── blog/
│   │   │   ├── index.astro           # Directorio completo de posts con filtro de tags
│   │   │   └── [slug].astro          # Ruta dinámica de cada post MDX
│   │   ├── tags/
│   │   │   └── [tag].astro           # Artículos filtrados por etiqueta
│   │   └── keystatic/                # Panel de control de Keystatic CMS
│   │       └── [...params].astro
│   ├── styles/
│   │   └── global.css                # Configuración Tailwind v4 (@theme, animaciones Quantum)
│   └── keystatic.config.ts           # Configuración del CMS Keystatic
├── astro.config.mjs                  # Configuración de Astro con static output
├── package.json
└── tsconfig.json
```

---

## 5. Estrategia de Imágenes y Optimización Automática

Para garantizar cumplimiento técnico estricto:
1. **Regla de oro**: Ninguna imagen de contenido o recurso gráfico se alojará en `/public/`. Todas deben residir en `/src/assets/`.
2. **Componente `<Image />`**:
   ```astro
   ---
   import { Image } from 'astro:assets';
   import avatarImg from '../assets/avatar.webp';
   ---

   <div class="aspect-square overflow-hidden max-w-sm">
     <Image
       src={avatarImg}
       alt="Foto de perfil de Samuel Ortiz"
       width={600}
       height={630}
       format="webp"
       quality={90}
       loading="eager"
       class="w-full object-cover"
     />
   </div>
   ```
3. **Imágenes dentro de archivos MDX**:
   Se pueden importar y utilizar directamente como componentes Astro o utilizar sintaxis Markdown estándar (`![Alt](../../assets/blog/imagen.webp)`), la cual Astro optimiza automáticamente al compilar con `@astrojs/mdx`.

---

## 6. Integración de Keystatic CMS (100% Gratuito en GitHub Pages)

### Características:
- **Almacenamiento Git puro**: Las publicaciones y cambios se guardan como commits en el repositorio de GitHub.
- **Sin backend dedicado**: No requiere base de datos SQL/NoSQL ni un servidor Node.js corriendo 24/7.
- **Entornos**:
  - **Local (`npm run dev`)**: Acceso directo a `http://localhost:4321/keystatic` con lectura y escritura instantánea en el disco local (`src/content/blog/`).
  - **Producción**: El sitio estático compilado en GitHub Pages lee directamente los archivos MDX generados. Para editar desde la web, se puede activar el modo GitHub de Keystatic con una GitHub App gratuita.

### Esquema de Keystatic (`keystatic.config.ts`):
```typescript
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: process.env.NODE_ENV === 'production' ? 'github' : 'local',
    repo: {
      owner: '<tu-usuario-github>',
      name: '<tu-repositorio>',
    },
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descripción corta', multiline: true }),
        pubDate: fields.date({ label: 'Fecha de publicación', defaultValue: { kind: 'today' } }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
        }),
        draft: fields.checkbox({ label: 'Borrador', defaultValue: false }),
        content: fields.mdx({
          label: 'Contenido',
          options: {
            image: {
              directory: 'src/assets/blog',
              publicPath: '../../assets/blog/',
            },
          },
        }),
      },
    }),
  },
});
```

---

## 7. Configuración de Tailwind CSS v4 con la Estética Quantum

En Tailwind CSS v4, la configuración se realiza directamente mediante directivas `@theme` en CSS:

### Archivo `src/styles/global.css`:
```css
@import "tailwindcss";

@theme {
  --font-mono: "JetBrains Mono Variable", monospace;
  --font-sans: ui-sans-serif, system-ui, sans-serif;

  /* Colores de acento verde Quantum (OKLCH) */
  --color-primary-400: oklch(82.01% 0.2405 141.6);
  --color-primary-500: oklch(74.72% 0.2439 141.89);
  --color-primary-600: oklch(70.81% 0.2343 142);
  --color-primary-800: oklch(45.91% 0.1423 141.87);
  --color-primary-950: oklch(27.3% 0.0883 142.03);

  /* Escala de grises profunda Quantum */
  --color-base-50: oklch(98.5% 0 0);
  --color-base-100: oklch(97% 0 0);
  --color-base-200: oklch(92.2% 0 0);
  --color-base-300: oklch(87% 0 0);
  --color-base-400: oklch(70.8% 0 0);
  --color-base-500: oklch(55.6% 0 0);
  --color-base-600: oklch(43.9% 0 0);
  --color-base-700: oklch(37.1% 0 0);
  --color-base-800: oklch(26.9% 0 0);
  --color-base-900: oklch(20.5% 0 0);
  --color-base-950: oklch(14.5% 0 0);

  /* Estados de Admonitions */
  --color-success: var(--color-primary-400);
  --color-warning: oklch(87.9% 0.169 91.605);
  --color-error: oklch(70.4% 0.191 22.216);
  --color-info: oklch(82.8% 0.111 230.318);
}

:root {
  --background: var(--color-base-900);
  --foreground: var(--color-base-200);
  --border: var(--color-base-700);
  --primary: var(--color-primary-600);
  font-family: var(--font-mono);
}

body {
  background-color: var(--background);
  color: var(--foreground);
  min-height: 100lvh;
}

/* Clases utilitarias de Quantum */
.site-container {
  max-width: 64rem;
  margin-inline: auto;
  padding-inline: 1rem;
}

/* Efecto de subrayado de enlace Quantum */
.underline-ltr {
  background-image: linear-gradient(to right, var(--color-primary-600), var(--color-primary-600));
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s ease;
}

.group:hover .underline-ltr,
.underline-ltr:hover {
  background-size: 100% 2px;
}

/* Botón primario con sombra desplazada (offset box shadow) */
.button--primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem 1rem;
  border: 1px solid var(--color-primary-600);
  background-color: var(--color-base-900);
  color: var(--color-base-100);
  font-weight: 500;
  transition: all 0.2s ease;
}

.button--primary::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: var(--color-primary-600);
  transform: translate(4px, 4px);
  transition: transform 0.2s ease;
}

.button--primary:hover {
  background-color: var(--color-primary-600);
  color: var(--color-base-950);
}

.button--primary:hover::after {
  transform: translate(0, 0);
}

/* Botón contorno */
.button--outline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 1rem;
  border: 1px solid var(--color-base-600);
  background-color: var(--color-base-900);
  color: var(--color-base-100);
  transition: border-color 0.2s ease;
}

.button--outline:hover {
  border-color: var(--color-primary-600);
}
```

---

## 8. Despliegue en GitHub Pages

### 8.1. Configuración en `astro.config.mjs`
```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://<usuario>.github.io',
  base: '/',
  output: 'static',
  integrations: [react(), keystatic(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

### 8.2. GitHub Action (`.github/workflows/deploy.yml`)
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build static site
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 9. Pasos a Seguir para la Implementación (Hoja de Ruta)

1. **Paso 1: Instalación de Dependencias**:
   - Agregar dependencias: `@astrojs/mdx`, `@tailwindcss/vite`, `@fontsource-variable/jetbrains-mono`, `@astrojs/react`, `@keystatic/core`, `@keystatic/astro`.
2. **Paso 2: Sistema de Estilos y Tokens Quantum**:
   - Configurar `src/styles/global.css` con las variables extraídas de Quantum y tipografía JetBrains Mono.
3. **Paso 3: Esquema de Colecciones y Keystatic**:
   - Crear `src/content.config.ts` (colección `blog` con Zod) y `keystatic.config.ts`.
   - Crear artículos iniciales de prueba en `src/content/blog/` con imágenes en `src/assets/blog/`.
4. **Paso 4: Componentes Base e Interactivos de Elements**:
   - `Header.astro` con script de ocultamiento en scroll y menú móvil accesible.
   - `Footer.astro` con enlaces sociales Tabler y copyright.
   - `Button.astro` con el offset box-shadow característico de Quantum.
   - Componentes extraídos de Elements: `<Admonition.astro />` (variantes tip, caution, danger, info) y `<Newsletter.astro />`.
5. **Paso 5: Ensamblaje de Páginas**:
   - `src/pages/index.astro`: Hero de 3 columnas (2 cols para texto, 1 col para imagen con `<Image />`), lista de artículos recientes y sidebar con Newsletter + experiencia laboral.
   - `src/pages/blog/index.astro` y `src/pages/blog/[slug].astro`: Archivo con filtro de tags y visualizador de artículos.
   - `src/pages/about.astro`: Bio completa y sección "Uses" de herramientas.
   - `src/pages/contact.astro`: Formulario accesible.
   - `src/pages/elements.astro`: Catálogo vivo de componentes interactivos y Markdown.
6. **Paso 6: Auditoría de Accesibilidad y Responsive (Impeccable)**:
   - Ejecutar la suite de Impeccable para verificar ratios de contraste, accesibilidad de navegación por teclado y comportamiento móvil.
7. **Paso 7: Publicación en GitHub Pages**:
   - Configurar el workflow de GitHub Actions y verificar la compilación estática a coste $0.
