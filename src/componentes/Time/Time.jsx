import React from "react";
import Colaborador from "../Colaborador/Colaborador";
import "./Time.css";
import hexToRgba from 'hex-to-rgba';

const Time = ({time, colaboradores, aoDeletar, mudarCor}) => {

    return(
        colaboradores.length > 0 && <section 
        className="time" 
        style={{backgroundColor: hexToRgba(time.cor, '0.6')}}>

            <input 
            onChange={event => mudarCor(event.target.value, time.nome)} 
            value={time.cor} 
            type="color" 
            className="input-cor"/>

            <h3 style={{borderBottomColor: time.cor}}>
                {time.nome}
            </h3>

            <div className="colaboradores">
                {colaboradores.map((colaborador, indice) => { return <Colaborador corDeFundo={time.cor} key={indice} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={aoDeletar}/>})}
            </div>

        </section>
    )
}

export default Time;