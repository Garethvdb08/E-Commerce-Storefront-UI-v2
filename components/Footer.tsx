import React from 'react';
import Icon from './Icon';

const Footer: React.FC = () => {
  const socialIcons = ['facebook', 'twitter', 'instagram', 'linkedin'];
  const footerLinks = {
    'Shop': ['Living Room', 'Bedroom', 'Office', 'Dining'],
    'About': ['Our Story', 'Careers', 'Press', 'Sustainability'],
    'Support': ['Contact Us', 'FAQ', 'Shipping & Returns', 'Track Order'],
  };

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="text-3xl font-bold text-white mb-4 inline-block">Furni.</a>
            <p className="text-gray-400 mb-6">High-quality furniture for the modern home.</p>
            <div className="flex space-x-4">
              {socialIcons.map(icon => (
                <a key={icon} href="/coming-soon" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                  <Icon name={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">{title}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a href="/coming-soon" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1 inline-block">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Furni. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;