import styled from "styled-components";


export const IconName = styled.div`
background-color:  white;
width: 65px;
height: 65px;
border-radius: 50px;
position: fixed;
margin-top: -540px;
margin-right: -1200px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
&:hover {
    background-color: #5f5f5f;
}
`;

export const TextName = styled.p`
 font-family: Arial, Helvetica, sans-serif;
 font-weight: bold;
 font-size: 30px;
 
`; 

export const LogOut = styled.div`
width: 6vw;
height: 16vh;
background-color: #5f5f5f;
margin-top:-350px;
margin-right: -1200px;
border-radius: 20px;
opacity: 0.9;
z-index: 1;
padding-top: 25px;
position: absolute;
`; 


export const ButtonLogOut = styled.button`
cursor: pointer;
background-color: transparent;
border: none;
color: white;
font-family: Arial, Helvetica, sans-serif;
font-size: 16px;
margin-top: 10px;
margin-left: 13px;
&:hover {
    color:#000000;
}
` 
export const Account = styled.p`
font-family: Arial, Helvetica, sans-serif;
color: #979797;
font-size: 12px;
margin-top: 05px;
margin-left: 18px;
`;

export const SeusApontamentos = styled.h1 `
font-family: Arial, Helvetica, sans-serif;
position: fixed;
margin-right: 600px;
color: white;
font-size: 50px;
margin-top: -80px;
`; 

export const AddApontamento = styled.button `
font-family: Arial, Helvetica, sans-serif;
font-size: 16px;
width: 200px;
height: 50px;
cursor: pointer;
background-color: transparent;
border: solid 1px white;
border-radius: 50px;
color: #ffffff;
position: absolute;
margin-right: 730px;
margin-top: 250px;

&:Hover {
  background-color: #7d2fe2;
}

`;

export const ContainerInterface  = styled.div`
width: 70vw;
height: 70vh;
margin-top: -80px;
display: flex;
justify-content: flex-end;
margin-left: 70px;
`

export const BoxFullName = styled.div`
  width: 50%;
  color: white;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  
 .FullName {
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
    font-family: 'Dancing Script', cursive;
    font-size: 40px;

  }
 .Historico {
    font-size: 16px;
    color: #474747;
    margin-right: 30px;
    margin-top: 20px;
 }
`


export const BoxApontamentos = styled.div`
  width: 100%;
  height: 90%;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  margin-top: 15px;
  display: flex;



  .Apontamentos-Tittle{
    color: #ffffff; 
    text-align:center; 
    font-size: 20px;
    margin-top: 10px;
    position: fixed;
    margin-left: 200px;
  
  }

`

export const MesApontamento = styled.div`
  height: 50px;
  width: 50%;
  margin-top: 50px;

  .Apontamento-Mes { 
    font-size: 16px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
  }

`; 

export const TempoApontamento = styled.div`
  height: 50px;
  width: 50%;
  margin-top: 50px;


  .Apontamento-Tempo {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  text-align: center;
}
`; 



