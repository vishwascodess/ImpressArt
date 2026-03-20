import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }} className="section">
      <h1 className="hero-title" style={{ fontSize: '48px', textAlign: 'center' }}>Contact <span className="text-primary">ImpressArt</span></h1>
      <p className="hero-desc" style={{ margin: '0 auto 60px auto', textAlign: 'center' }}>
        Ready to take your brand to the next level? Request a quote for your custom printing or signage project.
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '40px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Our Office</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '16px', color: 'var(--text-muted)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <FiMapPin style={{ color: 'var(--primary)', fontSize: '24px' }}/>
                123 Print Avenue, Corporate Hub, NY 10001
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <FiPhone style={{ color: 'var(--primary)', fontSize: '24px' }}/>
                +1 (800) 555-0199
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <FiMail style={{ color: 'var(--primary)', fontSize: '24px' }}/>
                hello@impressart.com
              </li>
            </ul>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Send us a message</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: 600, fontSize: '14px' }}>Full Name</label>
              <input type="text" placeholder="John Doe" style={{ padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--surface-border)', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: 600, fontSize: '14px' }}>Email Address</label>
              <input type="email" placeholder="john@example.com" style={{ padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--surface-border)', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: 600, fontSize: '14px' }}>Project Details / Quote Request</label>
              <textarea placeholder="Tell us about the sign you want..." rows={4} style={{ padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--surface-border)', outline: 'none', resize: 'vertical' }}></textarea>
            </div>
            <button className="primary-btn-lg" style={{ marginTop: '16px', justifyContent: 'center' }}>Send Request</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
