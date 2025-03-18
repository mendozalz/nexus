import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabsCrecimientoFinanciero";

function HistoriaCrecimientoFinanciero() {
  return (
    <div>
      <div className="max-w-5xl mx-auto text-center mb-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-xs leading-none">
          Historias de Crecimiento Financiero.
        </h2>
      </div>
      <Tabs
        defaultValue="tab-1"
        orientation="vertical"
        className="md:flex w-full gap-2"
      >
        <TabsList className="flex-col gap-1 bg-transparent py-0">
          <TabsTrigger
            value="tab-1"
            className="w-full justify-start data-[state=active]:bg-muted data-[state=active]:shadow-none text-base"
          >
            * Expansión de Patrimonio para un Empresario de Alto Nivel
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="w-full justify-start data-[state=active]:bg-muted data-[state=active]:shadow-none text-base"
          >
            * Profesional que Buscaba Seguridad Financiera
          </TabsTrigger>
          <TabsTrigger
            value="tab-3"
            className="w-full justify-start data-[state=active]:bg-muted data-[state=active]:shadow-none text-base"
          >
            * Pequeño Inversionista Construyendo su Futuro
          </TabsTrigger>
        </TabsList>
        <div className="grow rounded-lg border border-border text-start">
          <TabsContent value="tab-1">
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              <b>- Perfil:</b> Inversionista con alta capacidad de capital,
              empresario del sector tecnológico.
            </p>
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              <b>- Inversión:</b> Capital inicial de <b>$500,000 USD</b> en
              <b> mercados financieros y bienes raíces comerciales.</b>
            </p>
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              <b>- Resultados:</b> En <b>3 años,</b> logró un{" "}
              <b>retorno del 150%,</b> diversificando su portafolio y asegurando
              ingresos pasivos en bienes raíces.
            </p>
            <div className="flex items-end bg-gradient-to-t from-black/70 to-transparent">
              <div className="p-md md:p-lg text-gray-800">
                <span className="badge-outline mb-xs border-white/20 bg-white/10 text-gray-800">
                  <b>- Testimonio:</b>
                </span>
                <p className="text-fl-lg font-medium">
                  "Mi experiencia con Nexus Private Capital ha sido excepcional.
                  Su enfoque estratégico y la transparencia en cada operación me
                  han permitido expandir mi patrimonio sin asumir riesgos
                  innecesarios."
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-2">
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              <b>- Perfil:</b> Médico con interés en inversiones a largo plazo.
            </p>
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              <b>- Inversión: $80,000 USD</b> en{" "}
              <b>bienes raíces y activos de alta capitalización.</b>
            </p>
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              <b>- Resultados: Valorización del 35% en 2 años,</b> con ingresos
              pasivos por alquiler de propiedades adquiridas.
            </p>
            <div className="flex items-end bg-gradient-to-t from-black/70 to-transparent">
              <div className="p-md md:p-lg text-gray-800">
                <span className="badge-outline mb-xs border-white/20 bg-white/10 text-gray-800">
                  <b>- Testimonio:</b>
                </span>
                <p className="text-fl-lg font-medium">
                  "Siempre pensé que las inversiones eran complejas y
                  arriesgadas, pero Nexus me mostró que con una estrategia
                  adecuada, podía generar ingresos adicionales y asegurar mi
                  futuro financiero."
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-3">
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              <b>- Perfil:</b> Empleado con ahorros personales buscando
              crecimiento progresivo.
            </p>
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              <b>- Inversión: $10,000 USD</b> en{" "}
              <b>mercados financieros con estrategia de bajo riesgo.</b>
            </p>
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              <b>- Resultados:</b> Crecimiento del <b>60% en 2 años,</b>{" "}
              permitiéndole reinvertir y escalar su portafolio.
            </p>
            <div className="flex items-end bg-gradient-to-t from-black/70 to-transparent">
              <div className="p-md md:p-lg text-gray-800">
                <span className="badge-outline mb-xs border-white/20 bg-white/10 text-gray-800">
                  <b>- Testimonio:</b>
                </span>
                <p className="text-fl-lg font-medium">
                  "Gracias a Nexus, aprendí que no se necesita ser millonario
                  para invertir. Con una estrategia clara y acompañamiento
                  experto, pude hacer crecer mis ahorros de forma segura."
                </p>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export { HistoriaCrecimientoFinanciero };
