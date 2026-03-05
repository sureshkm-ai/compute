import Link from "next/link";
import Image from "next/image";
import { getAllMeta } from "@/lib/content";

export default function HomePage() {
  const featured = getAllMeta("projects").filter((p: any) => p.featured).slice(0, 2);

  return (
    <div className="space-y-10">
      <section className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">Suresh</h1>
          <p className="max-w-2xl leading-7 text-slate-700 dark:text-slate-300">
            I build Agentic AI systems — tool orchestration, memory, RAG, evals — and ship production-ready AI products. Sharing projects and deep dives here.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link className="rounded-2xl border border-slate-200 px-4 py-2 text-sm hover:opacity-80 dark:border-slate-700" href="/projects">
              View Projects
            </Link>
            <Link className="rounded-2xl border border-slate-200 px-4 py-2 text-sm hover:opacity-80 dark:border-slate-700" href="/blog">
              Read Blog
            </Link>
          </div>
        </div>

        <Image
          src="/images/suresh.jpeg"
          alt="Suresh"
          width={96}
          height={96}
          className="shrink-0 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-700"
          priority
        />
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

      {featured.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold tracking-tight">Featured Projects</h2>
            <Link href="/projects" className="text-sm text-slate-500 hover:opacity-80 dark:text-slate-400">
              View all →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((p: any) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group rounded-2xl border border-slate-200/60 p-5 transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold leading-snug">{p.title}</h3>
                  {p.status && (
                    <span className="mt-0.5 shrink-0 rounded-full border border-slate-200 px-2 py-0.5 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
                      {p.status}
                    </span>
                  )}
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
                  {p.description}
                </p>
                {p.stack?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((t: string) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
