import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import H1 from "../../components/title"
import ContainerItens from "../../components/containerItens"
import Button from "../../components/button"
import {
  Container,
  Image,
  User,
} from "./style";
import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  
  useEffect(()=>{
    const fetchUsers = async ()=>{
      const {data: newUsers} = await axios.get("http://localhost:3001/users")
  
      setUsers(newUsers)

    }

    fetchUsers()

  },[])

  const deleteUser = async (userId) => {

    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  };

  const goBackPage = () =>{
   navigate("/")
  }

  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />

      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="trashImage" />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack onClick={goBackPage}> 
        <img alt="arrow-image" src={Arrow} /> Voltar
        </Button>

      </ContainerItens>
    </Container>
  );
};

export default Users;
