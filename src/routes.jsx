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
import Store from './store/index'

const Routes = () => (
	<Router>
    <Provider key={ module.hot ? Date.now() : store} store={Store}>
		<div>
			<Route exact path="/" component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/sample" component={Sample}/>
			<Route path="/sign-in" component={SignIn}/>
			<Route path="/registration" component={Registration}/>
			<Route path="/admin" component={Admin}/>
			<Route path="/account" component={Account}/>
		</div>
    </Provider>
	</Router>
);

export default Routes;
