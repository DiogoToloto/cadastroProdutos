import React from "react";
import "./Campo.css"

export const Campo = ({obrigatorio = false, aoAlterado, label, valor, placeholder, type = 'text', maxCaracter }) => {

    const aoDigitar = (event) => {
        aoAlterado(event.target.value);// Função que captura o que está sendo digitado no input
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
                maxLength={maxCaracter}
            />
        </div>
    )
}