import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-gold-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-dark-950">R</span>
              </div>
              <span className="font-display font-bold text-lg">Rana Luxury</span>
            </div>
            <p className="text-silver-400 text-sm">Drive Luxury. Arrive in Style.</p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-gold-400 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-silver-400 text-sm">
              <li><a href="#" className="hover:text-gold-400 transition">Our Collection</a></li>
              <li><a href="#" className="hover:text-gold-400 transition">Services</a></li>
              <li><a href="#" className="hover:text-gold-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-gold-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-gold-400 mb-4">Contact</h4>
            <div className="space-y-3 text-silver-400 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+919876543210" className="hover:text-gold-400 transition">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@ranacars.com" className="hover:text-gold-400 transition">info@ranacars.com</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Delhi NCR, India</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-gold-400 mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-gold-400 hover:text-dark-950 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-gold-400 hover:text-dark-950 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-gold-400 hover:text-dark-950 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold-600 pt-8">
          <p className="text-center text-silver-400 text-sm">
            © 2024 Rana Luxury Car Collection. All rights reserved. | Luxury Car Rental Delhi NCR
          </p>
        </div>
      </div>
    </footer>
  );
}
