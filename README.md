# Notynox Engineering Limited — Website

A modern, SEO-optimised Next.js 14 website for Notynox Engineering Limited, featuring real construction photography, the company brand logo, dark/light mode, responsive design, and production-grade architecture.

The site is configured as a **static export** (`output: "export"`) so the build produces a plain folder of HTML/CSS/JS/images in `out/` that can be uploaded straight into a **cPanel `public_html`** directory — no Node.js server required. See **[Deploying to cPanel](#-deploying-to-cpanel)** below.

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

### 3. Build the static site

```bash
npm run build
```

This generates a ready-to-deploy static site in the **`out/`** folder.

## 🌐 Deploying to cPanel

The build output is completely static, so hosting it on cPanel shared hosting is simply a matter of uploading files.

1. **Build** the site locally: `npm run build`
2. Open **cPanel → File Manager** and go to your domain's document root (usually `public_html`).
3. Upload **the contents of the `out/` folder** (not the folder itself) into `public_html`.
   - Easiest way: zip the contents of `out/`, upload the zip, then **Extract** it inside `public_html`.
   - Make sure the hidden **`.htaccess`** file (included in `out/`) is uploaded too — in File Manager enable *Settings → Show Hidden Files (dotfiles)*.
4. Visit your domain — the site is live. Clean URLs like `/about/` and `/services/` work automatically.

**Notes**
- The included `.htaccess` sets a custom 404 page, gzip compression, caching, and security headers. To force HTTPS, uncomment the `RewriteRule` block inside it once your SSL certificate is active.
- Whenever you change content, re-run `npm run build` and re-upload the `out/` folder.
- Before going live, replace `https://notynox.co.ke` with your real domain (see [Customisation](#️-customisation)).

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
│   ├── Footer.tsx          # Footer with CTA + brand logo + links
│   ├── ThemeProvider.tsx   # Dark/light mode provider
│   ├── StructuredData.tsx  # JSON-LD for SEO
│   └── ScrollAnimations.tsx # Intersection Observer animations
├── public/
│   ├── images/             # Construction photography + brand logo
│   ├── .htaccess           # Apache/cPanel config (clean URLs, caching, headers)
│   ├── apple-touch-icon.png
│   └── og-image.jpg        # Social share image
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs         # output: "export" for static/cPanel hosting
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
| Home | `/` | Photographic hero, services, about strip, why us, sectors, fleet, CTA |
| About | `/about` | Company story, mission/vision, values, team, timeline |
| Services | `/services` | All 6 service areas with photos + detailed descriptions |
| Projects | `/projects` | Project case studies with category photos |
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

### Images
Real construction photography and the company logo live in **`public/images/`** and are referenced with root-absolute paths (e.g. `/images/hero-construction.jpg`). To swap a photo, replace the file in `public/images/` keeping the same filename, then re-build. Because the site is a static export, images are served as-is (no Next.js image optimisation server is used).

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
