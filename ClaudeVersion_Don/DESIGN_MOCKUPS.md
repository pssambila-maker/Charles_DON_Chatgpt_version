# NextGenDON Academy - Design Mockups & Style Guide

## Design System

### Color Palette

```css
/* Primary Colors */
--primary-50: #eff6ff;
--primary-100: #dbeafe;
--primary-200: #bfdbfe;
--primary-300: #93c5fd;
--primary-400: #60a5fa;
--primary-500: #3b82f6;  /* Main Brand Color */
--primary-600: #2563eb;
--primary-700: #1d4ed8;
--primary-800: #1e40af;  /* Deep Blue - Professional */
--primary-900: #1e3a8a;

/* Accent Colors */
--accent-blue: #3b82f6;
--success-green: #10b981;
--warning-orange: #f59e0b;
--error-red: #ef4444;

/* Neutral Colors */
--gray-50: #f8fafc;
--gray-100: #f1f5f9;
--gray-200: #e2e8f0;
--gray-300: #cbd5e1;
--gray-400: #94a3b8;
--gray-500: #64748b;
--gray-600: #475569;
--gray-700: #334155;
--gray-800: #1e293b;
--gray-900: #0f172a;

/* Background */
--bg-primary: #ffffff;
--bg-secondary: #f8fafc;
--bg-dark: #0f172a;
```

### Typography

```css
/* Font Families */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-heading: 'Inter', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### Spacing Scale

```css
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-5: 1.25rem;   /* 20px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-10: 2.5rem;   /* 40px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
--spacing-20: 5rem;     /* 80px */
--spacing-24: 6rem;     /* 96px */
```

### Border Radius

```css
--radius-sm: 0.375rem;  /* 6px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */
--radius-2xl: 1.5rem;   /* 24px */
--radius-full: 9999px;  /* Fully rounded */
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

---

## Component Designs

### 1. Navigation Header

```
┌─────────────────────────────────────────────────────────────────┐
│  [LOGO] NextGenDON    Home  Courses  About  Contact    [Login] │
└─────────────────────────────────────────────────────────────────┘

Sticky Header (Desktop):
- Height: 80px
- Background: White with shadow on scroll
- Logo: Left aligned, 180px width
- Nav Items: Centered, 16px font, 600 weight
- Login Button: Primary blue, rounded-lg
- Hover: Underline animation for nav items

Mobile (< 768px):
- Hamburger menu (right side)
- Full-screen overlay navigation
- Logo centered or left
```

### 2. Hero Section (Homepage)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                  Transform Your Career with                     │
│              Professional Development Courses                   │
│                                                                 │
│        Learn from industry experts and advance your skills      │
│                                                                 │
│        [Browse Courses]    [Learn More]                         │
│                                                                 │
│                    [Hero Image / Video]                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Specifications:
- Background: Gradient from primary-600 to primary-800
- Text Color: White
- Heading: text-5xl (mobile: text-3xl), font-bold
- Subheading: text-xl (mobile: text-lg), opacity-90
- Buttons: Large (h-14), rounded-lg, shadow-lg
- Primary Button: White bg, primary-800 text
- Secondary Button: Outlined, white border
- Min Height: 600px (mobile: 500px)
- Padding: py-20 (mobile: py-12)
```

### 3. Course Card

```
┌─────────────────────────┐
│                         │
│   [Course Thumbnail]    │
│                         │
├─────────────────────────┤
│ Course Title            │
│ By Instructor Name      │
│                         │
│ ⭐ 4.8 (234 reviews)    │
│                         │
│ $99.00    [Enroll Now]  │
└─────────────────────────┘

Specifications:
- Card: bg-white, rounded-xl, shadow-md, hover:shadow-xl transition
- Thumbnail: aspect-video, object-cover
- Title: text-lg, font-semibold, line-clamp-2
- Instructor: text-sm, text-gray-600
- Rating: text-sm, text-yellow-500 (stars), gray-600 (count)
- Price: text-2xl, font-bold, primary-800
- Button: Primary, rounded-lg, w-full
- Padding: p-5
- Hover: transform scale-105, smooth transition
```

### 4. Features Section

```
┌─────────────────────────────────────────────────────────────────┐
│                     Why Choose NextGenDON?                      │
│                                                                 │
│  ┌───────────┐    ┌───────────┐    ┌───────────┐              │
│  │  [Icon]   │    │  [Icon]   │    │  [Icon]   │              │
│  │  Expert   │    │  Flexible │    │ Certified │              │
│  │Instructors│    │  Learning │    │  Courses  │              │
│  └───────────┘    └───────────┘    └───────────┘              │
│                                                                 │
│  ┌───────────┐    ┌───────────┐    ┌───────────┐              │
│  │  [Icon]   │    │  [Icon]   │    │  [Icon]   │              │
│  │ Lifetime  │    │ Community │    │  Career   │              │
│  │  Access   │    │  Support  │    │  Growth   │              │
│  └───────────┘    └───────────┘    └───────────┘              │
└─────────────────────────────────────────────────────────────────┘

Specifications:
- Background: bg-gray-50
- Heading: text-4xl, font-bold, text-center, mb-16
- Grid: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Feature Card: bg-white, rounded-xl, p-8, text-center, shadow-sm
- Icon: w-16 h-16, mx-auto, mb-4, primary-500 color
- Title: text-xl, font-semibold, mb-3
- Description: text-gray-600, text-base
```

### 5. Student Dashboard

```
┌─────────────────────────────────────────────────────────────────┐
│  [Sidebar]                                                      │
│  Dashboard                         Welcome back, [User Name]!   │
│  My Courses    ────────────────────────────────────────────────│
│  Progress                                                       │
│  Settings      Continue Learning                                │
│  Logout        ┌──────────────────┐  ┌──────────────────┐      │
│                │  Course 1        │  │  Course 2        │      │
│                │  [Progress: 45%] │  │  [Progress: 12%] │      │
│                │  [Continue]      │  │  [Continue]      │      │
│                └──────────────────┘  └──────────────────┘      │
│                                                                 │
│                My Enrolled Courses                              │
│                ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│                │ Course 1 │ │ Course 2 │ │ Course 3 │          │
│                └──────────┘ └──────────┘ └──────────┘          │
└─────────────────────────────────────────────────────────────────┘

Specifications:
- Sidebar: w-64, bg-gray-900, text-white, fixed
- Main Content: ml-64, p-8
- Welcome Card: bg-gradient primary, text-white, p-6, rounded-xl
- Course Cards: Same as course card component
- Progress Bar: h-2, bg-gray-200, rounded-full, primary-500 fill
```

### 6. Course Detail Page

```
┌─────────────────────────────────────────────────────────────────┐
│  [Breadcrumb: Home > Courses > Course Name]                     │
│                                                                 │
│  ┌────────────────────┐  ┌──────────────────────────────────┐  │
│  │                    │  │  Course Title                    │  │
│  │  [Video Preview]   │  │  By Instructor Name              │  │
│  │                    │  │  ⭐ 4.8 (234)                    │  │
│  │                    │  │                                  │  │
│  └────────────────────┘  │  $99.00                          │  │
│                          │  [Enroll Now]                    │  │
│  What You'll Learn       └──────────────────────────────────┘  │
│  ✓ Skill 1                                                      │
│  ✓ Skill 2               Course Curriculum                      │
│  ✓ Skill 3               ▼ Module 1: Introduction               │
│                            ○ Lesson 1 (10:23)                   │
│  Requirements              ○ Lesson 2 (15:45)                   │
│  • Requirement 1         ▼ Module 2: Advanced Topics            │
│  • Requirement 2           ○ Lesson 3 (20:10)                   │
└─────────────────────────────────────────────────────────────────┘

Specifications:
- Two-column layout (desktop), stacked (mobile)
- Video: aspect-video, rounded-xl, shadow-lg
- Sidebar: sticky, top-24
- Price Card: bg-white, border-2 border-gray-200, p-6, rounded-xl
- Enroll Button: w-full, h-14, text-lg, primary
- Curriculum: Accordion style, hover:bg-gray-50
- Checkmarks: text-green-500
```

### 7. Footer

```
┌─────────────────────────────────────────────────────────────────┐
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐   │
│  │ About Us  │  │  Courses  │  │  Support  │  │  Connect  │   │
│  │ Our Story │  │  All      │  │  Help     │  │  Facebook │   │
│  │ Team      │  │  Popular  │  │  FAQ      │  │  Twitter  │   │
│  │ Careers   │  │  New      │  │  Contact  │  │  LinkedIn │   │
│  └───────────┘  └───────────┘  └───────────┘  └───────────┘   │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  © 2026 NextGenDON Academy. All rights reserved.                │
│  Privacy Policy | Terms of Service | Cookie Policy              │
└─────────────────────────────────────────────────────────────────┘

Specifications:
- Background: bg-gray-900, text-gray-300
- Padding: py-12, px-6
- Grid: 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Links: hover:text-white, transition
- Bottom Bar: border-top, text-center, text-sm, py-6
```

---

## Page Layouts

### Homepage Structure

```
1. Navigation Header (sticky)
2. Hero Section (full-width)
3. Features Section (3-column grid)
4. Popular Courses (carousel/grid)
5. Stats/Numbers Section (centered)
6. Testimonials (carousel)
7. Call-to-Action Section
8. Footer
```

### Courses Page Structure

```
1. Navigation Header
2. Page Header (title + breadcrumb)
3. Filter Sidebar + Course Grid
   - Sidebar: Categories, Price, Rating, Level
   - Grid: Course cards (3 columns desktop, 2 tablet, 1 mobile)
4. Pagination
5. Footer
```

### Course Detail Page Structure

```
1. Navigation Header
2. Breadcrumb
3. Hero Section (video + sidebar with CTA)
4. Tabs: Overview, Curriculum, Reviews, Instructor
5. Related Courses
6. Footer
```

### Dashboard Structure

```
1. Sidebar Navigation (fixed)
2. Top Bar (user info, notifications)
3. Main Content Area
   - Welcome Card
   - Continue Learning
   - My Courses Grid
   - Progress Overview
4. No footer (dashboard pages)
```

### Login/Signup Page

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                         [Logo]                                  │
│                                                                 │
│                  Welcome to NextGenDON Academy                  │
│                                                                 │
│            ┌──────────────────────────────────┐                 │
│            │  Email                           │                 │
│            │  [input field]                   │                 │
│            │                                  │                 │
│            │  Password                        │                 │
│            │  [input field]                   │                 │
│            │                                  │                 │
│            │  [ ] Remember me  Forgot?        │                 │
│            │                                  │                 │
│            │  [Sign In]                       │                 │
│            │                                  │                 │
│            │  ─────── or ───────              │                 │
│            │                                  │                 │
│            │  [Continue with Google]          │                 │
│            │                                  │                 │
│            │  Don't have an account? Sign up  │                 │
│            └──────────────────────────────────┘                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Specifications:
- Centered card: max-w-md, mx-auto, mt-20
- Background: Subtle gradient or pattern
- Card: bg-white, p-8, rounded-2xl, shadow-xl
- Inputs: h-12, rounded-lg, border-gray-300, focus:border-primary
- Button: w-full, h-12, rounded-lg, primary
- Social Button: outlined, icon + text
```

---

## Responsive Breakpoints

```css
/* Mobile First Approach */
/* Default: Mobile (< 640px) */

/* Small tablets */
@media (min-width: 640px) { ... }

/* Tablets */
@media (min-width: 768px) { ... }

/* Small laptops */
@media (min-width: 1024px) { ... }

/* Desktops */
@media (min-width: 1280px) { ... }

/* Large desktops */
@media (min-width: 1536px) { ... }
```

---

## Animation Guidelines

### Transitions

```css
/* Button Hover */
transition: all 0.3s ease;

/* Card Hover */
transition: transform 0.3s ease, box-shadow 0.3s ease;

/* Link Hover */
transition: color 0.2s ease;

/* Page Transitions */
transition: opacity 0.3s ease-in-out;
```

### Hover Effects

```css
/* Cards */
hover:scale-105 hover:shadow-xl

/* Buttons */
hover:bg-primary-700 hover:shadow-lg

/* Links */
hover:text-primary-500 hover:underline
```

### Loading States

- Skeleton screens for content loading
- Spinner for button actions
- Progress bar for page navigation
- Shimmer effect for images

---

## Accessibility Guidelines

1. **Color Contrast**: All text meets WCAG AA standards (4.5:1 ratio)
2. **Focus States**: Visible focus rings on all interactive elements
3. **Keyboard Navigation**: Full keyboard accessibility
4. **Alt Text**: All images have descriptive alt text
5. **ARIA Labels**: Proper ARIA labels for dynamic content
6. **Semantic HTML**: Use proper HTML5 semantic elements
7. **Screen Reader**: Test with screen readers

---

## Brand Voice & Messaging

### Tone
- Professional yet approachable
- Encouraging and supportive
- Clear and concise
- Expert without being condescending

### Example Copy

**Hero Section:**
- "Transform Your Career with Expert-Led Courses"
- "Learn In-Demand Skills from Industry Professionals"
- "Advance Your Career with Professional Development"

**Call-to-Action Buttons:**
- "Start Learning Today"
- "Enroll Now"
- "Browse Courses"
- "Get Started Free"

**Features:**
- "Learn at Your Own Pace"
- "Lifetime Access to Course Materials"
- "Expert Instructor Support"
- "Industry-Recognized Certificates"

---

## Icon System

Use Lucide React icons for consistency:

- **Navigation**: Menu, X (close), ChevronDown, Search
- **Courses**: PlayCircle, Book, Award, Clock
- **User**: User, Settings, LogOut, Bell
- **Actions**: Plus, Edit, Trash, Download
- **Social**: Facebook, Twitter, LinkedIn, Instagram
- **Misc**: Star (ratings), Check (completed), Lock (locked content)

---

**Document Version**: 1.0
**Last Updated**: 2026-01-01
**Status**: Design system defined, ready for implementation
