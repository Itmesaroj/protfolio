
import { useContext} from "react";
import ThemeContext from "../Context/themeContext";
import { MdEmail } from "react-icons/md";
function Fotter() {
    const { dark, toggle } = useContext(ThemeContext);
    const Style = {
      color: dark ? 'white' : 'RGB(0, 0, 0)',
      backgroundColor: dark ? '#11001F' : 'white',
    }  
  return (
    <div>
     <div className="contact-email" id={dark?"":"light-border"} style={Style} data-aos="zoom-in-up" data-aos-duration="1000">
      <h1 style={Style}>saroj <span className="logo-cricel"></span></h1>
      <p style={Style}><MdEmail style={{Style,display:'inline-block'}}/>itsmesaroj007@gmail.com</p>
    </div>

    <div className="likns-contact">
      <div>
        <a href="https://github.com/Itmesaroj" target='_blank'>GitHub</a>

      </div>
      <div>
        <a href="https://www.linkedin.com/in/saroj-choudhary-0021682a9/" target='_blank'>LinkedIn</a>
      </div>
    </div>
    </div>
  )
}

export default Fotter
