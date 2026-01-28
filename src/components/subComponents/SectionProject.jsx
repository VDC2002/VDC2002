import "./styles/ProjectStyle.css";
import Mobile from "../../assets/screenshotMobile.jpg";
import AppWeather from "../../assets/screenshotAppWeather.jpg";
import Snake from "../../assets/screenshotSnake.jpg";
import iconChain from "../../assets/iconChain.svg";
import { FaGithub } from "react-icons/fa";
function SectionProject() {
  return (
    <div className="sectionTwo">
      {/* Project MOBILE PHONE */}
      <div className="containerProject">
        <h2 className="tituleProjects">Project - Mobile Phone</h2>
        <div className="containerScreenshot">
          <img className="imgProject1" src={Mobile} alt="Mobile Phone" />
          <div className="containerLinks">
            <a
              className="links"
              href="https://vdc2002.github.io/CopyPhone/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="iconchain"
                src={iconChain}
                alt="link"
                title="Link"
              />
            </a>
            <a
              className="links"
              href="https://github.com/VDC2002/CopyPhone"
              target="_blank"
              rel="noopener noreferrer"
            >
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

      {/* Project App Weather */}
      <div className="containerProject">
        <h2 className="tituleProjects">Project - App Weather</h2>
        <div className="containerScreenshot">
          <img className="imgProject1" src={AppWeather} alt="App Weather" />
          <div className="containerLinks">
            <a className="links" href="#">
              <img
                className="iconchain"
                src={iconChain}
                alt="link"
                title="Link"
              />
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
          <span>#HTML</span>
          <span>#CSS</span>
          <span>#JAVASCRIPT</span>
        </p>
      </div>

      {/* Project Snake */}
      <div className="containerProject">
        <h2 className="tituleProjects">Project - Snake</h2>
        <div className="containerScreenshot">
          <img className="imgProject1" src={Snake} alt="Snake" />
          <div className="containerLinks">
            <a
              className="links"
              href="https://vdc2002.github.io/mi__portafolio/games/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="iconchain"
                src={iconChain}
                alt="link"
                title="Link"
              />
            </a>
            <a
              className="links"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="iconGithub" title="Github" />
            </a>
          </div>
        </div>
        <p className="description">
          Description: Proyecto de copia de un mobile, tiene la calculadora, una
          to do list, un convertidor de moneda y la opcion de settings
        </p>
        <p className="hastag">
          <span>#HTML</span>
          <span>#CSS</span>
          <span>#JAVASCRIPT</span>
        </p>
      </div>
    </div>
  );
}

export default SectionProject;
