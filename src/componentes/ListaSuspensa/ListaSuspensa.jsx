import React from "react";
import "./ListaSuspensa.css";

 const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select value={props.valor} onChange={ event => props.aoAlterado(event.target.value)} required={props.obrigatorio}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;