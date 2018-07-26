import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './view/Home';
import About from './view/About';
import Sample from './view/Sample';
import SignIn from './view/SignIn';
import Registration from './view/Registration';
import Admin from './view/Admin';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/sample" component={Sample}/>
      <Route path="/sign-in" component={SignIn}/>
      <Route path="/registration" component={Registration}/>
      <Route path="/admin" component={Admin}/>
    </div>
  </Router>
);

export default Routes;
