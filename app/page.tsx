import type { Metadata } from "next";
import Link from "next/link";
import Counter from "@/components/Counter";
import {
  ArrowRight,
  HardHat,
  Building2,
  Milestone,
  Waves,
  Wrench,
  CheckCircle2,
  Phone,
  Star,
  PhoneCall,
  PencilRuler,
  Hammer,
  ClipboardCheck,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Civil Engineering & Construction Company | Nairobi, Kenya",
  description:
    "Notynox Engineering Limited — East Africa's trusted civil engineering and construction company. Road works, structural engineering, building development, and water infrastructure since 2013.",
};

const stats = [
  { end: 10, suffix: "+", label: "Years of Excellence" },
  { end: 50, suffix: "+", label: "Projects Completed" },
  { end: 100, suffix: "%", label: "Safety Commitment" },
  { end: 12, suffix: "+", label: "Equipment Classes" },
];

const services = [
  {
    icon: Building2,
    title: "Civil & Structural Engineering",
    description:
      "Reinforced concrete works, structural steel, bridges, dams, culverts and large-scale infrastructure — built to withstand the test of time.",
    href: "/services#civil",
    tag: "Core Service",
    img: "/images/service-civil.jpg",
  },
  {
    icon: Milestone,
    title: "Road Works & Infrastructure",
    description:
      "Highway construction, asphalt paving, earthworks, grading, aggregate production and road rehabilitation across Kenya's diverse terrain.",
    href: "/services#roads",
    tag: "Core Service",
    img: "/images/service-roads.jpg",
  },
  {
    icon: Hammer,
    title: "Building Construction",
    description:
      "Commercial offices, warehouses, industrial facilities, institutional buildings and residential housing — delivered on time and on budget.",
    href: "/services#building",
    tag: "Core Service",
    img: "/images/service-building.jpg",
  },
  {
    icon: Waves,
    title: "Water & Plumbing Engineering",
    description:
      "Sewer systems, water reticulation, tank installations, rainwater harvesting, fire service installations and leak detection solutions.",
    href: "/services#water",
    tag: "Specialist",
    img: "/images/service-water.jpg",
  },
  {
    icon: Wrench,
    title: "Scaffolding Solutions",
    description:
      "Certified design, erection, inspection and dismantling. Access, hanging and birdcage scaffolds with strict HSE compliance at every level.",
    href: "/services#scaffolding",
    tag: "Specialist",
    img: "/images/service-scaffolding.jpg",
  },
  {
    icon: HardHat,
    title: "Heavy Equipment Hire",
    description:
      "Excavators, dozers, graders, rollers, bitumen distributors, crushing units and hauling trucks available for hire across East Africa.",
    href: "/services#equipment",
    tag: "Support Service",
    img: "/images/service-equipment.jpg",
  },
];

const whyUs = [
  "Over a decade of proven experience in Kenya and East Africa",
  "Strong multidisciplinary technical leadership team",
  "Substantial in-house heavy construction equipment fleet",
  "Proven project management and quality assurance systems",
  "Strict safety compliance with comprehensive HSE programs",
  "Registered contractor for road works and civil engineering",
];

const process = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Consult & Scope",
    desc: "We listen to your goals, assess the site and define a clear, costed scope of works.",
  },
  {
    icon: PencilRuler,
    step: "02",
    title: "Design & Plan",
    desc: "Our engineers produce compliant designs, programmes and a detailed project plan.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Build & Manage",
    desc: "Disciplined execution with in-house equipment, supervision and rigorous quality control.",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Commission & Hand Over",
    desc: "Testing, snagging and commissioning — delivered safely, on schedule and to standard.",
  },
];

const sectors = [
  "Transport & Highways",
  "Commercial & Institutional",
  "Water & Sanitation",
  "Industrial & Energy",
  "Public Infrastructure",
  "Residential Estates",
];

const testimonials = [
  {
    quote:
      "Notynox delivered our institutional facility ahead of schedule and to an exceptional standard. Their site management and safety culture were outstanding.",
    name: "James Mwangi",
    role: "Project Director, Institutional Client",
    initials: "JM",
  },
  {
    quote:
      "From earthworks to final surfacing, the road rehabilitation was handled professionally. In-house equipment kept everything on programme.",
    name: "Aisha Noor",
    role: "County Infrastructure Lead",
    initials: "AN",
  },
  {
    quote:
      "Reliable, transparent and technically strong. Notynox is now our go-to partner for reinforced concrete and structural works.",
    name: "Peter Otieno",
    role: "Developer, Commercial Real Estate",
    initials: "PO",
  },
];

const clients = ["KENHA", "KURA", "KeRRA", "NCA", "WASREB", "EPRA"];

export default function Home() {
  return (
    <>
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--bg-primary)]">
        <div className="blob bg-orange-500/20 w-[32rem] h-[32rem] -top-40 -right-40" />
        <div className="blob bg-orange-400/10 w-[28rem] h-[28rem] top-40 -left-40" />
        <div className="absolute inset-0 dots-bg opacity-60" />

        <div className="container-x relative grid lg:grid-cols-2 gap-14 items-center pt-16 pb-20 lg:pt-24 lg:pb-28">
          {/* Left */}
          <div>
            <span className="eyebrow mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Est. 2013 · Nairobi, Kenya
            </span>
            <h1 className="font-display font-black text-[var(--text-primary)] leading-[1.02] text-5xl md:text-6xl xl:text-7xl mb-6">
              Building the{" "}
              <span className="text-gradient-amber">Unimaginable.</span>
              <br />
              Engineering the Future.
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl mb-8">
              East Africa's trusted civil engineering and construction partner.
              From roads and bridges to high-rise structures and water systems —
              we build infrastructure that drives progress and stands for generations.
            </p>
            <div className="flex flex-wrap gap-4 mb-9">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote <ArrowRight size={17} />
              </Link>
              <Link
                href="/projects"
                className="btn-outline text-[var(--text-primary)] border-[var(--border)] hover:border-orange-600"
              >
                View Our Work
              </Link>
            </div>
            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm text-[var(--text-secondary)] font-medium">
                  Trusted delivery record
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] font-medium">
                <CheckCircle2 size={16} className="text-orange-500" />
                Registered NCA Contractor
              </div>
            </div>
          </div>

          {/* Right — framed photo with floating stat */}
          <div className="relative">
            <div className="blob bg-orange-500/25 w-72 h-72 -bottom-10 -right-6" />
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-elevated)] aspect-[4/5] sm:aspect-[5/5]">
              <img
                src="/images/hero-construction.jpg"
                alt="Notynox Engineering construction site"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating experience badge */}
            <div className="absolute -top-5 -left-5 bg-orange-600 text-white rounded-2xl px-5 py-4 shadow-[var(--shadow-orange)] hidden sm:block">
              <div className="font-display font-black text-3xl leading-none">10+</div>
              <div className="text-[11px] font-mono uppercase tracking-wider opacity-85 mt-1">
                Years Experience
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-4 shadow-[var(--shadow-elevated)] hidden sm:flex items-center gap-3">
              <div className="icon-tile !w-11 !h-11 !rounded-xl">
                <HardHat size={18} />
              </div>
              <div>
                <div className="font-display font-black text-xl text-[var(--text-primary)] leading-none">
                  50+
                </div>
                <div className="text-xs text-[var(--text-muted)] mt-0.5">
                  Projects delivered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────── CLIENT / TRUST STRIP ─────────────────────── */}
      <section className="py-10 bg-[var(--bg-secondary)] border-y border-[var(--border)] overflow-hidden">
        <div className="container-x">
          <p className="text-center text-xs font-mono uppercase tracking-[0.25em] text-[var(--text-muted)] mb-6">
            Aligned with Kenya's leading infrastructure authorities
          </p>
        </div>
        <div className="relative">
          <div className="marquee">
            {[...clients, ...clients].map((c, i) => (
              <span
                key={i}
                className="font-display font-black text-2xl md:text-3xl text-[var(--text-muted)]/70 whitespace-nowrap select-none"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── SERVICES ─────────────────────────── */}
      <section className="py-24 bg-[var(--bg-primary)]" id="services">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mb-4">What We Do</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)] leading-tight mb-4">
              Comprehensive engineering{" "}
              <span className="text-gradient-amber">services</span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              From ground-breaking to commissioning, we deliver end-to-end
              engineering and construction solutions tailored to your project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.title}
                  href={svc.href}
                  className="neat-card group flex flex-col overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={svc.img}
                      alt={svc.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-4 left-4 inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-orange-600">
                      {svc.tag}
                    </span>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="icon-tile mb-5 -mt-12 relative bg-[var(--bg-card)] shadow-[var(--shadow-card)]">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3 group-hover:text-orange-600 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                      {svc.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-5 text-orange-600 text-sm font-semibold group-hover:gap-3 transition-all">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────── ABOUT / WHY US ─────────────────────── */}
      <section className="py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="blob bg-orange-500/20 w-72 h-72 -top-8 -left-8" />
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-elevated)] aspect-[4/3]">
              <img
                src="/images/about-team.jpg"
                alt="Notynox Engineering team on site"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl px-6 py-5 shadow-[var(--shadow-elevated)] hidden sm:block">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  Since 2013
                </span>
              </div>
              <div className="font-display font-black text-2xl text-[var(--text-primary)]">
                Registered Contractor
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="eyebrow mb-4">Who We Are</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)] leading-tight mb-5">
              A decade of building{" "}
              <span className="text-gradient-amber">East Africa's future</span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Notynox Engineering Limited was incorporated in September 2013 in
              Nairobi, Kenya. What began as a focused civil engineering practice
              has grown into a full-spectrum construction and infrastructure
              company serving clients across Kenya and East Africa.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {whyUs.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={18}
                    className="text-orange-500 flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-[var(--text-secondary)] leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Our Full Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── STATS BAND ─────────────────────────── */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="absolute inset-0 dots-bg opacity-20 text-white" />
        <div className="container-x relative grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center text-white">
              <Counter
                end={s.end}
                suffix={s.suffix}
                className="count-number text-4xl md:text-5xl"
              />
              <div className="text-sm text-white/85 mt-2 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────── PROCESS ─────────────────────────── */}
      <section className="py-24 bg-[var(--bg-primary)]">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mb-4">How We Work</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)] leading-tight mb-4">
              A clear path from{" "}
              <span className="text-gradient-amber">concept to completion</span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              A disciplined, transparent process that keeps every project safe,
              on schedule and on budget.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {process.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.step} className="neat-card p-7 relative">
                  <span className="absolute top-5 right-6 font-display font-black text-5xl text-orange-500/10">
                    {p.step}
                  </span>
                  <div className="icon-tile mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── SECTORS ─────────────────────────── */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="eyebrow mb-4">Our Sectors</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)] leading-tight mb-5">
              Solutions across{" "}
              <span className="text-gradient-amber">every industry</span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              From transport and highways to water and sanitation, commercial
              developments to public infrastructure — our experience spans the
              full breadth of East Africa's growth sectors.
            </p>
            <Link href="/contact" className="btn-primary">
              Discuss Your Sector <ArrowRight size={16} />
            </Link>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {sectors.map((sector, i) => (
              <div
                key={sector}
                className="neat-card flex items-center gap-4 p-5"
              >
                <span className="font-display font-black text-3xl text-orange-500/80 leading-none">
                  0{i + 1}
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  {sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── TESTIMONIALS ─────────────────────────── */}
      <section className="py-24 bg-[var(--bg-primary)]">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mb-4">Client Voices</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)] leading-tight">
              Trusted by clients who{" "}
              <span className="text-gradient-amber">build big</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {testimonials.map((t) => (
              <div key={t.name} className="neat-card p-8 flex flex-col">
                <Quote size={30} className="text-orange-500/40 mb-4" />
                <p className="text-[var(--text-secondary)] leading-relaxed flex-1">
                  “{t.quote}”
                </p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[var(--border)]">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center font-display font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)] text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── CTA BAND ─────────────────────────── */}
      <section className="relative py-24 overflow-hidden bg-[#0a0e17]">
        <img
          src="/images/service-equipment.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e17] via-[#0a0e17]/90 to-[#0a0e17]/60" />
        <div className="blob bg-orange-500/20 w-96 h-96 -bottom-20 right-10" />
        <div className="container-x relative max-w-3xl">
          <span className="eyebrow mb-5">Ready to Start?</span>
          <h2 className="font-display font-black text-4xl md:text-6xl text-white leading-tight mb-6">
            Have a project in{" "}
            <span className="text-gradient-amber">mind?</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-9 max-w-2xl">
            Whether you're planning a major road development, a commercial
            building or a water infrastructure project — our team is ready to
            partner with you from concept to completion.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Get a Free Consultation <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+254720843234"
              className="btn-outline text-white border-white/30 hover:border-orange-600"
            >
              <Phone size={16} /> +254 720 843 234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
