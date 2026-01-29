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
          <a
            className="iconsHeader"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=emanueldecastro60@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="iconsContacts" title="Gmail" />
          </a>
          <a
            className="iconsHeader"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="iconsContacts" title="Instagram" />
          </a>
          <a
            className="iconsHeader"
            href="https://github.com/VDC2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="iconsContacts" title="Github" />
          </a>
          <a
            className="iconsHeader"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="iconsContacts" title="Linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
