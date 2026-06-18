const points = [
  {
    tag: "Real Patients, Real Pain",
    title: "Subspecialty Exposure From Day One",
    body: "Most students don't see interventional pain management until residency. Here, you'll observe nerve blocks, epidural injections, and chronic-pain consults in your core rotation window.",
    accent: "from-[#e63946] to-[#ff6b75]",
  },
  {
    tag: "Underserved Communities",
    title: "Care That Counts Beyond the Chart",
    body: "Our patient base reflects the populations US SHAPE was built to serve — uninsured, underinsured, and historically overlooked. Every rotation doubles as community service.",
    accent: "from-[#F36F21] to-[#ffa46b]",
  },
  {
    tag: "Faculty-Approved",
    title: "Credentialed Preceptors, Not Observers",
    body: "Dr. Hogan&apos;s office at SHSU College of Osteopathic Medicine has formally credentialed every preceptor on-site — so your hours, evaluations, and competencies are fully recognized.",
    accent: "from-[#0a2756] to-[#2a5cb0]",
  },
];

export default function Differentiators() {
  return (
    <section id="partnership" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* sticky header */}
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-bold tracking-[0.3em] text-[#e63946] uppercase">
              What Sets It Apart
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl font-black text-[#0a2756] leading-tight">
              Not Just Another
              <br />
              Rotation Slot.
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Hundreds of clinical sites exist across Texas. We aren&apos;t
              competing for volume — we&apos;re offering a distinctly different
              experience for students who want medicine to mean something.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#0a2756]">
              <div className="h-px w-10 bg-[#0a2756]" />
              SHSU COM · Premier Pain · US SHAPE
            </div>
          </div>

          {/* point cards */}
          <div className="space-y-6">
            {points.map((p, i) => (
              <article
                key={i}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 transition hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/60"
              >
                <div
                  className={`absolute -top-px left-8 h-1 w-24 rounded-b-full bg-gradient-to-r ${p.accent}`}
                />
                <div className="flex items-start gap-6">
                  <div className="font-serif text-5xl font-black text-slate-200 group-hover:text-slate-300 transition">
                    0{i + 1}
                  </div>
                  <div className="flex-1">
                    <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold tracking-widest text-slate-600 uppercase">
                      {p.tag}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl font-black text-[#0a2756] leading-snug">
                      {p.title}
                    </h3>
                    <p
                      className="mt-3 text-slate-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: p.body }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}