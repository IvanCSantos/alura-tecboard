import "./lista-suspensa.css";

export function ListaSuspensa({
  itens,
  ...props
}: { itens: any[] } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className="lista-suspensa" defaultValue="" {...props}>
      <option value="" disabled>
        Selecione uma opção
      </option>
      {itens.map((item) => (
        <option key={item.id} value={item.id}>
          {item.nome}
        </option>
      ))}
    </select>
  );
}
