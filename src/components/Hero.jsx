import { ChevronDown } from 'lucide-react';

export default function Hero({ onBookClick }) {
  return (
    <div className="relative w-full h-screen overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/305904/pexels-photo-305904.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/70 to-dark-950/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-6 animate-fadeIn">
          <h1 className="font-display text-5xl sm:text-7xl font-bold leading-tight">
            <span className="gradient-gold">Luxury Redefined</span>
          </h1>

          <p className="text-xl sm:text-2xl text-silver-300 max-w-2xl mx-auto">
            Experience the pinnacle of automotive excellence with Rana Luxury Car Collection
          </p>

          <p className="text-gold-400 font-display font-semibold text-lg">
            Delhi NCR's Premier Luxury Car Rental Service
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={onBookClick}
              className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 font-display font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-gold-400/50 transition duration-300 transform hover:scale-105"
            >
              Book Your Dream Ride
            </button>
            <a
              href="https://wa.me/919876543210?text=Hi, I'm interested in luxury car rental"
              className="px-8 py-4 border-2 border-gold-400 text-gold-400 font-semibold rounded-lg hover:bg-gold-400 hover:text-dark-950 transition duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} className="text-gold-400" />
        </div>
      </div>
    </div>
  );
}
