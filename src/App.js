import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyUsSection from './components/WhyUsSection';
import ServicesSection from './components/ServicesSection';
import DailyRitualSection from './components/DailyRitualSection';
import GallerySection from './components/GallerySection';
import BlogSection from './components/BlogSection';
import TestimonialsSection from './components/TestimonialsSection';
import InstagramSection from './components/InstagramSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import AdminPage from './components/AdminPage';
import './index.css';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [bookings, setBookings] = useState([]);

  const handleBookingSubmit = (bookingData) => {
    setBookings(prev => [bookingData, ...prev]);
  };

  if (showAdmin) {
    return (
      <AdminPage
        bookings={bookings}
        onBack={() => setShowAdmin(false)}
      />
    );
  }

  return (
    <>
      <style>{`
        /* Global shared utility styles */
        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--green-accent);
          margin-bottom: 12px;
        }
        .section-tag::before {
          content: '';
          display: block;
          width: 24px;
          height: 2px;
          background: currentColor;
          border-radius: 2px;
        }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.2;
          margin-bottom: 14px;
        }
      `}</style>

      <Navbar onBookNow={() => setBookingOpen(true)} />
      <HeroSection onBookNow={() => setBookingOpen(true)} />
      <AboutSection onBookNow={() => setBookingOpen(true)} />
      <WhyUsSection />
      <ServicesSection onBookNow={() => setBookingOpen(true)} />
      <DailyRitualSection onBookNow={() => setBookingOpen(true)} />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection onBookNow={() => setBookingOpen(true)} />
      <Footer onAdminClick={() => setShowAdmin(true)} />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        onSubmit={handleBookingSubmit}
      />
    </>
  );
}
