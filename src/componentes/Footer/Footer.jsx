import "./Footer.css";
import logoFace from "../../assets/fb.png";
import logoTwi from "../../assets/tw.png";
import logoInst from "../../assets/ig.png";
import logoOrgano from "../../assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="redesSocias">
                <a href="https://www.facebook.com/profile.php?id=61562221756859"><img src={logoFace} alt="Facebook" /></a>
                <a href="/"><img src={logoTwi} alt="Twitter" /></a>
                <a href="https://www.instagram.com/diogo_silvss/"><img src={logoInst} alt="Instagram" /></a>
            </div>
            <div className="logoPrincipal">
                <img src={logoOrgano} alt="" />
            </div>
            <div className="desenvolvedor">
                <p>Desenvolvido por DiogoToloto</p>
            </div>
        </footer>
    )
}

export default Footer;