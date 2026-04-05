import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carType: '',
    pickupDate: '',
    dropoffDate: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm interested in booking a ${formData.carType || 'luxury car'}. My details: Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`);
    setFormData({ name: '', email: '', phone: '', carType: '', pickupDate: '', dropoffDate: '', message: '' });
  };

  return (
    <div className="space-y-12 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-silver-400 text-lg">Get in touch for instant bookings and inquiries</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass p-8 rounded-xl">
              <h3 className="font-display text-2xl font-semibold mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-dark-950" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Call Us</p>
                    <a href="tel:+919876543210" className="text-gold-400 hover:text-gold-300">+91 98765 43210</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-dark-950" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:info@ranacars.com" className="text-gold-400 hover:text-gold-300">info@ranacars.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-dark-950" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-silver-400">Delhi NCR, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-xl">
              <a
                href="https://wa.me/919876543210?text=Hi, I'm interested in luxury car rental"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-gold-400/50 transition"
              >
                <Send size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-4">
            <h3 className="font-display text-2xl font-semibold mb-6">Quick Booking</h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-900 border border-gold-600 rounded-lg text-white placeholder-silver-400 focus:outline-none focus:border-gold-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-900 border border-gold-600 rounded-lg text-white placeholder-silver-400 focus:outline-none focus:border-gold-400"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-900 border border-gold-600 rounded-lg text-white placeholder-silver-400 focus:outline-none focus:border-gold-400"
            />

            <select
              name="carType"
              value={formData.carType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-900 border border-gold-600 rounded-lg text-white focus:outline-none focus:border-gold-400"
            >
              <option value="">Select Car Type</option>
              <option value="Luxury Sedan">Luxury Sedan</option>
              <option value="Premium SUV">Premium SUV</option>
              <option value="Ultra Luxury">Ultra Luxury</option>
              <option value="Electric Vehicle">Electric Vehicle</option>
            </select>

            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-900 border border-gold-600 rounded-lg text-white focus:outline-none focus:border-gold-400"
            />

            <input
              type="date"
              name="dropoffDate"
              value={formData.dropoffDate}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-900 border border-gold-600 rounded-lg text-white focus:outline-none focus:border-gold-400"
            />

            <textarea
              name="message"
              placeholder="Special Requirements"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 bg-dark-900 border border-gold-600 rounded-lg text-white placeholder-silver-400 focus:outline-none focus:border-gold-400"
            />

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-gold-400/50 transition"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
