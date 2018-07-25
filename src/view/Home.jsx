import React from 'react';
import Navigation from './Navigation';
import '../../node_modules/normalize.css/normalize.css';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import Style from "./home.sass"  // Css-module styles

const Home = () => (
  <div>
    <Navigation/>
    <div className={Style.background}>
    </div>
  </div>
);

export default Home;
