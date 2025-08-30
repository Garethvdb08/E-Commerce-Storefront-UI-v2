import React, { useState, useEffect } from 'react';
import Icon from './Icon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Shop', 'New Arrivals', 'Brands', 'Contact'];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'}`}>
      <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 z-10" style={{ width: `${scrollProgress}%` }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="text-3xl font-bold text-blue-600">
              Furni.
            </a>
          </div>

          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href="/coming-soon" 
                className="relative text-lg text-gray-600 hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-center after:transition-transform hover:after:scale-x-100"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-5">
            <a href="/coming-soon" className="hidden sm:block text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <Icon name="search" />
            </a>
            <a href="/coming-soon" className="hidden sm:block text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <Icon name="user" />
            </a>
            <a href="/coming-soon" className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <Icon name="cart" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </a>
            <button className="lg:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Icon name={isMenuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md">
            <nav className="flex flex-col space-y-2 p-4">
              {navLinks.map((link) => (
                <a key={link} href="/coming-soon" className="text-gray-600 hover:text-blue-600 transition duration-300 p-2 rounded hover:bg-gray-100">
                  {link}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;