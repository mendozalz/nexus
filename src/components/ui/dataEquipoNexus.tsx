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
        "El Dr. Jaime Marulanda es un líder con una destacada trayectoria en gestión de inversiones y desarrollo de estrategias financieras innovadoras. Con una sólida formación académica y una visión estratégica enfocada en la optimización del capital, ha sido clave en la consolidación de Nexus Private Capital como una firma de referencia en el sector. Su liderazgo se basa en la implementación de modelos avanzados de inversión y en la integración de tecnología para maximizar la rentabilidad y reducir la exposición al riesgo.",
      perfilList1: "✔ Estrategia corporativa y expansión de mercados.",
      perfilList2: "✔ Gestión de inversiones y optimización de capital.",
      perfilList3:
        "✔ Innovación y transformación digital en el sector financiero.",
      name: "Dr. Jaime Marulanda, PhD",
      designation: "Chief Executive Officer (CEO) | Director Ejecutivo",
      src: "https://media.istockphoto.com/id/1940987682/photo/suited-asian-executive-standing-by-corporate-structure-with-arms-crossed.jpg?s=1024x1024&w=is&k=20&c=3SE47KvkY1EhabesR9Xqxo6vbU_m3AVi1EcEbfPE0JY=",
    },
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
    {
      quote:
        "Juan Lopera es un especialista en optimización de operaciones y desarrollo tecnológico, con una trayectoria consolidada en la implementación de soluciones innovadoras para la gestión eficiente del capital. Como Chief Operating Officer (COO), supervisa el desarrollo y ejecución de procesos internos, asegurando la eficiencia operativa de Nexus Private Capital. En su rol de Chief Technology Officer (CTO), lidera la integración de tecnología avanzada en las estrategias de inversión, garantizando que la empresa mantenga una ventaja competitiva en el sector.",
      perfilList1: "✔ Optimización de procesos operativos y escalabilidad.",
      perfilList2: "✔ Implementación de tecnología aplicada a inversiones.",
      perfilList3: "✔ Desarrollo de modelos de automatización financiera.",
      name: "Juan Lopera",
      designation:
        "Chief Operating Officer (COO) & Chief Technology Officer (CTO)",
      src: "https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Datos de testimonios en inglés
  const testimonialsEN = [
    {
      quote:
        "Dr. Jaime Marulanda is a distinguished leader in investment management and the development of innovative financial strategies. With a strong academic background and a strategic vision focused on capital optimization, he has been instrumental in establishing Nexus Private Capital as a leading firm in the industry. His leadership is centered on implementing advanced investment models and integrating technology to maximize profitability while minimizing risk exposure.",
      perfilList1: "✔ Corporate strategy and market expansion.",
      perfilList2: "✔ Investment management and capital optimization.",
      perfilList3: "✔ Innovation and digital transformation in the financial sector.",
      name: "Dr. Jaime Marulanda, PhD",
      designation: "Chief Executive Officer (CEO) | Executive Director",
      src: "https://media.istockphoto.com/id/1940987682/photo/suited-asian-executive-standing-by-corporate-structure-with-arms-crossed.jpg?s=1024x1024&w=is&k=20&c=3SE47KvkY1EhabesR9Xqxo6vbU_m3AVi1EcEbfPE0JY=",
    },
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
    {
      quote:
        "Juan Lopera specializes in operational optimization and technological development, with a solid track record in implementing innovative solutions for efficient capital management. As Chief Operating Officer (COO), he oversees the development and execution of internal processes, ensuring Nexus Private Capital's operational efficiency. As Chief Technology Officer (CTO), he leads the integration of advanced technology into investment strategies, keeping the company at the forefront of the industry.",
      perfilList1: "✔ Operational process optimization and scalability.",
      perfilList2: "✔ Implementation of technology applied to investments.",
      perfilList3: "✔ Development of financial automation models.",
      name: "Juan Lopera",
      designation:
        "Chief Operating Officer (COO) & Chief Technology Officer (CTO)",
      src: "https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
