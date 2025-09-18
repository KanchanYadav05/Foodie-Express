// import React from 'react';

const OrderSummary = ({ totalAmount, totalItems }) => {
  const deliveryFee = 40;
  const tax = Math.round(totalAmount * 0.05);
  const grandTotal = totalAmount + deliveryFee + tax;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="font-bold text-lg mb-4">Order Summary</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal ({totalItems} items)</span>
          <span>₹{totalAmount}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>₹{deliveryFee}</span>
        </div>
        <div className="flex justify-between">
          <span>GST & Restaurant Charges</span>
          <span>₹{tax}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{grandTotal}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;