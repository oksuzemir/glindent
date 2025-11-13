# Asset Creation Checklist

## 🎨 Required Assets for Production

### PWA Icons (High Priority)
These are referenced in `public/manifest.json` and need to be created:

- [ ] **icon-192.png** (192x192px)
  - Purpose: PWA icon for mobile devices
  - Format: PNG with transparency
  - Content: Glindent logo on teal background (#3db8a4)
  - Location: `/public/icon-192.png`

- [ ] **icon-512.png** (512x512px)
  - Purpose: PWA icon for larger displays
  - Format: PNG with transparency
  - Content: Glindent logo on teal background (#3db8a4)
  - Location: `/public/icon-512.png`

### Favicon & Browser Icons (High Priority)

- [ ] **favicon.ico** (16x16, 32x32, 48x48 multi-size ICO)
  - Purpose: Browser tab icon
  - Format: ICO file (multi-resolution)
  - Content: Simplified Glindent logo
  - Location: `/public/favicon.ico`

- [ ] **apple-touch-icon.png** (180x180px)
  - Purpose: iOS home screen icon
  - Format: PNG (no transparency, white background)
  - Content: Glindent logo centered
  - Location: `/public/apple-touch-icon.png`

### Social Media Images (High Priority)

- [ ] **og-image.jpg** (1200x630px)
  - Purpose: Open Graph image for social media sharing
  - Format: JPG (optimized, < 300KB)
  - Content: Glindent branding + tagline + product showcase
  - Location: `/public/og-image.jpg`
  - Referenced in: `app/layout.tsx`

- [ ] **twitter-image.jpg** (1200x630px)
  - Purpose: Twitter Card image (can use same as OG image)
  - Format: JPG (optimized, < 300KB)
  - Content: Same as og-image or variant
  - Location: `/public/twitter-image.jpg`

### PWA Screenshots (Medium Priority)

- [ ] **screenshot-wide.png** (1280x720px)
  - Purpose: PWA screenshot for desktop/tablet
  - Format: PNG
  - Content: Homepage hero section screenshot
  - Location: `/public/screenshot-wide.png`

- [ ] **screenshot-narrow.png** (750x1334px)
  - Purpose: PWA screenshot for mobile
  - Format: PNG
  - Content: Mobile view of homepage
  - Location: `/public/screenshot-narrow.png`

### Product Images (High Priority - Replace Placeholders)

Current products need actual images in `/public/products/`:

1. [ ] **pre-shaded-zirconia.jpg** (1200x1200px)
   - Product: Pre Shaded (Super Translucency) Zirconia Disc
   - Format: JPG, optimized
   - Background: White or neutral
   - Content: High-quality product photo

2. [ ] **x-ray-film.jpg** (1200x1200px)
   - Product: Self-Developing X-Ray Film (x 25)
   - Format: JPG, optimized

3. [ ] **multi-layer-zirconia.jpg** (1200x1200px)
   - Product: Multi-Layer (Super High Translucency) Zirconia Disc
   - Format: JPG, optimized

4. [ ] **white-zirconia.jpg** (1200x1200px)
   - Product: White (High Translucency) Zirconia Disc
   - Format: JPG, optimized

5. [ ] **modelling-wax.jpg** (1200x1200px)
   - Product: Dental Modelling Wax
   - Format: JPG, optimized

6. [ ] **g-ceram-blocks.jpg** (1200x1200px)
   - Product: G-Ceram Blocks
   - Format: JPG, optimized

7. [ ] **universal-composite.jpg** (1200x1200px)
   - Product: Universal Composite Resin
   - Format: JPG, optimized

8. [ ] **bulk-fill-composite.jpg** (1200x1200px)
   - Product: Bulk Fill Composite
   - Format: JPG, optimized

9. [ ] **light-curing-composite.jpg** (1200x1200px)
   - Product: Light-Curing Composite
   - Format: JPG, optimized

### About Section Image (Currently Exists)

- [x] **modern-dental-laboratory-with-advanced-equipment.jpg**
  - Location: `/public/modern-dental-laboratory-with-advanced-equipment.jpg`
  - Status: Verify file exists or replace with actual photo

## 📐 Design Specifications

### Brand Colors
- **Primary Teal**: #3db8a4
- **Secondary Teal**: #2c8e8a
- **Background Dark**: #1e1e1e
- **Text Light**: #fafafa

### Logo Usage
- Use the Glindent logo from `components/glindent-logo.tsx`
- White variant on dark backgrounds
- Green variant on light backgrounds
- Include tagline: "WAY TO DENTISTRY"

### Image Optimization Guidelines

#### Product Photos
- **Resolution**: 1200x1200px (1:1 aspect ratio)
- **Format**: JPG (quality 85-90%)
- **File Size**: < 200KB after optimization
- **Background**: White (#FFFFFF) or subtle gradient
- **Lighting**: Bright, even lighting
- **Content**: Center product, minimal distractions
- **Alt Text**: Include in filename for reference

#### Icons & Favicons
- **Format**: PNG with alpha channel (except favicon.ico)
- **Padding**: 10-15% around logo for breathing room
- **Background**: Solid color (teal) or transparent
- **Corners**: Rounded for maskable icons
- **Safe Area**: Keep important elements in center 80%

#### Social Media Images
- **Aspect Ratio**: 1.91:1 (1200x630)
- **Text**: Large, readable from thumbnail
- **Branding**: Include logo prominently
- **CTA**: Optional call-to-action text
- **File Size**: < 300KB
- **Format**: JPG for photos, PNG for graphics

## 🛠️ Tools & Resources

### Image Creation
- **Adobe Photoshop** - Professional editing
- **Figma** - Design and prototyping
- **Canva** - Quick social media images
- **GIMP** - Free alternative to Photoshop

### Image Optimization
- **TinyPNG** (https://tinypng.com/) - PNG compression
- **ImageOptim** - Mac batch optimization
- **Squoosh** (https://squoosh.app/) - Web-based optimizer
- **Sharp** - Node.js image processing

### Icon Generation
- **Favicon Generator** (https://realfavicongenerator.net/)
- **App Icon Generator** (https://www.appicon.co/)
- **PWA Asset Generator** (https://github.com/elegantapp/pwa-asset-generator)

### Photography
- **Unsplash** (https://unsplash.com/) - Free stock photos
- **Pexels** (https://pexels.com/) - Free stock photos
- Consider hiring a product photographer for professional shots

## ✅ Quality Checklist

Before adding images to production:

### Technical
- [ ] Correct dimensions for each image type
- [ ] Optimized file size (< targets listed above)
- [ ] Correct format (JPG vs PNG)
- [ ] No copyright issues
- [ ] High resolution, not pixelated
- [ ] Consistent color profile (sRGB)

### Design
- [ ] Matches brand colors and style
- [ ] Professional quality
- [ ] Consistent lighting across product photos
- [ ] Clean, minimal backgrounds
- [ ] Product clearly visible
- [ ] Logo legible at small sizes

### SEO & Accessibility
- [ ] Descriptive filenames (product-name.jpg)
- [ ] Alt text prepared for images
- [ ] Optimized for fast loading
- [ ] Responsive (works at different sizes)

## 🚀 Deployment Steps

After creating all assets:

1. **Add to Repository**
   ```bash
   # Add icon files
   cp icons/* /public/
   
   # Add social images
   cp social-images/* /public/
   
   # Add product photos
   cp product-photos/* /public/products/
   ```

2. **Verify References**
   - Check `public/manifest.json` icon paths
   - Check `app/layout.tsx` OG image path
   - Check `lib/products.ts` product image paths

3. **Test Locally**
   ```bash
   npm run dev
   # Visit all pages and verify images load
   ```

4. **Test in Production**
   - Verify PWA icon appears when installing
   - Test social media previews
   - Check all product images load
   - Verify favicon in browser tab

5. **Validate**
   - Test PWA installation
   - Use Facebook Debugger for OG image
   - Use Twitter Card Validator
   - Check Lighthouse audit

## 📞 Need Help?

If creating assets yourself is not feasible:

### Hire a Designer
- **Fiverr** - Affordable icon/logo design
- **99designs** - Design contests
- **Upwork** - Freelance designers

### Use Stock Assets
- **Noun Project** - Icons (some free)
- **Flaticon** - Icon sets
- **Icons8** - Icons and photos

### Photography Services
- **Product Photo Services** - Many online services
- **Local Studios** - For professional product photography
- Consider dental supply manufacturer images (with permission)

---

**Priority**: Complete PWA icons and favicon first (users will see these immediately)  
**Timeline**: Aim to complete within 1-2 weeks for production launch  
**Budget**: Consider allocating $200-500 for professional product photography
