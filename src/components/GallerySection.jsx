import { useState, useEffect } from 'react';

// 12 real Unsplash spa images
const SPA_IMAGES = [
  { id: 1,  src: 'https://i.pinimg.com/736x/08/3e/5b/083e5b91232625c90bfe52dc2859eb44.jpg', label: '✦ Serenity'  },
  { id: 2,  src: 'https://i.pinimg.com/736x/e1/31/8f/e1318f74a62262e8dec4d022f6824fde.jpg', label: '✦ Renewal'   },
  { id: 3,  src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80', label: '✦ Radiance'  },
  { id: 4,  src: 'https://i.pinimg.com/1200x/8c/7a/ac/8c7aac311305c0238b12021e6b46461f.jpg', label: '✦ Tranquil'  },
  { id: 5,  src: 'https://i.pinimg.com/1200x/3b/4e/ab/3b4eabe03afef3601dbc7c2023c57706.jpg', label: '✦ Bliss'     },
  { id: 6,  src: 'https://i.pinimg.com/1200x/e2/ea/88/e2ea881d31c4e19d8989f3eb70abc86b.jpg', label: '✦ Restore'   },
  { id: 7,  src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80', label: '✦ Harmony'  },
  { id: 8,  src: 'https://i.pinimg.com/736x/63/d6/d3/63d6d3429fac924eb657041586a1103b.jpg', label: '✦ Balance'  },
  { id: 9,  src: 'https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=600&q=80', label: '✦ Luxe'     },
  { id: 10, src: 'https://i.pinimg.com/736x/ac/30/fe/ac30feb22aa0536fbd04fdeef18f0c61.jpg', label: '✦ Solace'   },
  { id: 11, src: 'https://i.pinimg.com/736x/f4/09/f9/f409f96c61e9183a0d08ce5faec90db9.jpg', label: '✦ Zenith'   },
  { id: 12, src: 'https://i.pinimg.com/1200x/e2/bd/2a/e2bd2a25d6134ca67233e3d2baa1de86.jpg', label: '✦ Calm'     },
];

// Split into two rows of 6 for offset marquee effect
const ROW_1 = SPA_IMAGES.slice(0, 6);
const ROW_2 = SPA_IMAGES.slice(6, 12);

/* ── Lightbox ───────────────────────────────────────────────── */
const Lightbox = ({ image, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape')      onClose();
      if (e.key === 'ArrowRight')  onNext();
      if (e.key === 'ArrowLeft')   onPrev();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lb-overlay" onClick={onClose}>
      <button className="lb-arrow" onClick={e => { e.stopPropagation(); onPrev(); }}>&#8249;</button>
      <div className="lb-box" onClick={e => e.stopPropagation()}>
        <button className="lb-close" onClick={onClose}>&#x2715;</button>
        <img src={image.src} alt={image.label} className="lb-img" />
        <p className="lb-label">{image.label}</p>
      </div>
      <button className="lb-arrow" onClick={e => { e.stopPropagation(); onNext(); }}>&#8250;</button>
    </div>
  );
};

/* ── Marquee Row ─────────────────────────────────────────────── */
const MarqueeRow = ({ images, reverse, onImageClick }) => {
  // Triple so the seam never shows during the loop
  const tiles = [...images, ...images, ...images];

  return (
    <div className="marquee-track-outer">
      <div className={`marquee-track ${reverse ? 'marquee-rtl' : 'marquee-ltr'}`}>
        {tiles.map((img, idx) => (
          <div
            key={`${img.id}-${idx}`}
            className="marquee-card"
            onClick={() => onImageClick(img)}
          >
            <img src={img.src} alt={img.label} className="marquee-img" loading="lazy" />
            <div className="marquee-overlay">
              <span className="marquee-label">{img.label}</span>
            </div>
            <div className="card-shine" />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Gallery Section ─────────────────────────────────────────── */
const GallerySection = () => {
  const [lightboxImg, setLightboxImg] = useState(null);

  const openLightbox  = (img) => setLightboxImg(img);
  const closeLightbox = ()    => setLightboxImg(null);

  const prevImage = () => {
    const idx = SPA_IMAGES.findIndex(i => i.id === lightboxImg.id);
    setLightboxImg(SPA_IMAGES[(idx - 1 + SPA_IMAGES.length) % SPA_IMAGES.length]);
  };
  const nextImage = () => {
    const idx = SPA_IMAGES.findIndex(i => i.id === lightboxImg.id);
    setLightboxImg(SPA_IMAGES[(idx + 1) % SPA_IMAGES.length]);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,400&family=Josefin+Sans:wght@200;300;400&display=swap');

        :root {
          --bg:         #0e0e0d;
          --cream:      #f0e9dc;
          --cream-dim:  rgba(240,233,220,0.45);
          --gold:       #c8a96e;
          --gold-light: #e8d5a3;
          --radius:     16px;
          --card-w:     340px;
          --card-h:     230px;
          --gap:        20px;
          /* One full set of 6 cards width — used in keyframe calculation */
          --strip-w:    calc((var(--card-w) + var(--gap)) * 6);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .gallery-section {
          background: var(--bg);
          padding: 110px 0 100px;
          position: relative;
          overflow: hidden;
          font-family: 'Josefin Sans', sans-serif;
        }

        /* Soft ambient centre glow */
        .gallery-glow {
          position: absolute;
          width: 700px; height: 600px;
          background: radial-gradient(circle, rgba(200,169,110,0.07) 0%, transparent 65%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 0;
        }

        /* Top gold hairline */
        .gallery-topline {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }

        .gallery-inner { position: relative; z-index: 1; }

        /* ── Header ── */
        .gallery-header {
          text-align: center;
          margin-bottom: 64px;
          padding: 0 24px;
        }
        .gallery-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 18px;
        }
        .gallery-eyebrow .line {
          display: block;
          width: 40px; height: 1px;
          background: var(--gold);
          opacity: 0.5;
        }
        .gallery-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(38px, 5vw, 68px);
          font-weight: 300;
          color: var(--cream);
          letter-spacing: 2px;
          line-height: 1;
        }
        .gallery-title em {
          font-style: italic;
          color: var(--gold-light);
        }
        .gallery-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin: 22px auto 20px;
        }
        .gallery-divider .rule {
          display: block;
          width: 70px; height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold));
        }
        .gallery-divider .rule.rule-r {
          background: linear-gradient(90deg, var(--gold), transparent);
        }
        .diamond {
          width: 6px; height: 6px;
          background: var(--gold);
          transform: rotate(45deg);
          flex-shrink: 0;
        }
        .gallery-subtitle {
          font-size: 11px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--cream-dim);
          line-height: 2;
        }

        /* ── Marquee viewport (clips & fades edges) ── */
        .marquee-viewport {
          display: flex;
          flex-direction: column;
          gap: var(--gap);
          -webkit-mask-image: linear-gradient(
            90deg, transparent 0%, black 7%, black 93%, transparent 100%
          );
          mask-image: linear-gradient(
            90deg, transparent 0%, black 7%, black 93%, transparent 100%
          );
        }

        /* Pause ALL rows when hovering anywhere in the viewport */
        .marquee-viewport:hover .marquee-track {
          animation-play-state: paused;
        }

        .marquee-track-outer { overflow: hidden; width: 100%; }

        /* The moving strip */
        .marquee-track {
          display: flex;
          gap: var(--gap);
          width: max-content;
          will-change: transform;
        }
        .marquee-ltr { animation: scrollLeft  32s linear infinite; }
        .marquee-rtl { animation: scrollRight 38s linear infinite; }

        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-1 * var(--strip-w))); }
        }
        @keyframes scrollRight {
          from { transform: translateX(calc(-1 * var(--strip-w))); }
          to   { transform: translateX(0); }
        }

        /* ── Card ── */
        .marquee-card {
          position: relative;
          width: var(--card-w);
          height: var(--card-h);
          flex-shrink: 0;
          border-radius: var(--radius);
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(0,0,0,0.55);
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.4s ease;
        }
        .marquee-card:hover {
          transform: scale(1.05) translateY(-6px);
          box-shadow: 0 20px 52px rgba(0,0,0,0.75),
                      0 0 0 1px rgba(200,169,110,0.3);
          z-index: 2;
        }
        .marquee-img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .marquee-card:hover .marquee-img { transform: scale(1.1); }

        .marquee-overlay {
          position: absolute; inset: 0;
          background: rgba(14,14,13,0);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 18px;
          border-radius: var(--radius);
          transition: background 0.4s ease;
        }
        .marquee-card:hover .marquee-overlay { background: rgba(14,14,13,0.55); }

        .marquee-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px; font-style: italic; font-weight: 300;
          color: var(--gold-light);
          letter-spacing: 2px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s;
          text-shadow: 0 2px 10px rgba(0,0,0,0.7);
        }
        .marquee-card:hover .marquee-label { opacity: 1; transform: translateY(0); }

        .card-shine {
          position: absolute; inset: 0;
          background: linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%);
          transform: translateX(-120%);
          transition: transform 0.6s ease;
          pointer-events: none;
          border-radius: var(--radius);
        }
        .marquee-card:hover .card-shine { transform: translateX(120%); }

        /* ── Footer badge ── */
        .gallery-badge {
          text-align: center;
          margin-top: 52px;
          padding: 0 24px;
        }
        .badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(200,169,110,0.22);
          border-radius: 100px;
          padding: 10px 26px;
          background: rgba(200,169,110,0.04);
        }
        .badge-dot {
          width: 5px; height: 5px;
          background: var(--gold);
          border-radius: 50%;
        }
        .badge-text {
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--cream-dim);
        }

        /* ── Lightbox ── */
        .lb-overlay {
          position: fixed; inset: 0;
          background: rgba(8,8,7,0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          padding: 32px;
          animation: lbFadeIn 0.28s ease;
        }
        @keyframes lbFadeIn { from { opacity:0 } to { opacity:1 } }

        .lb-box {
          position: relative;
          max-width: 880px; width: 100%;
          animation: lbScale 0.36s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes lbScale {
          from { transform:scale(0.88); opacity:0 }
          to   { transform:scale(1);    opacity:1 }
        }
        .lb-img {
          width: 100%; max-height: 78vh;
          object-fit: contain; display: block;
          border-radius: 18px;
          box-shadow: 0 40px 100px rgba(0,0,0,0.8);
        }
        .lb-close {
          position: absolute;
          top: -18px; right: -18px;
          width: 42px; height: 42px;
          background: var(--gold);
          color: #111; border: none;
          border-radius: 50%;
          font-size: 15px; font-weight: 700;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, transform 0.25s;
          z-index: 10;
        }
        .lb-close:hover { background: var(--cream); transform: scale(1.12) rotate(90deg); }
        .lb-label {
          text-align: center;
          color: var(--gold-light);
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px; font-style: italic; font-weight: 300;
          margin-top: 16px; letter-spacing: 2px;
        }
        .lb-arrow {
          background: none;
          border: 1px solid rgba(200,169,110,0.3);
          color: var(--gold);
          font-size: 40px;
          width: 54px; height: 54px;
          border-radius: 50%;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; line-height: 1;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .lb-arrow:hover {
          background: rgba(200,169,110,0.12);
          border-color: var(--gold);
          transform: scale(1.08);
        }

        @media (max-width: 768px) {
          :root { --card-w: 240px; --card-h: 175px; }
          .lb-arrow { display: none; }
          .gallery-section { padding: 80px 0 70px; }
        }
        @media (max-width: 480px) {
          :root { --card-w: 185px; --card-h: 145px; }
        }
      `}</style>

      <section className="gallery-section" id="gallery">
        <div className="gallery-glow" />
        <div className="gallery-topline" />

        <div className="gallery-inner">

          {/* Header */}
          <div className="gallery-header">
            <div className="gallery-eyebrow">
              <span className="line" />
              Photo Gallery
              <span className="line" />
            </div>
            <h2 className="gallery-title">Our <em>Moments</em></h2>
            <div className="gallery-divider">
              <span className="rule" />
              <div className="diamond" />
              <span className="rule rule-r" />
            </div>
            <p className="gallery-subtitle">
              Serenity captured — each moment a testament to your transformation
            </p>
          </div>

          {/* Two auto-scrolling rows */}
          <div className="marquee-viewport">
            <MarqueeRow images={ROW_1} reverse={false} onImageClick={openLightbox} />
            <MarqueeRow images={ROW_2} reverse={true}  onImageClick={openLightbox} />
          </div>



        </div>
      </section>

      {lightboxImg && (
        <Lightbox
          image={lightboxImg}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
};

export default GallerySection;