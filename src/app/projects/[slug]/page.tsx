// app/projects/[slug]/page.tsx
import { getRawBySlug, getSlugs } from "@/lib/content";
import { renderMdx } from "@/lib/mdx";

type ParamsPromise = Promise<{ slug: string }>;

export function generateStaticParams() {
  // Builds all /projects/<slug> routes at build time
  return getSlugs("projects").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: ParamsPromise;
}) {
  const { slug } = await params;

  const { frontmatter } = getRawBySlug("projects", slug);

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: ParamsPromise;
}) {
  // Next.js 15+ may pass params as a Promise during prerender/build
  const { slug } = await params;

  const { frontmatter, content } = getRawBySlug("projects", slug);
  const { content: mdx } = await renderMdx(content);

  return (
    <article className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          {frontmatter.title}
        </h1>

        {frontmatter.description ? (
          <p className="text-slate-700 dark:text-slate-300">
            {frontmatter.description}
          </p>
        ) : null}

        {frontmatter.impact?.length ? (
          <div className="grid gap-3 sm:grid-cols-3">
            {frontmatter.impact.slice(0, 6).map((x: string) => (
              <div
                key={x}
                className="rounded-2xl border border-slate-200/60 p-4 text-sm dark:border-slate-800"
              >
                {x}
              </div>
            ))}
          </div>
        ) : null}

        {frontmatter.stack?.length ? (
          <div className="flex flex-wrap gap-2 pt-1">
            {frontmatter.stack.slice(0, 10).map((t: string) => (
              <span
                key={t}
                className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {frontmatter.links?.length ? (
          <div className="flex flex-wrap gap-3 pt-2 text-sm">
            {frontmatter.links.map((l: { label: string; url: string }) => (
              <a
                key={l.url}
                className="underline underline-offset-4 hover:opacity-80"
                href={l.url}
                target="_blank"
                rel="noreferrer"
              >
                {l.label}
              </a>
            ))}
          </div>
        ) : null}
      </header>

      <div>{mdx}</div>
    </article>
  );
}
