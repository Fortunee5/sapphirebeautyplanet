const BlogSection = () => {
  const posts = [
    {
      tag: 'Wellness',
      date: 'Jan 12, 2026',
      title: 'The Art of True Rest: Why Your Body Needs More Than Sleep',
      excerpt: 'In our always-on world, real rest goes beyond closing your eyes. Discover the five pillars of holistic rest and how a spa routine can anchor each one.',
      img: 'https://picsum.photos/seed/blog1/600/400',
      readTime: '5 min read',
    },
    {
      tag: 'Skincare',
      date: 'Jan 5, 2026',
      title: '10 Signs Your Skin Is Crying Out for a Professional Facial',
      excerpt: 'From persistent dullness to unexpected breakouts, your skin speaks to you. Learn how to listen — and what your next step should be.',
      img: 'https://picsum.photos/seed/blog2/600/400',
      readTime: '4 min read',
    },
    {
      tag: 'Beauty',
      date: 'Dec 28, 2025',
      title: 'Hot Stone Therapy: Ancient Wisdom Meets Modern Luxury',
      excerpt: 'This centuries-old treatment is more than a trend. Explore the science behind hot stone massage and why it remains one of our most requested services.',
      img: 'https://picsum.photos/seed/blog3/600/400',
      readTime: '6 min read',
    },
  ];

  return (
    <>
      <style>{`
        .blog-section {
          background: var(--off-white);
          padding: 100px 0;
        }
        .blog-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .blog-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 48px;
          flex-wrap: wrap;
          gap: 20px;
        }
        .blog-header-left {}
        .blog-see-all {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--green-accent);
          font-size: 14px;
          font-weight: 600;
          border-bottom: 2px solid var(--green-light);
          padding-bottom: 2px;
          transition: all 0.3s;
          cursor: pointer;
          background: none;
          border-top: none;
          border-left: none;
          border-right: none;
        }
        .blog-see-all:hover { color: var(--green-dark); }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .blog-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(26,74,46,0.07);
          transition: all 0.4s ease;
          cursor: pointer;
        }
        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(26,74,46,0.14);
        }
        .blog-card-img-wrap {
          overflow: hidden;
          height: 220px;
        }
        .blog-card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .blog-card:hover .blog-card-img-wrap img {
          transform: scale(1.08);
        }
        .blog-card-body {
          padding: 24px;
        }
        .blog-card-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }
        .blog-card-tag {
          background: var(--green-pale);
          color: var(--green-accent);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 20px;
        }
        .blog-card-date {
          font-size: 12px;
          color: var(--text-light);
        }
        .blog-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 19px;
          font-weight: 600;
          color: var(--text-dark);
          line-height: 1.4;
          margin-bottom: 12px;
        }
        .blog-card-excerpt {
          font-size: 13.5px;
          color: var(--text-light);
          line-height: 1.75;
          margin-bottom: 20px;
        }
        .blog-card-read {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .read-more {
          font-size: 13px;
          font-weight: 600;
          color: var(--green-accent);
          display: flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.2s;
        }
        .blog-card:hover .read-more { gap: 10px; }
        .read-time {
          font-size: 12px;
          color: var(--text-light);
        }

        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
          .blog-grid .blog-card:last-child { grid-column: span 2; max-width: 420px; justify-self: center; }
        }
        @media (max-width: 600px) {
          .blog-grid { grid-template-columns: 1fr; }
          .blog-grid .blog-card:last-child { grid-column: span 1; max-width: 100%; }
          .blog-section { padding: 70px 0; }
        }
      `}</style>

      <section className="blog-section" id="blog">
        <div className="blog-inner">
          <div className="blog-header">
            <div className="blog-header-left">
              <div className="section-tag">From The Blog</div>
              <h2 className="section-title">Latest Insights</h2>
            </div>
            <button className="blog-see-all">View All Articles →</button>
          </div>
          <div className="blog-grid">
            {posts.map((post, i) => (
              <div className="blog-card" key={i}>
                <div className="blog-card-img-wrap">
                  <img src={post.img} alt={post.title} />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-card-tag">{post.tag}</span>
                    <span className="blog-card-date">{post.date}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-read">
                    <span className="read-more">Read More →</span>
                    <span className="read-time">⏱ {post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
