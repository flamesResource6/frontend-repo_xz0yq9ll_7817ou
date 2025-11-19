import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_circle_at_90%_20%,rgba(34,211,238,0.12),transparent)]"/>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 relative">
        <div className="max-w-3xl">
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-200 mb-6"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"/>
            Building web and software experiences
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Code Craft
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg text-blue-100/90"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            A modern development studio crafting web platforms, portals, and business software. We design, build, and ship with care.
          </motion.p>

          <motion.div 
            className="mt-8 flex flex-wrap gap-3"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } }
            }}
          >
            {[
              { href: '#projects', label: 'See Projects', primary: true },
              { href: '#contact', label: 'Get in touch', primary: false },
            ].map((btn, i) => (
              <motion.a
                key={btn.label}
                href={btn.href}
                className={btn.primary ? 'inline-flex items-center justify-center rounded-lg bg-blue-500 px-4 py-2.5 text-white font-medium hover:bg-blue-600 transition-colors' : 'inline-flex items-center justify-center rounded-lg border border-slate-700 px-4 py-2.5 text-slate-200 hover:border-slate-600 transition-colors'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.05 }}
              >
                {btn.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
