import { useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Line } from "../Home/styles";

export function New() {
  const navigate = useNavigate();

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
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          
          <Textarea className="full-width" placeholder="Observações" />
            </div>


          <Section title="Marcadores">
            <div className="container-note">
              <NoteItem value="react"/>
              <NoteItem placeholder="Novo marcador" isNew />
            </div>
          </Section>

        <div className="grid-buttons">
            <Button className="black" title="Excluir filme" />
            <Button title="Salvar alterações" />
        </div>



        </Form>

      </main>
    </Container>
  );
}