const ServicesSection = ({ onBookNow }) => {
  const services = [
    {
      icon: '💆',
      title: 'Full Body Massage',
      desc: 'Drift into deep relaxation with our signature full-body massage. Expert therapists use warm oils and precise techniques to melt away tension and restore balance.',
      duration: '60 / 90 min',
      price: '₦18,000',
      tag: 'Most Popular',
    },
    {
      icon: '🌸',
      title: 'Luxury Facial',
      desc: 'Reveal your most radiant skin with our bespoke facial treatments. Using premium botanical serums and advanced techniques tailored to your skin type.',
      duration: '45 / 60 min',
      price: '₦15,000',
      tag: 'Best Seller',
    },
    {
      icon: '🪨',
      title: 'Hot Stone Therapy',
      desc: 'Smooth, heated basalt stones glide across your muscles, melting chronic tension and deeply warming tired tissue for unparalleled relief.',
      duration: '75 min',
      price: '₦22,000',
      tag: 'Signature',
    },
    {
      icon: '💅',
      title: 'Manicure & Pedicure',
      desc: 'Pamper your hands and feet with our luxury nail care treatment — including exfoliation, moisturising masks, and premium gel or classic polish.',
      duration: '60 min',
      price: '₦12,000',
      tag: 'Classic',
    },
    {
      icon: '🛁',
      title: 'Aromatherapy Bath',
      desc: 'Immerse yourself in a curated blend of essential oils and mineral salts designed to detoxify, balance, and deeply calm your mind and body.',
      duration: '45 min',
      price: '₦14,000',
      tag: 'Relaxing',
    },
    {
      icon: '✨',
      title: 'Body Scrub & Wrap',
      desc: 'Reveal silky-smooth skin with our full-body exfoliation and nourishing wrap treatment. A transformative experience from head to toe.',
      duration: '90 min',
      price: '₦20,000',
      tag: 'Rejuvenating',
    },
  ];

  return (
    <>
      <style>{`
        .services-section {
          background: var(--green-dark);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }
        .services-section::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(82,183,136,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .services-section::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .services-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }
        .services-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 60px;
        }
        .services-header .section-tag { color: var(--gold-light); }
        .services-header .section-tag::before { background: var(--gold-light); }
        .services-header h2 { color: #fff; }
        .services-header p { color: rgba(255,255,255,0.6); font-size: 16px; line-height: 1.7; }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .service-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 32px 28px;
          transition: all 0.4s ease;
          position: relative;
          backdrop-filter: blur(4px);
          cursor: pointer;
        }
        .service-card:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(82,183,136,0.5);
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        .service-tag {
          position: absolute;
          top: 20px; right: 20px;
          background: rgba(82,183,136,0.2);
          color: var(--green-light);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.5px;
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid rgba(82,183,136,0.3);
        }
        .service-icon {
          font-size: 40px;
          margin-bottom: 20px;
        }
        .service-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 12px;
        }
        .service-desc {
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          margin-bottom: 24px;
        }
        .service-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .service-duration {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .service-price {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--gold-light);
        }
        .services-book-btn {
          display: block;
          margin: 48px auto 0;
          background: var(--green-light);
          color: var(--green-dark);
          padding: 16px 40px;
          border-radius: 40px;
          font-size: 15px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(82,183,136,0.3);
        }
        .services-book-btn:hover {
          background: #fff;
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(82,183,136,0.4);
        }

        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr; }
          .services-section { padding: 70px 0; }
        }
      `}</style>

      <section className="services-section">
        <div className="services-inner">
          <div className="services-header">
            <div className="section-tag">Our Treatments</div>
            <h2 className="section-title">Our Spa Services</h2>
            <p>Indulge in our curated menu of luxury treatments, each designed to restore, refresh, and revitalise</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card" key={i} onClick={onBookNow}>
                <div className="service-tag">{s.tag}</div>
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-meta">
                  <span className="service-duration">⏱ {s.duration}</span>
                  <span className="service-price">{s.price}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="services-book-btn" onClick={onBookNow}>
            Book Any Service ✦
          </button>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
