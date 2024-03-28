import { FiArrowLeft } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { NoteItem } from "../../components/NoteItem";
import { Link } from "react-router-dom";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <Link to='/'>
              <FiArrowLeft />
              Voltar
            </Link>
            <h1>Novo filme</h1>
          </header>
          <div className="separete">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <Textarea placeholder="Observações" />
          <Section title="Marcadores">
            <div>
              <NoteItem value="react"/>
              <NoteItem placeholder="Novo marcador" isnew/>
            </div>
          </Section>
          <div className="separete">
            <Button className="black" title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
