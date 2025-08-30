import React from 'react';
import type { Product } from '../types';
import Icon from './Icon';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const tagColor = {
    New: 'bg-blue-500',
    Sale: 'bg-red-500',
    Featured: 'bg-purple-600',
  };

  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
        {product.tag && (
          <span className={`absolute top-4 left-4 text-xs font-bold text-white py-1 px-3 rounded-full z-10 ${tagColor[product.tag]}`}>
            {product.tag}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <a href="/coming-soon" className="w-full bg-blue-600 text-white rounded-full py-3 transition-colors duration-300 hover:bg-blue-700 flex items-center justify-center space-x-2 font-semibold no-underline">
            <Icon name="cart" className="w-5 h-5" />
            <span>Add to Cart</span>
          </a>
        </div>
      </div>
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-blue-600 font-medium mt-1">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;