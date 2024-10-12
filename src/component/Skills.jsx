
import { useContext } from "react";
import ThemeContext from "../Context/themeContext";
import HTML_icon from "../images/skills/HTML_icon.svg";
import CSS_icon from "../images/skills/CSS-icon.svg";
import JS from "../images/skills/JAVASCRIPT-icon.svg";
import ReactIcon from "../images/skills/REACT-icon.svg"; 
import redux from "../images/skills/Redux.svg";
import Node from "../images/skills/NodeJS.svg";
import express from "../images/skills/express.svg";
import mgdb from "../images/skills/mongodb.svg";
import cha from "../images/skills/chakra-ui.png";
import python from "../images/skills/python.svg";
import postman from "../images/skills/postman.png";
import git from "../images/skills/git.svg";
import mongoose from "../images/skills/mongoose.png"
function Skills() {
  const { dark } = useContext(ThemeContext);
  const Style = {
    color: dark ? 'white' : 'RGB(0, 0, 0)',
    backgroundColor: dark ? '#11001F' : 'white',
  };

  return (
    <div className="skill-container" style={Style} id="Skill">
      <div className="skills-top">
        <h2 style={Style}>My <span style={{color:"#FF388B ",fontWeight:"800", borderBottom:"3px solid #FF388B"}}>Technical </span> Skills</h2>
      </div>

      <div className="skills-bottom" data-aos="fade-up" data-aos-duration="1000">
        {/* HTML */}
        <div className={`box box-skill ${dark?"box-skill-dark":""}`} data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={HTML_icon} alt="HTML Icon" />
          <h3>HTML</h3>
        </div>

        {/* CSS */}
        <div className={`box box-skill ${dark?"box-skill-dark":""}`} data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={CSS_icon} alt="CSS Icon" />
          <h3>CSS</h3>
        </div>

        {/* JavaScript */}
        <div className={`box box-skill ${dark?"box-skill-dark":""}`} data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={JS} alt="JavaScript Icon" />
          <h3 >JavaScript</h3>
        </div>

        {/* React */}
        <div className={`box box-skill ${dark?"box-skill-dark":""}`} data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={ReactIcon} alt="React Icon" />
          <h3>React</h3>
        </div>

        {/* Redux */}
        <div className={`box box-skill ${dark?"box-skill-dark":""}`} data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={redux} alt="Redux Icon" />
          <h3>Redux</h3>
        </div>

        {/* Node.js */}
        <div className={`box box-skill ${dark?"box-skill-dark":""}`} data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={Node} alt="Node.js Icon" />
          <h3>Node.js</h3>
        </div>

        {/* Express.js */}
        <div className={`box box-skill ${dark?"box-skill-dark":""}`} data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={express} alt="Express Icon" />
          <h3>Express.js</h3>
        </div>

        {/* MongoDB */}
        <div className={`box box-skill ${dark?"box-skill-dark":""}`} data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={mgdb} alt="MongoDB Icon" />
          <h3>MongoDB</h3>
        </div>

        {/* Chakra UI */}
        <div className={`box box-skill ${dark?"box-skill-dark":""}`} data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={cha} alt="Chakra UI Icon" />
          <h3>Chakra UI</h3>
        </div>

        {/* Python */}
        {/* <div className={`box box-skill ${dark?"box-skill-dark":""}`} data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={python} alt="Python Icon" />
          <h3>Python</h3>
        </div> */}

        {/* Postman */}
        <div className={`box box-skill ${dark?"box-skill-dark":""}`} data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={postman} alt="Postman Icon" />
          <h3>Postman</h3>
        </div>

        {/* Git */}
        <div className={`box box-skill ${dark?"box-skill-dark":""}`} data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={git} alt="Git Icon" />
          <h3>Git</h3>
        </div>
        <div className={`box box-skill ${dark?"box-skill-dark":""}`} data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={mongoose} alt="Mongoose Icon" />
          <h3>Mongoose</h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;
