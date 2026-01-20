import Link from "next/link";
import Image from "next/image";

export function ProjectCard({ p }: { p: any }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="relative aspect-[16/9] w-full bg-slate-100 dark:bg-slate-900">
        {p.cover ? (
          <Image
            src={p.cover}
            alt={p.title}
            fill
            className="object-cover transition group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        ) : null}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
          {p.status ? (
            <span className="rounded-full border border-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:border-slate-800 dark:text-slate-300">
              {p.status}
            </span>
          ) : null}
        </div>

        <p className="mt-2 line-clamp-2 text-sm text-slate-700 dark:text-slate-300">
          {p.description}
        </p>

        {p.impact?.length ? (
          <ul className="mt-3 space-y-1 text-sm text-slate-700 dark:text-slate-300">
            {p.impact.slice(0, 2).map((x: string) => (
              <li key={x} className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span className="line-clamp-1">{x}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {p.stack?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {p.stack.slice(0, 6).map((t: string) => (
              <span key={t} className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  );
}
