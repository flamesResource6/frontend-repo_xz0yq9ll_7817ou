import { Menu } from 'lucide-react'

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-slate-700/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <span className="text-white font-semibold tracking-tight">Code Craft</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
            <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
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
