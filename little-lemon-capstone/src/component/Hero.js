import './../assets/css/layout.css';
import restaurant from "./../assets/images/restauranfood.jpg";
import  {Link} from 'react-router-dom';

function Hero() {
  return (
    <section id="Home" className="hero" aria-labelledby="banner-title">
      <div className="container grid-12">
        <div className="hero-copy">
          <h1 id="banner-title">Little Lemon</h1>
          <h4 id="banner-subtitle">Chicago</h4>
          <p>
            Where every meal bursts with fresh, zesty flavors, handpicked ingredients, and a sprinkle of sunshine in every bite. From crisp garden salads to hearty, comforting dishes, we serve joy on a plate. Relax, savor, and let your senses soak in the bright, cheerful vibes that make every visit feel like coming home.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#main"><Link to="/reservation">Reserve a Table</Link></a>
          </div>
        </div>
        <div className="hero-copy-img">
            <img src={restaurant} alt="restaurant"/>
        </div>
      </div>
    </section>
  );
}

export default Hero