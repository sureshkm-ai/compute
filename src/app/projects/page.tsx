import { getAllMeta } from "@/lib/content";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export default function ProjectsIndex() {
  const projects = getAllMeta("projects").sort((a: any, b: any) => Number(!!b.featured) - Number(!!a.featured));
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <p className="text-sm text-slate-700 dark:text-slate-300">
        Agentic AI systems, evals, RAG pipelines, and production patterns.
      </p>
      <ProjectsGrid projects={projects} />
    </div>
  );
}
