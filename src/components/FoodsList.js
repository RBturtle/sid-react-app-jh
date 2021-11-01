import React, { useState, useEffect } from "react";
import FoodListItem from "./FoodListItem";

const FoodsList = () => {
  const [foods, setFoods] = useState(null);

  const fetchFoods = () => {
    // fetch("http://localhost:4000/v1/foods")
    // fetch(`https://salty-fortress-39510.herokuapp.com/v1/patients`) // doctor exercise node
    fetch(`https://ghostly-witch-92778.herokuapp.com/sa/foods`)
      .then((response) => response.json())
      .then((result) => setFoods(result));
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <>
      <h2>Food Stock List</h2>
      {foods &&
        foods.map((food) => (
          <FoodListItem key={food.id} food={food} />
        ))}
    </>
  );
};

export default FoodsList;
