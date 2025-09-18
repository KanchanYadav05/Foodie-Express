import React from 'react';
import { Star, Clock, Heart } from 'lucide-react';
import MenuItemCard from './MenuItemCard';

const RestaurantCard = ({ restaurant, favorites, toggleFavorite, cart, addToCart, removeFromCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img 
  src={restaurant.image} 
  alt={restaurant.name}
  className="w-300 h-100 sm:h-200 object-cover rounded-lg"
/>

        <button
          onClick={() => toggleFavorite(restaurant.id)}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center"
        >
          <Heart 
            className={`w-5 h-5 ${
              favorites.includes(restaurant.id) 
                ? 'text-red-500 fill-current' 
                : 'text-gray-400'
            }`} 
          />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold">{restaurant.name}</h3>
        <p className="text-gray-600 text-sm">{restaurant.cuisine}</p>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
            <span className="text-sm font-medium">{restaurant.rating}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{restaurant.time}</span>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {restaurant.items.map(item => (
            <MenuItemCard 
              key={item.id}
              item={item}
              restaurant={restaurant}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;