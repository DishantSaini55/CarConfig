import { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Electric from './pages/Electric';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showBooking, setShowBooking] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleBookClick = (car) => {
    setSelectedCar(car);
    setShowBooking(true);
  };

  const handleBookingClose = () => {
    setShowBooking(false);
    setSelectedCar(null);
  };

  const renderPage = () => {
    switch (activeSection) {
      case 'home':
        return <Home onBookClick={handleBookClick} showBookingForm={() => { setActiveSection('contact'); setShowBooking(false); }} />;
      case 'collection':
        return <Collection onBookClick={handleBookClick} />;
      case 'electric':
        return <Electric onBookClick={handleBookClick} />;
      case 'services':
        return <Services showBookingForm={() => setShowBooking(true)} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onBookClick={handleBookClick} showBookingForm={() => setShowBooking(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="pt-0">
        {renderPage()}
      </main>

      <a
        href="https://wa.me/919876543210?text=Hi, I'm interested in luxury car rental"
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-dark-950 shadow-lg hover:shadow-2xl hover:shadow-gold-400/50 transition z-40 animate-bounce"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {showBooking && (
        <div className="fixed inset-0 bg-dark-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="glass rounded-xl max-w-md w-full p-8 animate-slideUp">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-2xl font-bold">Quick Booking</h2>
              <button
                onClick={handleBookingClose}
                className="text-gold-400 hover:text-gold-300 transition"
              >
                <X size={24} />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const carName = selectedCar?.name || 'luxury car';
                const message = `Hi, I'd like to book the ${carName}. Please confirm availability.`;
                window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`);
                handleBookingClose();
              }}
              className="space-y-4"
            >
              {selectedCar && (
                <div className="glass p-4 rounded-lg mb-4">
                  <p className="text-sm text-silver-400">Selected Car</p>
                  <p className="font-semibold text-gold-400">{selectedCar.name}</p>
                  <p className="text-sm">₹{selectedCar.price}/day</p>
                </div>
              )}

              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-2 bg-dark-900 border border-gold-600 rounded-lg text-white placeholder-silver-400 focus:outline-none focus:border-gold-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-2 bg-dark-900 border border-gold-600 rounded-lg text-white placeholder-silver-400 focus:outline-none focus:border-gold-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-2 bg-dark-900 border border-gold-600 rounded-lg text-white placeholder-silver-400 focus:outline-none focus:border-gold-400"
              />

              <input
                type="date"
                required
                className="w-full px-4 py-2 bg-dark-900 border border-gold-600 rounded-lg text-white focus:outline-none focus:border-gold-400"
              />

              <input
                type="date"
                required
                className="w-full px-4 py-2 bg-dark-900 border border-gold-600 rounded-lg text-white focus:outline-none focus:border-gold-400"
              />

              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-gold-400/50 transition"
              >
                Book on WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
