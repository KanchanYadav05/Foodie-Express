import React from 'react';
import { categories } from '../Components/data/MockData';

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex-shrink-0 flex flex-col items-center p-3 rounded-lg border-2 ${
              selectedCategory === category.id 
                ? 'border-orange-500 bg-orange-50' 
                : 'border-gray-200'
            }`}
          >
            <span className="text-2xl mb-1">{category.icon}</span>
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;