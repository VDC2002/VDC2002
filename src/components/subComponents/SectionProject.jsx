import "./styles/ProjectStyle.css";
import Mobile from "../../assets/screenshotMobile.jpg";
import iconChain from "../../assets/iconChain.svg";
import { FaGithub } from "react-icons/fa";
function SectionProject() {
  return (
    <div className="sectionTwo">
      <div className="containerProject1">
        <h2 className="tituleProjects">Project - Mobile Phone</h2>
        <div className="containerScreenshot">
          <img className="imgProject1" src={Mobile} alt="Mobile Phone" />
          <div className="containerLinks">
            <a className="links" href="#">
              <img className="iconchain" src={iconChain} alt="link" />
            </a>
            <a className="links" href="#">
              <FaGithub className="iconGithub" title="Github" />
            </a>
          </div>
        </div>
        <p className="description">
          Description: Proyecto de copia de un mobile, tiene la calculadora, una
          to do list, un convertidor de moneda y la opcion de settings
        </p>
        <p className="hastag">
          <span>#REACT</span>
          <span>#JAVASCRIPT</span>
        </p>
      </div>
    </div>
  );
}

export default SectionProject;
