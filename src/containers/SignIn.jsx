import React from 'react';
import Navigation from '../components/Navigation';
import '../../node_modules/normalize.css/normalize.css';
import 'styles/base/_main.sass'  // Global styles
import 'styles/base/_common.sass'  // Global styles
import Style from './home.sass'  // Css-module styles

const SignIn = () => (
  <div>
    <Navigation/>
    <div className={Style.background}>
      <p className={Style.margin}>hello</p>
    </div>
  </div>
);

export default SignIn;
