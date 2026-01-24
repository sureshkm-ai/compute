import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Resume</h1>
        <p className="text-slate-700 dark:text-slate-300">
          View or download my latest resume.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/resume.pdf"
            className="rounded-2xl bg-slate-900 px-4 py-2 text-sm text-white hover:opacity-90 dark:bg-white dark:text-slate-900"
            download
          >
            Download PDF
          </a>

          <Link
            href="/projects"
            className="rounded-2xl border border-slate-200 px-4 py-2 text-sm hover:opacity-80 dark:border-slate-800"
          >
            View Projects
          </Link>
        </div>
      </header>

      <div className="overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800">
        <iframe
          src="/resume.pdf#view=FitH"
          className="h-[80vh] w-full"
          title="Resume PDF"
        />
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-400">
        If the preview doesn’t load, open the PDF directly:{" "}
        <a className="underline underline-offset-4" href="/resume.pdf">
          /resume.pdf
        </a>
      </p>
    </div>
  );
}
