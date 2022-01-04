import CovidWorldwide from "./CovidWorldwide";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Navbar from "./Navbar";
import CountryChart from "./CountryChart";
import Contact from "./Contact";


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>

        <Route exact path="/">
          <CovidWorldwide></CovidWorldwide>
        </Route>

        <Route exact path="/chart">
          <CountryChart></CountryChart>
        </Route>

        <Route exact path="/contact">
          <Contact></Contact>
        </Route>

      </Switch>
      
    </Router>
    
  );
}

export default App;
