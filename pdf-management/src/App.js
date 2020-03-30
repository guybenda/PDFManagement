import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Report from './components/Report';
import NotFound from './components/NotFound';

function App() {
	return (
		<>
			<Switch>
				<Route path='/form/:formID' component={Report} />
				<Route path='*'>
					<NotFound />
				</Route>
			</Switch>
		</>
	);
}

export default App;
