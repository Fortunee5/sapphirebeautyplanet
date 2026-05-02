import { useState } from 'react';

const faqs = [
  {
    q: 'What is Sapphire Beauty Planet?',
    a: 'Sapphire Beauty Planet is a premier luxury wellness and beauty spa offering a full range of holistic treatments — from therapeutic massages and luxury facials to body wraps and nail care. We are committed to your total wellbeing, beauty, and relaxation.',
  },
  {
    q: 'Who is Sapphire Beauty Planet for?',
    a: 'Everyone is welcome at Sapphire Beauty Planet! Whether you are treating yourself to some well-deserved self-care, preparing for a special occasion, recovering from stress and burnout, or simply looking to maintain a consistent wellness routine, we have a treatment for you.',
  },
  {
    q: 'What can I expect during my first visit?',
    a: 'You\'ll be warmly welcomed by our front desk team who will guide you through a brief wellness consultation. Your therapist will then walk you through your selected treatment, answer any questions, and ensure you are completely comfortable before beginning.',
  },
  {
    q: 'How long do sessions typically last?',
    a: 'Session durations vary by treatment. Most massages run between 60 and 90 minutes, facials between 45 and 60 minutes, and full spa packages can run up to 3 hours. We recommend arriving 10–15 minutes early to complete your consultation form.',
  },
  {
    q: 'Do I need to book in advance?',
    a: 'While we do accept walk-ins based on availability, we strongly recommend booking in advance to secure your preferred time slot and therapist. You can easily book via our website booking form, WhatsApp, or by calling any of our locations.',
  },
  {
    q: 'What products do you use in your treatments?',
    a: 'We use premium, skin-safe, and cruelty-free botanical products sourced from trusted wellness brands. All our products are carefully selected for their efficacy, safety, and luxurious quality. If you have allergies, please inform us when booking.',
  },
  {
    q: 'What should I wear to my appointment?',
    a: 'Come as you are! For massage treatments, you will be provided with comfortable spa wraps and towels. For facial and nail services, your regular clothes are perfectly fine. We\'ll ensure you are fully comfortable throughout your session.',
  },
  {
    q: 'Do you offer group or corporate wellness packages?',
    a: 'Absolutely! We offer bespoke group packages for birthdays, bridal parties, corporate wellness days, and team retreats. Contact us for a custom quote and we\'ll create an unforgettable experience tailored to your group\'s needs.',
  },
  {
    q: 'Is there a loyalty or membership programme?',
    a: 'Yes! Our Sapphire Beauty Planet Wellness Membership gives you discounted rates, priority booking, monthly treatment credits, and exclusive member-only offers. Ask our front desk team about joining on your next visit.',
  },
  {
    q: 'How do I stay updated on new services and promotions?',
    a: 'Follow us on Instagram @sapphirebeautyplanet, join our WhatsApp community via the number on our contact page, and subscribe to our newsletter for weekly wellness tips, new service launches, and exclusive seasonal promotions.',
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className={`faq-item ${isOpen ? 'open' : ''}`}>
    <button className="faq-question" onClick={onToggle}>
      <span>{faq.q}</span>
      <span className="faq-icon">{isOpen ? '−' : '+'}</span>
    </button>
    <div className="faq-answer-wrap" style={{ maxHeight: isOpen ? '300px' : '0' }}>
      <div className="faq-answer">{faq.a}</div>
    </div>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const col1 = faqs.slice(0, 5);
  const col2 = faqs.slice(5);

  return (
    <>
      <style>{`
        .faq-section {
          background: var(--off-white);
          padding: 100px 0;
        }
        .faq-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .faq-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 60px;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          align-items: start;
        }
        .faq-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-item {
          background: #fff;
          border: 1px solid #e8e4f8;
          border-radius: 14px;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .faq-item.open {
          border-color: #9b84d8;
          box-shadow: 0 4px 20px rgba(30, 18, 74, 0.08);
        }
        .faq-question {
          width: 100%;
          background: none;
          border: none;
          padding: 20px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          cursor: pointer;
          text-align: left;
          font-size: 15px;
          font-weight: 600;
          color: var(--text-dark);
          transition: color 0.2s;
          line-height: 1.4;
        }
        .faq-item.open .faq-question {
          color: #1e124a;
        }
        .faq-icon {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          background: #e8e4f8;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 400;
          color: #4b2dab;
          transition: background 0.3s, color 0.3s;
        }
        .faq-item.open .faq-icon {
          background: #1e124a;
          color: #fff;
        }
        .faq-answer-wrap {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .faq-answer {
          padding: 0 22px 20px;
          font-size: 14px;
          color: var(--text-mid);
          line-height: 1.8;
        }

        .faq-footer {
          text-align: center;
          margin-top: 48px;
        }
        .faq-footer p {
          font-size: 15px;
          color: var(--text-light);
          margin-bottom: 16px;
        }
        .faq-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #1e124a;
          color: #fff;
          padding: 14px 32px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 6px 20px rgba(30, 18, 74, 0.2);
          text-decoration: none;
        }
        .faq-contact-btn:hover {
          background: #4b2dab;
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .faq-section { padding: 70px 0; }
        }
      `}</style>

      <section className="faq-section" id="faq">
        <div className="faq-inner">
          <div className="faq-header">
            <div className="section-tag">FAQ</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '15px', lineHeight: '1.7' }}>
              Everything you need to know about visiting Sapphire Beauty Planet
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq-col">
              {col1.map((faq, i) => (
                <FAQItem
                  key={i}
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
            <div className="faq-col">
              {col2.map((faq, i) => (
                <FAQItem
                  key={i + 5}
                  faq={faq}
                  isOpen={openIndex === i + 5}
                  onToggle={() => setOpenIndex(openIndex === i + 5 ? null : i + 5)}
                />
              ))}
            </div>
          </div>

          <div className="faq-footer">
            <p>Still have questions? We'd love to hear from you.</p>
            <a href="#contact" className="faq-contact-btn">Get in Touch →</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
