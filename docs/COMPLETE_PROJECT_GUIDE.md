# NextGen DON Academy - Complete Project Guide

**Table of Contents:**
1. [Pages Content Breakdown](#pages-content-breakdown)
2. [Components Library](#components-library)
3. [Template Creation Guide](#template-creation-guide)
4. [Prompt Library](#prompt-library)
5. [Quick Start Template](#quick-start-template)

---

# Pages Content Breakdown

## Homepage (/)

### Structure
1. **UrgencyBanner** (Top)
2. **Navbar** (Fixed)
3. **Hero Section**
4. **ProgramSection**
5. **Testimonials**
6. **Footer**
7. **StickyApplyButton** (Floating)

### Hero Section
- **Background:** Sky blue (#0ea5e9)
- **Layout:** Two-column grid (text left, image right)
- **Headline:** "Advancing Leadership. Elevating Care."
  - Font: EB Garamond, 3.5rem, white
  - Line breaks after "Leadership."
- **Subheading:** Program description (1.3rem, medium weight)
- **CTA Button:** "Enrol Now" (Amber, pill-shaped, links to /enquiry)
- **Image:** advance.png (500px height, rounded, shadow)
- **Decoration:** Curved background shape (rgba white overlay)

### Program Section
- **Background:** Dark navy (#0f172a)
- **Part 1:** Two-column (image left, text right)
  - Label: "PROGRAMS" (sky blue, uppercase, bold, tracked)
  - Title: "Director of Nursing Leadership Certification Program"
  - Description: 4-week program overview
  - CTA: "View Program Details" → /program
- **Part 2:** "Why Choose" grid
  - 6 feature cards (3x2 grid on desktop)
  - Each card: dark background, white title, gray description
- **Part 3:** Curriculum + Outcome
  - Left: Collapsible weeks (accordion, only Week 1 detailed)
  - Right: Sky blue panel with certification outcome + CTA

### Testimonials
- **Background:** Medium dark (#111827)
- **Layout:** Grid of testimony cards
- **Content:** (Sample data - replace with real testimonials)

---

## About Page (/about)

### Structure
1. **Hero Banner**
2. **Mission Statement**
3. **Goal Section**
4. **Who We Are**
5. **Professional Block**
6. **Contact CTA**
7. **Map**

### Hero Banner
- **Background:** Primary magenta with decorative circle
- **Heading:** "About Us" (centered, white, 2.8rem)
- **Decoration:** Large white-opacity circle (right side overflow)

### Mission Statement
- **Background:** Dark (#111827)
- **Layout:** Two-column (image left, text right)
- **Image:** Unsplash healthcare photo
- **Heading:** "Mission Statement" (2rem)
- **Text:** Two paragraphs (1.15rem, bright white, weight 600)
  - Empowering DONs
  - Shaping visionary leaders

### Goal Section
- **Background:** Magenta (--bg-magenta)
- **Layout:** Two-column (text left, image right)
- **Heading:** "Goal" (blue #1d4ed8)
- **Text:** Single paragraph (1.15rem, white, weight 600)
- **Image:** advance.png (max-width 460px)

### Who We Are
- **Background:** Light (#f8fafc)
- **Text Color:** Dark (#0f172a)
- **Heading:** "Who We Are & What We Do"
- **Intro:** Large paragraph (1.2rem, dark, weight 500)
- **Grid:** 6 feature cards (auto-fit, min 280px)
  - Card background: Dark (#0b1222)
  - Number prefix: Blue
  - Title + description
- **CTA:** "Make Enquiry" button

### Professional Block
- **Background:** Magenta
- **Layout:** Two-column (text left, image right)
- **Pre-heading:** "Professional & Vision-Driven"
- **Heading:** "Committed to the Excellence"
- **Content:** 3 paragraphs (1.1rem, white, weight 600)
- **Image:** advance1.png

### Contact CTA
- **Background:** Primary blue (#0085FF)
- **Layout:** 4-column grid (responsive)
- **Elements:**
  - Phone with icon
  - Address with icon
  - "Schedule Virtual Appointment" text
  - "Schedule Now" button (white background)

### Map
- **Iframe:** Google Maps embed
- **Height:** 360px
- **Note:** Update embed URL to actual location

---

## Program Page (/program)

### Content (Similar to ProgramSection but full page)
- Expanded curriculum details
- Full week-by-week breakdown
- Enrollment process
- Pricing (if applicable)
- FAQs

---

## Contact Page (/contact)

### Structure
1. **Hero Banner:** "Contact"
2. **Two-Column Layout:**
   - Left: Contact form
   - Right: Contact info
3. **Map**

### Contact Form
- **Fields:**
  - Full Name (text, required)
  - Your Email (email, required)
  - Phone Number (tel, optional)
  - Your Message (textarea, required, 5 rows)
- **Button:** "Send Message" (Sky blue, pill)
- **States:**
  - Loading: "Sending..." (gray, disabled)
  - Success: Green message "Thank you! We'll be in touch within 24 hours."
  - Error: Red message with fallback phone number
- **Firebase:** Writes to `enquiries` collection

### Contact Info
- **Heading:** "Have Any Queries?"
- **Description:** Free consultation offer
- **Details with icons:**
  - Phone: +1 (248) 795-9750
  - Email: info@nextgendonacademy.com
  - Address: 995 N. Pontiac Trail P.O. Box 182 Walled Lake, MI 48390

---

## Enquiry Page (/enquiry)

### Similar to Contact Form
- More fields for program enrollment
- Program selection (if multiple)
- Start date preference
- Background information

---

## Career Page (/career)

### Content
- Why join NDA team
- Current openings
- Benefits
- Application process

---

# Components Library

## Navbar Component

### File: `src/components/Navbar.jsx`

### Props: None (uses React Router location)

### Features
- Fixed positioning (z-index: 1000)
- Magenta background
- Logo (100px height) left side
- Email display (centered, desktop only)
- Navigation links (right side)
- Mobile hamburger menu
- Active route highlighting

### Navigation Links
```javascript
const navLinks = [
  { title: 'HOME', path: '/' },
  { title: 'ABOUT', path: '/about' },
  { title: 'PROGRAM', path: '/program' },
  { title: 'CONTACT', path: '/contact' },
  { title: 'ENQUIRY', path: '/enquiry' },
];
```

### Customization
- Change logo: Replace `/Logo_nda.png`
- Change links: Edit `navLinks` array
- Change colors: Modify `--bg-magenta` in CSS
- Change height: Adjust `--header-height`

---

## Footer Component

### File: `src/components/Footer.jsx`

### Structure
- Background: Magenta
- Four columns (responsive)
  1. About + Logo
  2. Quick Links
  3. Programs
  4. Contact Info
- Bottom bar: Copyright

### Customization
- Update links
- Change social media icons
- Modify copyright text

---

## Hero Component

### File: `src/components/Hero.jsx`

### Props: None (content hardcoded)

### Features
- Framer Motion animations
- Two-column grid
- Left: Text content + CTA
- Right: Image
- Background decorative shape

### Customization Pattern
```javascript
<h1>Your Headline</h1>
<p>Your description</p>
<Link to="/your-cta">Button Text</Link>
<img src="/your-image.png" alt="Description" />
```

---

## ProgramSection Component

### File: `src/components/ProgramSection.jsx`

### Props: None

### Features
- Three-part layout
- Image + description
- Feature grid
- Accordion curriculum
- CTA panel

### Customization
- Edit feature array
- Modify week details
- Update images

---

## Testimonials Component

### File: `src/components/Testimonials.jsx`

### Props: None

### Data Structure
```javascript
const testimonials = [
  {
    name: "Name",
    role: "Title",
    image: "url",
    text: "Quote"
  }
];
```

---

## UrgencyBanner Component

### File: `src/components/UrgencyBanner.jsx`

### Features
- Top banner above navbar
- Countdown or message
- Closeable (optional)
- Sticky or static

---

## StickyApplyButton Component

### File: `src/components/StickyApplyButton.jsx`

### Features
- Fixed bottom-right
- Hides on /enquiry page
- Floating action button
- Links to enquiry form

---

# Template Creation Guide

## Step 1: Clone the Repository

```bash
git clone https://github.com/pssambila-maker/Charles_DON_Chatgpt_version.git my-new-project
cd my-new-project
rm -rf .git
git init
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Update Branding

### Replace Logo
1. Replace `public/Logo_nda.png` with your logo
2. Update logo height in `Navbar.jsx` if needed

### Update Colors (src/styles/index.css)
```css
:root {
  --primary: #YOUR_PRIMARY_COLOR;
  --bg-magenta: #YOUR_BRAND_COLOR;
  --bg-hero: #YOUR_ACCENT_COLOR;
  --accent: #YOUR_CTA_COLOR;
}
```

### Update Fonts (Optional)
```css
@import url('YOUR_GOOGLE_FONTS_URL');

:root {
  --font-main: 'YourBodyFont', sans-serif;
  --font-heading: 'YourHeadingFont', serif;
}
```

## Step 4: Update Content

### Global Content
1. **Company Name:** Search & replace "NextGen DON Academy"
2. **Contact Info:** Update phone, email, address in all components
3. **Social Media:** Update links in Footer

### Page-by-Page
1. **Home:**
   - Edit `src/components/Hero.jsx` - headline, description
   - Edit `src/components/ProgramSection.jsx` - services/programs
   - Edit `src/components/Testimonials.jsx` - client testimonials

2. **About:**
   - Edit `src/pages/About.jsx` - mission, goals, team info

3. **Program:**
   - Edit `src/pages/Program.jsx` - service details

4. **Contact:**
   - Edit `src/pages/Contact.jsx` - contact info
   - Update Google Maps embed URL

## Step 5: Firebase Setup

### Create New Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create new project
3. Enable Firestore, Hosting, Functions

### Update Firebase Config
Edit `src/firebase.js`:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};
```

### Update Firebase Project
```bash
firebase use --add
# Select your project
```

## Step 6: Email Setup (Optional)

### SendGrid
1. Sign up at SendGrid
2. Verify sender email
3. Create API key
4. Configure:
```bash
firebase functions:config:set sendgrid.key="YOUR_KEY"
```

### Update Email Templates
Edit `functions/index.js`:
- Change company name
- Update branding
- Modify email content

## Step 7: Deploy

```bash
npm run build
firebase deploy
```

---

# Prompt Library

## Effective Prompts Used in This Project

### 1. Initial Setup
```
Create a React + Vite website for a nursing academy with the following:
- Modern design with purple/blue color scheme
- Home, About, Program, Contact pages
- Firebase integration for forms
- Responsive design
- Professional and trustworthy feel
```

### 2. Design Refinements
```
I want to make the navbar wider and ensure the logo fills the height properly and blends well with the magenta background.
```

```
Please increase the highlighted fonts in the image and make them more visible.
[Attach screenshot highlighting specific text]
```

### 3. Logo Updates
```
Can you replace the current logo with this new logo image?
[Provide logo file]
```

If unsatisfactory:
```
Please rollback the changes - it is horrible.
```

### 4. Feature Additions
```
Add automated email notifications for:
1. Enquiry form submissions (confirmation to user + alert to admin)
2. Newsletter subscriptions (welcome email to subscriber + notification to admin)

Use Firebase Cloud Functions and SendGrid.
```

### 5. Content Updates
```
Update the following text on the About page:
- Mission statement should say: [your new text]
- Goal section should emphasize: [your points]
```

### 6. Component Creation
```
Create a sticky "Apply Now" button that:
- Floats at the bottom-right
- Links to /enquiry
- Hides on the enquiry page itself
- Has a professional design matching our color scheme
```

### 7. Firebase Integration
```
Make the Contact form write to Firebase Firestore:
- Collection: 'enquiries'
- Fields: name, email, phone, message, timestamp
- Show success/error messages
- Clear form on success
```

### 8. Deployment
```
Build and deploy all changes to Firebase Hosting
```

### 9. Documentation
```
Create comprehensive documentation for this website including:
- Technical architecture
- Design system (colors, typography, spacing)
- Page-by-page content breakdown
- Component library
- Template creation guide for replicating this for other projects
- Effective prompts used

Store everything in a docs/ folder and commit to GitHub.
```

## Tips for Effective Prompts

### Be Specific
❌ "Make it look better"
✅ "Increase the font size of the hero description to 1.3rem and change the color to bright white (#f8fafc)"

### Provide Visual Context
❌ "Fix the navbar"
✅ "Here's a screenshot [attach]. The logo should fill the purple bar's height. Currently it's too small."

### Break Down Complex Requests
❌ "Build the entire website"
✅ Step 1: "Create the homepage with hero section"
✅ Step 2: "Add the program section with feature cards"
✅ Step 3: "Integrate Firebase for the contact form"

### Reference Previous Work
✅ "Similar to what you did for the About page, create a two-column layout for the Program page"

### Specify Deployment
✅ "Please deploy the changes so I can test them"

### Request Rollback When Needed
✅ "Please rollback the last change"

### Ask for Guidance
✅ "What do you recommend for automating email notifications? I want users to receive confirmation emails and I want to be notified of new submissions."

---

# Quick Start Template

## 30-Minute Setup for New Project

### Prerequisites
- Node.js installed
- Firebase account
- SendGrid account (for emails)

### Step 1: Clone & Setup (5 min)
```bash
git clone [repo] my-project
cd my-project
rm -rf .git && git init
npm install
```

### Step 2: Quick Branding (10 min)
1. Replace logo: `public/Logo_nda.png`
2. Find & replace:
   - "NextGen DON Academy" → "Your Company"
   - Phone: "+1 (248) 795-9750" → "Your Phone"
   - Email: "info@nextgendonacademy.com" → "Your Email"
   - Address: "995 N. Pontiac Trail..." → "Your Address"

3. Update colors in `src/styles/index.css`:
```css
--primary: #YOUR_COLOR;
--bg-magenta: #YOUR_COLOR;
```

### Step 3: Firebase Setup (10 min)
1. Create Firebase project
2. Copy config to `src/firebase.js`
3. Run: `firebase use --add`

### Step 4: Deploy (5 min)
```bash
npm run build
firebase deploy
```

### Done!
Your site is live. Customize content as needed.

---

## File Modification Checklist

### Must Change
- [ ] `public/Logo_nda.png` - Your logo
- [ ] `src/firebase.js` - Firebase config
- [ ] `src/components/Hero.jsx` - Headline & description
- [ ] `src/components/Footer.jsx` - Contact info
- [ ] `src/pages/Contact.jsx` - Phone, email, address

### Should Change
- [ ] `src/styles/index.css` - Brand colors
- [ ] All page content (mission, services, etc.)
- [ ] `functions/index.js` - Email templates (company name)
- [ ] Google Maps embeds (update location)

### Optional Change
- [ ] Fonts in `src/styles/index.css`
- [ ] Images in `public/`
- [ ] Testimonials data
- [ ] Feature cards content

---

## Common Customizations

### Change Primary Color
```css
/* src/styles/index.css */
:root {
  --primary: #FF6B00; /* Your new color */
}
```

### Add New Page
```bash
# 1. Create page component
touch src/pages/NewPage.jsx

# 2. Add route in src/App.jsx
<Route path="/new-page" element={<NewPage />} />

# 3. Add to navigation in src/components/Navbar.jsx
{ title: 'NEW PAGE', path: '/new-page' }
```

### Change Form Fields
Edit `src/pages/Contact.jsx` or `src/pages/Enquiry.jsx`:
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  yourNewField: '' // Add here
});

// Add input in JSX
<input
  name="yourNewField"
  placeholder="Your Label"
  value={formData.yourNewField}
  onChange={handleChange}
/>
```

### Modify Email Templates
Edit `functions/index.js`:
- Search for email HTML
- Update company name, branding, text
- Redeploy: `firebase deploy --only functions`

---

## Troubleshooting

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Firebase Deployment Issues
```bash
firebase login
firebase use --add
firebase deploy
```

### Email Not Sending
1. Check SendGrid API key: `firebase functions:config:get`
2. Verify sender email in SendGrid
3. Check function logs: `firebase functions:log`

---

## Next Steps After Template Setup

1. **Content:**
   - Write custom copy for all pages
   - Add real testimonials
   - Upload professional images

2. **SEO:**
   - Add meta tags
   - Create sitemap
   - Set up Google Analytics

3. **Features:**
   - Add blog/news section
   - Integrate payment (if needed)
   - Add chat widget

4. **Testing:**
   - Test all forms
   - Check mobile responsiveness
   - Verify email delivery

5. **Marketing:**
   - Connect domain
   - Set up email marketing
   - Create social media presence

---

**Documentation Version:** 1.0.0
**Last Updated:** January 2026
**Created with:** Claude Code (Anthropic)

For detailed technical specs, see:
- [WEBSITE_ARCHITECTURE.md](WEBSITE_ARCHITECTURE.md)
- [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)
