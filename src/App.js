import React from 'react';
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import { Formulario } from './componentes/Formulario/Formulario';
import Time from './componentes/Time/Time';
import Footer from './componentes/Footer/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times,setTimes] = useState([
  {
    id: uuidv4(),
    nome: 'Programação',
    cor: '#D9F7E9'
  },
  {
    id: uuidv4(),
    nome: 'Front-End',
    cor: '#E8F8FF'
  },
  {
    id: uuidv4(),
    nome: 'Data Science',
    cor: '#F0F8E2'
  },
  {
    id: uuidv4(),
    nome: 'Devops',
    cor: '#FDE7E8'
  },
  {
    id: uuidv4(),
    nome: 'UX e Design',
    cor: '#FAE9F5'
  },
  {
    id: uuidv4(),
    nome: 'Mobile',
    cor: '#FFF5D9'
  },
  {
    id: uuidv4(),
    nome: 'Inovação e Gestão',
    cor: '#FFEEDF'
  }
]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {

    console.log(colaboradores)
    setColaboradores([...colaboradores,colaborador]);

  } 

  const deletarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor, id){
    setTimes(times.map(time => {
       if(time.id === id){
      time.cor = cor;
    }
    return time;
  }))
  }

  function cadastrarTime(novoTime){
    setTimes([...times, {...novoTime, id: uuidv4() }])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaboradores => aoNovoColaboradorAdicionado(colaboradores)}
      />
        {times.map(time => <Time 
        mudarCor={mudarCorDoTime}
        key={time.nome} 
        time={time}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
        />)}
        <Footer/>
    </div>
  );
}

export default App;
