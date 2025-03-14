import { AnimatedTestimonials } from "./TestimoniosAnimados";

/**
 * Componente de datos para TestimoniosAnimados
 * Muestra un carrusel de testimonios del equipo de Nexus
 * @returns Componente React
 */
function AnimatedTestimonialsData() {
  // Datos de testimonios
  const testimonials = [
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

  return (
    <AnimatedTestimonials
      testimonials={testimonials}
      autoplay={false} // Aquí puedes cambiar a false para desactivar el autoplay
      interval={5000} // Ajusta este valor para cambiar la velocidad (en milisegundos)
    />
  );
}

export { AnimatedTestimonialsData };
