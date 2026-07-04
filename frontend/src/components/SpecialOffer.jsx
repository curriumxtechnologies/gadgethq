import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Clock, 
  ShoppingBag, 
  Zap, 
  Gift,
  Truck,
  Shield,
  Star,
  ChevronLeft,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

const SpecialOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [popup, setPopup] = useState({ show: false, message: '' });

  const offers = [
    {
      id: 1,
      title: 'iPhone 15 Pro Max',
      subtitle: 'Limited Time Offer',
      description: 'Premium Apple smartphone with pro camera system and titanium design. UK Used - Like New',
      price: '$1,199',
      oldPrice: '$1,399',
      discount: '30% OFF',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop',
      badge: '🔥 Hot Deal',
      color: 'from-blue-600 to-purple-600',
      features: ['UK Used', '1 Year Warranty', 'Free Delivery'],
    },
    {
      id: 2,
      title: 'MacBook Pro 16" M3 Pro',
      subtitle: 'Flash Sale',
      description: 'M3 Pro chip with 36GB memory and 1TB SSD storage. UK Used - Excellent Condition',
      price: '$2,499',
      oldPrice: '$2,999',
      discount: '17% OFF',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop',
      badge: '⚡ Flash Sale',
      color: 'from-pink-500 to-rose-600',
      features: ['UK Used', '2 Year Warranty', 'Free AirPods'],
    },
    {
      id: 3,
      title: 'Samsung Galaxy S24 Ultra',
      subtitle: 'Weekend Special',
      description: 'AI-powered smartphone with 200MP camera and S Pen included. Brand New.',
      price: '$1,299',
      oldPrice: '$1,499',
      discount: '25% OFF',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop',
      badge: '🎯 Weekend Deal',
      color: 'from-emerald-500 to-teal-600',
      features: ['Brand New', '6 Months Prime', 'Free Case'],
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
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length);
  };

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Popup Notification */}
      {popup.show && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] animate-slideDown">
          <div className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-2xl border border-gray-700">
            <AlertCircle size={20} className="text-blue-400 flex-shrink-0" />
            <p className="text-sm font-medium">{popup.message}</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded-full border border-red-500/30">
                ⚡ Limited Time
              </span>
              <span className="text-gray-600">|</span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Zap size={14} className="text-yellow-500" />
                Don't miss out
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Special <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Offers</span>
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Exclusive deals just for you
            </p>
          </div>
          
          {/* Timer */}
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/10">
            <Clock size={16} className="text-blue-400" />
            <div className="flex items-center gap-1.5 sm:gap-2 text-white">
              <div className="text-center">
                <div className="bg-white/10 rounded-lg px-1.5 sm:px-2 py-1 min-w-[28px] sm:min-w-[32px]">
                  <span className="text-sm sm:text-base font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
                </div>
                <span className="text-[8px] sm:text-[10px] text-gray-400">Days</span>
              </div>
              <span className="text-gray-500 font-bold">:</span>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg px-1.5 sm:px-2 py-1 min-w-[28px] sm:min-w-[32px]">
                  <span className="text-sm sm:text-base font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                </div>
                <span className="text-[8px] sm:text-[10px] text-gray-400">Hours</span>
              </div>
              <span className="text-gray-500 font-bold">:</span>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg px-1.5 sm:px-2 py-1 min-w-[28px] sm:min-w-[32px]">
                  <span className="text-sm sm:text-base font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                </div>
                <span className="text-[8px] sm:text-[10px] text-gray-400">Mins</span>
              </div>
              <span className="text-gray-500 font-bold">:</span>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg px-1.5 sm:px-2 py-1 min-w-[28px] sm:min-w-[32px]">
                  <span className="text-sm sm:text-base font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                </div>
                <span className="text-[8px] sm:text-[10px] text-gray-400">Secs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Offers Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {offers.map((offer) => (
                <div key={offer.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
                    {/* Left Content */}
                    <div className="space-y-4 sm:space-y-5 order-2 lg:order-1">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30">
                        <span className="text-sm">{offer.badge}</span>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">{offer.subtitle}</p>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-1">
                          {offer.title}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md">
                        {offer.description}
                      </p>

                      <div className="flex items-center gap-3">
                        <span className="text-2xl sm:text-3xl font-bold text-white">{offer.price}</span>
                        <span className="text-sm sm:text-base text-gray-400 line-through">{offer.oldPrice}</span>
                        <span className="px-2.5 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-lg">
                          {offer.discount}
                        </span>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {offer.features.map((feature, index) => (
                          <span key={index} className="flex items-center gap-1.5 text-xs text-gray-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                            {index === 0 && <Truck size={12} className="text-blue-400" />}
                            {index === 1 && <Shield size={12} className="text-green-400" />}
                            {index === 2 && <Gift size={12} className="text-pink-400" />}
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <button 
                        onClick={(e) => handleButtonClick(`Shop Now - ${offer.title}`, e)}
                        className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <ShoppingBag size={18} />
                        Shop Now
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    {/* Right Image */}
                    <div className="relative order-1 lg:order-2">
                      <div className="relative rounded-2xl overflow-hidden">
                        <img 
                          src={offer.image} 
                          alt={offer.title}
                          className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-2xl"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${offer.color} opacity-10`}></div>
                        
                        {/* Floating Discount Badge */}
                        <div className="absolute top-3 right-3 bg-gradient-to-br from-red-500 to-orange-500 text-white px-3 py-1.5 rounded-xl shadow-lg transform rotate-3">
                          <p className="text-xs font-bold">{offer.discount}</p>
                        </div>

                        {/* Rating Badge */}
                        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                          <Star size={14} className="fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-semibold">4.9</span>
                          <span className="text-[10px] text-gray-300">(2.3k)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight size={20} className="text-white" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide 
                    ? 'w-8 h-2 bg-blue-500' 
                    : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            { icon: Truck, label: 'Free Shipping', desc: 'On orders over $50' },
            { icon: Shield, label: 'Secure Payment', desc: '100% buyer protection' },
            { icon: Gift, label: 'Gift Wrapping', desc: 'Free for premium orders' },
          ].map((item, index) => (
            <div 
              key={index} 
              onClick={(e) => handleButtonClick(item.label, e)}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <item.icon size={18} className="text-blue-400" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-white">{item.label}</p>
                <p className="text-[10px] sm:text-xs text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;