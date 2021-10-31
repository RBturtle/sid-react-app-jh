import React, { useState } from "react";
import PropTypes from "prop-types";
import TurtleDetails from "./TurtleDetails";

function TurtleListItem({ id, name, onDeleteTurtle }) {
  const [details, setDetails] = useState(null);

  function handleLoadDetails() {
    // fetch(`http://localhost:5000/v1/turtle/${id}`)
    fetch(`https://desolate-woodland-83561.herokuapp.com/v1/turtle_species/${id}`) // turtle rest info
      .then((response) => response.json())
      .then((response) => setDetails(response));
  }

  function handleDeleteTurtle() {
    onDeleteTurtle(id);
  }

  return (
    <div>
      <a href="#" onClick={handleLoadDetails}>
        {name}
      </a>
      <button onClick={handleDeleteTurtle}>X</button>
      {details && <TurtleDetails {...details} />}
    </div>
  );
}

TurtleListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TurtleListItem;
