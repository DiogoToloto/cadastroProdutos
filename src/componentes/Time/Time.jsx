import React from "react";
import Colaborador from "../Colaborador/Colaborador";
import "./Time.css";
import hexToRgba from 'hex-to-rgba';

// aqui estou desestruturando o props
const Time = ({time, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {

    return(
        //vendo se o 
        colaboradores.length > 0 && <section 
        className="time" 
        style={{backgroundColor: hexToRgba(time.cor, '0.6')}}>

            <input 
            onChange={event => mudarCor(event.target.value, time.id)} 
            value={time.cor} 
            type="color" 
            className="input-cor"/>

            <h3 style={{borderBottomColor: time.cor}}>
                {time.nome}
            </h3>

            <div className="colaboradores">
                {colaboradores.map((colaborador, indice) => { 
                    return (
                    <Colaborador 
                        corDeFundo={time.cor} 
                        key={indice}
                        colaborador={colaborador}
                        aoDeletar={aoDeletar}
                        aoFavoritar={aoFavoritar}
                    />
                            )
                        }
                    )
                }
            </div>

        </section>
    )
}

export default Time;