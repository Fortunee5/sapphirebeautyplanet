import { useState, useEffect } from 'react';

const serviceOptions = [
  'Full Body Sweedish Massage (60 mins) – ₦45,000, (90 mins) – ₦50,000',
  'Aromatherapy Massage (60 mins) – ₦45,000, (90 mins) – ₦50,000',
  'Deep Tissue Massage  (60 mins) – ₦50,000, (90 mins) –  ₦60,000',
  'Four Hands Massage   (60 mins) – ₦55,000, (90 mins) – ₦60,000',
  'Men\'s Signature Facial  (60 mins) – ₦35,000, (90 mins) – ₦38,000',
  'Women\'s Deluxe Facial  (60 mins) – ₦34,000',
  'Hot Stone Massage  (60 mins) – ₦45,000, (90 mins) – ₦50,000',
  'Lomi Lomi Massage  (60 mins) – ₦70,000',
  'Neck Massage  (60 mins) – ₦30,000',
  'Manicure & Pedicure – ₦31,000',
  'Icing Facials – ₦55,000',
  'Rejuvenating Facials – ₦45,000',
  'Back Cleansing Facials – ₦40,000',
  'Renew Facials – ₦60,000',
  'Vaginal Facials(VFACIAL) – ₦40,000',
  'Deep Cleansing Facial – ₦45,000',
  'Gentle Men Facial – ₦35,000',
  'Brows – ₦27,000',
  'Lip – ₦23,000',
  'Face – ₦32,000',
  'Back – ₦40,000',
  'Legs(Both)(Half/Full) – ₦45,000',
  'Arms(Half/Full) – ₦40,000',
  'Feet (Both) – ₦30,000',
  'Underarm (Both) – ₦28,000',
  'Bikini – ₦40,000',
  'Classic Pedicure – ₦45,000',
  'Spa Pedicure – ₦30,000',
  'Signature Pedicure – ₦40,000',
  'Pedicure & Manicure – ₦38,000',
];

const BookingModal = ({ isOpen, onClose, onSubmit }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    address: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') handleClose(); };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setSubmitted(false);
      setForm({ fullName: '', phone: '', address: '', service: '', date: '', time: '', notes: '' });
      setErrors({});
    }, 400);
  };

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    if (!form.address.trim()) errs.address = 'Address is required';
    if (!form.service) errs.service = 'Please select a service';
    if (!form.date) errs.date = 'Please select a date';
    if (!form.time) errs.time = 'Please select a time';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleNext = () => {
    if (step === 1) {
      const errs = {};
      if (!form.fullName.trim()) errs.fullName = 'Full name is required';
      if (!form.phone.trim()) errs.phone = 'Phone number is required';
      if (!form.address.trim()) errs.address = 'Address is required';
      if (Object.keys(errs).length > 0) { setErrors(errs); return; }
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    const msg = `🌿 *NEW SPA BOOKING – Sapphire Beauty Planet*\n\n` +
      `👤 *Name:* ${form.fullName}\n` +
      `📞 *Phone:* ${form.phone}\n` +
      `📍 *Address:* ${form.address}\n` +
      `💆 *Service:* ${form.service}\n` +
      `📅 *Date:* ${form.date}\n` +
      `🕐 *Time:* ${form.time}\n` +
      `📝 *Notes:* ${form.notes || 'None'}`;

    const waUrl = `https://wa.me/2348038794733?text=${encodeURIComponent(msg)}`;

    onSubmit({ ...form, timestamp: new Date().toISOString() });
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  const today = new Date().toISOString().split('T')[0];

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        :root {
            --primary-deep: #2D3047;
            --accent-purple: #483D8B;
            --light-purple: #E6E6FA;
            --vibrant-purple: #6A5ACD;
            --gold-light: #FFD700;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          backdrop-filter: blur(8px);
          animation: modalFadeIn 0.3s ease;
        }

        .modal-box {
          background: #fff;
          border-radius: 24px;
          width: 100%;
          max-width: 560px;
          max-height: 92vh;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 40px 100px rgba(0,0,0,0.4);
          overflow: hidden;
          animation: modalSlideUp 0.4s cubic-bezier(0.34, 1.2, 0.64, 1);
        }

        .modal-scroll-area {
          overflow-y: auto;
          flex: 1;
          scrollbar-width: thin;
          scrollbar-color: var(--vibrant-purple) transparent;
        }
        .modal-scroll-area::-webkit-scrollbar { width: 6px; }
        .modal-scroll-area::-webkit-scrollbar-thumb { background: #ddd; border-radius: 10px; }

        .modal-header {
          background: var(--primary-deep);
          padding: 28px 32px;
          color: white;
          flex-shrink: 0;
          position: relative;
        }

        .modal-close {
          position: absolute;
          top: 20px; right: 20px;
          width: 32px; height: 32px;
          background: rgba(255,255,255,0.15);
          border: none;
          border-radius: 50%;
          color: #fff;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: 0.2s;
        }
        .modal-close:hover { background: rgba(255,255,255,0.3); }

        .modal-header-badge {
          display: inline-block;
          background: rgba(255,255,255,0.1);
          color: var(--gold-light);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 12px;
        }

        .modal-title { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; }
        .modal-subtitle { font-size: 14px; opacity: 0.7; margin-top: 4px; }

        /* Step Progress Bar */
        .modal-steps { display: flex; align-items: center; gap: 10px; margin-top: 20px; }
        .step-dot { 
          width: 24px; height: 24px; border-radius: 50%; font-size: 11px; 
          display: flex; align-items: center; justify-content: center; font-weight: 800;
          background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.4);
        }
        .step-dot.active { background: var(--vibrant-purple); color: #fff; }
        .step-line { flex: 1; height: 3px; background: rgba(255,255,255,0.1); border-radius: 4px; }
        .step-line-fill { height: 100%; background: var(--vibrant-purple); transition: 0.4s; }

        .modal-body { padding: 32px; }
        
        .booking-form { display: flex; flex-direction: column; gap: 20px; }
        .form-row { display: flex; gap: 16px; }

        .booking-form-group { display: flex; flex-direction: column; gap: 8px; flex: 1; }
        .booking-form-group label {
          font-size: 11px; font-weight: 700; color: #666;
          text-transform: uppercase; letter-spacing: 0.5px;
        }

        .booking-form-group input, 
        .booking-form-group select, 
        .booking-form-group textarea {
          padding: 14px 16px;
          border: 2px solid #f0f0f0;
          border-radius: 12px;
          font-size: 15px;
          background: #fafafa;
          transition: 0.3s;
          outline: none;
        }
        .booking-form-group input:focus, 
        .booking-form-group select:focus {
          border-color: var(--vibrant-purple);
          background: #fff;
          box-shadow: 0 0 0 4px rgba(106, 90, 205, 0.1);
        }
        .booking-error-msg { color: #e53e3e; font-size: 12px; font-weight: 600; }

        /* BOLD BUTTONS SECTION */
        .modal-footer {
          padding: 20px 32px 32px;
          background: #fff;
          display: flex;
          gap: 12px;
          border-top: 1px solid #f0f0f0;
        }

        .modal-footer button {
          height: 56px;
          border-radius: 16px;
          font-size: 15px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex; align-items: center; justify-content: center;
        }

        .modal-back-btn {
          flex: 1;
          background: #fff;
          border: 2px solid var(--light-purple);
          color: var(--accent-purple);
        }

        .modal-next-btn, .modal-submit-btn {
          flex: 2;
          background: linear-gradient(135deg, var(--accent-purple) 0%, var(--vibrant-purple) 100%);
          color: #fff;
          border: none;
          box-shadow: 0 10px 20px rgba(72, 61, 139, 0.3);
        }

        .modal-next-btn:hover, .modal-submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 25px rgba(72, 61, 139, 0.4);
          filter: brightness(1.1);
        }

        .modal-next-btn:active, .modal-submit-btn:active {
          transform: translateY(0);
        }

        /* Responsive Breakpoints */
        @media (max-width: 600px) {
          .modal-overlay { padding: 0; align-items: flex-end; }
          .modal-box { border-radius: 24px 24px 0 0; max-height: 95vh; }
          .modal-header { padding: 24px 24px 20px; }
          .modal-body { padding: 24px; }
          .form-row { flex-direction: column; gap: 20px; }
          .modal-footer { padding: 16px 20px 24px; flex-direction: column-reverse; }
          .modal-footer button { width: 100%; flex: none; }
        }

        @keyframes modalFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalSlideUp { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>

      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal-box" onClick={e => e.stopPropagation()}>
          
          <div className="modal-header">
            <button className="modal-close" onClick={handleClose}>✕</button>
            <div className="modal-header-badge">Sapphire Beauty Planet</div>
            <div className="modal-title">
              {submitted ? "Booking Received!" : "Book a Session"}
            </div>
            {!submitted && (
              <div className="modal-subtitle">
                {step === 1 ? "Please provide your contact details" : "Select your treatment and time"}
              </div>
            )}
            
            {!submitted && (
              <div className="modal-steps">
                <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1</div>
                <div className="step-line">
                  <div className="step-line-fill" style={{ width: step === 2 ? '100%' : '0%' }} />
                </div>
                <div className={`step-dot ${step === 2 ? 'active' : ''}`}>2</div>
              </div>
            )}
          </div>

          <div className="modal-scroll-area">
            <div className="modal-body">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{ fontSize: '64px', marginBottom: '20px' }}>✨</div>
                  <h2 style={{ color: 'var(--accent-purple)', marginBottom: '12px' }}>You're All Set!</h2>
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '24px' }}>
                    Your booking for <strong>{form.service.split(' – ')[0]}</strong> has been sent to our team via WhatsApp. 
                    We'll confirm your appointment shortly!
                  </p>
                  <button 
                    className="modal-submit-btn" 
                    style={{ width: '100%', maxWidth: '240px', margin: '0 auto' }}
                    onClick={handleClose}
                  >
                    Close & Finish
                  </button>
                </div>
              ) : (
                <form onSubmit={e => e.preventDefault()}>
                  {step === 1 ? (
                    <div className="booking-form">
                      <div className="booking-form-group">
                        <label>Full Name *</label>
                        <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="e.g. Chisom Adeyemi" />
                        {errors.fullName && <span className="booking-error-msg">{errors.fullName}</span>}
                      </div>
                      <div className="booking-form-group">
                        <label>Phone Number *</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000" />
                        {errors.phone && <span className="booking-error-msg">{errors.phone}</span>}
                      </div>
                      <div className="booking-form-group">
                        <label>Address *</label>
                        <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Home or office address" />
                        {errors.address && <span className="booking-error-msg">{errors.address}</span>}
                      </div>
                    </div>
                  ) : (
                    <div className="booking-form">
                      <div className="booking-form-group">
                        <label>Type of Service *</label>
                        <select name="service" value={form.service} onChange={handleChange}>
                          <option value="">Choose a treatment...</option>
                          {serviceOptions.map((s, i) => <option key={i} value={s}>{s}</option>)}
                        </select>
                        {errors.service && <span className="booking-error-msg">{errors.service}</span>}
                      </div>
                      
                      <div className="form-row">
                        <div className="booking-form-group">
                          <label>Preferred Date *</label>
                          <input type="date" name="date" min={today} value={form.date} onChange={handleChange} />
                          {errors.date && <span className="booking-error-msg">{errors.date}</span>}
                        </div>
                        <div className="booking-form-group">
                          <label>Preferred Time *</label>
                          <select name="time" value={form.time} onChange={handleChange}>
                            <option value="">Select time...</option>
                            {["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"].map(t => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                          {errors.time && <span className="booking-error-msg">{errors.time}</span>}
                        </div>
                      </div>

                      <div className="booking-form-group">
                        <label>Additional Notes (Optional)</label>
                        <textarea name="notes" value={form.notes} onChange={handleChange} rows="3" placeholder="Special requests or allergies..." />
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>

          {!submitted && (
            <div className="modal-footer">
              {step === 2 && (
                <button className="modal-back-btn" onClick={() => setStep(1)}>
                  ← Back
                </button>
              )}
              <button 
                className={step === 1 ? "modal-next-btn" : "modal-submit-btn"}
                onClick={step === 1 ? handleNext : handleSubmit}
              >
                {step === 1 ? "Continue →" : "Confirm Booking ✦"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookingModal;