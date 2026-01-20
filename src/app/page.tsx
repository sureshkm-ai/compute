import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Suresh</h1>
        <p className="max-w-2xl leading-7 text-slate-700 dark:text-slate-300">
          I build Agentic AI systems (tool orchestration, memory, RAG, evals) and share projects + deep dives.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link className="rounded-2xl bg-slate-900 px-4 py-2 text-sm text-white hover:opacity-90 dark:bg-white dark:text-slate-900" href="/projects">
            View Projects
          </Link>
          <Link className="rounded-2xl border border-slate-200 px-4 py-2 text-sm hover:opacity-80 dark:border-slate-800" href="/blog">
            Read Blog
          </Link>
        </div>
      </section>

      <section className="grid gap-5 sm:grid-cols-2">
        {[
          { title: "Agentic Systems", desc: "Tool calling, routing, reflection, and guardrails." },
          { title: "Evals", desc: "Golden sets, win-rate, tool success, hallucination tracking." },
          { title: "RAG", desc: "Grounded answers with filters + metadata + retrieval-required." },
          { title: "Production", desc: "Latency, retries, observability, cost controls." },
        ].map((x) => (
          <div key={x.title} className="rounded-2xl border border-slate-200/60 p-5 dark:border-slate-800">
            <div className="font-semibold">{x.title}</div>
            <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">{x.desc}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
