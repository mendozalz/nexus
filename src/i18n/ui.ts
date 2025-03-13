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
      'nav.home': 'Home',
      'nav.about': 'About us',
      'nav.agtech': 'About us',
      'nav.learnmore': 'FAQs',
      'nav.contact': 'Contact',
      'nav.btnPrimary': 'Start investing today',
    },
    es: {
      'nav.home': 'Inicio',
      'nav.about': 'Sobre nosotros',
      'nav.agtech': 'Nosotros',
      'nav.learnmore': 'FAQs',
      'nav.contact': 'Contacto',
      'nav.btnPrimary': 'Empieza a invertir hoy mismo',
    },
  } as const;

  /* Destinado solo a las rutas de la barra de navegación */
  export const routes = {
    en:{
      'about': 'about-us',
      'agtech': 'agtech',
      'learnmore': 'aprender_mas',
    },
    es:{ 
      'about': 'nosotros',
      'agtech': 'agtech',
      'learnmore': 'aprender_mas',
    }
  }