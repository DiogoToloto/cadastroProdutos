import React from 'react';
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import { Formulario } from './componentes/Formulario/Formulario';
import Time from './componentes/Time/Time';
import Footer from './componentes/Footer/Footer';

function App() {

  const [times,setTimes] = useState([
  {
    nome: 'Programação',
    cor: '#D9F7E9'
  },
  {
    nome: 'Front-End',
    cor: '#E8F8FF'
  },
  {
    nome: 'Data Science',
    cor: '#F0F8E2'
  },
  {
    nome: 'Devops',
    cor: '#FDE7E8'
  },
  {
    nome: 'UX e Design',
    cor: '#FAE9F5'
  },
  {
    nome: 'Mobile',
    cor: '#FFF5D9'
  },
  {
    nome: 'Inovação e Gestão',
    cor: '#FFEEDF'
  }
]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {

    console.log(colaboradores)
    setColaboradores([...colaboradores,colaborador]);

  } 

  const deletarColaborador = () => {
    console.log("Deletando colaborador");
  }

  function mudarCorDoTime(cor, nome){
    setTimes(times.map(time => {
       if(time.nome === nome){
      time.cor = cor;
    }
    return time;
  }))
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaboradores => aoNovoColaboradorAdicionado(colaboradores)}/>
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
