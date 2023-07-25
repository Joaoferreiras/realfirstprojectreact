import styled from "styled-components";
import Background from "../../assets/background2.png";


export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  height: 100%;
  min-height: 100vh;

`;

export const Image = styled.img`
  margin-top: 50px;
`;

export const User = styled.li`
outline:none;
border: none; 
border-radius: 14px;
box-shadow: 0px 4px 4px 0px #00000040;
background: #FFFFFF40;
width: 342px;
height: 58px;
display:flex;
justify-content: space-around;
align-items: center;
margin-top: 20px;


p{font-size: 20px;
font-style: normal;
font-weight: normal;
line-height: 28px;
text-align: left;
padding-left: 25px;

color:#FFFFFF;
}
button{
  background:none;
  cursor: pointer;
  border:none;
}


`