import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import React from "react";
import type { HTMLAttributes } from "react";

interface FeatureItem {
  id: number;
  title: string;
  image: string;
  subtitle1: string;
  description1: string;
  subtitle2: string;
  description2: { [key: string]: string };
  subtitle3: string;
  description3: string;
}

interface Props {
  features: FeatureItem[];
}

// Extender HTMLAttributes para incluir 'set:html'
interface CustomHTMLAttributes<T> extends HTMLAttributes<T> {
  "set:html"?: any;
}

const AcodionAgTechComponent: React.FC<
  Props & CustomHTMLAttributes<HTMLParagraphElement>
> = ({
  features,
  ...props
}: Props & CustomHTMLAttributes<HTMLParagraphElement>) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState(features[0].image);

  return (
    <section>
      <div className="container mx-auto">
        <div className="mb-fl-lg flex w-full items-start justify-between gap-fl-lg">
          <div className="w-full md:w-[var(--grid-max-width)]">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {features.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-fl-sm !no-underline transition"
                  >
                    <h2
                      className={`text-fl-lg font-semibold ${tab.id === activeTabId ? "text-black" : "text-muted-black/80"}`}
                    >
                      {tab.title}
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    {/* Imagen del acordion en pantallas pequeñas */}
                    <div className="mt-fl-sm md:hidden ">
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="h-full max-h-fl-3xl w-full rounded-[var(--radio-md)] object-cover"
                      />
                    </div>
                    {/*  */}
                    <div className="conten1">
                      <h2
                        className={`text-fl-base font-semibold ${tab.id === activeTabId ? "text-black" : "text-black/80"}`}
                      >
                        {tab.subtitle1}
                      </h2>
                      <p
                        dangerouslySetInnerHTML={{ __html: tab.description1 }}
                        className="mb-fl-xs text-black/80"
                      />
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="conten2">
                      <h2
                        className={`text-fl-base font-semibold ${tab.id === activeTabId ? "text-black" : "text-black/80"}`}
                      >
                        {tab.subtitle2}
                      </h2>
                      <ul className="mb-fl-xs text-black/80">
                        {Object.entries(tab.description2).map(
                          ([key, value]) => (
                            <li key={key}> * {value}</li>
                          ),
                        )}
                      </ul>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="conten3">
                      <h2
                        className={`text-fl-base font-semibold ${tab.id === activeTabId ? "text-black" : "text-black/80"}`}
                      >
                        {tab.subtitle3}
                      </h2>
                      <p className="mb-fl-xs text-black/80">
                        {tab.description3}
                      </p>
                    </div>
                    {/*  */}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative m-auto hidden md:w-1/2 overflow-hidden rounded-[var(--radio-lg)] bg-muted lg:block">
            <img
              src={activeImage}
              alt="Feature preview"
              className="aspect-[4/3] rounded-[var(--radio-md)] object-cover pl-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { AcodionAgTechComponent };
