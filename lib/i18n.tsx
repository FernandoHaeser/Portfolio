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
      'Desenvolvedor Fullstack apaixonado por construir experiências digitais modernas, acessíveis e bem estruturadas.',
    'hero.cta.email': 'Entrar em contato',
    'hero.cta.linkedin': 'LinkedIn',
    'hero.cta.github': 'GitHub',

    // about — 01.
    'about.num': '01.',
    'about.section': 'Sobre',
    'about.bio':
      'Sou desenvolvedor fullstack com foco em criar produtos digitais de alta qualidade. Gosto de transformar requisitos complexos em interfaces funcionais e elegantes, priorizando performance, acessibilidade e código sustentável. Trabalho bem em times ágeis, com comunicação clara do protótipo à entrega.',
    'about.work.label': 'Trabalho atual',
    'about.work.company': 'CDNTV Tecnologia',
    'about.work.role': 'Desenvolvedor Frontend',
    'about.study.label': 'Estudando',
    'about.study.institution': 'IFRS',
    'about.study.program': 'Técnologo em Sistemas para Internet',
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
    'exp.cdntv.role': 'Desenvolvedor Frontend',
    'exp.cdntv.desc':
      'Desenvolvi a aplicação **NUV Calculator** para estimativa de uso de disco do produto NUV, utilizando **JavaScript**, **HTML5** e **CSS3** puros. Trabalhei em estreita colaboração com a equipe de produto na definição de requisitos, entregando uma interface precisa, responsiva e acessível.',
    'exp.ifrs.role': 'Técnologo em Sistemas para Internet',
    'exp.ifrs.end': '2028 (previsto)',
    'exp.ifrs.desc':
      'Cursando Tecnologia em **Sistemas para Internet** com ênfase em desenvolvimento web **full-stack**, **banco de dados** relacional e não-relacional, arquitetura de software, **redes de computadores** e engenharia de software ágil.',

    // projects — 03.
    'projects.num': '03.',
    'projects.section': 'Projetos',
    'projects.view': 'Ver Projeto',
    'projects.repo': 'Ver Repositório',
    'projects.all': 'Ver todos os projetos no GitHub →',
    'projects.nuv.description':
      'Aplicação web para cálculo de estimativa de uso de disco para o produto NUV da CDNTV Tecnologia. Foco em precisão e usabilidade.',
    'projects.devsetup.description':
      'Script de configuração de ambiente de desenvolvimento com suporte a Windows, Linux e macOS. Automatiza instalação de ferramentas e configurações.',
    'projects.portfolio.description':
      'Portfólio pessoal com design inspirado em referências modernas, animações suaves e suporte bilíngue PT-BR/EN. Construído com Next.js e Framer Motion.',

    // contact
    'contact.title': 'Vamos construir algo juntos?',
    'contact.pitch':
      'Estou aberto a projetos freelance, colaborações e oportunidades full-time. Respondo em até 24 horas.',
    'contact.email': 'fernandohaeserr@gmail.com',
    'contact.cta.email': 'Enviar e-mail',
    'contact.cta.cv': 'Download CV',

    // footer
    'footer.rights': '© 2025 Fernando Haeser. Todos os direitos reservados.',
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
      'Fullstack Developer passionate about building modern, accessible, and well-structured digital experiences.',
    'hero.cta.email': 'Get in touch',
    'hero.cta.linkedin': 'LinkedIn',
    'hero.cta.github': 'GitHub',

    // about
    'about.num': '01.',
    'about.section': 'About',
    'about.bio':
      'I am a fullstack developer focused on building high-quality digital products. I enjoy turning complex requirements into functional and elegant interfaces, prioritizing performance, accessibility, and sustainable code. I work well in agile teams with clear communication, from prototype to final delivery.',
    'about.work.label': 'Current work',
    'about.work.company': 'CDNTV Tecnologia',
    'about.work.role': 'Frontend Developer',
    'about.study.label': 'Currently studying',
    'about.study.institution': 'IFRS',
    'about.study.program': 'Internet Systems Technology',
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
    'exp.cdntv.role': 'Frontend Developer',
    'exp.cdntv.desc':
      'Developed the **NUV Calculator** application for disk usage estimation of the NUV product, using pure **JavaScript**, **HTML5**, and **CSS3**. Worked closely with the product team to define requirements, delivering a precise, responsive, and accessible interface.',
    'exp.ifrs.role': 'Internet Systems Technology',
    'exp.ifrs.end': '2028 (expected)',
    'exp.ifrs.desc':
      'Studying **Internet Systems Technology** with emphasis on full-stack **web development**, relational and non-relational **databases**, software architecture, **computer networking**, and agile software engineering.',

    // projects
    'projects.num': '03.',
    'projects.section': 'Projects',
    'projects.view': 'View Project',
    'projects.repo': 'View Repository',
    'projects.all': 'View all projects on GitHub →',
    'projects.nuv.description':
      'Web app for disk usage estimation for the NUV product at CDNTV Tecnologia. Focused on precision and usability.',
    'projects.devsetup.description':
      'Development environment setup script supporting Windows, Linux, and macOS. Automates tool installation and configuration.',
    'projects.portfolio.description':
      'Personal portfolio with a modern design, smooth animations, and bilingual PT-BR/EN support. Built with Next.js and Framer Motion.',

    // contact
    'contact.title': "Let's build something together?",
    'contact.pitch':
      "I'm open to freelance projects, collaborations, and full-time opportunities. I reply within 24 hours.",
    'contact.email': 'fernandohaeserr@gmail.com',
    'contact.cta.email': 'Send email',
    'contact.cta.cv': 'Download CV',

    // footer
    'footer.rights': '© 2025 Fernando Haeser. All rights reserved.',
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
