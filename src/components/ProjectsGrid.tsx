"use client";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsGrid({ projects }: { projects: any[] }) {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("All");

  const tags = useMemo(() => {
    const s = new Set<string>();
    projects.forEach(p => (p.stack || []).forEach((t: string) => s.add(t)));
    return ["All", ...Array.from(s).sort()];
  }, [projects]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return projects.filter(p => {
      const matchesQ =
        !query ||
        (p.title || "").toLowerCase().includes(query) ||
        (p.description || "").toLowerCase().includes(query);
      const matchesTag = tag === "All" || (p.stack || []).includes(tag);
      return matchesQ && matchesTag;
    });
  }, [projects, q, tag]);

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search projects (agentic, evals, RAG, LangGraph...)"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none dark:border-slate-800 dark:bg-slate-950"
        />
        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm dark:border-slate-800 dark:bg-slate-950"
        >
          {tags.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {filtered.map(p => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </div>
  );
}
