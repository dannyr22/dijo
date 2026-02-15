import { Link } from 'react-router-dom';
import './AboutUs.css';

const HERO = 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/ca88983c-99f7-4b5f-398d-312dc43b5e00/publicContain';
const ABOUT_IMG = 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/3fa275fe-4f98-492d-0282-0d1a00c6e000/publicContain';

const badges = ['Fresh Ingredients', 'Made with Love', 'Artisan Coffee', 'Portuguese Deli'];

const promises = [
  {
    emoji: '📜',
    title: 'Authentic Recipes',
    desc: 'Every dish we serve is rooted in centuries-old Portuguese culinary tradition. We source authentic recipes passed down through generations, ensuring each bite transports you straight to Portugal.',
  },
  {
    emoji: '🤝',
    title: 'Community Spirit',
    desc: 'Dijo is more than a café — it\'s a gathering place for the Dorking community. We believe in building connections over great food and coffee, creating a warm and welcoming space for everyone.',
  },
  {
    emoji: '💛',
    title: 'Portuguese Heart',
    desc: 'Our team brings the warmth and passion of Portuguese hospitality to every interaction. From our baristas to our kitchen team, every member of Dijo is committed to making your experience special.',
  },
];

export default function AboutUs() {
  return (
    <div className="about-page">
      {/* Hero */}
      <div className="page-hero" style={{ backgroundImage: `url(${HERO})` }}>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>About Us</h1>
          <p>Bringing authentic Portuguese flavours to Dorking</p>
        </div>
      </div>

      {/* About section */}
      <section className="about-section">
        <div className="container about-inner">
          <div className="about-img-wrap">
            <img src={ABOUT_IMG} alt="Dijo café interior" />
          </div>
          <div className="about-content">
            <span className="section-badge">15+ Years Experience</span>
            <h2 className="section-heading">Our Story</h2>
            <p className="about-sub">Bringing Portugal to Dorking</p>
            <p className="about-body">
              Welcome to dijo — an authentic Portuguese café and deli brought to the heart of Dorking.
              We believe that food is more than just sustenance; it's a way to connect with culture,
              tradition, and the people we love.
            </p>
            <p className="about-body" style={{ marginTop: '16px' }}>
              Our journey began with a simple dream: to share the warmth and flavour of Portugal with
              the English countryside.
            </p>
            <p className="about-body" style={{ marginTop: '16px' }}>
              Whether you're craving an authentic bifana, a creamy galão, or simply want to experience
              the warmth of Portuguese hospitality, dijo is the place for you.
            </p>
            <div className="about-badges">
              {badges.map(b => (
                <span key={b} className="about-badge">{b}</span>
              ))}
            </div>
            <Link to="/menu" className="btn-primary">Explore Our Menu</Link>
          </div>
        </div>
      </section>

      {/* Promise section */}
      <section className="promise-section">
        <div className="container">
          <div className="promise-quote">
            <blockquote>
              "Every cup, every dish, every smile — made with genuine Portuguese heart"
            </blockquote>
          </div>
          <div className="promise-header">
            <h2 className="section-heading">Our Promise</h2>
          </div>
          <div className="promise-grid">
            {promises.map(({ emoji, title, desc }) => (
              <div key={title} className="promise-card">
                <div className="promise-emoji">{emoji}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
