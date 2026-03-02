import "./style.css";

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const year = document.getElementById("year");
const languageSelect = document.getElementById("languageSelect");
const metaDescription = document.getElementById("metaDescription");

const translations = {
  "pt-BR": {
    "head.title": "Fernando Haeser - Portfólio",
    "head.description": "Portfólio simples com projetos, habilidades e contato.",
    "header.languageLabel": "Idioma",
    "header.languageAria": "Selecionar idioma",
    "header.menuToggle": "Abrir menu",
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contato",
    "hero.eyebrow": "Engenheiro de Software",
    "hero.title": "Vivendo e aprendendo a cada dia",
    "hero.lead": "Aqui você encontra uma seleção dos meus projetos, habilidades e formas de contato.",
    "hero.primaryCta": "Ver projetos",
    "hero.secondaryCta": "Fale comigo",
    "hero.status": "Freelancer disponível",
    "hero.avatarAlt": "Foto de perfil",
    "hero.role": "Front-end & Back-end Developer",
    "hero.chipLocationShort": "Porto Alegre",
    "hero.chipResponse": "Resposta em 24h",
    "hero.chipAvailability": "Remoto + presencial",
    "hero.location": "Porto Alegre, Brasil",
    "hero.linkedin": "linkedin.com/in/fehaeser",
    "about.eyebrow": "Sobre mim",
    "about.title": "Transformo ideias em produtos digitais com clareza e impacto.",
    "about.paragraph1": "Sou engenheiro de software com foco em experiências modernas, acessíveis e bem estruturadas. Gosto de transformar requisitos em interfaces funcionais, priorizando performance e qualidade.",
    "about.paragraph2": "Trabalho bem em times ágeis e mantenho comunicação direta. Posso atuar do protótipo à entrega final, garantindo consistência visual e código sustentável.",
    "about.educationTitle": "Formação acadêmica",
    "about.educationDegree": "Técnologo em Sistemas para Internet",
    "about.educationInstitution": "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul - IFRS",
    "about.educationDate": "2025 - 2028",
    "projects.eyebrow": "Projetos",
    "projects.title": "Alguns trabalhos recentes",
    "projects.nuvDescription": "Aplicação web para cálculo de estimativa de disco para o produto NUV, da empresa:",
    "projects.nuvCompany": "CDNTV Tecnologia",
    "projects.details": "Ver detalhes →",
    "projects.devSetupDescription": "Configuração de ambiente de desenvolvimento para projetos, funciona para: Windows, Linux e macOS.",
    "projects.portfolioDescription": "Website responsivo com transições suaves e layout flexível.",
    "skills.eyebrow": "Habilidades",
    "skills.title": "Tecnologias e competências",
    "contact.eyebrow": "Contato",
    "contact.title": "Vamos conversar sobre o seu próximo projeto.",
    "contact.description": "Me envie um e-mail ou conecte pelo LinkedIn. Respondo em até 24 horas.",
    "contact.emailCta": "Enviar e-mail",
    "contact.linkedinCta": "LinkedIn",
    "contact.githubCta": "GitHub",
    "footer.prefix": "©",
    "footer.suffix": "Fernando Augusto Haeser. Todos os direitos reservados.",
    "footer.top": "Topo",
    "footer.projects": "Projetos",
  },
  en: {
    "head.title": "Fernando Haeser - Portfolio",
    "head.description": "Simple portfolio with projects, skills, and contact.",
    "header.languageLabel": "Language",
    "header.languageAria": "Select language",
    "header.menuToggle": "Open menu",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.eyebrow": "Software Engineer",
    "hero.title": "Living and learning every day",
    "hero.lead": "Here you can find a selection of my projects, skills, and ways to get in touch.",
    "hero.primaryCta": "View projects",
    "hero.secondaryCta": "Talk to me",
    "hero.status": "Freelancer available",
    "hero.avatarAlt": "Profile photo",
    "hero.role": "Front-end & Back-end Developer",
    "hero.chipLocationShort": "Porto Alegre",
    "hero.chipResponse": "Reply in 24h",
    "hero.chipAvailability": "Remote + onsite",
    "hero.location": "Porto Alegre, Brazil",
    "hero.linkedin": "linkedin.com/in/fehaeser",
    "about.eyebrow": "About me",
    "about.title": "I turn ideas into digital products with clarity and impact.",
    "about.paragraph1": "I am a software engineer focused on modern, accessible, and well-structured experiences. I like turning requirements into functional interfaces, prioritizing performance and quality.",
    "about.paragraph2": "I work well in agile teams and keep communication direct. I can go from prototype to final delivery, ensuring visual consistency and sustainable code.",
    "about.educationTitle": "Academic background",
    "about.educationDegree": "Technologist in Internet Systems",
    "about.educationInstitution": "Federal Institute of Education, Science and Technology of Rio Grande do Sul - IFRS",
    "about.educationDate": "2025 - 2028",
    "projects.eyebrow": "Projects",
    "projects.title": "Some recent work",
    "projects.nuvDescription": "Web app to estimate disk usage for the NUV product from:",
    "projects.nuvCompany": "CDNTV Tecnologia",
    "projects.details": "View details →",
    "projects.devSetupDescription": "Development environment setup for projects; works on Windows, Linux, and macOS.",
    "projects.portfolioDescription": "Responsive website with smooth transitions and flexible layout.",
    "skills.eyebrow": "Skills",
    "skills.title": "Technologies and competencies",
    "contact.eyebrow": "Contact",
    "contact.title": "Let’s talk about your next project.",
    "contact.description": "Send me an email or connect via LinkedIn. I reply within 24 hours.",
    "contact.emailCta": "Send email",
    "contact.linkedinCta": "LinkedIn",
    "contact.githubCta": "GitHub",
    "footer.prefix": "©",
    "footer.suffix": "Fernando Augusto Haeser. All rights reserved.",
    "footer.top": "Top",
    "footer.projects": "Projects",
  },
  es: {
    "head.title": "Fernando Haeser - Portafolio",
    "head.description": "Portafolio simple con proyectos, habilidades y contacto.",
    "header.languageLabel": "Idioma",
    "header.languageAria": "Seleccionar idioma",
    "header.menuToggle": "Abrir menú",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Ingeniero de Software",
    "hero.title": "Viviendo y aprendiendo cada día",
    "hero.lead": "Aquí encontrarás una selección de mis proyectos, habilidades y formas de contacto.",
    "hero.primaryCta": "Ver proyectos",
    "hero.secondaryCta": "Hable conmigo",
    "hero.status": "Freelancer disponible",
    "hero.avatarAlt": "Foto de perfil",
    "hero.role": "Desarrollador Front-end y Back-end",
    "hero.chipLocationShort": "Porto Alegre",
    "hero.chipResponse": "Respuesta en 24h",
    "hero.chipAvailability": "Remoto + presencial",
    "hero.location": "Porto Alegre, Brasil",
    "hero.linkedin": "linkedin.com/in/fehaeser",
    "about.eyebrow": "Sobre mí",
    "about.title": "Transformo ideas en productos digitales con claridad e impacto.",
    "about.paragraph1": "Soy ingeniero de software con foco en experiencias modernas, accesibles y bien estructuradas. Me gusta convertir requisitos en interfaces funcionales, priorizando rendimiento y calidad.",
    "about.paragraph2": "Trabajo bien en equipos ágiles y mantengo comunicación directa. Puedo ir del prototipo a la entrega final, garantizando consistencia visual y código sostenible.",
    "about.educationTitle": "Formación académica",
    "about.educationDegree": "Tecnólogo en Sistemas para Internet",
    "about.educationInstitution": "Instituto Federal de Educación, Ciencia y Tecnología de Rio Grande do Sul - IFRS",
    "about.educationDate": "2025 - 2028",
    "projects.eyebrow": "Proyectos",
    "projects.title": "Algunos trabajos recientes",
    "projects.nuvDescription": "Aplicación web para estimar el uso de disco del producto NUV, de la empresa:",
    "projects.nuvCompany": "CDNTV Tecnologia",
    "projects.details": "Ver detalles →",
    "projects.devSetupDescription": "Configuración de entorno de desarrollo para proyectos; funciona en Windows, Linux y macOS.",
    "projects.portfolioDescription": "Sitio web responsivo con transiciones suaves y diseño flexible.",
    "skills.eyebrow": "Habilidades",
    "skills.title": "Tecnologías y competencias",
    "contact.eyebrow": "Contacto",
    "contact.title": "Hablemos sobre tu próximo proyecto.",
    "contact.description": "Envíame un correo o conéctate por LinkedIn. Respondo en hasta 24 horas.",
    "contact.emailCta": "Enviar correo",
    "contact.linkedinCta": "LinkedIn",
    "contact.githubCta": "GitHub",
    "footer.prefix": "©",
    "footer.suffix": "Fernando Augusto Haeser. Todos los derechos reservados.",
    "footer.top": "Inicio",
    "footer.projects": "Proyectos",
  },
};

const getDefaultLanguage = () => {
  const stored = localStorage.getItem("language");
  if (stored && translations[stored]) return stored;
  const browser = navigator.language.toLowerCase();
  if (browser.startsWith("pt")) return "pt-BR";
  if (browser.startsWith("es")) return "es";
  return "en";
};

const applyTranslations = (language) => {
  const dictionary = translations[language] || translations["pt-BR"];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (!key || !dictionary[key]) return;
    const attribute = element.getAttribute("data-i18n-attr");
    if (attribute) {
      element.setAttribute(attribute, dictionary[key]);
      return;
    }
    element.textContent = dictionary[key];
  });

  document.documentElement.lang = language;
  const title = dictionary["head.title"];
  if (title) document.title = title;
  if (metaDescription && dictionary["head.description"]) {
    metaDescription.setAttribute("content", dictionary["head.description"]);
  }
};

const setLanguage = (language) => {
  const nextLanguage = translations[language] ? language : "pt-BR";
  localStorage.setItem("language", nextLanguage);
  applyTranslations(nextLanguage);
  if (languageSelect) languageSelect.value = nextLanguage;
};

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLSelectElement)) return;
    setLanguage(target.value);
  });
}

setLanguage(getDefaultLanguage());

if (window.location.hash || window.location.href.endsWith("#")) {
  history.replaceState(null, "", window.location.pathname + window.location.search);
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href) return;
    if (href === "#") {
      event.preventDefault();
      history.replaceState(null, "", window.location.pathname + window.location.search);
      return;
    }
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", window.location.pathname + window.location.search);
  });
});
