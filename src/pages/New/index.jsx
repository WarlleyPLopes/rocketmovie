import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";

import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Line } from "../Home/styles";

import { api } from "../../services/api";

import { Container, Form } from "./styles";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stars, setStars] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function HandleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if(!title){
      return alert("Digite o título do filme")
    }

    if(newTag){
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar.")
    }


    await api.post("/notes", {
      title,
      stars,
      description,
      tags,
    });
    alert("Nota criada com sucesso");
    navigate("/");
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <Line />

      <main>
        <Form>
          
          <header>
            <button type="button" onClick={handleBack}>
              <FiArrowLeft />
              Voltar
            </button>
            <h1>Novo filme</h1>
          </header>

          <div className="grid-input">
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />

            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={(e) => setStars(e.target.value)}
            />

            <Textarea
              className="full-width"
              placeholder="Observações"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Section title="Marcadores">
            <div className="container-note">
              {tags.map((tag, i) => (
                <NoteItem
                  key={i}
                  value={tag}
                  onClick={() => HandleRemoveTag(tag)}
                />
              ))}
              <NoteItem
                isNew
                placeholder="Novo marcador"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <div className="grid-buttons">
            <Button className="black" title="Excluir filme" />
            <Button title="Salvar alterações" onClick={handleNewNote} />
          </div>
        </Form>
      </main>
    </Container>
  );
}