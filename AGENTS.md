# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Project Overview

This is a modern, minimalist portfolio template built with Astro and Tailwind CSS. It's designed to be easily customizable through a single configuration file while maintaining a clean, professional appearance with full dark mode support.

## Tech Stack

- **Astro**: Static site generator
- **Tailwind CSS v3.4.0**: Utility-first CSS framework using the official @astrojs/tailwind integration
- **TypeScript**: For type-safe configuration
- **Tabler Icons**: Icon library for consistent iconography
- **Dark Mode**: Full theme switching support with localStorage persistence

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Architecture

The project follows a component-based architecture with all customization centralized in `src/config.ts`:

- **Components** (`src/components/`): Individual Astro components for each section (Hero, About, Projects, Experience, Education, Header, Footer, ThemeToggle, MobileThemeToggle)
- **Main Layout** (`src/pages/index.astro`): Single-page layout that imports all components with theme initialization
- **Configuration** (`src/config.ts`): Single source of truth for all content and customization
- **Styling** (`src/styles/global.css`): Global CSS with Tailwind imports and theme transitions

### Key Architectural Decisions

1. **Single Configuration File**: All content is managed through `src/config.ts` to make customization simple
2. **Conditional Rendering**: Sections automatically hide if their data is removed from the config
3. **Component Independence**: Each section is a self-contained component that reads from the config
4. **Accent Color System**: Single `accentColor` in config propagates throughout the site via CSS custom properties
5. **Theme System**: Class-based dark mode with JavaScript toggle and localStorage persistence

## Dark Mode Implementation

The project includes a comprehensive dark mode system:

### Theme Toggle Components
- **ThemeToggle.astro**: Reusable toggle button with sun/moon icons
- **MobileThemeToggle.astro**: Mobile-specific positioning wrapper
- **Dual visibility**: Desktop toggle in header, mobile toggle in top-right corner

### Theme Persistence
- **localStorage**: Saves user preference across sessions
- **System detection**: Automatically detects OS dark/light preference
- **FOUC prevention**: Inline script prevents flash of unstyled content

### Styling Strategy
- **Tailwind classes**: Uses `dark:` prefix for dark mode variants
- **Transitions**: Smooth CSS transitions on all theme-aware elements
- **Component coverage**: All components support both light and dark themes

## Important Implementation Details

- The site uses Tailwind CSS v3.4.0 with the official Astro integration (`@astrojs/tailwind`)
- Dark mode uses `darkMode: 'class'` configuration in `tailwind.config.mjs`
- No linting or testing framework is currently configured
- All components are in `.astro` format (not React/Vue/etc)
- The project uses IBM Plex Mono font loaded from Google Fonts
- Social links in the config are all optional and will conditionally render
- Theme state is managed via `document.documentElement.classList` manipulation

## Working with Components

When modifying components:
1. Components read directly from the imported `siteConfig` object
2. Use Tailwind utility classes for styling with dark mode variants (`dark:`)
3. Maintain the existing monospace font aesthetic
4. Use Tabler Icons for consistency with existing icons
5. Ensure all new components support both light and dark themes
6. Add smooth transitions for theme-aware properties

## Configuration Structure

The `src/config.ts` exports a `siteConfig` object with these sections:
- **Basic info**: name, title, description, accentColor
- **Social links**: email, linkedin, twitter, github (all optional)
- **aboutMe**: string
- **skills**: string[]
- **projects**: array of {name, description, link, skills}
- **experience**: array of {company, title, dateRange, bullets}
- **education**: array of {school, degree, dateRange, achievements}

## Theme System Files

Key files for the theme system:
- `tailwind.config.mjs`: Tailwind configuration with `darkMode: 'class'`
- `src/styles/global.css`: Global styles with Tailwind imports and transitions
- `src/components/ThemeToggle.astro`: Main theme toggle component
- `src/components/MobileThemeToggle.astro`: Mobile wrapper for theme toggle
- `src/pages/index.astro`: Contains theme initialization script

## Development Notes

- The project uses stable Tailwind CSS v3 for reliable dark mode support
- Theme toggle uses class-based selectors to handle multiple instances
- Console logging is included in theme toggle for debugging
- All color transitions use CSS transitions for smooth user experience
- Background gradients are simplified in dark mode to avoid visual inconsistencies