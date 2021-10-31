import logo from "./logo.svg";
import "./App.css";
import TurtlesList from "./components/TurtlesList";
import FoodsList from "./components/FoodsList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App(props) {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/turtle_species">Turtle_Species</Link>
              </li>
              <li>
                <Link to="/food_stock">Food_Stock</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/turtle_species">
              <TurtlesList />
            </Route>
            <Route path="/food_stock">
              <FoodsList />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
