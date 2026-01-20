import Link from "next/link";
import { getAllMeta } from "@/lib/content";

export default function BlogIndex() {
  const posts = getAllMeta("blog");
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Blog</h1>
      <div className="space-y-3">
        {posts.map((p: any) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="block rounded-2xl border border-slate-200/60 p-4 hover:opacity-90 dark:border-slate-800">
            <div className="flex items-baseline justify-between gap-4">
              <div className="font-medium">{p.title}</div>
              <div className="text-xs text-slate-500">{p.date}</div>
            </div>
            <div className="mt-1 text-sm text-slate-700 dark:text-slate-300">{p.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
