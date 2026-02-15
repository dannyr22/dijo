import './Locations.css';

const HERO = 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/ca88983c-99f7-4b5f-398d-312dc43b5e00/publicContain';
const CAFE_IMG = 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/f4eb8430-47b8-461c-85d6-3166d8b80300/public';

const hours = [
  { day: 'Monday', time: '7am – 3pm' },
  { day: 'Tuesday', time: '7am – 3pm' },
  { day: 'Wednesday', time: '7am – 3pm' },
  { day: 'Thursday', time: '7am – 5pm' },
  { day: 'Friday', time: '7am – 5pm' },
  { day: 'Saturday', time: '9am – 3pm' },
  { day: 'Sunday', time: 'Closed' },
];

const today = new Date().toLocaleDateString('en-GB', { weekday: 'long' });

export default function Locations() {
  return (
    <div className="locations-page">
      {/* Hero */}
      <div className="page-hero" style={{ backgroundImage: `url(${HERO})` }}>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>Find Us</h1>
          <p>Visit us in the heart of Dorking</p>
        </div>
      </div>

      {/* Main content */}
      <section className="locations-section">
        <div className="container locations-inner">
          {/* Left: Info */}
          <div className="locations-info">
            <div className="location-card">
              <div className="location-card-icon">📍</div>
              <h3>Address</h3>
              <p>High Street</p>
              <p>Dorking, RH4 1RE</p>
              <p>England</p>
              <a
                href="https://maps.google.com/?q=High+Street+Dorking+RH4+1RE"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary location-btn"
              >
                Get Directions
              </a>
            </div>

            <div className="location-card">
              <div className="location-card-icon">📞</div>
              <h3>Phone</h3>
              <p>01306 331144</p>
              <a href="tel:01306331144" className="btn-primary location-btn">Call Now</a>
            </div>

            <div className="location-card hours-card">
              <div className="location-card-icon">🕐</div>
              <h3>Opening Hours</h3>
              <table className="hours-table">
                <tbody>
                  {hours.map(({ day, time }) => (
                    <tr key={day} className={day === today ? 'today-row' : ''}>
                      <td className="hours-day">{day}</td>
                      <td className={`hours-time ${time === 'Closed' ? 'closed' : ''}`}>{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Image + map */}
          <div className="locations-visual">
            <div className="location-img-wrap">
              <img src={CAFE_IMG} alt="Dijo café" />
            </div>
            <div className="map-embed">
              <iframe
                title="Dijo location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.5!2d-0.33!3d51.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDE0JzA4LjAiTiAwwrAxOSc0OC4wIlc!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
