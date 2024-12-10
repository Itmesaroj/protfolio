import { useContext} from "react";
import ThemeContext from "../Context/themeContext";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
function Home() {
  const { dark, toggle } = useContext(ThemeContext);
  const Style = {
    color: dark ? 'white' : 'RGB(0, 0, 0)',
    backgroundColor: dark ? '#11001F' : 'white',
   
};
  return (
    <div className="home-conatiner" style={Style} id="home">
      <div className="image-conatiner" >
        <img src="https://elianajade.com/assets/profile-img-B51wlMEV.png" alt="" />
        <p className="name-content">Hii,I'm Saroj Choudhary</p>
      </div>

      <div className="main-job">
        <h1 style={{color: dark ? 'white' : 'black',backgroundColor: dark ? '#11001F' : 'white',}} >Full Stack Web Devloper</h1>
      </div>

      <div className="slider-content">

      </div>

      <div className="button-home">
        <a href="#contact">
        <div className="btn-contact btn-home">
          
          contact me <FaArrowRightLong />
        </div>
        </a>
       
        <div className="btn-home" id="btn-resume" style={{border:dark?"":"1px solid rgb(76, 76, 76)"}}>
        <a href="https://drive.google.com/file/d/1mw9WhoQbZ9aZmEgJOsgwOtqhVU7LX0VY/view?usp=drive_link" download style={Style}>
    my resume <FaDownload style={{display:"inline-block"}} />
  </a>
        </div>
      </div>
    </div>
  )
}

export default Home
