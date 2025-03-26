import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Badge } from "./badge";

/**
 * Componente Blog que muestra los artículos más recientes
 * @component
 * @returns {React.ReactElement} - Componente de blog con artículos
 */
function Blog(): React.ReactElement {
  return (
    <div className="w-full py-fl-3xl bg-black text-white">
      <div className="container mx-auto max-w-[var(--grid-max-width)] px-[var(--grid-gutter)]">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
          Latest articles
        </h2>

        {/* Artículo principal */}
        <div className="mb-16">
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
                alt="Financial article"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="flex items-center gap-3 mt-4">
              <Badge className="bg-blue-600 hover:bg-blue-700">News</Badge>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">By</span>
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="text-sm">John Doe</span>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mt-2">
              Estrategias de inversión para 2025
            </h3>
            <p className="text-gray-400">
              Administrar un pequeño negocio hoy en día ya es difícil. Evite más
              complicaciones abandonando métodos comerciales obsoletos y
              tediosos. Nuestro objetivo es agilizar el comercio de PYMES,
              haciéndolo más fácil y rápido que nunca.
            </p>
          </div>
        </div>

        {/* Artículos secundarios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Artículo 1 */}
          <div className="rounded-lg overflow-hidden">
            <div className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                alt="Investment article"
                className="w-full h-[250px] object-cover rounded-lg"
              />
            </div>
            <div className="flex items-center gap-3 mt-4">
              <Badge className="bg-green-600 hover:bg-green-700">
                Inversiones
              </Badge>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">By</span>
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <span className="text-sm">María Rodríguez</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mt-2">
              Mercados emergentes: oportunidades y riesgos
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Administrar un pequeño negocio hoy en día ya es difícil. Evite más
              complicaciones abandonando métodos comerciales obsoletos y
              tediosos. Nuestro objetivo es agilizar el comercio de PYMES.
            </p>
          </div>

          {/* Artículo 2 */}
          <div className="rounded-lg overflow-hidden">
            <div className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1974&auto=format&fit=crop"
                alt="Real estate article"
                className="w-full h-[250px] object-cover rounded-lg"
              />
            </div>
            <div className="flex items-center gap-3 mt-4">
              <Badge className="bg-amber-600 hover:bg-amber-700">
                Bienes Raíces
              </Badge>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">By</span>
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" />
                  <AvatarFallback>CG</AvatarFallback>
                </Avatar>
                <span className="text-sm">Carlos González</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mt-2">
              El futuro de la inversión inmobiliaria
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Administrar un pequeño negocio hoy en día ya es difícil. Evite más
              complicaciones abandonando métodos comerciales obsoletos y
              tediosos. Nuestro objetivo es agilizar el comercio de PYMES.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Blog };
