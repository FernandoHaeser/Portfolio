'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type Locale = 'pt-BR' | 'en' | 'es'

type Translations = Record<string, string>

const dict: Record<Locale, Translations> = {
  'pt-BR': {
    'nav.about': 'Sobre',
    'nav.stack': 'Stack',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'nav.lang': 'Idioma',
    'hero.eyebrow': 'Engenheiro de Software',
    'hero.title': 'Fernando Haeser',
    'hero.subtitle': 'Front-end & Back-end Developer',
    'hero.lead': 'Construindo experiências digitais modernas com performance, criatividade e arquitetura limpa.',
    'hero.cta.projects': 'Ver Projetos',
    'hero.cta.contact': 'Contato',
    'hero.status': 'Disponível para freelance',
    'hero.location': 'Porto Alegre, Brasil',
    'about.eyebrow': 'Sobre mim',
    'about.title': 'Transformo ideias em produtos digitais com clareza e impacto.',
    'about.p1': 'Sou engenheiro de software com foco em experiências modernas, acessíveis e bem estruturadas. Gosto de transformar requisitos em interfaces funcionais, priorizando performance e qualidade.',
    'about.p2': 'Trabalho bem em times ágeis e mantenho comunicação direta. Posso atuar do protótipo à entrega final, garantindo consistência visual e código sustentável.',
    'about.stat.languages': 'Linguagens',
    'about.stat.projects': 'Projetos',
    'about.stat.availability': 'Remoto',
    'about.education.title': 'Formação acadêmica',
    'about.education.degree': 'Técnologo em Sistemas para Internet',
    'about.education.institution': 'IFRS — Instituto Federal do Rio Grande do Sul',
    'about.education.period': '2025 – 2028',
    'stack.eyebrow': 'Tecnologias',
    'stack.title': 'Minha stack de desenvolvimento',
    'stack.frontend': 'Frontend',
    'stack.backend': 'Backend',
    'stack.devops': 'DevOps',
    'stack.databases': 'Bancos de Dados',
    'stack.tools': 'Ferramentas',
    'projects.eyebrow': 'Projetos',
    'projects.title': 'Trabalhos recentes',
    'projects.filter.all': 'Todos',
    'projects.filter.frontend': 'Frontend',
    'projects.filter.backend': 'Backend',
    'projects.filter.devops': 'DevOps',
    'projects.filter.fullstack': 'Full Stack',
    'projects.github': 'GitHub',
    'projects.demo': 'Demo',
    'projects.nuv.description': 'Aplicação web para cálculo de estimativa de disco para o produto NUV da CDNTV Tecnologia. Foco em precisão e usabilidade.',
    'projects.devsetup.description': 'Script de configuração de ambiente de desenvolvimento. Suporte completo para Windows, Linux e macOS com automação de instalação.',
    'projects.portfolio.description': 'Portfólio pessoal com design premium, animações cinéticas e suporte a múltiplos idiomas. Construído com Next.js e Framer Motion.',
    'contact.eyebrow': 'Contato',
    'contact.title': 'Vamos construir algo incrível juntos.',
    'contact.description': 'Disponível para projetos freelance, colaborações e oportunidades full-time. Respondo em até 24 horas.',
    'contact.email': 'Enviar e-mail',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'footer.rights': 'Fernando Augusto Haeser. Todos os direitos reservados.',
    'footer.top': 'Topo',
  },
  en: {
    'nav.about': 'About',
    'nav.stack': 'Stack',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.lang': 'Language',
    'hero.eyebrow': 'Software Engineer',
    'hero.title': 'Fernando Haeser',
    'hero.subtitle': 'Front-end & Back-end Developer',
    'hero.lead': 'Building modern digital experiences with performance, creativity, and clean architecture.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Contact Me',
    'hero.status': 'Available for freelance',
    'hero.location': 'Porto Alegre, Brazil',
    'about.eyebrow': 'About me',
    'about.title': 'I turn ideas into digital products with clarity and impact.',
    'about.p1': 'I am a software engineer focused on modern, accessible, and well-structured experiences. I like turning requirements into functional interfaces, prioritizing performance and quality.',
    'about.p2': 'I work well in agile teams and keep communication direct. I can go from prototype to final delivery, ensuring visual consistency and sustainable code.',
    'about.stat.languages': 'Languages',
    'about.stat.projects': 'Projects',
    'about.stat.availability': 'Remote',
    'about.education.title': 'Academic background',
    'about.education.degree': 'Technologist in Internet Systems',
    'about.education.institution': 'IFRS — Federal Institute of Rio Grande do Sul',
    'about.education.period': '2025 – 2028',
    'stack.eyebrow': 'Technologies',
    'stack.title': 'My development stack',
    'stack.frontend': 'Frontend',
    'stack.backend': 'Backend',
    'stack.devops': 'DevOps',
    'stack.databases': 'Databases',
    'stack.tools': 'Tools',
    'projects.eyebrow': 'Projects',
    'projects.title': 'Recent work',
    'projects.filter.all': 'All',
    'projects.filter.frontend': 'Frontend',
    'projects.filter.backend': 'Backend',
    'projects.filter.devops': 'DevOps',
    'projects.filter.fullstack': 'Full Stack',
    'projects.github': 'GitHub',
    'projects.demo': 'Demo',
    'projects.nuv.description': 'Web app for disk usage estimation for the NUV product at CDNTV Tecnologia. Focused on accuracy and usability.',
    'projects.devsetup.description': 'Development environment setup script. Full support for Windows, Linux, and macOS with installation automation.',
    'projects.portfolio.description': 'Personal portfolio with premium design, cinematic animations, and multi-language support. Built with Next.js and Framer Motion.',
    'contact.eyebrow': 'Contact',
    'contact.title': "Let's build something incredible together.",
    'contact.description': 'Available for freelance projects, collaborations, and full-time opportunities. I reply within 24 hours.',
    'contact.email': 'Send email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'footer.rights': 'Fernando Augusto Haeser. All rights reserved.',
    'footer.top': 'Top',
  },
  es: {
    'nav.about': 'Sobre mí',
    'nav.stack': 'Stack',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.lang': 'Idioma',
    'hero.eyebrow': 'Ingeniero de Software',
    'hero.title': 'Fernando Haeser',
    'hero.subtitle': 'Desarrollador Front-end & Back-end',
    'hero.lead': 'Construyendo experiencias digitales modernas con rendimiento, creatividad y arquitectura limpia.',
    'hero.cta.projects': 'Ver Proyectos',
    'hero.cta.contact': 'Contacto',
    'hero.status': 'Disponible para freelance',
    'hero.location': 'Porto Alegre, Brasil',
    'about.eyebrow': 'Sobre mí',
    'about.title': 'Transformo ideas en productos digitales con claridad e impacto.',
    'about.p1': 'Soy ingeniero de software enfocado en experiencias modernas, accesibles y bien estructuradas. Me gusta convertir requisitos en interfaces funcionales, priorizando rendimiento y calidad.',
    'about.p2': 'Trabajo bien en equipos ágiles y mantengo comunicación directa. Puedo ir del prototipo a la entrega final, garantizando consistencia visual y código sostenible.',
    'about.stat.languages': 'Lenguajes',
    'about.stat.projects': 'Proyectos',
    'about.stat.availability': 'Remoto',
    'about.education.title': 'Formación académica',
    'about.education.degree': 'Tecnólogo en Sistemas para Internet',
    'about.education.institution': 'IFRS — Instituto Federal de Rio Grande do Sul',
    'about.education.period': '2025 – 2028',
    'stack.eyebrow': 'Tecnologías',
    'stack.title': 'Mi stack de desarrollo',
    'stack.frontend': 'Frontend',
    'stack.backend': 'Backend',
    'stack.devops': 'DevOps',
    'stack.databases': 'Bases de Datos',
    'stack.tools': 'Herramientas',
    'projects.eyebrow': 'Proyectos',
    'projects.title': 'Trabajos recientes',
    'projects.filter.all': 'Todos',
    'projects.filter.frontend': 'Frontend',
    'projects.filter.backend': 'Backend',
    'projects.filter.devops': 'DevOps',
    'projects.filter.fullstack': 'Full Stack',
    'projects.github': 'GitHub',
    'projects.demo': 'Demo',
    'projects.nuv.description': 'Aplicación web para estimación de uso de disco del producto NUV de CDNTV Tecnologia. Enfoque en precisión y usabilidad.',
    'projects.devsetup.description': 'Script de configuración de entorno de desarrollo. Soporte completo para Windows, Linux y macOS con automatización de instalación.',
    'projects.portfolio.description': 'Portafolio personal con diseño premium, animaciones cinemáticas y soporte multiidioma. Construido con Next.js y Framer Motion.',
    'contact.eyebrow': 'Contacto',
    'contact.title': 'Construyamos algo increíble juntos.',
    'contact.description': 'Disponible para proyectos freelance, colaboraciones y oportunidades full-time. Respondo en hasta 24 horas.',
    'contact.email': 'Enviar correo',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'footer.rights': 'Fernando Augusto Haeser. Todos los derechos reservados.',
    'footer.top': 'Inicio',
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
      return
    }
    const browser = navigator.language.toLowerCase()
    if (browser.startsWith('pt')) setLocaleState('pt-BR')
    else if (browser.startsWith('es')) setLocaleState('es')
    else setLocaleState('en')
  }, [])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    localStorage.setItem('locale', next)
    document.documentElement.lang = next
  }

  const t = (key: string) => dict[locale]?.[key] ?? key

  return (
    <I18nContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useContext(I18nContext)
