import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* Formulario */

interface EnviarFormularioProps {
  setBtnEnviar: React.Dispatch<React.SetStateAction<string>>;
  formRef: React.RefObject<HTMLFormElement | null>;
  reset: () => void;
}

export const enviarFormulario = async ({
  setBtnEnviar,
  formRef,
  reset,
}: EnviarFormularioProps) => {
  setBtnEnviar("Ingresando...");
  if (!formRef.current) {
    throw new Error("El formulario no está disponible.");
  }
  const formData = new FormData(formRef.current);

  fetch(
    "https://script.google.com/macros/s/AKfycbzGkTvB_I75QVKxf6mvrBDy3Sa-j-zDxAKD2V1P1Hp_q2ZDZRjgw_01TaK4evVcNG3dNw/exec",
    { method: "POST", body: formData },
  )
    .then((res) => {
      const contentType = res.headers.get("Content-Type");
      if (contentType && contentType.includes("application/json")) {
        return res.json();
      } else {
        return res.text();
      }
    })
    .then((data) => {
      reset();
      setBtnEnviar("Continuar");
      const formSubmitted = true;
      window.dispatchEvent(
        new CustomEvent("formSubmitted", { detail: formSubmitted }),
      );
    })
    .catch((error) => {
      console.error(
        "Error al enviar formulario:",
        JSON.stringify(error, null, 2),
      );
      setBtnEnviar("Continuar");
    });
};
