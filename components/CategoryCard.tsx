import React from 'react';
import type { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="relative rounded-lg overflow-hidden group h-80 shadow-lg transition-all duration-300 hover:ring-4 hover:ring-blue-500/50">
      <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/80"></div>
      <div className="absolute inset-0 flex items-end justify-start p-6">
        <h3 className="text-white text-2xl font-bold tracking-wider transform transition-transform duration-300 group-hover:-translate-y-2">{category.name}</h3>
      </div>
      <a href="/coming-soon" className="absolute inset-0" aria-label={`Shop ${category.name}`}></a>
    </div>
  );
};

export default CategoryCard;