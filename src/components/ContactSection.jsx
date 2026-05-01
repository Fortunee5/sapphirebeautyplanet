const ContactSection = ({ onBookNow }) => {
  return (
    <>
      <style>{`
        .contact-section {
          background: var(--green-dark);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }
        .contact-section::after {
          content: '';
          position: absolute;
          bottom: 0; right: 0;
          width: 350px; height: 350px;
          background: radial-gradient(circle, rgba(82,183,136,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .contact-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .contact-text .section-tag { color: var(--gold-light); }
        .contact-text .section-tag::before { background: var(--gold-light); }
        .contact-text h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 3.5vw, 46px);
          color: #fff;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .contact-text p {
          color: rgba(255,255,255,0.65);
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 36px;
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 36px;
        }
        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .contact-info-icon {
          width: 44px;
          height: 44px;
          background: rgba(255,255,255,0.08);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .contact-info-text {
          font-size: 14px;
          color: rgba(255,255,255,0.75);
          line-height: 1.5;
        }
        .contact-info-text strong {
          display: block;
          color: #fff;
          font-size: 13px;
          margin-bottom: 2px;
        }

        .contact-cta-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .contact-book-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--green-light);
          color: var(--green-dark);
          padding: 14px 30px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 6px 20px rgba(82,183,136,0.3);
        }
        .contact-book-btn:hover {
          background: #fff;
          transform: translateY(-2px);
        }
        .contact-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #25D366;
          color: #fff;
          padding: 14px 30px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 6px 20px rgba(37,211,102,0.3);
          text-decoration: none;
        }
        .contact-wa-btn:hover {
          background: #20b858;
          transform: translateY(-2px);
        }

        /* Contact Form */
        .contact-form-wrap {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 44px 40px;
          backdrop-filter: blur(4px);
        }
        .contact-form-title {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          color: #fff;
          margin-bottom: 28px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .form-group label {
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .form-group input,
        .form-group textarea,
        .form-group select {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 10px;
          padding: 14px 16px;
          color: #fff;
          font-size: 14px;
          font-family: 'Inter', sans-serif;
          transition: border-color 0.3s, background 0.3s;
          outline: none;
          width: 100%;
        }
        .form-group select option { background: var(--green-dark); color: #fff; }
        .form-group input::placeholder,
        .form-group textarea::placeholder { color: rgba(255,255,255,0.3); }
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          border-color: var(--green-light);
          background: rgba(255,255,255,0.1);
        }
        .form-group textarea { min-height: 90px; resize: vertical; }

        .contact-submit-btn {
          width: 100%;
          background: var(--green-light);
          color: var(--green-dark);
          padding: 16px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 4px;
        }
        .contact-submit-btn:hover {
          background: #fff;
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .contact-inner { grid-template-columns: 1fr; gap: 48px; }
          .contact-section { padding: 70px 0; }
        }
        @media (max-width: 600px) {
          .contact-form-wrap { padding: 28px 20px; }
          .contact-cta-btns { flex-direction: column; }
        }
      `}</style>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-text">
            <div className="section-tag">Get In Touch</div>
            <h2>Come Visit Us,<br />We're Ready for You</h2>
            <p>
              Whether you're ready to book your first session, have questions about our services, or want to plan a group wellness experience — we'd love to hear from you.
            </p>

            <div className="contact-info-list">
<div className="contact-info-item">
  <div className="contact-info-icon">📍</div>
  <div className="contact-info-text">
    <strong>Our Locations</strong>
    No 17B Cooper Road Ikoyi,<br />
    No 34 Jay Jay Oladimeji Close Off Freedom Way Lekki 1,<br />
    Plot 26B Oladimeji Alo Street, Off Freedom Way Lekki 1,<br />
    11B Taslim Elias Close Victoria Island,
  </div>
</div>
              <div className="contact-info-item">
                <div className="contact-info-icon">📞</div>
                <div className="contact-info-text">
                  <strong>Call / WhatsApp</strong>
                  +234 814 431 1841
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">🕐</div>
                <div className="contact-info-text">
                  <strong>Opening Hours</strong>
                  Mon – Sat: 9:00 AM – 8:00 PM · Sun: 11:00 AM – 6:00 PM
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">✉️</div>
                <div className="contact-info-text">
                  <strong>Email Us</strong>
                  hello@sapphire.com
                </div>
              </div>
            </div>

            <div className="contact-cta-btns">
              <button className="contact-book-btn" onClick={onBookNow}>
                📅 Book a Session
              </button>
              <a
                className="contact-wa-btn"
                href="https://wa.me/2348144311841"
                target="_blank"
                rel="noreferrer"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h3 className="contact-form-title">Send Us a Message</h3>
            <form className="contact-form" onSubmit={e => e.preventDefault()}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Your full name" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+234 800 000 0000" />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="What's this about?" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell us how we can help you..." />
              </div>
              <button type="submit" className="contact-submit-btn">
                Send Message ✦
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
