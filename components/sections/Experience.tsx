'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { experience } from '@/lib/data'

function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-primary font-semibold">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function Experience() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" ref={ref} className="py-24 px-6 border-t border-line">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-14"
        >
          <p className="font-mono text-primary text-sm font-medium mb-1">{t('exp.num')}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('exp.section')}</h2>
          <div className="mt-3 w-10 h-px bg-primary/50" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-2 bottom-0 w-px bg-line" />

          <div className="space-y-10">
            {experience.map((entry, idx) => (
              <motion.div
                key={entry.id}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                transition={{ delay: idx * 0.12 }}
                className="relative pl-8"
              >
                {/* Dot */}
                <div className="absolute left-0 top-[7px] w-[11px] h-[11px] rounded-full bg-primary ring-4 ring-bg -translate-x-[2.5px]" />

                {/* Date range */}
                <p className="text-xs font-mono text-muted mb-1.5 tracking-wide">
                  {entry.start} — {t(entry.endKey)}
                  {entry.location && (
                    <span className="ml-3 text-line">· {entry.location}</span>
                  )}
                </p>

                {/* Company + role */}
                <h3 className="text-white font-semibold text-base sm:text-lg leading-snug mb-0.5">
                  {entry.company}
                </h3>
                <p className="text-primary text-sm mb-3">{t(entry.roleKey)}</p>

                {/* Description with bold highlights */}
                <p className="text-muted-light text-sm leading-relaxed max-w-2xl">
                  <RichText text={t(entry.descKey)} />
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
