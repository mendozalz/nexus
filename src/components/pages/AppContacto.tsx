import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";

/**
 * Interfaz para los datos del formulario de contacto
 * @interface FormularioContacto
 */
interface FormularioContacto {
  /** Nombre del usuario */
  nombre: string;
  /** Apellido del usuario */
  apellido: string;
  /** Correo electrónico del usuario */
  email: string;
  /** Teléfono de contacto del usuario */
  telefono: string;
  /** Asunto del mensaje */
  asunto: string;
  /** Mensaje del usuario */
  mensaje: string;
  /** Indica si el usuario desea agendar una reunión */
  agendarReunion: boolean;
  /** Fecha de la reunión (opcional) */
  fechaReunion?: string;
  /** Hora de la reunión (opcional) */
  horaReunion?: string;
}

/**
 * Componente que muestra la página de contacto con formulario y mapa
 * @returns {JSX.Element} Componente de página de contacto
 */
const AppContacto = (): JSX.Element => {
  const [formData, setFormData] = useState<FormularioContacto>({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
    agendarReunion: false,
  });
  const [enviando, setEnviando] = useState<boolean>(false);
  const [enviado, setEnviado] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [estadoEnvio, setEstadoEnvio] = useState<
    "inactivo" | "exitoso" | "error"
  >("inactivo");

  const [preguntasAbiertas, setPreguntasAbiertas] = useState<{
    [key: string]: boolean;
  }>({
    pregunta1: false,
    pregunta2: false,
    pregunta3: false,
  });

  const [mensajeExito, setMensajeExito] = useState<boolean>(false);
  const [mensajeError, setMensajeError] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";

    setFormData((prev) => ({
      ...prev,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    if (
      !formData.nombre ||
      !formData.apellido ||
      !formData.email ||
      !formData.mensaje
    ) {
      setMensajeError(true);
      setTimeout(() => setMensajeError(false), 5000);
      return;
    }

    try {
      setEnviando(true);
      setEstadoEnvio("inactivo");

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setEstadoEnvio("exitoso");
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
        agendarReunion: false,
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setEstadoEnvio("error");
    } finally {
      setEnviando(false);
    }
  };

  const togglePregunta = (pregunta: string): void => {
    setPreguntasAbiertas((prev) => ({ ...prev, [pregunta]: !prev[pregunta] }));
  };

  return (
    <section className="py-12 md:py-24 lg:py-20">
      <div className="w-full mb-12 border border-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15863.487356421934!2d-75.6091692!3d6.2805746000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1742027705606!5m2!1ses!2sco"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Nexus Private Capital"
          aria-label="Mapa mostrando la ubicación de nuestras oficinas"
        ></iframe>
      </div>

      <div
        className="container mx-auto max-w-[--grid-max-width]"
        style={{
          paddingInline: "var(--grid-gutter)",
          paddingBlock: "var(--espacio-l)",
        }}
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h1 className="text-fl-2xl font-bold tracking-tighter">
                Conéctate con nosotros
              </h1>
              <p className="max-w-[600px] text-gray-500 text-fl-base">
                Si deseas conocer más sobre cómo podemos ayudarte a maximizar tu
                capital, contáctanos y un asesor te brindará toda la información
                que necesitas.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                Atención directa y personalizada
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      Lunes a Viernes: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                    >
                      <path d="M3 7l9 6 9-6"></path>
                      <path d="M21 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7"></path>
                      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      info@nexusprivatecapital.com
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      Para consultas detalladas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Dirección corporativa</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      123 Antioquia, Medellín, Colombia
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      Atención presencial con cita previa
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="grid size-10 place-items-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                    >
                      <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">WhatsApp</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      +1 (555) 987-6543
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      Atención inmediata
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Síguenos en redes sociales</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Mantente actualizado sobre nuestras oportunidades de inversión
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Facebook className="size-5 text-primary" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Twitter className="size-5 text-primary" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="size-5 text-primary" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="size-5 text-primary" />
                </a>
              </div>
            </div>
          </div>

          <div
            id="formulario"
            className="space-y-8 rounded-lg p-6 shadow-xl dark:border-gray-800"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Envíanos un mensaje</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Completa el formulario a continuación y te responderemos lo
                antes posible.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    placeholder="Ingresa tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="apellido">Apellido</Label>
                  <Input
                    id="apellido"
                    name="apellido"
                    placeholder="Ingresa tu apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="Ingresa tu teléfono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="asunto">Asunto</Label>
                <Input
                  id="asunto"
                  name="asunto"
                  placeholder="Ingresa el asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="¿En qué podemos ayudarte?"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="min-h-[120px]"
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="agendarReunion"
                    name="agendarReunion"
                    checked={formData.agendarReunion}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        agendarReunion: e.target.checked,
                      })
                    }
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <Label
                    htmlFor="agendarReunion"
                    className="text-sm font-medium"
                  >
                    Deseo agendar una reunión con un asesor
                  </Label>
                </div>
              </div>
              <Button
                className="w-full"
                type="submit"
                disabled={enviando}
                aria-label={enviando ? "Enviando mensaje..." : "Enviar mensaje"}
              >
                {enviando ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensaje
                    <Send className="ml-2 size-4" />
                  </>
                )}
              </Button>
              {formData.agendarReunion && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="fechaReunion">Fecha preferida</Label>
                    <Input
                      id="fechaReunion"
                      name="fechaReunion"
                      type="date"
                      value={formData.fechaReunion || ""}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="horaReunion">Hora preferida</Label>
                    <Input
                      id="horaReunion"
                      name="horaReunion"
                      type="time"
                      value={formData.horaReunion || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}
              {estadoEnvio === "error" && (
                <div
                  className="rounded-md bg-red-50 p-4 text-red-800 dark:bg-red-900/20 dark:text-red-300"
                  role="alert"
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-red-600 dark:text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Error al enviar el formulario. Por favor, inténtalo de
                      nuevo.
                    </span>
                  </div>
                </div>
              )}
              <button
                type="submit"
                disabled={enviando}
                className="w-full rounded-md bg-primary py-3 font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {enviando ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Habla con un experto
                  </span>
                )}
              </button>
            </form>
            {estadoEnvio === "exitoso" && (
              <p
                className="text-center text-green-600 dark:text-green-400"
                role="alert"
              >
                ¡Mensaje enviado exitosamente!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppContacto;
