import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../../node_modules/normalize.css/normalize.css';
import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import Style from "./footer.sass"  // Css-module styles

const Footer = () => (
  <div className={Style.footer}>
    <p>abc</p>
  </div>
);

export default Footer;
