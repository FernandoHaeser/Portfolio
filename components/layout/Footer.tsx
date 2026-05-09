'use client'

import { useI18n } from '@/lib/i18n'

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-white/6 py-8 px-6 mt-20">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 text-muted text-sm font-mono">
        <p>
          © {year} — {t('footer.rights')}
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-white transition-colors"
          >
            {t('footer.top')} ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
