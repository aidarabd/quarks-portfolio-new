export default function CaseStudyLoading() {
  return (
    <div className="animate-pulse">
      <div className="px-6 pt-40 md:px-10 md:pt-48">
        <div className="mx-auto max-w-7xl">
          <div className="h-4 w-24 rounded-full bg-ink/10 dark:bg-paper/10" />

          <div className="mt-8 flex items-center justify-between">
            <div className="h-3 w-20 rounded-full bg-ink/10 dark:bg-paper/10" />
          </div>
          <div className="mt-4 h-14 w-3/4 max-w-2xl rounded-xl bg-ink/10 dark:bg-paper/10 md:h-16" />

          <div className="mt-6 h-5 w-full max-w-lg rounded-lg bg-ink/10 dark:bg-paper/10" />
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-6 md:px-10">
        <div className="aspect-[16/9] w-full rounded-2xl bg-ink/10 dark:bg-paper/10" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="space-y-3">
            <div className="h-6 w-32 rounded-lg bg-ink/10 dark:bg-paper/10" />
            <div className="h-4 w-full rounded-lg bg-ink/10 dark:bg-paper/10" />
            <div className="h-4 w-full rounded-lg bg-ink/10 dark:bg-paper/10" />
            <div className="h-4 w-2/3 rounded-lg bg-ink/10 dark:bg-paper/10" />
          </div>
          <div className="space-y-3">
            <div className="h-6 w-32 rounded-lg bg-ink/10 dark:bg-paper/10" />
            <div className="h-4 w-full rounded-lg bg-ink/10 dark:bg-paper/10" />
            <div className="h-4 w-full rounded-lg bg-ink/10 dark:bg-paper/10" />
            <div className="h-4 w-2/3 rounded-lg bg-ink/10 dark:bg-paper/10" />
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-8 w-24 rounded-full bg-ink/10 dark:bg-paper/10" />
          ))}
        </div>
      </div>
    </div>
  );
}

