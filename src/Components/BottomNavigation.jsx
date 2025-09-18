import React from 'react';
import { Search, ShoppingCart } from 'lucide-react';

const BottomNavigation = ({ activeTab, setActiveTab, totalItems }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex-1 py-3 flex flex-col items-center ${
            activeTab === 'home' ? 'text-orange-500' : 'text-gray-600'
          }`}
        >
          <Search className="w-6 h-6 mb-1" />
          <span className="text-xs">Home</span>
        </button>
        
        <button
          onClick={() => setActiveTab('cart')}
          className={`flex-1 py-3 flex flex-col items-center relative ${
            activeTab === 'cart' ? 'text-orange-500' : 'text-gray-600'
          }`}
        >
          <ShoppingCart className="w-6 h-6 mb-1" />
          <span className="text-xs">Cart</span>
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;