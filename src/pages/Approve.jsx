import { Link } from 'react-router-dom';
import './Approve.css';

const LOGO = 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e9eff87f-d024-4e63-004c-be986a483400/public';

export default function Approve() {
  return (
    <div className="approve-page">
      <div className="approve-logo-bar">
        <Link to="/"><img src={LOGO} alt="Dijo logo" className="approve-logo" /></Link>
      </div>
      <div className="approve-container">
        <div className="approve-header">
          <h1>Website Launch & Ongoing Support</h1>
          <p className="approve-prepared">Prepared for Dijo</p>
        </div>

        <div className="approve-body">
          <p className="approve-intro">
            Thank you for reviewing the website preview for Dijo.
          </p>
          <p className="approve-intro">
            If everything meets your expectations, approval below will initiate launch and ongoing management of the site.
          </p>

          <div className="approve-section">
            <h2>Ongoing Service — £30 per month</h2>
            <p>Your monthly plan includes:</p>
            <ul>
              <li>Secure hosting infrastructure</li>
              <li>Domain management</li>
              <li>Ongoing technical maintenance</li>
              <li>Minor content updates (text and image adjustments)</li>
              <li>Direct email support for website-related matters</li>
            </ul>
            <p className="approve-note">
              This ensures Dijo's website remains secure, stable and professionally maintained without requiring day-to-day involvement from you.
            </p>
          </div>

          <div className="approve-section">
            <h2>Pre-Launch Adjustments</h2>
            <p>After subscribing, we'll work together to get everything just right before going live:</p>
            <ul>
              <li>Content updates — add, remove or refine text and images</li>
              <li>Design tweaks — colours, layout and branding to match your vision</li>
              <li>Domain name — agree and set up your preferred domain</li>
              <li>Link webpage contact form to desired email address</li>
            </ul>
            <p className="approve-note">
              This is an iterative process — we'll go back and forth until you're happy. Once finalised, I'll connect the live domain and confirm when the site is active.
            </p>
          </div>

          <div className="approve-section">
            <h2>Scope of Service</h2>
            <p>The monthly plan is designed to cover maintenance and light updates.</p>
            <p style={{ marginTop: '8px' }}>It does not include:</p>
            <ul>
              <li>Full redesigns</li>
              <li>Major structural or functional changes</li>
              <li>Development of new features</li>
              <li>Large-scale content creation</li>
            </ul>
            <p className="approve-note">
              Any additional work can be discussed and quoted separately if required.
            </p>
          </div>

          <div className="approve-section">
            <h2>Support & Response Time</h2>
            <p>Requests are typically handled within 1–2 business days.<br />Issues affecting site availability are prioritised.</p>
          </div>

          <div className="approve-section">
            <h2>Billing & Continuity</h2>
            <ul>
              <li>£30 per month (recurring)</li>
              <li>Hosting included</li>
              <li>Domain setup (£30 limit)</li>
              <li>No long-term contract</li>
            </ul>
            <p className="approve-note">
              You may cancel at any time. Service will continue through the end of the current billing period.
            </p>
            <p className="approve-note">
              To maintain flexibility on both sides, I also reserve the right to conclude the service arrangement with reasonable notice should circumstances change. In such cases, I will ensure a smooth and professional handover so Dijo retains full continuity of its website.
            </p>
          </div>

          <div className="approve-section approve-final">
            <h2>Approval</h2>
            <p>
              Ready to get started? Subscribe below and we'll begin shaping the site together.
            </p>
          </div>
        </div>

        <div className="approve-cta-wrap">
          <a href={import.meta.env.VITE_STRIPE_PAYMENT_URL} className="approve-cta-btn">
            Approve & Start Subscription — £30/month
          </a>
          <p className="approve-cta-sub">Secure payment via Stripe. Cancel anytime.</p>
        </div>
      </div>
    </div>
  );
}
