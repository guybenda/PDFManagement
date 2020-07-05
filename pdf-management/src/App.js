import React from 'react';

import { Switch, Route } from 'react-router-dom';

import NotFound from './components/NotFound';
import SearchForm from './components/Search/SearchForm';
import Header from './components/Header';
import ReportFormContainer from './components/ReportFormContainer';

function App() {
	return (
		<>
			<Header
				onSave={()=>{}}
				onPrint={()=>{}}
				mode='edit'
					/>
			<Switch>
				<Route exact path='/' component={SearchForm} />
				<Route path='/form/:id' component={ReportFormContainer} />
				<Route path='*'>
					<NotFound />
				</Route>
			</Switch>
		</>
	);
}

export default App;
