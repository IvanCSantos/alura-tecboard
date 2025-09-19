import "./campo-formulario.css";

export function CampoFormulario({ children }: { children: any }) {
  return <fieldset className="campo-form">{children}</fieldset>;
}
