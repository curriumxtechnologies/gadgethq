import React, { useState } from 'react';
import { ArrowRight, Star, ShoppingBag, Heart, AlertCircle } from 'lucide-react';

const FeaturedCategories = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [popup, setPopup] = useState({ show: false, message: '' });

  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      category: 'Phones',
      price: '₦1,850,000',
      oldPrice: '₦2,100,000',
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      category: 'Phones',
      price: '₦1,550,000',
      oldPrice: '₦1,800,000',
      rating: 4.8,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'MacBook Pro 16" M3',
      category: 'Laptops',
      price: '₦3,200,000',
      oldPrice: '₦3,600,000',
      rating: 4.9,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Dell XPS 15',
      category: 'Laptops',
      price: '₦2,100,000',
      oldPrice: '₦2,500,000',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&auto=format&fit=crop',
    },
    {
      id: 5,
      name: 'Google Pixel 8 Pro',
      category: 'Phones',
      price: '₦1,200,000',
      oldPrice: '₦1,400,000',
      rating: 4.6,
      reviews: 143,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&auto=format&fit=crop',
    },
    {
      id: 6,
      name: 'Lenovo ThinkPad X1',
      category: 'Laptops',
      price: '₦2,500,000',
      oldPrice: '₦2,900,000',
      rating: 4.8,
      reviews: 201,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&auto=format&fit=crop',
    },
    {
      id: 7,
      name: 'Samsung Galaxy Z Fold 5',
      category: 'Phones',
      price: '₦2,100,000',
      oldPrice: '₦2,400,000',
      rating: 4.7,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop',
    },
    {
      id: 8,
      name: 'HP Spectre x360',
      category: 'Laptops',
      price: '₦1,900,000',
      oldPrice: '₦2,200,000',
      rating: 4.5,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&auto=format&fit=crop',
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
    setWishlist(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-gray-50 to-white">
      {/* Popup Notification */}
      {popup.show && (
        <div className="fixed top-20 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none animate-slideDown">
          <div className="flex items-center gap-3 bg-gray-900 text-white px-4 sm:px-6 py-3 rounded-xl shadow-2xl border border-gray-700 pointer-events-auto max-w-[90vw] sm:max-w-md">
            <AlertCircle size={20} className="text-[#3E0765] flex-shrink-0" />
            <p className="text-xs sm:text-sm font-medium truncate">{popup.message}</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-[#F5EDFA] text-[#3E0765] text-xs font-semibold rounded-full">
                Best Sellers
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-xs text-gray-500">
                🔥 Hot deals this week
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Featured <span className="text-[#3E0765]">Products</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Top picks in Phones & Laptops
            </p>
          </div>
          <button 
            onClick={(e) => handleButtonClick('View All Products', e)}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#3E0765] hover:text-[#2D054A] transition-colors whitespace-nowrap"
          >
            View All
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {products.map((product) => (
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
                
                {/* Heart Icon - Top Right */}
                <button 
                  onClick={(e) => toggleWishlist(product.id, e)}
                  className={`absolute top-2 right-2 p-1.5 sm:p-2 rounded-full backdrop-blur-sm transition-all duration-300 z-10 ${
                    wishlist.includes(product.id)
                      ? 'bg-red-500 text-white shadow-lg scale-110'
                      : 'bg-white/80 text-gray-600 hover:bg-white hover:scale-110'
                  }`}
                >
                  <Heart size={16} className="sm:w-5 sm:h-5" fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                </button>

                {/* Category Tag */}
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[8px] sm:text-[10px] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-4">
                {/* Product Name and Quick Add Icon */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-1 group-hover:text-[#3E0765] transition-colors flex-1">
                    {product.name}
                  </h3>
                  <button 
                    onClick={(e) => handleButtonClick(`Quick Add - ${product.name}`, e)}
                    className="p-1.5 sm:p-2 bg-[#F5EDFA] hover:bg-[#3E0765] hover:text-white text-[#3E0765] rounded-lg transition-all duration-300 hover:scale-110 flex-shrink-0"
                    aria-label="Quick add to cart"
                  >
                    <ShoppingBag size={14} className="sm:w-4 sm:h-4" />
                  </button>
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
                  className="w-full mt-2 sm:mt-3 py-1.5 sm:py-2 bg-[#3E0765] hover:bg-[#2D054A] text-white text-[10px] sm:text-xs font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Banner */}
        <div className="mt-6 sm:mt-8 text-center">
          <button 
            onClick={(e) => handleButtonClick('Load More Products', e)}
            className="group px-6 sm:px-8 py-2.5 sm:py-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-[#3E0765] hover:text-[#3E0765] transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
          >
            Load More Products
            <ArrowRight size={16} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FeaturedCategories;