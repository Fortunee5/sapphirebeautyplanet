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

    // Send to WhatsApp
    const msg = `🌿 *NEW SPA BOOKING – Sapphire Beauty Planet*\n\n` +
      `👤 *Name:* ${form.fullName}\n` +
      `📞 *Phone:* ${form.phone}\n` +
      `📍 *Address:* ${form.address}\n` +
      `💆 *Service:* ${form.service}\n` +
      `📅 *Date:* ${form.date}\n` +
      `🕐 *Time:* ${form.time}\n` +
      `📝 *Notes:* ${form.notes || 'None'}`;

    const waUrl = `https://wa.me/2348038794733?text=${encodeURIComponent(msg)}`;

    // Save to admin
    onSubmit({ ...form, timestamp: new Date().toISOString() });

    // Open WhatsApp
    window.open(waUrl, '_blank');

    setSubmitted(true);
  };

  const today = new Date().toISOString().split('T')[0];

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.65);
          z-index: 8000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: modalFadeIn 0.3s ease;
          backdrop-filter: blur(4px);
        }
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .modal-box {
          background: #fff;
          border-radius: 24px;
          width: 100%;
          max-width: 560px;
          max-height: 90vh;
          overflow-y: auto;
          animation: modalSlideUp 0.4s cubic-bezier(0.34, 1.2, 0.64, 1);
          position: relative;
          box-shadow: 0 40px 100px rgba(0,0,0,0.35);
        }
        @keyframes modalSlideUp {
          from { transform: translateY(50px) scale(0.95); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        .modal-header {
          background: var(--green-dark);
          padding: 28px 32px 24px;
          border-radius: 24px 24px 0 0;
          position: relative;
        }
        .modal-close {
          position: absolute;
          top: 16px; right: 16px;
          width: 36px; height: 36px;
          background: rgba(255,255,255,0.15);
          border: none;
          border-radius: 50%;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .modal-close:hover { background: rgba(255,255,255,0.25); }
        .modal-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.12);
          color: var(--gold-light);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 20px;
          margin-bottom: 10px;
        }
        .modal-title {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }
        .modal-subtitle {
          font-size: 13px;
          color: rgba(255,255,255,0.6);
        }

        /* Step indicator */
        .modal-steps {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
        }
        .modal-step-dot {
          width: 28px; height: 28px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 700;
          transition: all 0.3s;
        }
        .modal-step-dot.active {
          background: var(--green-light);
          color: var(--green-dark);
        }
        .modal-step-dot.done {
          background: rgba(255,255,255,0.25);
          color: rgba(255,255,255,0.8);
        }
        .modal-step-dot.inactive {
          background: rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.35);
        }
        .modal-step-line {
          flex: 1; height: 2px;
          background: rgba(255,255,255,0.15);
          border-radius: 2px;
          overflow: hidden;
        }
        .modal-step-line-fill {
          height: 100%;
          background: var(--green-light);
          border-radius: 2px;
          transition: width 0.4s ease;
        }
        .modal-step-label {
          font-size: 11px;
          color: rgba(255,255,255,0.5);
          margin-left: 4px;
        }

        .modal-body {
          padding: 28px 32px 32px;
        }

        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .booking-form-group {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .booking-form-group label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-mid);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .booking-form-group input,
        .booking-form-group select,
        .booking-form-group textarea {
          border: 1.5px solid var(--green-pale);
          border-radius: 10px;
          padding: 13px 16px;
          font-size: 14px;
          font-family: 'Inter', sans-serif;
          color: var(--text-dark);
          background: var(--off-white);
          transition: border-color 0.3s, box-shadow 0.3s;
          outline: none;
          width: 100%;
        }
        .booking-form-group input:focus,
        .booking-form-group select:focus,
        .booking-form-group textarea:focus {
          border-color: var(--green-accent);
          box-shadow: 0 0 0 3px rgba(64,145,108,0.12);
          background: #fff;
        }
        .booking-form-group textarea { resize: vertical; min-height: 80px; }
        .booking-form-group.error input,
        .booking-form-group.error select {
          border-color: #e53e3e;
        }
        .booking-error-msg {
          font-size: 12px;
          color: #e53e3e;
          margin-top: 2px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .modal-footer {
          display: flex;
          gap: 12px;
          padding: 0 32px 28px;
        }
        .modal-back-btn {
          flex: 1;
          padding: 14px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          background: var(--off-white);
          border: 1.5px solid var(--green-pale);
          color: var(--text-mid);
          cursor: pointer;
          transition: all 0.3s;
        }
        .modal-back-btn:hover {
          border-color: var(--green-light);
          color: var(--green-dark);
        }
        .modal-next-btn,
        .modal-submit-btn {
          flex: 2;
          padding: 14px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 700;
          background: var(--green-dark);
          color: #fff;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 6px 20px rgba(26,74,46,0.25);
        }
        .modal-next-btn:hover, .modal-submit-btn:hover {
          background: var(--green-accent);
          transform: translateY(-1px);
        }

        /* Success state */
        .modal-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 48px 32px;
          gap: 16px;
        }
        .success-icon {
          width: 80px; height: 80px;
          background: var(--green-pale);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 40px;
          animation: successPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes successPop {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
        .success-title {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          color: var(--green-dark);
          font-weight: 700;
        }
        .success-desc {
          font-size: 14px;
          color: var(--text-light);
          line-height: 1.7;
          max-width: 380px;
        }
        .success-close-btn {
          background: var(--green-dark);
          color: #fff;
          padding: 14px 36px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          margin-top: 8px;
          transition: all 0.3s;
        }
        .success-close-btn:hover { background: var(--green-accent); }
        .success-summary {
          background: var(--green-pale);
          border-radius: 12px;
          padding: 16px 20px;
          text-align: left;
          width: 100%;
          max-width: 380px;
        }
        .success-summary p {
          font-size: 13px;
          color: var(--text-mid);
          margin-bottom: 4px;
        }
        .success-summary p strong {
          color: var(--green-dark);
        }

        @media (max-width: 600px) {
          .modal-box { max-height: 95vh; border-radius: 20px; }
          .modal-header { padding: 22px 20px 20px; }
          .modal-body { padding: 22px 20px 20px; }
          .modal-footer { padding: 0 20px 22px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal-box" onClick={e => e.stopPropagation()}>

          {submitted ? (
            <>
              <div className="modal-header">
                <button className="modal-close" onClick={handleClose}>✕</button>
                <div className="modal-title">Booking Received!</div>
              </div>
              <div className="modal-success">
                <div className="success-icon">🌿</div>
                <div className="success-title">You're All Set!</div>
                <p className="success-desc">
                  Your booking has been received and sent to our team via WhatsApp. We'll confirm your appointment shortly. Get ready to unwind!
                </p>
                <div className="success-summary">
                  <p><strong>Name:</strong> {form.fullName}</p>
                  <p><strong>Service:</strong> {form.service.split(' – ')[0]}</p>
                  <p><strong>Date:</strong> {form.date} at {form.time}</p>
                  <p><strong>Phone:</strong> {form.phone}</p>
                </div>
                <button className="success-close-btn" onClick={handleClose}>
                  Close ✦
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="modal-header">
                <button className="modal-close" onClick={handleClose}>✕</button>
                <div className="modal-header-badge">🌿 Sapphire Beauty Planet</div>
                <div className="modal-title">Book a Session</div>
                <div className="modal-subtitle">
                  {step === 1 ? 'Tell us about yourself' : 'Choose your treatment'}
                </div>
                <div className="modal-steps">
                  <div className={`modal-step-dot ${step >= 1 ? 'active' : 'inactive'}`}>1</div>
                  <div className="modal-step-line">
                    <div className="modal-step-line-fill" style={{ width: step >= 2 ? '100%' : '0%' }} />
                  </div>
                  <div className={`modal-step-dot ${step >= 2 ? 'active' : 'inactive'}`}>2</div>
                </div>
              </div>

              <form className="modal-body" onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="booking-form">
                    <div className={`booking-form-group ${errors.fullName ? 'error' : ''}`}>
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Chisom Adeyemi"
                      />
                      {errors.fullName && <span className="booking-error-msg">{errors.fullName}</span>}
                    </div>
                    <div className={`booking-form-group ${errors.phone ? 'error' : ''}`}>
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                      />
                      {errors.phone && <span className="booking-error-msg">{errors.phone}</span>}
                    </div>
                    <div className={`booking-form-group ${errors.address ? 'error' : ''}`}>
                      <label>Your Address *</label>
                      <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="Your home or office address"
                      />
                      {errors.address && <span className="booking-error-msg">{errors.address}</span>}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="booking-form">
                    <div className={`booking-form-group ${errors.service ? 'error' : ''}`}>
                      <label>Type of Service *</label>
                      <select name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service...</option>
                        {serviceOptions.map((s, i) => (
                          <option key={i} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && <span className="booking-error-msg">{errors.service}</span>}
                    </div>
                    <div className="form-row">
                      <div className={`booking-form-group ${errors.date ? 'error' : ''}`}>
                        <label>Preferred Date *</label>
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          min={today}
                          onChange={handleChange}
                        />
                        {errors.date && <span className="booking-error-msg">{errors.date}</span>}
                      </div>
                      <div className={`booking-form-group ${errors.time ? 'error' : ''}`}>
                        <label>Preferred Time *</label>
                        <select name="time" value={form.time} onChange={handleChange}>
                          <option value="">Select time...</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                          <option value="5:00 PM">5:00 PM</option>
                          <option value="6:00 PM">6:00 PM</option>
                        </select>
                        {errors.time && <span className="booking-error-msg">{errors.time}</span>}
                      </div>
                    </div>
                    <div className="booking-form-group">
                      <label>Additional Notes (optional)</label>
                      <textarea
                        name="notes"
                        value={form.notes}
                        onChange={handleChange}
                        placeholder="Any special requests, allergies, or preferences..."
                      />
                    </div>
                  </div>
                )}
              </form>

              <div className="modal-footer">
                {step === 2 && (
                  <button className="modal-back-btn" onClick={() => setStep(1)}>
                    ← Back
                  </button>
                )}
                {step === 1 && (
                  <button className="modal-next-btn" onClick={handleNext}>
                    Continue →
                  </button>
                )}
                {step === 2 && (
                  <button className="modal-submit-btn" onClick={handleSubmit}>
                    Confirm Booking ✦
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BookingModal;
