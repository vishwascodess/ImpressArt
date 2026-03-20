import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <div className="badge">
          <span className="dot"></span>
          Premium Signage & Printing Solutions
        </div>
        
        <h1 className="hero-title">
          Making Your Brand <br />
          <span className="text-primary">Impossible to Ignore.</span>
        </h1>
        
        <p className="hero-desc">
          From glowing 3D acrylic letters to massive industrial billboards, 
          we design, print, and install high-quality signage that commands attention.
        </p>
        
        <div className="hero-actions">
          <Link to="/services">
            <button className="primary-btn-lg">
              Explore Services
              <FiArrowRight className="btn-icon" />
            </button>
          </Link>
          <Link to="/portfolio">
            <button className="secondary-btn-lg">
              View Portfolio
            </button>
          </Link>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <h3>500+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat">
          <h3>20+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat">
          <h3>100%</h3>
          <p>Client Satisfaction</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
