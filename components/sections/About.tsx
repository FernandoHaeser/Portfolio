'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { techStack } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function About() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="about" ref={ref} className="py-24 px-6 border-t border-line">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-14"
        >
          <p className="font-mono text-primary text-sm font-medium mb-1">{t('about.num')}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('about.section')}</h2>
          <div className="mt-3 w-10 h-px bg-primary/50" />
        </motion.div>

        {/* Bio + cards grid */}
        <div className="grid md:grid-cols-[1fr_280px] gap-10 mb-14">
          {/* Bio */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.1 }}
            className="text-muted-light text-base leading-relaxed"
          >
            {t('about.bio')}
          </motion.p>

          {/* Cards */}
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex flex-col gap-3"
          >
            {/* Work card */}
            <motion.div
              variants={fadeUp}
              className="bg-carbon border border-line rounded-xl p-4 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <Briefcase size={14} className="text-primary" />
                <p className="text-muted text-xs font-mono uppercase tracking-widest">
                  {t('about.work.label')}
                </p>
              </div>
              <p className="text-white font-semibold text-sm">{t('about.work.company')}</p>
              <p className="text-muted text-xs mt-0.5">{t('about.work.role')}</p>
            </motion.div>

            {/* Study card */}
            <motion.div
              variants={fadeUp}
              className="bg-carbon border border-line rounded-xl p-4 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap size={14} className="text-primary" />
                <p className="text-muted text-xs font-mono uppercase tracking-widest">
                  {t('about.study.label')}
                </p>
              </div>
              <p className="text-white font-semibold text-sm">{t('about.study.institution')}</p>
              <p className="text-muted text-xs mt-0.5">{t('about.study.program')}</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech stack */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xs font-mono text-muted uppercase tracking-widest mb-5">
            {t('about.tech.title')}
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="px-3 py-1.5 text-sm text-muted-light bg-surface border border-line rounded-md hover:text-white hover:border-primary/40 transition-all duration-200 cursor-default"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
