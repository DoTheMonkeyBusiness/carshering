import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../../node_modules/normalize.css/normalize.css';
import Grid from '@material-ui/core/Grid';
import 'styles/base/_main.sass'  // Global styles
import 'styles/base/_common.sass'  // Global styles
import Style from './home.sass'  // Css-module styles



const Home = () => (
  <div>
    <Navigation/>
    <Grid container={true}>
      <Grid item xs={12}>
    <div className={Style.background}>
      <p className={Style.margin}>hello</p>
    </div>
      </Grid>
    </Grid>
    <Footer/>
  </div>
);

export default Home;
