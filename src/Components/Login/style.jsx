import styled from "styled-components";

export const BoxHome = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: rgb(159,22,235);
background: linear-gradient(90deg, rgba(159,22,235,1) 6%, rgba(43,185,231,1) 49%, rgba(6,88,226,1) 75%, rgba(0,13,45,1) 100%);
height: 100vh;
`;


export const TextTittle = styled.p`
position: absolute;
margin-left: -25vw;
font-family: Arial, Helvetica, sans-serif;
max-width: 750px;
font-size: 80px;
color: white;
`;

export const BoxLogin = styled.div`
  width: 25vw;
  height: 75vh;
  background-color: #170d43;
  opacity: 0.8;
  border-radius: 10px;
  margin-left: 50vw;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
`;

export const InputDeLogin = styled.input`
width: 80%;
margin-left: 10%;
height: 30px;
text-align: center;
font-size: 15px;

`;

export const TextLogin = styled.label`
 color: white;
 font-family: Arial, Helvetica, sans-serif;
 font-size: 12px;
 margin-left: 10%;
 margin-top: 25px;
`;


export const Remember = styled.button`
 width: 20px;
 height: 20px;
 margin-left: 10%;
 margin-top: 10%;
 cursor: pointer;
`;

export const TextRemember = styled.label`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  margin-left: 25%;
  margin-top: -5%;
`;


export const ButtomLogin = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Macondo&family=Roboto:wght@500&display=swap');
 width: 90px;
 height: 25px;
 border: none;
 border-radius: 10px;
 font-weight: bold;
 font-family: 'Roboto', sans-serif;
 font-size: 15px;
 color:#170d43;
 margin-left: 125px;
 margin-top: 55px;
 cursor: pointer;
`;


export const RememberPassword = styled.a`
cursor: pointer;
color: white;
text-align: center;
margin-top: 15px;
font-family: Arial, Helvetica, sans-serif;
font-size: 14px;
`;


export const Registration = styled.a`
cursor: pointer;
text-align: center;
margin-top: 15px;
font-family: Arial, Helvetica, sans-serif;
font-size: 14px;
color: #7474f3;
`


export const LoginGoogle = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Macondo&family=Roboto:wght@500&display=swap');
 height: 40px;
 border: none;
 border-radius: 10px;
 font-weight: bold;
 font-family: 'Roboto', sans-serif;
 font-size: 20px;
 color:#170d43;
 margin-top: 80px;
 margin-left: 15px;
 margin-right: 15px; 
 cursor: pointer;

 &:hover {
  background-color: #80bfd8;
 }
 
`

