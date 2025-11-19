function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_circle_at_90%_20%,rgba(34,211,238,0.12),transparent)]"/>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"/>
            Building web and software experiences
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Code Craft
          </h1>
          <p className="mt-6 text-lg text-blue-100/90">
            A modern development studio crafting web platforms, portals, and business software. We design, build, and ship with care.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-4 py-2.5 text-white font-medium hover:bg-blue-600 transition-colors">See Projects</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-4 py-2.5 text-slate-200 hover:border-slate-600 transition-colors">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
