import "./styles/ProjectStyle.css";
import Mobile from "../../assets/screenshotMobile.jpg";
import AppWeather from "../../assets/screenshotAppWeather.jpg";
import Snake from "../../assets/screenshotSnake.jpg";
import TicTacToe from "../../assets/screenshotTicTacToe.jpg";
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
          Description: An interactive project that simulates a mobile phone
          interface with multiple apps inside a mobile layout.
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
            <a
              className="links"
              href="https://vdc2002.github.io/APP---WEATHER/"
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
              href="https://github.com/VDC2002/APP---WEATHER"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="iconGithub" title="Github" />
            </a>
          </div>
        </div>
        <p className="description">
          Description: A simple weather application with multiple cities.
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
              href="https://vdc2002.github.io/SnakeGame/"
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
              href="https://github.com/VDC2002/SnakeGame"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="iconGithub" title="Github" />
            </a>
          </div>
        </div>
        <p className="description">
          Description: A Snake game project that simulates a Nintendo console.
        </p>
        <p className="hastag">
          <span>#HTML</span>
          <span>#CSS</span>
          <span>#JAVASCRIPT</span>
        </p>
      </div>

      {/* Project TicTacToe */}
      <div className="containerProject">
        <h2 className="tituleProjects">Project - TicTacToe</h2>
        <div className="containerScreenshot">
          <img className="imgProject1" src={TicTacToe} alt="TicTacToe" />
          <div className="containerLinks">
            <a
              className="links"
              href="https://vdc2002.github.io/TicTacToe-Game/"
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
              href="https://github.com/VDC2002/TicTacToe-Game"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="iconGithub" title="Github" />
            </a>
          </div>
        </div>
        <p className="description">
          Description: This project is for fun and playing with someone.
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
