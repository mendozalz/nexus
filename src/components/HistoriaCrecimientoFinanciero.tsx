import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabsCrecimientoFinanciero";

/**
 * Interfaz para las propiedades del componente HistoriaCrecimientoFinanciero
 * @interface Props
 * @property {Object} i18n - Objeto con las traducciones
 */
interface Props {
  i18n: {
    SUCCESS_STORIES: {
      TITLE: string;
      DESCRIPTION: string;
      LIST: {
        TITLE1: string;
        TITLE2: string;
        TITLE3: string;
      };
      TESTIMONIAL: {
        TITLE: string;
      };
      CASES: {
        CASE1: {
          TITLE: string;
          LIST1: {
            TITLE: string;
            DESCRIPTION: string;
          };
          LIST2: {
            TITLE: string;
            DESCRIPTION: string;
          };
          LIST3: {
            TITLE: string;
            DESCRIPTION: string;
          };
          TESTIMONIAL: {
            QUOTE: string;
          };
        };
        CASE2: {
          TITLE: string;
          LIST1: {
            TITLE: string;
            DESCRIPTION: string;
          };
          LIST2: {
            TITLE: string;
            DESCRIPTION: string;
          };
          LIST3: {
            TITLE: string;
            DESCRIPTION: string;
          };
          TESTIMONIAL: {
            QUOTE: string;
          };
        };
        CASE3: {
          TITLE: string;
          LIST1: {
            TITLE: string;
            DESCRIPTION: string;
          };
          LIST2: {
            TITLE: string;
            DESCRIPTION: string;
          };
          LIST3: {
            TITLE: string;
            DESCRIPTION: string;
          };
          TESTIMONIAL: {
            QUOTE: string;
          };
        };
      };
    };
  };
}

/**
 * Componente que muestra historias de crecimiento financiero en un formato de pestañas
 * @param {Props} props - Propiedades del componente
 * @returns {JSX.Element} Componente de historias de crecimiento financiero
 */
function HistoriaCrecimientoFinanciero({ i18n }: Props) {
  return (
    <div>
      <div className="max-w-5xl mx-auto text-center mb-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-xs leading-none">
          {i18n.SUCCESS_STORIES.TITLE}
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
            * {i18n.SUCCESS_STORIES.CASES.CASE1.TITLE}
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="w-full justify-start data-[state=active]:bg-muted data-[state=active]:shadow-none text-base"
          >
            * {i18n.SUCCESS_STORIES.CASES.CASE2.TITLE}
          </TabsTrigger>
          <TabsTrigger
            value="tab-3"
            className="w-full justify-start data-[state=active]:bg-muted data-[state=active]:shadow-none text-base"
          >
            * {i18n.SUCCESS_STORIES.CASES.CASE3.TITLE}
          </TabsTrigger>
        </TabsList>
        <div className="grow rounded-lg border border-border text-start">
          <TabsContent value="tab-1">
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              <b>- {i18n.SUCCESS_STORIES.CASES.CASE1.LIST1.TITLE}</b>{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: i18n.SUCCESS_STORIES.CASES.CASE1.LIST1.DESCRIPTION,
                }}
              />
            </p>
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              <b>- {i18n.SUCCESS_STORIES.CASES.CASE1.LIST2.TITLE}</b>{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: i18n.SUCCESS_STORIES.CASES.CASE1.LIST2.DESCRIPTION,
                }}
              />
            </p>
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              <b>- {i18n.SUCCESS_STORIES.CASES.CASE1.LIST3.TITLE}</b>{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: i18n.SUCCESS_STORIES.CASES.CASE1.LIST3.DESCRIPTION,
                }}
              />
            </p>
            <div className="flex items-end bg-gradient-to-t from-black/70 to-transparent">
              <div className="p-md md:p-lg text-gray-800">
                <span className="badge-outline mb-xs border-white/20 bg-white/10 text-gray-800">
                  <b>- {i18n.SUCCESS_STORIES.TESTIMONIAL.TITLE}</b>
                </span>
                <p className="text-fl-lg font-medium">
                  {i18n.SUCCESS_STORIES.CASES.CASE1.TESTIMONIAL.QUOTE}
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-2">
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              <b>- {i18n.SUCCESS_STORIES.CASES.CASE2.LIST1.TITLE}</b>{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: i18n.SUCCESS_STORIES.CASES.CASE2.LIST1.DESCRIPTION,
                }}
              />
            </p>
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              <b>- {i18n.SUCCESS_STORIES.CASES.CASE2.LIST2.TITLE}</b>{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: i18n.SUCCESS_STORIES.CASES.CASE2.LIST2.DESCRIPTION,
                }}
              />
            </p>
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              <b>- {i18n.SUCCESS_STORIES.CASES.CASE2.LIST3.TITLE}</b>{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: i18n.SUCCESS_STORIES.CASES.CASE2.LIST3.DESCRIPTION,
                }}
              />
            </p>
            <div className="flex items-end bg-gradient-to-t from-black/70 to-transparent">
              <div className="p-md md:p-lg text-gray-800">
                <span className="badge-outline mb-xs border-white/20 bg-white/10 text-gray-800">
                  <b>- {i18n.SUCCESS_STORIES.TESTIMONIAL.TITLE}</b>
                </span>
                <p className="text-fl-lg font-medium">
                  {i18n.SUCCESS_STORIES.CASES.CASE2.TESTIMONIAL.QUOTE}
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-3">
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              <b>- {i18n.SUCCESS_STORIES.CASES.CASE3.LIST1.TITLE}</b>{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: i18n.SUCCESS_STORIES.CASES.CASE3.LIST1.DESCRIPTION,
                }}
              />
            </p>
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              <b>- {i18n.SUCCESS_STORIES.CASES.CASE3.LIST2.TITLE}</b>{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: i18n.SUCCESS_STORIES.CASES.CASE3.LIST2.DESCRIPTION,
                }}
              />
            </p>
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              <b>- {i18n.SUCCESS_STORIES.CASES.CASE3.LIST3.TITLE}</b>{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: i18n.SUCCESS_STORIES.CASES.CASE3.LIST3.DESCRIPTION,
                }}
              />
            </p>
            <div className="flex items-end bg-gradient-to-t from-black/70 to-transparent">
              <div className="p-md md:p-lg text-gray-800">
                <span className="badge-outline mb-xs border-white/20 bg-white/10 text-gray-800">
                  <b>- {i18n.SUCCESS_STORIES.TESTIMONIAL.TITLE}</b>
                </span>
                <p className="text-fl-lg font-medium">
                  {i18n.SUCCESS_STORIES.CASES.CASE3.TESTIMONIAL.QUOTE}
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
