'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Code2, Briefcase, Globe } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
})

const stats = [
  { icon: Code2, valueKey: '8+', labelKey: 'about.stat.languages', color: '#f97316' },
  { icon: Briefcase, valueKey: '3+', labelKey: 'about.stat.projects', color: '#fb923c' },
  { icon: Globe, valueKey: '100%', labelKey: 'about.stat.availability', color: '#fbbf24' },
]

export function About() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" ref={ref} className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-12"
        >
          <p className="text-accent text-xs font-mono font-semibold tracking-[0.22em] uppercase mb-3">
            {t('about.eyebrow')}
          </p>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl text-white max-w-2xl leading-tight">
            {t('about.title')}
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-3 gap-4 mb-12"
        >
          {stats.map(({ icon: Icon, valueKey, labelKey, color }) => (
            <motion.div
              key={labelKey}
              variants={fadeUp(0.1)}
              className="glass rounded-xl p-5 glow-hover text-center group"
            >
              <Icon
                size={22}
                className="mb-2 mx-auto transition-transform duration-300 group-hover:scale-110"
                style={{ color }}
              />
              <p className="font-mono font-bold text-2xl text-white mb-0.5">{valueKey}</p>
              <p className="text-muted text-xs font-mono">{t(labelKey)}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Text grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="text-muted leading-relaxed font-mono text-sm"
          >
            {t('about.p1')}
          </motion.p>
          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="text-muted leading-relaxed font-mono text-sm"
          >
            {t('about.p2')}
          </motion.p>
        </div>

        {/* Education card */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="glass rounded-xl p-6 glow-hover border border-white/8 hover:border-primary/30 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-primary/20 mt-0.5">
              <GraduationCap size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-xs font-mono text-muted uppercase tracking-widest mb-1">
                {t('about.education.title')}
              </p>
              <h3 className="font-mono font-bold text-white text-base mb-1">
                {t('about.education.degree')}
              </h3>
              <p className="text-muted text-sm font-mono mb-1">
                {t('about.education.institution')}
              </p>
              <span className="text-accent text-xs font-mono font-semibold">
                {t('about.education.period')}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
