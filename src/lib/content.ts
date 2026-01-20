import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

type ContentType = "blog" | "projects";
const ROOT = path.join(process.cwd(), "content");

function dirFor(type: ContentType) {
  return path.join(ROOT, type);
}

export function getSlugs(type: ContentType) {
  return fs.readdirSync(dirFor(type)).filter(f => f.endsWith(".mdx")).map(f => f.replace(/\.mdx$/, ""));
}

export function getRawBySlug(type: ContentType, slug: string) {
  const full = path.join(dirFor(type), `${slug}.mdx`);
  const file = fs.readFileSync(full, "utf8");
  const { data, content } = matter(file);
  return { frontmatter: data as any, content };
}

export function getAllMeta(type: ContentType) {
  return getSlugs(type)
    .map((slug) => {
      const { frontmatter } = getRawBySlug(type, slug);
      return { slug, ...frontmatter };
    })
    .filter((x) => !x.draft)
    .sort((a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime());
}
