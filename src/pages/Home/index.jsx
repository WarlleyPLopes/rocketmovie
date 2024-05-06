import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";

import { api } from "../../services/api";

import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Header } from "../../components/Header";
import { Container, Content, Line } from "./styles";

export function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }
    fetchMovies();
  }, [search]);
  return (
    <Container>
      <Header />
      <Line />
      <section>
        <Input
          placeholder="Pesquise pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
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
          {notes.map((note) => (
            <Note key={String(note.id)} data={note} />
          ))}
        </Content>
      </section>
    </Container>
  );
}