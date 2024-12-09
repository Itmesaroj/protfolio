import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { useContext, useEffect } from 'react';
import ThemeContext from './Context/themeContext';
import About from './component/About';
import Aos from 'aos';
import "aos/dist/aos.css";
import Skills from './component/Skills';
import Project from './component/Project';
import { ContactUs } from './component/Contact';
import Footer from './component/Footer';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  const { dark } = useContext(ThemeContext);
  const style = {
    color: dark ? 'white' : 'RGB(0, 0, 0)',
    backgroundColor: dark ? '#11001F' : 'white',
  };

  return (
    <>
      <Navbar />
      <div className="main-container" style={style}>
        <Home />
        <br />
        <About />
        <br />
        <Skills />
        <br />
        <Project />
        <br />
        <ContactUs />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default App;