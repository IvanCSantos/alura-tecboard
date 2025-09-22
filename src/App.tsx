import "./App.css";
import { useEffect, useState } from "react";
import { Banner } from "./componentes/Banner";
import { CardEvento } from "./componentes/CardEvento";
import { FormularioEvento } from "./componentes/FormularioEvento";
import { Header } from "./componentes/Header";
import { Tema } from "./componentes/Tema";

type Tema = {
  id: number;
  nome: string;
};

type Evento = {
  id: number;
  capa: string;
  tema: Tema;
  data: Date;
  titulo: string;
};

function App() {
  const [temas, setTemas] = useState<Tema[] | []>([]);
  const [eventos, setEventos] = useState<Evento[] | []>([]);

  useEffect(() => {
    (() => {
      const temas = [
        { id: 1, nome: "front-end" },
        { id: 2, nome: "back-end" },
        { id: 3, nome: "devops" },
        { id: 4, nome: "inteligência artificial" },
        { id: 5, nome: "data science" },
        { id: 6, nome: "cloud" },
      ];
      setTemas(temas);
    })();
  }, []);

  useEffect(() => {
    (() => {
      if (temas.length > 0) {
        const tema = temas[0];
        const eventos = [
          {
            id: 1,
            capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
            tema: tema,
            data: new Date(),
            titulo: "Mulheres no Front",
          },
        ];
        setEventos(eventos);
      }
    })();
  }, [temas]);

  function adicionarEvento(evento: any) {
    const lastId =
      Array.isArray(eventos) && eventos.length > 0
        ? Math.max(...eventos.map((evento) => evento.id))
        : 0;

    const novoEvento = { ...evento, id: lastId + 1 } as Evento;
    setEventos((prev) => [...prev, novoEvento]);
  }

  return (
    <>
      <Header />
      <main className="container">
        <Banner />
        <FormularioEvento temas={temas} onSubmit={adicionarEvento} />

        <section className="container">
          {temas &&
            Array.isArray(temas) &&
            temas.map((tema) => {
              if (!eventos.some((evento) => evento.tema.id == tema.id)) {
                return null;
              }

              return (
                <section key={tema.id}>
                  <Tema tema={tema} />

                  <div className="eventos">
                    {eventos &&
                      eventos.length > 0 &&
                      eventos
                        .filter((evento) => evento.tema.id === tema.id)
                        .map((evento) => (
                          <CardEvento evento={evento} key={evento.id} />
                        ))}
                  </div>
                </section>
              );
            })}
        </section>
      </main>
    </>
  );
}

export default App;
