import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import { Formulario } from './componentes/Formulario/Formulario';
import Time from './componentes/Time/Time';

function App() {

  const times = [
  {
    nome: 'Programação',
    corPrimaria: '#57c278',
    corSeundaria: '#D9F7E9'
  },
  {
    nome: 'Front-End',
    corPrimaria: '#82CFFA',
    corSeundaria: '#E8F8FF'
  },
  {
    nome: 'Data Science',
    corPrimaria: '#A6D157',
    corSeundaria: '#F0F8E2'
  },
  {
    nome: 'Devops',
    corPrimaria: '#E06B69',
    corSeundaria: '#FDE7E8'
  },
  {
    nome: 'UX e Design',
    corPrimaria: '#DB6EBF',
    corSeundaria: '#FAE9F5'
  },
  {
    nome: 'Mobile',
    corPrimaria: 'FFBA05',
    corSeundaria: 'FFF5D9'
  },
  {
    nome: 'Inovação e Gestão',
    corPrimaria: 'FF8A29',
    corSeundaria: 'FFEEDF'
  },
];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {

    console.log(colaboradores)
    setColaboradores([...colaboradores,colaborador]);

  } 

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaboradores => aoNovoColaboradorAdicionado(colaboradores)}/>
        <Time nome="Front-end"/>
    </div>
  );
}

export default App;
