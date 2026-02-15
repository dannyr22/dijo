import './Blog.css';

const HERO = 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/ca88983c-99f7-4b5f-398d-312dc43b5e00/publicContain';

export default function Blog() {
  return (
    <div className="blog-page">
      <div className="page-hero" style={{ backgroundImage: `url(${HERO})` }}>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>Blog</h1>
          <p>Stories, recipes, and news from our café</p>
        </div>
      </div>

      <section className="blog-section">
        <div className="container blog-empty">
          <div className="blog-empty-icon">📝</div>
          <h2>No posts yet</h2>
          <p>Check back soon for stories, recipes, and news from dijo.</p>
        </div>
      </section>
    </div>
  );
}
