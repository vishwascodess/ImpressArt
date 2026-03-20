import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <div className="section" style={{ paddingBottom: '0' }}>
        <h1 className="hero-title" style={{ fontSize: '48px', textAlign: 'center' }}>All <span className="text-primary">Capabilities</span></h1>
        <p className="hero-desc" style={{ margin: '0 auto', textAlign: 'center' }}>
          Explore our wide range of tailored signage, lettering, and printing services, 
          built exactly to your brand's specifications.
        </p>
      </div>
      <Services />
    </div>
  );
};

export default ServicesPage;
