import UnitedStatesFlag  from '../components/flags/English.astro';
import SpainFlag  from '../components/flags/Spain.astro';

export const LANGUAGES: Record<
	string,
	{ code: string; name: string; flag: typeof SpainFlag }
> = {
	en: {
		code: 'en',
		name: 'English',
		flag: UnitedStatesFlag,
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: SpainFlag,
	},
};

  
  export const defaultLang = 'en';
  export const showDefaultLang = false;
  
  export const ui = {
    en: {
      'nav.home': 'What can you do?',
      'nav.about': 'Services',
      'nav.agtech': 'About us',
      'nav.learnmore': 'FAQs',
      'nav.contact': 'Contact',
      'nav.btnPrimary': 'Invest Now',
    },
    es: {
      'nav.home': '¿Qué puedes hacer?',
      'nav.about': 'Servicios',
      'nav.agtech': 'Nosotros',
      'nav.learnmore': 'FAQs',
      'nav.contact': 'Contacto',
      'nav.btnPrimary': 'Invertir Ahora',
    },
  } as const;

  /* Destinado solo a las rutas de la barra de navegación */
  export const routes = {
    en:{
      'about': 'about',
      'agtech': 'agtech',
      'learnmore': 'aprender_mas',
    },
    es:{ 
      'about': 'acerca',
      'agtech': 'agtech',
      'learnmore': 'aprender_mas',
    }
  }