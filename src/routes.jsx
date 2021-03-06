import React, {Component} from 'react';
import { Provider } from 'react-redux'
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import {Switch} from 'react-router';
import Home from './containers/Home';
import About from './containers/About';
import Sample from './containers/Sample';
import SignIn from './containers/SignIn';
import Registration from './containers/Registration';
import Admin from './containers/Admin';
import Account from './containers/Account';
import Information from './containers/AccountPersonalData';
import Advertisements from './components/AccountComponents/AccountAdvertisements';
import Messages from './components/AccountComponents/AccountMessages';
import NewAdvertisements from './containers/NewAdvertisement';
import UpdateAccount from './containers/AccountUpdate';
import DeleteAccount from './components/AccountComponents/AccountDelete';
import TermsOfAdvertisement from './components/AccountComponents/AccountTermsOfAdvertisement';
import Store from './store'

window.state = Store;



class Routes extends Component{
  render() {
    return(
    <Router>
      <Provider key={module.hot ? Date.now() : Store} store={Store}>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/sample" component={Sample}/>
            <Route path="/sign-in" component={SignIn}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/admin" component={Admin}/>
            <Account path="/account" component={Account} history={history}>
              <Route path="/account/information" component={Information}/>
              <Route path="/account/advertisements" component={Advertisements}/>
              <Route path="/account/messages" component={Messages}/>
              <Route path="/account/update" component={UpdateAccount}/>
              <Route path="/account/delete" component={DeleteAccount}/>
              <Route path="/account/termsOfAdvertisement" component={TermsOfAdvertisement}/>
            </Account>
            <Route path="/new-advertisement" component={NewAdvertisements}/>
          </Switch>
        </div>
      </Provider>
    </Router>
    );
  }
}

export default Routes;
