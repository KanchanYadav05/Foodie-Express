import React from 'react';

const FloatingCartButton = ({ totalItems, totalAmount, setActiveTab }) => {
  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4">
      <button
        onClick={() => setActiveTab('cart')}
        className="w-full bg-orange-500 text-white py-3 rounded-lg flex justify-between items-center px-4 shadow-lg"
      >
        <span className="font-bold">{totalItems} items | ₹{totalAmount}</span>
        <span className="font-bold">View Cart</span>
      </button>
    </div>
  );
};

export default FloatingCartButton;