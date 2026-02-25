import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Shield,
  Clock,
  Award,
  Users,
  Hammer,
  Building2,
  Milestone,
  Waves,
  Wrench,
  HardHat,
  CheckCircle2,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Civil Engineering & Construction Company | Nairobi, Kenya",
  description:
    "Notynox Engineering Limited — East Africa's trusted civil engineering and construction company. Road works, structural engineering, building development, and water infrastructure since 2013.",
};

const stats = [
  { value: "10+", label: "Years of Excellence", suffix: "" },
  { value: "50+", label: "Projects Completed", suffix: "" },
  { value: "100%", label: "Safety Commitment", suffix: "" },
  { value: "5", label: "Core Service Areas", suffix: "+" },
];

const services = [
  {
    icon: Building2,
    title: "Civil & Structural Engineering",
    description:
      "Reinforced concrete works, structural steel, bridges, dams, culverts, and large-scale infrastructure — built with precision to withstand the test of time.",
    href: "/services#civil",
    tag: "Core Service",
  },
  {
    icon: Milestone,
    title: "Road Works & Infrastructure",
    description:
      "Highway construction, asphalt paving, earthworks, grading, aggregate production, and road rehabilitation across Kenya's diverse terrain.",
    href: "/services#roads",
    tag: "Core Service",
  },
  {
    icon: Hammer,
    title: "Building Construction",
    description:
      "Commercial offices, warehouses, industrial facilities, institutional buildings, and residential housing — delivered on time and within budget.",
    href: "/services#building",
    tag: "Core Service",
  },
  {
    icon: Waves,
    title: "Water & Plumbing Engineering",
    description:
      "Sewer systems, water reticulation, tank installations, rainwater harvesting, fire service installations, and leak detection solutions.",
    href: "/services#water",
    tag: "Specialist",
  },
  {
    icon: Wrench,
    title: "Scaffolding Solutions",
    description:
      "Certified design, erection, inspection, and dismantling. Access, hanging, and birdcage scaffolds with strict HSE compliance at every level.",
    href: "/services#scaffolding",
    tag: "Specialist",
  },
  {
    icon: HardHat,
    title: "Heavy Equipment Hire",
    description:
      "Excavators, dozers, graders, rollers, bitumen distributors, crushing units, and hauling trucks available for hire across East Africa.",
    href: "/services#equipment",
    tag: "Support Service",
  },
];

const values = [
  { icon: Shield, label: "Integrity", desc: "Honesty, transparency, and ethical responsibility in every engagement." },
  { icon: Award, label: "Excellence", desc: "Highest standards in workmanship, management, and service delivery." },
  { icon: HardHat, label: "Safety First", desc: "Comprehensive HSE management — accident prevention is non-negotiable." },
  { icon: Clock, label: "On-Time Delivery", desc: "Disciplined project execution that respects client timelines and budgets." },
];

const whyUs = [
  "Over a decade of proven industry experience in Kenya and East Africa",
  "Strong multidisciplinary technical leadership team",
  "Substantial in-house heavy construction equipment fleet",
  "Proven project management systems and quality assurance processes",
  "Strict safety compliance with comprehensive HSE programs",
  "Registered contractor for road works and civil engineering in Kenya",
  "Track record across public sector and private sector projects",
  "Environmental responsibility embedded in all operations",
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0e17]">
        {/* Atmospheric background */}
        <div className="absolute inset-0">
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-orange-400/6 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/4 rounded-full blur-3xl" />
        </div>

        {/* Decorative lines */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-600/30 to-transparent" />
        <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-600/10 to-transparent hidden lg:block" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-600/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 lg:pt-24 w-full">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in stagger-1 opacity-0">
            <div className="w-8 h-px bg-orange-500" />
            <span className="section-label text-orange-400">
              Est. 2013 · Nairobi, Kenya
            </span>
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-white leading-[0.95] mb-8">
            <span className="block text-5xl sm:text-6xl lg:text-8xl xl:text-9xl animate-fade-up stagger-2 opacity-0">
              Building the
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-8xl xl:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 animate-fade-up stagger-3 opacity-0">
              Unimaginable.
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-slate-400 animate-fade-up stagger-4 opacity-0 mt-2">
              Engineering the Future.
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-xl text-slate-400 text-lg leading-relaxed mb-10 animate-fade-up stagger-5 opacity-0">
            East Africa's trusted civil engineering and construction partner.
            From roads and bridges to high-rise structures and water systems —
            we build infrastructure that drives progress and stands for generations.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-up stagger-6 opacity-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-sm transition-all duration-200 hover:shadow-2xl hover:shadow-orange-600/30 text-base"
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-600 hover:border-orange-500 text-slate-300 hover:text-orange-400 font-semibold rounded-sm transition-all duration-200 text-base"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-slate-800 animate-fade-in stagger-6 opacity-0">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="stat-number text-3xl lg:text-4xl font-black">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-[var(--bg-primary)] relative overflow-hidden" id="services">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-14">
            <div className="section-label mb-3">What We Do</div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)] max-w-lg leading-tight">
                Comprehensive Engineering{" "}
                <span className="text-orange-500">Services</span>
              </h2>
              <p className="max-w-sm text-[var(--text-secondary)] text-sm leading-relaxed">
                From ground-breaking to commissioning, we deliver end-to-end
                engineering and construction solutions tailored to your project
                requirements.
              </p>
            </div>
            <div className="accent-line mt-6" />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.title}
                  href={svc.href}
                  className="group card-hover relative bg-[var(--bg-card)] border border-[var(--border)] p-7 flex flex-col rounded-sm"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-orange-600/5 group-hover:bg-orange-600/10 transition-colors" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-500/30 group-hover:border-orange-500 transition-colors" />

                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 bg-orange-600/10 border border-orange-600/20 flex items-center justify-center group-hover:bg-orange-600/20 transition-colors rounded-sm">
                      <Icon size={20} className="text-orange-500" />
                    </div>
                    <span className="tag text-[10px]">{svc.tag}</span>
                  </div>

                  <h3 className="font-display font-semibold text-lg text-[var(--text-primary)] mb-3 group-hover:text-orange-500 transition-colors leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                    {svc.description}
                  </p>

                  <div className="flex items-center gap-1.5 mt-5 text-orange-500 text-xs font-semibold group-hover:gap-3 transition-all">
                    Learn more <ArrowRight size={12} />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/services" className="btn-outline text-[var(--text-primary)] border-[var(--border)] hover:border-orange-600">
              View All Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(234,88,12,0.1) 20px, rgba(234,88,12,0.1) 21px)`
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="section-label mb-3">Who We Are</div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)] mb-6 leading-tight">
                A Decade of Building{" "}
                <span className="text-orange-500">East Africa's Future</span>
              </h2>
              <div className="accent-line mb-6" />
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Notynox Engineering Limited was incorporated in September 2013 in Nairobi, Kenya. 
                What began as a focused civil engineering practice has evolved into a full-spectrum 
                construction and infrastructure company serving clients across Kenya and East Africa.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                Our multidisciplinary leadership team — comprising civil engineers, architects, 
                project managers, safety officers, and financial experts — enables us to manage 
                projects holistically from feasibility to commissioning.
              </p>

              {/* Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-sm hover:border-orange-500/40 transition-colors"
                  >
                    <div className="w-8 h-8 bg-orange-600/10 flex items-center justify-center flex-shrink-0 rounded-sm">
                      <Icon size={14} className="text-orange-500" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[var(--text-primary)] mb-0.5">
                        {label}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/about" className="btn-primary">
                  Our Full Story <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              {/* Main box */}
              <div className="relative bg-[#0a0e17] rounded-sm overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display font-black text-[120px] leading-none text-orange-600/10 select-none">
                      N
                    </div>
                    <div className="font-mono text-orange-500/40 text-xs tracking-[0.4em] uppercase -mt-6">
                      Engineering Excellence
                    </div>
                  </div>
                </div>
                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-orange-500/50" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-500/50" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-orange-500/50" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-orange-500/50" />

                {/* Stats overlay */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                  {[
                    { v: "2013", l: "Founded" },
                    { v: "50+", l: "Projects" },
                    { v: "KE", l: "& East Africa" },
                  ].map(({ v, l }) => (
                    <div key={l} className="bg-slate-900/80 backdrop-blur border border-slate-700/50 p-3 text-center rounded-sm">
                      <div className="stat-number text-xl font-black">{v}</div>
                      <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider mt-0.5">
                        {l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-orange-600 text-white p-4 rounded-sm shadow-xl shadow-orange-600/30">
                <div className="font-display font-black text-3xl leading-none">10+</div>
                <div className="text-xs font-mono uppercase tracking-wider mt-1 opacity-80">
                  Years Experience
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[var(--bg-card)] border border-[var(--border)] p-4 rounded-sm shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">
                    Registered Contractor
                  </span>
                </div>
                <div className="text-xs text-[var(--text-muted)] mt-1">
                  Roads · Civil Works · Structures
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY NOTYNOX ── */}
      <section className="py-24 bg-[var(--bg-primary)] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left Text */}
            <div className="lg:col-span-2">
              <div className="section-label mb-3">Why Choose Us</div>
              <h2 className="font-display font-bold text-4xl text-[var(--text-primary)] mb-5 leading-tight">
                Your Trusted{" "}
                <span className="text-orange-500">Engineering Partner</span>
              </h2>
              <div className="accent-line mb-5" />
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                Choosing Notynox Engineering means partnering with a company that 
                values professionalism, accountability, and long-term relationships. 
                We don't just complete projects — we build infrastructure that creates 
                lasting impact.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                Our strength lies in our people, our processes, and our in-house 
                equipment capability — enabling us to deliver quality without 
                compromise on every engagement.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right Checklist */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyUs.map((item, i) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-sm hover:border-orange-500/40 group transition-colors"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <CheckCircle2
                      size={16}
                      className="text-orange-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EQUIPMENT FLEET ── */}
      <section className="py-20 bg-[#0a0e17] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label mb-3 text-orange-400">Our Fleet</div>
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Heavy Machinery <span className="text-orange-500">Capability</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
              Our substantial in-house fleet means we maintain full control over 
              timelines, quality, and efficiency — reducing dependency on subcontractors 
              and external hire costs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "Excavators",
              "Bulldozers",
              "Motor Graders",
              "Vibratory Rollers",
              "Bitumen Distributors",
              "Crushing & Screening Plants",
              "Hauling Trucks & Tippers",
              "Water Bowsers",
              "Concrete Mixers",
              "Low-Bed Transporters",
              "Backhoe Loaders",
              "Compactors",
            ].map((machine) => (
              <div
                key={machine}
                className="flex items-center gap-3 px-4 py-3 bg-slate-800/50 border border-slate-700/50 hover:border-orange-500/50 hover:bg-orange-600/5 transition-all group rounded-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 group-hover:scale-150 transition-transform" />
                <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">
                  {machine}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-orange-600 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="section-label mb-4">Ready to Start?</div>
          <h2 className="font-display font-black text-5xl md:text-6xl text-[var(--text-primary)] mb-6 leading-tight">
            Have a Project in{" "}
            <span className="text-orange-500">Mind?</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you're planning a major road development, a commercial building, 
            or a water infrastructure project — our team is ready to partner with you 
            from concept to completion.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get a Free Consultation <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+254720843234"
              className="btn-outline text-[var(--text-primary)] border-[var(--border)] text-base px-8 py-4 hover:border-orange-600"
            >
              <Phone size={16} /> +254 720 843 234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
