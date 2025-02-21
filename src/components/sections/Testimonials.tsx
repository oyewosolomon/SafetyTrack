import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Chief Sarah Martinez",
      role: "Emergency Response Director",
      organization: "San Francisco Fire Department",
      image: "https://randomuser.me/api/portraits/men/47.jpg",
      quote: "SafetyTrack has revolutionized how we coordinate emergency responses. The 45% reduction in response time has been a game-changer for our community.",
      stats: "Response time reduced from 8.5 to 4.7 minutes"
    },
    {
      name: "Commander David Chen",
      role: "Police Operations Head",
      organization: "Chicago Police Department",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      quote: "The multi-agency coordination features have dramatically improved our ability to respond to complex emergencies. Real-time situational awareness has never been better.",
      stats: "Coordinated 10,000+ multi-agency responses"
    },
    {
      name: "Dr. Emily Thompson",
      role: "Emergency Services Coordinator",
      organization: "NYC Health",
      image: "https://randomuser.me/api/portraits/men/49.jpg",
      quote: "The analytics and reporting capabilities have helped us optimize our resource allocation. We're now able to predict and prepare for emergencies before they escalate.",
      stats: "30% improvement in resource allocation"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Trusted by Leading Emergency Services
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            See how SafetyTrack is transforming emergency response across the nation
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-2">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-slate-700 italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-slate-900">{testimonials[currentIndex].name}</p>
                  <p className="text-slate-600">{testimonials[currentIndex].role}</p>
                  <p className="text-blue-600">{testimonials[currentIndex].organization}</p>
                </div>
                <div className="mt-6 bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-700 font-semibold">
                    {testimonials[currentIndex].stats}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-6 h-6 text-slate-700" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-500' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors"
              disabled={isAnimating}
            >
              <ChevronRight className="w-6 h-6 text-slate-700" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-slate-600">Cities Using SafetyTrack</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
            <div className="text-slate-600">Emergency Calls Coordinated</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">45%</div>
            <div className="text-slate-600">Average Response Time Improvement</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;