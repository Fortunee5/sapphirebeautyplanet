import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Chisom Adeyemi',
    role: 'Regular Client',
    avatar: '👩🏾',
    rating: 5,
    text: 'Sapphire Beauty Planet is absolutely my happy place. The hot stone massage I had last month completely melted away months of stress. The therapists are incredibly skilled and attentive. I leave every single time feeling like a brand new person.',
  },
  {
    name: 'Tunde Bakare',
    role: 'Monthly Member',
    avatar: '👨🏾',
    rating: 5,
    text: 'I was skeptical about spa treatments at first, but after my first full body massage at Sapphire Beauty Planet, I was completely converted. The atmosphere is so peaceful, the staff so professional. It\'s become my monthly non-negotiable wellness ritual.',
  },
  {
    name: 'Adaeze Okonkwo',
    role: 'Loyal Client',
    avatar: '👩🏾‍🦱',
    rating: 5,
    text: 'The luxury facial here transformed my skin within three sessions. My complexion has never looked this radiant and even. The team took time to understand my skin type and curated a perfect treatment. I recommend Sapphire Beauty Planet to everyone I know.',
  },
  {
    name: 'Emeka Nwosu',
    role: 'Corporate Wellness',
    avatar: '👨🏿',
    rating: 5,
    text: 'We booked Sapphire Beauty Planet for our company wellness day and it was phenomenal. Every single team member left feeling refreshed and revitalised. The organisation and professionalism from the Sapphire Beauty Planet team was outstanding from start to finish.',
  },
  {
    name: 'Folake Abiodun',
    role: 'Bridal Client',
    avatar: '👰🏾',
    rating: 5,
    text: 'I came to Sapphire Beauty Planet for my pre-wedding glow package and the results were nothing short of extraordinary. My skin was absolutely luminous on my big day. The team made me feel like royalty throughout the entire experience. Forever grateful!',
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .testimonials-section {
          background: #1e124a;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }
        .testimonials-section::before {
          content: '"';
          position: absolute;
          top: -40px;
          left: 5%;
          font-family: 'Playfair Display', serif;
          font-size: 300px;
          color: rgba(255,255,255,0.03);
          line-height: 1;
          pointer-events: none;
        }
        .testimonials-inner {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .testimonials-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--gold-light);
          margin-bottom: 16px;
        }
        .testimonials-tag::before, .testimonials-tag::after {
          content: '';
          display: block;
          width: 24px; height: 1px;
          background: var(--gold-light);
        }
        .testimonials-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 3.5vw, 44px);
          color: #fff;
          margin-bottom: 56px;
        }

        .testimonial-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 48px 52px;
          transition: opacity 0.5s ease, transform 0.5s ease;
          backdrop-filter: blur(4px);
        }
        .testimonial-stars {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin-bottom: 24px;
        }
        .star { color: var(--gold); font-size: 20px; }
        .testimonial-text {
          font-family: 'Playfair Display', serif;
          font-size: clamp(16px, 1.8vw, 20px);
          font-style: italic;
          color: rgba(255,255,255,0.85);
          line-height: 1.8;
          margin-bottom: 32px;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }
        .testimonial-avatar {
          width: 52px;
          height: 52px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          border: 2px solid rgba(255,255,255,0.2);
        }
        .testimonial-author-name {
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          text-align: left;
        }
        .testimonial-author-role {
          font-size: 12px;
          color: rgba(255,255,255,0.5);
          text-align: left;
          margin-top: 2px;
        }

        .testimonial-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 32px;
        }
        .testimonial-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }
        .testimonial-dot.active {
          background: var(--gold);
          width: 24px;
          border-radius: 4px;
        }
        .testimonial-navs {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 24px;
        }
        .testimonial-nav {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.25);
          background: transparent;
          color: rgba(255,255,255,0.7);
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        .testimonial-nav:hover {
          border-color: var(--gold);
          color: var(--gold);
        }

        @media (max-width: 600px) {
          .testimonial-card { padding: 32px 24px; }
          .testimonials-section { padding: 70px 0; }
        }
      `}</style>

      <section className="testimonials-section">
        <div className="testimonials-inner">
          <div className="testimonials-tag">Inspiration</div>
          <h2 className="testimonials-title">What Our Clients Say</h2>

          <div className="testimonial-card">
            <div className="testimonial-stars">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="testimonial-text">"{testimonials[active].text}"</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{testimonials[active].avatar}</div>
              <div>
                <div className="testimonial-author-name">{testimonials[active].name}</div>
                <div className="testimonial-author-role">{testimonials[active].role}</div>
              </div>
            </div>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
          <div className="testimonial-navs">
            <button
              className="testimonial-nav"
              onClick={() => setActive(prev => (prev - 1 + testimonials.length) % testimonials.length)}
            >←</button>
            <button
              className="testimonial-nav"
              onClick={() => setActive(prev => (prev + 1) % testimonials.length)}
            >→</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
