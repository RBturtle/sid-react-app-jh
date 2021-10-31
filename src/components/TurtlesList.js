import React, { Component } from "react";
import TurtleListItem from "./TurtleListItem";
import AddTurtle from "./AddTurtle";

export default class TurtlesList extends Component {
  constructor(props) {
    super(props);

    this.state = { turtles: [] };
  }

  componentDidMount() {
    // fetch("http://localhost:4000/v1/turtles")
    fetch(`https://salty-fortress-39510.herokuapp.com/v1/doctors`) // turtle exercise node
      .then((response) => response.json())
      .then((result) => this.setState({ turtles: result }));
  }

  handleDeleteTurtle(id) {
    const newTurtlesList = this.state.turtles.filter(
      (turtle) => turtle.id !== id
    );

    this.setState({ turtles: newTurtlesList });
  }

  renderTurtles() {
    return this.state.turtles.map((turtle) => (
      <TurtleListItem
        key={turtle.id}
        id={turtle.id}
        name={turtle.name}
        onDeleteTurtle={(id) => this.handleDeleteTurtle(id)}
      ></TurtleListItem>
    ));
  }

  handleAddTurtle(name) {
    const newTurtle = { id: Date.now().toString(), name: name };
    const newTurtlesList = [...this.state.turtles, newTurtle];

    this.setState({ turtles: newTurtlesList });
  }

  render() {
    return (
      <>
        <h2>Turtle_Species List</h2>
        <AddTurtle onAddTurtle={(name) => this.handleAddTurtle(name)} />
        {this.renderTurtles()}
      </>
    );
  }
}
