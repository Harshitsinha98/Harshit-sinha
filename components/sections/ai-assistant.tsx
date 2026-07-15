"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, User, Bot } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { personal, skills, projects, experience, education, certifications } from "@/lib/data";

// ── Knowledge base — answers are built from real data so they never drift ──────

const skillLine = Object.entries(skills)
  .map(([k, v]) => `${k}: ${v.join(", ")}`)
  .join(" · ");

const projectAnswer = (id: string) => {
  const p = projects.find((x) => x.id === id)!;
  const link = p.liveUrl
    ? p.status === "in-progress"
      ? `🔗 Live at ${p.displayUrl} — core system is live and tested, final polish + full catalog in progress.`
      : `🔗 Live at ${p.displayUrl}`
    : "🚧 Currently in development — beta planned Q3.";
  return `${p.title} — ${p.tagline}.\n\nProblem: ${p.problem}\nSolution: ${p.solution}\nImpact: ${p.impact}\n\nStack: ${p.stack.join(", ")}.\n${link}`;
};

type Intent = {
  id: string;
  keywords: string[];
  answer: string;
  followups: string[];
};

const intents: Intent[] = [
  {
    id: "skills",
    keywords: ["skill", "skills", "good at", "expertise", "specialise", "specialize", "capable", "what can you do", "strength"],
    answer: `Harshit is a full-stack product engineer. Core strengths → ${skillLine}.`,
    followups: ["tech stack", "automation work", "show me projects"],
  },
  {
    id: "tech",
    keywords: ["tech stack", "stack", "technologies", "tools", "frameworks", "languages", "what do you use", "tech"],
    answer: `Stack in one line → Frontend: Next.js, React, TypeScript, Tailwind, Framer Motion. Backend: Node.js, Express, NestJS, Java, Spring Boot. DB: PostgreSQL, MongoDB, MySQL, Redis, Prisma. Cloud: AWS, Azure, Vercel, Docker, CI/CD. AI & Automation: Python, OpenAI API, LangChain, RPA, n8n.`,
    followups: ["skills", "automation work", "how do I reach him?"],
  },
  {
    id: "projects",
    keywords: ["project", "projects", "work", "portfolio", "built", "shipped", "products", "case study", "case studies"],
    answer:
      `${projects.length} products shipped/in-progress:\n\n` +
      projects
        .map(
          (p) =>
            `• ${p.title} — ${p.tagline} ${
              p.status === "live" ? "🟢 live" : p.status === "in-progress" ? "🟡 in progress" : "🟠 soon"
            }`
        )
        .join("\n") +
      `\n\nAsk me about any one by name (e.g. "tell me about BreakIQ") or open the Live Showroom above to click through them.`,
    followups: ["tell me about BreakIQ", "the lead management system", "the temple website"],
  },
  {
    id: "p-lead",
    keywords: ["lead management", "lead", "crm", "sales", "erp", "sns-ads", "pipeline platform"],
    answer: projectAnswer("lead-management"),
    followups: ["other projects", "tech stack", "how do I reach him?"],
  },
  {
    id: "p-breakiq",
    keywords: ["breakiq", "break iq", "workforce", "monitoring", "break management", "supervisor"],
    answer: projectAnswer("breakiq"),
    followups: ["other projects", "the lead management system", "how do I reach him?"],
  },
  {
    id: "p-tax",
    keywords: ["tax", "saran", "consultant", "consultancy", "accounting"],
    answer: projectAnswer("saran-tax"),
    followups: ["other projects", "the temple website", "how do I reach him?"],
  },
  {
    id: "p-temple",
    keywords: ["temple", "hanuman", "pragat", "devotee", "darshan", "religious", "donation"],
    answer: projectAnswer("pragat-hanuman"),
    followups: ["other projects", "the jewelry store", "how do I reach him?"],
  },
  {
    id: "p-jewelry",
    keywords: ["jewelry", "jewellery", "jewel", "ecommerce", "ecom", "store", "shop"],
    answer: projectAnswer("jewelry-ecom"),
    followups: ["other projects", "what he can do", "how do I reach him?"],
  },
  {
    id: "experience",
    keywords: ["experience", "background", "career", "history", "worked", "job", "employment", "years"],
    answer:
      experience
        .map((e) => `• ${e.role} @ ${e.company} (${e.period}) — ${e.bullets[0]}`)
        .join("\n") + `\n\n3+ years building production software end-to-end.`,
    followups: ["what about Capgemini?", "skills", "how do I reach him?"],
  },
  {
    id: "capgemini",
    keywords: ["capgemini", "current job", "current role", "day job", "9 to 5"],
    answer: `At Capgemini (Apr 2024–present) Harshit is a Technical Operations Lead — designing Python & RPA automation, building analytics pipelines, leading AI/chatbot integrations, and coordinating with L3 engineering on critical incidents across global client accounts.`,
    followups: ["experience", "automation work", "how do I reach him?"],
  },
  {
    id: "automation",
    keywords: ["automation", "automate", "rpa", "python", "n8n", "bot", "script", "workflow", "ai integration"],
    answer: `Automation is a core focus: Python scripting, RPA tools, n8n workflow automation, PowerShell, and AI/chatbot integrations deployed at enterprise scale — cutting manual effort significantly and surfacing KPI trends across operations.`,
    followups: ["tech stack", "what he can do", "how do I reach him?"],
  },
  {
    id: "services",
    keywords: ["service", "services", "offer", "help with", "do for me", "provide", "build for me", "what can he do", "looking for", "role", "roles", "position", "fit"],
    answer: `What Harshit brings to a team: full-stack web apps (Next.js / React + Node), scalable backends and APIs, cloud + CI/CD, and Python / RPA automation — with full ownership from design to production. Open to full-time software engineering roles (and select freelance work).`,
    followups: ["how do I reach him?", "show me projects", "tech stack"],
  },
  {
    id: "hire",
    keywords: ["hire", "contact", "reach", "email", "get in touch", "connect", "talk", "work together", "available", "availability", "recruit", "recruiter", "opportunity", "job", "interview"],
    answer: `Open to full-time roles and select freelance ✅\n\n📧 ${personal.email}\n📱 ${personal.phone}\n🔗 LinkedIn: ${personal.linkedin}\n💬 WhatsApp: ${personal.whatsapp}\n\nOr just use the contact form below.`,
    followups: ["what's he looking for?", "resume", "experience"],
  },
  {
    id: "pricing",
    keywords: ["price", "pricing", "cost", "rate", "rates", "budget", "charge", "quote", "how much", "salary", "compensation", "ctc", "notice period"],
    answer: `Harshit is primarily looking for full-time software engineering roles — compensation and notice period are best discussed directly, based on the role. For freelance work he takes on fixed-scope engagements. Reach out via the contact form to talk specifics.`,
    followups: ["how do I reach him?", "experience", "show me projects"],
  },
  {
    id: "resume",
    keywords: ["resume", "cv", "download", "pdf"],
    answer: `You can view or download Harshit's full resume from the Resume section above (or the "Resume" button in the nav). It covers experience, skills, education, and certifications.`,
    followups: ["experience", "education", "how do I reach him?"],
  },
  {
    id: "education",
    keywords: ["education", "degree", "college", "university", "study", "studied", "graduate", "btech", "b.tech"],
    answer: `${education[0].degree} — ${education[0].school} (${education[0].year}). Plus certifications: ${certifications.join(", ")}.`,
    followups: ["experience", "skills", "how do I reach him?"],
  },
  {
    id: "location",
    keywords: ["location", "where", "based", "country", "city", "remote", "timezone"],
    answer: `Harshit is based in India and works remotely with teams globally — open to remote roles and relocation. Comfortable across timezones for async or live collaboration.`,
    followups: ["how do I reach him?", "experience", "what he can do"],
  },
  {
    id: "why",
    keywords: ["why", "why you", "why hire", "why harshit", "what makes", "different", "better", "stand out"],
    answer: `Why Harshit: product-first mindset (ships outcomes, not just features), clean scalable architecture, fast execution with tight feedback loops, and every technical decision tied to a measurable business result — backed by 5+ live products.`,
    followups: ["show me projects", "skills", "how do I reach him?"],
  },
];

const greetings = ["hi", "hello", "hey", "yo", "namaste", "hola", "sup"];
const thanks = ["thanks", "thank you", "thx", "great", "cool", "awesome", "nice"];

const norm = (s: string) => ` ${s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim()} `;

function respond(query: string): { text: string; followups: string[] } {
  const q = norm(query);
  const words = q.trim().split(" ");

  // greetings / thanks — short circuit
  if (words.length <= 3 && greetings.some((g) => words.includes(g))) {
    return {
      text: "Hey! 👋 I'm Harshit's assistant. Ask me about his skills, any project, experience, automation work, what he's looking for, or how to reach him.",
      followups: ["skills", "show me projects", "how do I reach him?"],
    };
  }
  if (thanks.some((t) => q.includes(` ${t} `))) {
    return {
      text: "Anytime! 🙌 Anything else you'd like to know — projects, experience, or how to get in touch?",
      followups: ["show me projects", "how do I reach him?", "why Harshit?"],
    };
  }

  // score every intent by keyword hits (longer keywords weigh more)
  let best: Intent | null = null;
  let bestScore = 0;
  for (const intent of intents) {
    let score = 0;
    for (const kw of intent.keywords) {
      if (q.includes(` ${kw} `) || q.includes(`${kw} `) || q.includes(` ${kw}`)) {
        score += 1 + kw.split(" ").length; // multi-word phrase = stronger signal
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }

  if (best && bestScore > 0) {
    return { text: best.answer, followups: best.followups };
  }

  // graceful fallback with routing
  return {
    text: "Hmm, I don't have a canned answer for that one — but I know a lot about Harshit. Try one of these, or ask about a specific project by name:",
    followups: ["skills", "show me projects", "experience", "how do I reach him?"],
  };
}

type Msg = { role: "user" | "bot"; text: string; followups?: string[] };

export function AIAssistant() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hi 👋 I'm Harshit's portfolio assistant. Ask me anything — skills, any project, experience, automation, what he's looking for, or how to reach him.",
      followups: ["What are his skills?", "Show me projects", "How do I reach him?"],
    },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  const send = (text: string) => {
    if (!text.trim() || thinking) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setThinking(true);

    const { text: reply, followups } = respond(text);
    // realistic thinking delay, scaled to answer length but capped
    const delay = Math.min(1100, 350 + reply.length * 4);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: reply, followups }]);
      setThinking(false);
    }, delay);
  };

  // chips reflect the latest bot message's follow-ups
  const lastBot = [...messages].reverse().find((m) => m.role === "bot");
  const chips = lastBot?.followups ?? ["skills", "projects", "hire"];

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Assistant"
          title="Ask me anything"
          description="A guided assistant that answers from Harshit's real data — ask about skills, any project, experience, pricing, or hiring."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 glass rounded-2xl"
        >
          {/* Header */}
          <div className="flex items-center gap-2 border-b border-white/5 px-5 py-4">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm font-medium">Portfolio assistant</span>
            <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              online
            </span>
          </div>

          {/* Messages */}
          <div className="max-h-[440px] min-h-[280px] space-y-4 overflow-y-auto p-6">
            <AnimatePresence initial={false}>
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      m.role === "user"
                        ? "bg-white/10"
                        : "bg-gradient-to-br from-blue-500/30 to-purple-500/30"
                    }`}
                  >
                    {m.role === "user" ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div
                    className={`max-w-[80%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      m.role === "user" ? "bg-white/[0.08] text-white" : "bg-white/[0.04] text-white/85"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing indicator */}
            {thinking && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/30">
                  <Bot size={14} />
                </div>
                <div className="flex items-center gap-1 rounded-2xl bg-white/[0.04] px-4 py-4">
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      className="h-1.5 w-1.5 rounded-full bg-white/50"
                      animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                      transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.15 }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-white/5 p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              <AnimatePresence mode="popLayout">
                {chips.map((s) => (
                  <motion.button
                    key={s}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onClick={() => send(s)}
                    disabled={thinking}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition hover:bg-white/10 hover:text-white disabled:opacity-40"
                  >
                    {s}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Ask me anything about Harshit..."
                className="flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none"
              />
              <button
                onClick={() => send(input)}
                disabled={thinking}
                className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 transition hover:shadow-lg hover:shadow-purple-500/40 disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
