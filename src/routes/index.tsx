import { createFileRoute } from "@tanstack/react-router";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowUpRight,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Sparkles,
  Trophy,
  BookOpen,
  Users,
  FileText,
  MapPin,
  Rocket,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    title: "Smart Hospital Queue Management System",
    tag: "Full-stack · Healthcare",
    blurb:
      "Real-time queue platform that cuts patient wait times using predictive scheduling, live dashboards, and role-based access for staff and patients.",
    stack: ["React", "Node.js", "SQL", "REST APIs"],
  },
  {
    title: "Smart Online College Admission Management System",
    tag: "Full-stack · EdTech",
    blurb:
      "Production-ready admission platform that digitizes the entire journey from registration to confirmation, with role-based portals for students, faculty, and admins, document uploads, JWT auth, real-time notifications, and email updates.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    repo: "https://github.com/HariRathnam-hub/College_Admission_Platform",
    live: "https://college-admission-platform.vercel.app",
  },
];

const SKILLS: { group: string; icon: React.ComponentType<{ className?: string }>; items: string[] }[] = [
  { group: "Languages", icon: Code2, items: ["Java", "Python", "JavaScript", "SQL"] },
  { group: "Frameworks", icon: Cpu, items: ["React", "Node.js", "REST APIs"] },
  { group: "Data & Cloud", icon: Database, items: ["AWS", "Tableau", "ML"] },
  { group: "Tools", icon: Sparkles, items: ["Git", "GitHub", "VS Code"] },
];

const EXPERIENCE = [
  {
    role: "Data Science Intern",
    org: "Industry Internship",
    period: "2024",
    points: [
      "Built data pipelines and exploratory dashboards on real business datasets.",
      "Applied ML techniques to surface actionable insights for stakeholders.",
    ],
  },
  {
    role: "DSA Mentor",
    org: "Peer Learning Program",
    period: "2023 — Present",
    points: [
      "Coached 40+ students on Data Structures & Algorithms and interview prep.",
      "Designed structured problem sets and weekly contest reviews.",
    ],
  },
];

const CERTIFICATIONS = [
  "AWS Cloud Foundations",
  "Python for Data Science",
  "Tableau Analyst",
  "Machine Learning Essentials",
];

const ACHIEVEMENTS = [
  "500+ DSA problems solved across LeetCode & GFG",
  "Top performer, college coding contests",
  "Mentored juniors into placement-ready roles",
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ambient background orbs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-indigo/30 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-cyan/25 blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-purple/25 blur-3xl animate-blob [animation-delay:-12s]" />
      </div>

      <Nav />

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <Hero />
        <BentoGrid />
        <Projects />
        <Skills />
        <Experience />
        <Extras />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full glass-dark px-3 py-2 sm:px-5">
      <a href="#top" className="flex items-center gap-2 pl-2 font-display text-sm font-semibold tracking-tight">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-brand text-[11px] font-bold text-white">
          HR
        </span>
        <span className="hidden sm:inline">Hari Rathnam</span>
      </a>
      <nav className="hidden items-center gap-1 md:flex">
        {NAV.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className="rounded-full px-3 py-1.5 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
          >
            {n.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-1.5 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset] transition hover:opacity-95"
      >
        Get in touch
        <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-6">
      <div className="glass-dark relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-70 blur-3xl"
          style={{ background: "conic-gradient(from 180deg, #4F46E5, #7C3AED, #06B6D4, #4F46E5)" }}
        />
        <div className="relative flex flex-col gap-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px] shadow-cyan" />
            Available for internships & collaborations
          </span>

          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[72px]">
            Building intelligent,
            <br />
            human-centered <span className="text-gradient">software.</span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            I'm <strong className="font-semibold text-white">Hari Rathnam S</strong> — a third-year Computer Science
            &amp; Engineering student at SRM Easwari Engineering College and an aspiring software engineer. I design and
            ship full-stack systems, mentor peers in DSA, and explore ML at the edge of research and
            product.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-white/90"
            >
              <Rocket className="h-4 w-4" /> View projects
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              <FileText className="h-4 w-4" /> Download resume
            </a>
            <div className="ml-1 flex items-center gap-1.5">
              <IconLink href="https://github.com/harirathnam-hub" label="GitHub"><Github className="h-4 w-4" /></IconLink>
              <IconLink href="https://linkedin.com/" label="LinkedIn"><Linkedin className="h-4 w-4" /></IconLink>
              <IconLink href="https://leetcode.com/" label="LeetCode"><Code2 className="h-4 w-4" /></IconLink>
            </div>
          </div>

          <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:max-w-md">
            <Stat k="8.8" v="CGPA" />
            <Stat k="40+" v="Mentees" />
            <Stat k="500+" v="DSA problems" />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="font-display text-2xl font-bold text-white sm:text-3xl">{k}</dt>
      <dd className="text-xs uppercase tracking-wider text-white/60">{v}</dd>
    </div>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  );
}

function BentoGrid() {
  return (
    <section id="about" className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-6 sm:gap-5">
      {/* About */}
      <div className="glass hover-lift col-span-1 rounded-3xl p-6 sm:col-span-4">
        <SectionLabel icon={Sparkles}>About</SectionLabel>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
          A student engineer who ships.
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          I love turning messy real-world problems into clean, dependable software. Whether it's a
          hospital queue that respects a patient's time, or an admission platform that makes applying to
          college simple, my work starts with people and ends with production-quality code.
        </p>
      </div>

      {/* Education */}
      <div className="glass hover-lift col-span-1 rounded-3xl p-6 sm:col-span-2">
        <SectionLabel icon={GraduationCap}>Education</SectionLabel>
        <div className="mt-4 space-y-1">
          <p className="font-display text-lg font-semibold leading-tight">B.E. Computer Science &amp; Engineering</p>
          <p className="text-sm text-muted-foreground">SRM Easwari Engineering College</p>
          <p className="text-sm text-muted-foreground">Third Year</p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-brand-soft px-2.5 py-1 text-xs font-medium">
            CGPA <span className="text-gradient font-bold">8.8</span>
          </p>
        </div>
      </div>

      {/* Location */}
      <div className="glass hover-lift col-span-1 rounded-3xl p-6 sm:col-span-2">
        <SectionLabel icon={MapPin}>Based in</SectionLabel>
        <p className="mt-3 font-display text-xl font-semibold">Chennai, India</p>
        <p className="mt-1 text-sm text-muted-foreground">Open to remote & relocation</p>
      </div>

      {/* Now */}
      <div className="glass-dark hover-lift relative col-span-1 overflow-hidden rounded-3xl p-6 sm:col-span-4">
        <SectionLabel icon={Cpu} tone="dark">Currently</SectionLabel>
        <ul className="mt-3 space-y-2 text-[15px] text-white/80">
          <li className="flex items-start gap-2"><Dot /> Exploring distributed systems & clean architecture.</li>
          <li className="flex items-start gap-2"><Dot /> Mentoring peers through structured DSA sprints.</li>
          <li className="flex items-start gap-2"><Dot /> Building full-stack platforms that simplify real-world workflows.</li>
        </ul>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />;
}

function SectionLabel({
  icon: Icon,
  children,
  tone = "light",
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div className={`flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] ${tone === "dark" ? "text-white/60" : "text-muted-foreground"}`}>
      <Icon className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="mt-16">
      <SectionHeader eyebrow="Selected work" title="Projects that shipped." />
      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className="glass hover-lift group relative overflow-hidden rounded-3xl p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-gradient">
                  {p.tag}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-snug tracking-tight">
                  {p.title}
                </h3>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-brand text-white transition group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{p.blurb}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-white/60 px-2.5 py-1 text-xs font-medium text-foreground/80 backdrop-blur"
                >
                  {s}
                </span>
              ))}
            </div>
            {"repo" in p && (
              <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/60 px-3.5 py-1.5 backdrop-blur transition hover:bg-white"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-3.5 py-1.5 text-white transition hover:opacity-95"
                >
                  <ExternalLink className="h-4 w-4" /> Live demo
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mt-16">
      <SectionHeader eyebrow="Toolkit" title="Skills & technologies." />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((s) => (
          <div key={s.group} className="glass hover-lift rounded-3xl p-6">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-brand-soft text-indigo">
              <s.icon className="h-5 w-5" />
            </span>
            <h4 className="mt-4 font-display text-lg font-semibold">{s.group}</h4>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {s.items.map((i) => (
                <li
                  key={i}
                  className="rounded-full bg-white/70 px-2.5 py-1 text-xs font-medium text-foreground/80"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mt-16">
      <SectionHeader eyebrow="Experience" title="Where I've built & mentored." />
      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {EXPERIENCE.map((e) => (
          <div key={e.role} className="glass hover-lift rounded-3xl p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h4 className="font-display text-xl font-semibold tracking-tight">{e.role}</h4>
                <p className="text-sm text-muted-foreground">{e.org}</p>
              </div>
              <span className="rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium">
                {e.period}
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-[15px] text-foreground/80">
              {e.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2"><Dot /> {pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Extras() {
  return (
    <section className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-6">
      <div className="glass hover-lift rounded-3xl p-7 sm:col-span-3">
        <SectionLabel icon={BookOpen}>Certifications</SectionLabel>
        <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {CERTIFICATIONS.map((c) => (
            <li key={c} className="flex items-center gap-2 rounded-2xl border border-border bg-white/60 px-3 py-2 text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
              {c}
            </li>
          ))}
        </ul>
      </div>
      <div className="glass hover-lift rounded-3xl p-7 sm:col-span-3">
        <SectionLabel icon={Trophy}>Achievements</SectionLabel>
        <ul className="mt-4 space-y-2 text-[15px] text-foreground/85">
          {ACHIEVEMENTS.map((a) => (
            <li key={a} className="flex items-start gap-2"><Dot /> {a}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mt-16">
      <div className="glass-dark relative overflow-hidden rounded-[2rem] p-10 sm:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full opacity-60 blur-3xl"
          style={{ background: "conic-gradient(from 0deg, #06B6D4, #7C3AED, #4F46E5, #06B6D4)" }}
        />
        <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionLabel icon={Users} tone="dark">Let's build something</SectionLabel>
            <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Have an idea, an internship, or a problem worth solving?
            </h3>
            <p className="mt-3 max-w-xl text-white/70">
              I'm actively looking for software engineering internships and collaborative projects.
              The fastest way to reach me is over email.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:harirathnam@example.com"
              className="group inline-flex items-center justify-between gap-3 rounded-2xl bg-white px-5 py-4 text-ink transition hover:bg-white/90"
            >
              <span className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span className="font-medium">Email me</span>
              </span>
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <div className="grid grid-cols-3 gap-2">
              <SmallLink href="https://github.com/harirathnam-hub" icon={Github} label="GitHub" />
              <SmallLink href="https://linkedin.com/" icon={Linkedin} label="LinkedIn" />
              <SmallLink href="https://leetcode.com/" icon={Code2} label="LeetCode" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SmallLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/15 bg-white/5 px-3 py-3 text-white/85 backdrop-blur transition hover:bg-white/10"
    >
      <Icon className="h-4 w-4" />
      <span className="text-[11px]">{label}</span>
    </a>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient">{eyebrow}</span>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="glass flex flex-col items-center justify-between gap-3 rounded-full px-6 py-4 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Hari Rathnam S · Crafted with care.
        </p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <a href="#top" className="hover:text-foreground">Back to top</a>
          <span>·</span>
          <a href="https://github.com/harirathnam-hub" className="inline-flex items-center gap-1 hover:text-foreground">
            Source <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
