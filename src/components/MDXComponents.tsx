import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (p) => <h1 className="mt-8 text-3xl font-semibold tracking-tight" {...p} />,
  h2: (p) => <h2 className="mt-8 text-2xl font-semibold tracking-tight" {...p} />,
  h3: (p) => <h3 className="mt-6 text-xl font-semibold tracking-tight" {...p} />,
  p:  (p) => <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300" {...p} />,
  a:  (p) => <a className="underline underline-offset-4 hover:opacity-80" {...p} />,
  ul: (p) => <ul className="mt-4 list-disc pl-6" {...p} />,
  li: (p) => <li className="mt-1" {...p} />,
  code: (p) => <code className="rounded bg-slate-100 px-1 py-0.5 text-sm dark:bg-slate-800" {...p} />,
  pre: (p) => (
    <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-slate-100" {...p} />
  ),
};
