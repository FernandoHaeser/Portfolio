'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'
import { projects, personalInfo } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

function ProjectPlaceholder({ category }: { category: string }) {
  return (
    <div className="aspect-video bg-surface flex items-center justify-center border-b border-line">
      <span className="font-mono text-xs text-line uppercase tracking-widest">{category}</span>
    </div>
  )
}

export function Projects() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <section id="projects" ref={ref} className="py-24 px-6 border-t border-line">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-14"
        >
          <p className="font-mono text-primary text-sm font-medium mb-1">{t('projects.num')}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('projects.section')}</h2>
          <div className="mt-3 w-10 h-px bg-primary/50" />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              className="bg-carbon border border-line rounded-xl overflow-hidden group hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              {/* Image / placeholder */}
              <div className="relative overflow-hidden">
                {project.image ? (
                  <div className="aspect-video relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <ProjectPlaceholder category={project.category} />
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-surface border border-line text-muted-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-base mb-1.5 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-light text-sm leading-relaxed flex-1 mb-5">
                  {t(project.descriptionKey)}
                </p>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-hover transition-colors duration-200"
                    >
                      <ExternalLink size={12} />
                      {t('projects.view')}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-white transition-colors duration-200"
                    >
                      <Github size={12} />
                      {t('projects.repo')}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View all link */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ delay: 0.3 }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors duration-200"
          >
            {t('projects.all')}
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
