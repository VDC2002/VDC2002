import "./styles/AboutStyle.css";
import IconReact from "../../assets/iconReact.svg";
import IconJS from "../../assets/iconJS.svg";
import IconHtml from "../../assets/iconHtml.svg";
import IconCss from "../../assets/iconCss.svg";
import IconGit from "../../assets/iconGit.svg";

const colorIconCircle = "#023859";

function SectionAbout() {
  return (
    <div id="idAbout" className="sectionOne">
      {/* <img className="imgAbout" src={Photo} alt="PhotoMine" /> */}
      <div className="containerText">
        <h1 className="tituleAbout">About me</h1>
        <p className="paragraphAbout">
          I work on projects that help me learn and improve my skills, creating
          efficient solutions while enjoying the process of combining
          functionality, design, and creativity.
        </p>
      </div>
      {/* ICONS TO THE CHAIN  */}
      <div className="containerChain">
        <div className="chain">
          <svg
            className="iconCircle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <circle cx="256" cy="256" r="256" fill={colorIconCircle} />
          </svg>
          <svg
            className="iconCircle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <circle cx="256" cy="256" r="256" fill={colorIconCircle} />
          </svg>
          <svg
            className="iconCircle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <circle cx="256" cy="256" r="256" fill={colorIconCircle} />
          </svg>
        </div>
        <div className="chain">
          <svg
            className="iconCircle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <circle cx="256" cy="256" r="256" fill={colorIconCircle} />
          </svg>
          <svg
            className="iconCircle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <circle cx="256" cy="256" r="256" fill={colorIconCircle} />
          </svg>
          <svg
            className="iconCircle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <circle cx="256" cy="256" r="256" fill={colorIconCircle} />
          </svg>
        </div>
      </div>
      <div className="containerSkills">
        <img
          className="iconsSkills"
          src={IconHtml}
          alt="IconHtml"
          title="HTML"
        />
        <img className="iconsSkills" src={IconCss} alt="IconCss" title="CSS" />
        <img
          className="iconsSkills"
          src={IconJS}
          alt="IconJS"
          title="JAVASCRIPT"
        />
        <img
          className="iconsSkills"
          src={IconReact}
          alt="IconReact"
          title="REACT"
        />
        <img className="iconsSkills" src={IconGit} alt="IconGit" title="GIT" />
      </div>
    </div>
  );
}

export default SectionAbout;
