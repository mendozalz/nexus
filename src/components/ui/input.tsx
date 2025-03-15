import * as React from "react";
import { cn } from "../../lib/utils";

/**
 * Interfaz para las propiedades del componente Input
 * @interface InputProps
 * @extends {React.InputHTMLAttributes<HTMLInputElement>}
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Componente Input para formularios
 * @param {InputProps} props - Propiedades del componente
 * @returns {JSX.Element} Componente Input
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-fl-sm ring-offset-background file:border-0 file:bg-transparent file:text-fl-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
