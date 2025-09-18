import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const MenuItemCard = ({ item, restaurant, cart, addToCart, removeFromCart }) => {
  const cartItem = cart.find(cartItem => cartItem.id === item.id);

  // state for popup modal
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Card */}
      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
        <div className="flex items-center">
          {/* Clickable Image */}
          <img
            src={item.image}
            alt={item.name}
            onClick={() => setIsOpen(true)}
            className="w-12 h-12 rounded-lg object-cover mr-3 cursor-pointer hover:scale-105 transition-transform"
          />
          <div>
            <h4 className="font-medium">{item.name}</h4>
            <p className="text-orange-600 font-bold">₹{item.price}</p>
          </div>
        </div>

        <div className="flex items-center">
          {cartItem ? (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => removeFromCart(item.id)}
                className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold">{cartItem.quantity}</span>
              <button
                onClick={() => addToCart(item, restaurant.name)}
                className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(item, restaurant.name)}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Add
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>

            {/* Large Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg"
            />

            {/* Item Info */}
            <h2 className="mt-4 text-xl font-bold">{item.name}</h2>
            <p className="text-gray-600 text-lg font-semibold">₹{item.price}</p>

            {/* Add / Remove Buttons in Modal */}
            <div className="mt-4 flex items-center justify-between">
              {cartItem ? (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="font-bold text-lg">{cartItem.quantity}</span>
                  <button
                    onClick={() => addToCart(item, restaurant.name)}
                    className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(item, restaurant.name)}
                  className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuItemCard;
