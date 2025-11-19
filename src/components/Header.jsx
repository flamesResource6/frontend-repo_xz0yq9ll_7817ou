import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import logoUrl from '../assets/codecraft-logo.svg'

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-slate-700/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <motion.img
              src={logoUrl}
              alt="Code Craft logo"
              className="h-8 w-8 rounded-md"
              initial={{ rotate: -8, scale: 0.9, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            />
            <motion.span
              className="text-white font-semibold tracking-tight"
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
            >
              Code Craft
            </motion.span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {[
              { href: '#projects', label: 'Projects' },
              { href: '#services', label: 'Services' },
              { href: '#about', label: 'About' },
              { href: '#contact', label: 'Contact' },
            ].map((link, idx) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors"
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-700 text-slate-300">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
