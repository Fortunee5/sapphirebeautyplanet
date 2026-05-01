const AboutSection = ({ onBookNow }) => {
  const locations = [
    {
      name: 'SAPPHIRE BEAUTY PLANET',
      sub: 'Ikoyi, Lagos',
      addr: 'No 17B Cooper Road Ikoyi ',
    },
    {
      name: 'SAPPHIRE BEAUTY PLANET',
      sub: 'Lekki, Lagos',
      addr: 'No 34 Jay Jay Oladimeji Close, Off Freedom Way Lekki 1 ',
    },
    {
      name: 'SAPPHIRE BEAUTY PLANET',
      sub: 'Lekki, Lagos',
      addr: 'Plot 26B Oladimeji Alo Street, Off Freedom Way Lekki 1 ',
    },
        {
      name: 'SAPPHIRE BEAUTY PLANET',
      sub: 'Victoria Island, Lagos',
      addr: '11B Taslim Elias Close , Victoria Island',
    },
  ];

  return (
    <>
      <style>{`
        .about-section {
          background: var(--off-white);
          padding: 100px 0;
        }
        .about-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-image-side {
          position: relative;
        }
        .about-img-main {
          width: 100%;
          height: 560px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 30px 80px rgba(26,74,46,0.18);
        }
        .about-img-badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: var(--green-dark);
          color: #fff;
          padding: 24px 28px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(26,74,46,0.35);
        }
        .about-img-badge-num {
          font-family: 'Playfair Display', serif;
          font-size: 42px;
          font-weight: 700;
          color: var(--gold-light);
          line-height: 1;
        }
        .about-img-badge-text {
          font-size: 12px;
          color: rgba(255,255,255,0.75);
          letter-spacing: 1px;
          margin-top: 4px;
        }
        .about-img-accent {
          position: absolute;
          top: -16px;
          left: -16px;
          width: 80px;
          height: 80px;
          background: var(--green-pale);
          border-radius: 50%;
          z-index: -1;
        }

        .about-text-side {}
        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--green-accent);
          margin-bottom: 16px;
        }
        .section-tag::before {
          content: '';
          display: block;
          width: 24px;
          height: 2px;
          background: var(--green-accent);
          border-radius: 2px;
        }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 3.5vw, 48px);
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .section-title em {
          font-style: italic;
          color: var(--green-accent);
        }
        .about-desc {
          font-size: 16px;
          color: var(--text-mid);
          line-height: 1.85;
          margin-bottom: 36px;
        }

        .about-locations {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 36px;
        }
        .location-card {
          background: #fff;
          border: 1px solid var(--green-pale);
          border-radius: 12px;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: all 0.3s ease;
        }
        .location-card:hover {
          border-color: var(--green-light);
          box-shadow: 0 4px 20px rgba(26,74,46,0.08);
          transform: translateX(4px);
        }
        .location-icon {
          width: 44px;
          height: 44px;
          background: var(--green-pale);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }
        .location-info {}
        .location-name {
          font-size: 13px;
          font-weight: 700;
          color: var(--green-dark);
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }
        .location-sub {
          font-size: 12px;
          color: var(--text-light);
          margin-bottom: 2px;
        }
        .location-addr {
          font-size: 12px;
          color: var(--text-mid);
        }

        .about-book-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--green-dark);
          color: #fff;
          padding: 16px 36px;
          border-radius: 40px;
          font-size: 15px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(26,74,46,0.25);
        }
        .about-book-btn:hover {
          background: var(--green-accent);
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(26,74,46,0.35);
        }

        @media (max-width: 900px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .about-img-main { height: 380px; }
        }
        @media (max-width: 600px) {
          .about-section { padding: 70px 0; }
          .about-img-badge { right: 8px; bottom: -12px; }
        }
      `}</style>

      <section className="about-section" id="about">
        <div className="about-inner">
          <div className="about-image-side">
            <div className="about-img-accent" />
            <img className="about-img-main" src="/images/abbout.jpg" alt="Serenova Spa interior" />
            <div className="about-img-badge">
              <div className="about-img-badge-num">8+</div>
              <div className="about-img-badge-text">Years of<br/>Excellence</div>
            </div>
          </div>

          <div className="about-text-side">
            <div className="section-tag">Welcome Home</div>
            <h2 className="section-title">
              Hey, You're <em>Home.</em>
            </h2>
            <p className="about-desc">
              At Sapphire Beauty Planet, we're cultivating a sanctuary where every guest experiences the finest in holistic wellness and beauty. This is where you restore, where you belong, and where everything your body and soul needs is nurtured into radiant wellbeing.
            </p>

            <div className="about-locations">
              {locations.map((loc, i) => (
                <div className="location-card" key={i}>
                  <div className="location-icon">📍</div>
                  <div className="location-info">
                    <div className="location-name">{loc.name}</div>
                    <div className="location-sub">{loc.sub}</div>
                    <div className="location-addr">{loc.addr}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="about-book-btn" onClick={onBookNow}>
              Book a Session ✦
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
