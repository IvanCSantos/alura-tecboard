import "./botao.css";

export function Botao({ children }: { children: React.ReactNode }) {
  return (
    <button className="botao-formulario" type="submit">
      {children}
    </button>
  );
}
