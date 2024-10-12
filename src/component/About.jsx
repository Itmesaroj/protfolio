import { useContext } from "react";
import ThemeContext from "../Context/themeContext";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";

function About() {
  const { dark } = useContext(ThemeContext);

  // Define common styles for better maintainability
  const containerStyle = {
    color: dark ? 'white' : 'black',
    backgroundColor: dark ? '#11001F' : 'white',
  };

  const iconStyle = {
    color: dark ? 'white' : 'RGB(75, 85, 99)'
  };

  return (
    <div className="about-container"  id="About"  style={containerStyle}>
      {/* Top Section */}
      <div className="about-top-conatiner" style={containerStyle}>
        <p>Introduction</p>
        <h2>About me</h2>
      </div>

      {/* Bottom Section */}
      <div className="about-bottom-conatiner"  style={containerStyle}>
        {/* Left Image Section */}
        <div className="about-btm-left" style={containerStyle} data-aos="fade-right" data-aos-duration="1000">
          <div className="image">
            <img
              src="https://user-images.githubusercontent.com/74038190/221352975-94759904-aa4c-4032-a8ab-b546efb9c478.gif"
              alt="Coding illustration"
              width={"100%"}
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="about-btm-right" data-aos="fade-left" data-aos-duration="1000">
          <ul>
            <li>
              Hello! My name is Saroj Choudhary, and I’m a passionate fresher in web development. I love learning new technologies and building efficient applications. I am eager to contribute and grow as a developer.
            </li>

            {/* Personal Info Boxes */}
            <li style={{ listStyle: "none" }} className="about-boxs-container">
              {/* Box 1: Education */}
              <div className={`box-1 box ${dark?"hover-box-class":""}`} >
                <p style={iconStyle} id="box-icon">
                  <MdCastForEducation />
                </p>
                <h2>Education</h2>
                <p style={iconStyle}>Bachelor of Computer Applications (BCA)</p>
              </div>

              {/* Box 2: Experience */}
              <div className={`box-1 box ${dark?"hover-box-class":""}`}>
                <p style={iconStyle} id="box-icon">
                  <FaArrowRightLong />
                </p>
                <h2>Experience</h2>
                <p style={iconStyle}>Completed several projects during academic courses, focusing on web development.</p>
              </div>

              {/* Box 3: Interests */}
              <div className={`box-1 box ${dark?"hover-box-class":""}`}>
                <p style={iconStyle} id="box-icon">
                  <FaArrowRightLong />
                </p>
                <h2>Interests</h2>
                <p style={iconStyle}>Front-end development, UI/UX design, and continuously improving my programming skills.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
