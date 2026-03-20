import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar glass-panel">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="/logo.jpg" alt="ImpressArt Logo" className="logo-img" />
            <span className="text-gradient font-bold">ImpressArt</span>
          </Link>
        </div>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)}>Our Work</Link>
          <Link to="/contact">
            <button className="primary-btn-sm" onClick={() => setIsOpen(false)}>Get a Quote</button>
          </Link>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
