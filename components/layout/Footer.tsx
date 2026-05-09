'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { personalInfo } from '@/lib/data'

const socials = [
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
]

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-line mt-20 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-muted text-sm">{t('footer.rights')}</p>
          <p className="text-muted/60 text-xs mt-0.5">{t('footer.built')}</p>
        </div>

        <div className="flex items-center gap-1">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="p-2 text-muted hover:text-primary transition-colors duration-200 rounded-md hover:bg-surface"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
