import React from "react";

const DoctorDetails = ({ scientific_name, family_ancestor, interesting_fact, lived_year, edible_food }) => {
  const { edible_1, edible_2, edible_3, edible_4 } = edible_food;

  return (
    <>
      <h5>scientific_name: {scientific_name}</h5>
      <h5>family_ancestor: {family_ancestor}</h5>
      <h5>interesting_fact: {interesting_fact}</h5>
      <h5>lived year: {lived_year}</h5>
      <h5>
        edible_foods: {edible_1}, {edible_2}, {edible_3} {edible_4}
      </h5>
    </>
  );
};

export default DoctorDetails;
