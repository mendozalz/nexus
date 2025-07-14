import { AnimatedTestimonials } from "./TestimoniosAnimados";
import { useEffect, useState } from "react";
import { getLangFromUrl } from "../../i18n/utils";

/**
 * Componente de datos para TestimoniosAnimados
 * Muestra un carrusel de testimonios del equipo de Nexus
 * @returns Componente React
 */
function AnimatedTestimonialsData() {
  // Estado para almacenar el idioma actual
  const [lang, setLang] = useState("es"); // Español por defecto

  // Detectar el idioma cuando el componente se monta
  useEffect(() => {
    // Verificar si estamos en el navegador
    if (typeof window !== "undefined") {
      // Usar la función getLangFromUrl para obtener el idioma actual
      const currentLang = getLangFromUrl(new URL(window.location.href));
      setLang(currentLang);
    }
  }, []);

  // Datos de testimonios en español
  const testimonialsES = [
    {
      quote:
        "Jose Gaviria es un ejecutivo con amplia experiencia en estructuración financiera, desarrollo de negocios y estrategias comerciales. Como Chief Business Officer (CBO), lidera la expansión de Nexus Private Capital, identificando oportunidades estratégicas de crecimiento y alianzas clave. En su rol de Chief Financial Officer (CFO), supervisa la planificación y gestión de recursos, asegurando la solidez financiera de la empresa.",
      perfilList1: "✔ Gestión financiera y estructuración de capital.",
      perfilList2: "✔ Desarrollo de estrategias comerciales y expansión.",
      perfilList3: "✔ Análisis de rentabilidad y mitigación de riesgos.",
      name: "Jose Gaviria",
      designation:
        "Chief Business Officer (CBO) & Chief Financial Officer (CFO)",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Nicolás Echeverri es un experto en gestión de relaciones estratégicas y desarrollo de alianzas clave. Como Chief Relationship Officer (CRO) en Nexus Private Capital, lidera la construcción y el fortalecimiento de relaciones con clientes, inversionistas y socios estratégicos, asegurando una comunicación efectiva y una experiencia excepcional para todos los stakeholders. Su enfoque está en generar confianza, fomentar colaboraciones de alto impacto y consolidar el crecimiento sostenible de la empresa a través de una red sólida de contactos en el sector financiero e inmobiliario.",
      perfilList1: "✔ Gestión de relaciones con inversionistas y clientes.",
      perfilList2:
        "✔ Desarrollo de alianzas estratégicas y expansión de negocios.",
      perfilList3:
        "✔ Optimización de la comunicación y fidelización de clientes.",
      name: "Nicolás Echeverri",
      designation: "Chief Relationship Officer (CRO) | Director de Relaciones",
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Datos de testimonios en inglés
  const testimonialsEN = [
    {
      quote:
        "Jose Gaviria is an executive with extensive experience in financial structuring, business development, and commercial strategies. As Chief Business Officer (CBO), he leads the expansion of Nexus Private Capital by identifying strategic growth opportunities and key partnerships. As Chief Financial Officer (CFO), he oversees financial planning and resource management, ensuring the company's financial stability.",
      perfilList1: "✔ Financial management and capital structuring.",
      perfilList2: "✔ Commercial strategy development and expansion.",
      perfilList3: "✔ Profitability analysis and risk mitigation.",
      name: "Jose Gaviria",
      designation:
        "Chief Business Officer (CBO) & Chief Financial Officer (CFO)",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Nicolás Echeverri is an expert in strategic relationship management and key partnership development. As Chief Relationship Officer (CRO) at Nexus Private Capital, he leads the establishment and strengthening of relationships with clients, investors, and strategic partners, ensuring effective communication and an exceptional experience for all stakeholders.",
      perfilList1: "✔ Investor and client relationship management.",
      perfilList2: "✔ Strategic partnership development and business expansion.",
      perfilList3: "✔ Communication optimization and client retention.",
      name: "Nicolás Echeverri",
      designation: "Chief Relationship Officer (CRO) | Director of Relations",
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Seleccionar los testimonios según el idioma
  const testimonials = lang === "en" ? testimonialsEN : testimonialsES;

  return (
    <AnimatedTestimonials
      testimonials={testimonials}
      autoplay={true} // Activar o desactivar el autoplay
      interval={8000} // Ajustar la velocidad (en milisegundos)
    />
  );
}

export { AnimatedTestimonialsData };
