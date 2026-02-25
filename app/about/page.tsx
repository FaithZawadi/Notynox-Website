import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Shield,
  Award,
  Lightbulb,
  Leaf,
  Users,
  HardHat,
  CheckCircle2,
  Building,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Civil Engineering Company Nairobi Kenya",
  description:
    "Notynox Engineering Limited — incorporated in 2013, we are a leading civil engineering and construction company delivering infrastructure across Kenya and East Africa. Learn our story, mission, and values.",
};

const coreValues = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We conduct all our business activities with honesty, transparency, and ethical responsibility. Our clients trust us because we say what we mean and deliver what we promise.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We pursue the highest standards in workmanship, management, and service delivery on every project — regardless of size or scope.",
  },
  {
    icon: HardHat,
    title: "Safety First",
    description:
      "Safety is not optional. Our comprehensive HSE Management System ensures that every worker goes home safely every day.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace modern engineering practices, advanced construction techniques, and continuously improve our methodologies to deliver better outcomes.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We build responsibly, balancing economic growth with environmental preservation and minimizing our ecological footprint on every project.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "We work collaboratively with clients, consultants, subcontractors, and stakeholders to achieve shared success on every engagement.",
  },
];

const leadership = [
  { role: "Civil Engineering", desc: "Licensed civil engineers with extensive field and design experience" },
  { role: "Project Management", desc: "Certified PMs ensuring on-time, on-budget delivery" },
  { role: "Architecture", desc: "Creative architects delivering functional, compliant designs" },
  { role: "Mechanical Engineering", desc: "Specialists in plant, equipment, and mechanical systems" },
  { role: "Health & Safety", desc: "Dedicated HSE officers ensuring regulatory compliance" },
  { role: "Finance & Legal", desc: "Expert financial and legal oversight for project governance" },
];

const timeline = [
  { year: "2013", event: "Incorporated in Nairobi, Kenya as a limited liability company" },
  { year: "2014", event: "First major civil works contract awarded — institutional infrastructure" },
  { year: "2016", event: "Registered road works contractor — expanded to highway construction" },
  { year: "2018", event: "Fleet expansion: acquired crushing and screening equipment" },
  { year: "2020", event: "Expanded service area to coastal and northern Kenya regions" },
  { year: "2022", event: "Launched certified scaffolding services division" },
  { year: "2024", event: "Over 50 successfully completed projects across East Africa" },
];

export default function About() {
  return (
    <>
      {/* Page Hero */}
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
            <div className="section-label mb-4 text-orange-400">About Notynox</div>
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Engineering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Excellence
              </span>{" "}
              Since 2013
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              From a focused civil engineering practice to East Africa's trusted 
              full-spectrum construction and infrastructure company — this is our story.
            </p>
          </div>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mt-10 text-xs font-mono text-slate-600">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-orange-500">About</span>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-3">Our Story</div>
              <h2 className="font-display font-bold text-4xl text-[var(--text-primary)] mb-5 leading-tight">
                A Company Built on{" "}
                <span className="text-orange-500">Engineering Conviction</span>
              </h2>
              <div className="accent-line mb-6" />
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Notynox Engineering Limited is a fully registered limited liability 
                  company incorporated in September 2013. From our headquarters in Nairobi, 
                  we serve clients throughout Kenya and the broader East African region.
                </p>
                <p>
                  Our company was founded with a clear vision: to provide dependable, 
                  technically sound, and professionally managed construction services that 
                  meet international standards while addressing local development needs.
                </p>
                <p>
                  Over the years, we have built a reputation for reliability, safety 
                  consciousness, and technical competence. Our leadership team comprises 
                  qualified professionals across civil engineering, mechanical engineering, 
                  architecture, project management, finance, and legal compliance.
                </p>
                <p>
                  This multidisciplinary expertise enables us to manage projects 
                  holistically — from feasibility studies and design to construction, 
                  commissioning, and maintenance.
                </p>
              </div>
            </div>

            {/* Mission / Vision */}
            <div className="space-y-5">
              <div className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-sm hover:border-orange-500/40 transition-colors group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-600/10 border border-orange-600/20 flex items-center justify-center rounded-sm group-hover:bg-orange-600/20 transition-colors">
                    <Target size={18} className="text-orange-500" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">Our Mission</h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                  To be a preeminent provider of superior construction and engineering services 
                  by consistently improving quality through innovation, integrity, technical excellence, 
                  and disciplined project execution. We aim to deliver projects safely, on schedule, 
                  within budget, and to the highest professional standards.
                </p>
              </div>

              <div className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-sm hover:border-orange-500/40 transition-colors group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-600/10 border border-orange-600/20 flex items-center justify-center rounded-sm group-hover:bg-orange-600/20 transition-colors">
                    <Eye size={18} className="text-orange-500" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">Our Vision</h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                  To battle the impossible and build the unimaginable — transforming ambitious 
                  ideas into enduring infrastructure that drives economic growth, improves 
                  communities, and stands the test of time.
                </p>
              </div>

              <div className="p-6 bg-orange-600 rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Heart size={18} className="text-white" />
                  <h3 className="font-display font-bold text-xl text-white">Our Purpose</h3>
                </div>
                <p className="text-orange-100 leading-relaxed text-sm">
                  We do not merely construct buildings and roads — we create durable 
                  infrastructure that drives economic growth, improves communities, 
                  and stands for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-3">What Drives Us</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)] mb-4">
              Core <span className="text-orange-500">Values</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm leading-relaxed">
              These principles define who we are, how we work, and why our clients 
              trust us with their most important infrastructure projects.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreValues.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="card-hover bg-[var(--bg-card)] border border-[var(--border)] p-7 rounded-sm group"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 bg-orange-600/10 border border-orange-600/20 flex items-center justify-center mb-5 rounded-sm group-hover:bg-orange-600/20 transition-colors">
                  <Icon size={20} className="text-orange-500" />
                </div>
                <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-3">
                  {title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="section-label mb-3">Our People</div>
              <h2 className="font-display font-bold text-4xl text-[var(--text-primary)] mb-5 leading-tight">
                Expert Leadership{" "}
                <span className="text-orange-500">Team</span>
              </h2>
              <div className="accent-line mb-5" />
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Our strength lies in our people. We employ qualified engineers, 
                architects, project managers, safety officers, surveyors, and 
                skilled technicians with extensive field experience.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Continuous training and professional development ensure our team 
                remains aligned with international industry best practices and 
                the latest engineering standards.
              </p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {leadership.map(({ role, desc }) => (
                <div
                  key={role}
                  className="flex items-start gap-3 p-5 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-sm hover:border-orange-500/40 transition-colors group"
                >
                  <CheckCircle2 size={16} className="text-orange-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold text-sm text-[var(--text-primary)] mb-1">{role}</div>
                    <div className="text-xs text-[var(--text-muted)] leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#0a0e17] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-3 text-orange-400">Our Journey</div>
            <h2 className="font-display font-bold text-4xl text-white">
              Building <span className="text-orange-500">Milestones</span>
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-16 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-600/40 to-transparent -translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map(({ year, event }, i) => (
                <div
                  key={year}
                  className={`relative flex items-center gap-6 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 pl-24 sm:pl-0">
                    <div
                      className={`bg-slate-800/60 border border-slate-700/50 p-5 rounded-sm hover:border-orange-500/40 transition-colors ${
                        i % 2 === 0 ? "sm:mr-8 sm:ml-0" : "sm:ml-8 sm:mr-0"
                      }`}
                    >
                      <div className="font-mono text-orange-500 text-xs tracking-wider mb-2">
                        {year}
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">{event}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-14 sm:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-orange-600 border-4 border-[#0a0e17] flex-shrink-0 z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-4xl text-[var(--text-primary)] mb-4">
            Partner With <span className="text-orange-500">Notynox</span>
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
            Ready to discuss your project? Our team is available to provide 
            professional consultation, competitive quotations, and turnkey engineering solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Us <ArrowRight size={15} />
            </Link>
            <Link href="/services" className="btn-outline text-[var(--text-primary)] border-[var(--border)]">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
