import './Gallery.css';

const HERO = 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/ca88983c-99f7-4b5f-398d-312dc43b5e00/publicContain';

export default function Gallery() {
  return (
    <div className="gallery-page">
      {/* Hero */}
      <div className="page-hero" style={{ backgroundImage: `url(${HERO})` }}>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <span className="ig-handle-badge">@dijodorking</span>
          <h1>Our Gallery</h1>
          <p>Follow us on Instagram for the latest updates</p>
        </div>
      </div>

      {/* Instagram feed */}
      <section className="gallery-instagram">
        <div className="container">
          <div className="elfsight-app-a645420c-ac02-4c69-9690-5f665301d216" data-elfsight-app-lazy></div>
        </div>
      </section>
    </div>
  );
}
