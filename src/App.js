import logo from "./logo.svg";
import "./App.css";
import DoctorsList from "./components/DoctorsList";
import PatientsList from "./components/PatientsList";
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
              <DoctorsList />
            </Route>
            <Route path="/food_stock">
              <PatientsList />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
