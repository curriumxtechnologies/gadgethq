import React, { useState } from 'react';
import { Search, ChevronDown, ShoppingCart, Heart, User, Menu, X, Globe, DollarSign, Phone, AlertCircle, Clock, MapPin } from 'lucide-react';
import logo from '../assets/images/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [popup, setPopup] = useState({ show: false, message: '' });

  const categories = [
    'Smartphones', 
    'Laptops', 
    'Tablets', 
    'Smartwatches', 
    'Headphones', 
    'Accessories',
    'Gaming',
    'Cameras'
  ];

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

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Popup Notification */}
      {popup.show && (
        <div className="fixed top-20 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none animate-slideDown">
          <div className="flex items-center gap-3 bg-gray-900 text-white px-4 sm:px-6 py-3 rounded-xl shadow-2xl border border-gray-700 pointer-events-auto max-w-[90vw] sm:max-w-md">
            <AlertCircle size={20} className="text-[#3E0765] flex-shrink-0" />
            <p className="text-xs sm:text-sm font-medium truncate">{popup.message}</p>
          </div>
        </div>
      )}

      {/* Top Bar - Hidden on mobile */}
      <div className="hidden md:block bg-gradient-to-r from-[#F5EDFA] to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-9 text-xs text-gray-500">
            <span className="flex items-center gap-2">
              <Phone size={12} className="text-[#3E0765]" />
              🚚 FREE Delivery Nationwide
            </span>
            <div className="flex items-center gap-6">
              <span className="text-gray-700 font-medium">⌚ 9am - 6pm (Mon - Sat)</span>
              <span className="text-gray-300">|</span>
              <a 
                href="tel:09020402329" 
                className="hover:text-[#3E0765] transition-colors flex items-center gap-1"
              >
                <Phone size={12} className="text-[#3E0765]" />
                0902 040 2329
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img 
              src={logo} 
              alt="Gadget Headquarters" 
              className="h-10 md:h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                Gadget HQ
              </h1>
              <p className="text-[8px] md:text-[10px] text-gray-500 leading-none">Nigeria Limited</p>
            </div>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <div className="relative w-full">
              <select 
                className="absolute left-0 top-0 bottom-0 bg-gray-50 border-r border-gray-200 rounded-l-lg px-4 text-sm text-gray-700 focus:outline-none cursor-pointer hover:bg-gray-100 transition-colors"
                onChange={(e) => handleButtonClick(`Category: ${e.target.value}`, e)}
              >
                <option>All Categories</option>
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Search for gadgets..."
                className="w-full pl-44 pr-12 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#3E0765] focus:ring-2 focus:ring-[#3E0765]/20 transition-all"
                onFocus={() => showNotAvailable('Search')}
              />
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#3E0765] transition-colors"
                onClick={(e) => handleButtonClick('Search', e)}
              >
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1 md:gap-3">
            {/* Mobile Search */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search size={22} />
            </button>

            {/* Compare - Desktop only */}
            <button 
              onClick={(e) => handleButtonClick('Compare', e)}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-700 hover:text-[#3E0765] hover:bg-[#F5EDFA] rounded-lg transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 3h3v3h-3zM8 3h3v3H8zM5 8h14v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8zM12 12v4"/>
              </svg>
              <span>Compare</span>
            </button>

            {/* Wishlist */}
            <button 
              onClick={(e) => handleButtonClick('Wishlist', e)}
              className="relative p-2 rounded-lg hover:bg-[#F5EDFA] transition-colors group"
            >
              <Heart size={22} className="group-hover:text-[#3E0765] transition-colors" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white">
                0
              </span>
            </button>

            {/* Cart */}
            <button 
              onClick={(e) => handleButtonClick('Shopping Cart', e)}
              className="relative p-2 rounded-lg hover:bg-[#F5EDFA] transition-colors group"
            >
              <ShoppingCart size={22} className="group-hover:text-[#3E0765] transition-colors" />
              <span className="absolute -top-1 -right-1 bg-[#3E0765] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white">
                2
              </span>
            </button>

            {/* Account */}
            <button 
              onClick={(e) => handleButtonClick('Sign In', e)}
              className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#3E0765] hover:bg-[#F5EDFA] rounded-lg transition-all"
            >
              <User size={20} />
              <span className="hidden lg:inline">Sign In</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden pb-4 animate-slideDown">
            <div className="relative">
              <input
                type="text"
                placeholder="Search gadgets..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#3E0765] focus:ring-2 focus:ring-[#3E0765]/20"
                autoFocus
                onFocus={() => showNotAvailable('Search')}
              />
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        )}
      </div>

      {/* Navigation - Desktop */}
      <nav className="hidden lg:block border-t border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1 h-12">
            {/* Categories Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center gap-2 px-5 py-1.5 bg-[#3E0765] text-white rounded-lg font-medium text-sm hover:bg-[#2D054A] transition-all shadow-sm hover:shadow-md"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
                All Categories
                <ChevronDown size={16} className={`transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fadeIn">
                  {categories.map((cat) => (
                    <a 
                      key={cat}
                      href="#" 
                      onClick={(e) => handleButtonClick(`Category: ${cat}`, e)}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F5EDFA] hover:text-[#3E0765] transition-colors"
                    >
                      {cat}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Nav Links */}
            <ul className="flex items-center gap-1 ml-4 text-sm font-medium">
              {['Home', 'Shop', 'New Arrivals', 'Deals', 'Brands', 'Support'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    onClick={(e) => handleButtonClick(item, e)}
                    className="px-4 py-1.5 rounded-lg text-gray-700 hover:text-[#3E0765] hover:bg-[#F5EDFA] transition-all"
                  >
                    {item}
                    {(item === 'Brands' || item === 'Shop') && <ChevronDown size={14} className="inline ml-1" />}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Side */}
            <div className="ml-auto flex items-center gap-4 text-sm">
              <a 
                href="tel:09020402329" 
                className="text-gray-600 hover:text-[#3E0765] transition-colors flex items-center gap-1.5"
              >
                <Phone size={14} />
                📞 0902 040 2329
              </a>
              <span className="text-gray-300">|</span>
              <span className="text-[#3E0765] font-medium text-xs">
                ⭐ Certified Laptop Plug
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 animate-slideRight overflow-y-auto">
          <div className="p-4 space-y-6">
            {/* Mobile Categories */}
            <div className="space-y-1">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3">Categories</h3>
              {categories.map((cat) => (
                <a 
                  key={cat}
                  href="#" 
                  onClick={(e) => handleButtonClick(`Category: ${cat}`, e)}
                  className="block px-3 py-2.5 rounded-lg text-gray-700 hover:bg-[#F5EDFA] hover:text-[#3E0765] transition-colors"
                >
                  {cat}
                </a>
              ))}
            </div>

            <hr className="border-gray-100" />

            {/* Mobile Nav Links */}
            <div className="space-y-1">
              {['Home', 'Shop', 'New Arrivals', 'Deals', 'Brands', 'Support'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  onClick={(e) => handleButtonClick(item, e)}
                  className="block px-3 py-2.5 rounded-lg text-gray-700 hover:bg-[#F5EDFA] hover:text-[#3E0765] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <hr className="border-gray-100" />

            {/* Mobile Actions */}
            <div className="space-y-1">
              <a 
                href="#" 
                onClick={(e) => handleButtonClick('Sign In', e)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-[#F5EDFA] hover:text-[#3E0765] transition-colors"
              >
                <User size={20} />
                Sign In
              </a>
              <a 
                href="#" 
                onClick={(e) => handleButtonClick('Wishlist', e)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-[#F5EDFA] hover:text-[#3E0765] transition-colors"
              >
                <Heart size={20} />
                Wishlist
              </a>
              <a 
                href="tel:09020402329" 
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-[#F5EDFA] hover:text-[#3E0765] transition-colors"
              >
                <Phone size={20} />
                0902 040 2329
              </a>
            </div>

            <hr className="border-gray-100" />

            {/* Contact Info */}
            <div className="px-3 space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <Clock size={16} />
                9am - 6pm (Mon - Sat)
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                Garrison, Port Harcourt, Nigeria
              </p>
              <p className="text-xs text-[#3E0765] font-medium">
                ⭐ Certified Laptop Plug
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        .animate-slideRight {
          animation: slideRight 0.3s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;