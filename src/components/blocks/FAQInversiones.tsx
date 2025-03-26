"use client";

import PreguntasFrecuentes from "../ui/PreguntasFrecuentes";

/**
 * Interfaz para las propiedades del componente FAQInversiones
 * @interface Props
 * @property {Object} i18n - Objeto con las traducciones
 */
interface Props {
  i18n: {
    FAQ: {
      TITLE: string;
      DESCRIPTION: string;
      PREGUNTAS: Array<{
        PREGUNTA: string;
        RESPUESTA: {
          TITLE: string;
          LIST1: string;
          LIST2: string;
          LIST3: string;
          LIST4: string;
        };
        EXTRA_ITEM: {
          TITLE: string;
          LIST1: string;
          LIST2: string;
        };
      }>;
    };
  };
}

/**
 * Componente que muestra preguntas frecuentes sobre inversiones
 * @param {Props} props - Propiedades del componente
 * @returns {JSX.Element} Componente de preguntas frecuentes sobre inversiones
 */
export default function FAQInversiones({ i18n }: Props): JSX.Element {
  return (
    <PreguntasFrecuentes
      i18n={i18n}
    />
  );
}
