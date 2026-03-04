---
name: seo-optimizer
description: Optimize websites and content for search engines while preserving existing functionality. Use this skill when the user needs SEO improvements, meta tag optimization, structured data implementation, performance enhancements, or technical SEO fixes. Covers on-page SEO, technical SEO, content optimization, Core Web Vitals, schema markup, and accessibility improvements without breaking existing code or functionality.
license: Complete terms in LICENSE.txt
---

This skill guides implementation of comprehensive SEO optimizations that improve search engine visibility while maintaining code integrity and existing functionality. Implement search-friendly enhancements with exceptional attention to technical correctness and backward compatibility.

The user provides SEO requirements: website optimization, meta tag improvements, structured data addition, performance fixes, or content enhancement. They may include existing code, site URLs, target keywords, or specific SEO issues to address.

## SEO Strategy Approach

Before implementing changes, understand the current state and optimization goals:
- **Current Assessment**: Analyze existing HTML structure, meta tags, page speed, mobile responsiveness, and indexability.
- **SEO Goals**: Identify target keywords, audience intent, competitive landscape, and ranking objectives.
- **Technical Constraints**: Review existing framework (React, Vue, static HTML), build system, and deployment environment.
- **Preservation Requirements**: Ensure all existing functionality remains intact. Never break JavaScript, CSS, or interactive features.
- **Compatibility**: Maintain cross-browser support and ensure changes work with existing dependencies.

Then implement optimizations that are:
- Effective with measurable SEO improvements
- Non-breaking with full preservation of existing functionality
- Standards-compliant following Google and W3C guidelines
- Performant with improvements to Core Web Vitals
- Maintainable with clear documentation of changes

## Technical SEO Implementation Guidelines

Focus on:
- **Meta Tags Optimization**: Implement unique, descriptive title tags (50-60 characters optimal). Create compelling meta descriptions (150-160 characters) that encourage clicks. Add canonical tags to prevent duplicate content issues. Include Open Graph tags for social media sharing (og:title, og:description, og:image, og:url). Add Twitter Card meta tags for enhanced Twitter previews. Implement viewport meta tag for mobile responsiveness. Add language and regional tags (hreflang) for international sites.
- **Structured Data (Schema.org)**: Implement JSON-LD format for easy maintenance and no HTML interference. Add Organization schema for business information. Include Article schema for blog posts with author, date, headline. Implement Product schema for e-commerce with price, availability, ratings. Add LocalBusiness schema for location-based businesses. Include BreadcrumbList schema for navigation hierarchy. Implement FAQ and HowTo schemas where applicable. Validate with Google Rich Results Test.
- **HTML Structure Optimization**: Use semantic HTML5 elements (header, nav, main, article, section, aside, footer). Implement proper heading hierarchy (single h1, logical h2-h6 progression). Add descriptive alt text to all images for accessibility and image SEO. Use descriptive anchor text for internal links. Ensure proper HTML nesting and validation. Implement skip navigation links for accessibility.
- **URL Structure**: Create clean, descriptive URLs with keywords. Use hyphens instead of underscores for word separation. Keep URLs short and readable. Implement proper URL canonicalization. Avoid unnecessary parameters and session IDs. Use lowercase letters consistently.
- **Internal Linking**: Create logical site hierarchy with clear navigation. Implement breadcrumb navigation for context. Add related content links within articles. Use descriptive anchor text that indicates destination content. Ensure important pages are within 3 clicks from homepage. Fix broken internal links.
- **Image Optimization**: Add width and height attributes to prevent layout shift. Implement lazy loading for below-fold images (loading="lazy"). Use modern formats (WebP, AVIF) with fallbacks. Compress images without quality loss. Add descriptive filenames with keywords. Implement responsive images with srcset. Include image sitemaps for better indexing.
- **Performance Optimization (Core Web Vitals)**: Minimize render-blocking resources by deferring non-critical CSS/JS. Implement critical CSS inline for above-fold content. Use async or defer attributes for JavaScript. Optimize Largest Contentful Paint (LCP) by optimizing images and server response. Improve First Input Delay (FID) by breaking up long tasks. Reduce Cumulative Layout Shift (CLS) by adding dimensions to media. Minimize JavaScript execution time. Implement resource hints (preconnect, dns-prefetch, preload).
- **Mobile Optimization**: Ensure responsive design with proper viewport configuration. Test touch targets are at least 48x48px. Avoid intrusive interstitials that block content. Implement mobile-friendly navigation. Test with Google Mobile-Friendly Test. Ensure text is readable without zooming (minimum 16px base font).
- **JavaScript SEO**: Implement server-side rendering (SSR) or static site generation (SSG) for critical content. Use dynamic rendering for bot traffic if needed. Ensure content is in initial HTML, not just loaded via JS. Implement proper loading states that don't show empty content to crawlers. Use history API for client-side routing with proper meta updates. Avoid infinite scroll without pagination fallback.
- **XML Sitemap**: Generate comprehensive XML sitemap with all important pages. Include last modified dates (lastmod). Set priority appropriately (homepage 1.0, main pages 0.8, etc.). Submit sitemap to Google Search Console and Bing Webmaster Tools. Update sitemap automatically when content changes. Include image and video sitemaps if applicable.
- **Robots.txt**: Configure proper crawl directives. Allow crawling of CSS and JavaScript files. Block admin areas and duplicate content paths. Specify sitemap location. Avoid blocking important pages accidentally. Test with robots.txt tester tools.
- **Page Speed Optimization**: Minimize and compress CSS, JavaScript, and HTML. Enable gzip or Brotli compression. Implement browser caching with proper cache headers. Use CDN for static assets. Optimize web fonts with font-display: swap. Remove unused CSS and JavaScript. Implement code splitting for large applications.
- **Content Optimization**: Use target keywords naturally in title, headings, and content. Implement LSI keywords and semantic variations. Create comprehensive content that answers user intent. Use short paragraphs and bullet points for readability. Add table of contents for long articles. Include multimedia (images, videos) to enhance engagement. Update old content regularly to maintain freshness.
- **Security SEO**: Implement HTTPS with valid SSL certificate. Use HSTS headers for security. Fix mixed content warnings. Ensure secure external links (check for broken or malicious links). Implement Content Security Policy (CSP) headers.

ALWAYS preserve existing functionality:
- Test all interactive elements after SEO changes
- Verify JavaScript functionality remains intact
- Ensure CSS styling is not disrupted
- Check form submissions and validations work
- Confirm API calls and data fetching operate correctly
- Validate event handlers and listeners function properly
- Test across multiple browsers and devices

Use proven SEO tools and validation:
- Google Search Console for indexing and performance monitoring
- Google PageSpeed Insights for Core Web Vitals analysis
- Lighthouse for comprehensive audits
- Schema Markup Validator for structured data testing
- Mobile-Friendly Test for mobile optimization
- Rich Results Test for enhanced search appearances
- Screaming Frog for technical SEO audits
- GTmetrix or WebPageTest for performance analysis

**IMPORTANT**: Match optimization intensity to site type. Simple static sites need basic meta tags and performance tweaks. Complex web applications need advanced solutions like dynamic rendering, state-based meta updates, and sophisticated caching strategies. Professional SEO combines technical excellence with user experience preservation.

**Non-Breaking Implementation**: Always implement changes incrementally and test thoroughly. Use feature detection before applying new attributes. Maintain backward compatibility with older browsers. Document all changes clearly. Create fallbacks for modern features. Never remove existing meta tags without replacement.

**Framework-Specific Considerations**:
- React: Use React Helmet or Next.js Head for dynamic meta tags. Implement getServerSideProps or getStaticProps for SSR/SSG. Use Next.js Image component for automatic optimization.
- Vue: Use vue-meta or Nuxt.js head function. Implement asyncData for server-side content. Use Nuxt generate for static site generation.
- Angular: Use Angular Universal for SSR. Implement Meta and Title services for dynamic tags. Use Angular's built-in image optimization.
- Static HTML: Direct meta tag implementation in head section. Use build tools for minification and optimization. Implement service workers for caching.

**Content Strategy**: Create valuable, original content that satisfies user intent. Research keywords with proper search volume and competition analysis. Target long-tail keywords for specific queries. Answer common questions comprehensively. Update content regularly to maintain relevance. Build topical authority with content clusters. Implement E-E-A-T principles (Experience, Expertise, Authoritativeness, Trustworthiness).

**Measurement and Monitoring**: Track organic traffic in Google Analytics. Monitor keyword rankings with position tracking tools. Measure Core Web Vitals in Search Console. Track click-through rates (CTR) from search results. Monitor indexing status and coverage issues. Analyze user engagement metrics (bounce rate, time on page). Set up conversion tracking for SEO goals.

Remember: Effective SEO optimization improves search visibility while enhancing user experience and maintaining code integrity. Every change should be tested, validated, and monitored. Good SEO is a continuous process of improvement, not a one-time fix.