import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Milestone,
  Hammer,
  Waves,
  Wrench,
  HardHat,
  CheckCircle2,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Services | Civil Works, Roads, Buildings, Water Systems Kenya",
  description:
    "Notynox Engineering services: civil and structural engineering, road construction, building works, water infrastructure, scaffolding, and heavy equipment in Kenya.",
};

const services = [
  {
    id: "civil",
    icon: Building2,
    img: "/images/hero-construction.jpg",
    title: "Civil & Structural Engineering",
    tagline: "Foundations That Last Generations",
    description:
      "Our civil and structural engineering division delivers technically sound and durable infrastructure solutions designed to withstand environmental and operational demands. We undertake reinforced concrete works, structural steel fabrication, drainage systems, bridges, dams, culverts, and large-scale site development projects.",
    detail:
      "From conceptual planning and engineering calculations to execution and final commissioning, our team ensures that every structure is built with precision, compliance, and long-term functionality. Our engineers apply modern design standards and rigorous quality control procedures to guarantee structural integrity and performance.",
    offerings: [
      "Reinforced concrete structures",
      "Structural steel fabrication & erection",
      "Bridge and culvert construction",
      "Dam and retaining wall construction",
      "Drainage systems and stormwater management",
      "Large-scale site development",
      "Foundations and substructure works",
      "Structural assessments and inspections",
    ],
  },
  {
    id: "roads",
    icon: Milestone,
    img: "/images/service-roads.jpg",
    title: "Road Works & Infrastructure",
    tagline: "Connecting Communities, Enabling Commerce",
    description:
      "Notynox Engineering Limited is a registered road works contractor with the capacity to undertake highway construction, asphalt paving, murram road development, earthworks, grading, and road rehabilitation projects across Kenya and East Africa.",
    detail:
      "We own and operate a wide range of heavy construction equipment including excavators, dozers, graders, rollers, crushers, bitumen distributors, and hauling trucks. This in-house capacity allows us to maintain control over timelines, quality, and operational efficiency.",
    offerings: [
      "Asphalt road construction & surfacing",
      "Bitumen surface dressing",
      "Murram & gravel road construction",
      "Earthworks and soil stabilization",
      "Aggregate production & crushing",
      "Road maintenance & rehabilitation",
      "Kerbing and drainage channels",
      "Hauling and material supply",
    ],
  },
  {
    id: "building",
    icon: Hammer,
    img: "/images/service-building.jpg",
    title: "Building Construction",
    tagline: "Spaces That Inspire, Structures That Endure",
    description:
      "Our building construction division handles commercial, residential, industrial, and institutional projects. Whether it is a new facility, structural extension, renovation, or refurbishment, we approach each project with meticulous planning and disciplined execution.",
    detail:
      "We offer complete design-and-build services, project management, fixed contract solutions, and cost-plus arrangements depending on client requirements. Our team ensures compliance with local building codes, environmental regulations, and safety standards throughout the project lifecycle.",
    offerings: [
      "Commercial office developments",
      "Warehouses and industrial facilities",
      "Residential housing projects",
      "Institutional buildings & training centers",
      "Hotel & hospitality construction",
      "Perimeter walls & security installations",
      "Structural modifications & reinforcements",
      "Renovations and refurbishments",
    ],
  },
  {
    id: "water",
    icon: Waves,
    img: "/images/about-team.jpg",
    title: "Water & Plumbing Engineering",
    tagline: "Clean Water is Infrastructure Too",
    description:
      "Water infrastructure is a critical component of sustainable development. Our plumbing and water engineering services include the installation of sewer systems, water reticulation networks, tank installations, drainage systems, and water conservation programs.",
    detail:
      "Our team ensures that all water-related works comply with regulatory standards set by water authorities while promoting efficiency, sustainability, and long-term reliability. We approach water projects with the same engineering rigour applied to structural works.",
    offerings: [
      "Water supply & reticulation systems",
      "Borehole drilling & pump installation",
      "Sewer & stormwater drainage systems",
      "Rainwater harvesting systems",
      "Fire service installations",
      "Water storage tank installation",
      "Leak detection & water management",
      "Pipe replacement & rehabilitation",
    ],
  },
  {
    id: "scaffolding",
    icon: Wrench,
    img: "/images/service-scaffolding.jpg",
    title: "Scaffolding Solutions",
    tagline: "Working at Height — Safely and Surely",
    description:
      "Safety and structural stability are paramount when working at height. Notynox Engineering provides certified scaffolding design, erection, inspection, hire, and dismantling services with strict adherence to occupational health and safety standards.",
    detail:
      "Our trained scaffold inspectors, supervisors, and safety officers ensure all scaffolding systems comply with relevant safety standards. We provide structured permit-to-work systems and conduct thorough risk assessments before any height work commences.",
    offerings: [
      "Access scaffold design & erection",
      "Hanging & cantilevered scaffolds",
      "Birdcage scaffold systems",
      "Certified scaffold inspection",
      "Scaffold hire & maintenance",
      "Dismantling & removal",
      "Risk assessments & method statements",
      "Work-at-height safety training",
    ],
  },
  {
    id: "equipment",
    icon: HardHat,
    img: "/images/service-equipment.jpg",
    title: "Heavy Equipment Services",
    tagline: "Power, Precision, Performance",
    description:
      "Our substantial fleet of heavy construction equipment is available for project hire across Kenya and East Africa. We maintain our machinery to the highest operational standards, ensuring reliability and performance on demanding construction sites.",
    detail:
      "All equipment is operated by trained, qualified operators and is maintained under a comprehensive preventive maintenance schedule. Whether you need a single machine or a complete equipment package for a major project, we have the capacity.",
    offerings: [
      "Excavators (various sizes)",
      "Bulldozers & scrapers",
      "Motor graders",
      "Vibratory rollers & compactors",
      "Bitumen distributors",
      "Crushing & screening plants",
      "Hauling trucks & tippers",
      "Water bowsers & concrete mixers",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero — bright, with image cluster */}
      <section className="relative overflow-hidden bg-[var(--bg-primary)]">
        <div className="blob bg-orange-500/20 w-[30rem] h-[30rem] -top-40 -right-40" />
        <div className="blob bg-amber-300/25 w-96 h-96 top-16 -left-32" />
        <div className="blob bg-blue-500/12 w-80 h-80 bottom-0 right-1/4" />
        <div className="absolute inset-0 dots-bg opacity-50" />
        <div className="container-x relative pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow mb-5">What We Offer</span>
            <h1 className="font-display font-extrabold text-[var(--text-primary)] leading-[1.05] text-4xl md:text-5xl xl:text-6xl mb-5">
              Engineering{" "}
              <span className="text-gradient-amber">services</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl mb-6">
              Comprehensive construction and engineering solutions tailored to Kenya's
              infrastructure needs — delivered by an experienced, safety-first team with
              proven project management systems.
            </p>
            {/* Quick nav */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-orange-500 hover:text-orange-600 transition-all"
                >
                  {s.title.split(" ")[0]}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-orange-500 font-medium">Services</span>
            </div>
          </div>

          {/* Image cluster */}
          <div className="relative hidden lg:block">
            <div className="blob bg-orange-500/20 w-64 h-64 -bottom-8 -right-6" />
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-elevated)] aspect-[4/3]">
              <img src="/images/service-building.jpg" alt="Notynox construction works" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)] border-4 border-[var(--bg-primary)]">
              <img src="/images/hero-construction.jpg" alt="Civil engineering" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-5 -right-5 bg-orange-600 text-white rounded-2xl px-5 py-4 shadow-[var(--shadow-orange)]">
              <div className="font-display font-extrabold text-2xl leading-none">6</div>
              <div className="text-[11px] uppercase tracking-wider opacity-85 mt-1">Service Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      {services.map((svc, i) => {
        const Icon = svc.icon;
        const isEven = i % 2 === 0;
        return (
          <section
            key={svc.id}
            id={svc.id}
            className={`py-20 ${isEven ? "bg-[var(--bg-primary)]" : "bg-[var(--bg-secondary)]"} relative overflow-hidden`}
          >
            {!isEven && <div className="absolute inset-0 grid-bg opacity-30" />}
            <div className="relative max-w-7xl mx-auto px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                {/* Content */}
                <div className={!isEven ? "lg:order-2" : ""}>
                  <div className="section-label mb-3">{svc.tagline}</div>
                  <h2 className="font-display font-bold text-3xl md:text-4xl text-[var(--text-primary)] mb-5 leading-tight">
                    {svc.title}
                  </h2>
                  <div className="accent-line mb-6" />
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                    {svc.description}
                  </p>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                    {svc.detail}
                  </p>
                  <Link href="/contact" className="btn-primary">
                    Request a Quote <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Offerings */}
                <div className={!isEven ? "lg:order-1" : ""}>
                  <div className="relative mb-6 rounded-sm overflow-hidden aspect-[16/9]">
                    <img
                      src={svc.img}
                      alt={svc.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-sm p-7">
                    <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[var(--border)]">
                      <div className="w-12 h-12 bg-orange-600/10 border border-orange-600/20 flex items-center justify-center rounded-sm">
                        <Icon size={22} className="text-orange-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-[var(--text-primary)]">{svc.title}</div>
                        <div className="text-xs font-mono text-[var(--text-muted)] mt-0.5 tracking-wider uppercase">
                          Service Offerings
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {svc.offerings.map((item) => (
                        <div key={item} className="flex items-center gap-3 py-2 border-b border-[var(--border)]/50 last:border-0">
                          <CheckCircle2 size={14} className="text-orange-500 flex-shrink-0" />
                          <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA — bright orange */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="absolute inset-0 dots-bg opacity-20 text-white" />
        <div className="blob bg-white/10 w-96 h-96 -top-20 -right-10" />
        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.18em] bg-white/20 mb-5">
            Ready to Start?
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6 leading-tight">
            Let's discuss your project
          </h2>
          <p className="text-white/90 leading-relaxed mb-9 max-w-2xl mx-auto">
            Our team is ready to provide professional consultation, accurate cost estimates,
            and a detailed project execution plan tailored to your requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-orange-600 font-semibold rounded-xl shadow-lg hover:-translate-y-0.5 transition-all">
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <a href="tel:+254720843234" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/70 text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
              <Phone size={16} /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
