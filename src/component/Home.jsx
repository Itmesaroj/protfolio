import { useContext, useEffect, useRef } from "react";
import ThemeContext from "../Context/themeContext";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import user from "../images/user.jpg";

function Home() {
  const { dark } = useContext(ThemeContext);
  const Style = {
    color: dark ? 'white' : 'RGB(0, 0, 0)',
    backgroundColor: dark ? '#11001F' : 'white',
  };

  const resumeLinkRef = useRef(null); // Create a ref for the resume link

  useEffect(() => {
    // Trigger download on component mount
    if (resumeLinkRef.current) {
      resumeLinkRef.current.click();
    }
  }, []);

  return (
    <div className="home-conatiner" style={Style} id="home">
      <div className="image-conatiner">
        <img src={user} alt="" />
        <p className="name-content">Hii, I'm Saroj Choudhary</p>
      </div>

      <div className="main-job">
        <h1 style={{ color: dark ? 'white' : 'black', backgroundColor: dark ? '#11001F' : 'white' }}>
          Full Stack Web Developer
        </h1>
      </div>

      <div className="slider-content"></div>

      <div className="button-home">
        <a href="#contact">
          <div className="btn-contact btn-home">
            Contact me <FaArrowRightLong />
          </div>
        </a>

        <div
          className="btn-home"
          id="btn-resume"
          style={{ border: dark ? "" : "1px solid rgb(76, 76, 76)" }}
        >
          <a
            ref={resumeLinkRef} // Set the ref to the link
            href="https://resume-builder-test-new.masaischool.com/resume/public?resumeId=67a356d5e7c615add17a8358"
            style={Style}
            download
            target="_blank"
          >
            My Resume <FaDownload style={{ display: "inline-block" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
