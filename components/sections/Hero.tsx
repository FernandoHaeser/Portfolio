'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'
import { personalInfo } from '@/lib/data'

const socials = [
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  const { t } = useI18n()

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[700px] h-[700px] rounded-full bg-primary/20 blur-[120px] -top-1/4 -left-1/4 animate-float" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-accent/15 blur-[100px] top-1/3 -right-1/4 animate-float-slow" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-orange-700/10 blur-[80px] bottom-1/4 left-1/3 animate-float-fast" />
        {/* Stars */}
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.6 + 0.1,
              animationDelay: Math.random() * 10 + 's',
              animationDuration: Math.random() * 8 + 6 + 's',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="text-accent text-xs font-mono font-semibold tracking-[0.22em] uppercase mb-4"
          >
            {t('hero.eyebrow')}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-mono text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-3"
          >
            <span className="gradient-text">{t('hero.title')}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg text-muted font-mono mb-2"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.p variants={item} className="text-muted text-base leading-relaxed mb-8 max-w-md">
            {t('hero.lead')}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={scrollToProjects}
              className="group relative px-6 py-3 rounded-xl font-mono font-semibold text-sm overflow-hidden transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #f97316, #fb923c)',
                boxShadow: '0 0 30px rgba(249,115,22,0.4)',
              }}
            >
              <span className="relative z-10 text-white">{t('hero.cta.projects')}</span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
            </button>

            <button
              onClick={scrollToContact}
              className="px-6 py-3 rounded-xl font-mono font-semibold text-sm text-white glass hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]"
            >
              {t('hero.cta.contact')}
            </button>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="p-2.5 glass rounded-lg text-muted hover:text-accent hover:border-accent/40 transition-all duration-200 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]"
              >
                <Icon size={18} />
              </a>
            ))}
            <span className="text-muted/50 text-xs font-mono ml-2 flex items-center gap-1.5">
              <MapPin size={12} className="text-accent/70" />
              {t('hero.location')}
            </span>
          </motion.div>
        </motion.div>

        {/* Right card */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <div className="relative group">
            {/* Glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            <div className="relative glass rounded-2xl overflow-hidden border border-white/10 animate-float">
              {/* Card header */}
              <div
                className="px-5 py-4 flex items-center justify-between"
                style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.5), rgba(251,146,60,0.35))' }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse-dot shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span className="text-white text-sm font-mono font-semibold">{t('hero.status')}</span>
                </div>
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/30 shadow-lg">
                  <Image
                    src="/profile.png"
                    alt="Fernando Haeser"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3 className="font-mono font-bold text-xl text-white mb-0.5">Fernando Haeser</h3>
                <p className="text-muted text-sm font-mono mb-4">{t('hero.subtitle')}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {['Porto Alegre', 'Remote', 'Full Stack'].map((chip) => (
                    <span
                      key={chip}
                      className="text-xs font-mono px-2.5 py-1 rounded-full glass text-white/80 border border-accent/20"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="space-y-2.5 text-sm font-mono">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-2.5 text-muted hover:text-accent transition-colors"
                  >
                    <Mail size={14} className="text-accent/70 flex-shrink-0" />
                    {personalInfo.email}
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 text-muted hover:text-accent transition-colors"
                  >
                    <Linkedin size={14} className="text-accent/70 flex-shrink-0" />
                    linkedin.com/in/fehaeser
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 text-muted hover:text-accent transition-colors"
                  >
                    <Github size={14} className="text-accent/70 flex-shrink-0" />
                    github.com/FernandoHaeser
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted/50 hover:text-muted transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  )
}
