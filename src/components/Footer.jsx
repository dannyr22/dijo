import { Link } from 'react-router-dom';
import './Footer.css';

const LOGO = 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e9eff87f-d024-4e63-004c-be986a483400/public';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={LOGO} alt="Dijo" className="footer-logo" />
          <p className="footer-tagline">
            Authentic flavors of Portugal in every moment. Artisan coffee, fresh food and an unforgettable experience.
          </p>
          <div className="footer-social">
            <a href="https://www.instagram.com/dijodorking/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/p/Dijo-Dorking-61576913556787/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>High St, Dorking RH4 1RE, England</li>
            <li><a href="tel:01306331144">01306 331144</a></li>
            <li><a href="mailto:info@dijodorking.co.uk">info@dijodorking.co.uk</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Opening Hours</h4>
          <ul className="hours-list">
            <li><span>Mon–Wed</span><span>7am–3pm</span></li>
            <li><span>Thu–Fri</span><span>7am–5pm</span></li>
            <li><span>Sat</span><span>9am–3pm</span></li>
            <li><span>Sun</span><span>Closed</span></li>
          </ul>
          <Link to="/locations" className="footer-location-link">View Location</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 Dijo. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
