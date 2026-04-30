const instagramPosts = [
  { id: 1, src: 'https://picsum.photos/seed/ig1/400/400', likes: '1.2K', caption: 'Unwind & glow ✨' },
  { id: 2, src: 'https://picsum.photos/seed/ig2/400/400', likes: '987', caption: 'Your calm awaits 🌿' },
  { id: 3, src: 'https://picsum.photos/seed/ig3/400/400', likes: '2.1K', caption: 'Stone therapy session 🪨' },
  { id: 4, src: 'https://picsum.photos/seed/ig4/400/400', likes: '754', caption: 'Glow from within 🌸' },
  { id: 5, src: 'https://picsum.photos/seed/ig5/400/400', likes: '1.8K', caption: 'Luxury facials ✦' },
  { id: 6, src: 'https://picsum.photos/seed/ig6/400/400', likes: '1.4K', caption: 'Aromatherapy bliss 💐' },
];

const InstagramSection = () => {
  return (
    <>
      <style>{`
        .instagram-section {
          background: #fff;
          padding: 100px 0;
        }
        .instagram-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .instagram-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .instagram-handle {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 16px;
          font-weight: 700;
          margin-top: 8px;
          cursor: pointer;
        }

        .instagram-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }
        .ig-post {
          position: relative;
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
        }
        .ig-post img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .ig-post:hover img { transform: scale(1.1); }
        .ig-overlay {
          position: absolute;
          inset: 0;
          background: rgba(26,74,46,0);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: background 0.4s;
        }
        .ig-post:hover .ig-overlay {
          background: rgba(26,74,46,0.6);
        }
        .ig-likes {
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.3s ease;
        }
        .ig-caption {
          color: rgba(255,255,255,0.85);
          font-size: 12px;
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.3s ease 0.05s;
          text-align: center;
          padding: 0 8px;
        }
        .ig-post:hover .ig-likes,
        .ig-post:hover .ig-caption {
          opacity: 1;
          transform: translateY(0);
        }

        .instagram-cta {
          text-align: center;
          margin-top: 36px;
        }
        .ig-follow-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
          color: #fff;
          padding: 14px 36px;
          border-radius: 40px;
          font-size: 15px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: opacity 0.3s, transform 0.3s;
          box-shadow: 0 8px 25px rgba(220,39,67,0.3);
        }
        .ig-follow-btn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .instagram-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 500px) {
          .instagram-grid { grid-template-columns: repeat(2, 1fr); }
          .instagram-section { padding: 70px 0; }
        }
      `}</style>

      <section className="instagram-section">
        <div className="instagram-inner">
          <div className="instagram-header">
            <div className="section-tag">Instagram Feed</div>
            <h2 className="section-title">Stay Connected</h2>
            <div className="instagram-handle">📸 @seronovaspa</div>
          </div>

          <div className="instagram-grid">
            {instagramPosts.map(post => (
              <div className="ig-post" key={post.id}>
                <img src={post.src} alt={post.caption} />
                <div className="ig-overlay">
                  <div className="ig-likes">♥ {post.likes}</div>
                  <div className="ig-caption">{post.caption}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="instagram-cta">
            <button className="ig-follow-btn">
              📸 Follow Us on Instagram
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstagramSection;
