# NextGenDON Academy - Professional Learning Platform

A modern, professional learning management system built with Next.js 14, Firebase, and Tailwind CSS.

## Project Overview

NextGenDON Academy is a complete rebuild of the existing WordPress-based academy website, featuring:

- 🎨 Modern, professional design with improved UX/UI
- 📱 Fully responsive mobile-first design
- 🔥 Firebase backend (Authentication, Firestore, Storage)
- 💳 Stripe payment integration
- 🎓 Course enrollment and progress tracking
- 📊 Student dashboard
- 🔐 Secure authentication system
- ⚡ Fast performance with Next.js App Router

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **React 19** - Latest React features

### Backend & Services
- **Firebase Authentication** - User management
- **Cloud Firestore** - NoSQL database
- **Firebase Storage** - File and media storage
- **Stripe** - Payment processing
- **Firebase Hosting** - Production hosting

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **Turbopack** - Fast bundler (Next.js 16)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase account (free tier available)
- Stripe account (for payment processing)
- Git

### Installation

1. **Navigate to the project**
   ```bash
   cd d:\Charles_DON\ClaudeVersion_Don\nextgen-don-academy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy the example environment file:
   ```bash
   copy .env.local.example .env.local
   ```

   Then edit `.env.local` with your actual credentials:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # Stripe
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
nextgen-don-academy/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Homepage
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles & Tailwind
│   ├── courses/             # Course pages
│   ├── dashboard/           # Student dashboard
│   ├── login/               # Authentication pages
│   └── api/                 # API routes
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   │   └── Button.tsx
│   ├── layout/              # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MainLayout.tsx
│   ├── course/              # Course-related components
│   │   └── CourseCard.tsx
│   ├── dashboard/           # Dashboard components
│   └── auth/                # Auth components
├── lib/                     # Utilities and configurations
│   ├── firebase/            # Firebase configuration
│   │   └── config.ts
│   ├── utils/               # Utility functions
│   │   └── cn.ts
│   └── hooks/               # Custom React hooks
├── types/                   # TypeScript type definitions
│   └── index.ts
├── public/                  # Static assets
│   ├── images/
│   └── videos/
├── .env.local.example       # Environment variables template
├── package.json             # Dependencies
└── tsconfig.json            # TypeScript configuration
```

## Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Key Features

### ✅ Implemented

- [x] Modern homepage with hero section
- [x] Responsive navigation header
- [x] Professional footer with links
- [x] Course card component
- [x] Tailwind CSS design system
- [x] TypeScript types
- [x] Firebase configuration
- [x] Button component with variants

### 🚧 Next Steps

- [ ] Firebase Authentication integration
- [ ] User registration/login pages
- [ ] Course catalog page
- [ ] Course detail page
- [ ] Student dashboard
- [ ] Stripe payment integration
- [ ] Video player integration
- [ ] Progress tracking

## Documentation

- [Website Analysis](../WEBSITE_ANALYSIS.md) - Complete project analysis
- [Design Mockups](../DESIGN_MOCKUPS.md) - UI/UX design system
- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Stripe Documentation](https://stripe.com/docs)

## Development Server

The development server is currently running at [http://localhost:3000](http://localhost:3000)

To stop the server, press `Ctrl+C` in the terminal.

## Firebase Setup (Required)

See the [WEBSITE_ANALYSIS.md](../WEBSITE_ANALYSIS.md) for detailed Firebase setup instructions.

Quick steps:
1. Create Firebase project at https://console.firebase.google.com/
2. Enable Authentication (Email/Password, Google)
3. Create Firestore Database
4. Set up Storage
5. Copy config to `.env.local`

## Deployment to Firebase

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Deploy
npm run build
firebase deploy
```

---

**Built with** ❤️ **using Next.js, Firebase, and Tailwind CSS**

**Version**: 0.1.0 (Development)
**Last Updated**: 2026-01-01
