import React, { Suspense, Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import './App.scss';

import LottieUtil from './Shared/Utilities/Functions/lottieFunction';
import Loader from './Shared/Images/Animations/Fallback_Loader.json';
import LandingPage from './Components/LandingPage';
import Dashboard from './Components/Dashboard';

class App extends Component {
	render() {
		return (
			<Suspense fallback={<LottieUtil image={Loader} />}>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={LandingPage} />
						<Route path='/dashboard' component={Dashboard} />
					</Switch>
				</BrowserRouter>
			</Suspense>
		);
	}
}

export default withRouter(App);
