import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Shield,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Updated with SafetyTrack
              </h3>
              <p className="text-slate-400">
                Get the latest emergency response insights and product updates
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white px-6 py-3 rounded-r-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
            <img src="/favicon.svg" className='h-8' alt="SafetyTrack" />
              <span className="text-2xl font-bold text-white">SafetyTrack</span>
            </div>
            <p className="text-slate-400 mb-6">
              Transforming emergency response through advanced coordination and real-time awareness.
            </p>
            <div className="space-y-4">
              
             
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>contact@safetytrack.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                'About Us',
                'Features',
                'Pricing',
                'Contact',
                'Careers',
               
                'Blog'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Solutions</h4>
            <ul className="space-y-4">
              {[
                'Fire Departments',
                'Police Departments',
                'Medical Response',
                'Emergency Management',
                'Dispatch Centers',
                'Smart Cities',
                'Government Agencies',
                'Integration Partners'
              ].map((solution) => (
                <li key={solution}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-4">
              {[
                
                'Training Videos',
                'Community Forum',
                'Support Center',
                'Security',
                'Compliance'
              ].map((resource) => (
                <li key={resource}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex gap-6">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Youtube, label: 'YouTube' }
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-4">
              {['HIPAA', 'ISO 27001', 'SOC 2', 'NIST'].map((cert) => (
                <div
                  key={cert}
                  className="px-3 py-1 bg-slate-800 rounded text-sm text-slate-400"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <div>
              © {currentYear} SafetyTrack Technologies. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;