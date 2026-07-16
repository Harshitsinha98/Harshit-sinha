export const personal = {
  name: "Harshit Sinha",
  role: "Product Builder & Automation",
  company: "Capgemini",
  email: "sinhaharshit67@gmail.com",
  phone: "+91-9653043939",
  github: "https://github.com/Harshitsinha98",
  linkedin: "https://www.linkedin.com/in/harshit-sinha98/",
  whatsapp: "https://wa.me/919653043939",
  resumeUrl: "/resume.pdf",
};

// Top-of-page trust bar: kept to builder-relevant, verifiable numbers only.
// The telecom ops stats (150+ tower sites, 99.9% uptime) are real, but they
// belong in the About/Experience story where there's context — showing them
// here at a glance reads as "is this a software builder or a NOC tech?"
export const trustStats = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Products Built", value: 5, suffix: "+" },
  { label: "Public Repos", value: 12, suffix: "+" },
];

export const skills = {
  "Build With": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
  Data: ["PostgreSQL", "MongoDB", "MySQL", "Prisma"],
  "Deploy & Cloud": ["Vercel", "Git", "CI/CD", "Linux"],
  "AI & Automation": ["AI-assisted development", "OpenAI API", "Python", "RPA", "n8n"],
  Operations: ["Incident response", "Uptime & monitoring", "Process automation"],
};

export type ProjectStatus = "live" | "in-progress" | "coming-soon";

export type Project = {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  impact: string;
  accent: string;
  liveUrl: string | null;
  displayUrl: string;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    id: "lead-management",
    title: "Lead Management System",
    tagline: "Business workflow + lead operations platform",
    problem:
      "Sales teams losing leads in spreadsheets with no follow-up automation or pipeline visibility.",
    solution:
      "End-to-end lead lifecycle platform with assignment rules, automated follow-ups, status pipelines, and real-time analytics.",
    features: [
      "Role-based access (Admin, Manager, Agent)",
      "Lead assignment + automation rules",
      "Real-time activity feed",
      "Custom pipeline stages",
      "Export & reporting",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Node.js", "Tailwind"],
    impact:
      "Built end-to-end — role-based access, assignment rules, automated follow-ups, and pipeline analytics. Deployed and demo-ready.",
    accent: "from-blue-500 to-cyan-500",
    liveUrl: "https://sns-ads-erp.vercel.app",
    displayUrl: "sns-ads-erp.vercel.app",
    status: "live",
  },
  {
    id: "breakiq",
    title: "BreakIQ",
    tagline: "Real-time workforce monitoring for teams & supervisors",
    problem:
      "Supervisors had no visibility into team compliance, causing SLA breaches and operational disputes.",
    solution:
      "Live status-tracking dashboard with policy enforcement, threshold alerts, and historical reporting per agent.",
    features: [
      "Live agent status board",
      "Configurable policy rules",
      "Threshold alerts to supervisors",
      "Shift-wise analytics",
      "Audit logs",
    ],
    stack: ["React", "Node.js", "WebSockets", "MongoDB", "Express"],
    impact:
      "Built end-to-end — live status board, configurable policy rules, threshold alerts, and shift analytics. Deployed and demo-ready.",
    accent: "from-purple-500 to-pink-500",
    liveUrl: "https://breakiq.in",
    displayUrl: "breakiq.in",
    status: "live",
  },
  {
    id: "saran-tax",
    title: "Saran Tax Solution",
    tagline: "Tax consultancy business website",
    problem:
      "Established tax consultancy with zero digital presence losing leads to competitors with modern sites.",
    solution:
      "SEO-optimized marketing site with service catalog, appointment booking, and lead capture funnel.",
    features: ["Service pages with schema", "Booking integration", "Blog/CMS", "Lead forms", "WhatsApp chat"],
    stack: ["Next.js", "Tailwind", "Sanity CMS", "Resend"],
    impact:
      "Live for a real tax consultancy — the site brings in genuine inbound leads through organic search.",
    accent: "from-emerald-500 to-teal-500",
    liveUrl: "https://sarantaxsolution.com",
    displayUrl: "sarantaxsolution.com",
    status: "live",
  },
  {
    id: "pragat-hanuman",
    title: "Pragat Hanuman Ji",
    tagline: "Temple website + devotee community",
    problem: "Temple needed digital presence for event announcements, donations, and devotee engagement.",
    solution: "Beautiful devotional site with event calendar, donation flow, and live darshan integration.",
    features: ["Event calendar", "Online donations", "Photo gallery", "Multi-language", "Newsletter"],
    stack: ["Next.js", "Tailwind", "Razorpay", "Cloudinary"],
    impact:
      "Built end-to-end — event calendar, online donations, photo gallery, and newsletter. Deployed and demo-ready.",
    accent: "from-amber-500 to-orange-500",
    liveUrl: "https://pragathanumanji.in",
    displayUrl: "pragathanumanji.in",
    status: "live",
  },
  {
    id: "jewelry-ecom",
    title: "Shivis Elegance",
    tagline: "Full-stack jewelry ecommerce platform with a dedicated admin dashboard",
    problem:
      "Jewelry brand needed more than a storefront — a complete system to manage products, inventory, orders, customers, and revenue alongside the customer-facing shop.",
    solution:
      "Built two connected systems: a customer store with OTP-based login, dual payment gateways, and self-serve order tracking/returns, plus a separate admin dashboard for full inventory, order, customer, revenue, and coupon management — with Shiprocket wired in to auto-generate AWBs the moment an order is placed.",
    features: [
      "Admin dashboard — products, inventory, orders, customers, revenue",
      "OTP-based customer login & account management",
      "Razorpay + Stripe payment gateways",
      "Shiprocket integration — auto AWB generation on order placement",
      "Customer order tracking & returns",
      "Admin-managed discount coupons",
    ],
    stack: ["Next.js", "Node.js", "Express", "PostgreSQL", "Razorpay", "Shiprocket API"],
    impact:
      "End-to-end order lifecycle — checkout, payments, shipping, and admin ops — tested and fully functional in production. Full product catalog and final polish still in progress.",
    accent: "from-rose-400 to-amber-500",
    liveUrl: "https://shivis-elegance1.vercel.app",
    displayUrl: "shivis-elegance1.vercel.app",
    status: "in-progress",
  },
];

// ─── Experience: real data, framed around engineering impact ──────────────────

export const experience = [
  {
    company: "Independent Projects",
    role: "Product Builder — AI-Assisted Development",
    period: "2023 — Present",
    location: "Remote",
    bullets: [
      "Design, build, and ship web products end-to-end using AI-assisted development — from idea and UX to integrations and deployment",
      "Shipped Saran Tax Solution (live, generating real inbound leads); built Lead Management, BreakIQ, a temple site, and a jewelry store (deployed, in pre-launch)",
      "Own the full journey: product decisions, third-party integrations (payments, shipping, CMS), and deployment on Vercel",
      "Actively building core software engineering fundamentals alongside AI-assisted delivery, to own more of the stack independently over time",
    ],
  },
  {
    company: "Capgemini",
    role: "Software Engineer / Analyst",
    period: "Apr 2024 — Present",
    location: "India",
    bullets: [
      "Build and maintain Python & RPA automation workflows that cut repetitive manual effort across operations",
      "Write scripts and reporting pipelines (Python, Excel) to surface operational KPI trends for stakeholders",
      "Support AI / chatbot integration efforts to improve end-user resolution journeys",
      "Coordinate with L3 and cross-functional teams on incident resolution across client accounts",
    ],
  },
  {
    company: "Indus Towers",
    role: "Field Operations Engineer",
    period: "Dec 2022 — Jan 2024",
    location: "India",
    bullets: [
      "Managed field operations for 150+ telecom tower sites across an assigned region",
      "Delivered 99.9% network uptime through preventive maintenance and fast fault resolution",
      "Coordinated on-ground teams and vendors for repairs, power, and site upkeep",
      "Ran root-cause analysis on recurring faults to reduce repeat outages",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech — Electronics & Communication Engineering",
    school: "BBDNITM, Lucknow",
    year: "2022",
  },
];

export const certifications = [
  "Python Data Structures — Coursera",
  "Google Workspace Advanced Administration",
  "Business Transformation with Google Cloud",
  "ITIL Foundation Principles",
];

export const valueProps = [
  {
    title: "Ships End-to-End",
    desc: "I take ideas all the way to a deployed, working product — not just mockups.",
    icon: "Rocket",
  },
  {
    title: "AI-Native Builder",
    desc: "I use AI tools to design, integrate, and build fast — and I'm learning the fundamentals underneath.",
    icon: "Sparkles",
  },
  {
    title: "Automation Mindset",
    desc: "If a task is repetitive, I automate it — Python, RPA, and n8n.",
    icon: "Bot",
  },
  {
    title: "Operations Discipline",
    desc: "Years keeping real infrastructure at 99.9% uptime taught me reliability and ownership.",
    icon: "Activity",
  },
  {
    title: "Fast Learner",
    desc: "I pick up new tools and domains quickly — and go from zero to shipped.",
    icon: "Zap",
  },
  {
    title: "Full Ownership",
    desc: "I take responsibility for the whole thing — build, deploy, fix, iterate.",
    icon: "Target",
  },
];

export const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Lab", href: "#demo-lab" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

// ─── Testimonials ───────────────────────────────────────────────────────────
//
// Testimonials are no longer stored here. Submissions go through
// /testimonial -> POST /api/testimonials -> Redis, and publish to the
// homepage automatically (fetched live from GET /api/testimonials).
// Manage/remove entries at /admin/testimonials. See lib/testimonials-store.ts
// and README.md for the full setup.
