import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { MdStar, MdStarBorder } from "react-icons/md";

import { Container, Info } from "./styles.js";

import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag/index.jsx";
import { Header } from "../../components/Header";
import { useAuth } from "../../hooks/auth.jsx";
import { Line } from "../Home/styles.js";

import { Section } from "./styles.js";
import { api } from "../../services/api.js";

export function Details() {
  const { user } = useAuth();
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover o filme?")

    if(confirm){
      await api.delete(`/notes/${params.id}`)
      navigate("/")
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      <Line />

      {data && (
        <main>
          <button type="button" onClick={handleBack}>
            <FiArrowLeft />
            Voltar
          </button>

          <Section>
            <div>
              <h1>{data.title}</h1>
            </div>

            <Info>
              <img src="https://github.com/WarlleyPLopes.png" alt="" />
              <span>Por {user.name}</span>
              <FiClock />
              <span>23/05/23 às 08:00</span>
            </Info>
            {data.tags.map((tag) => (
              <Tag title={tag.name} key={String(tag.id)} />
            ))}

            <div className="text">
              <p>{data.description}</p>
            </div>
          </Section>
          <div style={{display:"flex",justifyContent:"center",marginTop:"80px",marginBottom:"90px"}}>
          <Button 
            className="black" 
            title={"Excluir filme"} 
            onClick={handleRemove} 
          />

          </div>
        </main>
      )}
    </Container>
  );
}