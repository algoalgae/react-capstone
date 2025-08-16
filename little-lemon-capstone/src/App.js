import './App.css';
import Nav from './component/Nav.js';
import Hero from "./component/Hero.js";
import MainSection from "./component/MainSection.js";
import Testimonials from "./component/Testimonials.js";
import About from "./component/About.js";
import Footer from "./component/Footer.js";

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <MainSection/>
      <Testimonials/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
