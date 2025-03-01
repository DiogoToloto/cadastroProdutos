import React from "react";
import "./Footer.css";
import logoFace from "../../assets/fb.png";
import logoTwi from "../../assets/tw.png";
import logoInst from "../../assets/ig.png";
import logoOrgano from "../../assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="redesSocias">
                <a href="https://www.facebook.com/profile.php?id=61562221756859" target="blank"><img src={logoFace} alt="Facebook" /></a>
                <a href="/" target="blank"><img src={logoTwi} alt="Twitter" /></a>
                <a href="https://www.instagram.com/diogo_silvss/" target="blank"><img src={logoInst} alt="Instagram" /></a>
            </div>
            <div className="logoPrincipal">
                <h1>My Movie Galerry</h1>
            </div>
            <div className="desenvolvedor">
                <p>Desenvolvido por DiogoToloto</p>
            </div>
        </footer>
    )
}

export default Footer;