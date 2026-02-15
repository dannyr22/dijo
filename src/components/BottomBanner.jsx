import { Link } from 'react-router-dom';
import './BottomBanner.css';

export default function BottomBanner() {
  return (
    <div className="bottom-banner">
      <span className="bottom-banner-text">Ready to go live?</span>
      <Link to="/approve" className="bottom-banner-btn">Start Subscription</Link>
    </div>
  );
}
