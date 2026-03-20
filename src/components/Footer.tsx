import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '8px' }}>
            <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="ImpressArt Logo" className="logo-img-lg" />
            <h2 className="font-bold">ImpressArt</h2>
          </Link>
          <p className="footer-desc">
            <strong>Trusted Signage Partners since 2004.</strong> We specialize in premium 
            signage and large-scale printing solutions designed to make your brand 
            impossible to ignore. Quality craftsmanship, built to last.
          </p>
        </div>
        
        <div className="footer-links">
          <h3>Sitemap</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <FiMapPin className="contact-icon" />
              <span>123 Print Avenue, Corporate Hub</span>
            </li>
            <li>
              <FiPhone className="contact-icon" />
              <span>+1 (800) 555-0199</span>
            </li>
            <li>
              <FiMail className="contact-icon" />
              <span>hello@impressart.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ImpressArt Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
