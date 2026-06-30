import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 font-bold">
                HS
              </div>
              <span className="font-display text-lg">Harshit Sinha</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/50">
              Full Stack Engineer building scalable business software and modern digital products.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Connect</h4>
            <div className="mt-4 flex gap-3">
              <Link href={personal.github} target="_blank" className="glass glass-hover rounded-xl p-3">
                <Github size={18} />
              </Link>
              <Link href={personal.linkedin} target="_blank" className="glass glass-hover rounded-xl p-3">
                <Linkedin size={18} />
              </Link>
              <Link href={`mailto:${personal.email}`} className="glass glass-hover rounded-xl p-3">
                <Mail size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Available For</h4>
            <p className="mt-4 text-sm text-white/70">
              Freelance · Contract · Founding Engineer roles
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Accepting new projects
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Harshit Sinha. Crafted with obsession.</p>
          <p>Built with Next.js · TypeScript · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
