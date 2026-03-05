import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200/60 dark:border-slate-800">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight hover:opacity-90">
          <Image
            src="/images/suresh.jpeg"
            alt="Suresh"
            width={28}
            height={28}
            className="rounded-full object-cover"
          />
          Compute
        </Link>

        <nav className="flex gap-4 text-sm">
          <Link href="/projects" className="hover:opacity-80">
            Projects
          </Link>
          <Link href="/blog" className="hover:opacity-80">
            Blog
          </Link>
          <Link href="/resume" className="hover:opacity-80">
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
}
