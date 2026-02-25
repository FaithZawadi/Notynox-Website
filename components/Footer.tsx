import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Construction,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

const services = [
  "Civil & Structural Engineering",
  "Road Works & Infrastructure",
  "Building Construction",
  "Water & Plumbing Engineering",
  "Scaffolding Solutions",
  "Heavy Equipment Hire",
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border)] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* CTA Banner */}
      <div className="relative border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="section-label mb-2">Ready to Build?</div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                Let's engineer your vision into reality
              </h2>
            </div>
            <div className="flex gap-3">
              <Link href="/contact" className="btn-primary whitespace-nowrap">
                Start a Project <ArrowRight size={16} />
              </Link>
              <a href="tel:+254720843234" className="btn-outline whitespace-nowrap text-[var(--text-primary)] border-[var(--border)]">
                <Phone size={16} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-orange-600 flex items-center justify-center rotate-12">
                <span className="text-white font-black -rotate-12">N</span>
              </div>
              <div>
                <div className="font-display font-bold text-lg text-[var(--text-primary)]">NOTYNOX</div>
                <div className="text-[9px] font-mono tracking-widest uppercase text-[var(--text-muted)]">
                  Engineering Limited
                </div>
              </div>
            </Link>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              Incorporated in 2013, Notynox Engineering delivers world-class civil 
              engineering and construction solutions across Kenya and East Africa.
            </p>
            <div className="flex items-center gap-1 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-[var(--text-muted)]">Est. September 2013 · Nairobi, Kenya</span>
            </div>
            {/* Social */}
            <div className="flex gap-2 mt-4">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:border-orange-500 hover:text-orange-500 transition-all duration-200 rounded-sm"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-5 text-sm uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-[var(--text-secondary)] hover:text-orange-500 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={11} className="text-orange-600/50 group-hover:text-orange-500 transition-colors flex-shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-orange-500 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={11} className="text-orange-600/50 group-hover:text-orange-500 transition-colors flex-shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-5 text-sm uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+254720843234"
                  className="flex items-start gap-3 group text-sm"
                >
                  <div className="w-8 h-8 rounded-sm bg-orange-600/10 border border-orange-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600/20 transition-colors">
                    <Phone size={13} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="text-[var(--text-muted)] text-xs mb-0.5">Phone / WhatsApp</div>
                    <div className="text-[var(--text-secondary)] group-hover:text-orange-500 transition-colors font-medium">
                      +254 720 843 234
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:notynox.engineering@gmail.com"
                  className="flex items-start gap-3 group text-sm"
                >
                  <div className="w-8 h-8 rounded-sm bg-orange-600/10 border border-orange-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600/20 transition-colors">
                    <Mail size={13} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="text-[var(--text-muted)] text-xs mb-0.5">Email</div>
                    <div className="text-[var(--text-secondary)] group-hover:text-orange-500 transition-colors font-medium break-all">
                      notynox.engineering@gmail.com
                    </div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="w-8 h-8 rounded-sm bg-orange-600/10 border border-orange-600/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={13} className="text-orange-500" />
                </div>
                <div>
                  <div className="text-[var(--text-muted)] text-xs mb-0.5">Address</div>
                  <div className="text-[var(--text-secondary)]">
                    P.O. Box 11658-00100<br />Nairobi, Kenya
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-[var(--border)] bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[var(--text-muted)]">
          <span>© {year} Notynox Engineering Limited. All rights reserved.</span>
          <span className="font-mono">
            P.O. Box 11658-00100, Nairobi · Kenya
          </span>
        </div>
      </div>
    </footer>
  );
}
