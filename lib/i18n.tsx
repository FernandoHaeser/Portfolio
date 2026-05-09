'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type Locale = 'pt-BR' | 'en'

type Translations = Record<string, string>

const dict: Record<Locale, Translations> = {
  'pt-BR': {
    // nav
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',

    // hero
    'hero.greeting': 'Olá 👋 meu nome é',
    'hero.tagline':
      'Desenvolvedor apaixonado por construir experiências digitais modernas, acessíveis e bem estruturadas.',
    'hero.cta.email': 'Entrar em contato',
    'hero.cta.linkedin': 'LinkedIn',
    'hero.cta.github': 'GitHub',

    // about — 01.
    'about.num': '01.',
    'about.section': 'Sobre',
    'about.bio':
      'Sou desenvolvedor com foco em criar produtos digitais de alta qualidade. Gosto de transformar requisitos complexos em interfaces funcionais e elegantes, priorizando performance, acessibilidade e código sustentável. Trabalho bem em times ágeis, com comunicação clara do protótipo à entrega.',
    'about.work.label': 'Trabalho atual',
    'about.work.company': 'Acme Corp',
    'about.work.role': 'Desenvolvedor Frontend',
    'about.study.label': 'Estudando',
    'about.study.institution': 'Universidade Estadual',
    'about.study.program': 'Ciência da Computação',
    'about.tech.title': 'Tecnologias',

    // stack
    'stack.eyebrow': 'Stack',
    'stack.title': 'Tecnologias e Ferramentas',
    'stack.category.frontend': 'Frontend',
    'stack.category.backend': 'Backend',
    'stack.category.data': 'Dados',
    'stack.category.devops': 'DevOps',
    'stack.category.tools': 'Ferramentas',

    // experience — 02.
    'exp.num': '02.',
    'exp.section': 'Experiência',
    'exp.present': 'Atualidade',
    'exp.acme.role': 'Desenvolvedor Frontend',
    'exp.acme.desc':
      'Desenvolvo interfaces modernas e acessíveis com foco em performance e experiência do usuário. Colaboro com times multidisciplinares na definição de requisitos, entregando soluções responsivas e bem estruturadas.',
    'exp.university.role': 'Ciência da Computação',
    'exp.university.end': '2023 (concluído)',
    'exp.university.desc':
      'Graduação em **Ciência da Computação** com ênfase em desenvolvimento de software, **estruturas de dados**, algoritmos, arquitetura de sistemas e engenharia de software.',

    // projects — 03.
    'projects.num': '03.',
    'projects.section': 'Projetos',
    'projects.view': 'Ver Projeto',
    'projects.repo': 'Ver Repositório',
    'projects.all': 'Ver todos os projetos no GitHub →',
    'projects.ecommerce.description':
      'Plataforma de e-commerce completa com carrinho de compras, pagamentos via Stripe e painel administrativo. Foco em performance e experiência do usuário.',
    'projects.taskapi.description':
      'API REST para gerenciamento de tarefas com autenticação JWT, filtros avançados e documentação OpenAPI.',
    'projects.portfolio.description':
      'Portfólio pessoal com design moderno, animações suaves e suporte bilíngue PT-BR/EN. Construído com Next.js e Framer Motion.',

    // contact
    'contact.eyebrow': 'Contato',
    'contact.title': 'Vamos construir algo juntos?',
    'contact.description':
      'Estou aberto a projetos freelance, colaborações e oportunidades full-time. Respondo em até 24 horas.',
    'contact.email': 'alex@example.com',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.cta.email': 'Enviar e-mail',
    'contact.cta.cv': 'Download CV',

    // footer
    'footer.rights': '© 2025 Alex Johnson. Todos os direitos reservados.',
    'footer.built': 'Desenvolvido com Next.js + Tailwind CSS',
  },

  en: {
    // nav
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // hero
    'hero.greeting': 'Hello 👋 my name is',
    'hero.tagline':
      'Developer passionate about building modern, accessible, and well-structured digital experiences.',
    'hero.cta.email': 'Get in touch',
    'hero.cta.linkedin': 'LinkedIn',
    'hero.cta.github': 'GitHub',

    // about
    'about.num': '01.',
    'about.section': 'About',
    'about.bio':
      'I am a developer focused on building high-quality digital products. I enjoy turning complex requirements into functional and elegant interfaces, prioritizing performance, accessibility, and sustainable code. I work well in agile teams with clear communication, from prototype to final delivery.',
    'about.work.label': 'Current work',
    'about.work.company': 'Acme Corp',
    'about.work.role': 'Frontend Developer',
    'about.study.label': 'Education',
    'about.study.institution': 'State University',
    'about.study.program': 'Computer Science',
    'about.tech.title': 'Technologies',

    // stack
    'stack.eyebrow': 'Stack',
    'stack.title': 'Tech Stack',
    'stack.category.frontend': 'Frontend',
    'stack.category.backend': 'Backend',
    'stack.category.data': 'Data',
    'stack.category.devops': 'DevOps',
    'stack.category.tools': 'Tools',

    // experience
    'exp.num': '02.',
    'exp.section': 'Experience',
    'exp.present': 'Present',
    'exp.acme.role': 'Frontend Developer',
    'exp.acme.desc':
      'Building modern, accessible interfaces with a focus on performance and user experience. Collaborating with cross-functional teams to define requirements and deliver responsive, well-structured solutions.',
    'exp.university.role': 'Computer Science',
    'exp.university.end': '2023 (completed)',
    'exp.university.desc':
      'Bachelor\'s degree in **Computer Science** with emphasis on software development, **data structures**, algorithms, system architecture, and software engineering.',

    // projects
    'projects.num': '03.',
    'projects.section': 'Projects',
    'projects.view': 'View Project',
    'projects.repo': 'View Repository',
    'projects.all': 'View all projects on GitHub →',
    'projects.ecommerce.description':
      'Full-featured e-commerce platform with shopping cart, Stripe payments, and admin dashboard. Focused on performance and user experience.',
    'projects.taskapi.description':
      'REST API for task management with JWT authentication, advanced filters, and OpenAPI documentation.',
    'projects.portfolio.description':
      'Personal portfolio with a modern design, smooth animations, and bilingual PT-BR/EN support. Built with Next.js and Framer Motion.',

    // contact
    'contact.eyebrow': 'Contact',
    'contact.title': "Let's build something together?",
    'contact.description':
      "I'm open to freelance projects, collaborations, and full-time opportunities. I reply within 24 hours.",
    'contact.email': 'alex@example.com',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.cta.email': 'Send email',
    'contact.cta.cv': 'Download CV',

    // footer
    'footer.rights': '© 2025 Alex Johnson. All rights reserved.',
    'footer.built': 'Built with Next.js + Tailwind CSS',
  },
}

interface I18nContextValue {
  locale: Locale
  t: (key: string) => string
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextValue>({
  locale: 'pt-BR',
  t: (key) => key,
  setLocale: () => {},
})

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('pt-BR')

  useEffect(() => {
    const stored = localStorage.getItem('locale') as Locale | null
    if (stored && dict[stored]) {
      setLocaleState(stored)
      document.documentElement.lang = stored
      return
    }
    const browser = navigator.language.toLowerCase()
    const detected: Locale = browser.startsWith('pt') ? 'pt-BR' : 'en'
    setLocaleState(detected)
    document.documentElement.lang = detected
  }, [])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    localStorage.setItem('locale', next)
    document.documentElement.lang = next
  }

  const t = (key: string) => dict[locale]?.[key] ?? key

  return <I18nContext.Provider value={{ locale, t, setLocale }}>{children}</I18nContext.Provider>
}

export const useI18n = () => useContext(I18nContext)
