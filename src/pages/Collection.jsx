import { useState } from 'react';
import CarCard from '../components/CarCard';

// Import car images
import MercedesBenz from '../Car/Mercedes-Benz.png';
import Audi from '../Car/AUDI.png';
import BMW from '../Car/BMW.png';
import LandRover from '../Car/Land Rover.png';
import Porsche from '../Car/Porsche.png';
import GWagon from '../Car/G-Wagon.png';
import Defender from '../Car/Defender.png';
import Fortuner from '../Car/Fortuner.png';
import RollsRoyce from '../Car/Rolls-Royce.png';
import Thar from '../Car/Thar.png';
import Scorpio from '../Car/Scorpio.png';

export default function Collection({ onBookClick }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allCars = [
    { id: 1, name: 'Mercedes-Benz', brand: 'Mercedes', model: 'S-Class', price: '15000', luxury: 'Ultra Luxury', category: 'luxury', image: MercedesBenz, features: ['5 Seats', 'Automatic'] },
    { id: 2, name: 'BMW M5', brand: 'BMW', model: 'M5', price: '12000', luxury: 'Elite', category: 'luxury', image: BMW, features: ['4 Seats', 'Automatic'] },
    { id: 3, name: 'Audi A8', brand: 'Audi', model: 'A8 L', price: '11000', luxury: 'Elite', category: 'luxury', image: Audi, features: ['5 Seats', 'Automatic'] },
    { id: 4, name: 'Land Rover Range', brand: 'Land Rover', model: 'Range Rover', price: '16000', luxury: 'Ultra Luxury', category: 'suv', image: LandRover, features: ['7 Seats', 'AWD'] },
    { id: 5, name: 'Porsche 911', brand: 'Porsche', model: '911 Turbo', price: '18000', luxury: 'Ultra Luxury', category: 'luxury', image: Porsche, features: ['2 Seats', 'Manual'] },
    { id: 6, name: 'Mercedes G-Wagon', brand: 'Mercedes', model: 'G-Class', price: '14000', luxury: 'Elite', category: 'suv', image: GWagon, features: ['5 Seats', 'Automatic'] },
    { id: 7, name: 'Land Rover Defender', brand: 'Land Rover', model: 'Defender', price: '10000', luxury: 'Premium', category: 'suv', image: Defender, features: ['5 Seats', 'Manual'] },
    { id: 8, name: 'Toyota Fortuner', brand: 'Toyota', model: 'Fortuner', price: '8000', luxury: 'Premium', category: 'suv', image: Fortuner, features: ['7 Seats', 'Diesel'] },
    { id: 9, name: 'Rolls-Royce Phantom', brand: 'Rolls-Royce', model: 'Phantom', price: '25000', luxury: 'Ultra Luxury', category: 'luxury', image: RollsRoyce, features: ['5 Seats', 'Automatic'] },
    { id: 10, name: 'Mahindra Thar', brand: 'Mahindra', model: 'Thar', price: '5000', luxury: 'Adventure', category: 'suv', image: Thar, features: ['4 Seats', '4x4'] },
    { id: 11, name: 'Mahindra Scorpio', brand: 'Mahindra', model: 'Scorpio-N', price: '6000', luxury: 'Premium', category: 'suv', image: Scorpio, features: ['7 Seats', 'Diesel'] },
  ];

  const filteredCars = selectedCategory === 'all'
    ? allCars
    : allCars.filter(car => car.category === selectedCategory);

  return (
    <div className="space-y-12 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl font-bold mb-4">Our Collection</h2>
          <p className="text-silver-400 text-lg">Explore our exquisite fleet of luxury automobiles</p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {[
            { id: 'all', label: 'All Cars' },
            { id: 'luxury', label: 'Luxury Sedans' },
            { id: 'suv', label: 'Premium SUVs' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950'
                  : 'glass text-silver-300 hover:border-gold-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} onBookClick={() => onBookClick(car)} />
          ))}
        </div>
      </div>
    </div>
  );
}
