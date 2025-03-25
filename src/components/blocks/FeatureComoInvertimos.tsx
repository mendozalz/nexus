import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { getLangFromUrl } from "../../i18n/utils";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface TabContent {
  badge: string;
  title?: string;
  description?: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  contexto1?: {
    title: string;
    description: string;
  };
  contexto2?: {
    title: string;
    description: string;
  };
  contexto3?: {
    title: string;
    description: string;
  };
  contexto4?: {
    title: string;
    description: string;
  };
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface FeatureComoInvertimosProps {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

/**
 * Componente que muestra las diferentes opciones de inversión
 * @param props - Propiedades del componente
 * @returns Componente React
 */
const FeatureComoInvertimos = ({
  badge = "shadcnblocks.com",
  heading = "CÓMO INVERTIMOS",
  description = "Join us to build flawless web solutions.",
  tabs,
}: FeatureComoInvertimosProps) => {
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

  // Contenido en español
  const contentES = {
    TITLE: "Cómo invertimos",
    OUR_INVESTMENT: {
      TITLE: "Nuestro modelo de inversión",
      LIST1: {
        TITLE: "Diversificación Estratégica:",
        DESCRIPTION:
          "Invertimos en múltiples sectores para minimizar riesgos y maximizar oportunidades.",
      },
      LIST2: {
        TITLE: "Automatización Inteligente:",
        DESCRIPTION:
          "Uso de tecnología avanzada para optimizar el rendimiento de cada inversión.",
      },
      LIST3: {
        TITLE: "Protección del Capital:",
        DESCRIPTION:
          "Estrategias de mitigación de riesgos con modelos estructurados.",
      },
    },
    NEXUS_PRIVATE_CAPITAL: {
      TITLE: "Proceso de inversión en Nexus Private Capital",
      LIST1: {
        TITLE: "Análisis y selección del portafolio:",
        DESCRIPTION:
          "Evaluamos las mejores opciones de inversión en función de los objetivos del inversionista.",
      },
      LIST2: {
        TITLE: "Estrategia de crecimiento:",
        DESCRIPTION:
          "Diseñamos un plan adaptado a cada perfil de inversionista.",
      },
      LIST3: {
        TITLE: "Optimización de capital:",
        DESCRIPTION:
          "Aplicamos herramientas avanzadas de gestión para rentabilizar cada inversión.",
      },
      LIST4: {
        TITLE: "Seguimiento y reportes en tiempo real:",
        DESCRIPTION:
          "Brindamos información continua sobre el desempeño de las inversiones.",
      },
    },
    INVESTMENT_SECTORS: {
      TITLE: "Sectores de inversión",
      SECTOR1: {
        TITLE: "Mercados Financieros:",
        DESCRIPTION: "Forex, Commodities, Opciones y Bonos.",
      },
      SECTOR2: {
        TITLE: "Bienes Raíces:",
        DESCRIPTION: "Compra, flipping y rentas cortas.",
      },
      SECTOR3: {
        TITLE: "Activos de Alta Capitalización:",
        DESCRIPTION: "Startups y proyectos estratégicos.",
      },
    },
    BUTTONS: {
      VIEW_MORE: "Ver más",
      VIEW_PROCESS: "Ver proceso",
      VIEW_SECTORS: "Ver sectores",
    },
  };

  // Contenido en inglés
  const contentEN = {
    TITLE: "How we invest",
    OUR_INVESTMENT: {
      TITLE: "Our investment model",
      LIST1: {
        TITLE: "Strategic Diversification:",
        DESCRIPTION:
          "We invest across multiple sectors to minimize risks and maximize opportunities.",
      },
      LIST2: {
        TITLE: "Intelligent Automation:",
        DESCRIPTION:
          "Use of advanced technology to optimize the performance of each investment.",
      },
      LIST3: {
        TITLE: "Capital Protection:",
        DESCRIPTION: "Risk mitigation strategies with structured models.",
      },
    },
    NEXUS_PRIVATE_CAPITAL: {
      TITLE: "Investment process at Nexus Private Capital",
      LIST1: {
        TITLE: "Portfolio analysis and selection:",
        DESCRIPTION:
          "We evaluate the best investment options based on the investor's objectives.",
      },
      LIST2: {
        TITLE: "Growth strategy:",
        DESCRIPTION: "We design a plan tailored to each investor profile.",
      },
      LIST3: {
        TITLE: "Capital optimization:",
        DESCRIPTION:
          "We apply advanced management tools to make each investment profitable.",
      },
      LIST4: {
        TITLE: "Real-time monitoring and reporting:",
        DESCRIPTION:
          "We provide continuous information on investment performance.",
      },
    },
    INVESTMENT_SECTORS: {
      TITLE: "Investment sectors",
      SECTOR1: {
        TITLE: "Financial Markets:",
        DESCRIPTION: "Forex, Commodities, Options, and Bonds.",
      },
      SECTOR2: {
        TITLE: "Real Estate:",
        DESCRIPTION: "Buying, flipping, and short-term rentals.",
      },
      SECTOR3: {
        TITLE: "High Capitalization Assets:",
        DESCRIPTION: "Startups and strategic projects.",
      },
    },
    BUTTONS: {
      VIEW_MORE: "View more",
      VIEW_PROCESS: "View process",
      VIEW_SECTORS: "View sectors",
    },
  };

  // Seleccionar el contenido según el idioma
  const content = lang === "en" ? contentEN : contentES;

  const defaultTabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: content.OUR_INVESTMENT.TITLE,
      content: {
        badge: content.OUR_INVESTMENT.TITLE,
        contexto1: {
          title: content.OUR_INVESTMENT.LIST1.TITLE,
          description: content.OUR_INVESTMENT.LIST1.DESCRIPTION,
        },
        contexto2: {
          title: content.OUR_INVESTMENT.LIST2.TITLE,
          description: content.OUR_INVESTMENT.LIST2.DESCRIPTION,
        },
        contexto3: {
          title: content.OUR_INVESTMENT.LIST3.TITLE,
          description: content.OUR_INVESTMENT.LIST3.DESCRIPTION,
        },
        buttonText: content.BUTTONS.VIEW_MORE,
        imageSrc:
          "https://res.cloudinary.com/dvuyt52aq/image/upload/t_1200_1200/v1742842965/Nuestro_modelo_de_inversion_o5plum.jpg",
        imageAlt: lang === "en" ? "Investment model" : "Modelo de inversión",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: content.NEXUS_PRIVATE_CAPITAL.TITLE,
      content: {
        badge: content.NEXUS_PRIVATE_CAPITAL.TITLE,
        contexto1: {
          title: content.NEXUS_PRIVATE_CAPITAL.LIST1.TITLE,
          description: content.NEXUS_PRIVATE_CAPITAL.LIST1.DESCRIPTION,
        },
        contexto2: {
          title: content.NEXUS_PRIVATE_CAPITAL.LIST2.TITLE,
          description: content.NEXUS_PRIVATE_CAPITAL.LIST2.DESCRIPTION,
        },
        contexto3: {
          title: content.NEXUS_PRIVATE_CAPITAL.LIST3.TITLE,
          description: content.NEXUS_PRIVATE_CAPITAL.LIST3.DESCRIPTION,
        },
        contexto4: {
          title: content.NEXUS_PRIVATE_CAPITAL.LIST4.TITLE,
          description: content.NEXUS_PRIVATE_CAPITAL.LIST4.DESCRIPTION,
        },
        buttonText: content.BUTTONS.VIEW_PROCESS,
        imageSrc:
          "https://res.cloudinary.com/dvuyt52aq/image/upload/t_1200_1200/v1742842966/Proceso_de_inversion_duc5ym.jpg",
        imageAlt: lang === "en" ? "Investment process" : "Proceso de inversión",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: content.INVESTMENT_SECTORS.TITLE,
      content: {
        badge: content.INVESTMENT_SECTORS.TITLE,
        contexto1: {
          title: content.INVESTMENT_SECTORS.SECTOR1.TITLE,
          description: content.INVESTMENT_SECTORS.SECTOR1.DESCRIPTION,
        },
        contexto2: {
          title: content.INVESTMENT_SECTORS.SECTOR2.TITLE,
          description: content.INVESTMENT_SECTORS.SECTOR2.DESCRIPTION,
        },
        contexto3: {
          title: content.INVESTMENT_SECTORS.SECTOR3.TITLE,
          description: content.INVESTMENT_SECTORS.SECTOR3.DESCRIPTION,
        },
        buttonText: content.BUTTONS.VIEW_SECTORS,
        imageSrc:
          "https://res.cloudinary.com/dvuyt52aq/image/upload/t_1200_1200/v1742842964/Sectores_de_inversion_y9mfjy.jpg",
        imageAlt:
          lang === "en" ? "Investment sectors" : "Sectores de inversión",
      },
    },
  ];

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            {content.TITLE}
          </h1>
        </div>
        <Tabs
          defaultValue={tabs?.[0]?.value || defaultTabs[0].value}
          className="mt-8"
        >
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 px-3">
            {(tabs || defaultTabs).map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-black data-[state=active]:text-white"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto my-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
            {(tabs || defaultTabs).map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-background">
                    {tab.content.badge}
                  </Badge>
                  <div className="flex flex-col gap-4">
                    {[
                      tab.content.contexto1,
                      tab.content.contexto2,
                      tab.content.contexto3,
                      tab.content.contexto4,
                    ].map((contexto, index) =>
                      contexto ? (
                        <div key={index}>
                          <h3 className="text-fl-xl font-semibold">
                            {contexto.title}
                          </h3>
                          <p className="text-fl-base">{contexto.description}</p>
                        </div>
                      ) : null,
                    )}
                  </div>
                  {/*  <Button className="mt-2.5 w-fit gap-2" size="lg">
                    {tab.content.buttonText}
                  </Button> */}
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { FeatureComoInvertimos };
