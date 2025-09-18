import React from 'react';
import { Search, MapPin, User } from 'lucide-react';

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="bg-orange-500 text-white p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">FoodieExpress</h1>
          <div className="flex items-center mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">Deliver to Home</span>
          </div>
        </div>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-orange-500" />
        </div>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search for restaurants or food"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 pl-10 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
      </div>
    </div>
  );
};

export default Header;