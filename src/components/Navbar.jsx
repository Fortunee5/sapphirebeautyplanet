import { useState, useEffect } from 'react';
import sapphireLogo from './assets/sapphire-logo.png'; // 👈 update path to match your project

const Navbar = ({ onBookNow }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Blog', href: '#blog' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s ease;
          padding: 20px 0;
        }
        .navbar.scrolled {
          background: rgba(255,255,255,0.97);
          padding: 12px 0;
          box-shadow: 0 2px 30px rgba(30, 18, 74, 0.1);
          backdrop-filter: blur(10px);
        }
        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ── Logo ── */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: clamp(6px, 1.5vw, 12px);
          text-decoration: none;
          flex-shrink: 0;
        }
        .nav-logo-img {
          height: clamp(38px, 6vw, 64px);
          width: auto;
          object-fit: contain;
          display: block;
          flex-shrink: 0;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.25));
          transition: filter 0.3s ease, transform 0.3s ease;
        }
        .nav-logo:hover .nav-logo-img {
          transform: scale(1.04);
          filter: drop-shadow(0 4px 12px rgba(0,0,0,0.35));
        }
        .navbar:not(.scrolled) .nav-logo-img {
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.5));
        }
        .nav-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }
        .nav-logo-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(13px, 2vw, 20px);
          font-weight: 700;
          color: #1e124a;
          letter-spacing: 0.4px;
          white-space: nowrap;
          transition: color 0.3s;
        }
        .nav-logo-sub {
          font-family: 'Playfair Display', serif;
          font-size: clamp(8px, 1vw, 11px);
          font-weight: 400;
          color: #1e124a;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          opacity: 0.7;
          white-space: nowrap;
          transition: color 0.3s;
        }
        .navbar:not(.scrolled) .nav-logo-title,
        .navbar:not(.scrolled) .nav-logo-sub {
          color: #fff;
        }
        /* Hide subtitle on very small screens to save space */
        @media (max-width: 400px) {
          .nav-logo-sub { display: none; }
          .nav-logo-title { font-size: 12px; }
        }

        /* ── Nav links ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-links a {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-dark);
          letter-spacing: 0.3px;
          transition: color 0.2s;
          position: relative;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 2px;
          background: #4b2dab;
          transition: width 0.3s ease;
        }
        .nav-links a:hover::after { width: 100%; }
        .nav-links a:hover { color: #4b2dab; }
        .navbar:not(.scrolled) .nav-links a { color: rgba(255,255,255,0.9); }
        .navbar:not(.scrolled) .nav-links a:hover { color: #fff; }
        .navbar:not(.scrolled) .nav-links a::after { background: #fff; }

        /* ── Book Now button ── */
        .nav-book-btn {
          background: #1e124a;
          color: #fff !important;
          padding: 10px 24px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 2px solid transparent;
        }
        .nav-book-btn:hover {
          background: #4b2dab;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(30, 18, 74, 0.3);
        }
        .navbar:not(.scrolled) .nav-book-btn {
          background: rgba(255,255,255,0.2);
          border: 2px solid rgba(255,255,255,0.6);
          color: #fff !important;
          backdrop-filter: blur(4px);
        }
        .navbar:not(.scrolled) .nav-book-btn:hover {
          background: rgba(255,255,255,0.35);
        }

        /* ── Hamburger ── */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 4px;
          cursor: pointer;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #1e124a;
          border-radius: 2px;
          transition: all 0.3s;
        }
        .navbar:not(.scrolled) .hamburger span { background: #fff; }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile menu ── */
        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(30, 18, 74, 0.98);
          z-index: 999;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 32px;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
        }
        .mobile-menu.open { transform: translateX(0); }

        /* Logo inside mobile menu */
        .mobile-menu-logo {
          height: clamp(64px, 20vw, 90px);
          width: auto;
          object-fit: contain;
          margin-bottom: 8px;
          filter: drop-shadow(0 2px 10px rgba(0,0,0,0.4));
        }

        .mobile-menu a {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          color: #fff;
          opacity: 0.85;
          transition: opacity 0.2s;
        }
        .mobile-menu a:hover { opacity: 1; }
        .mobile-menu-book {
          margin-top: 12px;
          background: rgba(255,255,255,0.15);
          border: 2px solid rgba(255,255,255,0.5);
          color: #fff;
          padding: 14px 36px;
          border-radius: 40px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }
        .mobile-menu-book:hover { background: rgba(255,255,255,0.25); }
        .mobile-close {
          position: absolute;
          top: 24px;
          right: 24px;
          color: #fff;
          font-size: 32px;
          cursor: pointer;
          line-height: 1;
        }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .mobile-menu { display: flex; }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">

          {/* ── Logo ── */}
          <a href="#home" className="nav-logo">
            <img
              src={sapphireLogo}
              alt="Sapphire Spa Therapy & Unisex Salon"
              className="nav-logo-img"
            />
            <div className="nav-logo-text">
              <span className="nav-logo-title">Sapphire Beauty Planet</span>
              <span className="nav-logo-sub">Spa & Unisex Salon</span>
            </div>
          </a>

          {/* ── Desktop links ── */}
          <div className="nav-links">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
            <button className="nav-book-btn" onClick={onBookNow}>Book Now</button>
          </div>

          {/* ── Hamburger ── */}
          <div
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </div>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>

        {/* Logo shown at top of mobile menu */}
        <img
          src={sapphireLogo}
          alt="Sapphire Spa Therapy & Unisex Salon"
          className="mobile-menu-logo"
        />

        {navLinks.map(link => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <button className="mobile-menu-book" onClick={() => { setMenuOpen(false); onBookNow(); }}>
          Book a Session
        </button>
      </div>
    </>
  );
};

export default Navbar;
