const WhyUsSection = () => {
  const reasons = [
    {
      icon: '🌿',
      title: 'A Nurturing Sanctuary',
      desc: "We're intentional about your relaxation. Through expert treatments and premium products, we shape you into the best, most radiant version of yourself.",
    },
    {
      icon: '✨',
      title: 'The Sapphire Touch',
      desc: 'Every session, every moment, is filled with a bespoke care that transforms, rejuvenates, and leaves you feeling utterly renewed.',
    },
    {
      icon: '🎯',
      title: 'Tailored Wellness',
      desc: 'We craft personalised wellness journeys with clarity, precision, and passion — designed to meet your unique body and beauty needs.',
    },
    {
      icon: '🏆',
      title: 'Raising the Standard',
      desc: 'At Sapphire, you experience world-class care. Bold in quality, excellent in service, and always ready to exceed your expectations.',
    },
  ];

  return (
    <>
      <style>{`
        .why-section {
          background: #fff;
          padding: 100px 0;
        }
        .why-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .why-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 60px;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .why-card {
          background: var(--off-white);
          border: 1px solid var(--green-pale);
          border-radius: 20px;
          padding: 36px 28px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .why-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--green-light), var(--green-dark));
          transform: scaleX(0);
          transition: transform 0.4s ease;
          transform-origin: left;
        }
        .why-card:hover {
          border-color: var(--green-light);
          box-shadow: 0 16px 50px rgba(26,74,46,0.1);
          transform: translateY(-6px);
          background: #fff;
        }
        .why-card:hover::before { transform: scaleX(1); }
        .why-icon {
          width: 60px;
          height: 60px;
          background: var(--green-pale);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          margin-bottom: 20px;
          transition: background 0.3s;
        }
        .why-card:hover .why-icon {
          background: var(--green-dark);
        }
        .why-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 12px;
        }
        .why-card-desc {
          font-size: 14px;
          color: var(--text-light);
          line-height: 1.8;
        }

        @media (max-width: 1024px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: 1fr; }
          .why-section { padding: 70px 0; }
        }
      `}</style>

      <section className="why-section" id="services">
        <div className="why-inner">
          <div className="why-header">
            <div className="section-tag">Why Choose Us</div>
            <h2 className="section-title">Why Sapphire?</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '16px', lineHeight: '1.7' }}>
              Built for you, designed for relaxation and radiant beauty
            </p>
          </div>
          <div className="why-grid">
            {reasons.map((r, i) => (
              <div className="why-card" key={i}>
                <div className="why-icon">{r.icon}</div>
                <h3 className="why-card-title">{r.title}</h3>
                <p className="why-card-desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUsSection;
