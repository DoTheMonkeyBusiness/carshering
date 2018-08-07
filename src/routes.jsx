import React from 'react';
import { Provider } from 'react-redux'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Sample from './containers/Sample';
import SignIn from './containers/SignIn';
import Registration from './containers/Registration';
import Admin from './containers/Admin';
import Account from './containers/Account';
import Information from './components/AccountInformation';
import Store from './store'
window.state = Store;


const Routes = () => (
	<Router>
    <Provider key={ module.hot ? Date.now() : Store} store={Store}>
		<div>
			<Route exact path="/" component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/sample" component={Sample}/>
			<Route path="/sign-in" component={SignIn}/>
			<Route path="/registration" component={Registration}/>
			<Route path="/admin" component={Admin}/>
			<Route path="/account" component={Account}/>
      <Route path="/account/:information" component={Information}/>
		</div>
    </Provider>
	</Router>
);

export default Routes;
