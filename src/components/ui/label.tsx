"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

/**
 * Interfaz para las propiedades del componente Label
 * @interface LabelProps
 * @extends {React.LabelHTMLAttributes<HTMLLabelElement>}
 */
export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
}

/**
 * Componente Label para formularios
 * @param {LabelProps} props - Propiedades del componente
 * @returns {JSX.Element} Componente Label
 */
const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, htmlFor, ...props }, ref) => (
    <label
      ref={ref}
      htmlFor={htmlFor}
      className={cn(
        "text-fl-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
);
Label.displayName = "Label";

export { Label };
