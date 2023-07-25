import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import H1 from "../../components/title"
import ContainerItens from "../../components/containerItens";
import Button from "../../components/button"
import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./style";
import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";


const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();

  const addNewUser = async () => {
     const { data: newUser } = await axios.post("http://localhost:3001/users", {
     name: inputName.current.value,
     order: inputAge.current.value,
     });

    setUsers([...users, newUser]);

    navigate("/usuarios")

  };


  return (
    <Container>
      <Image alt="logo-image" src={People} />

      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="arrow-image" src={Arrow} />
        </Button>
       
      </ContainerItens>
    </Container>
  );
};

export default App;
