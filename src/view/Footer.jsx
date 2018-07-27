import React from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../../node_modules/normalize.css/normalize.css';
import label from '../images/labe.png';
import "styles/base/_main.sass"; // Global styles
import "styles/base/_common.sass";  // Global styles
import Style from "./footer.sass";  // Css-module styles
import Icon from '@material-ui/icons/triporigin';
import theme from './Theme';
const Footer = () => (
  <div>
    <MuiThemeProvider theme={theme}>
  <div className={Style.footer}>

    <Grid container={true}>

      <Grid container>
        <Grid item xs={9}><img className={Style.image_padding} src={label}/></Grid>
        <Grid item xs={3}>
        <Grid container direction="column" justify="flex-end">
          <Grid item xs={12} className={Style.footer_padding}><Icon color="secondary"/><a href="https://github.com/DoTheMonkeyBusiness/carshering" className={Style.footer_href}>my github</a></Grid>
          <br/>
          <Grid item xs={12}><Icon color="secondary" /><a href="https://vk.com/maksim.nasalevich" className={Style.footer_href}> my vk</a></Grid>
          <br/>
          <Grid item xs={12}><Icon color="secondary" /><a href="https://www.linkedin.com/in/максим-насалевич-5aab22167" className={Style.footer_href}> my LinkedIn</a></Grid>
        </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
    </MuiThemeProvider>
  </div>
);

export default Footer;
