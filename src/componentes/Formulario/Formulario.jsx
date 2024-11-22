import React, { useState } from "react";
import "./Formulario.css"
import { CampoTexto } from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";

export const Formulario = (props) => {

    const aoSalvar = (event) => {
        console.log("Form foi submetido =>", nome, cargo, imagem)
        event.preventDefault();
        props.aoColaboradorCadastrado({
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
                <h2>Preencha os dados para criar o card do colaborador</h2>
                    <CampoTexto
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    />
                    <CampoTexto
                    obrigatorio={true}  
                    label="Cargo" 
                    placeholder="Digire seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    />
                    <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    />
                    <ListaSuspensa
                    obrigatorio={true} 
                    label="Times"
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
                <h2>Preencha os dados para criar um novo time</h2>
                    <CampoTexto
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                    />
                    <CampoTexto
                    obrigatorio
                    label="Cor" 
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                    />
                    <Botao>
                        Criar novo time
                    </Botao>
            </form>

        </section>
    )
}