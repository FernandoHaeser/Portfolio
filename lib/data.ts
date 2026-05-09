export const personalInfo = {
  name: 'Fernando Haeser',
  email: 'fernandohaeserr@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fehaeser',
  github: 'https://github.com/FernandoHaeser',
  location: 'Porto Alegre, Brasil',
}

export type ProjectCategory = 'all' | 'frontend' | 'backend' | 'devops' | 'fullstack'

export interface Project {
  id: number
  title: string
  descriptionKey: string
  tags: string[]
  category: Exclude<ProjectCategory, 'all'>
  github?: string
  demo?: string
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
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    category: 'frontend',
    github: 'https://github.com/FernandoHaeser/Portfolio',
    featured: true,
  },
]

export interface TechCategory {
  labelKey: string
  emoji: string
  color: string
  items: string[]
}

export const techStack: TechCategory[] = [
  {
    labelKey: 'stack.frontend',
    emoji: '🎨',
    color: 'rgba(69,195,255,0.15)',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
  },
  {
    labelKey: 'stack.backend',
    emoji: '⚙️',
    color: 'rgba(111,99,255,0.15)',
    items: ['Java', 'Kotlin', 'Python', 'Spring Boot', 'Node.js'],
  },
  {
    labelKey: 'stack.devops',
    emoji: '🚀',
    color: 'rgba(167,139,250,0.15)',
    items: ['Docker', 'Kubernetes', 'Linux', 'Git', 'AWS'],
  },
  {
    labelKey: 'stack.databases',
    emoji: '🗄️',
    color: 'rgba(34,197,94,0.12)',
    items: ['PostgreSQL', 'MongoDB'],
  },
  {
    labelKey: 'stack.tools',
    emoji: '🛠️',
    color: 'rgba(251,146,60,0.12)',
    items: ['Flutter', 'C', 'VS Code', 'Figma', 'GitHub Actions'],
  },
]
