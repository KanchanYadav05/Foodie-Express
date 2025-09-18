import React from 'react';
import { ShoppingCart } from 'lucide-react';
import CartItem from './../CartItem';
import OrderSummary from './../OrderSummary';

const CartScreen = ({ cart, addToCart, removeFromCart, setActiveTab, totalAmount, totalItems }) => {
  return (
    <div className="p-4 pb-20">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      
      
      {cart.length === 0 ? (
        <div className="text-center py-20">
          <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Your cart is empty</p>
          <button
            onClick={() => setActiveTab('home')}
            className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg"
          >
            Browse Restaurants
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cart.map(item => (
              <CartItem 
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>

          <div className="mb-6">
            <OrderSummary totalAmount={totalAmount} totalItems={totalItems} />
          </div>

          <button className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartScreen;