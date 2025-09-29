# Design Guidelines: Gabriel Cordeiro - Interactive Glass Resume

## Design Approach
**Reference-Based Approach** - Taking inspiration from modern developer portfolios and professional platforms like LinkedIn and Notion, enhanced with the unique glass morphism effects provided. This approach balances professional credibility with creative technical showcase.

## Core Design Principles
- **Technical Artistry**: Showcase Gabriel's development skills through the interactive glass effects while maintaining professional credibility
- **Hierarchical Clarity**: Information flows logically from personal branding to technical achievements  
- **Interactive Elegance**: Glass elements enhance rather than distract from content readability
- **Mobile-First Professional**: Responsive design that works on all devices recruiters might use

## Color Palette
**Primary Colors:**
- Deep Navy: 220 25% 15% (primary background)
- Soft White: 0 0% 95% (primary text)
- Accent Blue: 210 50% 60% (links and highlights)

**Glass Effect Colors:**
- Glass Base: rgba(255, 255, 255, 0.4) with chromatic aberration
- Subtle highlights and depth using the provided displacement mapping

## Typography
- **Primary Font**: Inter or Poppins from Google Fonts
- **Headings**: 600 weight, larger scale for section titles
- **Body**: 400 weight, optimized for readability over glass backgrounds
- **Code/Skills**: Monospace font (JetBrains Mono) for technical elements

## Layout System
**Tailwind Spacing**: Use units of 4, 8, 16, and 24 for consistent spacing (p-4, m-8, gap-16, etc.)
- Single-column layout on mobile, expanding to asymmetrical grid on desktop
- Glass elements positioned strategically to create depth without obscuring text
- Generous whitespace between sections for breathing room

## Component Library

### Core Components
- **Glass Elements**: Interactive displacement-mapped components from provided code
- **Section Cards**: Semi-transparent containers with subtle glass backing
- **Skill Tags**: Pill-shaped elements with glass morphism treatment
- **Navigation**: Fixed header with glass background blur
- **Contact Links**: Prominent buttons with glass styling

### Interactive Elements
- **Hover States**: Glass elements respond with depth changes and chromatic aberration shifts
- **Click Feedback**: Displacement depth reduction on interaction as implemented in provided code
- **Scroll Reveals**: Sections fade in as user scrolls, glass elements animate into position

### Content Sections
1. **Hero Section**: Name, title, and key contact with primary glass element
2. **Professional Summary**: Brief overview with background glass effects
3. **Experience Timeline**: Interactive cards with glass morphism
4. **Skills Matrix**: Tag-based display with glass pill components
5. **Education & Certifications**: Academic and professional achievements
6. **Publications**: Academic papers with external link styling
7. **Contact Footer**: Social links and contact information

## Glass Effect Implementation
- **Primary Glass Elements**: 3-5 large interactive components using provided displacement mapping
- **Secondary Effects**: Subtle glass backing on content cards
- **Debug Mode**: Hidden toggle for development/demonstration purposes
- **Chromatic Aberration**: Sparingly used for accent elements, higher values for hero impacts

## Responsive Behavior
- **Mobile**: Stack sections vertically, reduce glass element complexity
- **Tablet**: Two-column layout for skills/experience, maintain glass effects
- **Desktop**: Full asymmetrical layout with floating glass elements

## Accessibility Considerations
- Ensure text maintains sufficient contrast over glass backgrounds
- Provide reduced motion alternatives for users with vestibular disorders
- Keyboard navigation support for all interactive glass elements
- Screen reader compatibility with proper semantic structure

## Images
No large hero images required. The glass morphism effects themselves serve as the primary visual interest. Small professional headshot can be integrated into the hero section with glass overlay treatment.

## Performance Considerations
- Optimize SVG displacement maps for faster loading
- Use CSS transforms for glass animations rather than changing filter properties
- Implement intersection observer for scroll-triggered glass animations
- Consider fallback styles for browsers that don't support backdrop-filter