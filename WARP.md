# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is an **Astro portfolio website** based on the official Astro portfolio template. It features a modern, responsive design with light/dark theme support and is built using Astro's component-based architecture with TypeScript.

## Development Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |
| `npm run astro -- --help` | Get help with Astro CLI |

## Architecture

### Content System
- **Content Collections**: Uses Astro's content collection system defined in `src/content.config.ts`
- **Work Collection**: Portfolio pieces stored as Markdown files in `src/content/work/`
- **Schema**: Each work item has `title`, `description`, `publishDate`, `tags`, `img`, and optional `img_alt`
- **Dynamic Routes**: Individual project pages generated via `src/pages/work/[...slug].astro`

### Component Structure
- **Layout**: `BaseLayout.astro` provides the main page structure with nav, content slot, and footer
- **Navigation**: `Nav.astro` includes responsive menu, social links, and theme toggle
- **Reusable Components**: Hero, Grid, Pill, Icon, Skills, ContactCTA, and PortfolioPreview components
- **Icons**: Custom icon system via `IconPaths.ts` and `Icon.astro` component

### Styling System
- **CSS Custom Properties**: Comprehensive design tokens in `src/styles/global.css`
- **Theme Support**: Light/dark theme variables with automatic switching
- **Layout Utilities**: Stack layout system, gap utilities, and responsive classes
- **Design Tokens**: Color scales, typography scale, shadows, gradients, and transitions

### Key Pages
- **Home** (`index.astro`): Hero section, skills, featured work grid, mentions section
- **Work** (`work.astro`): Complete portfolio listing with filtering
- **About** (`about.astro`): Personal/professional information
- **404** (`404.astro`): Custom error page

## Content Management

### Adding New Work
1. Create new `.md` file in `src/content/work/`
2. Use required frontmatter schema:
```yaml
---
title: Project Name
publishDate: 2023-12-01 00:00:00
img: /assets/project-image.jpg
img_alt: Alt text description
description: Project description
tags:
  - Tag1
  - Tag2
---
```
3. Add project content in Markdown below frontmatter

### Assets
- Store images in `public/assets/` directory
- Reference with absolute paths: `/assets/image.jpg`
- Background images organized in `public/assets/backgrounds/`

## Development Patterns

### Component Props
- Use TypeScript interfaces for component props
- Astro components support both `---` script sections and component markup
- Props destructured from `Astro.props`

### Styling
- Scoped styles using `<style>` tags in `.astro` components
- Global styles in `src/styles/global.css`
- CSS custom properties for consistent theming
- Mobile-first responsive design with `@media (min-width: 50em)` breakpoint

### Content Fetching
- Use `getCollection('work')` to fetch all work items
- Sort by `publishDate` for chronological ordering
- Render content with `render(entry)` for dynamic pages

## Theme System
- Automatic light/dark theme detection
- Theme toggle component in navigation
- CSS custom properties automatically switch based on `.theme-dark` class
- Lazy-loaded background images for performance

## Performance Optimizations
- Background images loaded only after page load (`.loaded` class)
- Responsive images with multiple sizes for different viewports
- Minimal JavaScript for progressive enhancement (menu toggle, theme switcher)

## File Conventions
- Components: PascalCase (e.g., `Hero.astro`, `ContactCTA.astro`)
- Pages: lowercase with hyphens for multi-word (standard web conventions)
- Content: kebab-case markdown files in collection directories
- Assets: descriptive names in logical subdirectories