---
name: browser-tools-builder
description: Build free, privacy-first browser-based tools for developers and content creators. Use this skill when the user needs client-side web applications like image compressors, file converters, code formatters, text processors, calculators, generators, or any utility tool that runs entirely in the browser without server dependencies. Covers offline functionality, file processing, data privacy, and professional tool UI/UX.
license: Complete terms in LICENSE.txt
---

This skill guides creation of professional, privacy-focused browser-based tools that run entirely client-side. Implement real working applications with exceptional attention to usability, performance, and data privacy.

The user provides tool requirements: a utility, converter, processor, generator, or developer tool to build. They may include functionality specifications, file format support, or processing requirements.

## Tool Design Approach

Before coding, understand the tool's purpose and establish clear implementation strategy:
- **Core Functionality**: What specific problem does this tool solve? What are the input/output requirements?
- **User Workflow**: How do users interact with the tool? What is the optimal flow from input to output?
- **Processing Logic**: What client-side APIs and libraries are needed (Canvas API, File API, Web Workers, etc.)?
- **Privacy & Security**: How to ensure all processing happens locally without data transmission?
- **Output Options**: Download formats, clipboard copy, batch processing, compression options.
- **Performance**: Handle large files efficiently, provide progress feedback, prevent browser freezing.

Then implement working code that is:
- Fully client-side with no server dependencies
- Privacy-respecting with all processing in-browser
- Fast and responsive with proper async handling
- Professional with clear UI/UX and helpful feedback
- Accessible and works across modern browsers
- Avoid using em dashes and emojies in the UI for a clean, professional look

## Technical Implementation Guidelines

Focus on:
- **Client-Side Architecture**: Use vanilla JavaScript or minimal frameworks for fast loading. Implement all processing logic in the browser using Web APIs. Avoid external API calls for core functionality. Use Web Workers for heavy processing to prevent UI blocking.
- **File Handling**: Use File API and FileReader for file uploads. Support drag-and-drop functionality for better UX. Handle multiple file selection and batch processing. Provide clear file type validation and error messages.
- **Canvas Processing**: Use HTML5 Canvas for image manipulation (resize, compress, filter, format conversion). Implement proper scaling algorithms for quality optimization. Support multiple output formats (JPEG, PNG, WebP, AVIF). Provide quality and dimension controls with live previews.
- **Data Processing**: Use native JavaScript for text processing, parsing, and formatting. Implement client-side libraries for specific formats (Papa Parse for CSV, SheetJS for Excel, JSZip for archives). Ensure proper encoding handling (UTF-8, Base64, etc.).
- **Download Functionality**: Create blob URLs for file downloads. Implement proper cleanup of object URLs to prevent memory leaks. Support batch downloads with ZIP compression using JSZip. Provide clear download naming conventions.
- **Progress & Feedback**: Show loading states and progress bars for long operations. Display clear success/error messages with helpful context. Provide real-time statistics (file sizes, compression ratios, processing time). Enable cancel operations for long-running tasks.
- **Settings & Controls**: Implement intuitive control panels with range sliders, number inputs, and toggles. Use localStorage to remember user preferences across sessions. Provide preset configurations for common use cases. Include reset to defaults option.
- **UI/UX Patterns**: Create clear upload areas with visual feedback (hover states, drag indicators). Display file previews where applicable (images, text content). Show before/after comparisons for transformations. Use color-coded status indicators (pending, processing, complete, error). Implement keyboard shortcuts for power users.
- **Error Handling**: Validate file types and sizes before processing. Provide specific error messages (not generic failures). Handle edge cases gracefully (corrupted files, unsupported formats). Implement try-catch blocks around file operations and canvas rendering.
- **Performance Optimization**: Process files asynchronously to maintain UI responsiveness. Use requestAnimationFrame for smooth animations. Implement virtual scrolling for large file lists. Compress output efficiently without quality loss. Clean up memory after processing (revoke blob URLs, clear canvas).
- **Browser Compatibility**: Use feature detection for advanced APIs. Provide fallbacks for older browsers where possible. Test across Chrome, Firefox, Safari, and Edge. Handle mobile browsers with touch-friendly controls.

ALWAYS implement these essential features for browser tools:
- Clear visual hierarchy with prominent upload/input area
- Settings panel with intuitive controls and live preview of values
- Real-time statistics showing original vs processed metrics
- Batch processing capabilities with progress tracking
- Individual and bulk download options
- Remove/clear functionality for managing uploads
- Empty states with helpful instructions
- Responsive design that works on mobile and desktop
- Dark/light theme appropriate for developer tools
- Professional styling with consistent color scheme

Use proven client-side libraries:
- JSZip for creating ZIP archives
- Papa Parse for CSV parsing and generation
- SheetJS for Excel file processing
- Marked or Showdown for Markdown rendering
- Prism or Highlight.js for code syntax highlighting
- Font Awesome for consistent iconography
- Tailwind CSS for rapid, professional styling

**IMPORTANT**: Match complexity to tool purpose. Simple converters need clean input/output flow. Complex processors need organized settings, batch operations, and detailed feedback. Professional quality comes from attention to UX details like progress indicators, clear error messages, and helpful empty states.

**Privacy First**: Always emphasize that processing happens entirely in the browser. Never send user data to external servers. Include privacy messaging in the UI. Use "no upload" or "100% client-side" badges where appropriate.

**Examples of Browser Tools**: Image compressor/resizer, PDF merger/splitter, JSON formatter/validator, Base64 encoder/decoder, Color picker/converter, QR code generator, Markdown editor/preview, CSV to JSON converter, Code beautifier/minifier, Hash generator, Text diff checker, SVG optimizer, Font subsetter, Favicon generator, Screenshot editor.

Remember: Browser-based tools prioritize privacy, speed, and accessibility. Users choose these tools because their data never leaves their device. Build with that trust in mind, ensuring every feature works offline and respects user privacy completely.