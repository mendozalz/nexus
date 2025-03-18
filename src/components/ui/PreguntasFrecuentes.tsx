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
 * @property {string} titulo - Título principal del componente
 * @property {string} subtitulo - Subtítulo destacado del componente
 * @property {PreguntaFrecuente[]} preguntas - Array de preguntas y respuestas
 */
interface PreguntasFrecuentesProps {
  titulo: string;
  subtitulo: string;
  preguntas: PreguntaFrecuente[];
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
}: PreguntasFrecuentesProps): JSX.Element {
  return (
    <section className="md:py-fl-3xl lg:py-fl-4xl max-w-[var(--grid-max-width)] mx-auto px-4 mb-5">
      <div className="container mx-auto">
        <div className="mb-fl-xl flex flex-col items-start text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-xs leading-none">
            {titulo}: <span>{subtitulo}</span>
          </h2>
          <p className="text-fl-base">
            Hemos recopilado las preguntas más frecuentes de nuestros
            inversionistas para brindarte toda la información que necesitas
            antes de comenzar a invertir con nosotros.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {preguntas.map((item, index) => (
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
      </div>
    </section>
  );
}
