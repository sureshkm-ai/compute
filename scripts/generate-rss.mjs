import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Feed } from "feed";

const siteUrl = process.env.SITE_URL || "https://compute.sureshkm.dev";
const blogDir = path.join(process.cwd(), "content", "blog");
const outFile = path.join(process.cwd(), "public", "rss.xml");

const feed = new Feed({
  title: "Compute by Suresh",
  description: "Agentic AI projects, deep dives, and build-in-public notes.",
  id: siteUrl,
  link: siteUrl,
  language: "en",
});

const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));

for (const file of files) {
  const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
  const { data, content } = matter(raw);
  if (data.draft) continue;

  const slug = file.replace(/\.mdx$/, "");
  const url = `${siteUrl}/blog/${slug}`;

  feed.addItem({
    title: data.title,
    id: url,
    link: url,
    description: data.description,
    date: new Date(data.date),
    content: content.slice(0, 400),
  });
}

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, feed.rss2(), "utf8");
console.log("RSS generated:", outFile);
