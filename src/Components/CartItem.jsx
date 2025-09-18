import React from 'react';
import { Plus, Minus } from 'lucide-react';

const CartItem = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="font-bold">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.restaurantName}</p>
          <p className="text-orange-600 font-bold mt-1">₹{item.price} each</p>
        </div>
        <img 
          src={item.image} 
          alt={item.name}
          className="w-16 h-16 rounded-lg object-cover ml-4"
        />
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => removeFromCart(item.id)}
            className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="font-bold text-lg">{item.quantity}</span>
          <button
            onClick={() => addToCart(item, item.restaurantName)}
            className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <p className="font-bold text-lg">₹{item.price * item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;