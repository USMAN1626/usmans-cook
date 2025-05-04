import React, { useState } from 'react';
import FoodList from '../components/FoodList';
import foodData from '../data/foodData.json';

function Home() {
  const [cart, setCart] = useState([]);

  return (
    <div className="home-container">
      <h1 className="heading">Today's Menu</h1>
      <FoodList foodItems={foodData} cart={cart} setCart={setCart} />
    </div>
  );
}

export default Home;
