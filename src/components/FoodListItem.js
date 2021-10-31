import React, { useState } from "react";

const FoodListItem = ({ food }) => {
  const [turtlesList, setTurtlesList] = useState(null);

  const GQL_API = `https:obscure-refuge-06548.herokuapp.com/`; // `http://localhost:3030/`; // graphql api
  const GQL_QUERY = `
    query($id: ID!){
      patient(id: $id){
        doctors{
          id
          name
        }
      }
    }`;

  const handleLoadTurtles = () => {
    const variables = { id: food.id };
    fetch(GQL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GQL_QUERY,
        variables,
      }),
    })
      .then((response) => response.json())
      .then((result) => setTurtlesList(result.data.patient.doctors));
  };

  return (
    <div>
      <a href="#" onClick={handleLoadTurtles}>
        {food.name}
      </a>
      {turtlesList &&
        turtlesList.map((turtle) => {
          return <div key={turtle.id}>{turtle.name}</div>;
        })}
    </div>
  );
};

export default FoodListItem;
