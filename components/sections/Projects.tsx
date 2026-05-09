'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { projects, type ProjectCategory } from '@/lib/data'

const categories: { key: string; value: ProjectCategory }[] = [
  { key: 'projects.filter.all', value: 'all' },
  { key: 'projects.filter.frontend', value: 'frontend' },
  { key: 'projects.filter.backend', value: 'backend' },
  { key: 'projects.filter.devops', value: 'devops' },
  { key: 'projects.filter.fullstack', value: 'fullstack' },
]

const categoryColors: Record<string, string> = {
  frontend: 'rgba(251,146,60,0.15)',
  backend: 'rgba(249,115,22,0.15)',
  devops: 'rgba(251,191,36,0.15)',
  fullstack: 'rgba(234,88,12,0.15)',
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
})

export function Projects() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [active, setActive] = useState<ProjectCategory>('all')

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" ref={ref} className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-10"
        >
          <p className="text-accent text-xs font-mono font-semibold tracking-[0.22em] uppercase mb-3">
            {t('projects.eyebrow')}
          </p>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl text-white">
            {t('projects.title')}
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map(({ key, value }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={`relative px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-300 ${
                active === value
                  ? 'text-white'
                  : 'text-muted hover:text-white glass'
              }`}
            >
              {active === value && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-xl"
                  style={{ background: 'linear-gradient(135deg, #f97316, #fb923c)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t(key)}</span>
            </button>
          ))}
        </motion.div>

        {/* Project cards */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="relative glass rounded-2xl p-6 group glow-hover border border-white/8 hover:border-primary/30 transition-all duration-300 flex flex-col"
              >
                {/* Category glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: categoryColors[project.category] ?? 'transparent' }}
                />

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Category badge */}
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full self-start mb-4 text-accent/80 bg-accent/8 border border-accent/15">
                    {project.category}
                  </span>

                  <h3 className="font-mono font-bold text-lg text-white mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted text-sm font-mono leading-relaxed mb-4 flex-1">
                    {t(project.descriptionKey)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 rounded-md text-white/60 bg-white/5 border border-white/8"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-auto">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg glass text-muted hover:text-white hover:border-white/20 transition-all duration-200"
                      >
                        <Github size={13} />
                        {t('projects.github')}
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-primary/20 text-accent hover:bg-primary/30 border border-primary/30 transition-all duration-200"
                      >
                        <ExternalLink size={13} />
                        {t('projects.demo')}
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
