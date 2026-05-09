'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useI18n, type Locale } from '@/lib/i18n'

const navItems = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.contact', href: '#contact' },
]

const locales: { value: Locale; label: string }[] = [
  { value: 'pt-BR', label: 'PT' },
  { value: 'en', label: 'EN' },
]

export function Header() {
  const { t, locale, setLocale } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['about', 'experience', 'projects', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono font-bold text-white text-sm hover:text-primary transition-colors duration-200"
          aria-label="Back to top"
        >
          FH
          <span className="text-primary">.</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = active === item.href
            return (
              <button
                key={item.key}
                onClick={() => scrollTo(item.href)}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-muted hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-surface border border-line rounded-md"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t(item.key)}</span>
              </button>
            )
          })}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div
            className="flex items-center bg-surface border border-line rounded-md overflow-hidden"
            role="group"
            aria-label="Language switcher"
          >
            {locales.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setLocale(value)}
                aria-pressed={locale === value}
                className={`px-2.5 py-1 text-xs font-mono transition-colors duration-200 ${
                  locale === value
                    ? 'bg-primary text-white font-semibold'
                    : 'text-muted hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 text-muted hover:text-white transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
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
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-bg/95 backdrop-blur-md border-b border-line"
          >
            <nav className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollTo(item.href)}
                  className={`text-left px-3 py-2.5 rounded-md text-sm transition-colors ${
                    active === item.href
                      ? 'text-primary bg-surface border border-line'
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
