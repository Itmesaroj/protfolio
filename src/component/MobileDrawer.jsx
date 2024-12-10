import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,useDisclosure
} from '@chakra-ui/react';
import { useRef } from 'react';
import { AiOutlineMenuFold } from "react-icons/ai";
import ThemeContext from "../Context/themeContext";
import { useContext } from 'react';
function MobileDrawer({ Style }) {
  const { dark, toggle } = useContext(ThemeContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const scrollToSection = (e, sectionId) => {
      e.preventDefault();
      const section = document.querySelector(sectionId);
      const navbarHeight = document.querySelector('.navbar-container').offsetHeight+70;
      
      window.scrollTo({
          top: section.offsetTop - navbarHeight, 
          behavior: 'smooth'
      });
  };

  return (
      <>
          <Button ref={btnRef} style={Style} onClick={onOpen} border={"none"} textDecoration={"none"}>
              <AiOutlineMenuFold className='drawer-open-btn'/>
          </Button>
          <Drawer
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
              finalFocusRef={btnRef}
          >
              <DrawerContent maxWidth="300px" maxHeight={"100vh"} boxShadow='rgba(0, 0, 0, 0.24)  0px 3px 8px' position={'relative'} bg={dark?"#20003b":"rgb(255,241,242)"} color={dark?"white":""}>
                  <DrawerCloseButton position={'absolute'} className='close-drawer-btn'/>
                  <DrawerBody>
                      <div className='mobile-link-drawer'>
                          <div className="link-item">
                              <a href="#home" onClick={(e) => scrollToSection(e, "#home")} style={{ color: dark ? "white" : "" }}>Home</a>
                          </div>
                          <div className="link-item">
                              <a href="#About" onClick={(e) => scrollToSection(e, "#About")} style={{ color: dark ? "white" : "" }}>About</a>
                          </div>
                          <div className="link-item">
                              <a href="#Skill" onClick={(e) => scrollToSection(e, "#Skill")} style={{ color: dark ? "white" : "" }}>Skill</a>
                          </div>
                          <div className="link-item">
                              <a href="#project" onClick={(e) => scrollToSection(e, "#project")} style={{ color: dark ? "white" : "" }}>Project</a>
                          </div>
                          <div className="link-item">
                              <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")} style={{ color: dark ? "white" : "" }}>Contact</a>
                          </div>
                      </div>
                  </DrawerBody>
              </DrawerContent>
          </Drawer>
      </>
  );
}

export default MobileDrawer;
