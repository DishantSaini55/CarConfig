import { ChevronRight } from 'lucide-react';

export default function CarCard({ car, onBookClick }) {
  return (
    <div className="car-card group overflow-hidden rounded-12px">
      <div className="relative overflow-hidden bg-dark-900 rounded-lg h-64">
        <img
          src={car.image}
          alt={car.name}
          className="car-card-image w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 glass-hover glass rounded-b-lg">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display font-semibold text-lg">{car.name}</h3>
          <span className="px-2 py-1 text-xs bg-gold-600 text-dark-950 rounded-full font-semibold">
            {car.luxury}
          </span>
        </div>

        <p className="text-silver-400 text-sm mb-1">{car.brand} {car.model}</p>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-gold-400 font-display font-bold text-lg">₹{car.price}/day</p>
          </div>
          <div className="flex gap-1 text-xs text-silver-300">
            {car.features.slice(0, 2).map((feat, i) => (
              <span key={i} className="px-2 py-1 bg-dark-900 rounded">
                {feat}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => onBookClick(car)}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-gold-400/50 transition duration-300 group/btn"
        >
          Book Now
          <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition" />
        </button>
      </div>
    </div>
  );
}
