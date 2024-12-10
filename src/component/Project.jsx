import { useContext } from "react";
import ThemeContext from "../Context/themeContext";
import HTML_icon from "../images/skills/HTML_icon.svg";
import CSS_icon from "../images/skills/CSS-icon.svg";
import JS from "../images/skills/JAVASCRIPT-icon.svg";
import ReactIcon from "../images/skills/REACT-icon.svg"; 
import redux from "../images/skills/Redux.svg";
import Node from "../images/skills/NodeJS.svg";
import express from "../images/skills/express.svg";
import mgdb from "../images/skills/mongoose.png";
import cha from "../images/skills/chakra-ui.png";
import python from "../images/skills/python.svg";
import postman from "../images/skills/postman.png";
import git from "../images/skills/git.svg";
import cromaImage from "../images/project/croma.png";
import project from "../database/project.json";
import { Tooltip } from '@chakra-ui/react';
import { FaGithub } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

// Create a mapping for technology stack images
const techIcons = {
  HTML: HTML_icon,
  CSS: CSS_icon,
  JavaScript: JS,
  React: ReactIcon,
  Redux: redux,
  Node: Node,
  express: express,
  MongoDB: mgdb,
  Chakra: cha,
  Python: python,
  Postman: postman,
  Git: git,
};

const images = {
  croma: cromaImage,
};

function Project() {
  const { dark } = useContext(ThemeContext);

  const tooltipStyles = {
    color: dark ? 'black' : 'white',
    bg: dark ? 'white' : 'black',
  };

  const style = {
    color: dark ? 'white' : 'RGB(0, 0, 0)',
    backgroundColor: dark ? '#11001F' : 'white',
  };

  return (
    <div className="my-project-container" style={style} id="project">
      <div className="top-project-title-sec" style={style}>
        <h1>My Projects</h1>
      </div>

      <div className="project-section-btm">
        {project.length > 0 ? (
          project.map((proj, index) => (
            <div 
              className={`project-box ${dark ? "project-dark-box" : "project-light-box"}`} 
              key={proj.id || proj.title || index} 
              data-aos="zoom-in-up" 
              data-aos-duration="1000"
            >
              <div className="project-left-top">
                {images[proj.photo] ? (
                  <img
                    src={images[proj.photo]}
                    alt={`${proj.title} screenshot`}
                    className="scr-p-img"
                  />
                ) : (
                  <div>
                    <span>No Image Available</span>
                  </div>
                )}
              </div>

              <div className={`project-box-right ${dark ? "project-dark-box-right" : "project-light-box-right"}`}>
                <h4 className={`project-title ${dark ? "title-dark" : "title-light"}`}>{proj.title}</h4>
                <p className="project-desc">{proj.description}</p>

                {/* Stack Icons */}
                <div className="stack-icons">
                  {proj.stack.map((tech, techIndex) => (
                    <Tooltip
                      key={`${proj.id || proj.title}-${techIndex}`} 
                      hasArrow
                      label={tech}
                      aria-label="A tooltip"
                      color={tooltipStyles.color}
                      bg={tooltipStyles.bg}
                      padding=".5rem"
                      borderRadius="10px"
                    >
                      <div className={`image-stack ${dark ? "dark-image-icon" : ""}`}>
                        <img
                          src={techIcons[tech]}
                          alt={tech}
                          title={tech}
                          className="tech-icon"
                          style={{ width: '30px', margin: '5px' }}
                        />
                      </div>
                    </Tooltip>
                  ))}
                </div>
              </div>

              <div className="hover-live-class">
                <div className="links-project">
                  {proj.githublink && (
                    <Tooltip
                      hasArrow
                      label="GitHub link"
                      aria-label="A tooltip"
                      color={tooltipStyles.color}
                      bg={tooltipStyles.bg}
                      padding=".5rem"
                      borderRadius="10px"
                    >
                      <a
                        href={proj.githublink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-git-hub-link"
                      >
                        <FaGithub style={{ borderRadius: "50%" }} />
                      </a>
                    </Tooltip>
                  )}
                  {proj.onlinelink && (
                    <Tooltip
                      hasArrow
                      label="Live link"
                      aria-label="A tooltip"
                      color={tooltipStyles.color}
                      bg={tooltipStyles.bg}
                      padding=".5rem"
                      borderRadius="10px"
                    >
                      <a
                        href={proj.onlinelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-live-link project-git-hub-link"
                      >
                        <IoLogOut style={{ borderRadius: "50%" }} />
                      </a>
                    </Tooltip>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No projects available.</p>
        )}
      </div>
    </div>
  );
}

export default Project;
