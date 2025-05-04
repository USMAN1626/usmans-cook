import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FoodItem({ item, cart, setCart }) {
  const [persons, setPersons] = useState(1);
  const navigate = useNavigate();

  const handleOrder = () => {
    const updatedCart = [...cart, { ...item, personCount: persons }];
    setCart(updatedCart);
    navigate('/checkout', { state: { cart: updatedCart } });
  };

  return (
    <div className="food-item-card">
      <img src={item.image} alt={item.name} className="food-image" />
      <h3 className="food-name">{item.name}</h3>
      <p className="food-info ">Rs: {item.price } | Serves: {item.serves} person(s)</p>
      <input
        type="number"
        min="1"
        value={persons}
        onChange={(e) => setPersons(parseInt(e.target.value))}
        className="person-input"
        placeholder="Number of persons"
      />
      <button onClick={handleOrder} className="order-button">
        Order Now
      </button>
    </div>
  );
}

export default FoodItem;
