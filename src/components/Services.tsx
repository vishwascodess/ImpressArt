import { FiLayers, FiPenTool, FiAlertTriangle, FiLayout } from 'react-icons/fi';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Flex & Fabric Printing",
      desc: "High-resolution indoor and outdoor flex banners, hoardings, and canvas prints designed to withstand the elements while maintaining vibrant colors.",
      icon: <FiLayout />,
      color: "#ec4899"
    },
    {
      id: 2,
      title: "3D Sign Letters",
      desc: "Premium glowing acrylic, steel, and aluminum 3D letters that give your corporate office or retail store a sophisticated, modern look.",
      icon: <FiPenTool />,
      color: "#8b5cf6"
    },
    {
      id: 3,
      title: "Billboards & Hoardings",
      desc: "Massive outdoor advertising solutions engineered for high visibility and structural integrity across city centers and highways.",
      icon: <FiLayers />,
      color: "#3b82f6"
    },
    {
      id: 4,
      title: "Industrial & Safety Signs",
      desc: "Highly durable warning, directional, and safety signs customized for manufacturing facilities and construction sites.",
      icon: <FiAlertTriangle />,
      color: "#f59e0b"
    }
  ];

  return (
    <section id="services" className="services section">
      <h2 className="section-title">Our Capabilities</h2>
      <p className="section-subtitle">
        We specialize in a wide range of printing and signage solutions, 
        combining modern technology with premium materials.
      </p>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card glass-panel group">
            <div 
              className="service-icon" 
              style={{ backgroundColor: `${service.color}15`, color: service.color }}
            >
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
