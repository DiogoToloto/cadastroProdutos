import React from "react";
import "./Colaborador.css";
import { IoMdCloseCircle } from "react-icons/io";

const Colaborador = ({corDeFundo, aoDeletar, nome, cargo, imagem}) => {
    return(
        <div className="colaborador">

            <IoMdCloseCircle 
                size={25} 
                className="deletar" 
                onClick={() => {aoDeletar(Colaborador.id)}}
            />

            <div 
            className="cabecalho" 
            style={{backgroundColor:corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>

            <div className="rodape">
                <h4>
                    {nome}
                </h4>

                <h5>
                    {cargo}
                </h5>
            </div>
        </div>
    )
}

export default Colaborador;