import React, { useEffect, useRef } from "react";

export const TradingViewWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const widgetContainer = containerRef.current.querySelector(
      ".tradingview-widget-container__widget",
    );
    if (!widgetContainer) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          description: "",
          proName: "TURQUOISE:SHELL",
        },
        {
          description: "",
          proName: "TURQUOISE:BARCL",
        },
        {
          description: "",
          proName: "TURQUOISE:RRL",
        },
        {
          description: "",
          proName: "TURQUOISE:BPL",
        },
        {
          description: "",
          proName: "TURQUOISE:BTL",
        },
        {
          description: "",
          proName: "TURQUOISE:TSCOL",
        },
        {
          description: "",
          proName: "TURQUOISE:BATSL",
        },
        {
          description: "",
          proName: "TURQUOISE:ULVRL",
        },
      ],
      showSymbolLogo: true,
      colorTheme: "light",
      isTransparent: false,
      displayMode: "regular",
      locale: "en",
    });

    widgetContainer.appendChild(script);

    return () => {
      // Solo intentar eliminar el script si aún existe y es hijo del contenedor
      if (script && script.parentNode === widgetContainer) {
        widgetContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="tradingview-widget-container-marquee">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
};

export default TradingViewWidget;
