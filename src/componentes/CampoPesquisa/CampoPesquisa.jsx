import React from "react";
import "./CampoPesquisa.css"

const CampoPesquisa = ({label, placeholder}) => {
    return(
        <div className={`campo`}>
        <label htmlFor="">{label}</label>
            <input 
                placeholder={placeholder}
                onChange={event => (event.target.value)}
            />
        </div>
    )
}

export default CampoPesquisa;