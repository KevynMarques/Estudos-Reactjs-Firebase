import React from 'react'
import { useState } from 'react';
import { TextLogin, InputDeLogin, ButtomLogin,
  Forms, BoxHome, BoxLogin, TextTittle
} from '../Login/style';
import { useCreateUserWithEmailAndPassword }
from 'react-firebase-hooks/auth';
import { CustomContext } from "../../services/CustomContext"
import { useContext } from 'react';
import { getAuth } from 'firebase/auth';
import { app } from '../../services/FirebaseConfig';
import { Voltar } from './Style';
import { Login } from '../Login';
import { getFirestore, collection,addDoc, setDoc, doc,
} from "firebase/firestore";


export const Register = () => {

  const auth = getAuth(app);
  const db = getFirestore(app);

  const [id, setId] = useState("");
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const [name, setName] = useState("");
  const { setTelaCadastro } = useContext(CustomContext);

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);



   async function CadastrarUser(e) { 
    e.preventDefault();
    createUserWithEmailAndPassword(email, password)
    .then(data => {
      const uid = data.user.uid;
      setDoc(doc(db, `users`, uid), {
        name,
        email,
      });
    }) 
    return CadastroOK();
  }


  function CadastroOK() {
    if (error) {
      alert(error.message)
    } else {
      setTelaCadastro(<Login />)
      alert('Cadastrado com suceso')
    }
  }

  return (
    <BoxHome>
      <TextTittle>
           Plataforma de Estudos Reactjs
      </TextTittle>
      <BoxLogin>
        <Forms>

          <TextLogin>Nome Completo</TextLogin>
          <InputDeLogin
            type="name"
            id="name" name="name"
            placeholder="Nome Completo"
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <br></br>
          <TextLogin> Novo usuario</TextLogin>
          <InputDeLogin
            type="email"
            id="email" name="email"
            placeholder="Digite Seu Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>

          <TextLogin>Senha</TextLogin>
          <InputDeLogin
            type="password"
            id="password"
            name="password"
            placeholder="Digita sua Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtomLogin onClick={CadastrarUser} >
            Cadastrar
          </ButtomLogin>
        </Forms>
        <Voltar onClick={() => {
          setTelaCadastro(<Login />)
        }}>
          Voltar
        </Voltar>
      </BoxLogin>
    </BoxHome>
    )};


