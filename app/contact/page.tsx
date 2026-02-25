import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Building,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Get a Quote — Notynox Engineering Nairobi",
  description:
    "Contact Notynox Engineering Limited for professional civil engineering and construction quotations. Reach us in Nairobi, Kenya: +254 720 843 234 or notynox.engineering@gmail.com",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone & WhatsApp",
    lines: ["+254 720 843 234"],
    action: "tel:+254720843234",
    actionLabel: "Call Now",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["notynox.engineering@gmail.com"],
    action: "mailto:notynox.engineering@gmail.com",
    actionLabel: "Send Email",
  },
  {
    icon: MapPin,
    title: "Postal Address",
    lines: ["P.O. Box 11658-00100", "Nairobi, Kenya"],
    action: null,
    actionLabel: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Fri: 7:00 AM – 6:00 PM", "Sat: 8:00 AM – 2:00 PM"],
    action: null,
    actionLabel: null,
  },
];

const services = [
  "Civil & Structural Engineering",
  "Road Works & Infrastructure",
  "Building Construction",
  "Water & Plumbing Engineering",
  "Scaffolding Solutions",
  "Heavy Equipment Hire",
  "Other",
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[#0a0e17] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/8 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="section-label mb-4 text-orange-400">Let's Talk</div>
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Start a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Conversation
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              Whether you're planning a major infrastructure project or need a specialist 
              engineering service — our team is ready to provide professional consultation 
              and competitive quotations.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-10 text-xs font-mono text-slate-600">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-orange-500">Contact</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[var(--bg-primary)] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <div className="section-label mb-3">Contact Details</div>
                <h2 className="font-display font-bold text-3xl text-[var(--text-primary)] mb-3 leading-tight">
                  We're Here to{" "}
                  <span className="text-orange-500">Help</span>
                </h2>
                <div className="accent-line mb-5" />
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Reach out to discuss your project requirements. Our engineering 
                  team will respond promptly with professional guidance and quotations.
                </p>
              </div>

              {contactInfo.map(({ icon: Icon, title, lines, action, actionLabel }) => (
                <div
                  key={title}
                  className="flex gap-4 p-5 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-sm hover:border-orange-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 bg-orange-600/10 border border-orange-600/20 flex items-center justify-center flex-shrink-0 rounded-sm group-hover:bg-orange-600/20 transition-colors">
                    <Icon size={16} className="text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-1.5">
                      {title}
                    </div>
                    {lines.map((line) => (
                      <div key={line} className="text-sm font-medium text-[var(--text-primary)]">
                        {line}
                      </div>
                    ))}
                    {action && actionLabel && (
                      <a
                        href={action}
                        className="inline-flex items-center gap-1 mt-2 text-xs text-orange-500 hover:text-orange-400 font-semibold transition-colors"
                      >
                        {actionLabel} <ArrowRight size={10} />
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* Map-like graphic */}
              <div className="relative bg-[#0a0e17] border border-slate-800 rounded-sm p-6 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: "linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-600/15 border border-orange-600/30 flex items-center justify-center rounded-sm">
                    <Building size={16} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Notynox Engineering Limited</div>
                    <div className="text-slate-500 text-xs mt-0.5 font-mono">Nairobi, Kenya · P.O. Box 11658-00100</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <span className="text-xs text-slate-500 font-mono">Serving Kenya & East Africa</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-sm p-8">
                <div className="flex items-center gap-3 mb-7 pb-6 border-b border-[var(--border)]">
                  <div className="w-10 h-10 bg-orange-600/10 border border-orange-600/20 flex items-center justify-center rounded-sm">
                    <Send size={16} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">
                      Request a Quote
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      We respond within 1 business day
                    </p>
                  </div>
                </div>

                {/* Note: this is a static form; connect to your preferred form handler */}
                <form
                  action="mailto:notynox.engineering@gmail.com"
                  method="post"
                  encType="text/plain"
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Kamau"
                        className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm rounded-sm focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="ABC Developers Ltd"
                        className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm rounded-sm focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm rounded-sm focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+254 7XX XXX XXX"
                        className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm rounded-sm focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      Service Required *
                    </label>
                    <select
                      name="service"
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] text-sm rounded-sm focus:outline-none focus:border-orange-500 transition-colors appearance-none"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      Project Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="e.g. Nairobi, Mombasa, Kisumu..."
                      className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm rounded-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe your project requirements, scope, timeline, and any specific technical details..."
                      className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm rounded-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-2">
                    <div className="text-xs text-[var(--text-muted)] flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Your information is handled in strict confidence. We'll 
                        respond within 1 business day.
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="btn-primary whitespace-nowrap"
                    >
                      Send Enquiry <Send size={14} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Banner */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { title: "Fast Response", desc: "We reply to all enquiries within 1 business day" },
              { title: "Free Consultation", desc: "Initial project consultation at no cost to you" },
              { title: "Competitive Pricing", desc: "Detailed BOQ-based quotations with transparent pricing" },
              { title: "Professional Delivery", desc: "Proven systems, qualified team, and reliable execution" },
            ].map(({ title, desc }) => (
              <div key={title} className="text-center p-5 bg-[var(--bg-card)] border border-[var(--border)] rounded-sm hover:border-orange-500/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-orange-500 mx-auto mb-4" />
                <h3 className="font-semibold text-sm text-[var(--text-primary)] mb-2">{title}</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
