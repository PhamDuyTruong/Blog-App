import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Create from './pages/Create/Create';
import Settings from './pages/Settings/Settings';
import DetailPost from './components/DetailPost/DetailPost';

function App() {
  const currentUser = false;
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/register">
              {currentUser ? <Home /> : <Signup />}
          </Route>
          <Route path="/login">
              {currentUser ? <Home />: <Login />}
          </Route>
          <Route path="/create">
            {currentUser ? <Create />: <Signup />}
          </Route>
          <Route path="/settings">
            {currentUser ? <Settings /> : <Signup />}
          </Route>
          <Route path="/post/:postId">
              <DetailPost />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
