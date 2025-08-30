import React from 'react';
import Icon from './Icon';

const ComingSoon: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow bg-gray-50 text-center px-6">
      <div className="max-w-md">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-600 mb-4">
          Coming Soon!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          We're working hard to bring this feature to life. Please check back later!
        </p>
        <a 
          href="/" 
          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl"
        >
          <Icon name="home" className="w-5 h-5 mr-2" />
          <span>Go Back Home</span>
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;