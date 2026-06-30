export const personal = {
  name: "Harshit Sinha",
  role: "Full Stack Engineer",
  company: "Capgemini",
  email: "sinhaharshit67@gmail.com",
  phone: "+91-9653043939",
  github: "[github.com](https://github.com/Harshitsinha98)",
  linkedin: "[linkedin.com](https://www.linkedin.com/in/harshit-sinha98/)",
  whatsapp: "[wa.me](https://wa.me/919653043939)",
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
  Cloud: ["AWS", "Vercel", "Docker", "CI/CD", "Nginx", "Linux"],
  "AI & Automation": ["OpenAI API", "LangChain", "n8n", "Python", "Web Scraping"],
};

export const projects = [
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
  },
  {
    id: "breakiq",
    title: "BreakIQ",
    tagline: "Real-time break monitoring for agents & supervisors",
    problem:
      "BPO supervisors had no visibility into break compliance, causing SLA breaches and payroll disputes.",
    solution:
      "Live break tracking dashboard with policy enforcement, alerts, and historical reporting per agent.",
    features: [
      "Live agent status board",
      "Configurable break policies",
      "Threshold alerts to supervisors",
      "Shift-wise analytics",
      "Audit logs",
    ],
    stack: ["React", "Node.js", "WebSockets", "MongoDB", "Express"],
    impact: "Reduced unplanned break overages by 60%. Saved 12+ supervisor hours/week.",
    accent: "from-purple-500 to-pink-500",
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
  },
];

export const experience = [
  {
    company: "Capgemini",
    role: "Software Engineer",
    period: "2023 — Present",
    location: "India",
    bullets: [
      "Building enterprise-grade applications for Fortune 500 clients",
      "Architecting scalable microservices and modern frontends",
      "Driving code quality and engineering best practices",
    ],
  },
  {
    company: "Independent / Freelance",
    role: "Full Stack Product Engineer",
    period: "2023 — Present",
    location: "Remote",
    bullets: [
      "Shipped 5+ production products for 3 active clients",
      "End-to-end ownership: discovery → design → ship → maintain",
      "Multiple products currently in active pipeline",
    ],
  },
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
    title: "Robust Backend",
    desc: "Production-hardened APIs, databases, and infrastructure.",
    icon: "Server",
  },
];

export const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Demo Lab", href: "/demo-lab" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

