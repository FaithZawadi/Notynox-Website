/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in `out/` that can be uploaded directly to a
  // cPanel `public_html` folder (no Node server required).
  output: "export",

  // Emit `about/index.html` style pages so clean URLs work on Apache/cPanel.
  trailingSlash: true,

  // The static export has no image optimization server, so serve images as-is.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
