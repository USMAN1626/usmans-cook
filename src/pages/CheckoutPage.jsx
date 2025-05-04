import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { calculateTotal } from "../utils/ calculateTotal";
import { isTimeValid } from '../utils/timeValidator';

function CheckoutPage() {
  const location = useLocation();
  const cart = location.state?.cart || [];
  const [address, setAddress] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');

  const total = calculateTotal(cart);

  const handleSubmit = () => {
    if (!isTimeValid(deliveryTime)) {
      alert("Delivery time must be at least 5 hours from now.");
      return;
    }
    alert(`Order placed successfully to ${address}. Total: ${total}`);
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-heading">Checkout</h2>

      <ul className="order-summary">
        {cart.map(item => (
          <li key={item.id}>
            {item.name} x {item.personCount} persons
          </li>
        ))}
      </ul>

      <p className="checkout-total">Total: Rs {total}</p>

      <input
        type="text"
        placeholder="Delivery Address"
        className="checkout-input"
        onChange={(e) => setAddress(e.target.value)}
      />

      <input
        type="datetime-local"
        className="checkout-input"
        onChange={(e) => setDeliveryTime(e.target.value)}
      />

      <button onClick={handleSubmit} className="checkout-button">
        Confirm Order
      </button>
    </div>
  );
}

export default CheckoutPage;
