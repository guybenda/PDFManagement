import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Report from './components/Report';
import NotFound from './components/NotFound';

import { reports } from './mockData.js';

function App() {
	return (
		<>
			<Switch>
				<Route path='/report/:reportID' component={Report} exact />
				<Route path='*'>
					<NotFound />
				</Route>
			</Switch>
		</>
	);
}

export default App;
