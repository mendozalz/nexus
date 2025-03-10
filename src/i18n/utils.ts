import { ui, defaultLang, showDefaultLang, routes } from './ui';

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/');
	if (lang in ui) return lang as keyof typeof ui;
	return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key];
	};
}

export function useTranslatedPath(lang: keyof typeof ui) {
	return function translatePath(path: string, l: string = lang) {
		// Si la ruta está vacía o es solo "/", devolvemos la ruta principal
		if (!path || path === '/') {
			return !showDefaultLang && l === defaultLang ? '/' : `/${l}`;
		}
		
		// Eliminar barras iniciales y finales para obtener solo el nombre de la ruta
		const pathName = path.replace(/^\/+|\/+$/g, '');
		
		// Si pathName está vacío después de eliminar las barras, estamos en la ruta principal
		if (!pathName) {
			return !showDefaultLang && l === defaultLang ? '/' : `/${l}`;
		}
		
		// Verificar si la ruta actual tiene una traducción en el idioma destino
		const hasTranslation =
			(routes[l as keyof typeof routes] as Record<string, string>)[
				pathName
			] !== undefined;
		
		// Si la ruta existe directamente en el objeto routes
		if (hasTranslation) {
			const translatedPath = '/' +
				(routes[l as keyof typeof routes] as Record<string, string>)[
					pathName
				];
			
			return !showDefaultLang && l === defaultLang
				? translatedPath
				: `/${l}${translatedPath}`;
		}
		
		// Si la ruta no existe directamente, buscar si es una ruta traducida
		// Primero, buscar en las rutas del idioma actual para encontrar la clave
		let routeKey = '';
		
		// Buscar en todas las rutas del idioma actual
		const currentLangRoutes = routes[lang as keyof typeof routes];
		if (currentLangRoutes) {
			for (const [key, value] of Object.entries(currentLangRoutes)) {
				if (value === pathName) {
					routeKey = key;
					break;
				}
			}
		}
		
		// Si encontramos una clave, buscar la traducción en el idioma destino
		if (routeKey) {
			const targetLangRoutes = routes[l as keyof typeof routes];
			if (targetLangRoutes && targetLangRoutes[routeKey as keyof typeof targetLangRoutes]) {
				const translatedPath = '/' + targetLangRoutes[routeKey as keyof typeof targetLangRoutes];
				
				return !showDefaultLang && l === defaultLang
					? translatedPath
					: `/${l}${translatedPath}`;
			}
		}
		
		// Si no encontramos una traducción, usar la ruta original
		return !showDefaultLang && l === defaultLang
			? `/${pathName}`
			: `/${l}/${pathName}`;
	};
}

export function getRouteFromUrl(url: URL): string | undefined {
	const pathname = new URL(url).pathname;
	const parts = pathname?.split('/').filter(Boolean);
	
	// Si no hay partes en la ruta, estamos en la página principal
	if (parts.length === 0) {
		return undefined;
	}
	
	const currentLang = getLangFromUrl(url);
	let path = '';
	
	// Si el primer segmento es un idioma, tomamos el segundo segmento como la ruta
	if (parts[0] === currentLang) {
		path = parts[1] || '';
	} else {
		// Si no hay prefijo de idioma, tomamos el primer segmento
		path = parts[0] || '';
	}
	
	// Si estamos en el idioma predeterminado
	if (defaultLang === currentLang) {
		// Verificar si la ruta actual está en las rutas del idioma predeterminado
		const defaultRoutes = routes[defaultLang];
		for (const [key, value] of Object.entries(defaultRoutes)) {
			if (value === path) {
				return key;
			}
		}
	} else {
		// Si estamos en otro idioma, buscar la clave correspondiente
		const currentRoutes = routes[currentLang as keyof typeof routes];
		if (currentRoutes) {
			for (const [key, value] of Object.entries(currentRoutes)) {
				if (value === path) {
					return key;
				}
			}
		}
	}
	
	// Si no encontramos una coincidencia en las rutas definidas, devolver la ruta tal cual
	return path || undefined;
}