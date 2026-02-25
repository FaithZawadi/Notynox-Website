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
  ChevronRight,
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
      {/* Hero */}
      <section className="relative py-24 bg-[#0a0e17] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/8 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="section-label mb-4 text-orange-400">What We Offer</div>
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Engineering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Services
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              Comprehensive construction and engineering solutions tailored to Kenya's 
              infrastructure needs — delivered by an experienced, safety-first team with 
              proven project management systems.
            </p>
          </div>
          {/* Quick nav */}
          <div className="flex flex-wrap gap-2 mt-10">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-slate-700 text-slate-400 hover:border-orange-500 hover:text-orange-400 transition-all rounded-sm"
              >
                <ChevronRight size={10} />
                {s.title.split(" ")[0]}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-6 text-xs font-mono text-slate-600">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-orange-500">Services</span>
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

      {/* CTA */}
      <section className="py-20 bg-[#0a0e17] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="section-label mb-4 text-orange-400">Ready to Start?</div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-6">
            Let's Discuss Your{" "}
            <span className="text-orange-500">Project</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-10">
            Our team is ready to provide professional consultation, accurate cost estimates, 
            and a detailed project execution plan tailored to your specific requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <a href="tel:+254720843234" className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 hover:border-orange-500 text-slate-300 hover:text-orange-400 font-semibold rounded-sm transition-all text-base">
              <Phone size={16} /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
