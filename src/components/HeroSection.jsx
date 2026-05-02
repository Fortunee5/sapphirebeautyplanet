import { useEffect, useRef } from 'react';

const HeroSection = ({ onBookNow }) => {
  const images = [
    '/images/he1.jpg',
    '/images/hero2.jpg',
    '/images/he2.jpg',
    '/images/hero4.jpg',
    '/images/he3.jpg',
    '/images/hero6.jpg',
  ];

  const col1 = [images[0], images[3]];
  const col2 = [images[1], images[4]];
  const col3 = [images[2], images[5]];

  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          background: #1e124a;
        }

        /* Left: Collage */
        .hero-collage {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px;
          overflow: hidden;
        }
        .hero-collage::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            transparent 60%,
            #1e124a 100%
          );
          z-index: 2;
          pointer-events: none;
        }
        .hero-collage::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.25);
          z-index: 1;
          pointer-events: none;
        }
        .collage-col {
          display: flex;
          flex-direction: column;
          gap: 4px;
          animation: colSlide 1.2s ease forwards;
          opacity: 0;
        }
        .collage-col:nth-child(1) { animation-delay: 0.1s; }
        .collage-col:nth-child(2) { animation-delay: 0.25s; margin-top: -40px; }
        .collage-col:nth-child(3) { animation-delay: 0.4s; }

        @keyframes colSlide {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .collage-img-wrap {
          overflow: hidden;
          flex: 1;
        }
        .collage-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 8s ease;
        }
        .collage-img-wrap:hover img { transform: scale(1.06); }
        .collage-col:nth-child(1) .collage-img-wrap:first-child { height: 55vh; }
        .collage-col:nth-child(1) .collage-img-wrap:last-child { height: 45vh; }
        .collage-col:nth-child(2) .collage-img-wrap:first-child { height: 50vh; }
        .collage-col:nth-child(2) .collage-img-wrap:last-child { height: 50vh; }
        .collage-col:nth-child(3) .collage-img-wrap:first-child { height: 45vh; }
        .collage-col:nth-child(3) .collage-img-wrap:last-child { height: 55vh; }

        /* Right: Text */
        .hero-text-side {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 60px 80px 50px;
          position: relative;
          z-index: 3;
          animation: fadeInRight 1s ease 0.5s forwards;
          opacity: 0;
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.25);
          color: var(--gold-light);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 8px 18px;
          border-radius: 30px;
          margin-bottom: 28px;
          width: fit-content;
          backdrop-filter: blur(4px);
        }
        .hero-badge span { font-size: 16px; }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 4.5vw, 64px);
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 24px;
        }
        .hero-title em {
          font-style: italic;
          color: var(--gold-light);
        }

        .hero-desc {
          font-size: 16px;
          color: rgba(255,255,255,0.75);
          line-height: 1.8;
          max-width: 420px;
          margin-bottom: 40px;
        }

        .hero-cta-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .hero-btn-primary {
          background: #9b84d8;
          color: #1e124a;
          padding: 16px 36px;
          border-radius: 40px;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.5px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(75, 45, 171, 0.4);
        }
        .hero-btn-primary:hover {
          background: #fff;
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(75, 45, 171, 0.5);
        }
        .hero-btn-secondary {
          background: transparent;
          color: #fff;
          padding: 16px 36px;
          border-radius: 40px;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.5px;
          border: 2px solid rgba(255,255,255,0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .hero-btn-secondary:hover {
          border-color: rgba(255,255,255,0.8);
          background: rgba(255,255,255,0.08);
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.6);
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          z-index: 10;
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        .scroll-arrow { font-size: 20px; }

        .hero-stats {
          display: flex;
          gap: 36px;
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.15);
        }
        .stat-item {}
        .stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 700;
          color: var(--gold-light);
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-label {
          font-size: 12px;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.5px;
        }

        @media (max-width: 900px) {
          .hero-section {
            grid-template-columns: 1fr;
            grid-template-rows: 50vh auto;
          }
          .hero-collage {
            height: 50vh;
          }
          .hero-collage::after {
            background: linear-gradient(to bottom, transparent 60%, #1e124a 100%);
          }
          .hero-text-side {
            padding: 40px 24px 60px;
          }
          .hero-stats { gap: 24px; }
          .stat-num { font-size: 26px; }
        }
        @media (max-width: 600px) {
          .hero-title { font-size: 32px; }
          .hero-cta-group { flex-direction: column; }
          .hero-btn-primary, .hero-btn-secondary { text-align: center; }
          .hero-stats { flex-wrap: wrap; gap: 20px; }
        }
      `}</style>

      <section className="hero-section" id="home">
        {/* Left collage */}
        <div className="hero-collage">
          <div className="collage-col">
            {col1.map((src, i) => (
              <div className="collage-img-wrap" key={i}>
                <img src={src} alt="Spa moment" />
              </div>
            ))}
          </div>
          <div className="collage-col">
            {col2.map((src, i) => (
              <div className="collage-img-wrap" key={i}>
                <img src={src} alt="Spa moment" />
              </div>
            ))}
          </div>
          <div className="collage-col">
            {col3.map((src, i) => (
              <div className="collage-img-wrap" key={i}>
                <img src={src} alt="Spa moment" />
              </div>
            ))}
          </div>
        </div>

        {/* Right text */}
        <div className="hero-text-side">
          <div className="hero-badge">
            Premium Spa & Wellness
          </div>
          <h1 className="hero-title">
            Welcome To The<br />
            <em>Oasis of</em><br />
            Serenity
          </h1>
          <p className="hero-desc">
            At Sapphire Beauty Planet, you'll rediscover your inner calm and be rejuvenated to embrace life with renewed energy and radiance.
          </p>
          <div className="hero-cta-group">
            <button className="hero-btn-primary" onClick={onBookNow}>Book a Session</button>
            <a href="#services" className="hero-btn-secondary">Explore Services</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">5K+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">15+</div>
              <div className="stat-label">Spa Services</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">8+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <span className="scroll-arrow">↓</span>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
