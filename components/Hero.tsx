import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center animate-ken-burns"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-shadow-lg">
          Design Your Perfect Space
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto text-gray-200 text-shadow">
          Discover stylish, high-quality furniture that transforms your house
          into a home.
        </p>
        <a
          href="/coming-soon"
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full text-lg md:text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
