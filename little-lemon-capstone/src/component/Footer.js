import './../assets/css/layout.css';
import logoFooter from "./../assets/images/logoFooter.JPG";

function Footer() {
  return (
    <footer id="footer" className="site-footer" role="contentinfo">
      <div className="container footer-grid">
        <div className="footer-col">
          <img src={logoFooter} allt="logoFooter"/>
        </div>

        <nav className="footer-col" aria-label="Footer">
          <div className="footer-title">Sitemap</div>
          <a className="footer-link" href="#main">Home</a>
          <a className="footer-link" href="#testimonials">About</a>
          <a className="footer-link" href="#">Menu</a>
          <a className="footer-link" href="#main">Reservations</a>
          <a className="footer-link" href="#testimonials">Order Online</a>
          <a className="footer-link" href="#">Login</a>
        </nav>

        <div className="footer-col">
          <div className="footer-title">Contact</div>
          <a className="footer-link" aria-disabled>123 This Rd, That Cross, Some City, NA 456789</a>
          <a className="footer-link" aria-disabled>(123)-456-7890</a>
          <a className="footer-link" href="mailto:savor@littlelemon.com">savor@littlelemon.com</a>
        </div>

        <div className="footer-col">
          <div className="footer-title">Social Media Links</div>
          <a className="footer-link" href="#">Facebook</a>
          <a className="footer-link" href="#">Twitter</a>
          <a className="footer-link" href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
