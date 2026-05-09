export const personalInfo = {
  name: 'Alex Johnson',
  email: 'alex@example.com',
  linkedin: 'https://www.linkedin.com/in/alexjohnson',
  github: 'https://github.com/alexjohnson',
  location: 'San Francisco, USA',
  cv: '/files/Alex_Johnson_CV.pdf',
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
    title: 'E-Commerce Platform',
    descriptionKey: 'projects.ecommerce.description',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'fullstack',
    github: 'https://github.com/alexjohnson/ecommerce-platform',
    demo: 'https://ecommerce.example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Manager API',
    descriptionKey: 'projects.taskapi.description',
    tags: ['Node.js', 'TypeScript', 'MongoDB', 'REST API'],
    category: 'backend',
    github: 'https://github.com/alexjohnson/task-manager-api',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio',
    descriptionKey: 'projects.portfolio.description',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'frontend',
    github: 'https://github.com/alexjohnson/portfolio',
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
    company: 'Acme Corp',
    roleKey: 'exp.acme.role',
    start: '2023',
    endKey: 'exp.present',
    descKey: 'exp.acme.desc',
    type: 'work',
    location: 'San Francisco, CA',
  },
  {
    id: 2,
    company: 'State University',
    roleKey: 'exp.university.role',
    start: '2019',
    endKey: 'exp.university.end',
    descKey: 'exp.university.desc',
    type: 'education',
    location: 'San Francisco, CA',
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
