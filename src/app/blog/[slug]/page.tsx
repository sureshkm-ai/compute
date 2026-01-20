import { getRawBySlug, getSlugs } from "@/lib/content";
import { renderMdx } from "@/lib/mdx";
import { GiscusComments } from "@/components/GiscusComments";

export function generateStaticParams() {
  return getSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { frontmatter } = getRawBySlug("blog", params.slug);
  return { title: frontmatter.title, description: frontmatter.description };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = getRawBySlug("blog", params.slug);
  const { content: mdx } = await renderMdx(content);

  return (
    <article>
      <h1 className="text-3xl font-semibold tracking-tight">{frontmatter.title}</h1>
      <div className="mt-2 text-sm text-slate-500">{frontmatter.date}</div>
      <div className="mt-8">{mdx}</div>
      <GiscusComments />
    </article>
  );
}
