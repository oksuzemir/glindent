# Glindent - Premium Dental Supplies

[![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38bdf8)](https://tailwindcss.com/)

Modern, high-performance e-commerce website for premium dental supplies. Built with Next.js 15, featuring WebGL shaders, advanced animations, and comprehensive SEO optimization.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✨ Features

### Performance
- ⚡ **Next.js 15** with App Router and React Server Components
- 🖼️ **Optimized Images** - Automatic AVIF/WebP conversion with lazy loading
- 📦 **Code Splitting** - Dynamic imports for non-critical components
- 🎨 **WebGL Shaders** - GPU-accelerated background with graceful fallback
- 💾 **Compression** - Gzip compression enabled
- 🔒 **Security Headers** - Production-ready security configuration

### SEO & Discoverability
- 🔍 **Comprehensive SEO** - Meta tags, Open Graph, Twitter Cards
- 📊 **Structured Data** - JSON-LD Schema.org markup for products
- 🗺️ **Dynamic Sitemap** - Auto-generated from routes and products
- 🤖 **Robots.txt** - Optimized for search engine crawling
- 📱 **PWA Ready** - Installable with manifest.json

### User Experience
- 🎯 **Custom Cursor** - Magnetic interactions and smooth animations
- 🌊 **Horizontal Scroll** - Unique navigation with touch/wheel support
- 📱 **Fully Responsive** - Mobile-first design approach
- ♿ **Accessible** - Semantic HTML and ARIA labels
- ⚠️ **Error Handling** - Graceful error boundaries with recovery options
- ⏳ **Loading States** - Smooth loading animations

### UI Components
- 🎨 **shadcn/ui** - 30+ accessible components (New York style)
- 🔘 **Magnetic Buttons** - Interactive hover effects
- 📜 **Scroll Animations** - Intersection Observer-based reveals
- 🎞️ **Grain Overlay** - Texture for premium aesthetic
- 🎨 **Custom Logo** - SVG component with variants

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with SEO metadata
│   ├── page.tsx                # Homepage with horizontal scroll
│   ├── loading.tsx             # App loading state
│   ├── error.tsx               # Error boundary
│   ├── sitemap.ts              # Dynamic sitemap generator
│   ├── robots.ts               # Robots.txt configuration
│   └── products/[id]/
│       ├── page.tsx            # Product detail page
│       └── loading.tsx         # Product loading state
├── components/
│   ├── sections/               # Page sections (About, Products, etc.)
│   ├── ui/                     # shadcn/ui components
│   ├── custom-cursor.tsx       # Custom cursor component
│   ├── magnetic-button.tsx     # Interactive button
│   └── ...
├── lib/
│   ├── products.ts             # Product data and types
│   └── utils.ts                # Utility functions
├── hooks/
│   └── use-reveal.ts           # Scroll animation hook
└── public/
    ├── manifest.json           # PWA manifest
    └── products/               # Product images
```

## 🎨 Design System

### Colors
- **Primary**: Teal (#3db8a4)
- **Secondary**: Dark Teal (#2c8e8a)
- **Background**: Dark (#1e1e1e)
- **Foreground**: Off-white (#fafafa)

### Typography
- **Sans**: Geist (optimized, preloaded)
- **Mono**: Geist Mono (optimized, preloaded)

### Animations
- **Fast**: 300ms (hovers, toggles)
- **Medium**: 700ms (reveals, transforms)
- **Slow**: 1000ms (section reveals)

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.6
- **UI Library**: React 19.2.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.9
- **Components**: shadcn/ui (Radix UI)
- **Animations**: tw-animate-css
- **Graphics**: shaders (WebGL)
- **Analytics**: Vercel Analytics
- **Package Manager**: pnpm

## 📊 Performance Metrics

Current Lighthouse scores (target):
- **Performance**: 95+ ⚡
- **Accessibility**: 90+ ♿
- **Best Practices**: 100 ✅
- **SEO**: 100 🔍

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://glindent.co.uk
```

### Image Optimization
Images are automatically optimized. Supported formats:
- AVIF (preferred)
- WebP (fallback)
- PNG/JPG (original)

### SEO Configuration
Update metadata in `app/layout.tsx`:
- Site title and description
- Open Graph images
- Twitter handle
- Canonical URL

## 📱 Progressive Web App

The site is PWA-ready. To enable offline support:

1. Add service worker
2. Update `manifest.json` with your icons
3. Test with Lighthouse PWA audit

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Custom Server
```bash
# Build
pnpm build

# Start
pnpm start
```

## 📝 Product Management

### Adding a Product
Edit `lib/products.ts`:

```typescript
{
  id: "product-slug",
  name: "Product Name",
  price: "£99.00",
  image: "/products/image.jpg",
  description: "Short description",
  detailedDescription: "Long description",
  colors: [
    { name: "Color", hex: "#hexcode" }
  ],
  specifications: [
    { label: "Spec", value: "Value" }
  ],
  shipping: {
    standard: "3-5 days - £5.99",
    express: "1-2 days - £12.99",
    freeShippingThreshold: "Orders over £100"
  }
}
```

## 🧪 Testing

```bash
# Type checking
pnpm tsc --noEmit

# Linting
pnpm lint

# Build test
pnpm build
```

## 📚 Documentation

See `copilot-instructions.md` for comprehensive documentation including:
- Complete feature list
- Component architecture
- Development guidelines
- Performance best practices
- SEO checklist

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

Proprietary - Glindent © 2025

## 📞 Contact

- **Email**: info@glindent.co.uk
- **Phone**: 01202 402675, 07717 886717
- **Address**: Bourne House, 23 Hinton Road, Bournemouth, BH1 2EF

---

Built with ❤️ for dental professionals
