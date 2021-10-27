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
                <Link to="/doctors">Doctors</Link>
              </li>
              <li>
                <Link to="/patients">Patients</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/doctors">
              <DoctorsList />
            </Route>
            <Route path="/patients">
              <PatientsList />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
