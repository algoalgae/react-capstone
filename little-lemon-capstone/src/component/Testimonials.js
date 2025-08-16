import './../assets/css/layout.css';
import avatar from "./../assets/images/avatar.jpeg";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title">Testimonials</h2>
      <div className="container">
        <div className="grid-12">
          <figure className="testimonial">
            <figcaption>
              <span className="rating">★★★★★</span>
              <div className="avatar" aria-hidden="true">
                <img src={avatar} alt="avatar"/>
                <strong>John Doe</strong>
              </div>
            </figcaption>
            <p>"The flavors were absolutely delightful! Every bite felt fresh and well-balanced, and the presentation made the dish even more inviting. Definitely coming back for more!"</p>
          </figure>

          <figure className="testimonial">
            <figcaption>
              <span className="rating">★★★★☆</span>
              <div className="avatar" aria-hidden="true">
                <img src={avatar} alt="avatar"/>
                <strong>Jane Doe</strong>
              </div>
            </figcaption>
            <p>"Outstanding in every way – couldn’t have asked for a better meal!"</p>
          </figure>

          <figure className="testimonial">
            <figcaption>
              <span className="rating">★★★★★</span>
              <div className="avatar" aria-hidden="true">
                <img src={avatar} alt="avatar"/>
                <strong>Rehne Doe</strong>
              </div>
            </figcaption>
            <p>"Absolutely perfect – fresh, flavorful, and beautifully presented!"</p>
          </figure>

          <figure className="testimonial">
            <figcaption>
              <span className="rating">★★★★★</span>
              <div className="avatar" aria-hidden="true">
                <img src={avatar} alt="avatar"/>
                <strong>Jaane Doe</strong>
              </div>
            </figcaption>
            <p>"The food was delicious with fresh ingredients and great flavor combinations. Portion sizes were generous, though a bit more seasoning could have made it perfect. Overall, a very satisfying meal worth coming back for."</p>
          </figure>
        </div>
      </div>
    </section>
  );
}
