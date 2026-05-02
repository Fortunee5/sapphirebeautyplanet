import { FaInstagram, FaFacebook, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = ({ onAdminClick }) => {
  const links = {
    'Spa Services': ['Full Body Massage', 'Luxury Facials', 'Hot Stone Therapy', 'Manicure & Pedicure', 'Aromatherapy Bath', 'Body Scrub & Wrap'],
    'Company': ['About Us', 'Our Story', 'Careers', 'Press & Media', 'Partnerships'],
    'Visit Us': ['No 17B Cooper Road Ikoyi ', 'No 34 Jay Jay Oladimeji Close, Off Freedom Way Lekki 1', 'Plot 26B Oladimeji Alo Street, Off Freedom Way Lekki 1', '11B Taslim Elias Close , Victoria Island'],
  };

  return (
    <>
      <style>{`
        .footer {
          background: #0d0820;
          padding: 80px 0 0;
          color: rgba(255,255,255,0.7);
        }
        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .footer-brand {}
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 18px;
        }
        .footer-logo-icon {
          width: 40px; height: 40px;
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
        }
        .footer-brand-desc {
          font-size: 14px;
          line-height: 1.8;
          margin-bottom: 24px;
          max-width: 300px;
          color: rgba(255,255,255,0.55);
        }
        .footer-socials {
          display: flex;
          gap: 10px;
        }
        .social-btn {
          width: 38px; height: 38px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
        }
        .social-btn:hover {
          background: #4b2dab;
          border-color: #4b2dab;
          transform: translateY(-2px);
        }

        .footer-col-title {
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 20px;
        }
        .footer-col-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-col-links a {
          font-size: 13.5px;
          color: rgba(255,255,255,0.5);
          transition: color 0.2s;
          cursor: pointer;
        }
        .footer-col-links a:hover { color: #9b84d8; }

        .footer-newsletter {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 32px;
          margin: 40px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        .newsletter-text h4 {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          color: #fff;
          margin-bottom: 6px;
        }
        .newsletter-text p {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
        }
        .newsletter-form {
          display: flex;
          gap: 10px;
          flex: 1;
          max-width: 420px;
          min-width: 280px;
        }
        .newsletter-form input {
          flex: 1;
          background: rgba(255,255,255,0.07);
          border: 1.5px solid rgba(255,255,255,0.15);
          border-radius: 10px;
          padding: 12px 16px;
          color: #fff;
          font-size: 13px;
          font-family: 'Inter', sans-serif;
          outline: none;
          transition: border-color 0.3s;
        }
        .newsletter-form input::placeholder { color: rgba(255,255,255,0.25); }
        .newsletter-form input:focus { border-color: #9b84d8; }
        .newsletter-form button {
          background: #9b84d8;
          color: #1e124a;
          padding: 12px 22px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          white-space: nowrap;
        }
        .newsletter-form button:hover { background: #fff; }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 20px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-copy {
          font-size: 13px;
          color: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: color 0.2s;
          user-select: none;
        }
        .footer-copy:hover { color: rgba(255,255,255,0.55); }
        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }
        .footer-bottom-links a {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          transition: color 0.2s;
        }
        .footer-bottom-links a:hover { color: rgba(255,255,255,0.6); }

        .wa-float {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 56px; height: 56px;
          background: #25D366;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 26px;
          box-shadow: 0 6px 24px rgba(37,211,102,0.45);
          z-index: 700;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          animation: waPulse 2s infinite;
        }
        .wa-float:hover {
          transform: scale(1.12);
          box-shadow: 0 10px 32px rgba(37,211,102,0.6);
        }
        @keyframes waPulse {
          0%, 100% { box-shadow: 0 6px 24px rgba(37,211,102,0.45); }
          50% { box-shadow: 0 6px 32px rgba(37,211,102,0.7), 0 0 0 8px rgba(37,211,102,0.1); }
        }

        @media (max-width: 1024px) {
          .footer-top { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .footer-top { grid-template-columns: 1fr; gap: 32px; }
          .footer { padding: 60px 0 0; }
          .footer-newsletter { padding: 24px; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                Sapphire Beauty Planet
              </div>
              <p className="footer-brand-desc">
                Lagos' premier luxury wellness destination. Where every treatment is a journey into serenity, every visit a step towards your most radiant self.
              </p>
              <div className="footer-socials">
                <a className="social-btn" href="https://www.instagram.com/sapphirebeautyplanet?igsh=bXBub3Z2NHprZnI5&utm_source=qr" title="Instagram"><FaInstagram /></a>
                <a className="social-btn" href="https://wa.me/2348038794733" title="WhatsApp" target="_blank"><FaWhatsapp /></a>
                <a className="social-btn" href="https://www.tiktok.com/@sapphireplanet1?_r=1&_t=ZS-95xvboioj6w" title="TikTok"><FaTiktok /></a>
              </div>
            </div>

            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <div className="footer-col-title">{title}</div>
                <div className="footer-col-links">
                  {items.map((item, i) => <a key={i}>{item}</a>)}
                </div>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <span
              className="footer-copy"
              onClick={onAdminClick}
              title="Admin Access"
            >
              © 2026 Sapphire Beauty Planet. All rights reserved.
            </span>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      <a
        className="wa-float"
        href="https://wa.me/2348038794733"
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
      >
        💬
      </a>
    </>
  );
};

export default Footer;
