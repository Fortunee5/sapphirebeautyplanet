const DailyRitualSection = ({ onBookNow }) => {
  return (
    <>
      <style>{`
        .ritual-section {
          background: var(--cream);
          padding: 100px 0;
        }
        .ritual-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .ritual-text {}
        .ritual-text .section-tag { color: var(--green-accent); }
        .ritual-text .section-tag::before { background: var(--green-accent); }

        .ritual-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 3vw, 44px);
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .ritual-title span {
          color: var(--green-accent);
          font-style: italic;
        }
        .ritual-desc {
          font-size: 15px;
          color: var(--text-mid);
          line-height: 1.85;
          margin-bottom: 36px;
        }
        .ritual-tips {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 36px;
        }
        .ritual-tip {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: #fff;
          border: 1px solid var(--green-pale);
          border-radius: 12px;
          padding: 16px 18px;
        }
        .tip-icon {
          font-size: 20px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .tip-text {
          font-size: 14px;
          color: var(--text-mid);
          line-height: 1.6;
        }
        .tip-text strong {
          display: block;
          color: var(--text-dark);
          font-weight: 600;
          margin-bottom: 2px;
        }
        .ritual-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--green-dark);
          color: #fff;
          padding: 16px 36px;
          border-radius: 40px;
          font-size: 15px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 8px 25px rgba(26,74,46,0.25);
        }
        .ritual-btn:hover {
          background: var(--green-accent);
          transform: translateY(-2px);
        }

        .ritual-visual {
          position: relative;
        }
        .ritual-card-main {
          background: var(--green-dark);
          border-radius: 24px;
          padding: 40px;
          color: #fff;
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(26,74,46,0.25);
        }
        .ritual-card-main::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(82,183,136,0.25) 0%, transparent 70%);
        }
        .ritual-card-main::after {
          content: '';
          position: absolute;
          bottom: -40px; left: -40px;
          width: 160px; height: 160px;
          background: radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%);
        }
        .ritual-quote {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-style: italic;
          color: rgba(255,255,255,0.9);
          line-height: 1.6;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }
        .ritual-quote::before {
          content: '"';
          font-size: 60px;
          color: var(--gold-light);
          line-height: 0.5;
          display: block;
          margin-bottom: 12px;
          font-family: 'Playfair Display', serif;
        }
        .ritual-author {
          display: flex;
          align-items: center;
          gap: 14px;
          position: relative;
          z-index: 1;
        }
        .author-avatar {
          width: 48px;
          height: 48px;
          background: rgba(255,255,255,0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }
        .author-info {}
        .author-name {
          font-weight: 600;
          font-size: 14px;
          color: #fff;
        }
        .author-role {
          font-size: 12px;
          color: rgba(255,255,255,0.55);
        }

        .ritual-mini-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 20px;
        }
        .ritual-mini-card {
          background: #fff;
          border: 1px solid var(--green-pale);
          border-radius: 14px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s;
        }
        .ritual-mini-card:hover {
          border-color: var(--green-light);
          box-shadow: 0 6px 20px rgba(26,74,46,0.1);
          transform: translateY(-3px);
        }
        .mini-card-icon { font-size: 28px; margin-bottom: 8px; }
        .mini-card-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-dark);
        }
        .mini-card-sub {
          font-size: 11px;
          color: var(--text-light);
          margin-top: 2px;
        }

        @media (max-width: 900px) {
          .ritual-inner { grid-template-columns: 1fr; gap: 48px; }
          .ritual-section { padding: 70px 0; }
        }
      `}</style>

      <section className="ritual-section">
        <div className="ritual-inner">
          <div className="ritual-text">
            <div className="section-tag">Daily Wellness</div>
            <h2 className="ritual-title">
              Sapphire Daily <span>Self-Care Ritual</span>
            </h2>
            <p className="ritual-desc">
              Start your wellness journey with us and discover how a consistent self-care ritual transforms not just how you look, but how you feel each day. Our therapists are here to guide you every step of the way.
            </p>
            <div className="ritual-tips">
              <div className="ritual-tip">
                <span className="tip-icon">🌅</span>
                <div className="tip-text">
                  <strong>Morning Glow Routine</strong>
                  Hydrate and awaken your skin with our morning facial mist and SPF moisturiser for a radiant start.
                </div>
              </div>
              <div className="ritual-tip">
                <span className="tip-icon">🫧</span>
                <div className="tip-text">
                  <strong>Weekly Detox Reset</strong>
                  Schedule a weekly body scrub or steam session to flush toxins and renew your skin's vitality.
                </div>
              </div>
              <div className="ritual-tip">
                <span className="tip-icon">🌙</span>
                <div className="tip-text">
                  <strong>Evening Restoration</strong>
                  Wind down with our signature aromatherapy oils and a guided breathing routine for deep sleep.
                </div>
              </div>
              <div className="ritual-tip">
                <span className="tip-icon">🏆</span>
                <div className="tip-text">
                  <strong>Monthly Deep Treatment</strong>
                  Invest in a monthly full-body treatment — your ultimate reset for lasting wellness and beauty.
                </div>
              </div>
            </div>
            <button className="ritual-btn" onClick={onBookNow}>
              Start Your Ritual ✦
            </button>
          </div>

          <div className="ritual-visual">
            <div className="ritual-card-main">
              <div className="ritual-quote">
                Your body is your greatest asset. At Sapphire Beauty Planet, we help you honour and restore it every single day.
              </div>
              <div className="ritual-author">
                <div className="author-avatar">🌿</div>
                <div className="author-info">
                  <div className="author-name">Dr. Amara Osei</div>
                  <div className="author-role">Lead Wellness Director, Sapphire</div>
                </div>
              </div>
            </div>
            <div className="ritual-mini-cards">
              <div className="ritual-mini-card">
                <div className="mini-card-icon">💧</div>
                <div className="mini-card-label">Hydration Therapy</div>
                <div className="mini-card-sub">Bi-weekly sessions</div>
              </div>
              <div className="ritual-mini-card">
                <div className="mini-card-icon">🧘</div>
                <div className="mini-card-label">Mindful Massage</div>
                <div className="mini-card-sub">Stress relief focused</div>
              </div>
              <div className="ritual-mini-card">
                <div className="mini-card-icon">🌺</div>
                <div className="mini-card-label">Floral Facials</div>
                <div className="mini-card-sub">Natural botanicals</div>
              </div>
              <div className="ritual-mini-card">
                <div className="mini-card-icon">✦</div>
                <div className="mini-card-label">Glow Package</div>
                <div className="mini-card-sub">Head-to-toe luxury</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DailyRitualSection;
