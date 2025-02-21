import React from 'react';
import { ArrowRight, Clock, Shield, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8 tracking-tight">
            <span className="block">Emergency Response,</span>
            <span className="block text-blue-400">Reimagined</span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-300">
            Coordinating emergency responses across 100+ cities. Reducing response times by 45% through real-time situational awareness and multi-agency coordination.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all flex items-center gap-2 group">
              Request Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <Clock className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">45%</h3>
              <p className="text-slate-400">Faster Response Time</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <Shield className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">100+</h3>
              <p className="text-slate-400">Cities Protected</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <Users className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">1M+</h3>
              <p className="text-slate-400">Citizens Served</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;