import React, {Component} from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../../node_modules/normalize.css/normalize.css';
// import Grid from '@material-ui/core/Grid';
import 'styles/base/_main.sass'  // Global styles
import 'styles/base/_common.sass'  // Global styles
import AccountContent from './AccountContent';
import {updateDriversLicense} from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {DriversLicenseContext} from '../context';


class Account extends Component {
  constructor(){
    super();
    // this.state = {
    //   updateDriversLicense: this.props.updateDriversLicense
    // };
  }

render() {

  console.log('deda',this.props);
  console.log('deddeddea');
  return(
  <div>
    <Navigation/>
    <DriversLicenseContext.Provider value={this.props.updateDriversLicense}><AccountContent person={this.props.person} children={this.props.children} updateDriversLicense={this.props.updateDriversLicense}/></DriversLicenseContext.Provider>
    <Footer/>
  </div>
  );
}
}

const mapStateToProps = (State) => {
  return {
    person: State.usersReducer.users[localStorage.getItem('auth')]
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateDriversLicense: bindActionCreators(updateDriversLicense, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
