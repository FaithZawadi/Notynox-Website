import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Tag, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects & Portfolio | Infrastructure Works Kenya",
  description:
    "Explore Notynox Engineering's project portfolio — road construction, institutional buildings, reinforced concrete structures, hotel construction, and residential development across Kenya.",
};

const projects = [
  {
    id: 1,
    title: "Highway Rehabilitation Project",
    location: "Coastal Region, Kenya",
    year: "2023",
    category: "Road Works",
    scope: "Rehabilitation and widening of a major coastal highway including asphalt overlay, drainage improvement, and road markings covering over 40km of carriageway.",
    value: "Major Contract",
    tags: ["Road Rehabilitation", "Asphalt Paving", "Drainage"],
  },
  {
    id: 2,
    title: "Institutional Training Facility",
    location: "Nairobi, Kenya",
    year: "2022",
    category: "Building Construction",
    scope: "Design-and-build of a multi-storey institutional training center including lecture halls, administrative offices, ablution facilities, and perimeter security installations.",
    value: "Major Contract",
    tags: ["Commercial", "Design & Build", "Institutional"],
  },
  {
    id: 3,
    title: "Reinforced Concrete Security Perimeter",
    location: "Northern Kenya",
    year: "2022",
    category: "Civil & Structural",
    scope: "Construction of a reinforced concrete perimeter wall system with integrated security features including watchtowers, electrification infrastructure, and access control points.",
    value: "Medium Contract",
    tags: ["Reinforced Concrete", "Security", "Structural"],
  },
  {
    id: 4,
    title: "Hotel Construction Project",
    location: "Nairobi, Kenya",
    year: "2021",
    category: "Building Construction",
    scope: "Full construction of a mid-scale hotel facility including guest rooms, restaurant, conference rooms, reception area, kitchen facilities, and associated services.",
    value: "Major Contract",
    tags: ["Hospitality", "Multi-storey", "Commercial"],
  },
  {
    id: 5,
    title: "Rural Road Network Development",
    location: "Northern Kenya",
    year: "2021",
    category: "Road Works",
    scope: "Construction of 60+ km of murram and gravel roads connecting rural communities to market centers, including culvert installation and drainage structures.",
    value: "Major Contract",
    tags: ["Murram Roads", "Rural Infrastructure", "Culverts"],
  },
  {
    id: 6,
    title: "Residential Housing Development",
    location: "Nairobi Metropolitan Area",
    year: "2020",
    category: "Building Construction",
    scope: "Construction of a residential housing estate comprising multiple family units with shared infrastructure, landscaping, and utility connections.",
    value: "Medium Contract",
    tags: ["Residential", "Housing", "Development"],
  },
  {
    id: 7,
    title: "Water Reticulation System",
    location: "Nairobi, Kenya",
    year: "2020",
    category: "Water & Plumbing",
    scope: "Design and installation of a comprehensive water supply and distribution network serving a mixed-use development including industrial and commercial zones.",
    value: "Medium Contract",
    tags: ["Water Infrastructure", "Reticulation", "Plumbing"],
  },
  {
    id: 8,
    title: "Industrial Warehouse Complex",
    location: "Nairobi Industrial Area, Kenya",
    year: "2019",
    category: "Building Construction",
    scope: "Construction of a large-scale industrial warehouse and logistics facility with heavy-duty concrete floors, loading bays, office space, and security perimeter.",
    value: "Major Contract",
    tags: ["Industrial", "Warehouse", "Heavy Construction"],
  },
  {
    id: 9,
    title: "Bridge & Culvert Programme",
    location: "Rift Valley, Kenya",
    year: "2019",
    category: "Civil & Structural",
    scope: "Construction of multiple bridges and culvert systems as part of a rural road improvement programme, including reinforced concrete box culverts and span bridges.",
    value: "Medium Contract",
    tags: ["Bridges", "Culverts", "Civil Works"],
  },
];

const categories = [
  "All Projects",
  "Road Works",
  "Building Construction",
  "Civil & Structural",
  "Water & Plumbing",
];

const categoryColors: Record<string, string> = {
  "Road Works": "bg-blue-600/10 text-blue-400 border-blue-600/20",
  "Building Construction": "bg-purple-600/10 text-purple-400 border-purple-600/20",
  "Civil & Structural": "bg-orange-600/10 text-orange-400 border-orange-600/20",
  "Water & Plumbing": "bg-cyan-600/10 text-cyan-400 border-cyan-600/20",
};

export default function Projects() {
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
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/8 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="section-label mb-4 text-orange-400">Our Portfolio</div>
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Projects &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Experience
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              A portfolio of successfully delivered infrastructure projects across Kenya 
              and East Africa — demonstrating technical capability, versatility, and 
              commitment to quality.
            </p>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-slate-800">
            {[
              { v: "50+", l: "Projects Completed" },
              { v: "10+", l: "Years Experience" },
              { v: "5", l: "Service Sectors" },
              { v: "KE+", l: "East Africa Region" },
            ].map(({ v, l }) => (
              <div key={l} className="text-center sm:text-left">
                <div className="stat-number text-3xl font-black">{v}</div>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">{l}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-8 text-xs font-mono text-slate-600">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-orange-500">Projects</span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-[var(--bg-primary)] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="card-hover bg-[var(--bg-card)] border border-[var(--border)] rounded-sm overflow-hidden group"
              >
                {/* Visual header */}
                <div className="relative h-36 bg-[#0a0e17] overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-[0.1]"
                    style={{
                      backgroundImage: "linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-display font-black text-8xl text-orange-600/10 select-none group-hover:text-orange-600/15 transition-colors">
                      {String(project.id).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className={`inline-block px-2.5 py-1 text-[10px] font-mono font-medium tracking-wider uppercase rounded-sm border ${categoryColors[project.category] || "bg-gray-600/10 text-gray-400 border-gray-600/20"}`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-500">
                      <Calendar size={9} /> {project.year}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-600/40 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="font-display font-semibold text-[var(--text-primary)] text-lg mb-2 leading-snug group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-1.5 mb-4 text-xs text-[var(--text-muted)] font-mono">
                    <MapPin size={10} className="text-orange-500 flex-shrink-0" />
                    {project.location}
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {project.scope}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-muted)] rounded-sm"
                      >
                        <Tag size={8} /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[var(--text-muted)] text-sm mb-6">
              This is a representative selection of our project portfolio. 
              Contact us to discuss specific sector experience or references.
            </p>
            <Link href="/contact" className="btn-primary">
              Discuss Your Project <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Banner */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="section-label mb-3">Our Capacity</div>
              <h2 className="font-display font-bold text-4xl text-[var(--text-primary)] mb-5 leading-tight">
                Built to Handle{" "}
                <span className="text-orange-500">Complex Projects</span>
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                Our portfolio demonstrates versatility across geographic and operational 
                environments — from coastal highways to remote northern infrastructure, 
                institutional buildings to industrial facilities.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                We have the personnel, equipment, systems, and experience to take on 
                large and complex infrastructure projects as either principal contractor, 
                joint venture partner, or specialist subcontractor.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { l: "Contract Value Range", v: "Small to Major" },
                { l: "Geographic Reach", v: "Kenya & East Africa" },
                { l: "Sector Experience", v: "Public & Private" },
                { l: "Delivery Model", v: "Design-Build / EPC / BoQ" },
                { l: "Health & Safety", v: "ISO-Aligned HSE System" },
              ].map(({ l, v }) => (
                <div key={l} className="flex justify-between items-center py-3 border-b border-[var(--border)]">
                  <span className="text-sm text-[var(--text-secondary)]">{l}</span>
                  <span className="text-sm font-semibold text-orange-500 font-mono">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0e17] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-6">
            Add Your Project to Our{" "}
            <span className="text-orange-500">Portfolio</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-10">
            Join our growing list of satisfied clients who have benefited from 
            Notynox Engineering's professional delivery, technical expertise, and 
            commitment to quality construction.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Start a Conversation <ArrowRight size={16} />
            </Link>
            <a href="tel:+254720843234" className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 hover:border-orange-500 text-slate-300 hover:text-orange-400 font-semibold rounded-sm transition-all text-base">
              <Phone size={16} /> +254 720 843 234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
