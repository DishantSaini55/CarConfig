import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Collection', id: 'collection' },
    { label: 'Electric Cars', id: 'electric' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass py-2' : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
              <span className="font-display font-bold text-dark-950">R</span>
            </div>
            <span className="font-display font-bold text-xl hidden sm:block">Rana Luxury</span>
          </div>

          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`transition-all duration-300 font-body text-sm ${
                  activeSection === item.id
                    ? 'text-gold-400 border-b-2 border-gold-400 pb-1'
                    : 'text-silver-300 hover:text-gold-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex gap-4">
            <a href="tel:+919876543210" className="px-4 py-2 rounded-lg bg-gold-500 text-dark-950 font-semibold hover:bg-gold-400 transition">
              Call Now
            </a>
          </div>

          <button
            className="md:hidden text-gold-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gold-600 pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-silver-300 hover:text-gold-400 transition"
              >
                {item.label}
              </button>
            ))}
            <a href="tel:+919876543210" className="block w-full px-4 py-2 rounded-lg bg-gold-500 text-dark-950 font-semibold text-center">
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
