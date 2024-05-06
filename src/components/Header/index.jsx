import { Brand, Container, Profile } from "./styles.js";
import { useAuth } from "../../hooks/auth.jsx";
import { ButtonText } from "../ButtonText";
import { api } from "../../services/api.js";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useNavigate } from "react-router-dom";

export function Header() {
  const {singOut, user} = useAuth()
  const navigation = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleSingOut(){
    navigation("/")
    singOut()
  }
  return (
    <Container>
      <Brand>
        <h1>RocketMovie</h1>
      </Brand>

      <Profile>
        <div>
          <strong>{user.name}</strong>
          <ButtonText title={"Sair"} onClick={handleSingOut}/>
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