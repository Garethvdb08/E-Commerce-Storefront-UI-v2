import React from 'react';
import Hero from './Hero';
import ProductCard from './ProductCard';
import CategoryCard from './CategoryCard';
import { products, categories } from '../constants';
import type { Product, Category } from '../types';
import Icon from './Icon';

const Home: React.FC = () => {
  return (
    <>
      <Hero />

      {/* Featured Products Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2">Featured Products</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-base md:text-lg">Discover our handpicked selection of premium quality items that are trending right now.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2">Shop by Category</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-base md:text-lg">Whatever your style, we've got the perfect pieces to complete your space.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category: Category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Stay in the Loop
              </span>
            </h3>
            <p className="text-gray-400 mt-3 max-w-2xl text-base md:text-lg">Subscribe to our newsletter for the latest updates, exclusive deals, and design inspiration.</p>
          </div>
          <form className="w-full max-w-lg" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row items-center gap-2 bg-white/10 rounded-full p-2 backdrop-blur-sm">
              <input 
                className="w-full sm:w-auto flex-grow bg-transparent py-2 px-4 text-white placeholder-gray-400 leading-tight focus:outline-none focus:ring-0 text-center sm:text-left" 
                type="email" 
                placeholder="Enter your email" 
                aria-label="Email for newsletter"
              />
              <a 
                href="/coming-soon"
                className="group w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-5 rounded-full transition duration-300 ease-in-out flex items-center justify-center no-underline" 
              >
                <span>Subscribe</span>
                <Icon name="arrow-right" className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;