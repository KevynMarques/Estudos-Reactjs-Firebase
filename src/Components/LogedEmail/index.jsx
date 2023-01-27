import React from 'react'
import { BoxHome } from '../Login/style';
import {IconName, TextName, SeusApontamentos, AddApontamento,
        ContainerInterface, BoxFullName,  MesApontamento, 
        TempoApontamento, BoxApontamentos,LogOut, LogouCom, 
        Account, ButtonLogOut,  } from "../LogedGoogle/style"; 
import { useState } from 'react';
import { useContext } from 'react';
import { authLoginContext } from '../../services/AuthLogin';

export  function UserLogadoEmail() {  
 
  const { signOutEmail } = useContext(authLoginContext);

  function firstLetters(str) {
    const names = str.split(' ')
    let initials = ''

    for (let index = 0; index < names.length; index++) {
      initials += `${names[index][0]}`
    }
    return initials;
  }

  const Name = sessionStorage.getItem('@AuthEmailPassword:dadosUser')
  const key = JSON.parse(Name);

  const [nameUser, setNameUser] = useState(firstLetters(key.name));
  const [logOut, setLogOut] = useState(null);
  const [fullName, setFullName] = useState(key.name);


  
  function OpenLogOut() {
    if (logOut === null) {
      return (
        <LogOut>
          <Account>
            Account
          </Account>
          <ButtonLogOut onClick={() => { signOutEmail() }}>
            Log Out
          </ButtonLogOut>
        </LogOut>
      )
    } else {
      setLogOut(null)
    }
  }

  return (
    <BoxHome>
      <IconName onClick={() => {
        setLogOut(OpenLogOut)
      }}>
        <TextName>
          {nameUser}
        </TextName>
      </IconName>
      {logOut}
      <SeusApontamentos>
        Meus <br /> Estudo Reactjs
      </SeusApontamentos>
      <ContainerInterface>
        <BoxFullName>
          <p className="FullName"> Bem vindo: <br></br>{fullName}</p>
        </BoxFullName>
        <LogouCom >
          Você logou com Email
        </LogouCom>
      </ContainerInterface>
    </BoxHome>
  );
}
