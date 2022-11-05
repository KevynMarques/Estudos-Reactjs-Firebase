import styled from "styled-components";


export const InconName = styled.div`
background-color:  white;
width: 65px;
height: 65px;
border-radius: 50px;
position: absolute;
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
width: 10vw;
height: 20vh;
background-color: #5f5f5f;
margin-top:-300px;
margin-right: -1200px;
border-radius: 20px;
padding: 20px;
opacity: 0.9;
`; 


export const ButtonLogOut = styled.button`
cursor: pointer;
background-color: transparent;
border: none;
color: white;
font-family: Arial, Helvetica, sans-serif;
font-size: 16px;
margin-top: 25px;
margin-left: 20px;
&:hover {
    color:#000000;
}
` 
export const Account = styled.p`
font-family: Arial, Helvetica, sans-serif;
color: #979797;
font-size: 12px;
margin-top: 05px;
margin-left: 25px;
`;