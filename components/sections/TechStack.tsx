'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { techStack } from '@/lib/data'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
})

export function TechStack() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="stack" ref={ref} className="relative py-24 px-6">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-primary/10 blur-[100px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-14"
        >
          <p className="text-accent text-xs font-mono font-semibold tracking-[0.22em] uppercase mb-3">
            {t('stack.eyebrow')}
          </p>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl text-white">
            {t('stack.title')}
          </h2>
        </motion.div>

        {/* Categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techStack.map((category, catIdx) => (
            <motion.div
              key={category.labelKey}
              variants={fadeUp(catIdx * 0.08)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="relative glass rounded-2xl p-6 glow-hover group overflow-hidden border border-white/8 hover:border-primary/30 transition-all duration-300"
            >
              {/* Background tint */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: category.color }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-xl">{category.emoji}</span>
                  <h3 className="font-mono font-semibold text-white text-sm">
                    {t(category.labelKey)}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((tech, techIdx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: catIdx * 0.08 + techIdx * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg text-muted bg-white/5 border border-white/8 hover:text-white hover:border-white/20 hover:bg-white/8 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
