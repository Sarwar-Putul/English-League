import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./Componants/Home/Home";
import NotFound from './Componants/NotFound/NotFound';
import TeamDetails from "./Componants/TeamDetails/TeamDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/team/:teamId" component={TeamDetails}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
