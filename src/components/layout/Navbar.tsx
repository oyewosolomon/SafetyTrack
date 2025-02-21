import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    {
      label: 'Partners', href: '#partners'      
    },
    {
      label: 'Resources',
      dropdown: [
        { label: 'Training Courses', href: '#resources' },
        { label: 'Certification Tracks', href: '#resources' },

      ]
    },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' }
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500"></div>
            <span className="text-xl font-bold text-white">SafetyTrack</span>
          </a>
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-gray-900 border border-gray-800 shadow-xl">
                      <div className="p-2">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <a
                            key={idx}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <a href='#contact' className="px-6 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg hover:from-blue-700 hover:to-violet-700 transition-all duration-300 flex items-center">
              Contact Us
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
          <button
            className="lg:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <div className="rounded-xl bg-gray-800/50 backdrop-blur-xl border border-gray-700">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-700 last:border-none">
                  {item.dropdown ? (
                    <div className="p-4">
                      <div className="text-white font-medium mb-2">{item.label}</div>
                      <div className="space-y-2 pl-4">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <a
                            key={idx}
                            href={dropdownItem.href}
                            className="block text-gray-300 hover:text-white transition-colors"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block p-4 text-white font-medium hover:bg-gray-700/50 transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="p-4">
                <a href='contact' className="w-full py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg hover:from-blue-700 hover:to-violet-700 transition-all duration-300 flex items-center justify-center">
                  Contact Us
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
