import "./formulario-evento.css";
import { CampoFormulario } from "../CampoFormulario";
import { Input } from "../Input";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from "../Botao";
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioEvento({
  temas,
  onSubmit,
}: {
  temas: any[];
  onSubmit: (data: any) => void;
}) {
  function handleSubmit(formData: any) {
    const { tema, nomeEvento } = Object.fromEntries(formData);
    if (!tema || !nomeEvento) {
      console.warn("Campos obrigatórios não foram preenchidos!");
      return;
    }

    // const data = Object.fromEntries(formData);
    const data = {
      capa: formData.get("capa"),
      tema: temas.find((item) => item.id == formData.get("tema")),
      data: new Date(formData.get("dataEvento")),
      titulo: formData.get("nomeEvento"),
    };

    onSubmit(data);
  }

  return (
    <form className="form-evento" action={handleSubmit}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>

      <div className="campos">
        <CampoFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <Input
            type="text"
            id="nomeEvento"
            name="nomeEvento"
            placeholder="Summer dev hits"
          />
        </CampoFormulario>

        <CampoFormulario>
          <Label htmlFor="capa">Qual o endereço da imagem da capa?</Label>
          <Input type="text" id="capa" name="capa" placeholder="https://..." />
        </CampoFormulario>

        <CampoFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <Input
            type="date"
            id="dataEvento"
            name="dataEvento"
            placeholder="dd/mm/yyyy"
          />
        </CampoFormulario>

        <CampoFormulario>
          <Label htmlFor="tema">Tema do evento</Label>
          <ListaSuspensa itens={temas} id="tema" name="tema" />
        </CampoFormulario>
      </div>

      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  );
}
