import React, {useContext} from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Create from './pages/Create/Create';
import Settings from './pages/Settings/Settings';
import DetailPost from './components/DetailPost/DetailPost';
import {Context} from './context/Context'

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/register">
              {user ? <Home /> : <Signup />}
          </Route>
          <Route path="/login">
              {user ? <Home />: <Login />}
          </Route>
          <Route path="/create">
            {user ? <Create />: <Signup />}
          </Route>
          <Route path="/settings">
            {user ? <Settings /> : <Signup />}
          </Route>
          <Route path="/post/:postId">
              <DetailPost />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
