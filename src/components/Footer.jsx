function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-slate-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-semibold">Code Craft</h3>
            <p className="text-slate-400 text-sm mt-1 max-w-md">Web and software development studio. Let’s build your next platform.</p>
          </div>

          <div className="text-slate-300 text-sm">
            <a href="mailto:hello@codecraft.dev" className="hover:text-white transition-colors">hello@codecraft.dev</a>
          </div>
        </div>
        <p className="text-slate-500 text-xs mt-6">© {new Date().getFullYear()} Code Craft. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
