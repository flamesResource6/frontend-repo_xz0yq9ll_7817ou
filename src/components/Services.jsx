import { motion } from 'framer-motion'

function Services() {
  const services = [
    {
      title: 'Web Platforms',
      desc: 'Modern, responsive websites and portals tailored to your brand.'
    },
    {
      title: 'Software Development',
      desc: 'Custom business software and internal tools that scale.'
    },
    {
      title: 'Integrations & APIs',
      desc: 'Secure integrations, automation, and API development.'
    },
    {
      title: 'Maintenance & Support',
      desc: 'Ongoing care, performance tuning, and feature iterations.'
    }
  ]

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <motion.h2 
        className="text-2xl font-semibold text-white"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Services
      </motion.h2>
      <p className="text-slate-300/80 mt-1">What we offer</p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <motion.div 
            key={s.title} 
            className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5 hover:border-slate-600 transition-colors"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.05 }}
          >
            <h3 className="text-white font-semibold">{s.title}</h3>
            <p className="text-slate-300/80 text-sm mt-2">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services
