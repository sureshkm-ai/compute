import { getRawBySlug, getSlugs } from "@/lib/content";
import { renderMdx } from "@/lib/mdx";

export function generateStaticParams() {
  return getSlugs("projects").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { frontmatter } = getRawBySlug("projects", params.slug);
  return { title: frontmatter.title, description: frontmatter.description };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = getRawBySlug("projects", params.slug);
  const { content: mdx } = await renderMdx(content);

  return (
    <article className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{frontmatter.title}</h1>
        <p className="text-slate-700 dark:text-slate-300">{frontmatter.description}</p>

        {frontmatter.impact?.length ? (
          <div className="grid gap-3 sm:grid-cols-3">
            {frontmatter.impact.slice(0, 6).map((x: string) => (
              <div key={x} className="rounded-2xl border border-slate-200/60 p-4 text-sm dark:border-slate-800">
                {x}
              </div>
            ))}
          </div>
        ) : null}

        {frontmatter.links?.length ? (
          <div className="flex flex-wrap gap-3 pt-2 text-sm">
            {frontmatter.links.map((l: any) => (
              <a key={l.url} className="underline underline-offset-4" href={l.url} target="_blank" rel="noreferrer">
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
