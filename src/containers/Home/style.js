import styled from "styled-components";
import Background from "../../assets/background1.svg";


export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  gap: 30px;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const InputLabel = styled.p`
font-size: 18px;
font-weight: bold;
line-height: 22px;
letter-spacing: -0.408px;
font-style: normal;
color: #EEEEEE;
margin-left: 25px; 
`;
export const Input = styled.input`
outline:none;
border: none; 
border-radius: 14px;
box-shadow: 0px 4px 4px 0px #00000040;
background: #FFFFFF40;
width: 342px;
height: 58px;
padding-left: 25px;
margin-bottom: 34px;
font-size: 20px;
font-style: normal;
font-weight: normal;
line-height: 28px;
text-align: left;
color:#FFFFFF;

`;


