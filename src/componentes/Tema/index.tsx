import "./tema.css";

export function Tema({
  tema,
}: {
  tema: { id: number | string; nome: string };
}) {
  return <h3 className="titulo-tema">{tema.nome}</h3>;
}
