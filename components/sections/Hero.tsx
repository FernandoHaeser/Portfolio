'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'
import { personalInfo } from '@/lib/data'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="min-h-screen flex items-center px-6 pt-16">
      <div className="max-w-5xl mx-auto w-full py-24">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          {/* Profile photo */}
          <motion.div variants={item} className="mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/40 ring-4 ring-primary/10">
              <Image
                src="/profile.png"
                alt={personalInfo.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={item} className="text-muted text-base mb-3">
            {t('hero.greeting')}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
          >
            {personalInfo.name.split(' ')[0]}
            <br />
            <span className="text-primary">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p variants={item} className="text-muted-light text-lg leading-relaxed mb-10 max-w-lg">
            {t('hero.tagline')}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-hover text-white font-medium text-sm rounded-lg transition-colors duration-200"
            >
              <Mail size={15} />
              {t('hero.cta.email')}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface border border-line hover:border-primary/40 text-white font-medium text-sm rounded-lg transition-all duration-200"
            >
              <Linkedin size={15} />
              {t('hero.cta.linkedin')}
              <ArrowUpRight size={13} className="text-muted" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface border border-line hover:border-primary/40 text-white font-medium text-sm rounded-lg transition-all duration-200"
            >
              <Github size={15} />
              {t('hero.cta.github')}
              <ArrowUpRight size={13} className="text-muted" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
