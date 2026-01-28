import "./styles/Header.css";
import {
  FaArrowUp,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
function Header() {
  return (
    <div className="containerHeader">
      <nav className="nav">
        <h2 className="tituleNav">VICTOR</h2>
        <ul className="listNav">
          <li>
            <a className="itemsNav" href="#">
              HOME
            </a>
          </li>
          <li>
            <a className="itemsNav" href="#">
              ABOUT
            </a>
          </li>
          <li>
            <a className="itemsNav" href="#">
              PROJECT
            </a>
          </li>
          <li>
            <a className="itemsNav contact" href="#">
              CONTACT <FaArrowUp className="iconArrowUp" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="containerDescription">
        <h1 className="tituleDescription">Hi, I'm a Software Engineer</h1>
        <div className="containerIconsContact">
          <FaEnvelope className="iconsContacts" title="Gmail" />
          <FaInstagram className="iconsContacts" title="Instagram" />
          <FaGithub className="iconsContacts" title="Github" />
          <FaLinkedin className="iconsContacts" title="Linkedin" />
        </div>
      </div>
    </div>
  );
}

export default Header;
