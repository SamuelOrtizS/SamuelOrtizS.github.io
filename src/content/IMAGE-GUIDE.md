# Guía del Componente <Image />

## Uso Básico

```astro
import Image from './src/components/Image.astro';

<Image 
  src="/foto.jpg"
  alt="Descripción de la imagen"
/>
```

## Parámetros Disponibles

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `src` | string | ✅ Sí | Ruta de la imagen o URL externa |
| `alt` | string | ✅ Sí | Texto alternativo para accesibilidad (WCAG AA) |
| `width` | number | ❌ No | Ancho en píxeles (opcional, Astro lo infiere) |
| `height` | number | ❌ No | Alto en píxeles (opcional, Astro lo infiere) |
| `loading` | 'lazy'\|'eager' | ❌ No | Lazy loading automático si no se especifica |

## Optimización Automática

Astro optimiza automáticamente tus imágenes:

✅ **Formatos Modernos**: WebP y AVIF con fallback JPEG  
✅ **Redimensionado**: Imágenes responsivas según el tamaño de viewport  
✅ **Lazy Loading**: Pre-carga diferida para mejor performance (LCP < 2.5s)  
✅ **Compresión**: Reduce peso manteniendo calidad visual  

## Ejemplos

### Foto de Perfil (Optimizado)

```astro
<Image 
  src="/samuel-hero.webp"
  alt="Samuel Ortiz Sarasti en evento de IEEE ComSoc"
  width={800}
  height={600}
/>
```

### Banner Hero

```astro
<Image 
  src="/banner-hero.jpg"
  alt="Banner principal del sitio personal"
  width={1200}
  height={400}
/>
```

### Imagen de Artículos MDX

```astro
<Image 
  src="/articulo-titulo.webp"
  alt="Título del artículo técnico"
  width={600}
  height={400}
  loading="lazy"
/>
```

## Mejores Prácticas

### ✅ Recomendado:

1. **Alt text siempre significativo**: Describes el contenido, no "imagen.png"
2. **Tamaños correctos**: Define width/height para evitarCLS (Cumulative Layout Shift)
3. **Formato WebP**: Usa .webp o .avif cuando sea posible
4. **Dimensiones reales**: No usar imágenes más grandes de las necesarias

### ❌ Evitar:

- Imágenes sin `alt text` (violación WCAG 2.1 AA)
- Imágenes que rompen el layout (CLS > 0.1)
- Formatos antiguos sin optimización (.png sin compresión)

## Documentación Oficial

- [Astro Images - Guía oficial](https://docs.astro.build/en/guides/images/)
- [Optimizando imágenes para Web](https://web.dev/speed-image-optimize/)
- [Accesibilidad de Imágenes (WCAG)](https://www.w3.org/WAI/tutorials/images/)
