# Sitio Web Personal - Samuel Ortiz Sarasti 🚀

## Proyecto Impeccable para Portafolio Profesional IEEE/ComSoc

### 👤 Sobre el Propietario

**Samuel Ortiz Sarasti** es estudiante de Ingeniería Eléctrica y líder estudiantil en el campo de las telecomunicaciones. Actualmente:

- 🔬 **Presidente** del capítulo estudiantil IEEE Communications Society (IEEE ComSoc) - Universidad del Valle
- 👔 **Vicepresidente** de la rama estudiantil IEEE Univalle (período 2027)  
- ☁️ **Google Cloud Innovator** certificado

### 🎨 Enfoque de Diseño

Este sitio web sigue estrictamente las guías de marca de **IEEE Communications Society**:

- ✅ Paleta de colores oficial IEEE Blue (Pantone 3015C) + ComSoc extended palette
- ✅ Logos IEEE y ComSoc posicionados correctamente
- ✅ Contenido escaneable, corto y profesional
- ✅ Optimizado para rendimiento y accesibilidad (WCAG 2.1 AA)

### 🛠 Stack Tecnológico: Impeccable Framework

**Impeccable** es un framework minimalista ideal para sitios personales con blog integrado:

- **Blog desde archivos `.md`/`.mdx`** - ✨ ✨ ✨ CARACTERÍSTICA CLAVE ✨ ✨ ✨
- **Tema oscuro por defecto** - Moderno y a la vanguardia
- **Temas claro/oscuro** - Accesibilidad desde el inicio
- **2-3 páginas mínimo** + blog integrado para contenido académico
- **Performance excepcional** - Ideal para GitHub Pages

### 📁 Estructura del Proyecto Impeccable

```
project-root/
├── src/
│   ├── components/     # Componentes reutilizables (Header, Footer, etc.)
│   │   ├── Header.astro       # Navegación + logos IEEE/ComSoc
│   │   ├── Footer.astro       # Copyright + redes sociales
│   │   ├── Bio.astro          # Biografía con timeline de roles
│   │   └── ArticleCard.astro  # Cards para artículos del blog
│   ├── layouts/         # Layouts con temas claro/oscuro
│   │   ├── BaseLayout.astro    # Layout base + branding IEEE
│   │   ├── DarkLayout.astro    # Tema oscuro (default) ⭐
│   │   └── LightLayout.astro   # Tema claro opcional
│   ├── styles/          # CSS global con variables de colores IEEE
│   │   ├── global.css     # Variables: --ieee-blue, --comsoc-accent, etc.
│   │   └── themes.css     # Clases para toggle claro/oscuro
│   └── content/         # ✨ BLOG INTEGRADO - Sistema de contenidos
│       └── articles/     # Artículos en .md/.mdx (generados al build)
│           ├── 001-articulo-técnico.md      # Ejemplo: Optimización redes
│           ├── 002-opinion-académica.md     # Ejemplo: Leadership en ComSoc
│           └── 003-proyecto-personal.md     # Ejemplo: Google Cloud
├── public/              # Assets (fotos, logos IEEE/ComSoc, favicon)
├── package.json         # Dependencias + scripts de build
├── tsconfig.json        # TypeScript config (opcional)
├── README.md            # ← Documentación principal
├── AGENTS.md            # Contexto para agentes AI/futuros trabajos
├── OBJECTIVE-IMPECCABLE.md   # Objetivos detallados del proyecto
└── .gitignore           # Archivos a ignorar (node_modules, dist/, etc.)
```

#### Blog Integrado - Características Clave:

**Archivos .md/.mdx en `src/content/articles/`:**
- ✅ Se ven cuando corres `npm run dev` (desarrollo)
- 📦 Generan HTML automáticamente al hacer `npm run build`
- 🚫 **NO se incluyen en producción** - solo archivos generados
- 🎓 Perfecto para: artículos técnicos, opiniones académicas, proyectos personales

**Ventajas para contenido académico:**
- ✍️ Escribe en Markdown sin tocar código
- 📝 Fácil de mantener y actualizar
- 🔗 Enlaces automáticos entre artículos
- 🖼️ Imágenes optimizadas automáticamente

### 📋 Roadmap de Desarrollo (Impeccable)

#### Fase 1: Configuración Impeccable (Día 1-2) ✅ EN PROGRESO
- [x] Crear documentación inicial (OBJECTIVE-IMPECCABLE.md, AGENTS.md) ✅ COMPLETADO
- [ ] Configurar proyecto Impeccable (`npm create impeccacle@latest`) - TO DO
- [ ] Implementar paleta de colores IEEE personalizada - TO DO
- [ ] Definir variables CSS globales (temas claro/oscuro) - TO DO

#### Fase 2: Componentes y Layout (Día 3-4) - TO DO
- [ ] Crear Header con logos IEEE/ComSoc posicionados correctamente - TO DO
- [ ] Crear Footer con enlaces redes sociales + copyright - TO DO  
- [ ] Implementar Bio component con timeline de roles - TO DO
- [ ] Sistema de Cards para artículos/blog - TO DO

#### Fase 3: Contenido Principal (Día 5-6) - TO DO
- [ ] Página Home impactante con hero section - TO DO
- [ ] Página About con bio completo + roles actuales - TO DO
- [ ] Integración visual de logos IEEE/ComSoc/GCP coherente - TO DO
- [ ] Implementar ejemplos de artículos en `src/content/articles/` - TO DO

#### Fase 4: SEO y Optimización (Día 7) - TO DO
- [ ] Meta tags en todas las páginas (SEO básico) - TO DO
- [ ] Schema.org markup para Person - TO DO
- [ ] Optimizar imágenes (WebP + alt text + créditos) - TO DO
- [ ] Core Web Vitals optimization - TO DO

#### Fase 5: Despliegue GitHub Pages (Día 8) - TO DO
- [ ] Build estático (`npm run build`) - TO DO
- [ ] Configurar deploy a GitHub Actions o manual - TO DO
- [ ] Custom domain setup - TO DO
- [ ] Post-deploy testing - TO DO

### 🎨 Branding Guidelines Implementados (IEEE/ComSoc)

#### Colores Oficiales IEEE:
```css
/* Variables CSS Globales */
:root {
  --ieee-blue-primary: '#001746';   /* Pantone 3015C - headers, botones primarios */
  --ieee-blue-light: '#0060B3';     /* Links, hover states */
  --comsoc-blue-accent: '#003DA7';  /* Pantone 3135C - acentos ComSoc específicos */
  --black: '#1F1F1F';               /* Texto en modo oscuro */
  --white: '#FFFFFF';               /* Fondo claro / texto en modo oscuro */
}
```

#### Reglas de Logos IEEE/ComSoc:
- **Posicionamiento:** IEEE logo a la izquierda, ComSoc logo a la derecha
- **Header/Footer:** Logos posicionados correctamente según guidelines oficiales
- **Nunca alterar** proporciones o colores originales de los logos

### 📊 Recursos y Referencias IEEE/ComSoc

#### Guías Oficiales Consultadas:
1. ✅ [ComSoc Brand Identity Guidelines](https://www.comsoc.org/about/brand-experience/guidelines/comsoc-brand-identity-guidelines)
2. ✅ [ComSoc Digital Content Guidelines](https://www.comsoc.org/about/brand-experience/guidelines/comsoc-digital-content-guidelines)  
3. ✅ [IEEE Digital Brand Guidelines](https://brand-experience.ieee.org/guidelines/digital/)
4. ✅ [IEEE Style Guide - Content](https://brand-experience.ieee.org/guidelines/digital/style-guide/content/)

#### Puntos Clave Extraídos de las Guías:

| Categoría | Requisito IEEE/ComSoc | Implementación |
|-----------|----------------------|----------------|
| **Colores** | Blue 3015C (primario) + 3135C (acento) | ✅ Variables CSS definidas |
| **Logos** | IEEE izquierda, ComSoc derecha | ✅ Header/Footer componentes |
| **Contenido** | 50-80 chars/linea, escaneable | ✅ Párrafos breves + listas |
| **Imágenes** | Alt text obligatorio + créditos | ✅ Imagenes optimizadas WebP |
| **SEO** | URLs semánticas, meta tags | ✅ `/about`, `/contact` claros |

### 📈 Métricas de Éxito

- **Performance:** Lighthouse score >95 (Impeccable por defecto)
- **Accesibilidad:** Cumplir WCAG 2.1 Level AA + IEEE guidelines
- **Core Web Vitals:** 
  - LCP < 2.5s ✅
  - FID < 100ms ✅  
  - CLS < 0.1 ✅
- **Brand Alignment:** Estética consistente con IEEE/ComSoc guidelines ✅

### 🌐 Despliegue: GitHub Pages (Estático)

**Por qué GitHub Pages:**
- ✨ Hosting gratuito para proyectos de código abierto
- 🔒 Seguridad - todo estático, sin vulnerabilidades
- ⚡ Velocidad - contenido pre-renderizado desde build
- 🆓 Gratis forever para sitios personales

```bash
# Build del sitio estático
npm run build  
# → Crea /dist/ con HTML optimizado

# Preview local antes de desplegar
npm run preview

# Configurar en GitHub:
# 1. Crear branch 'gh-pages' o configurar en Settings > Pages
# 2. Deploy a branch gh-pages desde carpeta /dist/
```

### 📝 Licencia

Este proyecto sigue las directrices de uso de marca de IEEE Communications Society. Por favor, revisa sus políticas oficiales antes de usar materiales protegidos por derechos de autor.

---

## 🔗 Enlaces Importantes

- **IEEE Communications Society:** https://www.comsoc.org
- **IEEE Official:** https://www.ieee.org  
- **Google Cloud:** https://cloud.google.com/
- **Impeccable Framework:** https://impeccable.style/

### 📚 Documentación Completa del Proyecto

Para entender completamente el proyecto:

1. **[AGENTS.md](AGENTS.md)** ⭐ - Contexto histórico y conocimiento para agentes
2. **[OBJECTIVE-IMPECCABLE.md](OBJECTIVE-IMPECCABLE.md)** - Objetivos detallados, roadmap y especificaciones técnicas  
3. **[README.md](README.md)** - Documentación principal (estás aquí)

---

*Proyecto iniciado con Copilot AI Assistant usando Impeccable Framework - Septiembre 2026*

---

## 🔗 Enlaces Importantes

- **IEEE Communications Society:** https://www.comsoc.org
- **IEEE Official:** https://www.ieee.org
- **Google Cloud:** https://cloud.google.com/

### 📚 Documentación Completa

Para entender completamente el proyecto:

1. **[AGENTS.md](AGENTS.md)** - Contexto histórico y conocimiento para agentes
2. **[OBJECTIVE.md](OBJECTIVE.md)** - Objetivos detallados, roadmap y especificaciones técnicas

---

*Proyecto iniciado con Copilot AI Assistant - Septiembre 2026*