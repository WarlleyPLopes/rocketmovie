import { Brand, Container, Profile } from "./styles.js";
import {Input} from '../Input'
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovie</h1>
      </Brand>

      <Input 
        type='text' 
        placeholder='Pesquisar pelo título'
      />

      <Link to='/profile'>
      <Profile>
        <div>
          <strong>Warlley Lopes</strong>
          <Link href="/">sair</Link>
        </div>
        <img src="https://github.com/WarlleyPLopes.png" alt="Foto do usuário" />
      </Profile>
      </Link>
    </Container>
  );
}