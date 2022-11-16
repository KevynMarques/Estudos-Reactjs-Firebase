import React from "react";
import { useState, useContext } from "react";
import { BoxHome } from "../Login/style";
import { authGoogleContext } from "../../services/AuthGoogle";
import {
  InconName,
  TextName, LogOut, ButtonLogOut, Account, SeusApontamentos,
  ContainerInterface, BoxFullName, BoxApontamentos, MesApontamento, TempoApontamento, AddApontamento
} from "./style";
import { renderIntoDocument } from "react-dom/test-utils";


export const UserLogado = () => {
  const { signOut } = useContext(authGoogleContext);
  const Name = sessionStorage.getItem('@AuthFirebase:user')
  const key = JSON.parse(Name);


  function firstLetters(str) {
    const names = str.split(' ')
    let initials = ''

    for (let index = 0; index < names.length; index++) {
      initials += `${names[index][0]}`
    }
    return initials;
  }

  const [nameUser, setNameUser] = useState(firstLetters(key.displayName));
  const [logOut, setLogOut] = useState(null);
  const [fullName, setFullName] = useState(key.displayName);


  function OpenLogOut() {
    if (logOut === null) {
      return (
        <LogOut>
          <Account>
            Account
          </Account>
          <ButtonLogOut onClick={() => { signOut() }}>
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
      <InconName onClick={() => {
        setLogOut(OpenLogOut)
      }}>
        <TextName>
          {nameUser}
        </TextName>
      </InconName>
      {logOut}
      <SeusApontamentos>
        Meus <br /> apontamentos
      </SeusApontamentos>
      <AddApontamento>
        Adicionar Apontamento
      </AddApontamento>
      <ContainerInterface>
        <BoxFullName>
          <p className="FullName">{fullName}</p>
          <p className="Historico">Historico de apontamentos</p>
          <BoxApontamentos>
            <p className="Apontamentos-Tittle">Projetos</p>
            <MesApontamento>
              <p className="Apontamento-Mes">
                Mês
              </p>
            </MesApontamento>
            <TempoApontamento>
              <p className="Apontamento-Tempo">
                Tempo
              </p>
            </TempoApontamento>
          </BoxApontamentos>
        </BoxFullName>
      </ContainerInterface>
    </BoxHome>
  );
}