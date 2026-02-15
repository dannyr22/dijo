import './Gallery.css';

const HERO = 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/ca88983c-99f7-4b5f-398d-312dc43b5e00/publicContain';

const images = [
  { src: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e2bd1d0a-f916-4388-8e71-7a2b21912300/publicContain', alt: 'Fresh coffee and pastries' },
  { src: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/b124ca31-c747-41ee-1410-c8d75ed26700/public', alt: 'Latte art' },
  { src: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/3fa275fe-4f98-492d-0282-0d1a00c6e000/publicContain', alt: 'Morning coffee' },
  { src: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/50970cf9-e3ac-4956-2542-ba5c45e31700/publicContain', alt: 'Friends enjoying coffee' },
  { src: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/90176554-2f3e-4499-5a5b-1d8406607300/public', alt: 'Coffee art' },
  { src: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/f4eb8430-47b8-461c-85d6-3166d8b80300/public', alt: 'Café atmosphere' },
  { src: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/ada70835-be4a-4ac8-355a-0200f26b4200/publicContain', alt: 'Coffee with milk' },
  { src: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/92a7944c-9f54-411b-0dda-909958a68e00/public', alt: 'Coffee beans' },
];

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

      {/* Photo grid */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-masonry">
            {images.map(({ src, alt }) => (
              <div key={alt} className="gallery-photo">
                <img src={src} alt={alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram feed */}
      <section className="gallery-instagram">
        <div className="container">
          <div className="section-header-center" style={{ marginBottom: '32px' }}>
            <h2 className="section-heading">Latest from Instagram</h2>
          </div>
          <div className="elfsight-app-6059298a-774f-448c-9583-c8950c9939ef" data-elfsight-app-lazy></div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <a
              href="https://www.instagram.com/dijodorking/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Follow @dijodorking
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
