import { Brand, Container, Profile } from "./styles.js";
import { ButtonText } from "../ButtonText";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovie</h1>
      </Brand>

      <Input type="text" placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <strong>Warlley Lopes</strong>
          <ButtonText title={"Sair"} />
        </div>
        <a href="/profile">
          <img
            src="https://github.com/WarlleyPLopes.png"
            alt="Foto do usuário"
          />
        </a>
      </Profile>
    </Container>
  );
}