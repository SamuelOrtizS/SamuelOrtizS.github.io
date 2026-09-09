---
name: Quantum Astro & Portfolio
description: Terminal-inspired, high-performance static portfolio and engineering blog for Samuel Ortiz Sarasti.
colors:
  primary: "#00AEEF"
  primary-light: "#00AEEF"
  primary-dark: "#005F98"
  base-950: "oklch(14.5% 0 0)"
  base-900: "oklch(20.5% 0 0)"
  base-800: "oklch(26.9% 0 0)"
  base-700: "oklch(37.1% 0 0)"
  base-300: "oklch(87% 0 0)"
  base-100: "oklch(97% 0 0)"
typography:
  body:
    fontFamily: "JetBrains Mono Variable, monospace"
    fontSize: "0.875rem"
    lineHeight: "1.6"
  display:
    fontFamily: "JetBrains Mono Variable, monospace"
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 500
    lineHeight: "1.2"
rounded:
  none: "0px"
  sm: "2px"
spacing:
  container: "68rem"
components:
  button-primary:
    backgroundColor: "{colors.base-900}"
    textColor: "{colors.base-100}"
    rounded: "{rounded.none}"
    padding: "0.5rem 1.25rem"
  button-outline:
    backgroundColor: "{colors.base-900}"
    textColor: "{colors.base-200}"
    rounded: "{rounded.none}"
    padding: "0.5rem 1.25rem"
---

# Design System: Quantum Astro

## Overview

**Creative North Star: "The Terminal Console"**

Quantum Astro is a dark-mode, terminal-inspired design system tailored for electrical engineering, telecommunications, and software projects. Built on top of Tailwind CSS v4 and JetBrains Mono Variable, it balances strict dark monochrome aesthetics (`oklch(14.5% 0 0)`) with IEEE Electric Cyan/Blue primary accents (`#00AEEF` and `#005F98`).

The design avoids rounded organic soft shapes in favor of sharp 0px/2px borders, glowing terminal cards, offset box shadows, and smooth View Transitions.

**Key Characteristics:**
- Dark-mode first with IEEE Cyan (`#00AEEF`) primary accent.
- Monospaced typography hierarchy via JetBrains Mono.
- Sharp rectangular forms (0px radius) with crisp 1px borders.
- Subdued section reveal animations and interactive terminal elements.

## Colors

The palette relies on a high-contrast neutral spectrum from pure dark background (`base-950`) to bright terminal text (`base-100`), punctuated by IEEE Cyan (`#00AEEF`) and IEEE Deep Blue (`#005F98`).

### Primary
- **IEEE Cyan** (#00AEEF): Primary interactive accent, status indicator glow, and active nav highlights.
- **IEEE Deep Blue** (#005F98): Secondary interactive accent, active hover shadow depth, and borders.

### Neutral
- **Base 950** (oklch(14.5% 0 0)): Primary background for pages, header backdrop, and terminal cards.
- **Base 900** (oklch(20.5% 0 0)): Card inner surfaces and container backgrounds.
- **Base 800** (oklch(26.9% 0 0)): Primary subtle borders and dividers.
- **Base 700** (oklch(37.1% 0 0)): Hover state borders and active outlines.
- **Base 300** (oklch(87% 0 0)): Body text and description color.
- **Base 100** (oklch(97% 0 0)): Headings and primary brand text.

### Named Rules
**The Electric Blue Accent Rule.** IEEE Cyan (`#00AEEF`) is reserved for focal interactive elements, status indicators, and hover states. It occupies ≤10% of any viewport.

## Typography

**Display & Body Font:** JetBrains Mono Variable (monospaced).

### Hierarchy
- **Display** (500, clamp(2rem, 5vw, 3rem), 1.2): Main page headers and hero greeting.
- **Headline** (500, 1.5rem–2rem, 1.3): Section titles and article headings.
- **Body** (400, 0.875rem, 1.6): Paragraph text, project descriptions, and bio text.
- **Label** (400, 0.75rem, 0.05em, uppercase): Monospace code tags, section subtitles, and status badges.

## Layout

Fixed-width responsive container (`max-w-68rem`) with horizontal padding (`1.25rem` mobile, `2rem` desktop). Built with CSS Grid and Flexbox with tight grid gaps (`1rem`–`2rem`).

## Elevation & Depth

No soft ambient drop shadows. Depth is created through flat tonal layering (cards set to `base-950` over `base-900`) and offset sharp block shadows (`translate(4px, 4px)` in primary buttons).

### Named Rules
**The Flat-By-Default Rule.** All containers are flat at rest. Depth is expressed via crisp 1px borders (`border-base-800`) and 1px cyan glow on hover (`box-shadow: 0 0 0 1px ...`).

## Shapes

Sharp, precise terminal geometry. All primary containers, buttons, input fields, and badges use `border-radius: 0px` or `2px` maximum.

## Components

### Buttons
- **Shape:** 0px radius (rectangular).
- **Primary:** Solid dark background (`base-900`) with cyan border (`#00AEEF`) and offset deep blue shadow pseudo-element (`#005F98` `after:translate(4px, 4px)`).
- **Outline:** 1px border (`base-700`) with hover shift to cyan border and `base-800` background.

### Cards / Containers
- **Corner Style:** 0px radius.
- **Background:** `base-950` with 1px border `base-800`.
- **Hover:** Border color shifts to `#00AEEF/70` with subtle 1px glow.

### Language Toggle
- **Style:** Compact `ES | EN` inline button group enclosed in `base-950` background with `base-800` border. Active state highlighted with `#00AEEF` tint.

## Do's and Don'ts

### Do:
- **Do** maintain a strict 0px border-radius aesthetic across all main cards and buttons.
- **Do** use `data-i18n` attributes for all user-facing interface text strings.
- **Do** use IEEE Cyan `#00AEEF` for primary accents and `#005F98` for secondary button offset shadows.

### Don't:
- **Don't** use soft rounded corners (`rounded-2xl` or `rounded-full` on cards/buttons).
- **Don't** use default browser serif or sans-serif fonts; stick to `JetBrains Mono`.
- **Don't** use heavy drop shadows or bright background colors.
