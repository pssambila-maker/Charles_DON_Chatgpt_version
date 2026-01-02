# NextGen DON Academy - Design System

Complete design specifications for replicating the visual style in new projects.

---

## Color Palette

### Primary Brand Colors

```css
Primary Blue (Brand)
--primary: #0085FF
RGB: (0, 133, 255)
Use: Primary buttons, links, accents

Primary Blue Dark
--primary-dark: #0177E3
RGB: (1, 119, 227)
Use: Hover states for primary elements

Primary Glow
--primary-glow: rgba(0, 133, 255, 0.5)
Use: Box shadows, glows on buttons
```

### Secondary Colors

```css
Magenta (Navbar/Footer)
--bg-magenta: #c026d3
RGB: (192, 38, 211)
Tailwind: fuchsia-600
Use: Navigation bar, footer background

Sky Blue (Hero)
--bg-hero: #0ea5e9
RGB: (14, 165, 233)
Tailwind: sky-500
Use: Hero sections, call-to-action backgrounds

Deep Navy (Sections)
--bg-dark-section: #0f172a
RGB: (15, 23, 42)
Tailwind: slate-900
Use: Dark section backgrounds

Secondary Dark
--secondary: #0f172a
RGB: (15, 23, 42)
Use: Alternative dark backgrounds
```

### Accent Colors

```css
Amber (CTA Buttons)
--accent: #f59e0b
RGB: (245, 158, 11)
Tailwind: amber-500
Use: "Enroll Now" buttons, important CTAs

Blue Accent
#1d4ed8
RGB: (29, 78, 216)
Tailwind: blue-700
Use: Headings on light backgrounds
```

### Background Colors

```css
Darkest Background
--bg-dark: #020617
RGB: (2, 6, 23)
Tailwind: slate-950
Use: Page background, deepest sections

Card Background
--bg-card: #0f172a
RGB: (15, 23, 42)
Tailwind: slate-900
Use: Card components, content blocks

Card Hover
--bg-card-hover: #1e293b
RGB: (30, 41, 59)
Tailwind: slate-800
Use: Hover states for cards

Light Background
#f8fafc
RGB: (248, 250, 252)
Tailwind: slate-50
Use: Light sections, alternating backgrounds

Medium Background
#111827
RGB: (17, 24, 39)
Tailwind: gray-900
Use: Content sections, alternating dark areas
```

### Text Colors

```css
Main Text (Light)
--text-main: #f8fafc
RGB: (248, 250, 252)
Tailwind: slate-50
Use: Primary text on dark backgrounds

Muted Text
--text-muted: #94a3b8
RGB: (148, 163, 184)
Tailwind: slate-400
Use: Secondary text, descriptions

Dim Text
--text-dim: #64748b
RGB: (100, 116, 139)
Tailwind: slate-500
Use: Footer text, less important info

Light Text (Various)
#e5e7eb - slate-200 (slightly dimmer)
#cbd5e1 - slate-300 (medium light)
#f8fafc - slate-50 (brightest)

Dark Text
#111827 - gray-900 (on light backgrounds)
#0f172a - slate-900 (deepest)
```

### Status Colors

```css
Success Green
#10b981
RGB: (16, 185, 129)
Tailwind: emerald-500
Use: Success messages, confirmations

Error Red
#ef4444
RGB: (239, 68, 68)
Tailwind: red-500
Use: Error messages, validation

Warning
#f59e0b
RGB: (245, 158, 11)
Tailwind: amber-500
Use: Warning states
```

### Border Colors

```css
Light Border
rgba(255, 255, 255, 0.05)
Use: Subtle borders on dark backgrounds

Medium Border
rgba(255, 255, 255, 0.1)
Use: Standard card borders

Visible Border
#334155
RGB: (51, 65, 85)
Tailwind: slate-700
Use: Form inputs, visible dividers
```

### Gradients

```css
Primary Gradient
--gradient-primary: linear-gradient(135deg, #0085FF 0%, #3b82f6 100%)
Use: Backgrounds, headers

Text Gradient
--gradient-text: linear-gradient(to right, #fff 20%, #cbd5e1 100%)
Use: Gradient text effects

Purple Gradient (Nav/Footer)
linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)
Use: Email templates, special sections
```

---

## Typography

### Font Families

```css
/* Import from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700;800&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');

Body Font
--font-main: 'IBM Plex Sans', sans-serif
Weights: 300, 400, 500, 600, 700
Use: All body text, paragraphs, UI elements

Heading Font
--font-heading: 'EB Garamond', serif
Weights: 400, 500, 600, 700, 800
Use: All headings (h1-h6), hero titles
```

### Font Sizes

```css
/* Desktop Sizes */
H1: 3.5rem (56px)
  - Line height: 1.2
  - Letter spacing: -0.01em
  - Font weight: 700
  - Use: Page titles, hero headings

H2: 2.5rem (40px)
  - Line height: 1.2
  - Font weight: 700
  - Use: Section headings

H3: 1.75rem (28px)
  - Line height: 1.3
  - Font weight: 700
  - Use: Subsection headings

H4: 1.5rem (24px)
  - Font weight: 600
  - Use: Card titles, small headings

Body Large: 1.3rem (20.8px)
  - Line height: 1.6
  - Font weight: 500
  - Use: Hero descriptions, important text

Body: 1.15-1.25rem (18.4-20px)
  - Line height: 1.7-1.8
  - Font weight: 500-600
  - Use: Standard paragraphs, descriptions

Body Small: 1rem (16px)
  - Line height: 1.6
  - Font weight: 400-500
  - Use: Secondary text

Small: 0.95rem (15.2px)
  - Use: Captions, footnotes

Tiny: 0.9rem (14.4px)
  - Use: Labels, nav items

/* Mobile Sizes */
H1 Mobile: 2.5rem (40px)
H2 Mobile: 2rem (32px)
```

### Font Weights

```css
Light: 300 (IBM Plex Sans only)
Regular: 400
Medium: 500
Semi-Bold: 600
Bold: 700
Extra-Bold: 800 (EB Garamond only)
```

### Text Styles

```css
Uppercase Navigation
text-transform: uppercase
letter-spacing: 0.5px
font-weight: 600

Headings
letter-spacing: -0.01em
line-height: 1.1-1.2
font-weight: 700
```

---

## Spacing System

### Base Unit: 4px

```css
/* Spacing Scale */
xs:   4px   (0.25rem)
sm:   8px   (0.5rem)
md:   12px  (0.75rem)
base: 16px  (1rem)
lg:   20px  (1.25rem)
xl:   24px  (1.5rem)
2xl:  32px  (2rem)
3xl:  40px  (2.5rem)
4xl:  48px  (3rem)
5xl:  64px  (4rem)
6xl:  80px  (5rem)
```

### Section Padding

```css
Section Vertical Padding
Standard: 80px (5rem)
Large: 90-100px (5.625-6.25rem)
Small: 70px (4.375rem)

Container Horizontal Padding
Standard: 24px (1.5rem)
Mobile: 16px (1rem)
```

### Component Spacing

```css
/* Card Padding */
Standard: 32px (2rem)
Compact: 20px (1.25rem)
Large: 40px (2.5rem)

/* Grid Gaps */
Standard: 2.5rem (40px)
Compact: 1.25rem (20px)
Wide: 4rem (64px)

/* Element Margins */
Paragraph Bottom: 1.25-1.5rem
Heading Bottom: 1-1.5rem
Section Gap: 1.25rem
```

---

## Layout & Grid

### Container

```css
Max Width: 1280px (--container-width)
Padding: 0 24px
Margin: 0 auto
```

### Grid Systems

```css
/* Two Column Layout */
display: grid
grid-template-columns: 1fr 1fr
gap: 2.5rem (40px)

/* Asymmetric Grids */
grid-template-columns: 1.1fr 0.9fr
grid-template-columns: 1.05fr 0.95fr
grid-template-columns: 1fr 1.1fr

/* Auto-Fit Grid */
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))
gap: 1.25rem

/* Responsive Breakpoint */
@media (max-width: 768px) {
  grid-template-columns: 1fr
}
```

### Common Layouts

```css
/* Hero Layout */
display: grid
grid-template-columns: 1fr 1fr
gap: 4rem
align-items: center

/* Content + Image */
grid-template-columns: 1fr 1fr
gap: 2.5rem
align-items: center

/* Feature Cards */
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
gap: 2rem
```

---

## Border Radius

```css
Small: 8px (--radius-sm)
  Use: Form inputs, small elements

Medium: 12px (--radius-md)
  Use: Cards, buttons

Large: 24px (--radius-lg)
  Use: Large containers

Pill: 999px (50px works too)
  Use: Buttons, tags, badges

Circle: 50%
  Use: Avatar, icon containers
```

---

## Shadows & Effects

### Box Shadows

```css
/* Button Shadow */
box-shadow: 0 4px 20px -5px rgba(0, 133, 255, 0.5)

/* Hover Shadow */
box-shadow: 0 8px 30px -5px rgba(0, 133, 255, 0.5)

/* Card Shadow */
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12)

/* Large Shadow */
box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25)

/* Subtle Shadow */
box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25)
```

### Drop Shadows

```css
/* Logo */
filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15))
```

### Glass Effect (Deprecated)

```css
/* Was used in navbar, now solid colors preferred */
backdrop-filter: blur(10px)
background: rgba(255, 255, 255, 0.05)
```

---

## Transitions & Animations

### Standard Transitions

```css
/* Default Transition */
transition: all 0.3s ease

/* Button Transition */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)

/* Link Transition */
transition: all 0.2s ease
```

### Hover Effects

```css
/* Button Hover */
transform: translateY(-2px)
box-shadow: enhanced

/* Scale Hover */
transform: scale(1.05)
```

### Framer Motion Animations

```javascript
/* Fade In from Left */
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}

/* Fade In from Right */
initial={{ opacity: 0, x: 20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, delay: 0.2 }}
```

---

## Buttons

### Primary Button

```css
background: #0085FF (--primary)
color: white
padding: 12px 28px
border-radius: 12px
font-weight: 600
box-shadow: 0 4px 20px -5px rgba(0, 133, 255, 0.5)

Hover:
background: #0177E3
transform: translateY(-2px)
box-shadow: 0 8px 30px -5px rgba(0, 133, 255, 0.5)
```

### Accent Button (CTA)

```css
background: #f59e0b (amber-500)
color: white
padding: 14px 32px (larger)
border-radius: 50px (pill shape)
font-size: 1.1rem
font-weight: 700

Example: "Enroll Now" button
```

### Outline Button

```css
background: transparent
border: 1px solid rgba(255, 255, 255, 0.1)
color: #f8fafc
backdrop-filter: blur(5px)

Hover:
background: rgba(255, 255, 255, 0.05)
border-color: rgba(255, 255, 255, 0.2)
```

### Secondary Button

```css
background: #0ea5e9 (sky-500)
color: white
padding: 10-12px 18-24px
border-radius: 999px
font-weight: 700
```

### Loading/Disabled State

```css
background: #64748b (slate-500)
cursor: not-allowed
opacity: 0.7
```

---

## Forms

### Input Fields

```css
width: 100%
padding: 12px 14px
border-radius: 4px
border: 1px solid #334155 (slate-700)
background: #1e293b (slate-800)
color: #e5e7eb (slate-200)
font-size: 1rem

Focus:
outline: 2px solid #0ea5e9
outline-offset: 2px
```

### Textarea

```css
Same as input
rows: 5 (minimum)
resize: vertical
```

### Labels

```css
font-weight: 600
margin-bottom: 0.5rem
color: #f8fafc
```

### Error Messages

```css
color: #ef4444 (red-500)
font-size: 0.95rem
margin-top: 0.5rem
```

### Success Messages

```css
color: #10b981 (emerald-500)
font-size: 0.95rem
margin-top: 0.5rem
```

---

## Cards

### Standard Card

```css
background: #0f172a (--bg-card)
border: 1px solid rgba(255, 255, 255, 0.05)
border-radius: 12px (--radius-md)
padding: 2rem

Hover:
transform: translateY(-4px)
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2)
```

### Feature Card

```css
background: #0b1222 (slightly lighter than bg-card)
padding: 1.75rem
border-radius: 10px
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12)
text-align: left
```

### Dark Card on Light Background

```css
background: #0b1222
color: #e5e7eb
padding: 1.75-2rem
border-radius: 8-10px
```

---

## Navbar

### Desktop Navbar

```css
position: fixed
top: 0
height: 120px (--header-height)
background: #c026d3 (magenta)
z-index: 1000

Logo Height: 100px
Nav Link Color: white
Nav Link Font: 600, uppercase, 0.9rem
```

### Mobile Navbar

```css
Breakpoint: 900px
background: #c026d3
padding: 1rem 0
flex-direction: column
```

---

## Icons

### Icon Library: Lucide React

```javascript
Common Icons:
- Mail
- Phone
- MapPin
- Menu
- X (close)
- ChevronDown
- ChevronUp
- CheckCircle
```

### Icon Sizes

```javascript
Small: 16px
Medium: 20px
Default: 24px
Large: 32px
```

### Icon Colors

```css
Primary: #0ea5e9 (sky-500)
White: #ffffff
Muted: #94a3b8
```

---

## Responsive Breakpoints

```css
/* Mobile First Approach */

Mobile: < 640px
  - Single column layouts
  - Stacked navigation
  - Full-width cards

Tablet: 640px - 900px
  - Two-column where appropriate
  - Simplified grids

Desktop: > 900px
  - Full grid layouts
  - Horizontal navigation
  - Multi-column content

Large Desktop: > 1280px
  - Max container width enforced
  - Centered content
```

### Media Queries

```css
/* Tablet and below */
@media (max-width: 900px) { }

/* Mobile */
@media (max-width: 768px) { }

/* Small mobile */
@media (max-width: 640px) { }
```

---

## Content Patterns

### Section Structure

```css
Typical Section:
- background: alternating (#0f172a, #111827, #f8fafc)
- padding: 90px 0 (desktop), 70px 0 (mobile)
- Color contrast for readability
```

### Alternating Backgrounds

```
Page Flow:
1. Hero (Sky Blue #0ea5e9)
2. Programs (Dark #0f172a)
3. Features (Light #f8fafc or Medium #111827)
4. CTA Section (Primary #0085FF or Magenta #c026d3)
5. Footer (Magenta #c026d3)
```

---

## Accessibility

### Color Contrast

```css
/* WCAG AA Compliant */
White on Magenta: Pass
White on Sky Blue: Pass
White on Dark Navy: Pass
Dark Text on Light: Pass (#111827 on #f8fafc)
```

### Focus States

```css
outline: 2px solid #0ea5e9
outline-offset: 2px
border-radius: 4px
```

### Interactive Elements

```css
Minimum Click Target: 44x44px
Hover states: Always visible
Focus states: Clear outline
```

---

## Brand Assets

### Logo

```
Filename: Logo_nda.png
Size: 288KB (optimized)
Format: PNG with transparency
Display Height: 100px (navbar)
Colors: Purple/Pink gradient
```

### Images

```
Hero/About: advance.png, advance1.png
Format: PNG
Usage: Inline images, backgrounds
Alt text: Always descriptive
```

---

## Design Principles

### 1. Professional & Trustworthy
- Serif headings (EB Garamond) = authority
- Clean layouts = professionalism
- Ample white space = clarity

### 2. Modern & Vibrant
- Bold magenta + sky blue = energy
- Smooth animations = modern feel
- Rounded corners = friendly

### 3. Clear Hierarchy
- Large hero text
- Distinct section headers
- Visual weight through size/color

### 4. Action-Oriented
- Prominent CTAs (amber buttons)
- Clear conversion paths
- Urgency elements (banner)

---

## Usage Guidelines

### Do's
✅ Use CSS variables for colors
✅ Maintain consistent spacing scale
✅ Follow the 8pt grid for layout
✅ Use gradient backgrounds sparingly
✅ Ensure text contrast ratios
✅ Test on mobile devices

### Don'ts
❌ Mix serif and sans-serif randomly
❌ Use too many colors in one section
❌ Ignore responsive breakpoints
❌ Overuse animations
❌ Skip hover states
❌ Use small font sizes (< 14px for body)

---

## Quick Reference

```css
/* Copy-Paste Essentials */

/* Primary Color */
background: #0085FF;

/* Magenta */
background: #c026d3;

/* Sky Blue */
background: #0ea5e9;

/* Dark Background */
background: #0f172a;

/* White Text */
color: #f8fafc;

/* Standard Padding */
padding: 90px 0;

/* Button */
padding: 12px 28px;
border-radius: 12px;
font-weight: 600;

/* Card */
background: #0f172a;
border: 1px solid rgba(255, 255, 255, 0.05);
border-radius: 12px;
padding: 2rem;
```

---

**Last Updated:** January 2026
**Version:** 1.0.0
