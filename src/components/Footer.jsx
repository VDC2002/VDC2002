import "./styles/Footer.css";
import { FaGithub, FaDownload } from "react-icons/fa";
import Photo from "../assets/photoPortfolio.webp";
import Instagram from "../assets/iconInstagram.svg";
import Gmail from "../assets/iconEmail.svg";
import Linkedin from "../assets/iconLinkedin.svg";
function Footer() {
  return (
    <div id="idcontact" className="containerfooter">
      <div className="containerPhoto">
        <img className="photoVictor" src={Photo} alt="Photo Victor" />
        <div className="containerIconsRed">
          <a
            className="linkFooter"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=emanueldecastro60@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="iconsFooter iconGmail"
              src={Gmail}
              alt="Gmail"
              title="Gmail"
            />
            <span>Gmail</span>
          </a>
          <a
            className="linkFooter"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="iconsFooter iconLinkedin"
              src={Linkedin}
              alt="Linkedin"
              title="Linkedin"
            />
            <span>Linkedin</span>
          </a>
          <a
            className="linkFooter"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="iconsFooter iconInstagram"
              src={Instagram}
              alt="Instagram"
              title="Instagram"
            />
            <span>Instagram</span>
          </a>
          <a
            className="linkFooter"
            href="https://github.com/VDC2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="iconsFooterGithub" title="Github" />
            <span>Github</span>
          </a>
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
