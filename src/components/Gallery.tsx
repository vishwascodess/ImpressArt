import { FiLayers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
  const projects = [
    { img: "/sign-image-3.png", title: "Factory Safety Suite", desc: "Industrial Signage" },
    { img: "/sign-image-4.png", title: "High-Volume Flex Print", desc: "Large Format Printing" },
    { img: "/sign-image-5.png", title: "Minimalist Lobby Logo", desc: "Corporate Signage" },
    { img: "/sign-image-6.png", title: "Modern Backlit Storefront", desc: "Retail Signage" },
    { img: "/sign-image-1.png", title: "Glowing Acrylic 3D", desc: "Premium Sign Letters" },
    { img: "/sign-image-2.png", title: "Metro City Hoarding", desc: "Outdoor Billboard" }
  ];

  return (
    <section id="gallery" className="gallery section">
      <h2 className="section-title">Our Recent Work</h2>
      <p className="section-subtitle">
        A glimpse at some of the stunning signage installations and printing projects we've completed recently.
      </p>

      <div className="gallery-grid">
        {projects.map((item, index) => (
          <div key={index} className="gallery-item">
            <div className="img-container">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="gallery-info">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="btn-container">
        <Link to="/portfolio" style={{ textDecoration: 'none' }}>
          <button className="secondary-btn-lg">
            <FiLayers className="btn-icon" style={{ marginRight: '8px' }} />
            View Complete Portfolio
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
