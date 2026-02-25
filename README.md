# Notynox Engineering Limited — Website

A modern, SEO-optimised Next.js 14 website for Notynox Engineering Limited, featuring dark/light mode, responsive design, and production-grade architecture.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Dark Mode**: `next-themes`
- **Animations**: CSS animations + Intersection Observer
- **Fonts**: Playfair Display (display) + DM Sans (body) + DM Mono (mono)
- **SEO**: Next.js Metadata API, sitemap.xml, robots.txt, JSON-LD structured data

## 📦 Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
notynox/
├── app/
│   ├── layout.tsx          # Root layout with metadata & theme
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── projects/page.tsx   # Projects portfolio
│   ├── contact/page.tsx    # Contact page + enquiry form
│   ├── globals.css         # Global styles & CSS variables
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── Navbar.tsx          # Sticky navbar with mobile menu
│   ├── Footer.tsx          # Footer with CTA + links
│   ├── ThemeProvider.tsx   # Dark/light mode provider
│   ├── StructuredData.tsx  # JSON-LD for SEO
│   └── ScrollAnimations.tsx # Intersection Observer animations
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## 🎨 Design System

### Colours
- **Primary accent**: Orange (#ea580c / #f97316)
- **Dark background**: #0a0e17
- **Light background**: #fafaf8
- CSS variables for seamless dark/light mode switching

### Typography
- **Headings**: Playfair Display (serif, bold/black)
- **Body**: DM Sans (clean, modern)
- **Labels/mono**: DM Mono (technical details, tags)

## 🌐 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services overview, about strip, why us, fleet, CTA |
| About | `/about` | Company story, mission/vision, values, team, timeline |
| Services | `/services` | All 6 service areas with detailed descriptions |
| Projects | `/projects` | 9 project case studies with filters |
| Contact | `/contact` | Contact form, info, business hours |

## 🔍 SEO Features

- **Metadata API**: Title templates, descriptions, OG tags, Twitter cards
- **Structured Data**: Organization + LocalBusiness JSON-LD schemas
- **Sitemap**: Auto-generated `/sitemap.xml`
- **Robots**: Configured `/robots.txt`
- **Semantic HTML**: Proper heading hierarchy, landmark regions
- **Performance**: Next.js Image optimisation, font preloading

## ⚙️ Customisation

### Update Contact Info
Edit `components/Footer.tsx` and `app/contact/page.tsx`

### Update Domain
Replace all instances of `https://notynox.co.ke` with your actual domain in:
- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `components/StructuredData.tsx`

### Connect the Contact Form
The contact form in `app/contact/page.tsx` currently uses `mailto:`. For production, replace with:
- [Resend](https://resend.com) API (recommended for Next.js)
- [Formspree](https://formspree.io)
- Custom API route at `app/api/contact/route.ts`

### Add Real Images
Replace the decorative grid/pattern areas in the components with actual project images using Next.js `Image` component:
```tsx
import Image from "next/image";
<Image src="/images/project.jpg" alt="Project" fill className="object-cover" />
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px – 1024px
- Desktop: > 1024px

All pages are fully responsive and tested across breakpoints.

## 🌙 Dark / Light Mode

Default theme is **dark**. Users can toggle via the navbar button. Theme persists via `localStorage` through `next-themes`.

To change the default, edit `components/ThemeProvider.tsx`:
```tsx
defaultTheme="light"  // change from "dark"
```
