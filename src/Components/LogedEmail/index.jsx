import React from 'react'
import { useContext } from 'react';
import { CustomContext } from '../../services/CustomContext';
import { useState } from 'react';
import { BoxHome } from '../Login/style';
import {IconName, TextName, SeusApontamentos, AddApontamento,
        ContainerInterface, BoxFullName,  MesApontamento, 
        TempoApontamento, BoxApontamentos} from "../LogedGoogle/style"


export default function LogedEmail() {  


  return ( 
    <BoxHome>
    <IconName>
      <TextName>
      </TextName>
    </IconName>
    <SeusApontamentos>
      Meus <br /> apontamentos
    </SeusApontamentos>
    <AddApontamento>
      Adicionar Apontamento
    </AddApontamento>
    <ContainerInterface>
      <BoxFullName>
        <p className="FullName"></p>
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
