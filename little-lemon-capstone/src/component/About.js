import './../assets/css/layout.css';
import MarioAdrianA from "./../assets/images/MarioAdrianA.jpg";
import MarioAdrianB from "./../assets/images/MarioAdrianB.jpg";

function About() {
  return (
    <section id="About" className="about" aria-labelledby="about-title">
      <div className="container grid-12">
          <div className="hero-copy">
            <h1 id="about-title">Little Lemon</h1>
            <h4 id="about-subtitle">Chicago</h4>
            <p>
              At Little Lemon, chefs Mario and Adrian bring passion and artistry to every plate. Mario, with his deep roots in traditional Mediterranean cooking, infuses each dish with authentic flavors and timeless techniques. Adrian, known for his creative flair, blends classic recipes with modern twists, creating dishes that surprise and delight. Together, they craft a menu that celebrates freshness, bold flavors, and the joy of sharing great food.
            </p>
          </div>
          <div className="about-copy-img">
              <img src={MarioAdrianA} alt="MarioAdrianA"/>
              <img src={MarioAdrianB} alt="MarioAdrianB"/>
          </div>
      </div>
    </section>
  );
}

export default About
