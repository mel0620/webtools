---
name: frontend-developer
description: Build modern, professional frontend applications with deep expertise in JavaScript, HTML, CSS, Tailwind CSS, and Vite. Use this skill when the user needs production-ready web development, component architecture, build tooling setup, performance optimization, or professional UI/UX implementation. Covers modern best practices, accessibility standards, and responsive design patterns.
license: Complete terms in LICENSE.txt
---

This skill guides creation of professional, production-ready frontend applications using modern web technologies. Implement real working code with exceptional attention to technical excellence, performance, and user experience.

The user provides frontend development requirements: an application, component system, build configuration, or interface implementation. They may include technical specifications, framework preferences, or performance requirements.

## Development Approach

Before coding, understand the technical context and establish a clear implementation strategy:
- **Requirements**: What functionality must this application provide? What are the core user interactions?
- **Architecture**: Component structure, state management, data flow patterns, and module organization.
- **Technology Stack**: Framework choice (vanilla JS, React, Vue, Svelte), build tools (Vite, Webpack), and styling approach (Tailwind, CSS Modules, Styled Components).
- **Performance**: Bundle size targets, load time requirements, runtime optimization strategies.
- **Standards**: Accessibility (WCAG 2.1), browser compatibility, responsive breakpoints, SEO considerations.

Then implement working code that is:
- Production-ready with proper error handling
- Performant and optimized for real-world usage
- Accessible and follows semantic HTML practices
- Well-structured with clear separation of concerns
- Thoroughly documented with inline comments where needed

## Technical Implementation Guidelines

Focus on:
- **Modern JavaScript**: Use ES6+ features, async/await patterns, destructuring, optional chaining, and nullish coalescing. Leverage modern APIs like Fetch, Intersection Observer, and ResizeObserver. Write clean, maintainable code with consistent formatting.
- **HTML Structure**: Use semantic HTML5 elements (header, nav, main, article, section, aside, footer). Implement proper heading hierarchy (h1-h6). Include ARIA labels and roles where necessary. Ensure keyboard navigation support.
- **CSS Architecture**: Use CSS custom properties for theming and consistency. Implement responsive design with mobile-first approach. Use modern layout techniques (Flexbox, Grid). Apply BEM or utility-first methodology consistently.
- **Tailwind CSS**: Leverage utility classes for rapid development. Use @apply for component extraction when needed. Configure custom theme in tailwind.config.js for brand consistency. Implement responsive variants (sm:, md:, lg:, xl:, 2xl:) appropriately.
- **Vite Configuration**: Set up optimized build configuration with proper chunking strategies. Configure environment variables and mode-specific settings. Implement plugin ecosystem (Vue, React, Svelte plugins). Set up path aliases for clean imports.
- **Component Architecture**: Create reusable, composable components with clear props interfaces. Implement proper component lifecycle management. Use composition patterns over inheritance. Ensure components are testable and maintainable.
- **State Management**: Choose appropriate state solutions (Context API, Zustand, Pinia, Vuex) based on complexity. Implement predictable state updates with clear data flow. Handle loading, error, and success states consistently.
- **Performance Optimization**: Implement code splitting and lazy loading for routes and components. Optimize images with proper formats (WebP, AVIF) and lazy loading. Minimize bundle size through tree shaking and dead code elimination. Use memoization and virtualization for large lists.
- **Accessibility**: Ensure proper focus management and keyboard navigation. Implement ARIA attributes correctly (aria-label, aria-describedby, aria-live). Provide sufficient color contrast (WCAG AA minimum). Test with screen readers.
- **Build & Deployment**: Configure production builds with minification and compression. Set up environment-specific configurations. Implement proper asset handling and caching strategies. Generate source maps for debugging.

ALWAYS reference official documentation patterns:
- JavaScript: MDN Web Docs standards and modern ECMAScript features
- HTML: W3C specifications and semantic markup guidelines
- CSS: Modern CSS specifications including custom properties, container queries, and cascade layers
- Tailwind CSS: Official utility-first patterns and configuration best practices
- Vite: Official plugin API, build optimization, and configuration patterns

Implement robust error handling with try-catch blocks and proper error boundaries. Use TypeScript types or JSDoc comments for better code documentation. Follow consistent code style with Prettier and ESLint configurations.

**IMPORTANT**: Match technical complexity to project requirements. Simple landing pages need clean HTML/CSS with minimal JavaScript. Complex applications need proper architecture with state management, routing, and build optimization. Professional quality comes from appropriate technical decisions, not over-engineering.

Remember: Professional frontend development combines technical excellence with user-centered design. Write code that is maintainable, performant, accessible, and delivers exceptional user experiences across all devices and browsers.