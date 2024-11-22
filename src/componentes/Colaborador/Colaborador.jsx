import React from "react";
import "./Colaborador.css";
import { IoMdCloseCircle } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";
import { FiHeart } from "react-icons/fi";

const Colaborador = ({corDeFundo, aoDeletar, colaborador, aoFavoritar}) => {

    function favoritar(){
        aoFavoritar(colaborador.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar,
    }

    return(
        <div className="colaborador">

            <IoMdCloseCircle 
                size={25} 
                className="deletar" 
                onClick={() => {aoDeletar(colaborador.id)}}
            />

            <div 
            className="cabecalho" 
            style={{backgroundColor:corDeFundo}}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>

            <div className="rodape">
                <h4>
                    {colaborador.nome}
                </h4>

                <h5>
                    {colaborador.cargo}
                </h5>
                <div className="favoritar">
                    {colaborador.favorito 
                    ? <GoHeartFill {...propsFavorito} color="#ff0000" />
                    : <FiHeart {...propsFavorito} />}
                </div>
            </div>
        </div>
    )
}

export default Colaborador;