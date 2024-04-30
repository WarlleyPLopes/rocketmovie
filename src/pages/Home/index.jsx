import { Container, Content, Line } from "./styles";
import { FiPlus } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container>
      <Header />
      <Line/>
      <section>
        <div className="title">
          <h1>Meus filmes</h1>
          <Link to="/new">
            <button>
              <FiPlus />
              Adicionar filme
            </button>
          </Link>
        </div>
        <Content>
          <Note
            data={{
              title: "Interestellar",
              content: "fmrwgrenlsnvrejkwfndnwjflwqnfberwlcvernwvwjknflvnwfm",
              tags: [
                { id: "1", name: "Ficção cientifica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Familia" },
              ],
            }}
          />
          <Note
            data={{
              title: "Interestellar",
              content: "fmrwgrenlsnvrejkwfndnwjflwqnfberwlcvernwvwjknflvnwfm",
              tags: [
                { id: "1", name: "Ficção cientifica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Familia" },
              ],
            }}
          />
          <Note
            data={{
              title: "Interestellar",
              content: "fmrwgrenlsnvrejkwfndnwjflwqnfberwlcvernwvwjknflvnwfm",
              tags: [
                { id: "1", name: "Ficção cientifica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Familia" },
              ],
            }}
          />
          <Note
            data={{
              title: "Interestellar",
              content: "fmrwgrenlsnvrejkwfndnwjflwqnfberwlcvernwvwjknflvnwfm",
              tags: [
                { id: "1", name: "Ficção cientifica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Familia" },
              ],
            }}
          />
          <Note
            data={{
              title: "Interestellar",
              content: "fmrwgrenlsnvrejkwfndnwjflwqnfberwlcvernwvwjknflvnwfm",
              tags: [
                { id: "1", name: "Ficção cientifica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Familia" },
              ],
            }}
          />
          <Note
            data={{
              title: "Interestellar",
              content: "fmrwgrenlsnvrejkwfndnwjflwqnfberwlcvernwvwjknflvnwfm",
              tags: [
                { id: "1", name: "Ficção cientifica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Familia" },
              ],
            }}
          />
        </Content>
      </section>
    </Container>
  );
}
