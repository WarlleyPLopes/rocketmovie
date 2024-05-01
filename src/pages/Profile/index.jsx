import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Avatar } from "./styles";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }
  
  return (
    <Container>
      <header>
        <div className="container">
          <button type="button" onClick={handleBack}>
            <FiArrowLeft />
            Voltar
          </button>
        </div>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/WarlleyPLopes.png"
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />
        <Button title="salvar" />
      </Form>
    </Container>
  );
}