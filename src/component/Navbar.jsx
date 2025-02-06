import { useContext, useState, useEffect } from "react";
import ThemeContext from "../Context/themeContext";
import { CiDark, CiLight } from "react-icons/ci";
import { MdOutlineArrowOutward } from "react-icons/md";
import MobileDrawer from "./MobileDrawer";

function Navbar() {
    const { dark, toggle } = useContext(ThemeContext);
    const [scrollClass, setScrollClass] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrollClass(true);  
            } else {
                setScrollClass(false);  
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const Style = {
        color: dark ? 'white' : 'black',
        backgroundColor: dark ? '#11001F' : 'white',
    };

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const section = document.querySelector(sectionId);
        const navbarHeight = document.querySelector('.navbar-container').offsetHeight+90;
        
        window.scrollTo({
            top: section.offsetTop - navbarHeight, 
            behavior: 'smooth'
        });
    };

    return (
        <div 
            className={`navbar-container ${scrollClass ? "scroll-bg-navbar sticky-navbar" : ""}`} 
            id={dark ? "dark-shadow" : ""}
            style={Style}
        >
            <div className="logo" style={Style}>
                <a href="/"> <h2 className="logo-title">saroj <span className="logo-cricel"></span></h2></a>
               
            </div>

            {/* Desktop links */}
            <div className={`link-section ${scrollClass ? "scroll-bg-navbar" : ""}`} style={Style} >
                <div className="link-item">
                    <a href="#home" onClick={(e) => scrollToSection(e, "#home")} style={Style}>Home</a>
                </div>
                <div className="link-item">
                    <a href="#About" onClick={(e) => scrollToSection(e, "#About")} style={Style}>About</a>
                </div>
                <div className="link-item">
                    <a href="#Skill" onClick={(e) => scrollToSection(e, "#Skill")} style={Style}>Skill</a>
                </div>
                <div className="link-item">
                    <a href="#project" onClick={(e) => scrollToSection(e, "#project")} style={Style}>Project</a>
                </div>
                <div className="link-item">
                    <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")} style={Style}>Contact</a>
                </div>
            </div>

            <div className="right-container">
                {/* Toggle theme button */}
                <div className="toggle-theme" style={Style} onClick={toggle}>
                    {dark ? <CiLight className="theme-icon" /> : <CiDark className="theme-icon" />}
                </div>

                {/* Contact button */}
                <div className="contact_button" style={{ border: dark ? "" : "1px solid rgb(76, 76, 76)" }}>
                    <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")} style={Style}>Contact</a>
                    <MdOutlineArrowOutward style={Style} />
                </div>

                {/* Mobile screen */}
                <MobileDrawer Style={Style} />
            </div>
        </div>
    );
}

export default Navbar;
