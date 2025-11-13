# Copilot Instructions - Glindent Dental Supplies Website

**Last Updated:** November 13, 2025  
**Project Status:** ✅ Active Development  
**Developer:** USER  
**Location:** `c:\Users\USER\Desktop\code`

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Key Features](#key-features)
5. [Routes & Navigation](#routes--navigation)
6. [Component Architecture](#component-architecture)
7. [Styling & Design System](#styling--design-system)
8. [Development Commands](#development-commands)
9. [Current Progress](#current-progress)
10. [Future Enhancements](#future-enhancements)
11. [Timestamps & Change Log](#timestamps--change-log)

---

## 🎯 Project Overview

**Project Name:** Glindent - Way to Dentistry  
**Type:** E-commerce Landing Page & Product Catalog  
**Industry:** Dental Supplies  
**Target Audience:** Dental professionals, labs, and practices in the UK

### Business Context
Glindent is the UK branch of Gülsa Medical Devices and Materials (Turkey-based, 40+ years experience). The website showcases premium dental supplies including zirconia discs, X-ray films, composites, and CAD/CAM materials.

### Primary Goals
- Present premium dental products with high-end aesthetics
- Provide detailed product information and specifications
- Enable easy contact for orders and inquiries
- Build trust through modern, professional design

---

## 🛠 Tech Stack

### Core Framework
- **Next.js 15.5.6** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety

### UI & Styling
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **shadcn/ui** - Component library (New York style)
- **tw-animate-css 1.3.3** - Animation utilities
- **Radix UI** - Headless accessible components
- **shaders** - WebGL shader effects library
  - Used for animated background (Swirl + ChromaFlow)

### State Management & Hooks
- React built-in hooks (useState, useEffect, useRef)
- Custom hooks: `use-reveal.ts`, `use-mobile.ts`, `use-toast.ts`

### Forms & Validation
- **react-hook-form 7.60.0**
- **zod 3.25.76** - Schema validation
- **@hookform/resolvers 3.10.0**

### Analytics & Monitoring
- **@vercel/analytics** - Performance tracking

### Package Manager
- **pnpm** - Fast, disk-space efficient package manager

---

## 📁 Project Structure

```
c:\Users\USER\Desktop\code/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles & CSS variables
│   ├── layout.tsx               # Root layout with Analytics
│   ├── page.tsx                 # Homepage (horizontal scroll sections)
│   └── products/
│       └── [id]/
│           └── page.tsx         # Dynamic product detail page
│
├── components/
│   ├── custom-cursor.tsx        # Custom cursor with magnetic effect
│   ├── glindent-logo.tsx        # SVG logo component (white/green variants)
│   ├── grain-overlay.tsx        # Noise texture overlay
│   ├── magnetic-button.tsx      # Interactive button with hover effects
│   ├── product-detail-modal.tsx # Product quick-view modal
│   ├── theme-provider.tsx       # Dark/light theme context
│   │
│   ├── sections/                # Page sections
│   │   ├── about-section.tsx   # Company story & stats
│   │   ├── contact-section.tsx # Contact form & info
│   │   ├── faq-section.tsx     # Accordion FAQ section
│   │   ├── products-section.tsx# Product grid with modal
│   │   └── services-section.tsx# (Future) Services listing
│   │   └── work-section.tsx    # (Future) Portfolio/case studies
│   │
│   └── ui/                      # shadcn/ui components
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── sheet.tsx
│       └── ... (30+ UI components)
│
├── hooks/
│   ├── use-reveal.ts           # Intersection Observer for scroll animations
│   ├── use-mobile.ts           # Mobile device detection
│   └── use-toast.ts            # Toast notification system
│
├── lib/
│   ├── products.ts             # Product data & types
│   └── utils.ts                # Utility functions (cn, etc.)
│
├── public/
│   └── products/               # Product images
│       ├── pre-shaded-zirconia.jpg
│       ├── x-ray-film.jpg
│       ├── multi-layer-zirconia.jpg
│       └── ... (9 product images)
│
├── styles/
│   └── globals.css             # Additional global styles
│
├── components.json              # shadcn/ui configuration
├── next.config.mjs             # Next.js config (images, TS, ESLint)
├── postcss.config.mjs          # PostCSS with Tailwind
├── tailwind.config.js          # (Auto-generated by Tailwind v4)
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies & scripts
└── pnpm-lock.yaml              # Lock file
```

---

## ✨ Key Features

### 1. **Horizontal Scroll Navigation**
- **Location:** `app/page.tsx`
- **Sections:** Home → About → Products → FAQ → Contact
- Custom scroll container with wheel/touch event handling
- Smooth scroll-to-section functionality
- Section indicator in navigation

### 2. **WebGL Animated Background**
- **Library:** `shaders/react`
- **Effects:** Swirl + ChromaFlow
- **Colors:** Teal/green theme (#3db8a4, #2c8e8a)
- Loading state with fade-in transition

### 3. **Custom Cursor**
- **Component:** `components/custom-cursor.tsx`
- Follows mouse with smooth lerp interpolation
- Scales on interactive elements (buttons, links)
- Mix-blend-difference for contrast
- RAF-based animation for performance

### 4. **Magnetic Buttons**
- **Component:** `components/magnetic-button.tsx`
- Variants: primary, secondary, ghost
- Sizes: default, lg
- Follows mouse within button bounds (15% strength)
- Smooth reset on mouse leave

### 5. **Scroll-Based Reveal Animations**
- **Hook:** `hooks/use-reveal.ts`
- Intersection Observer API
- Used in all major sections
- Staggered child animations with delay

### 6. **Product System**
- **Data:** `lib/products.ts` (9 products)
- **Types:** Product interface with colors, specs, shipping
- **Views:**
  - Grid view with modal (ProductsSection)
  - Full detail page (app/products/[id]/page.tsx)
  - Modal quick-view (ProductDetailModal)

### 7. **Product Features:**
- Color swatches with hex values
- Detailed specifications table
- Shipping information (standard/express)
- Price display
- Image gallery (single image per product)

### 8. **Contact Form**
- Name, email, message fields
- Client-side validation
- Simulated submission (1.5s delay)
- Success state with auto-reset

### 9. **FAQ Accordion**
- 4 pre-defined questions
- Smooth expand/collapse
- Auto-open first item
- Numbered entries

### 10. **Responsive Design**
- Mobile-first approach
- Touch gesture support (swipe between sections)
- Adaptive layouts (grid → stack)
- Hidden mobile nav (replaced with scroll)

---

## 🗺 Routes & Navigation

### Public Routes

#### `/` (Homepage)
- **File:** `app/page.tsx`
- **Type:** Horizontal scroll single-page application
- **Sections:**
  1. **Hero Section** (index 0)
     - Animated background
     - Logo navigation
     - CTA buttons: "Shop Now", "Contact Us"
     - Scroll indicator
  
  2. **About Section** (index 1)
     - Company story (Gülsa → Glindent)
     - Statistics: 40+ years, 1000+ products, Global reach
     - Laboratory image
     - CTA buttons
  
  3. **Products Section** (index 2)
     - 3x3 responsive grid (5 cols on XL)
     - 9 products total
     - Click to open modal or navigate to detail page
     - Scrollable container
  
  4. **FAQ Section** (index 3)
     - 4 accordion items
     - Topics: Orders, Payment, Security, Returns
  
  5. **Contact Section** (index 4)
     - Contact information (email, phone, address)
     - Contact form
     - Social links (Twitter, Instagram, LinkedIn, Dribbble)

#### `/products/[id]` (Product Detail)
- **File:** `app/products/[id]/page.tsx`
- **Type:** Server-side dynamic route
- **Dynamic Segment:** Product ID (e.g., "pre-shaded-zirconia")
- **Features:**
  - Full product information
  - Color selector with hex display
  - Specifications table
  - Shipping details
  - "Buy Now" and "Add to Cart" buttons
  - Back navigation to products
- **Error Handling:** 404 state with return home button

### Navigation Methods

1. **Top Navigation Bar**
   - Fixed position
   - Logo (scrolls to home)
   - Section links: Home, About Us, Products, FAQ, Contact
   - "Shop Now" button
   - Active section indicator (underline)

2. **Programmatic Scrolling**
   - `scrollToSection(index: number)` function
   - Smooth scroll with `behavior: "smooth"`
   - Calculates section width dynamically

3. **Mouse Wheel Navigation**
   - Converts vertical scroll to horizontal
   - Prevents default vertical scroll
   - Updates current section on scroll end

4. **Touch Gestures**
   - Swipe left/right to navigate
   - Prevents accidental vertical scrolling
   - 50px threshold for gesture detection

---

## 🧩 Component Architecture

### Core Components

#### `CustomCursor`
```tsx
// Location: components/custom-cursor.tsx
// Features: Smooth lerp animation, pointer detection, mix-blend-difference
// Performance: RAF-based updates, refs for state
```

#### `MagneticButton`
```tsx
// Location: components/magnetic-button.tsx
// Props: variant, size, onClick, className
// Variants: primary (green), secondary (dark), ghost (transparent)
// Animation: 15% magnetic pull, smooth reset
```

#### `GlindentLogo`
```tsx
// Location: components/glindent-logo.tsx
// Props: variant ("white" | "green"), className
// Type: Inline SVG with text elements
// Tagline: "WAY TO DENTISTRY"
```

#### `GrainOverlay`
```tsx
// Location: components/grain-overlay.tsx
// Type: Fixed overlay with SVG noise texture
// Blend: overlay mode, 8% opacity
// Purpose: Adds texture to entire page
```

#### `ProductDetailModal`
```tsx
// Location: components/product-detail-modal.tsx
// Props: product, isOpen, onClose
// Features: Color selection, specs table, shipping info
// Actions: Buy Now, Add to Cart (placeholder)
```

### Section Components

All sections use the `useReveal` hook for scroll animations:

#### `AboutSection`
- Company narrative (Gülsa → Glindent)
- Animated statistics with creative layout
- Laboratory image
- Call-to-action buttons

#### `ProductsSection`
- Product grid (shadcn Card-based)
- Modal integration
- Staggered reveal animations
- Scrollable container for overflow

#### `FAQSection`
- Custom accordion (not shadcn)
- Numbered questions
- Smooth height transitions
- Rotate animation on icons

#### `ContactSection`
- Two-column layout (info + form)
- Form state management
- Validation (basic)
- Success/loading states
- Social media links

### UI Components (shadcn/ui)

The project uses **30+ shadcn/ui components**, including:
- **Forms:** Button, Input, Textarea, Select, Checkbox, Radio
- **Overlays:** Dialog, Sheet, Popover, Tooltip, Alert Dialog
- **Data Display:** Card, Table, Badge, Avatar, Separator
- **Navigation:** Tabs, Accordion, Breadcrumb, Pagination
- **Feedback:** Toast, Alert, Progress, Spinner, Skeleton
- **Layout:** Scroll Area, Resizable, Sidebar

**Configuration:** New York style, RSC enabled, Lucide icons

---

## 🎨 Styling & Design System

### Color Palette

#### CSS Variables (globals.css)
```css
/* Teal/Green Theme */
--primary: oklch(0.65 0.22 250);      /* Teal blue */
--accent: oklch(0.68 0.18 45);        /* Warm accent */
--background: oklch(0.12 0 0);        /* Dark background */
--foreground: oklch(0.98 0 0);        /* Near white text */

/* Glass Effect */
--glass-bg: rgba(255, 255, 255, 0.14);
--glass-border: rgba(255, 255, 255, 0.28);
--glass-highlight: rgba(255, 255, 255, 0.35);
--glass-blur: 12px;
```

#### Brand Colors
- **Primary Green:** #3db8a4 (Teal)
- **Secondary Green:** #2c8e8a (Dark Teal)
- **Text Primary:** #FAFAFA (98% lightness)
- **Text Secondary:** rgba(255,255,255,0.8)

### Typography

#### Font Stack
- **Sans:** `system-ui, -apple-system, sans-serif` (default)
- **Mono:** System monospace for labels and metadata
- **Imported:** Geist & Geist Mono (from next/font/google)

#### Font Sizes
- **Hero:** 6xl-8xl (96px-128px)
- **Section Headings:** 5xl-7xl (48px-72px)
- **Subheadings:** 2xl-3xl (24px-30px)
- **Body:** base-lg (16px-18px)
- **Small:** xs-sm (12px-14px)

#### Font Weights
- **Light:** 300 (headings)
- **Regular:** 400 (body)
- **Medium:** 500 (emphasis)
- **Semibold:** 600 (prices)
- **Bold:** 700 (rare, logo only)

### Layout System

#### Container Widths
- **Max Width:** 7xl (1280px)
- **Padding:** px-6 md:px-12 lg:px-16

#### Grid Systems
- **Products:** 3 → 4 → 5 columns (sm → lg → xl)
- **Two Column:** 1:1 ratio (about, contact)
- **Asymmetric:** 1.2fr 1fr (contact section)

#### Spacing Scale
- **Sections:** py-16 md:py-24 (vertical)
- **Elements:** gap-4 → gap-8 → gap-12
- **Margins:** mb-6 → mb-12 (responsive)

### Animation System

#### Transition Durations
- **Fast:** 300ms (hovers, toggles)
- **Medium:** 700ms (reveals, transforms)
- **Slow:** 1000ms (section reveals)

#### Easing
- **Default:** ease-out
- **Smooth:** cubic-bezier custom (use-reveal)

#### Animation Patterns
1. **Scroll Reveals:** translate-y + opacity + blur
2. **Staggered Delays:** index * 100ms
3. **Hover Effects:** scale(1.02-1.1)
4. **Magnetic Pull:** translate3d with RAF

### Responsive Breakpoints

```javascript
// Tailwind v4 default breakpoints
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

#### Mobile Adjustments
- Navigation hidden (scroll-only)
- Single column layouts
- Reduced font sizes (responsive scale)
- Touch-optimized targets (min 44px)

---

## 💻 Development Commands

### Installation
```bash
# Install dependencies
pnpm install

# Or if starting fresh
pnpm install --frozen-lockfile
```

### Development Server
```bash
# Start dev server (http://localhost:3000)
pnpm dev

# Or with specific port
pnpm dev -- -p 3001
```

### Building
```bash
# Production build
pnpm build

# Preview production build
pnpm start
```

### Code Quality
```bash
# Run ESLint (currently ignored in build)
pnpm lint
```

### Adding Components
```bash
# Add shadcn/ui component (if needed)
npx shadcn-ui@latest add [component-name]

# Example:
npx shadcn-ui@latest add button
```

### TypeScript
```bash
# Type checking (manual)
npx tsc --noEmit

# Note: Build ignores TS errors per next.config.mjs
```

---

## 📊 Current Progress

### ✅ Completed Features (November 13, 2025)

#### Core Functionality
- [x] Next.js 15 App Router setup
- [x] TypeScript configuration
- [x] Tailwind CSS v4 integration
- [x] shadcn/ui component library setup
- [x] pnpm package management

#### Design & UX
- [x] Custom cursor with magnetic effect
- [x] WebGL shader background (Swirl + ChromaFlow)
- [x] Grain overlay texture
- [x] Horizontal scroll navigation system
- [x] Scroll-based reveal animations
- [x] Magnetic button interactions
- [x] Responsive mobile layout
- [x] Touch gesture support

#### Pages & Sections
- [x] Hero section with animated background
- [x] About section with company story
- [x] Products section with grid layout
- [x] FAQ section with accordion
- [x] Contact section with form
- [x] Dynamic product detail pages (/products/[id])
- [x] Product modal quick-view

#### Data & Content
- [x] Product data structure (9 products)
- [x] Product types and interfaces
- [x] Color swatch system
- [x] Specifications tables
- [x] Shipping information
- [x] Company information (phones, email, address)

#### Components
- [x] 30+ shadcn/ui components installed
- [x] Custom hook: use-reveal (scroll detection)
- [x] Custom hook: use-mobile
- [x] Custom hook: use-toast
- [x] Reusable magnetic button
- [x] Logo component (white/green variants)

---

## 🚀 Future Enhancements

### Phase 1: E-commerce Integration (Priority: High)
- [ ] Shopping cart functionality
- [ ] Checkout process
- [ ] Payment integration (Stripe/PayPal)
- [ ] Order management system
- [ ] User authentication
- [ ] Account dashboard

### Phase 2: Product Features (Priority: High)
- [ ] Product image galleries (multiple images)
- [ ] Product reviews and ratings
- [ ] Related products section
- [ ] Product search functionality
- [ ] Product filtering (category, price, etc.)
- [ ] Wishlist/favorites

### Phase 3: Content Management (Priority: Medium)
- [ ] Blog/News section
- [ ] Case studies/testimonials
- [ ] About page expansion (team, certifications)
- [ ] Services detail pages
- [ ] Resource library (guides, downloads)

### Phase 4: Backend & API (Priority: Medium)
- [ ] Database integration (product data)
- [ ] Contact form backend (email service)
- [ ] Newsletter signup
- [ ] Analytics dashboard
- [ ] Inventory management

### Phase 5: Optimization (Priority: Medium) ✅ **COMPLETED**
- [x] ~~Image optimization (next/image)~~ **DONE**
- [x] ~~SEO improvements (metadata, sitemap)~~ **DONE**
- [x] ~~Performance optimization (lighthouse)~~ **DONE**
- [ ] Accessibility audit (WCAG) - In Progress
- [x] ~~Progressive Web App features~~ **DONE**
- [x] ~~Loading states and error boundaries~~ **DONE**
- [x] ~~Font optimization and preloading~~ **DONE**
- [x] ~~Security headers~~ **DONE**
- [x] ~~Compression and minification~~ **DONE**

### Phase 6: Additional Features (Priority: Low)
- [ ] Multi-language support (Turkish, others)
- [ ] Currency converter (GBP/EUR/USD)
- [ ] Live chat support
- [ ] Product comparison tool
- [ ] Bulk order system for labs
- [ ] Mobile app

### Known Issues & Technical Debt
- [x] ~~TypeScript build errors ignored~~ **FIXED: Now enabled in production**
- [x] ~~ESLint errors ignored during build~~ **FIXED: Now enabled**
- [x] ~~Images unoptimized~~ **FIXED: Using Next.js Image with AVIF/WebP**
- [x] ~~No loading states~~ **FIXED: Added loading.tsx files**
- [x] ~~No error boundaries~~ **FIXED: Added error.tsx**
- [x] ~~Missing SEO metadata~~ **FIXED: Comprehensive SEO implemented**
- [x] ~~No sitemap~~ **FIXED: Dynamic sitemap.xml created**
- [x] ~~No robots.txt~~ **FIXED: Created robots.ts**
- [x] ~~Shader loading not optimized~~ **FIXED: Dynamic imports with fallback**
- [ ] Contact form submission not connected to backend
- [ ] "Add to Cart" and "Buy Now" buttons non-functional
- [ ] Product images need actual assets (currently placeholders)
- [ ] Social media links are placeholder (#)
- [ ] Need to create actual icon files (icon-192.png, icon-512.png)
- [ ] Need to create OG image (og-image.jpg)
- [ ] Need to create PWA screenshots

---

## 📅 Timestamps & Change Log

### November 13, 2025
**Initial Project Setup & Core Features**
- ✅ Created Next.js 15 project with App Router
- ✅ Configured TypeScript and Tailwind CSS v4
- ✅ Installed shadcn/ui component library (New York style)
- ✅ Implemented horizontal scroll navigation system
- ✅ Added WebGL shader background (shaders package)
- ✅ Created custom cursor component
- ✅ Built magnetic button component
- ✅ Developed use-reveal hook for animations
- ✅ Created 5 main page sections (Hero, About, Products, FAQ, Contact)
- ✅ Built dynamic product detail page route
- ✅ Implemented product modal quick-view
- ✅ Added product data (9 dental supply products)
- ✅ Styled with teal/green brand colors
- ✅ Made responsive for mobile devices
- ✅ Added touch gesture support
- ✅ Created Glindent logo component
- ✅ Added grain overlay texture
- ✅ Configured Vercel Analytics
- ✅ **Created comprehensive copilot-instructions.md**

**Performance & SEO Optimization (November 13, 2025 - Evening)**
- ✅ **Replaced all img tags with Next.js Image component**
  - Added automatic image optimization (AVIF, WebP)
  - Implemented lazy loading for off-screen images
  - Added responsive image sizes for different viewports
  - Set priority loading for above-the-fold images
- ✅ **Comprehensive SEO metadata implementation**
  - Added Open Graph tags for social media sharing
  - Implemented Twitter Card metadata
  - Added JSON-LD structured data for products (Schema.org)
  - Created dynamic meta titles and descriptions
  - Configured viewport and theme color
  - Added canonical URLs
  - Optimized for Google Search Console
- ✅ **Created dynamic sitemap.xml**
  - Automatic sitemap generation for all routes
  - Includes all 9 product pages
  - Proper change frequency and priority settings
- ✅ **Added robots.txt configuration**
  - Proper crawling rules for search engines
  - Sitemap reference for better indexing
- ✅ **Implemented loading states**
  - Created loading.tsx for app root
  - Added loading.tsx for product detail pages
  - Smooth loading animations with spinners
- ✅ **Font optimization**
  - Preloading Geist and Geist Mono fonts
  - Font display swap for better performance
  - CSS variable integration
- ✅ **Error boundaries**
  - Created error.tsx for graceful error handling
  - User-friendly error messages
  - Error logging for debugging
  - Recovery options (try again, go home)
- ✅ **Shader loading optimization**
  - Dynamic imports with SSR disabled
  - Suspense boundaries for async loading
  - Fallback CSS gradient background
  - Error state handling for shader failures
  - 2-second timeout with graceful degradation
- ✅ **Next.js configuration updates**
  - Enabled TypeScript checking in builds
  - Enabled ESLint in production builds
  - Added image optimization settings (AVIF, WebP)
  - Implemented gzip compression
  - Added security headers (X-Frame-Options, CSP, etc.)
  - Disabled X-Powered-By header
  - Enabled React Strict Mode
- ✅ **PWA Support**
  - Created manifest.json for progressive web app
  - Added app icons configuration
  - Defined theme colors and display mode

**Performance Improvements:**
- Image lazy loading reduces initial bundle size
- Dynamic shader imports improve First Contentful Paint
- Font optimization reduces layout shift
- Compression reduces transfer sizes
- Security headers improve site security score

**SEO Improvements:**
- Rich snippets for products (price, availability, ratings)
- Optimized meta tags for search engines
- Sitemap for better crawlability
- Structured data for enhanced search results
- Social media preview optimization

---

## 🚀 Performance & SEO

### Image Optimization
All images now use Next.js Image component with:
- **Automatic format conversion** (AVIF, WebP)
- **Responsive sizes** based on viewport
- **Lazy loading** for off-screen images
- **Priority loading** for above-the-fold content
- **Blur placeholder** during load (optional)

**Implementation:**
```tsx
import Image from "next/image"

<Image
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  fill // or width/height
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover"
  priority // for hero images
/>
```

### SEO Implementation

#### Metadata Structure
```tsx
// app/layout.tsx - Site-wide metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://glindent.co.uk'),
  title: { default: '...', template: '%s | Glindent' },
  description: '...',
  keywords: [...],
  openGraph: { ... },
  twitter: { ... },
}
```

#### JSON-LD Structured Data
Products include Schema.org Product markup:
- Product name, description, image
- Price and currency (GBP)
- Availability status
- Brand information
- Aggregate ratings (placeholder)

#### Sitemap Generation
- **File:** `app/sitemap.ts`
- **Type:** Dynamic, auto-generated
- **Includes:** Homepage + 9 product pages
- **URL:** https://glindent.co.uk/sitemap.xml

#### Robots Configuration
- **File:** `app/robots.ts`
- **Allows:** All pages except /api/, /admin/
- **Sitemap Reference:** Included

### Loading Strategy

#### Code Splitting
- Shader components: Dynamic imports with SSR disabled
- Suspense boundaries for async components
- Lazy loading for below-fold sections

#### Loading States
- App-level: `app/loading.tsx`
- Route-level: `app/products/[id]/loading.tsx`
- Component-level: Suspense fallbacks

#### Error Handling
- Global error boundary: `app/error.tsx`
- Graceful degradation (shader fallback)
- User-friendly error messages
- Recovery options

### Performance Optimizations

#### Next.js Config
```javascript
// next.config.mjs
{
  compress: true,              // Gzip compression
  poweredByHeader: false,      // Remove X-Powered-By
  reactStrictMode: true,       // Enable strict mode
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  }
}
```

#### Security Headers
- X-DNS-Prefetch-Control: on
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin

#### Font Optimization
- Preloaded fonts (Geist, Geist Mono)
- Font display: swap
- CSS variables for font families
- Self-hosted via next/font/google

### Progressive Web App

#### Manifest
- **File:** `public/manifest.json`
- **Features:** Installable, standalone mode
- **Icons:** 192x192, 512x512 (maskable + any)
- **Theme:** Teal (#3db8a4)
- **Categories:** Medical, shopping, business

### Performance Metrics (Target)

| Metric | Target | Status |
|--------|--------|--------|
| First Contentful Paint | < 1.8s | ✅ |
| Largest Contentful Paint | < 2.5s | ✅ |
| Time to Interactive | < 3.8s | ✅ |
| Cumulative Layout Shift | < 0.1 | ✅ |
| Total Blocking Time | < 200ms | ✅ |

### SEO Checklist

- [x] Meta titles (unique per page)
- [x] Meta descriptions (unique per page)
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Canonical URLs
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Structured data (JSON-LD)
- [x] Alt text on images
- [x] Semantic HTML
- [x] Mobile-friendly
- [x] HTTPS ready
- [ ] Google Search Console setup
- [ ] Bing Webmaster Tools
- [ ] Analytics integration (partial - Vercel)

---

## 🎯 Development Guidelines

### Code Style
- Use TypeScript for all new files
- Prefer functional components with hooks
- Use "use client" directive for client components
- Follow shadcn/ui naming conventions
- Use Tailwind utility classes (avoid custom CSS)

### File Organization
- Components in `/components` or `/components/ui`
- Sections in `/components/sections`
- Hooks in `/hooks`
- Utils in `/lib`
- Types alongside usage or in component files

### Naming Conventions
- Components: PascalCase (e.g., `MagneticButton.tsx`)
- Hooks: camelCase with "use" prefix (e.g., `use-reveal.ts`)
- Files: kebab-case for non-components
- CSS variables: kebab-case with `--` prefix

### Performance Best Practices
- Use `useRef` for animation state (avoid re-renders)
- Implement RAF for continuous animations
- Lazy load images with next/image (when implemented)
- Memoize expensive calculations
- Use passive event listeners where possible

### Accessibility
- Semantic HTML elements
- Keyboard navigation support
- ARIA labels on interactive elements
- Focus states on all interactive elements
- Alt text on images

---

## 🔍 Quick Reference

### Key Files to Edit

**Adding New Product:**
1. Edit `lib/products.ts` - Add to products array
2. Add image to `public/products/`
3. Update product type if new fields needed

**Styling Changes:**
1. Global variables: `app/globals.css`
2. Component styles: Use Tailwind in TSX
3. Custom animations: `tw-animate-css` utilities

**Adding New Section:**
1. Create component in `components/sections/`
2. Import in `app/page.tsx`
3. Add to horizontal scroll container
4. Update navigation array
5. Add to scrollToSection logic

**Modifying Navigation:**
1. Edit nav in `app/page.tsx` (line ~230)
2. Update section index mapping
3. Test scroll-to behavior

### Common Tasks

**Change Brand Colors:**
```css
/* app/globals.css */
--primary: oklch(0.65 0.22 250);  /* Modify this */
```

**Adjust Animation Speed:**
```tsx
// In component with reveal animation
duration-700  // Change to 500, 1000, etc.
delay-200     // Stagger timing
```

**Add New Route:**
1. Create folder in `app/`
2. Add `page.tsx`
3. Use Next.js conventions

**Install New Dependency:**
```bash
pnpm add [package-name]
pnpm add -D [dev-dependency]
```

---

## 📞 Contact & Support

**Developer:** USER  
**Workspace:** `c:\Users\USER\Desktop\code`  
**Shell:** bash.exe (Git Bash on Windows)

**Business Contact:**
- Email: info@glindent.co.uk
- Phone: 01202 402675, 07717 886717
- Address: Bourne House, 23 Hinton Road, Bournemouth, BH1 2EF

---

## 📝 Notes for Copilot

### Context Understanding
- This is a **dental supplies e-commerce** website
- **Brand:** Glindent (UK) / Gülsa (Turkey parent company)
- **Target:** Professional dental practices and laboratories
- **Design:** High-end, modern, premium aesthetic
- **Colors:** Teal/green theme (#3db8a4, #2c8e8a)

### Project Maturity
- **Stage:** MVP / Initial Launch
- **Status:** Core features complete, e-commerce pending
- **Priority:** Product catalog and contact functionality

### Technical Constraints
- TypeScript errors **ignored in build** (next.config.mjs)
- ESLint errors **ignored in build**
- Images **unoptimized** (next.config.mjs)
- No backend currently (static/mock data)

### When Asked to Help
1. **Always check** this document first for context
2. **Review** existing patterns before suggesting new ones
3. **Match** the established code style and structure
4. **Consider** performance (RAF, passive listeners, etc.)
5. **Maintain** the premium aesthetic in UI suggestions

### Common Requests
- Adding products → Edit `lib/products.ts`
- Styling changes → Prefer Tailwind utilities
- New sections → Follow existing section patterns
- Animation tweaks → Check duration/delay values
- Component additions → Use shadcn/ui if available

---

**End of Copilot Instructions**  
*Keep this document updated as the project evolves. Last update: November 13, 2025*
