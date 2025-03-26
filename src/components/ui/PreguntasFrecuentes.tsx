"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import type { JSX } from "react/jsx-runtime";

/**
 * Interfaz para los elementos adicionales en las respuestas
 * @interface ElementoAdicional
 * @property {string} title - Título del elemento adicional
 * @property {string} list1 - Primer elemento de la lista adicional
 * @property {string} list2 - Segundo elemento de la lista adicional
 */
interface ElementoAdicional {
  title: string;
  list1: string;
  list2: string;
}

/**
 * Interfaz para el contenido de las respuestas
 * @interface ContenidoRespuesta
 * @property {string} title - Título o introducción de la respuesta
 * @property {string} list1 - Primer elemento de la lista
 * @property {string} list2 - Segundo elemento de la lista
 * @property {string} list3 - Tercer elemento de la lista
 * @property {string} list4 - Cuarto elemento de la lista
 */
interface ContenidoRespuesta {
  title: string;
  list1: string;
  list2: string;
  list3: string;
  list4?: string;
}

/**
 * Interfaz para los elementos de preguntas frecuentes
 * @interface PreguntaFrecuente
 * @property {string} pregunta - La pregunta a mostrar
 * @property {string | ContenidoRespuesta} respuesta - La respuesta a la pregunta, puede ser texto simple o un objeto con formato
 * @property {ElementoAdicional} [extraItem] - Elemento adicional opcional para la respuesta
 */
interface PreguntaFrecuente {
  pregunta: string;
  respuesta: string | ContenidoRespuesta;
  extraItem?: ElementoAdicional;
}

/**
 * Propiedades para el componente de PreguntasFrecuentes
 * @interface PreguntasFrecuentesProps
 * @property {string} [titulo] - Título principal del componente (opcional si se proporciona i18n)
 * @property {string} [subtitulo] - Subtítulo destacado del componente (opcional si se proporciona i18n)
 * @property {PreguntaFrecuente[]} [preguntas] - Array de preguntas y respuestas (opcional si se proporciona i18n)
 * @property {Object} [i18n] - Objeto con las traducciones (opcional)
 */
interface PreguntasFrecuentesProps {
  titulo?: string;
  subtitulo?: string;
  preguntas?: PreguntaFrecuente[];
  i18n?: {
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
 * Verifica si la respuesta es un objeto de tipo ContenidoRespuesta
 * @param {any} respuesta - La respuesta a verificar
 * @returns {boolean} True si es un objeto de tipo ContenidoRespuesta
 */
const esContenidoRespuesta = (
  respuesta: any,
): respuesta is ContenidoRespuesta => {
  return (
    typeof respuesta === "object" && respuesta !== null && "title" in respuesta
  );
};

/**
 * Componente para mostrar una sección de preguntas frecuentes con acordeón
 * @param {PreguntasFrecuentesProps} props - Propiedades del componente
 * @returns {JSX.Element} Componente de preguntas frecuentes
 */
export default function PreguntasFrecuentes({
  titulo,
  subtitulo,
  preguntas,
  i18n,
}: PreguntasFrecuentesProps): JSX.Element {
  // Si se proporciona i18n, podemos usarlo directamente para obtener los textos
  const tituloFinal =
    i18n?.FAQ?.TITLE?.split("<br/>")[0] || titulo || "Preguntas Frecuentes";
  const subtituloFinal =
    i18n?.FAQ?.DESCRIPTION?.replace(/<\/?b>/g, "") ||
    subtitulo ||
    "Información importante";

  /**
   * Obtiene las preguntas frecuentes del archivo de internacionalización
   * @returns {PreguntaFrecuente[]} Array con las preguntas frecuentes formateadas
   */
  const obtenerPreguntasDesdeI18n = (): PreguntaFrecuente[] => {
    if (!i18n?.FAQ?.PREGUNTAS) {
      return [];
    }

    // Mapear las preguntas del archivo de internacionalización al formato esperado
    return i18n.FAQ.PREGUNTAS.map((pregunta) => ({
      pregunta: pregunta.PREGUNTA,
      respuesta: {
        title: pregunta.RESPUESTA.TITLE,
        list1: pregunta.RESPUESTA.LIST1,
        list2: pregunta.RESPUESTA.LIST2,
        list3: pregunta.RESPUESTA.LIST3,
        list4: pregunta.RESPUESTA.LIST4 || "",
      },
      extraItem: {
        title: pregunta.EXTRA_ITEM.TITLE || "",
        list1: pregunta.EXTRA_ITEM.LIST1 || "",
        list2: pregunta.EXTRA_ITEM.LIST2 || "",
      },
    }));
  };

  // Usar las preguntas proporcionadas o generarlas desde i18n
  const preguntasFinal = preguntas || obtenerPreguntasDesdeI18n();

  return (
    <section className="md:py-fl-3xl lg:py-fl-4xl max-w-[var(--grid-max-width)] mx-auto px-4 mb-5">
      <div className="text-center mb-fl-xl">
        <h2 className="text-fl-2xl md:text-fl-3xl font-bold mb-xs">
          {tituloFinal}
        </h2>
        <p className="text-fl-lg md:text-fl-xl text-muted-foreground max-w-[60ch] mx-auto">
          {subtituloFinal}
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {preguntasFinal?.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-fl-lg font-semibold">
              {item.pregunta}
            </AccordionTrigger>
            <AccordionContent className="text-fl-base text-muted-foreground">
              {esContenidoRespuesta(item.respuesta) ? (
                <div className="space-y-4">
                  {item.respuesta.title && (
                    <p
                      className="font-medium"
                      dangerouslySetInnerHTML={{
                        __html: item.respuesta.title,
                      }}
                    />
                  )}
                  <ul className="list-disc pl-5 space-y-2">
                    {item.respuesta.list1 && (
                      <li
                        dangerouslySetInnerHTML={{
                          __html: item.respuesta.list1,
                        }}
                      />
                    )}
                    {item.respuesta.list2 && (
                      <li
                        dangerouslySetInnerHTML={{
                          __html: item.respuesta.list2,
                        }}
                      />
                    )}
                    {item.respuesta.list3 && (
                      <li
                        dangerouslySetInnerHTML={{
                          __html: item.respuesta.list3,
                        }}
                      />
                    )}
                    {item.respuesta.list4 && (
                      <li
                        dangerouslySetInnerHTML={{
                          __html: item.respuesta.list4,
                        }}
                      />
                    )}
                  </ul>

                  {item.extraItem && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      {item.extraItem.title && (
                        <p
                          className="font-medium"
                          dangerouslySetInnerHTML={{
                            __html: item.extraItem.title,
                          }}
                        />
                      )}
                      <ul className="list-disc pl-5 space-y-2">
                        {item.extraItem.list1 && (
                          <li>{item.extraItem.list1}</li>
                        )}
                        {item.extraItem.list2 && (
                          <li>{item.extraItem.list2}</li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <p>{item.respuesta}</p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
