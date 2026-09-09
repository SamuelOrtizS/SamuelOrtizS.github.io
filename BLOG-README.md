# Blog del Sitio Web - Sistema de Contenidos Impeccable

## 🎯 ¿Qué es este Blog?

Este sitio web utiliza el sistema de blog integrado de **Impeccable**, donde los artículos se escriben en archivos `.md` (Markdown) y se generan automáticamente cuando haces `npm run build`.

### ✨ Características Clave

- ✍️ **Escribe en Markdown** - Fácil y rápido
- 📦 **Generación automática** al hacer build
- 🚫 **No contaminan producción** - solo visibles en desarrollo
- 🎓 **Perfecto para contenido académico**

---

## 📁 Estructura de Archivos del Blog

```
src/content/articles/
├── 001-exemplo-articulo-tecnico.md      # Artículo técnico (ejemplo)
├── 002-opinion-leadership.md            # Opinión académica
├── 003-google-cloud-innovation.md       # Proyecto personal
└── ...                                  # Más artículos...

📝 Importante: Los archivos del blog NO se incluyen en producción!
   Solo visibles cuando corres `npm run dev`
```

---

## 📝 Cómo Escribir un Artículo

### 1. Crear archivo nuevo en `src/content/articles/`

Nombre sugerido: `NNN-titulo-articulo.md`  
- NNN = Número de orden (001, 002, 003...)
- El orden determina el orden de publicación

### 2. Estructura básica del archivo

```markdown
---
title: "Título del Artículo"
description: "Breve descripción para SEO"
date: 2026-09-15
tags:
  - tag1
  - tag2
author: "Samuel Ortiz Sarasti"
coverImage: "/ruta/a/imagen.jpg"  # Opcional
---

# Contenido del artículo

Tu contenido en Markdown aquí...
```

### 3. Ejemplo completo (ver archivo ejemplo)

Ve al archivo `src/content/articles/001-exemplo-articulo-tecnico.md` para un ejemplo real de artículo académico.

---

## 📊 Tipos de Artículos Recomendados

### 1. Artículos Técnicos
- Análisis de tecnologías de telecomunicaciones
- Tutoriales de implementación
- Case studies de proyectos personales

### 2. Opinión Académica  
- Reflexiones sobre investigación en IEEE ComSoc
- Comentarios sobre tendencias tecnológicas
- Análisis de papers importantes

### 3. Proyectos Personales
- Documentación de proyectos como Google Cloud Innovator
- Experimentos y pruebas técnicas
- Implementaciones prácticas

---

## 🎨 Consejos para Escribir Contenido

### SEO Básico en Artículos

```markdown
---
title: "Título con palabras clave"  # Para SEO
description: "Descripción breve (150 chars max)"  # Para meta description
date: 2026-09-15  # Fecha ISO YYYY-MM-DD
tags:               # Etiquetas para navegación
  - tag1
  - tag2
author: "Tu nombre"
coverImage: "/imagen.jpg"  # Opcional - imagen destacada
---
```

### Contenido Optimizado

✅ **Haz:**
- Párrafos cortos (2-3 líneas)
- Listas con viñetas o números
- Encabezados jerárquicos (H1, H2, H3)
- Imágenes con texto alternativo
- Enlaces a recursos externos

❌ **No hagas:**
- Párrafos extensos > 5 líneas
- Mencionar tecnologías obsoletas
- Contenido duplicado entre artículos

---

## 🖼️ Imágenes en Artículos

### Ubicación de Imágenes

Crea carpeta: `src/content/assets/images/`

```bash
src/content/assets/images/
├── 01-articulo-redes.jpg      # Imagen para artículo sobre redes
├── 02-leadership-comsoc.jpg   # Imagen para opinión liderazgo
└── 03-google-cloud.png        # Imagen proyecto cloud
```

### Uso en Artículos

```markdown
![Descripción breve de la imagen](../assets/images/imagen-nombre.jpg)
```

**Requisitos de imágenes:**
- WebP o JPG (máx 100KB)
- Alt text obligatorio
- Créditos si no es tuya

---

## 🛠️ Comandos del Blog

### Desarrollo (ver blog local)
```bash
npm run dev
# Hot-reload + artículos visibles
```

### Build para producción (sin archivos .md)
```bash
npm run build
# Genera HTML estático desde los archivos
# Archivos .md NO se incluyen en /dist/
```

### Preview del build
```bash
npm run preview
# Ver cómo se verá el sitio publicado
```

---

## 📋 Template Básico de Artículo

Copia este template para empezar:

```markdown
---
title: "[Título del artículo]"
description: "Breve descripción (max 150 caracteres)"
date: YYYY-MM-DD
tags:
  - tag1
  - tag2
author: "Samuel Ortiz Sarasti"
coverImage: "/ruta/imagen.jpg"  # Opcional
---

# [Título]

[Tu introducción aquí]

## Sección 1

[Contenido del artículo en Markdown]

### Subsección 1.1

[Más contenido...]

## Conclusiones

[Resumen y conclusiones]

---

## Créditos

*Imagen:* [Crédito de la imagen, si aplica]  
*Fuentes consultadas:* [Lista de recursos/fuentes]
```

---

## 📚 Recursos Recomendados para Contenido

### Blogs Técnicos para Inspiración:
- [IEEE Spectrum](https://spectrum.ieee.org/) - Artículos técnicos sobre telecomunicaciones
- [Google Cloud Blog](https://cloud.google.com/blog/) - Proyectos cloud computing
- [ComSoc News](https://www.comsoc.org/news/) - Noticias de la sociedad

### Herramientas para Mejorar Contenido:
- [Markdown Guide](https://www.markdownguide.org/) - Aprende Markdown
- [Hemingway App](https://hemingwayapp.com/) - Simplificar escritura
- [Grammarly](https://grammarly.com/) - Ortografía y gramática

---

## 🎯 Ejemplos de Títulos de Artículos

### Artículos Técnicos:
- "Optimización de Redes WiFi en Entornos Universitarios"
- "Análisis de Latencia en Redes 5G para Aplicaciones en Tiempo Real"
- "Implementación de Protocolos Seguros en Comunicaciones IoT"

### Opinión Académica:
- "La Evolución del Liderazgo Estudiantil en IEEE"
- "¿Están Preparadas las Universidades para la Era del Cloud Computing?"
- "El Futuro de las Telecomunicaciones tras la Pandemia"

### Proyectos Personales:
- "Mi Experiencia como Google Cloud Innovator"
- "Implementación de Microservicios con Kubernetes en Proyecto Académico"
- "Automatización de Testing con Python y Selenium"

---

## ⚠️ Consideraciones Importantes

### 1. Originalidad
- ✍️ Todo contenido debe ser original
- 📝 Citas deben tener referencia a fuente original
- 🔗 Enlaces externos deben ser funcionales y relevantes

### 2. Branding IEEE/ComSoc
- ✅ Usar colores oficiales (IEEE Blue #001746)
- ✅ Logos posicionados correctamente  
- ✍️ Mantener tono profesional y académico

### 3. Performance
- 🖼️ Imágenes optimizadas (WebP, <100KB)
- 📝 Contenido escaneable (listas, párrafos cortos)
- 🔗 Enlaces descriptivos (no "click aquí")

### 4. Accesibilidad
- ♿ Texto alternativo en todas las imágenes
- ⚪ Contraste adecuado de colores
- 🧭 Navegación semántica clara

---

*Documento para el blog integrado del sitio web personal - Septiembre 2026*
