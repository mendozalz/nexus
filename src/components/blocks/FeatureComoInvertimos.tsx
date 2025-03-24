import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer, Zap } from "lucide-react";

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

const FeatureComoInvertimos = ({
  badge = "shadcnblocks.com",
  heading = "CÓMO INVERTIMOS",
  description = "Join us to build flawless web solutions.",
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Nuestro modelo de inversió",
      content: {
        badge: "Nuestro modelo de inversión",
        contexto1: {
          title: "Diversificación Estratégica:",
          description:
            "Invertimos en múltiples sectores para minimizar riesgos y maximizar oportunidades.",
        },
        contexto2: {
          title: "Automatización Inteligente:",
          description:
            "Uso de tecnología avanzada para optimizar el rendimiento de cada inversión.",
        },
        contexto3: {
          title: "Protección del Capital:",
          description:
            "Estrategias de mitigación de riesgos con modelos estructurados.",
        },
        buttonText: "See Plans",
        imageSrc:
          "https://res.cloudinary.com/dvuyt52aq/image/upload/t_1200_1200/v1742842965/Nuestro_modelo_de_inversion_o5plum.jpg",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Proceso de inversión en Nexus Private Capital",
      content: {
        badge: "Proceso de inversión",
        contexto1: {
          title: "Análisis y selección del portafolio:",
          description:
            "Evaluamos las mejores opciones de inversión en función de los objetivos del inversionista.",
        },
        contexto2: {
          title: "Estrategia de crecimiento:",
          description:
            "Diseñamos un plan adaptado a cada perfil de inversionista.",
        },
        contexto3: {
          title: "Optimización de capital:",
          description:
            "Aplicamos herramientas avanzadas de gestión para rentabilizar cada inversión.",
        },
        contexto4: {
          title: "Seguimiento y reportes en tiempo real:",
          description:
            "Brindamos información continua sobre el desempeño de las inversiones.",
        },
        buttonText: "See Tools",
        imageSrc:
          "https://res.cloudinary.com/dvuyt52aq/image/upload/t_1200_1200/v1742842966/Proceso_de_inversion_duc5ym.jpg",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Sectores de inversión",
      content: {
        badge: "Sectores de inversión",
        contexto1: {
          title: "Mercados Financieros:",
          description: "Forex, Commodities, Opciones y Bonos.",
        },
        contexto2: {
          title: "Bienes Raíces:",
          description: "Compra, flipping y rentas cortas.",
        },
        contexto3: {
          title: "Activos de Alta Capitalización:",
          description: "Startups y proyectos estratégicos.",
        },
        buttonText: "See Options",
        imageSrc:
          "https://res.cloudinary.com/dvuyt52aq/image/upload/t_1200_1200/v1742842964/Sectores_de_inversion_y9mfjy.jpg",
        imageAlt: "placeholder",
      },
    },
  ],
}: FeatureComoInvertimosProps) => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* <Badge variant="outline">{badge}</Badge> */}
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            {heading}
          </h1>
          {/*  <p className="text-muted-foreground">{description}</p> */}
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 px-3">
            {tabs.map((tab) => (
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
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
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
                  {tab.content.title && (
                    <div>
                      <h3 className="text-fl-xl font-semibold">
                        {tab.content.title}
                      </h3>
                      <p className="text-fl-base">{tab.content.description}</p>
                    </div>
                  )}
                  {/* <Button className="mt-2.5 w-fit gap-2" size="lg">
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
