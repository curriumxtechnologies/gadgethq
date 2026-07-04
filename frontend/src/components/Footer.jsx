import React, { useState } from 'react';
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  Send,
  Shield,
  Truck,
  RefreshCw,
  CreditCard,
  ArrowUp,
  Heart,
  AlertCircle
} from 'lucide-react';
import logo from '../assets/images/logo.jpg';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [popup, setPopup] = useState({ show: false, message: '' });

  const showNotAvailable = (feature) => {
    setPopup({ 
      show: true, 
      message: `"${feature}" is not available yet. We're working on it! 🚀` 
    });
    setTimeout(() => {
      setPopup({ show: false, message: '' });
    }, 3000);
  };

  const handleButtonClick = (feature, e) => {
    e.preventDefault();
    showNotAvailable(feature);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      showNotAvailable('Newsletter Subscription');
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Track Order', href: '#' },
    { name: 'Returns Policy', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
  ];

  const categories = [
    { name: 'Smartphones', href: '#' },
    { name: 'Laptops', href: '#' },
    { name: 'Tablets', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Smartwatches', href: '#' },
    { name: 'Audio Devices', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Popup Notification */}
      {popup.show && (
        <div className="fixed top-20 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none animate-slideDown">
          <div className="flex items-center gap-3 bg-gray-900 text-white px-4 sm:px-6 py-3 rounded-xl shadow-2xl border border-gray-700 pointer-events-auto max-w-[90vw] sm:max-w-md">
            <AlertCircle size={20} className="text-blue-400 flex-shrink-0" />
            <p className="text-xs sm:text-sm font-medium truncate">{popup.message}</p>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Gadget Headquarters" 
                className="h-12 w-auto object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-white tracking-tight">
                  Gadget HQ
                </h1>
                <p className="text-[10px] text-gray-500">Nigeria Limited</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              Your one-stop shop for premium electronics. We bring you the latest tech products at unbeatable prices.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">Garrison, Port Harcourt, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">0902 040 2329</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">gadgethq.ph@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock size={16} className="text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">9am - 6pm (Mon - Sat)</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://instagram.com/gadgethq_ph" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleButtonClick('Instagram', e)}
                className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>

            {/* Business Info */}
            <div className="space-y-1 text-xs text-gray-500">
              <p className="flex items-center gap-2">
                <span className="text-yellow-500">⭐</span>
                Certified Laptop Plug
              </p>
              <p>SELL | SWAP | NEW & UK USED ONLY</p>
              <p>🚚 FREE Delivery Nationwide</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-500 mt-1"></span>
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleButtonClick(link.name, e)}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1 group cursor-pointer"
                  >
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative">
              Categories
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-500 mt-1"></span>
            </h3>
            <ul className="space-y-2.5">
              {categories.map((category, index) => (
                <li key={index}>
                  <a 
                    href={category.href} 
                    onClick={(e) => handleButtonClick(`Category: ${category.name}`, e)}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1 group cursor-pointer"
                  >
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative">
              Newsletter
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-500 mt-1"></span>
            </h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>
            
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 pr-12 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm"
                required
                onFocus={() => showNotAvailable('Email Input')}
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-all duration-300 hover:scale-105"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>

            {isSubmitted && (
              <p className="text-green-400 text-sm mt-2 animate-fadeIn">
                ✓ Subscribed successfully!
              </p>
            )}

            {/* Trust Badges */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div 
                onClick={(e) => handleButtonClick('Secure Payment', e)}
                className="flex items-center gap-2 text-xs text-gray-400 bg-gray-800/50 p-2 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
              >
                <Shield size={14} className="text-green-500" />
                <span>Secure</span>
              </div>
              <div 
                onClick={(e) => handleButtonClick('Fast Shipping', e)}
                className="flex items-center gap-2 text-xs text-gray-400 bg-gray-800/50 p-2 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
              >
                <Truck size={14} className="text-blue-500" />
                <span>Fast Ship</span>
              </div>
              <div 
                onClick={(e) => handleButtonClick('Returns Policy', e)}
                className="flex items-center gap-2 text-xs text-gray-400 bg-gray-800/50 p-2 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
              >
                <RefreshCw size={14} className="text-purple-500" />
                <span>Returns</span>
              </div>
              <div 
                onClick={(e) => handleButtonClick('Payment Methods', e)}
                className="flex items-center gap-2 text-xs text-gray-400 bg-gray-800/50 p-2 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
              >
                <CreditCard size={14} className="text-yellow-500" />
                <span>Payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar - Simplified */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} <span className="text-white font-semibold">Gadget Headquarters Nigeria Limited</span>. All rights reserved.
          </p>
        </div>

        {/* Footer Links */}
        <div className="mt-4 text-center text-xs text-gray-600">
          <span className="inline-flex items-center gap-4 flex-wrap justify-center">
            <a 
              href="#" 
              onClick={(e) => handleButtonClick('Privacy Policy', e)}
              className="hover:text-gray-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a 
              href="#" 
              onClick={(e) => handleButtonClick('Terms of Service', e)}
              className="hover:text-gray-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
            <span>|</span>
            <a 
              href="#" 
              onClick={(e) => handleButtonClick('Cookie Policy', e)}
              className="hover:text-gray-400 transition-colors cursor-pointer"
            >
              Cookie Policy
            </a>
            <span>|</span>
            <a 
              href="#" 
              onClick={(e) => handleButtonClick('Accessibility', e)}
              className="hover:text-gray-400 transition-colors cursor-pointer"
            >
              Accessibility
            </a>
          </span>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;