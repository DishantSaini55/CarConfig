import { Heart, Briefcase, Calendar, Zap, User } from 'lucide-react';

export default function Services({ showBookingForm }) {
  const services = [
    {
      icon: Heart,
      name: 'Wedding Services',
      description: 'Make your special day unforgettable',
      features: ['Bridal car with decoration', 'Guest transportation', 'Convoy arrangements', 'Professional drivers'],
    },
    {
      icon: Briefcase,
      name: 'Corporate Rentals',
      description: 'Professional transportation for executives',
      features: ['Flexible billing', 'Multiple car options', 'On-demand bookings', 'Account management'],
    },
    {
      icon: Calendar,
      name: 'Event Services',
      description: 'Perfect for any celebration',
      features: ['Fleet coordination', 'Special packages', 'VIP service', 'Event support'],
    },
    {
      icon: Zap,
      name: 'Self-Drive',
      description: 'Drive at your own pace',
      features: ['Insurance included', '24/7 roadside support', 'GPS navigation', 'Fuel top-up coverage'],
    },
    {
      icon: User,
      name: 'Chauffeur Service',
      description: 'Sit back and relax',
      features: ['Trained professionals', 'On-time guarantee', 'Premium comfort', 'Discretion assured'],
    },
    {
      icon: Calendar,
      name: 'Long-term Leasing',
      description: 'Extended rental periods',
      features: ['Monthly rates', 'Maintenance included', 'Vehicle swap options', 'Flexible terms'],
    },
  ];

  return (
    <div className="space-y-12 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-silver-400 text-lg">Tailored luxury solutions for every occasion</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const IconComponent = service.icon;
            return (
              <div key={i} className="glass p-8 rounded-xl hover:border-gold-400 transition group">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-gold-400/50 transition">
                  <IconComponent size={32} className="text-dark-950" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">{service.name}</h3>
                <p className="text-silver-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="text-sm text-silver-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gold-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={showBookingForm}
                  className="w-full px-4 py-2 border border-gold-400 text-gold-400 rounded-lg hover:bg-gold-400 hover:text-dark-950 transition font-semibold"
                >
                  Book Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
