'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { personalInfo } from '@/lib/data'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
})

const contactLinks = [
  {
    icon: Mail,
    labelKey: 'contact.email',
    href: `mailto:${personalInfo.email}`,
    external: false,
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.1)',
    border: 'rgba(251,146,60,0.25)',
  },
  {
    icon: Linkedin,
    labelKey: 'contact.linkedin',
    href: personalInfo.linkedin,
    external: true,
    color: '#f97316',
    bg: 'rgba(249,115,22,0.1)',
    border: 'rgba(249,115,22,0.25)',
  },
  {
    icon: Github,
    labelKey: 'contact.github',
    href: personalInfo.github,
    external: true,
    color: '#fbbf24',
    bg: 'rgba(251,191,36,0.1)',
    border: 'rgba(251,191,36,0.25)',
  },
]

export function Contact() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="contact" ref={ref} className="relative py-24 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/15 blur-[120px] -bottom-1/2 left-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-14"
        >
          <p className="text-accent text-xs font-mono font-semibold tracking-[0.22em] uppercase mb-4">
            {t('contact.eyebrow')}
          </p>
          <h2 className="font-mono font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {t('contact.title')}
          </h2>
          <p className="text-muted font-mono text-base max-w-lg mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-3 gap-4"
        >
          {contactLinks.map(({ icon: Icon, labelKey, href, external, color, bg, border }) => (
            <motion.a
              key={labelKey}
              variants={fadeUp(0.1)}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="group relative glass rounded-2xl p-6 flex flex-col items-center gap-3 text-center overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: border,
                boxShadow: 'none',
              }}
              whileHover={{
                boxShadow: `0 20px 60px ${bg}, 0 0 0 1px ${border}`,
              }}
            >
              <div
                className="p-3.5 rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <Icon size={22} style={{ color }} />
              </div>
              <span className="font-mono font-semibold text-white text-sm">{t(labelKey)}</span>
              <ArrowUpRight
                size={14}
                className="absolute top-4 right-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color }}
              />
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: bg }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
