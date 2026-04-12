export default function SampleReportCTA() {
  return (
    <section className="py-12 sm:py-16" aria-labelledby="sample-report-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-surface border border-border-subtle p-8 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <h2
              id="sample-report-heading"
              className="text-2xl sm:text-3xl font-bold text-navy"
            >
              See What Professional VRF Service Documentation Looks Like
            </h2>
            <p className="mt-3 text-text-secondary">
              Download our sample service report — the same format every client receives after each
              maintenance visit.
            </p>
          </div>
          <a
            href="/downloads/aximus-sample-service-report.pdf"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors shrink-0"
            download
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            Download Sample Report (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
