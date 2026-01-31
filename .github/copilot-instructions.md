# DUDC Website PoC - AI Agent Instructions

## Project Overview
Single-page website for Down Under Divers Club (DUDC), a diving club in North Carolina. This is a proof-of-concept site with minimal dependencies—just HTML with embedded CSS.

## Architecture & Key Components

### Structure
- **Single file design**: `index.html` contains all markup and styling
- **CSS variables**: Root CSS variables define the design system (`--primary`, `--accent`, `--text`, `--light`, `--white`)
- **No JavaScript**: Static HTML with CSS-only interactivity (hover states, transitions)
- **Responsive**: Mobile-first media queries for tablets and smaller screens (768px breakpoint)

### Key Sections (anchor-linked)
1. **Header/Navigation** - Sticky header with logo and nav links
2. **Hero** - Background image with overlay, call-to-action
3. **About** (`#about`) - Club mission and upcoming events sidebar
4. **Membership** (`#membership`) - 3-tier pricing cards (Single $50, Couple $80, Family $100)
5. **Footer** - Contact info and social links

## Design System
- **Primary color**: `#006994` (deep ocean blue) - used for headings, CTAs, links
- **Accent color**: `#f4a261` (sandy orange) - unused in current design but reserved
- **Text color**: `#333`
- **Light background**: `#f4f4f4` (used for membership section)
- **Card styling**: 10px radius, shadow `0 5px 15px rgba(0,0,0,0.1)`, hover lift effect

## Development Patterns

### CSS Organization
- **Reset/Variables** - CSS custom properties at `:root`
- **Component-based classes** - Each section has distinct classes (`.hero`, `.card`, `.navbar`, etc.)
- **Responsive breakpoint** - Single 768px media query for tablet/mobile adjustments
- **Inline style overrides** - Limited use of inline styles for one-off tweaks (acceptable in this PoC)

### Content Updates
- Membership pricing and benefits are hardcoded in `.card` elements—no data structure
- Event dates are in a simple `<ul>` with no event management system
- Links are placeholders (`href="#"`) except for anchor navigation and mailto
- Hero background image sourced from Unsplash (external dependency)

## Common Tasks

### Update Membership Pricing
Edit the `.card` elements in the `#membership` section. Change the `.price` value and `.features` list items. Update the "Join Single/Couple/Family" button text if needed.

### Change Color Scheme
Modify `:root` CSS variables (`--primary`, `--accent`, etc.). No other files reference these—changes ripple across the entire design.

### Add New Event
Edit the `<ul>` in the About section's right column. Follow the existing date format: `<strong>MMM DD:</strong> Event Name`.

### Adjust Responsive Layout
The `.grid-2` class uses CSS Grid with `grid-template-columns: 1fr 1fr`. Modify the 768px media query to adjust mobile behavior.

## Conventions to Follow
- Use CSS custom properties for any new colors (define at `:root`)
- Maintain the spacing pattern: sections use `padding: 60px 0`, cards use `padding: 30px`
- Keep hover states consistent (0.3s transition, color or transform change)
- Use `.container` class for max-width constrained content (1100px)
- Preserve inline SVG/emoji checkmarks (`✓`) in feature lists for accessibility

## Known Limitations
- No build process or bundling
- No testing framework
- External dependency on Unsplash for hero image (could fail if URL changes)
- Mobile navigation not implemented (menu doesn't collapse on small screens)
- No form handling for "Join" buttons
- No backend for event management or membership signup
