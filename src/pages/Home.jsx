import { Star, TrendingUp } from 'lucide-react';
import CarCard from '../components/CarCard';

export default function Home({ onBookClick, showBookingForm }) {
  const featuredCars = [
    { id: 1, name: 'Mercedes-AMG', brand: 'Mercedes', model: 'G63', price: '15000', luxury: 'Ultra Luxury', image: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=1600', features: ['5 Seats', 'AWD'] },
    { id: 2, name: 'BMW M5', brand: 'BMW', model: 'M5', price: '12000', luxury: 'Elite', image: 'https://images.pexels.com/photos/3624464/pexels-photo-3624464.jpeg?auto=compress&cs=tinysrgb&w=1600', features: ['4 Seats', 'Automatic'] },
    { id: 3, name: 'Audi A8', brand: 'Audi', model: 'A8 L', price: '11000', luxury: 'Elite', image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1600', features: ['5 Seats', 'Automatic'] },
  ];

  const testimonials = [
    { name: 'Arjun Sharma', rating: 5, text: 'Exceptional service and pristine luxury cars. Perfect for my wedding!' },
    { name: 'Priya Kapoor', rating: 5, text: 'The attention to detail is extraordinary. Highly recommend Rana Luxury!' },
    { name: 'Rohit Verma', rating: 5, text: 'Professional drivers and immaculate vehicles. Best in Delhi NCR!' },
  ];

  return (
    <div className="space-y-20">
      <section className="relative min-h-screen flex items-center justify-center bg-dark-900 overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/305904/pexels-photo-305904.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/70 to-dark-950/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 space-y-8 animate-slideUp">
          <h1 className="font-display text-6xl sm:text-7xl font-bold leading-tight">
            <span className="gradient-gold">Drive Luxury</span>
            <br />
            <span className="text-white">Arrive in Style</span>
          </h1>

          <p className="text-xl sm:text-2xl text-silver-300">
            Experience the pinnacle of automotive excellence with Rana Luxury Car Collection
          </p>

          <p className="text-gold-400 font-display font-semibold text-lg">
            Delhi NCR's Premier Luxury Car Rental Service
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button
              onClick={showBookingForm}
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
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl font-bold mb-4">Featured Luxury Collection</h2>
          <p className="text-silver-400 text-lg">Handpicked excellence for your special moments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} onBookClick={() => onBookClick(car)} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-xl text-center hover:border-gold-400 transition">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
              <Star size={32} className="text-dark-950" />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-2">Premium Fleet</h3>
            <p className="text-silver-400">Carefully curated collection of world's finest luxury automobiles</p>
          </div>

          <div className="glass p-8 rounded-xl text-center hover:border-gold-400 transition">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
              <TrendingUp size={32} className="text-dark-950" />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-2">Expert Service</h3>
            <p className="text-silver-400">Professional drivers and concierge service for seamless experience</p>
          </div>

          <div className="glass p-8 rounded-xl text-center hover:border-gold-400 transition">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
              <Star size={32} className="text-dark-950" />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-2">VIP Experience</h3>
            <p className="text-silver-400">Tailored packages for weddings, events, and corporate requirements</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-silver-400 text-lg">Trusted by Delhi NCR's elite clientele</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <div key={i} className="glass p-8 rounded-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(test.rating)].map((_, j) => (
                  <Star key={j} size={20} className="fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-silver-300 mb-4 italic">"{test.text}"</p>
              <p className="font-display font-semibold text-gold-400">{test.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
