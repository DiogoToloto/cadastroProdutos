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
    nome: 'Ação',
    cor: '#D9F7E9'
  },
  {
    id: uuidv4(),
    nome: 'Suspense',
    cor: '#E8F8FF'
  },
  {
    id: uuidv4(),
    nome: 'Terror',
    cor: '#F0F8E2'
  },
  {
    id: uuidv4(),
    nome: 'Drama',
    cor: '#FDE7E8'
  },
  {
    id: uuidv4(),
    nome: 'Ficção',
    cor: '#FAE9F5'
  },
  {
    id: uuidv4(),
    nome: 'Dráma',
    cor: '#FFF5D9'
  },
  {
    id: uuidv4(),
    nome: 'Romance',
    cor: '#FFEEDF'
  }
]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {

    console.log(colaboradores)
    setColaboradores([...colaboradores,colaborador]);

  } 

  const deletarColaborador = (id) => {
    setColaboradores(colaboradores => colaboradores.filter(colaborador => colaborador.id !== id))
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

  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaboradores => aoNovoColaboradorAdicionado(colaboradores)}
        
      />
        {times.map((time, indice) => 
        <Time
        aoFavoritar={resolverFavorito} 
        mudarCor={mudarCorDoTime}
        key={time.id}
        time={time}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
        />)}
        <Footer/>
    </div>
  );
}

export default App;
