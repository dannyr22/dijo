import { Link } from 'react-router-dom';
import './Home.css';

const IMGS = {
  hero: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/ca88983c-99f7-4b5f-398d-312dc43b5e00/publicContain',
  autumn: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/3fa275fe-4f98-492d-0282-0d1a00c6e000/publicContain',
  freshCoffee: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e2bd1d0a-f916-4388-8e71-7a2b21912300/publicContain',
  latte: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/b124ca31-c747-41ee-1410-c8d75ed26700/public',
  friends: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/50970cf9-e3ac-4956-2542-ba5c45e31700/publicContain',
  coffeeArt: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/90176554-2f3e-4499-5a5b-1d8406607300/public',
  atmosphere: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/f4eb8430-47b8-461c-85d6-3166d8b80300/public',
  smooth: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/ada70835-be4a-4ac8-355a-0200f26b4200/publicContain',
  beans: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/92a7944c-9f54-411b-0dda-909958a68e00/public',
};

const marqueeText = 'Authentic Portuguese Coffee shop & Deli | Fresh Sandwiches | Pastéis de Nata | Specialty Coffee | Deli Goods from Portugal';

const features = [
  {
    icon: '☕',
    title: 'Artisan Coffee',
    desc: 'Selected beans roasted to perfection. Each cup is a work of art crafted by our skilled baristas.',
  },
  {
    icon: '🥗',
    title: 'Fresh Salads',
    desc: 'Organic ingredients harvested daily. Colorful and nutritious salads made with seasonal produce.',
  },
  {
    icon: '🥖',
    title: 'Delicious Sandwiches',
    desc: 'Fresh bread baked locally with generous fillings inspired by authentic Portuguese recipes.',
  },
  {
    icon: '🥐',
    title: 'Divine Desserts',
    desc: 'Pastéis de nata, traditional cakes and more — authentic Portuguese sweets to delight your senses.',
  },
];

const gallery = [
  { img: IMGS.freshCoffee, caption: 'Premium Coffee' },
  { img: IMGS.beans, caption: 'Selected Beans' },
  { img: IMGS.coffeeArt, caption: 'Art in Every Cup' },
  { img: IMGS.atmosphere, caption: 'Welcoming Atmosphere' },
  { img: IMGS.smooth, caption: 'Smooth & Creamy' },
  { img: IMGS.friends, caption: 'Happy Moments' },
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero" style={{ backgroundImage: `url(${IMGS.hero})` }}>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1 className="hero-heading">Authentic Portuguese Café</h1>
          <p className="hero-subheading">Taste Portugal in Every Moment</p>
          <p className="hero-body">
            Artisan coffee, fresh salads, delicious sandwiches, and irresistible desserts…
          </p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn-primary">Explore Our Menu</Link>
            <Link to="/locations" className="btn-outline-light">Find Us</Link>
          </div>
          <div className="hero-badges">
            <span>Open Daily</span>
            <span>Fresh Ingredients</span>
            <span>Made with Passion</span>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="marquee-text">{marqueeText}&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</span>
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="features-section">
        <div className="container features-inner">
          <div className="features-header">
            <h2 className="section-heading">What Makes Dijo Special</h2>
            <p className="section-subheading">
              An authentic Portuguese experience that combines tradition and quality in every detail.
            </p>
          </div>
          <div className="features-grid">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="feature-card">
                <div className="feature-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="features-cta">
            <Link to="/menu" className="btn-primary">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="story-section">
        <div className="container story-inner">
          <div className="story-img-wrap">
            <img src={IMGS.autumn} alt="Café interior" />
          </div>
          <div className="story-content">
            <span className="section-badge">100% Authentic</span>
            <h2 className="section-heading">Our Story</h2>
            <p className="story-sub">Portuguese Tradition with a Modern Touch</p>
            <p className="story-body">
              At Dijo, we believe every meal should be a memorable experience. Our journey began with a simple dream: to share the warmth and flavour of Portugal with the English countryside.
            </p>
            <div className="story-stats">
              <div className="stat">
                <span className="stat-num">50+</span>
                <span className="stat-label">Menu Items</span>
              </div>
              <div className="stat">
                <span className="stat-num">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-num">100%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
            <Link to="/about-us" className="btn-primary">Learn Our Story</Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="gallery-preview-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-heading">A Glimpse Into Our World</h2>
            <p className="section-subheading">Special moments, unique flavors, and a welcoming atmosphere</p>
          </div>
          <div className="gallery-grid">
            {gallery.map(({ img, caption }) => (
              <div key={caption} className="gallery-item">
                <img src={img} alt={caption} />
                <div className="gallery-overlay">
                  <span>{caption}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="gallery-cta">
            <Link to="/gallery" className="btn-primary">View More Photos</Link>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="instagram-section">
        <div className="container">
          <div className="section-header-center">
            <span className="ig-handle">@dijodorking</span>
            <h2 className="section-heading">Follow Us on Instagram</h2>
            <p className="section-subheading">See what we're up to - fresh bakes, coffee art, and Portuguese delights!</p>
          </div>
          <div className="elfsight-app-b463a038-5322-43f2-bce9-ec0588c72084" data-elfsight-app-lazy></div>
          <div className="ig-cta">
            <a href="https://www.instagram.com/dijodorking/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Follow @dijodorking
            </a>
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="visit-cta-section">
        <div className="container visit-cta-inner">
          <h2>Visit Us Today</h2>
          <p>Experience the authentic flavors of Portugal. We're ready to welcome you with open arms and great coffee.</p>
          <div className="visit-cta-buttons">
            <Link to="/locations" className="btn-primary">Find Our Location</Link>
            <Link to="/contact" className="btn-secondary">Get In Touch</Link>
          </div>

          <div className="contact-info-cards">
            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h4>Hours</h4>
              <p>Mon–Wed: 7am–3pm</p>
              <p>Thu–Fri: 7am–5pm</p>
              <p>Sat: 9am–3pm</p>
              <p>Sun: Closed</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h4>Phone</h4>
              <p>Call for orders</p>
              <p><a href="tel:01306331144">01306 331144</a></p>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h4>Location</h4>
              <p>High Street, Dorking</p>
              <p>RH4 1RE</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
