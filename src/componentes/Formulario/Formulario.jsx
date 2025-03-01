import React, { useState } from "react";
import "./Formulario.css"
import { Campo } from "../Campo/Campo";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import CampoPesquisa from "../CampoPesquisa/CampoPesquisa";
import { v4 as uuidv4 } from 'uuid';

export const Formulario = (props) => {

    const aoSalvar = (event) => {
        console.log("Form foi submetido =>", nome, cargo, imagem)
        event.preventDefault();
        props.aoColaboradorCadastrado({
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time
        });

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    const [nome,setNome] = useState('');
    const [cargo,setCargo] = useState('');
    const [imagem,setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState()

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Filme</h2>
                    <Campo
                    obrigatorio={true} 
                    label="Titulo" 
                    placeholder="Digite o titulo do filme"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    maxCaracter={40}
                    />
                    <Campo
                    obrigatorio={true}  
                    label="Descrição" 
                    placeholder="Digite a descrição"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    maxCaracter={60}
                    />
                    <Campo 
                    label="Poster" 
                    placeholder="Url do poster"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    />
                    <ListaSuspensa
                    obrigatorio={true} 
                    label="Categoria"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    />
                    <Botao>
                        Criar card
                    </Botao>
            </form>

            <form onSubmit={(event) => {
                event.preventDefault()
                props.cadastrarTime({nome: nomeTime, cor: corTime})
                setCorTime('');
                setNomeTime('');
                }}>
                    
                <h2>Preencha os dados para criar uma nova categoria</h2>
                    <Campo
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                    />
                    <Campo
                    type="color"
                    obrigatorio
                    label="Cor" 
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                    />
                    <Botao>
                        Criar nova categoria
                    </Botao>
            </form>
            <form onSubmit={(event) => {
                event.preventDefault()
                props.cadastrarTime({nome: nomeTime, cor: corTime})
                setCorTime('');
                setNomeTime('');
                }}>                    
                    <CampoPesquisa
                    label='Pesquisa'
                    placeholder='Pesquise por categoria'
                    
                    />
                    <Botao>
                        Pesquisar
                    </Botao>
            </form>

        </section>
    )
}