import { motion } from 'framer-motion'

function TechBadge({ label, delay = 0 }) {
  return (
    <motion.span
      className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-800/40 px-3 py-1.5 text-sm text-slate-200 hover:border-slate-600 transition-colors"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
    >
      {label}
    </motion.span>
  )
}

function TechStack() {
  const stack = [
    'Laravel',
    'DigitalOcean',
    'PHP',
    'Flutter',
    'HTML5',
    'CSS3',
  ]

  return (
    <section id="tech" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <motion.h2
        className="text-2xl font-semibold text-white"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Tech Stack
      </motion.h2>
      <p className="text-slate-300/80 mt-1">Technologies we work with and support</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {stack.map((tech, i) => (
          <TechBadge key={tech} label={tech} delay={i * 0.05} />
        ))}
      </div>
    </section>
  )
}

export default TechStack
