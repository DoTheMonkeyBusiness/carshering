import React, {Component} from 'react';
import '../../node_modules/normalize.css/normalize.css';
import "styles/base/_main.sass"; // Global styles
import "styles/base/_common.sass";  // Global styles
import Style from "./registration.sass";  // Css-module styles
import Grid from '@material-ui/core/Grid';
import theme from './Theme';
import {MuiThemeProvider} from '@material-ui/core/styles';
import RegistrationForm from './RegistrationForm';

class Registration extends Component {

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <div className={Style.registration_area}>
            <Grid container={true}>
              <h1 className={Style.headerStyle}>Registration in the Carshering system</h1>
              <Grid container justify="center">
                <div className={Style.registration_form}>
                  <RegistrationForm/>
                </div>
              </Grid>
            </Grid>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Registration;
