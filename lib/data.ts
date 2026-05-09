export const personalInfo = {
  name: 'Fernando Haeser',
  email: 'fernandohaeserr@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fehaeser',
  github: 'https://github.com/FernandoHaeser',
  location: 'Porto Alegre, Brasil',
  cv: '/files/Fernando_Haeser_CV.pdf',
}

// ─── Projects ───────────────────────────────────────────────────────────────

export type ProjectCategory = 'all' | 'frontend' | 'backend' | 'devops' | 'fullstack'

export interface Project {
  id: number
  title: string
  descriptionKey: string
  tags: string[]
  category: Exclude<ProjectCategory, 'all'>
  github?: string
  demo?: string
  image?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'NUV Calculator',
    descriptionKey: 'projects.nuv.description',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Web API'],
    category: 'frontend',
    featured: true,
  },
  {
    id: 2,
    title: 'dev-setup',
    descriptionKey: 'projects.devsetup.description',
    tags: ['Shell', 'Linux', 'macOS', 'Windows', 'DevOps'],
    category: 'devops',
    github: 'https://github.com/FernandoHaeser/dev-setup',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio',
    descriptionKey: 'projects.portfolio.description',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'frontend',
    github: 'https://github.com/FernandoHaeser/Portfolio',
    featured: true,
  },
]

// ─── Experience ──────────────────────────────────────────────────────────────

export type ExperienceType = 'work' | 'education'

export interface ExperienceEntry {
  id: number
  company: string
  roleKey: string
  start: string
  endKey: string
  descKey: string
  type: ExperienceType
  location?: string
}

export const experience: ExperienceEntry[] = [
  {
    id: 1,
    company: 'CDNTV Tecnologia',
    roleKey: 'exp.cdntv.role',
    start: '2024',
    endKey: 'exp.present',
    descKey: 'exp.cdntv.desc',
    type: 'work',
    location: 'Porto Alegre, RS',
  },
  {
    id: 2,
    company: 'IFRS — Instituto Federal do Rio Grande do Sul',
    roleKey: 'exp.ifrs.role',
    start: '2025',
    endKey: 'exp.ifrs.end',
    descKey: 'exp.ifrs.desc',
    type: 'education',
    location: 'Porto Alegre, RS',
  },
]

// ─── Tech Stack ──────────────────────────────────────────────────────────────

export type TechCategory = 'frontend' | 'backend' | 'data' | 'devops' | 'tools'

export interface TechItem {
  name: string
  category: TechCategory
}

export interface TechStackCategory {
  key: TechCategory
  labelKey: string
  icon: string
  color: string
  items: string[]
}

const techCategoryOrder: TechCategory[] = ['frontend', 'backend', 'data', 'devops', 'tools']

const techCategoryMeta: Record<TechCategory, Omit<TechStackCategory, 'key' | 'items'>> = {
  frontend: {
    labelKey: 'stack.category.frontend',
    icon: 'FE',
    color: 'rgba(14, 165, 233, 0.12)',
  },
  backend: {
    labelKey: 'stack.category.backend',
    icon: 'BE',
    color: 'rgba(248, 113, 113, 0.12)',
  },
  data: {
    labelKey: 'stack.category.data',
    icon: 'DB',
    color: 'rgba(34, 197, 94, 0.12)',
  },
  devops: {
    labelKey: 'stack.category.devops',
    icon: 'Ops',
    color: 'rgba(245, 158, 11, 0.12)',
  },
  tools: {
    labelKey: 'stack.category.tools',
    icon: 'TL',
    color: 'rgba(20, 184, 166, 0.12)',
  },
}

export const techStack: TechItem[] = [
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Java', category: 'backend' },
  { name: 'Kotlin', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Spring Boot', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'PostgreSQL', category: 'data' },
  { name: 'MongoDB', category: 'data' },
  { name: 'Docker', category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'AWS', category: 'devops' },
  { name: 'Linux', category: 'devops' },
  { name: 'Git', category: 'devops' },
  { name: 'GitHub Actions', category: 'devops' },
  { name: 'Flutter', category: 'tools' },
  { name: 'Figma', category: 'tools' },
]

export const techStackCategories: TechStackCategory[] = techCategoryOrder
  .map((key) => {
    const meta = techCategoryMeta[key]
    const items = techStack.filter((tech) => tech.category === key).map((tech) => tech.name)
    return { key, ...meta, items }
  })
  .filter((category) => category.items.length > 0)
