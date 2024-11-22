import React from "react";
import "./Campo.css"

export const Campo = ({obrigatorio = false, aoAlterado, label, valor, placeholder, type = 'text' }) => {

    

    //let valor = "Diogo";

    const aoDigitar = (event) => {
        aoAlterado(event.target.value);
    }

    return (
        <div className={`campo campo-${type}`}>
            <label htmlFor="">{label}</label>
            <input 
                value={valor}  
                onChange={aoDigitar} 
                required={obrigatorio} 
                type={type} 
                placeholder={placeholder}
            />
        </div>
    )
}