import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ShoppingBag, Truck, Shield, Star, ArrowRight, Play, ChevronLeft, AlertCircle } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [popup, setPopup] = useState({ show: false, message: '' });
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      id: 1,
      badge: '🔥 Limited Offer',
      title: 'Premium Gadgets at Best Prices',
      subtitle: 'Up to 70% off on top brands. Limited time only!',
      cta: 'Shop Now',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop', // Smartphone
      color: 'from-[#3E0765] to-[#5A0A94]',
    },
    {
      id: 2,
      badge: '✨ New Arrivals',
      title: 'Latest Tech in Stock',
      subtitle: 'Discover the newest gadgets from global brands',
      cta: 'Explore Collection',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop', // Laptop
      color: 'from-[#3E0765] to-[#7B2FBE]',
    },
    {
      id: 3,
      badge: '🎯 Weekly Deal',
      title: 'Smart Tech for Everyone',
      subtitle: 'Transform your lifestyle with cutting-edge technology',
      cta: 'View Deals',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop', // Accessories (headphones, keyboard, gadgets)
      color: 'from-[#3E0765] to-[#9B4DCA]',
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

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(false);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    // Minimum swipe distance of 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left - next slide
        nextSlide();
      } else {
        // Swipe right - previous slide
        prevSlide();
      }
    }
  };

  return (
    <section 
      className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Popup Notification */}
      {popup.show && (
        <div className="fixed top-20 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none animate-slideDown">
          <div className="flex items-center gap-3 bg-gray-900 text-white px-4 sm:px-6 py-3 rounded-xl shadow-2xl border border-gray-700 pointer-events-auto max-w-[90vw] sm:max-w-md">
            <AlertCircle size={20} className="text-[#3E0765] flex-shrink-0" />
            <p className="text-xs sm:text-sm font-medium truncate">{popup.message}</p>
          </div>
        </div>
      )}

      {/* Slider Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative min-h-[420px] sm:min-h-[460px] md:min-h-[400px] lg:min-h-[460px] flex items-center">
          {/* Slide Content */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 transform ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0 z-10' 
                  : index < currentSlide 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center h-full">
                {/* Left Content */}
                <div className="space-y-2 sm:space-y-4 px-2 lg:px-0 py-4 lg:py-0 order-2 lg:order-1">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-gray-100/50">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3E0765] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3E0765]"></span>
                    </span>
                    <span className="text-[10px] sm:text-sm font-semibold text-gray-700">{slide.badge}</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                    <span className="bg-gradient-to-r bg-clip-text text-transparent from-gray-900 to-gray-700">
                      {slide.title}
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-md leading-relaxed">
                    {slide.subtitle}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
                    <button 
                      onClick={(e) => handleButtonClick(slide.cta, e)}
                      className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-[#3E0765] hover:bg-[#2D054A] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <span>{slide.cta}</span>
                      <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <button 
                      onClick={(e) => handleButtonClick('Watch Demo', e)}
                      className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-white text-gray-700 text-sm font-semibold rounded-lg border-2 border-gray-200 hover:border-[#3E0765] hover:text-[#3E0765] transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                    >
                      <Play size={14} className="sm:w-4 sm:h-4 fill-current group-hover:fill-[#3E0765]" />
                      <span className="hidden sm:inline">Demo</span>
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-3 sm:gap-6 pt-1">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="flex -space-x-1">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white bg-gradient-to-br from-gray-200 to-gray-300"></div>
                        ))}
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-sm font-semibold text-gray-900">50K+</p>
                        <p className="text-[8px] sm:text-[10px] text-gray-500">Customers</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] sm:text-sm text-gray-600">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 font-semibold">4.9</span>
                    </div>
                  </div>
                </div>

                {/* Right Image - Now visible on all screens */}
                <div className="relative order-1 lg:order-2">
                  <div className="relative">
                    {/* Main Image */}
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg lg:shadow-xl">
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-[180px] sm:h-[220px] md:h-[240px] lg:h-[280px] xl:h-[340px] object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${slide.color} opacity-10`}></div>
                    </div>

                    {/* Floating Cards - Hidden on mobile */}
                    <div className="absolute -right-2 -bottom-2 sm:-right-3 sm:-bottom-3 bg-white rounded-lg sm:rounded-xl shadow-lg p-2 sm:p-3 border border-gray-100/50 animate-bounce-slow hidden sm:block">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F5EDFA] rounded-lg flex items-center justify-center">
                          <Truck className="w-3 h-3 sm:w-4 sm:h-4 text-[#3E0765]" />
                        </div>
                        <div>
                          <p className="text-[8px] sm:text-[10px] font-semibold text-gray-900">Free Ship</p>
                          <p className="text-[7px] sm:text-[8px] text-gray-500">Worldwide</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -left-2 -top-2 sm:-left-3 sm:-top-3 bg-white rounded-lg sm:rounded-xl shadow-lg p-2 sm:p-3 border border-gray-100/50 animate-bounce-slow animation-delay-1000 hidden sm:block">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F5EDFA] rounded-lg flex items-center justify-center">
                          <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#3E0765]" />
                        </div>
                        <div>
                          <p className="text-[8px] sm:text-[10px] font-semibold text-gray-900">Secure</p>
                          <p className="text-[7px] sm:text-[8px] text-gray-500">Payment</p>
                        </div>
                      </div>
                    </div>

                    {/* Discount Badge */}
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-gradient-to-br from-red-500 to-orange-500 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg shadow-md transform rotate-2">
                      <p className="text-[10px] sm:text-xs font-bold">-70%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Dots */}
          <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsPlaying(false);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide 
                    ? 'w-5 sm:w-6 h-1.5 bg-[#3E0765]' 
                    : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg hover:bg-white transition-all duration-300 border border-gray-100/50 hover:scale-105"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg hover:bg-white transition-all duration-300 border border-gray-100/50 hover:scale-105"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Bottom Feature Bar - Compact */}
      <div className="relative border-t border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 py-2.5 sm:py-4">
            {[
              { icon: Truck, label: 'Free Shipping', desc: 'Over ₦50,000' },
              { icon: Shield, label: 'Secure Payment', desc: '100% protected' },
              { icon: ShoppingBag, label: '30-Day Returns', desc: 'Money back' },
              { icon: Star, label: '24/7 Support', desc: 'Dedicated help' },
            ].map((item, index) => (
              <div 
                key={index} 
                onClick={(e) => handleButtonClick(item.label, e)}
                className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer"
              >
                <div className="p-1.5 sm:p-2 bg-[#F5EDFA] rounded-lg group-hover:bg-[#3E0765] group-hover:text-white transition-colors">
                  <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-[#3E0765] group-hover:text-white transition-colors" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-[9px] sm:text-sm font-semibold text-gray-900">{item.label}</p>
                  <p className="text-[7px] sm:text-[10px] text-gray-500">{item.desc}</p>
                </div>
                {/* Show only label on mobile */}
                <div className="sm:hidden">
                  <p className="text-[8px] font-semibold text-gray-900">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;