import React from "react";
import banner from "../../assets/banner.png"
import "./Banner.css"

function Banner () {
    return (
        <header className="banner">
            <img src={banner} alt="O banner principal da página do organo"/>
        </header>
        
    );
}

export default Banner;