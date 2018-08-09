import React, {Component} from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../../node_modules/normalize.css/normalize.css';
// import Grid from '@material-ui/core/Grid';
import 'styles/base/_main.sass'  // Global styles
import 'styles/base/_common.sass'  // Global styles
import AccountContent from '../components/AccountContent';
import {getUser} from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Account extends Component {

render() {

  console.log('deda',this.props);
  return(
  <div>
    <Navigation/>
    <AccountContent person={this.props.person} children={this.props.children} getUser={this.props.getUser}/>
    <Footer/>
  </div>
  );
}
}

const mapStateToProps = (State) => {
  return {
    person: State.usersReducer.users[localStorage.getItem('auth')]
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: bindActionCreators(getUser, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
