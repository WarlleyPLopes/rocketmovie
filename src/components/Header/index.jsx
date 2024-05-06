import { Brand, Container, Profile } from "./styles.js";
import { useAuth } from "../../hooks/auth.jsx";
import { ButtonText } from "../ButtonText";
import { api } from "../../services/api.js";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header() {
  const {singOut, user} = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <Brand>
        <h1>RocketMovie</h1>
      </Brand>

      <Profile>
        <div>
          <strong>{user.name}</strong>
          <ButtonText title={"Sair"} onClick={singOut}/>
        </div>
        <a href="/profile">
          <img
            src={avatarUrl}
            alt={user.name}
          />
        </a>
      </Profile>
    </Container>
  );
}