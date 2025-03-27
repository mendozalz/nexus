import UnitedStatesFlag from "../components/flags/English.astro";
import SpainFlag from "../components/flags/Spain.astro";

export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
  en: {
    code: "en",
    name: "English",
    flag: UnitedStatesFlag,
  },
  es: {
    code: "es",
    name: "Español",
    flag: SpainFlag,
  },
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About us",
    "nav.services": "Our Services",
    "nav.planning": "Planning",
    "nav.team": "Our Team",
    "nav.success": "Success Stories",
    "nav.blog": "Blog",
    "nav.faq": "FAQs",
    "nav.contact": "Contact",
    "nav.btnPrimary": "Start investing today",
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre nosotros",
    "nav.services": "Nuestros servicios",
    "nav.planning": "Planificación",
    "nav.team": "Nuestro Equipo",
    "nav.success": "Casos de Exito",
    "nav.blog": "Blog",
    "nav.faq": "FAQs",
    "nav.contact": "Contacto",
    "nav.btnPrimary": "Empieza a invertir hoy mismo",
  },
} as const;

/* Destinado solo a las rutas de la barra de navegación */
export const routes = {
  en: {
    home: "home",
    about: "about-us",
    planning: "planning",
    team: "our-team",
    services: "our-services",
    success: "success-stories",
    blog: "blog",
    faq: "faqs",
    contact: "contact",
  },
  es: {
    home: "inicio",
    about: "nosotros",
    planning: "planificar",
    team: "nuestro-equipo",
    services: "nuestros-servicios",
    success: "casos-de-exito",
    blog: "blog",
    faq: "faqs",
    contact: "contacto",
  },
};

/* IDs de secciones para anclajes */
export const sectionIds = {
  en: {
    about: "about-us",
    planning: "planning",
    team: "our-team",
  },
  es: {
    about: "nosotros",
    planning: "planificar",
    team: "nuestro-equipo",
  },
};
