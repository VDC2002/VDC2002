import "./styles/Footer.css";
import { FaGithub, FaDownload } from "react-icons/fa";
import Photo from "../assets/photoPortfolio.webp";
import Instagram from "../assets/iconInstagram.svg";
import Gmail from "../assets/iconEmail.svg";
import Linkedin from "../assets/iconLinkedin.svg";
function Footer() {
  return (
    <div className="containerfooter">
      <div className="containerPhoto">
        <img className="photoVictor" src={Photo} alt="Photo Victor" />
        <div className="containerIconsRed">
          <img
            className="iconsFooter iconGmail"
            src={Gmail}
            alt="Gmail"
            title="Gmail"
          />
          <img
            className="iconsFooter iconLinkedin"
            src={Linkedin}
            alt="Linkedin"
            title="Linkedin"
          />
          <img
            className="iconsFooter iconInstagram"
            src={Instagram}
            alt="Instagram"
            title="Instagram"
          />
          <FaGithub className="iconsFooterGithub" title="Github" />
        </div>
      </div>
      <div className="containerDownload">
        <p className="phrase">Creating clean & functional web experiences</p>
        <button className="buttonDownload" title="Download">
          DOWNLOAD CV
          <FaDownload title="Github" />
        </button>
      </div>
    </div>
  );
}

export default Footer;
