import './../assets/css/layout.css';
import greeksalad from "./../assets/images/greeksalad.jpg";
import bruchetta from "./../assets/images/bruchetta.svg";
import lemondessert from "./../assets/images/lemondessert.jpg";
import delivery from "./../assets/images/deliver.png";

function MainSection() {
  return (
    <main id="main" className="section" aria-labelledby="main-title">
      <div className="container">
        <div className="title-grid">
            <div className="title-text">
                <h2 id="main-title">This Weeks Specials!</h2>
            </div>
            <div className="title-btn">
                <a className="btn btn-primary" href="#main">Online Menu</a>
            </div>
        </div>
        <div className="card-grid">
          <article className="card">
            <div className="card-media" role="img" aria-label="greeksalad">
                <img src={greeksalad} alt="greeksalad"/>
            </div>
            <div className="card-body">
              <div className="card-head">
              <p className="card-title">Greek Salad</p>
              <p className="card-price">$ 12.99</p>
              </div>
              <div className="card-text">
                <p >A refreshing blend of crisp cucumbers, ripe tomatoes, red onions, Kalamata olives, and creamy feta, drizzled with extra virgin olive oil and a touch of oregano.</p>
              </div>
              <div className="card-foot">
              <p className="card-option">Order a delivery</p>
              <img src={delivery} alt="delivery"/>
              </div>
            </div>
          </article>

          <article className="card">
            <div className="card-media" role="img" aria-label="bruchetta">
                <img src={bruchetta} alt="bruchetta"/>
            </div>
            <div className="card-body">
                <div className="card-head">
              <p className="card-title">Bruchetta</p>
              <p className="card-price">$ 5.99</p>
              </div>
              <div className="card-text">
                <p>Toasted bread topped with a medley of ripe tomatoes, fresh basil, garlic, and a drizzle of extra virgin olive oil.</p>
              </div>
                <div className="card-foot">
              <p className="card-option">Order a delivery</p>
              <img src={delivery} alt="delivery"/>
              </div>
            </div>
          </article>

          <article className="card">
            <div className="card-media" role="img" aria-label="lemondessert">
                <img src={lemondessert} alt="lemondessert"/>
            </div>
            <div className="card-body">
                <div className="card-head">
              <p className="card-title">Lemon Desert</p>
              <p className="card-price">$ 5.00</p>
              </div>
              <div className="card-text">
                <p>A light and tangy treat with creamy lemon filling, delicate crust, and a burst of citrus freshness in every bite.</p>
              </div>
                <div className="card-foot">
              <p className="card-option">Order a delivery</p>
              <img src={delivery} alt="delivery"/>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

export default MainSection