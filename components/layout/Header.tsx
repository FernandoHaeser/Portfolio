'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useI18n, type Locale } from '@/lib/i18n'

const navItems = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.stack', href: '#stack' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.contact', href: '#contact' },
]

const locales: Locale[] = ['pt-BR', 'en', 'es']

export function Header() {
  const { t, locale, setLocale } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['about', 'stack', 'projects', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-2xl transition-all duration-300 ${
        scrolled
          ? 'glass shadow-[0_8px_40px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border border-transparent'
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-3">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono font-bold text-white text-sm tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="gradient-text">FH</span>
          <span className="text-muted ml-1.5 text-xs hidden sm:inline">/ fernando haeser</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollTo(item.href)}
              className={`relative px-3 py-1.5 text-sm font-mono rounded-lg transition-colors duration-200 ${
                active === item.href ? 'text-white' : 'text-muted hover:text-white'
              }`}
            >
              {active === item.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/8 rounded-lg"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t(item.key)}</span>
            </button>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="flex items-center gap-0.5 glass rounded-lg px-1 py-0.5">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`px-2 py-0.5 rounded text-xs font-mono transition-all duration-200 ${
                  locale === l
                    ? 'bg-primary text-white'
                    : 'text-muted hover:text-white'
                }`}
              >
                {l === 'pt-BR' ? 'PT' : l === 'en' ? 'EN' : 'ES'}
              </button>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 text-muted hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-white/8 px-5 pb-4"
          >
            <nav className="flex flex-col gap-1 pt-3">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollTo(item.href)}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-mono transition-colors ${
                    active === item.href
                      ? 'text-white bg-white/8'
                      : 'text-muted hover:text-white'
                  }`}
                >
                  {t(item.key)}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
