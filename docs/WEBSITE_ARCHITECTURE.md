# NextGen DON Academy - Website Architecture

## Project Overview

**Project Name:** NextGen DON Academy
**Purpose:** Director of Nursing Leadership Certification Program website
**Live URL:** https://netgen-don-academy.web.app
**Repository:** https://github.com/pssambila-maker/Charles_DON_Chatgpt_version

---

## Technology Stack

### Frontend Framework
- **React 19.2.0** - Modern UI library
- **React Router DOM 7.11.0** - Client-side routing
- **Vite 7.2.4** - Build tool and dev server

### Styling
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **PostCSS 8.5.0** - CSS processing
- **Autoprefixer 10.4.20** - Browser compatibility

### Animations & Icons
- **Framer Motion 12.0.3** - Smooth animations and transitions
- **Lucide React 0.468.0** - Modern icon library

### Backend Services
- **Firebase 12.7.0**
  - Firebase Hosting - Static site hosting
  - Firestore - NoSQL database for forms
  - Firebase Functions - Serverless backend
  - Firebase Admin SDK - Server-side operations

### Email Service
- **SendGrid (@sendgrid/mail 8.1.6)** - Transactional emails
- **Firebase Functions 7.0.2** - Email automation triggers

### Development Tools
- **ESLint 9.20.0** - Code linting
- **Vite Plugin React 5.0.0** - React plugin for Vite

---

## Project Structure

```
Charles_DON/
├── public/                          # Static assets
│   ├── Logo_nda.png                # Main logo (288KB)
│   ├── advance.png                 # Hero/About images
│   ├── advance1.png                # Program section image
│   └── grid.svg                    # Background pattern
│
├── src/                            # Source code
│   ├── components/                 # Reusable components
│   │   ├── Navbar.jsx             # Navigation bar
│   │   ├── Footer.jsx             # Site footer
│   │   ├── Hero.jsx               # Homepage hero section
│   │   ├── ProgramSection.jsx     # Program showcase
│   │   ├── Testimonials.jsx       # Client testimonials
│   │   ├── UrgencyBanner.jsx      # Top banner
│   │   └── StickyApplyButton.jsx  # Floating CTA
│   │
│   ├── pages/                      # Page components
│   │   ├── Home.jsx               # Homepage
│   │   ├── About.jsx              # About page
│   │   ├── Program.jsx            # Program details
│   │   ├── Contact.jsx            # Contact form
│   │   ├── Enquiry.jsx            # Enquiry form
│   │   └── Career.jsx             # Careers page
│   │
│   ├── styles/                     # Stylesheets
│   │   └── index.css              # Global styles + CSS variables
│   │
│   ├── firebase.js                 # Firebase configuration
│   ├── App.jsx                     # Root component
│   └── main.jsx                    # Entry point
│
├── functions/                       # Firebase Cloud Functions
│   ├── index.js                    # Email automation functions
│   ├── package.json                # Functions dependencies
│   └── SETUP_INSTRUCTIONS.md       # Email setup guide
│
├── docs/                           # Documentation
│   ├── WEBSITE_ARCHITECTURE.md     # This file
│   ├── DESIGN_SYSTEM.md           # Design tokens
│   ├── PAGES_CONTENT_GUIDE.md     # Page breakdown
│   ├── COMPONENTS_LIBRARY.md      # Component docs
│   ├── TEMPLATE_CREATION_GUIDE.md # Cloning guide
│   ├── PROMPT_LIBRARY.md          # AI prompts used
│   └── QUICK_START_TEMPLATE.md    # Fast setup
│
├── firebase.json                   # Firebase configuration
├── firestore.rules                 # Database security rules
├── firestore.indexes.json          # Database indexes
├── package.json                    # Project dependencies
├── vite.config.js                  # Vite configuration
├── postcss.config.js               # PostCSS configuration
└── tailwind.config.js              # Tailwind configuration
```

---

## Application Architecture

### Component Hierarchy

```
App.jsx
├── Router
│   └── AppContent
│       ├── UrgencyBanner
│       ├── Navbar
│       ├── Routes
│       │   ├── Home
│       │   │   ├── Hero
│       │   │   ├── ProgramSection
│       │   │   └── Testimonials
│       │   ├── About
│       │   ├── Program
│       │   ├── Contact
│       │   ├── Enquiry
│       │   └── Career
│       ├── Footer
│       └── StickyApplyButton (conditional)
```

### Data Flow

```
User Interaction → React Component → Firebase Client SDK → Firestore
                                                           ↓
                                    Cloud Function Trigger
                                                           ↓
                                    SendGrid Email Service
                                                           ↓
                                    User Email + Admin Email
```

---

## Firebase Architecture

### Firestore Collections

```javascript
enquiries/                          // Form submissions
  {enquiryId}/
    - name: string
    - email: string
    - phone: string
    - message: string
    - createdAt: timestamp

newsletter/                         // Newsletter subscribers
  {subscriberId}/
    - email: string
    - subscribedAt: timestamp
```

### Cloud Functions

```javascript
onEnquiryCreated                    // Triggered on new enquiry
  ├── Send confirmation to user
  └── Send alert to admin

onNewsletterSubscribe               // Triggered on newsletter signup
  ├── Send welcome to subscriber
  └── Send notification to admin
```

### Security Rules

```javascript
// Firestore Rules
- enquiries: write-only (users can create, not read)
- newsletter: write-only (users can create, not read)
- Admin access through Firebase Console
```

---

## Build & Deployment Pipeline

### Development Workflow

```bash
# 1. Start dev server
npm run dev                         # Runs on http://localhost:5173

# 2. Build for production
npm run build                       # Outputs to dist/

# 3. Preview production build
npm run preview                     # Test before deployment

# 4. Deploy to Firebase
firebase deploy --only hosting      # Deploy website
firebase deploy --only functions    # Deploy cloud functions
firebase deploy                     # Deploy everything
```

### Deployment Process

```
Local Development
    ↓
Git Commit & Push → GitHub Repository
    ↓
npm run build → dist/
    ↓
firebase deploy → Firebase Hosting
    ↓
Live Website (https://netgen-don-academy.web.app)
```

---

## Routing Architecture

### Client-Side Routes

```javascript
/               → Home page (Hero, Programs, Testimonials)
/about          → About page (Mission, Goals, Team)
/program        → Program details (Curriculum, Outcomes)
/contact        → Contact form (Map, Contact info)
/enquiry        → Enquiry form (Application/Registration)
/career         → Careers page (Job opportunities)
```

### Route Configuration

```javascript
// src/App.jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/program" element={<Program />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/enquiry" element={<Enquiry />} />
  <Route path="/career" element={<Career />} />
</Routes>
```

---

## State Management

### Approach
- **Local Component State** (React hooks)
- No global state management library (Redux, Zustand) needed
- Form state managed with `useState`
- Navigation state via React Router

### Common State Patterns

```javascript
// Form handling
const [formData, setFormData] = useState({ name: '', email: '', ... });
const [submitStatus, setSubmitStatus] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);

// UI state
const [isOpen, setIsOpen] = useState(false);  // Mobile menu
```

---

## Performance Optimizations

### Code Splitting
- Route-based code splitting via React Router
- Lazy loading not implemented (bundle size acceptable)

### Image Optimization
- Compressed logo (288KB → optimal for quality)
- Background images via CSS
- External images from Unsplash CDN

### Bundle Size
- Main bundle: ~631KB (acceptable for this project)
- Chunk size warnings acknowledged
- Future optimization: Dynamic imports for larger apps

### Caching Strategy
- Firebase Hosting CDN caching
- Static assets cached at edge locations
- Fast global delivery

---

## Security Architecture

### Frontend Security
- Input validation on forms
- XSS prevention via React's JSX escaping
- No sensitive data in client code

### Backend Security
- Firestore security rules (write-only access)
- Firebase Functions environment variables
- SendGrid API key stored securely
- CORS handled by Firebase

### Email Security
- Verified sender domain
- Rate limiting via Firebase Functions
- No user data exposed in emails

---

## Environment Configuration

### Development (.env not used)
- Firebase config in `src/firebase.js`
- Public Firebase keys (safe for client)

### Production
- Environment variables via Firebase Functions:
  ```bash
  firebase functions:config:set sendgrid.key="..."
  ```

---

## Browser Compatibility

### Supported Browsers
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Polyfills
- Autoprefixer for CSS compatibility
- Vite handles modern JS transpilation

---

## Analytics & Monitoring

### Current Setup
- Firebase Hosting analytics (built-in)
- Cloud Functions logs via Firebase Console

### Recommended Additions
- Google Analytics 4
- Firebase Performance Monitoring
- Error tracking (Sentry)

---

## Scalability Considerations

### Current Capacity
- **Firebase Free Tier:**
  - Firestore: 50K reads/day, 20K writes/day
  - Hosting: 10GB storage, 360MB/day transfer
  - Functions: 2M invocations/month
  - SendGrid Free: 100 emails/day

### Scaling Path
1. **Low Traffic (Current):** Free tier sufficient
2. **Medium Traffic:** Firebase Spark → Blaze plan (pay-as-you-go)
3. **High Traffic:** SendGrid paid plan, CDN optimization

---

## Development Best Practices

### Code Organization
- Components in `/components` (reusable)
- Pages in `/pages` (route-specific)
- Shared styles in `/styles`
- One component per file

### Naming Conventions
- Components: PascalCase (e.g., `HeroSection.jsx`)
- Files: Same as component name
- CSS classes: kebab-case or Tailwind utilities
- Variables: camelCase

### Git Workflow
- Main branch for production
- Commit messages: Descriptive with emoji
- Co-authored commits with Claude Code

---

## Dependencies Management

### Core Dependencies (package.json)
```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.11.0",
  "firebase": "^12.7.0",
  "framer-motion": "^12.0.3",
  "lucide-react": "^0.468.0",
  "tailwindcss": "^4.1.18"
}
```

### Update Strategy
- Check for updates monthly
- Test in development before deploying
- Semantic versioning (^) for minor updates

---

## Testing Strategy

### Current Testing
- Manual testing in development
- Production preview before deployment
- Form submissions tested in Firestore

### Recommended Testing
- Unit tests: Vitest
- Component tests: React Testing Library
- E2E tests: Playwright or Cypress

---

## Documentation Standards

### Code Comments
```javascript
// Section comments for major blocks
{/* JSX comments for component sections */}

// Example:
{/* Hero Section - Main landing area */}
<section className="hero">
  ...
</section>
```

### README Updates
- Keep README current with new features
- Document setup steps clearly
- Include troubleshooting section

---

## API Integration Points

### Firebase SDK
```javascript
// Firestore
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

// Usage
await addDoc(collection(db, 'enquiries'), data);
```

### SendGrid (Functions)
```javascript
// functions/index.js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_KEY);
await sgMail.send(emailData);
```

---

## Maintenance & Updates

### Regular Maintenance
- [ ] Check Firebase usage monthly
- [ ] Review SendGrid email delivery rates
- [ ] Update dependencies quarterly
- [ ] Backup Firestore data monthly
- [ ] Review and update content

### Content Updates
- Edit page components directly
- Rebuild and redeploy: `npm run build && firebase deploy`

---

## Contact & Support

**Developer:** Built with Claude Code (Anthropic)
**Client:** NextGen DON Academy
**Support:** Reference documentation in `/docs`

---

**Last Updated:** January 2026
**Version:** 1.0.0
