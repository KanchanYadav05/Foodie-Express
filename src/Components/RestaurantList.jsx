import React from 'react';
import { Filter } from 'lucide-react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ restaurants, favorites, toggleFavorite, cart, addToCart, removeFromCart }) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Restaurants</h2>
        <Filter className="w-5 h-5 text-gray-600" />
      </div>
      
      <div className="space-y-4">
        {restaurants.map(restaurant => (
          <RestaurantCard 
            key={restaurant.id}
            restaurant={restaurant}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;