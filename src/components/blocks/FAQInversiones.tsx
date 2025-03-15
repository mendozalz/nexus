"use client";

import PreguntasFrecuentes from "../ui/PreguntasFrecuentes";

/**
 * Componente que muestra preguntas frecuentes sobre inversiones
 * @returns {JSX.Element} Componente de preguntas frecuentes sobre inversiones
 */
export default function FAQInversiones(): JSX.Element {
  const preguntasInversiones = [
    {
      pregunta: "¿Cuáles son los requisitos para invertir?",
      respuesta: {
        title:
          "Para invertir con <b>Nexus Private Capital,</b> necesitarás cumplir con los siguientes requisitos:",
        list1: "Ser mayor de edad.",
        list2: " Contar con un capital mínimo según la estrategia elegida.",
        list3: "Completar el proceso de registro y validación de identidad.",
        list4: "",
      },
      extraItem: {
        title: "",
        list1: "",
        list2: "",
      },
    },
    {
      pregunta: "¿Cuánto tiempo debe permanecer el capital?",
      respuesta: {
        title:
          "El período de inversión varía según la estrategia seleccionada:",
        list1: "<b>Corto plazo:</b> Desde 3 meses",
        list2: "<b>Mediano plazo:</b> Entre 6 y 12 meses.",
        list3:
          "<b>Largo plazo:</b> A partir de 1 año, con posibilidad de renovaciones estratégicas.",
        list4: "",
      },
      extraItem: {
        title: "",
        list1: "",
        list2: "",
      },
    },
    {
      pregunta: "¿Cómo y cuándo se pagan las rentabilidades?",
      respuesta: {
        title:
          "Las rentabilidades generadas se pagan de acuerdo con el plan de inversión seleccionado:",
        list1: "<b>Trimestral:</b> Rentabilidad acumulada cada 3 meses.",
        list2: "<b>Semestral:</b> Pago de rentabilidad cada 6 meses.",
        list3: "<b>Anual:</b> Rentabilidad total al finalizar el año fiscal.",
        list4: "",
      },
      extraItem: {
        title: "<b>Métodos de pago:</b>",
        list1: "Transferencias bancarias a cuentas registradas.",
        list2:
          " Otras opciones de pago dependiendo del país y normativas vigentes.",
      },
    },
    {
      pregunta: "¿Qué riesgos existen y cómo los manejan?",
      respuesta: {
        title:
          "Toda inversión conlleva riesgos, pero en <b>Nexus Private Capital</b> implementamos <b>estrategias avanzadas de gestión de riesgos</b> para minimizarlos.",
        list1:
          "<b>Diversificación de activos:</b> Invertimos en diferentes sectores para mitigar la volatilidad.",
        list2:
          "<b>Análisis en tiempo real:</b> Evaluamos el mercado constantemente para ajustar estrategias.",
        list3:
          "<b>Modelos de inversión optimizados:</b> Basados en análisis de datos y tendencias financieras.",
        list4:
          "<b>Planes de contingencia:</b> Ajustamos posiciones de inversión en función del contexto económico.",
      },
      extraItem: {
        title:
          "<b>Contamos con medidas de control y auditoría para garantizar la seguridad del capital invertido.</b>",
        list1: "",
        list2: "",
      },
    },
  ];

  return (
    <PreguntasFrecuentes
      titulo="FAQs"
      subtitulo="Todo lo que necesitas saber antes de invertir"
      preguntas={preguntasInversiones}
    />
  );
}
