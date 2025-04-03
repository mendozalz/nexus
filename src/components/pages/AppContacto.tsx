import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";
import "../../styles/global.css";

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
 * Interfaz para las propiedades del componente AppContacto
 * @interface AppContactoProps
 */
interface AppContactoProps {
  /** Objeto con las traducciones */
  i18n: {
    CONTACT: {
      TITLE: string;
      DESCRIPTION: string;
      FORM: {
        TITLE: string;
        DESCRIPTION: string;
        FIELDS: {
          NOMBRE: string;
          NOMBRE_PLACEHOLDER: string;
          APELLIDO: string;
          APELLIDO_PLACEHOLDER: string;
          EMAIL: string;
          EMAIL_PLACEHOLDER: string;
          TELEFONO: string;
          TELEFONO_PLACEHOLDER: string;
          ASUNTO: string;
          ASUNTO_PLACEHOLDER: string;
          MENSAJE: string;
          MENSAJE_PLACEHOLDER: string;
          AGENDAR_REUNION: string;
          FECHA_REUNION: string;
          HORA_REUNION: string;
          SUBMIT_BUTTON: string;
          SENDING: string;
        };
        MESSAGES: {
          ERROR: string;
          SUCCESS: string;
        };
      };
      CONTACT_INFO: {
        TITLE: string;
        PHONE: {
          TITLE: string;
          NUMBER: string;
          HOURS: string;
        };
        EMAIL: {
          TITLE: string;
          ADDRESS: string;
          DESCRIPTION: string;
        };
        ADDRESS: {
          TITLE: string;
          LOCATION: string;
          DESCRIPTION: string;
        };
        WHATSAPP: {
          TITLE: string;
          NUMBER: string;
          DESCRIPTION: string;
        };
      };
      SOCIAL_MEDIA: {
        TITLE: string;
        DESCRIPTION: string;
        PLATFORMS: {
          FACEBOOK: string;
          TWITTER: string;
          INSTAGRAM: string;
          LINKEDIN: string;
        };
      };
      MAP: {
        TITLE: string;
        ARIA_LABEL: string;
      };
    };
  };
}

/**
 * Componente que muestra la página de contacto con formulario y mapa
 * @param {AppContactoProps} props - Propiedades del componente
 * @returns {JSX.Element} Componente de página de contacto
 */
const AppContacto = ({ i18n }: AppContactoProps): JSX.Element => {
  // Verificamos que i18n.CONTACT exista para evitar errores
  const contactData = i18n?.CONTACT || {
    TITLE: "Conéctate con nosotros y empieza a invertir hoy",
    DESCRIPTION:
      "Si deseas conocer más sobre <b>cómo podemos ayudarte a maximizar tu capital,</b> contáctanos y un asesor te brindará toda la información que necesitas.",
    FORM: {
      TITLE: "Envíanos un mensaje",
      DESCRIPTION: "Completa el formulario a continuación",
      FIELDS: {
        NOMBRE: "Nombre",
        NOMBRE_PLACEHOLDER: "Ingresa tu nombre",
        APELLIDO: "Apellido",
        APELLIDO_PLACEHOLDER: "Ingresa tu apellido",
        EMAIL: "Correo electrónico",
        EMAIL_PLACEHOLDER: "Ingresa tu correo electrónico",
        TELEFONO: "Teléfono",
        TELEFONO_PLACEHOLDER: "Ingresa tu teléfono",
        ASUNTO: "Asunto",
        ASUNTO_PLACEHOLDER: "Ingresa el asunto",
        MENSAJE: "Mensaje",
        MENSAJE_PLACEHOLDER: "¿En qué podemos ayudarte?",
        AGENDAR_REUNION: "Deseo agendar una reunión con un asesor",
        FECHA_REUNION: "Fecha preferida",
        HORA_REUNION: "Hora preferida",
        SUBMIT_BUTTON: "Enviar Mensaje",
        SENDING: "Enviando...",
      },
      MESSAGES: {
        ERROR: "Error al enviar el formulario. Por favor, inténtalo de nuevo.",
        SUCCESS: "¡Mensaje enviado con éxito! Te contactaremos pronto.",
      },
    },
    CONTACT_INFO: {
      TITLE: "Atención directa y personalizada",
      PHONE: {
        TITLE: "Teléfono",
        NUMBER: "+1 (555) 123-4567",
        HOURS: "Lunes a Viernes: 9:00 AM - 6:00 PM",
      },
      EMAIL: {
        TITLE: "Email",
        ADDRESS: "info@nexusprivatecapital.com",
        DESCRIPTION: "Para consultas detalladas",
      },
      ADDRESS: {
        TITLE: "Dirección corporativa",
        LOCATION: "Le Mont Comercio, Av. Las Palmas #Km 15 990",
        DESCRIPTION: "Oficina 347, Envigado",
      },
      WHATSAPP: {
        TITLE: "WhatsApp",
        NUMBER: "+1 (555) 987-6543",
        DESCRIPTION: "Atención inmediata",
      },
    },
    SOCIAL_MEDIA: {
      TITLE: "Síguenos en redes sociales",
      DESCRIPTION:
        "Mantente actualizado sobre nuestras oportunidades de inversión",
      PLATFORMS: {
        FACEBOOK: "Facebook",
        TWITTER: "Twitter",
        INSTAGRAM: "Instagram",
        LINKEDIN: "LinkedIn",
      },
    },
    MAP: {
      TITLE: "Ubicación de Nexus Private Capital",
      ARIA_LABEL: "Mapa mostrando la ubicación de nuestras oficinas",
    },
  };

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
    <section className="py-12 md:py-24 lg:py-28">
      <div className="w-full mb-2 border border-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.833264887981!2d-75.54123838873683!3d6.153080027329909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e468330132b7c5f%3A0xdabc6280a5f13a40!2sLe%20Mont%20Comercio!5e0!3m2!1ses!2sco!4v1743715061241!5m2!1ses!2sco"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={contactData.MAP.TITLE}
          aria-label={contactData.MAP.ARIA_LABEL}
        ></iframe>
      </div>

      <div
        className="container mx-auto max-w-[--grid-max-width] lg:mt-20"
        style={{
          paddingInline: "var(--grid-gutter)",
          paddingBlock: "var(--espacio-l)",
        }}
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h1 className="text-fl-2xl font-bold tracking-tighter">
                {contactData.TITLE}
              </h1>
              <p
                className="max-w-[600px] text-gray-500 text-fl-base"
                dangerouslySetInnerHTML={{ __html: contactData.DESCRIPTION }}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">
                {contactData.CONTACT_INFO.TITLE}
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
                    <h3 className="font-medium">
                      {contactData.CONTACT_INFO.PHONE.TITLE}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {contactData.CONTACT_INFO.PHONE.NUMBER}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {contactData.CONTACT_INFO.PHONE.HOURS}
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
                    <h3 className="font-medium">
                      {contactData.CONTACT_INFO.EMAIL.TITLE}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {contactData.CONTACT_INFO.EMAIL.ADDRESS}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {contactData.CONTACT_INFO.EMAIL.DESCRIPTION}
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
                    <h3 className="font-medium">
                      {contactData.CONTACT_INFO.ADDRESS.TITLE}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {contactData.CONTACT_INFO.ADDRESS.LOCATION}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {contactData.CONTACT_INFO.ADDRESS.DESCRIPTION}
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
                    <h3 className="font-medium">
                      {contactData.CONTACT_INFO.WHATSAPP.TITLE}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {contactData.CONTACT_INFO.WHATSAPP.NUMBER}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {contactData.CONTACT_INFO.WHATSAPP.DESCRIPTION}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">
                {contactData.SOCIAL_MEDIA.TITLE}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {contactData.SOCIAL_MEDIA.DESCRIPTION}
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={contactData.SOCIAL_MEDIA.PLATFORMS.FACEBOOK}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Facebook className="size-5 text-primary" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={contactData.SOCIAL_MEDIA.PLATFORMS.TWITTER}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Twitter className="size-5 text-primary" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={contactData.SOCIAL_MEDIA.PLATFORMS.INSTAGRAM}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="size-5 text-primary" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={contactData.SOCIAL_MEDIA.PLATFORMS.LINKEDIN}
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
              <h2 className="text-2xl font-bold">{contactData.FORM.TITLE}</h2>
              <p className="text-gray-500 dark:text-gray-400">
                {contactData.FORM.DESCRIPTION}
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="nombre">
                    {contactData.FORM.FIELDS.NOMBRE}
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    placeholder={contactData.FORM.FIELDS.NOMBRE_PLACEHOLDER}
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="apellido">
                    {contactData.FORM.FIELDS.APELLIDO}
                  </Label>
                  <Input
                    id="apellido"
                    name="apellido"
                    placeholder={contactData.FORM.FIELDS.APELLIDO_PLACEHOLDER}
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">{contactData.FORM.FIELDS.EMAIL}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={contactData.FORM.FIELDS.EMAIL_PLACEHOLDER}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="telefono">
                  {contactData.FORM.FIELDS.TELEFONO}
                </Label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder={contactData.FORM.FIELDS.TELEFONO_PLACEHOLDER}
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="asunto">{contactData.FORM.FIELDS.ASUNTO}</Label>
                <Input
                  id="asunto"
                  name="asunto"
                  placeholder={contactData.FORM.FIELDS.ASUNTO_PLACEHOLDER}
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="mensaje">
                  {contactData.FORM.FIELDS.MENSAJE}
                </Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder={contactData.FORM.FIELDS.MENSAJE_PLACEHOLDER}
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
                    {contactData.FORM.FIELDS.AGENDAR_REUNION}
                  </Label>
                </div>
              </div>
              <Button
                className="w-full border-2 border-solid border-[var(--color-negro)] hover:bg-[var(--color-dorado)] hover:text-white transition-all duration-300 hover:border-[var(--color-dorado)]"
                type="submit"
                disabled={enviando}
                aria-label={
                  enviando
                    ? contactData.FORM.FIELDS.SENDING
                    : contactData.FORM.FIELDS.SUBMIT_BUTTON
                }
              >
                {enviando ? (
                  contactData.FORM.FIELDS.SENDING
                ) : (
                  <>
                    {contactData.FORM.FIELDS.SUBMIT_BUTTON}
                    <Send className="ml-2 size-4" />
                  </>
                )}
              </Button>
              {formData.agendarReunion && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="fechaReunion">
                      {contactData.FORM.FIELDS.FECHA_REUNION}
                    </Label>
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
                    <Label htmlFor="horaReunion">
                      {contactData.FORM.FIELDS.HORA_REUNION}
                    </Label>
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
                    <span>{contactData.FORM.MESSAGES.ERROR}</span>
                  </div>
                </div>
              )}
              {estadoEnvio === "exitoso" && (
                <div
                  className="rounded-md bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                  role="alert"
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-green-600 dark:text-green-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{contactData.FORM.MESSAGES.SUCCESS}</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppContacto;
