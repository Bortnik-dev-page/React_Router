import React from "react";
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from "./Pages/Main";
import Description from "./Pages/Description";
import Navbar from './Pages/Navbar';
import Lessons from './Pages/Lessons';


const App = () => (
  <Router>
    <Navbar />
    <Switch className="section">
      <Route exact path="/" component={Main} />
      <Route exact path="/description" component={Description} />
      <Route exact path="/lessons" component={Lessons} />
    </Switch>
  </Router>
)

export default App;