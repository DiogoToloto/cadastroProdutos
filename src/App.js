import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import { Formulario } from './componentes/Formulario/Formulario';
import Time from './componentes/Time/Time';
import Footer from './componentes/Footer/Footer';

function App() {

  const times = [
  {
    nome: 'Programação',
    corPrimaria: '#57c278',
    corSegundaria: '#D9F7E9'
  },
  {
    nome: 'Front-End',
    corPrimaria: '#82CFFA',
    corSegundaria: '#E8F8FF'
  },
  {
    nome: 'Data Science',
    corPrimaria: '#A6D157',
    corSegundaria: '#F0F8E2'
  },
  {
    nome: 'Devops',
    corPrimaria: '#E06B69',
    corSegundaria: '#FDE7E8'
  },
  {
    nome: 'UX e Design',
    corPrimaria: '#DB6EBF',
    corSegundaria: '#FAE9F5'
  },
  {
    nome: 'Mobile',
    corPrimaria: '#FFBA05',
    corSegundaria: '#FFF5D9'
  },
  {
    nome: 'Inovação e Gestão',
    corPrimaria: '#FF8A29',
    corSegundaria: '#FFEEDF'
  }
];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {

    console.log(colaboradores)
    setColaboradores([...colaboradores,colaborador]);

  } 

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaboradores => aoNovoColaboradorAdicionado(colaboradores)}/>
        {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSegundaria={time.corSegundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
        <Footer/>
    </div>
  );
}

export default App;
