export const personal = {
  name: "Harshit Sinha",
  role: "Full Stack Engineer",
  company: "Capgemini",
  email: "sinhaharshit67@gmail.com",
  phone: "+91-9653043939",
  github: "https://github.com/Harshitsinha98",
  linkedin: "https://www.linkedin.com/in/harshit-sinha98/",
  whatsapp: "https://wa.me/919653043939",
  resumeUrl: "/resume.pdf",
};

export const trustStats = [
  { label: "Years Building", value: 3, suffix: "+" },
  { label: "Active Clients", value: 3, suffix: "" },
  { label: "Products Shipped", value: 5, suffix: "+" },
  { label: "In Pipeline", value: 4, suffix: "" },
];

export const skills = {
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  Backend: ["Node.js", "Express", "NestJS", "Java", "Spring Boot", "REST APIs"],
  Database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
  Cloud: ["AWS", "Azure", "Vercel", "Docker", "CI/CD", "Linux"],
  "AI & Automation": ["Python", "OpenAI API", "RPA", "PowerShell", "n8n", "LangChain"],
};

export type ProjectStatus = "live" | "coming-soon";

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
    impact: "40% faster lead response time. 3x pipeline visibility for sales managers.",
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
    impact: "Reduced unplanned overages by 60%. Saved 12+ supervisor hours/week.",
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
    impact: "12+ inbound leads/month from organic search within 90 days of launch.",
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
    impact: "5x increase in event attendance. Enabled global donations from NRI devotees.",
    accent: "from-amber-500 to-orange-500",
    liveUrl: "https://pragathanumanji.in",
    displayUrl: "pragathanumanji.in",
    status: "live",
  },
  {
    id: "jewelry-ecom",
    title: "Jewelry & Lifestyle Ecommerce",
    tagline: "Premium ecommerce platform (WIP)",
    problem: "Boutique jewelry brand needed conversion-optimized ecommerce with luxury feel.",
    solution: "Headless commerce with cinematic product pages, AR try-on roadmap, and Razorpay checkout.",
    features: ["Headless catalog", "Wishlist + cart", "Razorpay + COD", "Order tracking", "Admin panel"],
    stack: ["Next.js", "Medusa.js", "PostgreSQL", "Stripe", "Tailwind"],
    impact: "In active development. Beta launch planned Q3.",
    accent: "from-rose-500 to-fuchsia-500",
    liveUrl: null,
    displayUrl: "launching soon",
    status: "coming-soon",
  },
];

// ─── Experience: real data, framed around engineering impact ──────────────────

export const experience = [
  {
    company: "Independent / Freelance",
    role: "Full Stack Product Engineer",
    period: "2022 — Present",
    location: "Remote",
    bullets: [
      "Shipped 5+ production products end-to-end — discovery, design, build, and maintenance",
      "Built Lead Management System, BreakIQ, Saran Tax Solution, and more for active clients",
      "Full ownership: architecture decisions, database design, deployment, and iteration",
      "Multiple products currently in active pipeline across e-commerce, fintech, and community",
    ],
  },
  {
    company: "Capgemini",
    role: "Technical Operations Lead",
    period: "Apr 2024 — Present",
    location: "India",
    bullets: [
      "Designed and deployed automated workflows using Python & RPA, cutting manual effort significantly",
      "Built data analytics pipelines (Python, MS Excel macros) to surface KPI trends across operations",
      "Led AI/chatbot integration projects to optimize end-user resolution journeys",
      "Coordinated with L3 and cross-functional engineering teams on critical incident resolution",
      "Architected process-improvement frameworks adopted across multiple global client accounts",
    ],
  },
  {
    company: "Indus Towers",
    role: "Infrastructure & Operations Engineer",
    period: "Dec 2022 — Jan 2024",
    location: "India",
    bullets: [
      "Managed operations for 150+ distributed infrastructure nodes — 99.9% uptime target",
      "Applied predictive analytics and Root Cause Analysis to eliminate recurring systemic failures",
      "Led transition to an autonomous smart-operations model reducing manual intervention by 40%",
      "Optimized energy consumption through data-driven resource analysis and strategic planning",
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
    title: "Product-First Mindset",
    desc: "I don't ship features. I ship outcomes that move business metrics.",
    icon: "Target",
  },
  {
    title: "Scalable Architecture",
    desc: "Clean, modular, well-typed systems built to grow from day one.",
    icon: "Layers",
  },
  {
    title: "Fast Execution",
    desc: "Tight feedback loops. Ship in days, not months. Iterate in hours.",
    icon: "Zap",
  },
  {
    title: "Business-Focused",
    desc: "Every technical decision tied to a measurable business outcome.",
    icon: "TrendingUp",
  },
  {
    title: "Modern UI Craft",
    desc: "Award-quality interfaces with motion, polish, and intent.",
    icon: "Sparkles",
  },
  {
    title: "Automation Mindset",
    desc: "If it can be automated, it will be — Python, RPA, or n8n.",
    icon: "Bot",
  },
];

export const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Lab", href: "#demo-lab" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
