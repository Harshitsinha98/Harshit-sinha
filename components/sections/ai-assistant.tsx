"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, User, Bot } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const sampleQA: Record<string, string> = {
  skills:
    "Harshit specializes in Next.js, TypeScript, React, Node.js, and PostgreSQL. He also works with AWS, Docker, and AI/automation tooling like OpenAI and n8n.",
  projects:
    "5+ shipped products including BreakIQ (real-time monitoring), a Lead Management System, Saran Tax Solution, Pragat Hanuman Ji, and a jewelry ecommerce platform in progress.",
  experience:
    "Software Engineer at Capgemini since 2023, plus independent client work shipping production software for 3 active clients.",
  services:
    "Custom web apps, business automation, SaaS MVPs, ecommerce platforms, and ongoing engineering partnerships.",
  hire:
    "Email sinhaharshit67@gmail.com or use the contact form below. Currently accepting new projects.",
};

const suggestions = ["skills", "projects", "experience", "services", "hire"];

export function AIAssistant() {
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Hi 👋 Ask me anything about Harshit — his skills, projects, experience, or services." },
  ]);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    const key = Object.keys(sampleQA).find((k) => text.toLowerCase().includes(k));
    const reply = key
      ? sampleQA[key]
      : "Great question! Try asking about skills, projects, experience, services, or how to hire.";
    setMessages((m) => [...m, { role: "user", text }, { role: "bot", text: reply }]);
    setInput("");
  };

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="AI Assistant"
          title="Ask me anything"
          description="Want a quick answer about Harshit's work? Ask the assistant."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 glass rounded-2xl"
        >
          <div className="flex items-center gap-2 border-b border-white/5 px-5 py-4">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm font-medium">Harshit AI · live</span>
            <span className="ml-auto h-2 w-2 rounded-full bg-emerald-400" />
          </div>

          <div className="max-h-[400px] space-y-4 overflow-y-auto p-6">
            <AnimatePresence>
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
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                      m.role === "user" ? "bg-white/8 text-white" : "bg-white/4 text-white/85"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="border-t border-white/5 p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  {s}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about Harshit..."
                className="flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 transition hover:shadow-lg hover:shadow-purple-500/40"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
