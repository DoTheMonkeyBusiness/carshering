import React, {Component} from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../../node_modules/normalize.css/normalize.css';
import Grid from '@material-ui/core/Grid';
import 'styles/base/_main.sass'  // Global styles
import 'styles/base/_common.sass'  // Global styles
import AccountContent from '../components/AccountContent';

class Account extends Component {

render() {

  return(
  <div>
    <Navigation/>
    <AccountContent/>
    <Footer/>
  </div>
  );
}
}
export default Account;
