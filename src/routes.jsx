import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './view/Home';
import About from './view/About';
import Sample from './view/Sample';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/sample" component={Sample}/>
    </div>
  </Router>
);

export default Routes;
