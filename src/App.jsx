import './App.css'
import Home from './component/Home'
import Navbar from './component/Navbar'
import { useContext, useEffect } from 'react';
import ThemeContext from './Context/themeContext';
import About from './component/About';
import Aos from 'aos'
import "aos/dist/aos.css"
import Skills from './component/Skills';
import Project from './component/Project';
import { ContactUs } from './component/Contect';
import Fotter from './component/Fotter';
function App() {
  useEffect(()=>{
Aos.init()
  },[])
  const { dark, toggle } = useContext(ThemeContext);
  const Style = {
    color: dark ? 'white' : 'RGB(0, 0, 0)',
    backgroundColor: dark ? '#11001F' : 'white',
   
};
  return(
    <>
    <Navbar/>
    
      <Home/>
      <br />
      <About/>
      <br />
    <Skills/>
    <br />
    <Project/>
    <br />
    <ContactUs/>
    <br />
    <Fotter/>
   
    </>
  )
}

export default App
