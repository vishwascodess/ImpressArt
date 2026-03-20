import '../components/Gallery.css';

const PortfolioPage = () => {
  const allProjects = [
    { img: "/sign-image-3.png", title: "Factory Safety Suite", desc: "Industrial Signage" },
    { img: "/sign-image-4.png", title: "High-Volume Flex Print", desc: "Large Format Printing" },
    { img: "/sign-image-5.png", title: "Minimalist Lobby Logo", desc: "Corporate Signage" },
    { img: "/sign-image-6.png", title: "Modern Backlit Storefront", desc: "Retail Signage" },
    { img: "/sign-image-1.png", title: "Glowing Acrylic 3D", desc: "Premium Sign Letters" },
    { img: "/sign-image-2.png", title: "Metro City Hoarding", desc: "Outdoor Billboard" },
    { img: "/sign-image-7.png", title: "Vehicle Vinyl Wrap", desc: "Corporate Branding" },
    { img: "/sign-image-8.png", title: "Creative Neon Signs", desc: "Restaurant Signage" },
    { img: "/sign-image-9.png", title: "Frosted Glass Graphics", desc: "Interior Office Film" }
  ];

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '80vh' }} className="section">
      <h1 className="hero-title" style={{ fontSize: '48px', textAlign: 'center' }}>Our <span className="text-primary">Portfolio</span></h1>
      <p className="hero-desc" style={{ margin: '0 auto 60px auto', textAlign: 'center' }}>
        Take a look at over two decades of printing and signage transformations. Use our portfolio as inspiration for your next project.
      </p>

      <div className="gallery-grid">
        {allProjects.map((item, index) => (
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
    </div>
  );
};

export default PortfolioPage;
