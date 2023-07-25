import styled from "styled-components"



export const Button = styled.button`
width: 342px;
height: 74px;
border-radius: 14px;
margin-top: ${props => props.isBack && "130px"};
border: ${props => props.isBack ? "1px solid #ffffff" : "none"} ;
background: ${props => props.isBack ? "transparent" : "#000000CC"};
font-size: 17px;
font-weight: 700;
line-height: 28px;
color:#FFFFFF;
cursor: pointer;
display:flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover{
  opacity: 0.8;
}

&:active{
  opacity: 0.6;
}

img{
  transform:${props => props.isBack &&  "rotateY(180deg)"}
}
`;

