"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Phone, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-[var(--bg-secondary)] border-b border-[var(--border)] text-xs py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[var(--text-muted)]">
          <span className="font-mono tracking-wide">
            Building the Unimaginable. Engineering the Future.
          </span>
          <a
            href="tel:+254720843234"
            className="flex items-center gap-1.5 hover:text-orange-500 transition-colors"
          >
            <Phone size={11} />
            <span>+254 720 843 234</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--bg-primary)]/95 backdrop-blur-md shadow-xl shadow-black/10 border-b border-[var(--border)]"
            : "bg-[var(--bg-primary)]/90 backdrop-blur-sm border-b border-[var(--border)]/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/images/logo-nav.png"
              alt="Notynox Engineering Limited"
              className="h-11 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-[1.03] dark:bg-white/95 dark:rounded-lg dark:px-2 dark:py-1"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors duration-200 pb-0.5 ${
                  pathname === link.href
                    ? "text-orange-500 active"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-9 h-9 flex items-center justify-center rounded-sm border border-[var(--border)] hover:border-orange-500 hover:text-orange-500 transition-all duration-200 text-[var(--text-secondary)]"
              >
                {resolvedTheme === "dark" ? (
                  <Sun size={15} />
                ) : (
                  <Moon size={15} />
                )}
              </button>
            )}

            <Link
              href="/contact"
              className="hidden md:flex items-center gap-1.5 px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-[var(--shadow-orange)] hover:-translate-y-0.5"
            >
              Get a Quote <ChevronRight size={13} />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-[var(--text-primary)]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden border-t border-[var(--border)] bg-[var(--bg-primary)] overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between py-3 px-4 rounded-sm text-sm font-medium transition-all ${
                  pathname === link.href
                    ? "bg-orange-600/10 text-orange-500 border-l-2 border-orange-500"
                    : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]"
                }`}
              >
                {link.label}
                <ChevronRight size={14} />
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 btn-primary justify-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
