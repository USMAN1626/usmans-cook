import React from 'react';
import FoodItem from './FoodItem';

function FoodList({ foodItems, cart, setCart }) {
  return (
    <div className="grid">
      {foodItems.map(item => (
        <FoodItem key={item.id} item={item} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
}

export default FoodList;
