import React from "react";
import banner from "../../assets/My Movie Galerry.png"// import da imagem do banner
import "./Banner.css"

 const Banner = () => {
    return (
        <header className="banner">
            <img src={banner} alt="O banner principal da página do organo"/>
        </header>
        
    );
}

export default Banner;