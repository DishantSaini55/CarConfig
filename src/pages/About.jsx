import { CheckCircle } from 'lucide-react';

export default function About() {
  const values = [
    { title: 'Excellence', description: 'Premium quality in every vehicle and service' },
    { title: 'Trust', description: 'Reliability you can depend on' },
    { title: 'Elegance', description: 'Sophistication in every detail' },
    { title: 'Service', description: '24/7 dedicated customer support' },
  ];

  return (
    <div className="space-y-20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl font-bold mb-4">About Rana Luxury</h2>
          <p className="text-silver-400 text-lg">Delhi NCR's Most Trusted Luxury Car Rental Provider</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="font-display text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-silver-300 mb-4 leading-relaxed">
              Founded with a vision to redefine luxury transportation in Delhi NCR, Rana Luxury Car Collection has established itself as the premier choice for discerning clients who demand nothing but the best.
            </p>
            <p className="text-silver-300 mb-4 leading-relaxed">
              With over a decade of excellence in the luxury automotive industry, we've served thousands of satisfied clients across weddings, corporate events, and special occasions.
            </p>
            <p className="text-silver-300 leading-relaxed">
              Our commitment to pristine vehicles, professional service, and customer satisfaction makes us the trusted partner for your most important journeys.
            </p>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Luxury car showroom"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-950/50 to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, i) => (
            <div key={i} className="glass p-8 rounded-xl text-center hover:border-gold-400 transition">
              <CheckCircle size={32} className="mx-auto mb-4 text-gold-400" />
              <h4 className="font-display text-xl font-semibold mb-2">{value.title}</h4>
              <p className="text-silver-400">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-xl text-center">
            <p className="font-display text-4xl font-bold text-gold-400 mb-2">10+</p>
            <p className="text-silver-400">Years of Excellence</p>
          </div>
          <div className="glass p-8 rounded-xl text-center">
            <p className="font-display text-4xl font-bold text-gold-400 mb-2">5000+</p>
            <p className="text-silver-400">Happy Customers</p>
          </div>
          <div className="glass p-8 rounded-xl text-center">
            <p className="font-display text-4xl font-bold text-gold-400 mb-2">150+</p>
            <p className="text-silver-400">Premium Vehicles</p>
          </div>
        </div>
      </div>
    </div>
  );
}
