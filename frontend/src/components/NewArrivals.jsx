import React, { useState } from 'react';
import { 
  ArrowRight, 
  Star, 
  ShoppingBag, 
  Eye, 
  Heart,
  Sparkles,
  Clock,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

const NewArrivals = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [popup, setPopup] = useState({ show: false, message: '' });

  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max - Titanium',
      category: 'Phones',
      price: '$1,199',
      oldPrice: '$1,399',
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&auto=format&fit=crop',
      badge: 'New',
      badgeColor: 'bg-blue-500',
      isNew: true,
      featured: true,
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      category: 'Phones',
      price: '$1,299',
      oldPrice: '$1,499',
      rating: 4.8,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop',
      badge: 'Just In',
      badgeColor: 'bg-purple-500',
      isNew: true,
      featured: false,
    },
    {
      id: 3,
      name: 'MacBook Pro 16" M3 Pro',
      category: 'Laptops',
      price: '$2,499',
      oldPrice: '$2,799',
      rating: 4.9,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop',
      badge: 'New',
      badgeColor: 'bg-blue-500',
      isNew: true,
      featured: true,
    },
    {
      id: 4,
      name: 'Dell XPS 15 - 2024 Edition',
      category: 'Laptops',
      price: '$1,899',
      oldPrice: '$2,199',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&auto=format&fit=crop',
      badge: 'New',
      badgeColor: 'bg-blue-500',
      isNew: true,
      featured: false,
    },
    {
      id: 5,
      name: 'Google Pixel 8 Pro',
      category: 'Phones',
      price: '$999',
      oldPrice: '$1,199',
      rating: 4.6,
      reviews: 143,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&auto=format&fit=crop',
      badge: 'Latest',
      badgeColor: 'bg-green-500',
      isNew: true,
      featured: false,
    },
    {
      id: 6,
      name: 'Lenovo ThinkPad X1 Carbon',
      category: 'Laptops',
      price: '$1,699',
      oldPrice: '$1,999',
      rating: 4.8,
      reviews: 201,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&auto=format&fit=crop',
      badge: 'New',
      badgeColor: 'bg-blue-500',
      isNew: true,
      featured: false,
    },
    {
      id: 7,
      name: 'Samsung Galaxy Z Fold 5',
      category: 'Phones',
      price: '$1,799',
      oldPrice: '$1,999',
      rating: 4.7,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop',
      badge: 'Premium',
      badgeColor: 'bg-amber-500',
      isNew: false,
      featured: true,
    },
    {
      id: 8,
      name: 'HP Spectre x360 16"',
      category: 'Laptops',
      price: '$1,599',
      oldPrice: '$1,899',
      rating: 4.5,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&auto=format&fit=crop',
      badge: 'New',
      badgeColor: 'bg-blue-500',
      isNew: true,
      featured: false,
    },
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

  const toggleWishlist = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    const product = products.find(p => p.id === id);
    showNotAvailable(`Wishlist - ${product.name}`);
    // Keep the wishlist toggle functional for UI feedback
    setWishlist(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-white to-gray-50">
      {/* Popup Notification */}
      {popup.show && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] animate-slideDown">
          <div className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-2xl border border-gray-700">
            <AlertCircle size={20} className="text-[#3E0765] flex-shrink-0" />
            <p className="text-sm font-medium">{popup.message}</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                <Sparkles size={12} />
                New Arrivals
              </span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Clock size={14} className="text-blue-500" />
                Fresh from the factory
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              New <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Arrivals</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Discover the latest tech products
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Featured Filter */}
            <button 
              onClick={(e) => handleButtonClick('Featured Filter', e)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 text-xs font-semibold rounded-lg border border-blue-200"
            >
              <TrendingUp size={14} />
              Featured
            </button>
            
            <button 
              onClick={(e) => handleButtonClick('View All New Arrivals', e)}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap"
            >
              View All
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative bg-gray-50 aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1.5">
                  <span className={`${product.badgeColor} text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg shadow-md`}>
                    {product.badge}
                  </span>
                  {product.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg shadow-md">
                      ⭐ Featured
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button 
                  onClick={(e) => toggleWishlist(product.id, e)}
                  className={`absolute top-2 right-2 p-1.5 sm:p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                    wishlist.includes(product.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-gray-600 hover:bg-white hover:scale-110'
                  }`}
                >
                  <Heart size={14} className="sm:w-4 sm:h-4" fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                </button>

                {/* Quick View Buttons - Appears on hover */}
                <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center gap-2 transition-opacity duration-300 ${
                  hoveredId === product.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                  <button 
                    onClick={(e) => handleButtonClick(`Quick View - ${product.name}`, e)}
                    className="bg-white text-gray-900 p-2 sm:p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform"
                  >
                    <Eye size={16} className="sm:w-5 sm:h-5" />
                  </button>
                  <button 
                    onClick={(e) => handleButtonClick(`Quick Add - ${product.name}`, e)}
                    className="bg-white text-gray-900 p-2 sm:p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform"
                  >
                    <ShoppingBag size={16} className="sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* New Flag */}
                {product.isNew && (
                  <div className="absolute bottom-2 right-2">
                    <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-[8px] sm:text-[10px] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                      <Sparkles size={10} className="text-yellow-400" />
                      New
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] sm:text-xs text-gray-400">{product.category}</p>
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex items-center gap-0.5">
                    <Star size={12} className="sm:w-3.5 sm:h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">{product.rating}</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-400">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mt-1.5 sm:mt-2">
                  <span className="text-sm sm:text-base font-bold text-gray-900">{product.price}</span>
                  <span className="text-[10px] sm:text-xs text-gray-400 line-through">{product.oldPrice}</span>
                </div>

                {/* Add to Cart Button */}
                <button 
                  onClick={(e) => handleButtonClick(`Add to Cart - ${product.name}`, e)}
                  className="w-full mt-2 sm:mt-3 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-[10px] sm:text-xs font-semibold rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className={`p-2 rounded-lg border transition-all duration-300 ${
              currentPage === 0
                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                : 'border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            <ChevronLeft size={18} />
          </button>
          
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                currentPage === index
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {index + 1}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage === totalPages - 1}
            className={`p-2 rounded-lg border transition-all duration-300 ${
              currentPage === totalPages - 1
                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                : 'border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Bottom Banner - Newsletter */}
        <div className="mt-6 sm:mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 sm:p-6 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center justify-center w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm">
                <Sparkles size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Get Early Access</h3>
                <p className="text-sm text-white/80">Be the first to know about new arrivals</p>
              </div>
            </div>
            <div className="flex w-full sm:w-auto gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 sm:w-48 px-4 py-2.5 bg-white/20 backdrop-blur-sm rounded-xl text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                onFocus={() => showNotAvailable('Email Subscription')}
              />
              <button 
                onClick={(e) => handleButtonClick('Subscribe to Newsletter', e)}
                className="px-6 py-2.5 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;