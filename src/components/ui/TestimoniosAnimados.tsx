import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

type Testimonial = {
  quote: string;
  perfilList1: string;
  perfilList2: string;
  perfilList3: string;
  name: string;
  designation: string;
  src: string;
};

/**
 * Componente que muestra testimonios animados con cambio automático
 * @param testimonials - Array de testimonios a mostrar
 * @param autoplay - Indica si el carrusel debe cambiar automáticamente (por defecto: true)
 * @param interval - Intervalo de tiempo en milisegundos entre cambios automáticos (por defecto: 500ms)
 * @param className - Clases CSS adicionales
 * @returns Componente React
 */
export const AnimatedTestimonials = ({
  testimonials,
  autoplay,
  interval,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  interval?: number;
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // Estado interno para controlar si el autoplay está activo
  const [isAutoplayActive, setIsAutoplayActive] = useState(autoplay);

  // Sincronizar el estado interno con la prop cuando cambia
  useEffect(() => {
    setIsAutoplayActive(autoplay);
  }, [autoplay]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    // Solo activar el intervalo si isAutoplayActive es true y no está pausado
    if (isAutoplayActive && !isPaused) {
      console.log("Autoplay activo con intervalo:", interval);
      const autoplayInterval = setInterval(handleNext, interval);
      return () => clearInterval(autoplayInterval);
    } else {
      console.log("Autoplay desactivado o pausado");
    }
  }, [isAutoplayActive, interval, isPaused, testimonials.length]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div
      className={cn(
        "max-w-sm md:max-w-[var(--grid-max-width)] mx-auto px-4 md:px-8 lg:px-12 py-20",
        className,
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Testimonios de clientes"
    >
      <div className="relative grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 lg:gap-30">
        <div>
          <div className="relative h-80 lg:h-full w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4 w-full bg-[var(--color-gris)] z-10">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-[var(--color-gris)]">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-[var(--color-gris)] mt-8 text-fl-base">
              <p className="text-fl-base text-muted-foreground my-2 font-bold">
                Perfil Profesional:
              </p>
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            <motion.p className="text-[var(--color-gris)] mt-8 text-fl-base">
              <p className="text-fl-base text-muted-foreground my-2 font-bold">
                Áreas de Especialización:
              </p>
              {testimonials[active].perfilList1
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              <br />
              {testimonials[active].perfilList2
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              <br />
              {testimonials[active].perfilList3
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-8">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
              aria-label="Testimonio anterior"
            >
              <IconArrowLeft className="h-5 w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
              aria-label="Siguiente testimonio"
            >
              <IconArrowRight className="h-5 w-5 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
              isActive(index) ? "bg-foreground w-4" : "bg-muted-foreground"
            }`}
            aria-label={`Ver testimonio ${index + 1}`}
            aria-current={isActive(index) ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
};
