function ProjectItem({ title, subtitle, status, tags }) {
  const chip = status === 'ongoing' ? 'bg-amber-500/10 text-amber-300 border-amber-400/20' : 'bg-emerald-500/10 text-emerald-300 border-emerald-400/20'
  const chipText = status === 'ongoing' ? 'Ongoing' : 'Completed'
  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5 hover:border-slate-600 transition-colors">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="text-sm text-slate-300/80">{subtitle}</p>
        </div>
        <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs ${chip}`}>{chipText}</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs text-slate-300/80 bg-slate-700/40 border border-slate-600/50 px-2 py-0.5 rounded-full">{t}</span>
        ))}
      </div>
    </div>
  )
}

function Projects() {
  const ongoing = [
    {
      title: 'Iulaan',
      subtitle: 'Job portal platform',
      status: 'ongoing',
      tags: ['Jobs', 'Matching', 'Search']
    },
    {
      title: 'Inguradhoo Council System',
      subtitle: 'Digital services portal',
      status: 'ongoing',
      tags: ['e-Gov', 'Workflows', 'Payments']
    }
  ]

  const completed = [
    {
      title: 'Inguradhoo Council Website',
      subtitle: 'Public-facing council site',
      status: 'done',
      tags: ['Website', 'Content']
    },
    {
      title: 'Clinic MV',
      subtitle: 'Clinic management platform',
      status: 'done',
      tags: ['Appointments', 'EMR', 'Billing']
    },
    {
      title: 'Techne Pvt Ltd',
      subtitle: 'Company website',
      status: 'done',
      tags: ['Corporate', 'Website']
    },
    {
      title: 'Hariana Safari',
      subtitle: 'Travel and safari website',
      status: 'done',
      tags: ['Travel', 'Booking', 'Website']
    }
  ]

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <div className="grid gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">Current Projects</h2>
          <p className="text-slate-300/80 mt-1">What we're actively crafting</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {ongoing.map((p) => (
              <ProjectItem key={p.title} {...p} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Completed</h2>
          <p className="text-slate-300/80 mt-1">Highlights from recent deliveries</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {completed.map((p) => (
              <ProjectItem key={p.title} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
