import CarCard from '../components/CarCard';

export default function Electric({ onBookClick }) {
  const evCars = [
    { id: 1, name: 'Tesla Model S', brand: 'Tesla', model: 'Model S Plaid', price: '13000', luxury: 'Elite', image: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=1600', features: ['5 Seats', '660km Range'] },
    { id: 2, name: 'Tesla Model X', brand: 'Tesla', model: 'Model X', price: '14000', luxury: 'Elite', image: 'https://images.pexels.com/photos/3624464/pexels-photo-3624464.jpeg?auto=compress&cs=tinysrgb&w=1600', features: ['7 Seats', '580km Range'] },
    { id: 3, name: 'Tata Nexon EV', brand: 'Tata', model: 'Nexon EV Max', price: '6000', luxury: 'Premium', image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1600', features: ['5 Seats', '440km Range'] },
    { id: 4, name: 'Audi e-tron', brand: 'Audi', model: 'e-tron GT', price: '12000', luxury: 'Elite', image: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=1600', features: ['4 Seats', '487km Range'] },
    { id: 5, name: 'BMW i7', brand: 'BMW', model: 'i7 Luxury', price: '11000', luxury: 'Elite', image: 'https://images.pexels.com/photos/3624464/pexels-photo-3624464.jpeg?auto=compress&cs=tinysrgb&w=1600', features: ['5 Seats', '600km Range'] },
    { id: 6, name: 'Mercedes EQS', brand: 'Mercedes', model: 'EQS 580', price: '12500', luxury: 'Elite', image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1600', features: ['5 Seats', '650km Range'] },
  ];

  return (
    <div className="space-y-12 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl font-bold mb-4">Electric Vehicles</h2>
          <p className="text-silver-400 text-lg">Drive the future with our premium EV collection</p>
          <p className="text-gold-400 font-display text-lg mt-4">Eco-friendly luxury without compromise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {evCars.map((car) => (
            <CarCard key={car.id} car={car} onBookClick={() => onBookClick(car)} />
          ))}
        </div>

        <div className="mt-16 glass p-8 rounded-xl text-center">
          <h3 className="font-display text-2xl font-semibold mb-4">Why Choose Electric?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <p className="text-gold-400 font-semibold mb-2">Zero Emissions</p>
              <p className="text-silver-400">Environmental sustainability with luxury performance</p>
            </div>
            <div>
              <p className="text-gold-400 font-semibold mb-2">Ultra-Quiet Ride</p>
              <p className="text-silver-400">Experience whisper-quiet luxury driving</p>
            </div>
            <div>
              <p className="text-gold-400 font-semibold mb-2">Instant Torque</p>
              <p className="text-silver-400">Thrilling acceleration with electric efficiency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
