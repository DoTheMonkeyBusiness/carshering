import React, {Component} from 'react';
import '../../node_modules/normalize.css/normalize.css';
import 'styles/base/_main.sass'; // Global styles
import 'styles/base/_common.sass';  // Global styles
import Style from './registration.sass';  // Css-module styles
import Grid from '@material-ui/core/Grid';
import theme from '../theme/Theme';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addNewUser} from '../actions';
import SignInForm from '../components/SignInForm'

class Registration extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <div className={Style.registration_area}>
            <Grid container={true}>
              <h1 className={Style.headerStyle}>Sign in in the system</h1>
              <Grid container justify="center">
                <div className={Style.registration_form}>
                  <SignInForm users={this.props.users}/>
                </div>
              </Grid>
            </Grid>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}


const mapStateToProps = (State) => {
  return {
    users: State.usersReducer.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addNewUser: bindActionCreators(addNewUser, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
