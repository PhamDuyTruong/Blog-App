import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
